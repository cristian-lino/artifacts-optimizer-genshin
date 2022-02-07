const calc = require("../CalcDamage/calc")


class Character {
    constructor(element, skill, DEF_mob, RES_mob, ATK_base, DEF_base, HP_base, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB) {
        this.flower
        this.feather
        this.sand
        this.goblet
        this.circlet
        this.ATK_base = ATK_base
        this.DEF_base = DEF_base
        this.HP_base = HP_base
        this.element = element
        this.skill = skill
        this.DEF_mob = DEF_mob
        this.RES_mob = RES_mob
        this.DEF = DEF
        this.DEF_flat = DEF_flat
        this.ER = ER
        this.HP = HP
        this.HP_flat = HP_flat
        this.EM = EM
        this.ATK = ATK
        this.ATK_flat = ATK_flat
        this.crit_rate = crit_rate
        this.crit_damage = crit_damage
        this.elemental_bonus = elemental_bonus
        this.HB = HB
        this.DMG
    }

    getHP() {
        return (this.HP_base * (this.HP+100)/100 + this.HP_flat)
    }

    getDEF() {
        return (this.DEF_base * (this.DEF+100)/100 + this.DEF_flat)
    }

    setArtifacts(artifacts) {
        this.flower = artifacts[0]
        this.feather = artifacts[1]
        this.sand = artifacts[2]
        this.goblet = artifacts[3]
        this.circlet = artifacts[4]
    }

    getArtifactStat() {
        this.DEF += this.flower.DEF + this.feather.DEF + this.sand.DEF + this.goblet.DEF + this.circlet.DEF
        this.DEF_flat += this.flower.DEF_flat + this.feather.DEF_flat + this.sand.DEF_flat + this.goblet.DEF_flat + this.circlet.DEF_flat
        this.ER += this.flower.ER + this.feather.ER + this.sand.ER + this.goblet.ER + this.circlet.ER
        this.HB += this.flower.HB + this.feather.HB + this.sand.HB + this.goblet.HB + this.circlet.HB
        this.HP += this.flower.HP + this.feather.HP + this.sand.HP + this.goblet.HP + this.circlet.HP
        this.HP_flat += this.flower.HP_flat + this.feather.HP_flat + this.sand.HP_flat + this.goblet.HP_flat + this.circlet.HP_flat
        this.EM += this.flower.EM + this.feather.EM + this.sand.EM + this.goblet.EM + this.circlet.EM
        this.ATK += this.flower.ATK + this.feather.ATK + this.sand.ATK + this.goblet.ATK + this.circlet.ATK
        this.ATK_flat += this.flower.ATK_flat + this.feather.ATK_flat + this.sand.ATK_flat + this.goblet.ATK_flat + this.circlet.ATK_flat
        this.crit_rate += this.flower.crit_rate + this.feather.crit_rate + this.sand.crit_rate + this.goblet.crit_rate + this.circlet.crit_rate
        this.crit_damage += this.flower.crit_damage + this.feather.crit_damage + this.sand.crit_damage + this.goblet.crit_damage + this.circlet.crit_damage
        if (this.element === this.goblet.elemental_bonus.type){
            this.elemental_bonus += this.goblet.elemental_bonus.value
        }
    }

    calcAllDMG(scale) {
        const DMG = calc.dmg(scale, this, 100)
        const DMG_crit = calc.dmgCrit(DMG, this)
        const DMG_average = calc.dmgAverage(DMG, DMG_crit, this)
        this.DMG = {dmg: DMG, crit: DMG_crit, average: DMG_average}
    }

    printCombination() {
        console.log("HP TOTAL: "+(this.HP_base * (this.HP+100)/100 + this.HP_flat))
        console.log("DEF TOTAL: "+(this.DEF_base * (this.DEF+100)/100 + this.DEF_flat))
        console.log("ATK TOTAL: "+(this.ATK_base * (this.ATK+100)/100 + this.ATK_flat))
        console.log("Critical Rate: "+(this.crit_rate))
        console.log("Critical Damage: "+(this.crit_damage))
        console.log("Elemental BONUS: "+(this.elemental_bonus))
        console.log("Elemental Mastery: "+(this.EM))
        console.log("Energy Recharge: "+(this.ER))
        console.log("")
        console.log("Flower")
        console.log("Set: "+this.flower.set+"  DEF: "+(this.flower.DEF)+"  DEF_flat: "+(this.flower.DEF_flat)+"  ER: "+(this.flower.ER)+"  HP: "+(this.flower.HP)+"  HP_flat: "+(this.flower.HP_flat)+"  EM: "+(this.flower.EM)+"  ATK: "+(this.flower.ATK)+"  ATK_flat: "+(this.flower.ATK_flat)+" crit_rate: "+(this.flower.crit_rate)+"%  crit_damage: "+(this.flower.crit_damage)+"%")
        console.log("")
        console.log("Feather")
        console.log("Set: "+this.feather.set+"  DEF: "+(this.feather.DEF)+"  DEF_flat: "+(this.feather.DEF_flat)+"  ER: "+(this.feather.ER)+"  HP: "+(this.feather.HP)+"  HP_flat: "+(this.feather.HP_flat)+"  EM: "+(this.feather.EM)+"  ATK: "+(this.feather.ATK)+"  ATK_flat: "+(this.feather.ATK_flat)+" crit_rate: "+(this.feather.crit_rate)+"%  crit_damage: "+(this.feather.crit_damage)+"%")
        console.log("")
        console.log("Sand")
        console.log("Set: "+this.sand.set+"  DEF: "+(this.sand.DEF)+"  DEF_flat: "+(this.sand.DEF_flat)+"  ER: "+(this.sand.ER)+"  HP: "+(this.sand.HP)+"  HP_flat: "+(this.sand.HP_flat)+"  EM: "+(this.sand.EM)+"  ATK: "+(this.sand.ATK)+"  ATK_flat: "+(this.sand.ATK_flat)+" crit_rate: "+(this.sand.crit_rate)+"%  crit_damage: "+(this.sand.crit_damage)+"%")
        console.log("")
        console.log("Goblet")
        console.log("Set: "+this.goblet.set+"  DEF: "+(this.goblet.DEF)+"  DEF_flat: "+(this.goblet.DEF_flat)+"  ER: "+(this.goblet.ER)+"  HP: "+(this.goblet.HP)+"  HP_flat: "+(this.goblet.HP_flat)+"  EM: "+(this.goblet.EM)+"  ATK: "+(this.goblet.ATK)+"  ATK_flat: "+(this.goblet.ATK_flat)+" crit_rate: "+(this.goblet.crit_rate)+"%  crit_damage: "+(this.goblet.crit_damage)+"%")
        console.log("")
        console.log("Circlet")
        console.log("Set: "+this.circlet.set+"  DEF: "+(this.circlet.DEF)+"  DEF_flat: "+(this.circlet.DEF_flat)+"  ER: "+(this.circlet.ER)+"  HP: "+(this.circlet.HP)+"  HP_flat: "+(this.circlet.HP_flat)+"  EM: "+(this.circlet.EM)+"  ATK: "+(this.circlet.ATK)+"  ATK_flat: "+(this.circlet.ATK_flat)+" crit_rate: "+(this.circlet.crit_rate)+"%  crit_damage: "+(this.circlet.crit_damage)+"%")
        console.log("")
        console.log("DAMAGE: "+(Math.floor(this.DMG.dmg)))
        console.log("CRIT DAMAGE: "+(Math.floor(this.DMG.crit)))
        console.log("AVERAGE DAMAGE: "+(Math.floor(this.DMG.average)))
    }

}

module.exports = {Character}