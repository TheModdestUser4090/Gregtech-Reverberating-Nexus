GTCEuServerEvents.oreVeins(event => {
event.modify("gtceu:naquadah_vein", vein => {
    vein.cuboidVeinGenerator(generator => generator
        .top(b => b.mat(GTMaterials.Naquadah).size(2))
        .middle(b => b.mat(GTMaterials.Naquadah).size(3))
        .bottom(b => b.mat(GTMaterials.Naquadah).size(2))
        .spread(b => b.mat(GTMaterials.Uraninite)))
    
})

 event.add("gtceu:lunar_titanium_cluster", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(20, 75)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Rutile).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})



    event.add("gtceu:highland_aluminium_deposit", vein => {
      vein.weight(35)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(20, 75)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Spodumene).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Apatite).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:rare_earth_mare", vein => {
      vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(50, 90)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get("xenotime")).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bastnasite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:helium-3_regolith", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.SiliconDioxide).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Helium3).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Helium3)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:magnesium_silicate_lowlands", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("enstatite")).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(0, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Magnesite).size(0, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnesite)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})

    event.add("gtceu:europium-hafnium_deposit", vein => {
      vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('moon')
        vein.dimensions('ad_astra:moon')
        

        vein.heightRangeUniform(30, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Europium).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Hafnium).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Dysprosium).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Lanthanum).size(1, 1))
        ))

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Europium)
            .placement('above')
            .density(0.4)
            .radius(5)
        )})


})