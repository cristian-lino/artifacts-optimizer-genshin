const character = require("./Character")

const char = new character.Character(
  element="ANEMO", 
  skill=0, 
  DEF_mob=0, 
  RES_mob=0, 
  ATK_base=0, 
  DEF_base=0, 
  HP_base=1000, 
  DEF=0, 
  DEF_flat=0, 
  ER=0, 
  HP=20, 
  HP_flat=0, 
  EM=0, 
  ATK=0, 
  ATK_flat=0, 
  crit_rate=0, 
  crit_damage=0, 
  elemental_bonus=0, 
  HB=0)

  test('adds HP_base=1000 and 20% bonus on HP to equal 1200', () => {
    expect(char.getHP()).toBe(1200)
  })
