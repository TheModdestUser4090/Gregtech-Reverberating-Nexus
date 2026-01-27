StartupEvents.registry('block', bio => {
bio.create('gtceu:flesh_alloy_casing')
.textureAll('gtceu:block/casings/solid/flesh_alloy/casing')
.displayName('§4Flesh Alloy Casing')
.soundType('sculk')
.hardness(13)
.resistance(25)
.requiresTool(true)
.tagBlock('minecraft:mineable/pickaxe')
.tagBlock('minecraft:needs_diamond_tool')
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', bio => {
bio.create('flesh_alloy')
})

GTCEuStartupEvents.registry('gtceu:material', bio => {
bio.create('flesh_alloy')
.components('2x tungsten_steel', '1x collagen', '2x mysterymystery')
.iconSet(GTMaterialIconSet.getByName("flesh_alloy"))
.ingot()
.color(0xffffff)
.flags(gear, small_gear, plates, rod)
.ignoredTagPrefixes(TagPrefix.block)
})