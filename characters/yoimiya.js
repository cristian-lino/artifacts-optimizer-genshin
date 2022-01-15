const artifact = require("../Artifact");
const character = require("../Character")
const calc = require("../calc")


const level = 90
const ATK_base_weapon = 323

const ATK_base = 510 + ATK_base_weapon
let ATK = 41.3
let ATK_flat = 0

const HP_base = 10164
let HP = 0
let HP_flat = 0

const DEF_base = 615
let DEF = 0
let DEF_flat = 0

let EM = 0
let ER = 0
let HB = 0

let crit_rate = 24.2
let crit_damage = 50
let elemental_bonus = 0
const skill_E = 158.79
const skill = 59.94*skill_E/100


const mob_level = 95
const mob_resistance = 20

const weapon_passive = true
const vaporize = true
const bennett = true
const zhongli = false
const rosaria = false
const kazuha = true
const albedo = false
const catalyst_buff = false
const ritual = false
const res_pyro = true
const res_geo = false
const res_cryo = false

let DEF_mob = (level + 100)/(level + mob_level + 200)
let RES_mob = (100 - mob_resistance)/100
HP += 100
ATK += 100
DEF += 100
ER += 100
crit_damage += 100
elemental_bonus += 100

if (weapon_passive){
    elemental_bonus += 70
}

if (catalyst_buff){
    ATK += 48
}

if (ritual){
    ATK += 20
}

if (albedo) {
    EM += 125
}

if (bennett){
    base = 191 + 510
    ATK_flat += base*1.39
}

if (rosaria){
    crit_rate += 15
}

if (kazuha){
    elemental_bonus += 0.04*792
    let debuff = 0.4
    if (RES_mob < 1){
        let exced = 1-RES_mob
        if (exced >= debuff){
            RES_mob += debuff
        }
        else{
            debuff -= exced
            RES_mob = 1
            RES_mob += debuff/2
        }
    }
    else{
        RES_mob += debuff/2
    }
}

if (zhongli){
    //elemental_bonus += 35
    ATK += 20
    let debuff = 0.2
    if (RES_mob < 1){
        let exced = 1-RES_mob
        if (exced >= debuff){
            RES_mob += debuff
        }
        else{
            debuff -= exced
            RES_mob = 1
            RES_mob += debuff/2
        }
    }
    else{
        RES_mob += debuff/2
    }
}

if (res_pyro){
    ATK += 25
}

if (res_geo){
    elemental_bonus += 15
}

if (res_cryo){
    crit_rate += 15
}




//------------------------------------------------------------------------------------------------------------

function best_combination(combinations){
    let best = new character.Character("PYRO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
    best.setArtifacts(combinations[0])
    getAll_ArtifactStats(best)
    best.calcAllDMG("ATK")
    if (vaporize){
        best.DMG.dmg *= calc.vapMeltBonus(best.EM, 0)
        best.DMG.crit *= calc.vapMeltBonus(best.EM, 0)
        best.DMG.average *= calc.vapMeltBonus(best.EM, 0)
    }
    for (let i = 1; i < combinations.length; i++) {
        let combination_i = combinations[i]
        let char = new character.Character("PYRO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
        char.setArtifacts(combination_i)
        getAll_ArtifactStats(char)
        char.calcAllDMG("ATK")
        if (vaporize){
            char.DMG.dmg *= calc.vapMeltBonus(char.EM, 0)
            char.DMG.crit *= calc.vapMeltBonus(char.EM, 0)
            char.DMG.average *= calc.vapMeltBonus(char.EM, 0)
        }
        if (char.DMG.average > best.DMG.average) {
            best = new character.Character("PYRO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
            best.setArtifacts(combination_i)
            getAll_ArtifactStats(best)
            best.calcAllDMG("ATK")
            if (vaporize){
                best.DMG.dmg *= calc.vapMeltBonus(best.EM, 0)
                best.DMG.crit *= calc.vapMeltBonus(best.EM, 0)
                best.DMG.average *= calc.vapMeltBonus(best.EM, 0)
            }
        }
    }
    return best
}


function getAll_ArtifactStats(character){
        let sets = []
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

        character.getArtifactStat()
        sets.push(character.flower.set)
        sets.push(character.feather.set)
        sets.push(character.sand.set)
        sets.push(character.goblet.set)
        sets.push(character.circlet.set)

        if (countOccurrences(sets, "MILLELITH") >= 2) {
            character.HP += 20
        }
        if (countOccurrences(sets, "ENERGY") >= 2) {
            character.ER += 20
        }
        if (countOccurrences(sets, "GLAD") >= 2) {
            character.ATK += 18
        }
        if (countOccurrences(sets, "PYRO") >= 2) {
            character.elemental_bonus += 15
        }
        if (countOccurrences(sets, "SHIMENA") >= 2) {
            character.ATK += 18
            if (countOccurrences(sets, "SHIMENA") >= 4) {
                character.elemental_bonus += 50
            }
        }
        if (countOccurrences(sets, "WANDERER") >= 2) {
            character.EM += 80
        }
}

let best = best_combination(artifact.combinations)
best.printCombination()

module.exports = {best}