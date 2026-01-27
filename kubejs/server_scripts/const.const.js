// priority: 9999

// priority: one bajillion
// Useful functions
const V = (voltage) => {
    return global.v[voltage]
}

const VA = (voltage) => {
    return global.va[voltage]
}

const VH = (voltage) => {
    return global.vh[voltage]
}

const VHA = (voltage) => {
    return global.vha[voltage]
}

let voltagetierexpensive = {
        "uev": "omnium",
        "uiv": "nullium",
        "uxv": "infinity"
    }

let allthevoltage1 = [
    'ulv',
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv',
    'uev',
    'uiv',
    'uxv',
    'opv',
    'max'
]

let allthevoltage2 = {
    'ulv': "igneous_bronze",
    'lv': "nexus_steel",
    'mv': "echolumium",
    'hv': "mechanical_stainless",
    'ev': "tainted_titanium",
    'iv': "auralloy-omega",
    'luv': "mana_infused_palladium", // likely change to something else
    'zpm': "mekanite",
    'uv':  "ephemeral_naquadite",
    'uhv': "chronosite_naquaneutronate",
    'uev': "accelerated_omnium_compound",
    'uiv': "nullium",
    'uxv': "infinity",
    'opv': "activated_nexus",
    'max': "reverberating_nexus"
}

const tiers = [
        "bronze",
        "steel",
        "aluminium",
        "magnetic_neodymium",
        "magnetic_samarium",
        "stainless_steel",
        "titanium",
        "tungsten_steel",
        "rhodium_plated_palladium",
        "hsss",
        "niobium_titanium"
    ]
    const parts = [
        "gear",
        "rod",
        "plate",
        "bolt",
        "long_rod",
        "ring",
        "magnetic_rod",
        "round",
        "small_gear",
        "spring",
        "phosphorescent",
        "screw",
        "frame",
        "dense",
        "fine_wire",
        "foil",
        "rotor",
        "small_fluid_pipe",
        "normal_fluid_pipe",
        "large_fluid_pipe"

    ]
    // Map of tier replacements
    const tierReplacements = {
        copper: "bronze",
        bronze: "igneous_bronze",
        steel: "nexus_steel",
        magnetic_steel: "magnetic_nexus_steel",
        aluminium: "echolumium",
        magnetic_neodymium: "cryosporsite",
        magnetic_samarium: "cryosporsite",
        stainless_steel: "mechanical_stainless",
        titanium: "tainted_titanium",
        tungsten_steel: "auralloy-omega",
        rhodium_plated_palladium: "rhodipalladic-desnite",
        hsss: "hssd",
        osmium: "osmium_steel",
        niobium_titanium: "vintanium"
        // Add more replacements as needed
    }
    const recipePatterns = [
    // /^gtceu:(shaped|assembler|assembly_line)\/(electric_|robot_arm_|sensor_|field_generator_).*/,
    /^gtceu:(shaped|assembler|)\/.*_gearbox(_casing)?/,
    /^gtceu:shaped\/casing_.*_(firebox|pipe)/,
    /^gtceu:assembler\/casing_.*_firebox/,
    /^gtceu:shaped\/casing_.*/, /gtceu:shaped\/(extreme|large)_(steam|gas|plasma|combustion)_(turbine|engine)/,
    /^gtceu:shaped\/(diesel|steam|gas)_(generator|turbine)_(lv|mv|hv|ev|iv)/,
    /^gtceu:shaped\/rotor_holder_.*/, /gtceu:(shaped|asseembly|line)\/(lv|mv|hv|ev|iv|luv|zpm|uv|uhv|uev|uiv|uxv|opv|max)_.*(_.*)?(_.*)?(_.*)?/
]

    let basevoltage = [
    'ulv',
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv',
    'uhv'
]

var casingalloys = ['birmabright','duralumin','beryllium_aluminium_alloy','hydronalium','elgiloy','beryllium_bronze','silicon_bronze','silicone_rubber','kovar','zamak','tumbaga','transplatine']
var casingalloysgregtechonlylimitededition = ['metallurgically_enhanced_source', 'enderium', 'lumium', 'signalum', 'source', 'nitinol', 'resonite']

var thecarbonboys = ['gtceu:carbon_dust', 'gtceu:charcoal_dust', 'gtceu:coal_dust', 'gtceu:coke_dust']

var thermalityalloys = ['enderium', 'lumium', 'signalum']
var ferricminerals = ['iron', 'granitic_mineral_sand', 'magnetite', 'basaltic_mineral_sand', 'pyrite', 'yellow_limonite', 'hematite', 'goethite']

const mods = ['create', 'botania', 'ars_nouveau', 'ad_astra', 'ae2', 'advanced_ae', 'expatternprovider', 'mekanism']
  const materials = 
  ['manasteel', 'steel', 'copper', 'gold', 'iron', 'source', 
    'desh', 'ostrum', 'calorite', 'uranium', 'zinc', 'brass', 'andesite_alloy', 'obsidian', 'fluix', 'certus_quartz', 'charged_certus_quartz']
  const types = ['ingot', 'plate', 'gem', 'dust', 'rod', 'nugget', 'block', 'powder', 'sheet', 'block', 'crystal', 'osmium']
