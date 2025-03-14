// priority: 0

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    // Бамбуковые полублоки
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')

    event.remove('minecraft:creeper_drop_music_discs', ['minecraft:music_disc_11'])
}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
}