// priority: 0

const registerAdAstraFluidTags = (event) => {

	global.AD_ASTRA_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})


	event.removeAll('ad_astra:fuel')
	event.removeAll('ad_astra:efficient_fuel')
	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_5_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:gasoline')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:high_octane_gasoline')
}

const registerAdAstraItemTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
}

const registerAdAstraBlockTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	// All new stones
	global.EXTRATERRESTRIAL_RAW_ROCKS.forEach(rock => {
		event.add('forge:stone', rock)
		event.add('tfc:breaks_when_isolated', rock)
		event.add('tfc:rock/raw', rock)
		event.add('minecraft:mineable/pickaxe', rock)
		// Collapse tags also require a collapse recipe to work.
		// Don't add the recipe if you don't want them to actually collapse!
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:can_start_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
	})

	global.EXTRATERRESTRIAL_HARDENED_ROCKS.forEach(rock => {
		event.add('minecraft:mineable/pickaxe', rock)
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
	})

	// Moon
	event.add('minecraft:rabbits_spawnable_on', 'tfg:raw_anorthosite')
	event.add('minecraft:rabbits_spawnable_on', 'tfg:hardened_anorthosite')
	event.add('minecraft:rabbits_spawnable_on', 'tfg:raw_dunite')
	event.add('minecraft:rabbits_spawnable_on', 'ad_astra:moon_sand')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:sand/black')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:sand/white')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/diorite')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/gabbro')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/basalt')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/diorite')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/gabbro')
	event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/basalt')

	event.add('ad_astra:moon_stone_replaceables', 'tfg:raw_dunite')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:raw_anorthosite')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:hardened_anorthosite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/diorite')

	event.add('tfc:can_landslide', 'ad_astra:moon_sand')
	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_slab')
	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_start_collapse', 'ad_astra:moon_cobblestone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:moon_cobblestone_slab')
}

const registerAdAstraBiomeTags = (event) => {

	event.removeAll('ad_astra:has_structure/oil_well')

	global.MOON_BIOMES.forEach(biome => {
		event.add('tfg:moon_biomes', biome)
		event.add('tfg:has_structure/meteors', biome)
		event.add('tfg:has_structure/cheese_ores', biome)
		event.add('tfg:has_structure/moonbase', biome)
	})

	event.add('tfg:has_structure/moon_rabbit_houses', 'tfg:lunar_plains')
}

const registerAdAstraEntityTypeTags = (event) => {

	// moon

	const MOON_ENTITIES = [
		'tfc:rat',
		'minecraft:rabbit',
		'minecraft:enderman',
		'minecraft:endermite',
		'minecraft:shulker',
		'minecraft:shulker_bullet',
		'species:limpet',
		'endermanoverhaul:windswept_hills_enderman',
		'endermanoverhaul:soulsand_valley_enderman',
		'endermanoverhaul:spirit'
	]

	MOON_ENTITIES.forEach(entity => {

		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})

	event.add('tfc:deals_crushing_damage', 'minecraft:enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:windswept_hills_enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:soulsand_valley_enderman')
	event.add('tfc:deals_piercing_damage', 'minecraft:endermite')
	event.add('tfc:deals_crushing_damage', 'ad_astra:star_crawler')
}

const registerAdAstraPlacedFeatures = (event) => {

	global.MOON_VEINS.forEach(vein => {

		event.add('tfg:moon_veins', vein)
		event.add('tfc:in_biome/veins', vein)
	})
}