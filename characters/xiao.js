const artifact = require("../Artifact");
const character = require("../Character")


const level = 90
const ATK_base_weapon = 674

const ATK_base = 349 + ATK_base_weapon
let ATK = 0
let ATK_flat = 0

const HP_base = 12736
let HP = 0
let HP_flat = 0

const DEF_base = 799
let DEF = 0
let DEF_flat = 0

let EM = 0
let ER = 0
let HB = 0

let crit_rate = 24.2 + 22.1
let crit_damage = 50
let elemental_bonus = 95.2 + 5
const skill = 404

const mob_level = 95
const mob_resistance = 20

const weapon_passive = true
const abyss = true
const bennett = false
const zhongli = true
const rosaria = false
const kazuha = false
const catalyst_buff = false
const ritual = true
const res_pyro = false
const res_geo = true
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
    ATK += 22.4
    elemental_bonus += 12
}

if (catalyst_buff){
    ATK += 48
}

if (abyss){
    crit_rate += 8
    crit_damage += 15
}

if (ritual){
    ATK += 20
}

if (bennett){
    base = 191 + 510
    ATK_flat += base*1.39
}

if (rosaria){
    crit_rate += 15
}

if (kazuha){
    elemental_bonus += 35
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
    let best = new character.Character("ANEMO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
    best.setArtifacts(combinations[0])
    getAll_ArtifactStats(best)
    best.calcAllDMG("ATK")
    for (let i = 1; i < combinations.length; i++) {
        let combination_i = combinations[i]
        let char = new character.Character("ANEMO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
        char.setArtifacts(combination_i)
        getAll_ArtifactStats(char) // extract stats of artifacts to add on character stats 
        char.calcAllDMG("ATK")
        if (char.DMG.average > best.DMG.average) {
            best = new character.Character("ANEMO", skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB)
            best.setArtifacts(combination_i)
            getAll_ArtifactStats(best)
            best.calcAllDMG("ATK")
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
        if (countOccurrences(sets, "VVV") >= 2) {
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