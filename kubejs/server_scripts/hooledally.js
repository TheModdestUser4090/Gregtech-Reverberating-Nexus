ServerEvents.recipes(event => {
    event.replaceInput(
    {id: 'gtceu:shaped/steam_hatch'},
    'gtceu:bronze_plate',
    'gtceu:igneous_bronze_plate'
)

event.replaceInput(
    {id: 'gtceu:shaped/steam_hatch'},
    'gtceu:bronze_normal_fluid_pipe',
    'gtceu:igneous_bronze_normal_fluid_pipe'
)

event.replaceInput(
    {id: "gtceu:shaped/charcoal_pile_igniter"},
    'gtceu:bronze_plate',
    'gtceu:igneous_bronze_plate'
)

event.replaceInput(
    {id: "gtceu:shaped/steam_boiler_lava_bronze"},
    'gtceu:bronze_plate',
    'gtceu:igneous_bronze_plate'
)
event.replaceInput(
    {id: "gtceu:shaped/steam_boiler_solar_bronze"},
    'gtceu:bronze_plate',
    'gtceu:igneous_bronze_plate'
)
event.replaceInput(
    {id: "gtceu:shaped/steam_boiler_solar_bronze"},
    'gtceu:bronze_normal_fluid_pipe',
    'gtceu:igneous_bronze_normal_fluid_pipe'
)


var RegexList = /^gtceu:shaped\/.*(shape_empty|_.*wire_single|small_gear_.*|gear_.*|foil_.*|plate_double_.*|.*_.*_pipe|sword_.*|axe_.*|pickaxe_.*|hoe_.*|file_.*|saw_.*|scythe_.*|mining_hammer_.*|butchery_knife_.*|wrench_.*|knife_.*|shovel_.*|spade_.*|ring_.*|bolt_saw_.*|stick_long_stick_.*|spring_small_.*|frame_.*|screwdriver_.*|crowbar_.*_.*|drill_head_.*|wirecutter_head_.*|wire_cutter_.*|rotor_.*|helmet_.*|chestplate_.*|leggings_.*|boots_.*|steam_boiler_.*_.*|steam_.*(_.*)?|turbine_blade_.*(_.*)?(_.*)?(_.*)?)/
var recipeTypes = ['gtceu:assembler', 'crafting_shaped', 'gtceu:assembly_line', 'gtceu:circuit_assembler']

const itemTypes = [
    'rod', 'round', 'plate', 'gear', 'rotor', 'frame', 'ring', 'bolt', 'screw', 'foil',
    'tiny_fluid_pipe', 'small_fluid_pipe', 'normal_fluid_pipe', 'large_fluid_pipe', 'huge_fluid_pipe',
    'single_wire', 'double_wire', 'quadruple_wire', 'octal_wire', 'hex_wire'
]

const prefixedTypes = [
    'long_{}_rod', 'small_{}_gear', 'fine_{}_wire'
]

const cableTypes = [
    'single_cable', 'double_cable', 'quadruple_cable', 'octal_cable', 'hex_cable'
]

const cableMaterials = ['niobium_titanium', 'osmium'] // Add your specific materials here

Object.entries(tierReplacements).forEach(([inputs, replacement]) => {
    recipeTypes.forEach(recipeType => {
        // Handle standard items: gtceu:{material}_{type}
        itemTypes.forEach(type => {
            event.replaceInput(
                { not: { id: RegexList }, mod: "gtceu", type: recipeType, input: `gtceu:${inputs}_${type}` },
                `gtceu:${inputs}_${type}`,
                `gtceu:${replacement}_${type}`
            )
        })

        // Handle prefixed items: gtceu:{prefix}_{material}_{suffix}
        prefixedTypes.forEach(template => {
            const inputItem = template.replace('{}', inputs)
            const outputItem = template.replace('{}', replacement)
            
            event.replaceInput(
                { not: { id: RegexList }, mod: "gtceu", type: recipeType, input: `gtceu:${inputItem}` },
                `gtceu:${inputItem}`,
                `gtceu:${outputItem}`
            )
        })

        // Handle cables (only for specific materials): gtceu:{material}_{cable_type}
        if (cableMaterials.includes(inputs)) {
            cableTypes.forEach(cableType => {
                event.replaceInput(
                    { not: { id: RegexList }, mod: "gtceu", type: recipeType, input: `gtceu:${inputs}_${cableType}` },
                    `gtceu:${inputs}_${cableType}`,
                    `gtceu:${replacement}_${cableType}`
                )
            })
        }
    })
})


event.replaceInput(
    {id: 'gtceu:shaped/bronze_multiblock_tank'},
    "gtceu:bronze_ring",
    "gtceu:igneous_bronze_ring"
)

event.replaceInput(
    {id: 'gtceu:shaped/bronze_tank_valve'},
    "gtceu:bronze_ring",
    "gtceu:igneous_bronze_ring"
)

event.replaceInput(
    {id: 'gtceu:shaped/wood_multiblock_tank'},
    "gtceu:copper_ring",
    "gtceu:bronze_ring"
)

event.replaceInput(
    {id: 'gtceu:shaped/wood_tank_valve'},
    "gtceu:copper_rotor",
    "gtceu:bronze_rotor"
)

event.replaceInput(
    {id: 'gtceu:shaped/wood_tank_valve'},
    "gtceu:copper_ring",
    "gtceu:bronze_ring"
)

event.replaceInput(
    {id: 'gtceu:shaped/wood_wall'},
    "gtceu:copper_plate",
    "gtceu:bronze_plate"
)

event.replaceInput(
    {output: 'gtceu:vacuum_tube'},
    "gtceu:steel_bolt",
    "gtceu:nexus_steel_bolt"
)

/*
event.replaceInput(
    {id: 'gtceu:shaped/steam_miner_bronze'},
    "gtceu:bronze_normal_fluid_pipe",
    "gtceu:igneous_bronze_normal_fluid_pipe"
)

event.replaceInput(
    {id: 'gtceu:shaped/steam_miner_bronze'},
    "gtceu:small_bronze_gear",
    "gtceu:small_igneous_bronze_gear"
)

event.replaceInput(
    {id: 'steamadditions:shaped/steam2'},
    "gtceu:bronze_gear",
    "gtceu:potin_gear"
)

event.replaceInput(
    {not: {id: 'gtceu:shaped/quadruple_bronze_pipe'}, not: {id: /^gtceu:shaped\/.*_bronze_pipe/}, type: 'crafting_shaped', input: 'gtceu:bronze_small_fluid_pipe' },
    'gtceu:bronze_small_fluid_pipe',
    'gtceu:igneous_bronze_small_fluid_pipe'
)

event.replaceInput(
    {id: 'gtceu:assembler/casing_aluminium_frostproof'},
    'gtceu:aluminium_frame',
    'gtceu:echolumium_frame'
)

event.replaceInput(
    {id: 'gtceu:assembler/casing_aluminium_frostproof'},
    'gtceu:aluminium_plate',
    'gtceu:echolumium_plate'
)
*/

event.replaceInput(
    {id: 'ae2:inscriber/silicon_print'},
    "ae2:silicon",
    "gtceu:silicon_dust"
)

event.replaceInput(
    {id: 'gtceu:shaped/huge_duct_stainless_steel'},
    'gtceu:double_stainless_steel_plate',
    'gtceu:double_mechanical_stainless_plate'
)

event.replaceInput(
    {id: 'gtceu:shaped/huge_duct_steel'},
    'gtceu:double_steel_plate',
    'gtceu:double_nexus_steel_plate'
)

event.replaceInput(
    {id: 'gtceu:shaped/component_grider_diamond'},
    'gtceu:double_steel_plate',
    'gtceu:double_nexus_steel_plate'
)

event.replaceInput(
    {id: 'ars_nouveau:imbuement_split_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'ars_nouveau:imbuement_pierce_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'ars_nouveau:imbuement_amplify_arrow'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'arseng:source_cell_housing'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {id: 'arseng:source_cell_housing'},
    'ars_nouveau:source_block',
    'gtceu:source_block'
)

event.replaceInput(
    {id: 'ars_nouveau:starbuncle_shades'},
    'ars_nouveau:source_gem',
    'gtceu:source_gem'
)

event.replaceInput(
    {input: 'botania:mana_powder'},
    'botania:mana_powder',
    'gtceu:mana_dust'
)

event.replaceOutput(
    {output: 'botania:mana_powder'},
    'botania:mana_powder',
    'gtceu:mana_dust'
)



event.replaceInput(
    {id: /gtceu:assembler:(high_power|computer)_casing/},
    'gtceu:fine_copper_wire',
    'gtceu:fine_source_attuned_copper_wire'
)

event.replaceInput(
    {output: 'gtceu:phenolic_printed_circuit_board'},
    'gtceu:silver_single_wire',
    'gtceu:copper_single_wire'
)

event.replaceInput(
    {output: 'gtceu:phenolic_printed_circuit_board'},
    'gtceu:silver_foil',
    'gtceu:copper_foil'
)

event.replaceInput(
    {output: 'gtceu:plastic_printed_circuit_board'},
    'gtceu:copper_foil',
    'gtceu:silver_foil'
)


event.replaceInput(
    {type: "gtceu:assembly_line"},
    'gtceu:long_magnetic_samarium_rod',
    'gtceu:long_cryosporsite_rod'
)

event.replaceInput(
    {output: 'create:brass_sheet'},
    'create:brass_sheet',
    'gtceu:brass_plate'
)

event.replaceInput(
    {output: 'create:gold_sheet'},
    'create:gold_sheet',
    'gtceu:gold_plate'
)

event.replaceInput(
    {output: 'create:copper_sheet'},
    'create:gold_sheet',
    'gtceu:gold_plate'
)

event.replaceInput(
    {input: 'ae2:fluix_crystal'},
    "ae2:fluix_crystal",
    "gtceu:fluix_gem"
)

event.replaceOutput(
    {output: 'ae2:fluix_crystal'},
    "ae2:fluix_crystal",
    "gtceu:fluix_gem"
)

event.replaceInput(
    {input: 'ae2:fluix_dust'},
    "ae2:fluix_dust",
    "gtceu:fluix_dust"
)

event.replaceOutput(
    {output: 'ae2:fluix_dust'},
    "ae2:fluix_dust",
    "gtceu:fluix_dust"
)

event.replaceInput(
    {input: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceInput(
    {input: 'ae2:charged_certus_quartz_crystal'},
    "ae2:charged_certus_quartz_crystal",
    "gtceu:charged_certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:charged_certus_quartz_crystal'},
    "ae2:charged_certus_quartz_crystal",
    "gtceu:charged_certus_quartz_gem"
)

event.replaceInput(
    {input: 'ae2:certus_quartz_crystal'},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
)

event.replaceOutput(
    {output: 'ae2:certus_quartz_dust'},
    "ae2:certus_quartz_dust",
    "gtceu:certus_quartz_dust"
)

event.replaceOutput(
    {output: 'netherite_scrap'},
    "netherite_scrap",
    "gtceu:netherite_scrap"
)

event.replaceInput(
    {input: 'netherite_scrap'},
    "netherite_scrap",
    "gtceu:netherite_scrap"
)

event.replaceInput(
    {input: 'gtceu:energium_dust'},
    'gtceu:energium_dust',
    'gtceu:energite_dust'
)

event.replaceOutput(
    {input: 'gtceu:energium_dust'},
    'gtceu:energium_dust',
    'gtceu:energite_dust'
)



event.replaceOutput(
    {output: 'gtceu:tiny_magnetic_nexus_steel_dust'},
    'gtceu:tiny_magnetic_nexus_steel_dust',
    'gtceu:tiny_nexus_steel_dust'
)
event.replaceOutput(
    {output: 'gtceu:small_magnetic_nexus_steel_dust'},
    'gtceu:small_magnetic_nexus_steel_dust',
    'gtceu:small_nexus_steel_dust'
)
event.replaceOutput(
    {output: 'gtceu:magnetic_nexus_steel_dust'},
    'gtceu:magnetic_nexus_steel_dust',
    'gtceu:nexus_steel_dust'
)

event.replaceOutput(
    {output: `gtceu:magnetic_nexus_steel_block`},
    `gtceu:magnetic_nexus_steel_block`,
    `gtceu:nexus_steel_block`
)

event.replaceOutput(
    {output: `gtceu:magnetic_nexus_steel_ingot`},
    `gtceu:magnetic_nexus_steel_ingot`,
    `gtceu:nexus_steel_ingot`
)



materials.forEach((material) => {
    types.forEach((type) => {
        event.replaceInput(
            {input: new RegExp(`^(?!minecraft|gtceu).*:${material}_${type}$`)},
            new RegExp(`^(?!minecraft|gtceu).*:${material}_${type}$`),
            new RegExp(`^gtceu:${material}_${type}$`)
        )
    })
})

event.replaceOutput(
    {id: /gtceu:macerator\/macerate_treated_wood_.*(_.*)?/},
    'gtceu:wood_dust',
    'gtceu:treated_wood_dust'
)










































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































var tooltype = ['axe', 'pickaxe', 'shovel', 'hoe']
tooltype.forEach((type) => {
event.replaceOutput({output: `notreepunching:flint_${type}`},
    `notreepunching:flint_${type}`,
    `gtceu:flint_${type}`
)

event.replaceInput({input: `notreepunching:flint_${type}`},
    `notreepunching:flint_${type}`, 
    `gtceu:flint_${type}`
)
})
})

