const registerGTCEuMaterials = (event) => {
}

const registerGTCEuMaterialModification = (event) => {

	//const TFGPropertyKey = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
	const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const {
		HAS_TFC_TOOL,
		HAS_TFC_ARMOR,
		HAS_TFC_UTILITY,
		HAS_PLATED_BLOCK,
		CAN_BE_UNMOLDED,
		GENERATE_BELL,
		GENERATE_DOUBLE_INGOTS,
		GENERATE_FIRMALIFE_GREENHOUSE_BLOCKS,
		HAS_SMALL_TFC_ORE,
		HAS_SMALL_NATIVE_TFC_ORE
	} = TFGMaterialFlags

	const {
		GENERATE_ROD,
		GENERATE_LONG_ROD,
		GENERATE_BOLT_SCREW,
		GENERATE_ROTOR,
		GENERATE_SPRING,
		GENERATE_SMALL_GEAR,
		GENERATE_FRAME,
		GENERATE_PLATE
	} = $MATERIAL_FLAGS

	var metalTooling = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.DRILL_HV,
		GTToolType.DRILL_EV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]

	/* TFC Проперти для материалов */
	GTMaterials.Copper.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 1080, 1));
	GTMaterials.BismuthBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(591, 788, 985, 2));
	GTMaterials.Bronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 2));
	GTMaterials.BlackBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(642, 856, 1070, 2));
	GTMaterials.WroughtIron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3));
	GTMaterials.Steel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
	GTMaterials.BlackSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(891, 1188, 1485, 5));
	GTMaterials.BlueSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));
	GTMaterials.RedSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));

	GTMaterials.Gold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(636, 848, 1060, 1));
	GTMaterials.Bismuth.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(162, 216, 270, 1));
	GTMaterials.Brass.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(558, 744, 930, 2));
	GTMaterials.Nickel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(872, 1162, 1453, 1));
	GTMaterials.RoseGold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(576, 768, 960, 1));
	GTMaterials.Silver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(577, 769, 961, 1));
	GTMaterials.Tin.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, 1));
	GTMaterials.Zinc.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(252, 336, 420, 1));
	GTMaterials.SterlingSilver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 1));
	GTMaterials.Iron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, 3));

	GTMaterials.Hematite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.YellowLimonite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Magnetite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Pyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Goethite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 85));
	GTMaterials.Malachite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Tetrahedrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Chalcopyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Cassiterite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 230, GTMaterials.Tin, 1, 200));
	GTMaterials.CassiteriteSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, GTMaterials.Tin, 1, 150));
	GTMaterials.Sphalerite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 420, GTMaterials.Zinc, 1, 90));
	GTMaterials.Garnierite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 90));

	GTMaterials.Redstone.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 460, 1));
	GTMaterials.RedAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 650, 740, 2));
	GTMaterials.TinAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1000, 1100, 1250, 3));

	GTMaterials.Gold.addFlags(GENERATE_BELL);
	GTMaterials.Brass.addFlags(GENERATE_BELL);
	GTMaterials.Bronze.addFlags(GENERATE_BELL);


	//
	//
	//        /* Имеют двойные слитки */
	GTMaterials.Gold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Bismuth.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Brass.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Nickel.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.RoseGold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Silver.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Tin.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Zinc.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS);
	//
	//        /* Имеют инструменты, броню TFC, двойные слитки */
	GTMaterials.Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	//
	//        /* Имеют маленькие куски руды TFC */
	GTMaterials.Bismuth.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Garnierite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Hematite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.YellowLimonite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Magnetite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Malachite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
	//
	//        /* Имеют маленькие чистые куски руды TFC */
	GTMaterials.Copper.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Gold.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Silver.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	//
	//        /* Имеют двойные слитки */
	GTMaterials.RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);

	GTMaterials.TitaniumTungstenCarbide.addFlags(GENERATE_ROD);
	//
	//        /* Другое */

	// TODO: Exception needs to check the wizardry
	GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	GTMaterials.EXT2_METAL.forEach(tag => GTMaterials.Bismuth.addFlags(tag))

	GTMaterials.Borax.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	
	GTMaterials.CertusQuartz.addFlags(GENERATE_ROD);
	GTMaterials.NetherQuartz.addFlags(GENERATE_ROD);
	
	GTMaterials.Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
	GTMaterials.BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
	
	GTMaterials.Copper.addFlags(GENERATE_BOLT_SCREW, GENERATE_FRAME, GENERATE_SMALL_GEAR);
	GTMaterials.DamascusSteel.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.Duranium.addFlags(GENERATE_BOLT_SCREW);

	GTMaterials.IronMagnetic.addFlags(GENERATE_PLATE)
	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 8, 1, [
		GTToolType.AXE,
		GTToolType.HARD_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL
	]).build());

	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, metalTooling).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2.0, 178, 2, metalTooling).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.3, 2.0, 204, 2, metalTooling).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());
	GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());

	for (var material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
		var toolProperty = material.getProperty(PropertyKey.TOOL);
		if (toolProperty == null)
			continue;

		toolProperty.setDurability(toolProperty.getDurability() * 6);
	}

	GTMaterials.BismuthBronze.setMaterialARGB(0x8CDCB6)
	GTMaterials.BlackBronze.setMaterialARGB(0xB681CE)
	GTMaterials.RedSteel.setMaterialARGB(0xc8575d)
	GTMaterials.RedSteel.setMaterialSecondaryARGB(0x560307)
	GTMaterials.BlueSteel.setMaterialARGB(0x7a87b7)
	GTMaterials.BlueSteel.setMaterialSecondaryARGB(0x283467)

	GTMaterials.Iron.setMaterialARGB(0x503d32)
	GTMaterials.Iron.setMaterialSecondaryARGB(0x131212)
	GTMaterials.IronMagnetic.setMaterialARGB(0x503d32)
	GTMaterials.IronMagnetic.setMaterialSecondaryARGB(0x131212)
	GTMaterials.Zinc.setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.setMaterialSecondaryARGB(0x213b3f)
}