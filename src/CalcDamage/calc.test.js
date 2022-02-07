const calc = require("./calc")
const character = require("../Character/Character")

const char_level = 50
const mob_level =  50
const mob_resistance = 50

let DEF_mob = (char_level + 100)/(char_level + mob_level + 200)
let RES_mob = (100 - mob_resistance)/100

const char = new character.Character(
  element="ANEMO", 
  skill=100, 
  DEF_mob=DEF_mob, 
  RES_mob=RES_mob, 
  ATK_base=1000, 
  DEF_base=0, 
  HP_base=0, 
  DEF=0, 
  DEF_flat=0, 
  ER=0, 
  HP=20, 
  HP_flat=0, 
  EM=0, 
  ATK=0, 
  ATK_flat=0, 
  crit_rate=50, 
  crit_damage=100, 
  elemental_bonus=0, 
  HB=0)

test('add char_level=50 and mob level=50 with 50% resistance. The skill applies 100% of ATK scale to equals 250', () => {
  expect(calc.dmg("ATK", char, 100)).toBe(250)
})

test('add char_level=50 and mob level=50 with 50% resistance. The skill applies 100% of ATK scale to equals 250', () => {
  expect(calc.dmgCrit(250, char)).toBe(500)
})