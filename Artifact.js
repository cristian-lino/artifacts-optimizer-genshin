class Artifact {
    constructor(type, set, DEF, DEF_flat, ER, HP, HP_flat, EM, ATK, ATK_flat, crit_rate, crit_damage, elemental_bonus, HB) {
        this.type = type
        this.set = set
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
    }
}

const flower_1 = new Artifact(type="Flower", set="HYDRO", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=65, ATK=9.3, ATK_flat=0, crit_rate=3.9, crit_damage=12.4, elemental_bonus={type: "", value: 0}, HB=0)
const flower_2 = new Artifact(type="Flower", set="NOBLESSE", DEF=0, DEF_flat=16, ER=26.6, HP=9.9, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=3.5, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const flower_3 = new Artifact(type="Flower", set="GLAD", DEF=12.4, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=16, crit_rate=3.5, crit_damage=29.5, elemental_bonus={type: "", value: 0}, HB=0)
const flower_4 = new Artifact(type="Flower", set="SHIMENA", DEF=0, DEF_flat=0, ER=5.8, HP=5.3, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=9.7, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_5 = new Artifact(type="Flower", set="PALE", DEF=0, DEF_flat=0, ER=0, HP=5.8, HP_flat=4780, EM=0, ATK=4.1, ATK_flat=27, crit_rate=0, crit_damage=24.1, elemental_bonus={type: "", value: 0}, HB=0)
const flower_6 = new Artifact(type="Flower", set="MILLELITH", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=40, ATK=8.7, ATK_flat=0, crit_rate=3.5, crit_damage=21, elemental_bonus={type: "", value: 0}, HB=0)
const flower_7 = new Artifact(type="Flower", set="PETRA", DEF=10.2, DEF_flat=63, ER=0, HP=9.3, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=3.1, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const flower_8 = new Artifact(type="Flower", set="NOBLESSE", DEF=0, DEF_flat=23, ER=0, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=19, crit_rate=14, crit_damage=13.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_9 = new Artifact(type="Flower", set="PYRO", DEF=0, DEF_flat=37, ER=6.5, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=6.6, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_10 = new Artifact(type="Flower", set="ENERGY", DEF=0, DEF_flat=0, ER=0, HP=9.9, HP_flat=4780, EM=0, ATK=5.3, ATK_flat=0, crit_rate=3.9, crit_damage=26.4, elemental_bonus={type: "", value: 0}, HB=0)
const flower_11 = new Artifact(type="Flower", set="WANDERER", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=0, ATK=14.6, ATK_flat=18, crit_rate=3.9, crit_damage=21.8, elemental_bonus={type: "", value: 0}, HB=0)
const flower_12 = new Artifact(type="Flower", set="WANDERER", DEF=0, DEF_flat=19, ER=13, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=10.1, crit_damage=14, elemental_bonus={type: "", value: 0}, HB=0)
const flower_13 = new Artifact(type="Flower", set="GLAD", DEF=0, DEF_flat=0, ER=5.2, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=14, crit_rate=13.2, crit_damage=14, elemental_bonus={type: "", value: 0}, HB=0)
const flower_14 = new Artifact(type="Flower", set="SHIMENA", DEF=11.7, DEF_flat=0, ER=11.7, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=5.8, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_15 = new Artifact(type="Flower", set="VVV", DEF=0, DEF_flat=0, ER=4.5, HP=14.6, HP_flat=4780, EM=0, ATK=0, ATK_flat=66, crit_rate=0, crit_damage=7.8, elemental_bonus={type: "", value: 0}, HB=0)
const flower_16 = new Artifact(type="Flower", set="OCEAN", DEF=5.1, DEF_flat=0, ER=0, HP=9.3, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=5.8, crit_damage=18.7, elemental_bonus={type: "", value: 0}, HB=0)
const flower_17 = new Artifact(type="Flower", set="HUSK", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=63, ATK=4.7, ATK_flat=0, crit_rate=7, crit_damage=10.9, elemental_bonus={type: "", value: 0}, HB=0)
const flower_18 = new Artifact(type="Flower", set="ENERGY", DEF=0, DEF_flat=0, ER=9.1, HP=4.7, HP_flat=4780, EM=0, ATK=0, ATK_flat=0, crit_rate=6.6, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_19 = new Artifact(type="Flower", set="NOBLESSE", DEF=0, DEF_flat=21, ER=0, HP=0, HP_flat=4780, EM=33, ATK=0, ATK_flat=0, crit_rate=9.3, crit_damage=13.2, elemental_bonus={type: "", value: 0}, HB=0)
const flower_20 = new Artifact(type="Flower", set="NOBLESSE", DEF=12.4, DEF_flat=0, ER=0, HP=0, HP_flat=4780, EM=0, ATK=0, ATK_flat=16, crit_rate=10.1, crit_damage=13.2, elemental_bonus={type: "", value: 0}, HB=0)


const feather_1 = new Artifact(type="Feather", set="NOBLESSE", DEF=0, DEF_flat=0, ER=5.8, HP=20.4, HP_flat=0, EM=0, ATK=0, ATK_flat=311, crit_rate=8.9, crit_damage=6.2, elemental_bonus={type: "", value: 0}, HB=0)
const feather_2 = new Artifact(type="Feather", set="NOBLESSE", DEF=0, DEF_flat=23, ER=0, HP=0, HP_flat=448, EM=0, ATK=0, ATK_flat=311, crit_rate=15.2, crit_damage=7.8, elemental_bonus={type: "", value: 0}, HB=0)
const feather_3 = new Artifact(type="Feather", set="WANDERER", DEF=0, DEF_flat=0, ER=12.3, HP=0, HP_flat=0, EM=0, ATK=5.8, ATK_flat=311, crit_rate=3.1, crit_damage=34.2, elemental_bonus={type: "", value: 0}, HB=0)
const feather_4 = new Artifact(type="Feather", set="MILLELITH", DEF=5.1, DEF_flat=35, ER=0, HP=0, HP_flat=0, EM=21, ATK=0, ATK_flat=311, crit_rate=0, crit_damage=28.8, elemental_bonus={type: "", value: 0}, HB=0)
const feather_5 = new Artifact(type="Feather", set="NOBLESSE", DEF=0, DEF_flat=58, ER=0, HP=0, HP_flat=0, EM=0, ATK=10.5, ATK_flat=311, crit_rate=3.5, crit_damage=14, elemental_bonus={type: "", value: 0}, HB=0)
const feather_6 = new Artifact(type="Feather", set="VVV", DEF=0, DEF_flat=0, ER=12.3, HP=0, HP_flat=0, EM=0, ATK=16.3, ATK_flat=311, crit_rate=3.1, crit_damage=14.8, elemental_bonus={type: "", value: 0}, HB=0)
const feather_7 = new Artifact(type="Feather", set="GLAD", DEF=13.1, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=16, ATK=0, ATK_flat=311, crit_rate=14.8, crit_damage=7, elemental_bonus={type: "", value: 0}, HB=0)
const feather_8 = new Artifact(type="Feather", set="GLAD", DEF=0, DEF_flat=0, ER=0, HP=10.5, HP_flat=0, EM=0, ATK=4.1, ATK_flat=311, crit_rate=2.7, crit_damage=26.4, elemental_bonus={type: "", value: 0}, HB=0)
const feather_9 = new Artifact(type="Feather", set="GLAD", DEF=5.8, DEF_flat=0, ER=0, HP=5.8, HP_flat=0, EM=0, ATK=4.1, ATK_flat=311, crit_rate=17.9, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const feather_10 = new Artifact(type="Feather", set="VVV", DEF=6.6, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=47, ATK=12.8, ATK_flat=311, crit_rate=0, crit_damage=11.7, elemental_bonus={type: "", value: 0}, HB=0)
const feather_11 = new Artifact(type="Feather", set="ENERGY", DEF=6.6, DEF_flat=0, ER=0, HP=0, HP_flat=807, EM=0, ATK=0, ATK_flat=311, crit_rate=5.4, crit_damage=15.5, elemental_bonus={type: "", value: 0}, HB=0)
const feather_12 = new Artifact(type="Feather", set="NOBLESSE", DEF=0, DEF_flat=0, ER=12.3, HP=0, HP_flat=508, EM=0, ATK=0, ATK_flat=311, crit_rate=5.4, crit_damage=14, elemental_bonus={type: "", value: 0}, HB=0)
const feather_13 = new Artifact(type="Feather", set="ENERGY", DEF=10.9, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=0, ATK=14.6, ATK_flat=311, crit_rate=5.8, crit_damage=13.2, elemental_bonus={type: "", value: 0}, HB=0)
const feather_14 = new Artifact(type="Feather", set="OCEAN", DEF=13.9, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=19, ATK=0, ATK_flat=311, crit_rate=10.5, crit_damage=12.4, elemental_bonus={type: "", value: 0}, HB=0)
const feather_15 = new Artifact(type="Feather", set="HUSK", DEF=0, DEF_flat=0, ER=0, HP=5.8, HP_flat=0, EM=16, ATK=0, ATK_flat=311, crit_rate=6.6, crit_damage=26.4, elemental_bonus={type: "", value: 0}, HB=0)
const feather_16 = new Artifact(type="Feather", set="HUSK", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=61, ATK=14.6, ATK_flat=311, crit_rate=3.5, crit_damage=5.4, elemental_bonus={type: "", value: 0}, HB=0)
const feather_17 = new Artifact(type="Feather", set="WANDERER", DEF=0, DEF_flat=0, ER=0, HP=8.7, HP_flat=0, EM=0, ATK=9.9, ATK_flat=311, crit_rate=6.6, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)


const sand_1 = new Artifact(type="Sands", set="PETRA", DEF=24.1, DEF_flat=0, ER=9.7, HP=46.6, HP_flat=209, EM=0, ATK=0, ATK_flat=29, crit_rate=0, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_2 = new Artifact(type="Sands", set="NOBLESSE", DEF=0, DEF_flat=0, ER=51.8, HP=10.5, HP_flat=0, EM=0, ATK=5.8, ATK_flat=37, crit_rate=0, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const sand_3 = new Artifact(type="Sands", set="ELECTRO", DEF=0, DEF_flat=19, ER=0, HP=0, HP_flat=1016, EM=0, ATK=46.6, ATK_flat=16, crit_rate=9.7, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_4 = new Artifact(type="Sands", set="WANDERER", DEF=0, DEF_flat=60, ER=0, HP=0, HP_flat=0, EM=0, ATK=46.6, ATK_flat=14, crit_rate=13.2, crit_damage=5.4, elemental_bonus={type: "", value: 0}, HB=0)
const sand_5 = new Artifact(type="Sands", set="GLAD", DEF=0, DEF_flat=16, ER=0, HP=0, HP_flat=0, EM=0, ATK=46.6, ATK_flat=47, crit_rate=6.2, crit_damage=18.7, elemental_bonus={type: "", value: 0}, HB=0)
const sand_6 = new Artifact(type="Sands", set="OCEAN", DEF=0, DEF_flat=0, ER=0, HP=9.3, HP_flat=0, EM=0, ATK=46.6, ATK_flat=29, crit_rate=9.7, crit_damage=13.2, elemental_bonus={type: "", value: 0}, HB=0)
const sand_7 = new Artifact(type="Sands", set="ENERGY", DEF=7.3, DEF_flat=0, ER=12.3, HP=0, HP_flat=508, EM=0, ATK=46.6, ATK_flat=0, crit_rate=0, crit_damage=17.9, elemental_bonus={type: "", value: 0}, HB=0)
const sand_8 = new Artifact(type="Sands", set="MILLELITH", DEF=0, DEF_flat=19, ER=17.5, HP=46.6, HP_flat=508, EM=0, ATK=0, ATK_flat=29, crit_rate=0, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_9 = new Artifact(type="Sands", set="NOBLESSE", DEF=5.1, DEF_flat=0, ER=0, HP=0, HP_flat=239, EM=0, ATK=46.6, ATK_flat=0, crit_rate=9.7, crit_damage=18.7, elemental_bonus={type: "", value: 0}, HB=0)
const sand_10 = new Artifact(type="Sands", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=4.7, HP_flat=0, EM=23, ATK=46.6, ATK_flat=0, crit_rate=12.4, crit_damage=12.4, elemental_bonus={type: "", value: 0}, HB=0)
const sand_11 = new Artifact(type="Sands", set="NOBLESSE", DEF=0, DEF_flat=0, ER=51.8, HP=14.6, HP_flat=418, EM=0, ATK=0, ATK_flat=39, crit_rate=7, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_12 = new Artifact(type="Sands", set="PYRO", DEF=7.3, DEF_flat=23, ER=0, HP=5.8, HP_flat=0, EM=0, ATK=46.6, ATK_flat=0, crit_rate=16.7, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_13 = new Artifact(type="Sands", set="WANDERER", DEF=0, DEF_flat=49, ER=0, HP=0, HP_flat=0, EM=0, ATK=46.6, ATK_flat=19, crit_rate=7.8, crit_damage=14.8, elemental_bonus={type: "", value: 0}, HB=0)
const sand_14 = new Artifact(type="Sands", set="VVV", DEF=5.1, DEF_flat=0, ER=0, HP=46.6, HP_flat=0, EM=0, ATK=15.7, ATK_flat=0, crit_rate=9.3, crit_damage=7.8, elemental_bonus={type: "", value: 0}, HB=0)
const sand_15 = new Artifact(type="Sands", set="LAVA", DEF=0, DEF_flat=0, ER=0, HP=46.6, HP_flat=239, EM=16, ATK=0, ATK_flat=0, crit_rate=11.3, crit_damage=22.5, elemental_bonus={type: "", value: 0}, HB=0)
const sand_16 = new Artifact(type="Sands", set="HUSK", DEF=58.3, DEF_flat=21, ER=0, HP=0, HP_flat=0, EM=40, ATK=0, ATK_flat=0, crit_rate=6.2, crit_damage=20.2, elemental_bonus={type: "", value: 0}, HB=0)
const sand_17 = new Artifact(type="Sands", set="ENERGY", DEF=0, DEF_flat=0, ER=16.2, HP=5.3, HP_flat=0, EM=0, ATK=46.6, ATK_flat=33, crit_rate=10.9, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const sand_18 = new Artifact(type="Sands", set="PALE", DEF=0, DEF_flat=0, ER=0, HP=5.8, HP_flat=0, EM=187, ATK=0, ATK_flat=54, crit_rate=13.6, crit_damage=5.4, elemental_bonus={type: "", value: 0}, HB=0)


const goblet_1 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=0, ATK=4.1, ATK_flat=68, crit_rate=3.1, crit_damage=15.5, elemental_bonus={type: "ANEMO", value: 46.6}, HB=0)
const goblet_2 = new Artifact(type="Goblet", set="VVV", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=538, EM=0, ATK=0, ATK_flat=0, crit_rate=5.8, crit_damage=21, elemental_bonus={type: "ANEMO", value: 46.6}, HB=0)
const goblet_3 = new Artifact(type="Goblet", set="ENERGY", DEF=0, DEF_flat=0, ER=5.8, HP=0, HP_flat=568, EM=0, ATK=11.1, ATK_flat=0, crit_rate=0, crit_damage=17.9, elemental_bonus={type: "PYRO", value: 46.6}, HB=0)
const goblet_4 = new Artifact(type="Goblet", set="SHIMENA", DEF=0, DEF_flat=39, ER=0, HP=0, HP_flat=0, EM=0, ATK=0, ATK_flat=39, crit_rate=9.7, crit_damage=7, elemental_bonus={type: "CRYO", value: 46.6}, HB=0)
const goblet_5 = new Artifact(type="Goblet", set="SHIMENA", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=40, ATK=0, ATK_flat=35, crit_rate=5.8, crit_damage=13.2, elemental_bonus={type: "PHYSICAL", value: 58.3}, HB=0)
const goblet_6 = new Artifact(type="Goblet", set="MILLELITH", DEF=7.3, DEF_flat=0, ER=15.5, HP=15.8, HP_flat=0, EM=0, ATK=5.3, ATK_flat=0, crit_rate=0, crit_damage=0, elemental_bonus={type: "GEO", value: 46.6}, HB=0)
const goblet_7 = new Artifact(type="Goblet", set="PETRA", DEF=0, DEF_flat=19, ER=0, HP=0, HP_flat=0, EM=40, ATK=0, ATK_flat=56, crit_rate=6.2, crit_damage=0, elemental_bonus={type: "GEO", value: 46.6}, HB=0)
const goblet_8 = new Artifact(type="Goblet", set="BLOOD", DEF=13.9, DEF_flat=0, ER=16.8, HP=0, HP_flat=448, EM=0, ATK=0, ATK_flat=0, crit_rate=7.4, crit_damage=0, elemental_bonus={type: "PHYSICAL", value: 58.3}, HB=0)
const goblet_9 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=896, EM=0, ATK=0, ATK_flat=19, crit_rate=3.5, crit_damage=21, elemental_bonus={type: "ELECTRO", value: 46.6}, HB=0)
const goblet_10 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=538, EM=44, ATK=0, ATK_flat=19, crit_rate=3.1, crit_damage=21.8, elemental_bonus={type: "HYDRO", value: 46.6}, HB=0)
const goblet_11 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=21, ATK=0, ATK_flat=49, crit_rate=6.6, crit_damage=12.4, elemental_bonus={type: "GEO", value: 46.6}, HB=0)
const goblet_12 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=61, ATK=9.9, ATK_flat=16, crit_rate=0, crit_damage=11.7, elemental_bonus={type: "CRYO", value: 46.6}, HB=0)
const goblet_13 = new Artifact(type="Goblet", set="NOBLESSE", DEF=0, DEF_flat=42, ER=0, HP=46.6, HP_flat=598, EM=0, ATK=0, ATK_flat=31, crit_rate=0, crit_damage=15.5, elemental_bonus={type: "", value: 0}, HB=0)
const goblet_14 = new Artifact(type="Goblet", set="ELECTRO", DEF=0, DEF_flat=0, ER=0, HP=9.9, HP_flat=598, EM=0, ATK=8.2, ATK_flat=0, crit_rate=0, crit_damage=15.5, elemental_bonus={type: "ELECTRO", value: 46.6}, HB=0)
const goblet_15 = new Artifact(type="Goblet", set="WANDERER", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=187, ATK=11.1, ATK_flat=37, crit_rate=8.6, crit_damage=12.4, elemental_bonus={type: "", value: 0}, HB=0)
const goblet_16 = new Artifact(type="Goblet", set="WANDERER", DEF=0, DEF_flat=0, ER=0, HP=4.1, HP_flat=0, EM=16, ATK=16.3, ATK_flat=0, crit_rate=0, crit_damage=26.4, elemental_bonus={type: "CRYO", value: 46.6}, HB=0)
const goblet_17 = new Artifact(type="Goblet", set="WANDERER", DEF=0, DEF_flat=37, ER=4.5, HP=0, HP_flat=478, EM=0, ATK=0, ATK_flat=0, crit_rate=0, crit_damage=27.2, elemental_bonus={type: "HYDRO", value: 46.6}, HB=0)
const goblet_18 = new Artifact(type="Goblet", set="WANDERER", DEF=0, DEF_flat=42, ER=0, HP=0, HP_flat=0, EM=42, ATK=0, ATK_flat=0, crit_rate=10.1, crit_damage=7.8, elemental_bonus={type: "PHYSICAL", value: 58.3}, HB=0)
const goblet_19 = new Artifact(type="Goblet", set="WANDERER", DEF=11.7, DEF_flat=0, ER=6.5, HP=0, HP_flat=0, EM=0, ATK=9.9, ATK_flat=0, crit_rate=0, crit_damage=21.8, elemental_bonus={type: "PYRO", value: 46.6}, HB=0)
const goblet_20 = new Artifact(type="Goblet", set="GLAD", DEF=0, DEF_flat=39, ER=11, HP=0, HP_flat=0, EM=0, ATK=10.5, ATK_flat=0, crit_rate=0, crit_damage=20.2, elemental_bonus={type: "HYDRO", value: 46.6}, HB=0)
const goblet_21 = new Artifact(type="Goblet", set="GLAD", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=508, EM=0, ATK=14.6, ATK_flat=0, crit_rate=10.5, crit_damage=7, elemental_bonus={type: "GEO", value: 46.6}, HB=0)
const goblet_22 = new Artifact(type="Goblet", set="GLAD", DEF=0, DEF_flat=0, ER=5.8, HP=0, HP_flat=807, EM=187, ATK=0, ATK_flat=0, crit_rate=3.5, crit_damage=21, elemental_bonus={type: "", value: 0}, HB=0)
const goblet_23 = new Artifact(type="Goblet", set="GLAD", DEF=5.1, DEF_flat=0, ER=0, HP=0, HP_flat=0, EM=61, ATK=9.3, ATK_flat=0, crit_rate=0, crit_damage=14, elemental_bonus={type: "PHYSICAL", value: 58.3}, HB=0)
const goblet_24 = new Artifact(type="Goblet", set="GLAD", DEF=7.3, DEF_flat=0, ER=0, HP=5.3, HP_flat=598, EM=0, ATK=0, ATK_flat=0, crit_rate=13.6, crit_damage=0, elemental_bonus={type: "ELECTRO", value: 46.6}, HB=0)
const goblet_25 = new Artifact(type="Goblet", set="LAVA", DEF=6.6, DEF_flat=0, ER=0, HP=9.9, HP_flat=0, EM=42, ATK=0, ATK_flat=0, crit_rate=11.7, crit_damage=0, elemental_bonus={type: "PYRO", value: 46.6}, HB=0)


const circlet_1 = new Artifact(type="Circlet", set="PETRA", DEF=0, DEF_flat=16, ER=0, HP=46.6, HP_flat=777, EM=0, ATK=0, ATK_flat=19, crit_rate=10.5, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_2 = new Artifact(type="Circlet", set="WANDERER", DEF=0, DEF_flat=0, ER=0, HP=9.9, HP_flat=0, EM=0, ATK=19.8, ATK_flat=31, crit_rate=3.5, crit_damage=62.2, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_3 = new Artifact(type="Circlet", set="ENERGY", DEF=0, DEF_flat=19, ER=0, HP=0, HP_flat=448, EM=0, ATK=0, ATK_flat=39, crit_rate=31.1, crit_damage=22.5, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_4 = new Artifact(type="Circlet", set="WANDERER", DEF=0, DEF_flat=0, ER=5.2, HP=0, HP_flat=0, EM=58, ATK=0, ATK_flat=18, crit_rate=31.1, crit_damage=26.4, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_5 = new Artifact(type="Circlet", set="VVV", DEF=11.7, DEF_flat=63, ER=0, HP=0, HP_flat=269, EM=0, ATK=0, ATK_flat=0, crit_rate=31.1, crit_damage=11.7, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_6 = new Artifact(type="Circlet", set="PALE", DEF=0, DEF_flat=39, ER=0, HP=5.3, HP_flat=0, EM=0, ATK=0, ATK_flat=31, crit_rate=10.9, crit_damage=62.2, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_7 = new Artifact(type="Circlet", set="MILLELITH", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=418, EM=0, ATK=9.9, ATK_flat=19, crit_rate=9.3, crit_damage=62.2, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_8 = new Artifact(type="Circlet", set="NOBLESSE", DEF=0, DEF_flat=53, ER=0, HP=5.3, HP_flat=0, EM=61, ATK=0, ATK_flat=0, crit_rate=7, crit_damage=62.2, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_9 = new Artifact(type="Circlet", set="NOBLESSE", DEF=10.2, DEF_flat=0, ER=0, HP=0, HP_flat=986, EM=0, ATK=8.2, ATK_flat=0, crit_rate=31.1, crit_damage=5.4, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_10 = new Artifact(type="Circlet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=12.8, HP_flat=0, EM=187, ATK=8.2, ATK_flat=35, crit_rate=3.9, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_11 = new Artifact(type="Circlet", set="NOBLESSE", DEF=0, DEF_flat=0, ER=0, HP=0, HP_flat=568, EM=40, ATK=16.3, ATK_flat=14, crit_rate=31.1, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_12 = new Artifact(type="Circlet", set="BLOOD", DEF=6.6, DEF_flat=0, ER=0, HP=0, HP_flat=508, EM=58, ATK=0, ATK_flat=0, crit_rate=31.1, crit_damage=12.4, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_13 = new Artifact(type="Circlet", set="ELECTRO", DEF=0, DEF_flat=39, ER=0, HP=0, HP_flat=209, EM=61, ATK=0, ATK_flat=0, crit_rate=7.8, crit_damage=62.2, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_14 = new Artifact(type="Circlet", set="GLAD", DEF=0, DEF_flat=19, ER=0, HP=15.7, HP_flat=299, EM=0, ATK=0, ATK_flat=0, crit_rate=31.1, crit_damage=21, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_15 = new Artifact(type="Circlet", set="HYDRO", DEF=0, DEF_flat=0, ER=0, HP=9.3, HP_flat=209, EM=0, ATK=4.1, ATK_flat=0, crit_rate=31.1, crit_damage=25.6, elemental_bonus={type: "", value: 0}, HB=0)
const circlet_16 = new Artifact(type="Circlet", set="MAIDEN", DEF=0, DEF_flat=19, ER=11, HP=14, HP_flat=0, EM=0, ATK=0, ATK_flat=29, crit_rate=0, crit_damage=0, elemental_bonus={type: "", value: 0}, HB=35.9)


let flowers = [flower_1, flower_2, flower_3, flower_4, flower_5, flower_6, flower_7, flower_8, flower_9, flower_10, flower_11, flower_12, flower_13, flower_14, flower_15, flower_16, flower_17, flower_18, flower_19, flower_20]
let feathers = [feather_1, feather_2, feather_3, feather_4, feather_5, feather_6, feather_7, feather_8, feather_9, feather_10, feather_11, feather_12, feather_13, feather_14, feather_15, feather_16, feather_17]
let sands = [sand_1, sand_2, sand_3, sand_4, sand_5, sand_6, sand_7, sand_8, sand_9, sand_10, sand_11, sand_12, sand_13, sand_14, sand_15, sand_16, sand_17, sand_18]
let goblets = [goblet_1, goblet_2, goblet_3, goblet_4, goblet_5, goblet_6, goblet_7, goblet_8, goblet_9, goblet_10, goblet_11, goblet_12, goblet_13, goblet_14, goblet_15, goblet_16, goblet_17, goblet_18, goblet_19, goblet_20, goblet_21, goblet_22, goblet_23, goblet_24, goblet_25]
let circlets = [circlet_1, circlet_2, circlet_3, circlet_4, circlet_5, circlet_6, circlet_7, circlet_8, circlet_9, circlet_10, circlet_11, circlet_12, circlet_13, circlet_14, circlet_15, circlet_16]

let artifacts = [flowers, feathers, sands, goblets, circlets]
const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
let combinations = cartesian(artifacts[0], artifacts[1], artifacts[2], artifacts[3], artifacts[4])


module.exports = {combinations, artifacts}