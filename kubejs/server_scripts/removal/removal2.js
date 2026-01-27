ServerEvents.recipes(e => {
    const recipeTypes = ["compressing", "nasa_workbench", "fuel_refinery", "alloying", "cryo_freezing"]
    const machineIds = ["compressor", "nasa_workbench", "fuel_refinery", "etrionic_blast_furnace", "cryo_freezer"]
    
    recipeTypes.forEach((type) => {
        e.remove({type: `ad_astra:${type}`})
    })

    machineIds.forEach((type) => {
        e.remove({output: `ad_astra:${type}`})
    })

})