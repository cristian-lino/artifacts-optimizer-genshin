function additional(scale, character, percentage) {
    additionalDmg = dmg(scale, character, percentage)
    additionalDmgCrit = dmgCrit(additionalDmg, character)
    additionalDmgAverage = dmgAverage(additionalDmg, additionalDmgCrit, character)
    character.DMG.dmg += additionalDmg
    character.DMG.crit += additionalDmgCrit
    character.DMG.average += additionalDmgAverage
}

function dmg(scale, character, percentage){
    let Scale_total
    if (scale === "ATK"){
        Scale_total = character.ATK_base * (character.ATK+100)/100 + character.ATK_flat
    }
    if (scale === "DEF"){
       Scale_total = character.DEF_base * (character.DEF+100)/100 + character.DEF_flat
    }
    if (scale === "HP"){
        Scale_total = character.HP_base * (character.HP+100)/100 + character.HP_flat
     }
    return Scale_total * character.skill/100 * percentage/100 * (character.elemental_bonus+100)/100 * character.DEF_mob * character.RES_mob
}

function dmgCrit(DMG, character){
    return DMG * (character.crit_damage+100)/100
}

function dmgAverage(DMG, DMG_CRIT, character){
    if (character.crit_rate >= 100){
        return DMG_CRIT
    }
    return (10*character.crit_rate*DMG_CRIT+10*(100-character.crit_rate)*DMG)/1000
}

function vapMeltBonus(EM, vapbonus){
    let reaction_bonus = vapbonus/100
    let EM_bonus = 2.78*(EM/(EM+1400))
    return 1.5*(1 + reaction_bonus + EM_bonus)
}

module.exports = {dmg, dmgCrit, dmgAverage, vapMeltBonus, additional}