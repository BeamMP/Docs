## Table of Contents
- [GE API](#ge-api)
- [GE Object Methods](#ge-object-methods)
- [VLUA API](#vlua-api)
- [VLUA Object Methods](#vlua-object-methods)
- [Hooks](#hooks)

## GE API

| Function | Params | Line | Returns |
|---|---|---|---|
| csvlib.newCSV `ge` | 0+ | 38 |  |
| csvlib.newTSV `ge` | 0+ | 42 |  |
| csvlib.readFileCSV `ge` | 2 | 163 |  |
| csvlib.decode `ge` | 2 | 99 |  |
| extensions.unloadModule `ge` | 1 | 333 |  |
| extensions.reloadModule `ge` | 1 | 921 |  |
| extensions.loadModule `ge` | 1 | 1155 |  |
| extensions.use `ge` | 1 | 1160 |  |
| extensions.getLoadedExtensionsNames `ge` | 1 | 1167 |  |
| extensions.load `ge` | 0+ | 635 |  |
| extensions.loadModulesInDirectory `ge` | 2 | 695 |  |
| extensions.loadAtRoot `ge` | 2 | 645 | multiple |
| extensions.reload `ge` | 1 | 901 |  |
| extensions.refresh `ge` | 1 | 907 |  |
| extensions.unload `ge` | 1 | 285 |  |
| extensions.unloadExcept `ge` | 0+ | 338 |  |
| extensions.isExtensionLoaded `ge` | 1 | 281 |  |
| extensions.hookExcept `ge` | 2+ | 863 |  |
| extensions.hookNotify `ge` | 1+ | 878 |  |
| extensions.hookUpdate `ge` | 1 | 91 |  |
| extensions.printHooks `ge` | 1 | 846 |  |
| extensions.printExtensions `ge` | 0 | 839 |  |
| extensions.addModulePath `ge` | 1 | 688 |  |
| extensions.saveModulePath `ge` | 0 | 892 |  |
| extensions.restoreModulePath `ge` | 0 | 896 |  |
| extensions.disableSerialization `ge` | 0+ | 926 |  |
| extensions.getSerializationData `ge` | 1 | 944 |  |
| extensions.deserialize `ge` | 2 | 992 |  |
| extensions.setCompletedCallback `ge` | 2 | 744 |  |
| extensions.luaPathToExtName `ge` | 1 | 52 |  |
| extensions.extNameToLuaPath `ge` | 1 | 61 |  |
| extensions.setProfiler `ge` | 1 | 830 |  |
| extensions.wrapAllExtensionsForProfiler `ge` | 0 | 480 |  |
| extensions_networking_editorToolchain.onExtensionLoaded `ge` | 0 | 150 |  |
| extensions_networking_editorToolchain.onExtensionUnloaded `ge` | 0 | 154 |  |
| extensions_tech_techCapture.getAllRelatedFiles `ge` | 3 | 34 |  |
| extensions_tech_techCapture.getCaptureTypeFromFile `ge` | 1 | 62 |  |
| extensions_tech_techCapture.filterFilesByHeader `ge` | 3 | 87 |  |
| extensions_tech_techCapture.openRequestFile `ge` | 1 | 147 |  |
| extensions_tech_techCapture.recordRequest `ge` | 1 | 172 | boolean |
| extensions_tech_techCapture.closeRequestFile `ge` | 0 | 196 |  |
| extensions_tech_techCapture.isRecordingRequests `ge` | 0 | 164 |  |
| extensions_tech_techCapture.openResponseFile `ge` | 1 | 205 |  |
| extensions_tech_techCapture.recordResponse `ge` | 1 | 220 |  |
| extensions_tech_techCapture.closeResponseFile `ge` | 0 | 235 |  |
| extensions_tech_techCapture.isRecordingResponses `ge` | 0 | 168 |  |
| extensions_tech_techCapture.enableRequestCapture `ge` | 2 | 287 |  |
| extensions_tech_techCapture.disableRequestCapture `ge` | 0 | 297 |  |
| extensions_tech_techCapture.enableResponseCapture `ge` | 1 | 302 |  |
| extensions_tech_techCapture.disableResponseCapture `ge` | 0 | 310 |  |
| extensions_tech_techCapture.injectMessage `ge` | 2 | 315 | multiple |
| extensions_tech_techCapture.export `ge` | 0 | 321 | table |
| extensions_tech_techCapture.import `ge` | 1 | 330 |  |
| extensions_ui_flowgraph_editor.vehicleSelectorRefresh `ge` | 2 | 522 |  |
| extensions_ui_flowgraph_editor.vehicleSelector `ge` | 2 | 567 |  |
| extensions_ui_flowgraph_editor.shortDisplay `ge` | 2 | 225 |  |
| extensions_ui_flowgraph_editor.shortValueString `ge` | 2 | 190 | string |
| extensions_ui_flowgraph_editor.fullDisplay `ge` | 2 | 273 |  |
| extensions_ui_flowgraph_editor.fullValueString `ge` | 2 | 238 | string |
| extensions_ui_flowgraph_editor.variableEditor `ge` | 3 | 286 |  |
| extensions_ui_flowgraph_editor.getSimpleTypes `ge` | 0 | 160 | table |
| extensions_ui_flowgraph_editor.getTypes `ge` | 0 | 164 |  |
| extensions_ui_flowgraph_editor.getTypeColor `ge` | 1 | 178 |  |
| extensions_ui_flowgraph_editor.getGraphTypes `ge` | 0 | 186 |  |
| extensions_ui_flowgraph_editor.getTypeIcon `ge` | 1 | 182 |  |
| extensions_ui_flowgraph_editor.tooltip `ge` | 1 | 168 |  |
| extensions_ui_flowgraph_editor.isFunctionalNode `ge` | 1 | 814 |  |
| extensions_ui_flowgraph_editor.isSimpleNode `ge` | 1 | 828 |  |
| extensions_ui_flowgraph_editor.isDurationNode `ge` | 1 | 833 |  |
| extensions_ui_flowgraph_editor.isF_DurationNode `ge` | 1 | 842 |  |
| extensions_ui_flowgraph_editor.isOnceNode `ge` | 1 | 848 |  |
| extensions_ui_flowgraph_editor.isDynamicNode `ge` | 1 | 854 |  |
| extensions_ui_flowgraph_editor.getBehaviourIcon `ge` | 1 | 867 |  |
| extensions_ui_flowgraph_editor.getBehaviourDescription `ge` | 1 | 871 |  |
| extensions_ui_flowgraph_editor.getAutoTypeFromName `ge` | 1 | 875 |  |
| extensions_ui_imgui.onImGuiReady `ge` | 0 | 22 |  |
| extensions_ui_imgui.onExtensionLoaded `ge` | 0 | 29 |  |
| extensions_ui_imguiWire.clear `ge` | 0 | 61 |  |
| graphpath.newMinheap `ge` | 0 | 48 |  |
| graphpath.newGraphpath `ge` | 0 | 124 |  |
| guihooks.reset `ge` | 0 | 97 |  |
| guihooks.sendStreams `ge` | 0 | 88 |  |
| guihooks.trigger `ge` | 1+ | 26 |  |
| guihooks.triggerClient `ge` | 2+ | 41 |  |
| guihooks.triggerStream `ge` | 2 | 58 |  |
| guihooks.triggerRawJS `ge` | 2 | 54 |  |
| guihooks.message `ge` | 4 | 126 |  |
| guihooks.graph `ge` | 1+ | 133 |  |
| guihooks.graphWithCSV `ge` | 1+ | 149 |  |
| guihooks.graphWithCSVWrite `ge` | 0 | 167 |  |
| introspection.gather_methods `ge` | 0 | 10 |  |
| jbeamWriter.writeFile `ge` | 2 | 93 | boolean |
| jbeam_expressionParser.parseSafe `ge` | 2 | 98 | string |
| jbeam_expressionParser.parse `ge` | 2 | 131 | string |
| jbeam_expressionParser.compileSafe `ge` | 1 | 154 | string |
| jbeam_groups.process `ge` | 1 | 10 |  |
| jbeam_interaction.process `ge` | 1 | 14 |  |
| jbeam_io.onExtensionLoaded `ge` | 0 | 471 |  |
| jbeam_io.startLoading `ge` | 1 | 227 | table |
| jbeam_io.finishLoading `ge` | 0 | 285 |  |
| jbeam_io.getPart `ge` | 2 | 255 |  |
| jbeam_io.getMainPartName `ge` | 1 | 276 |  |
| jbeam_io.getAvailableParts `ge` | 1 | 289 |  |
| jbeam_io.getAvailableSlotNameMap `ge` | 1 | 312 |  |
| jbeam_io.getAvailablePartNamesForSlot `ge` | 2 | 339 |  |
| jbeam_io.getCompatiblePartNamesForSlot `ge` | 3 | 349 | table |
| jbeam_io.getLastStartLoadingStats `ge` | 0 | 467 |  |
| jbeam_links.prepareLinksDestructive `ge` | 2 | 15 |  |
| jbeam_links.resolveLinks `ge` | 2 | 159 | boolean |
| jbeam_links.resolveGroupLinks `ge` | 1 | 184 | boolean |
| jbeam_loader.loadVehicleStage1 `ge` | 3 | 289 |  |
| jbeam_loader.loadBundle `ge` | 3 | 222 |  |
| jbeam_materials.process `ge` | 2 | 32 |  |
| jbeam_optimization.assignCIDs `ge` | 1 | 53 | boolean |
| jbeam_optimization.process `ge` | 2 | 218 | boolean |
| jbeam_scaling.process `ge` | 1 | 12 |  |
| jbeam_sectionMerger.process `ge` | 2 | 70 | boolean |
| jbeam_sections_assorted.process `ge` | 1 | 10 |  |
| jbeam_sections_camera.process `ge` | 2 | 196 |  |
| jbeam_sections_colors.process `ge` | 3 | 10 |  |
| jbeam_sections_events.process `ge` | 3 | 199 |  |
| jbeam_sections_licenseplatesSkins.process `ge` | 4 | 11 |  |
| jbeam_sections_meshs.process `ge` | 3 | 318 |  |
| jbeam_sections_mirror.process `ge` | 3 | 11 |  |
| jbeam_sections_nodeBeam.process `ge` | 1 | 149 |  |
| jbeam_sections_paints.process `ge` | 3 | 10 |  |
| jbeam_sections_vropes.process `ge` | 3 | 117 |  |
| jbeam_sections_wheels.processWheels `ge` | 1 | 1948 | boolean |
| jbeam_sections_wheels.processRotators `ge` | 1 | 1966 |  |
| jbeam_slotSystem.partFitsSlot `ge` | 2 | 180 | multiple |
| jbeam_slotSystem.findParts `ge` | 2 | 429 | multiple |
| jbeam_slotSystem.unifyPartJournal `ge` | 2 | 500 | boolean |
| jbeam_tableSchema.process `ge` | 3 | 225 | boolean |
| jbeam_tableSchema.processTableWithSchemaDestructive `ge` | 4 | 184 |  |
| jbeam_utils.addNodeWithOptions `ge` | 4 | 26 |  |
| jbeam_utils.addNode `ge` | 3 | 44 |  |
| jbeam_utils.increaseMax `ge` | 2 | 20 |  |
| jbeam_utils.addBeamWithOptions `ge` | 6 | 48 |  |
| jbeam_utils.addBeam `ge` | 3 | 97 |  |
| jbeam_utils.addRotator `ge` | 3 | 101 |  |
| jbeam_utils.getPosAfterNodeRotateOffsetMove `ge` | 4 | 281 | multiple |
| jbeam_utils.getFlexbodyPosRotAfterNodeRotateOffsetMove `ge` | 7 | 297 |  |
| jbeam_utils.getPosRotBeforeNodeRotateOffsetMove `ge` | 7 | 318 |  |
| jbeam_variables.processComponents `ge` | 4 | 449 | boolean |
| jbeam_variables.cleanup `ge` | 1 | 489 | boolean |
| jbeam_variables.getAllVariables `ge` | 3 | 274 |  |
| jbeam_variables.postProcessVariables `ge` | 2 | 380 |  |
| jbeam_variables.processParts `ge` | 4 | 335 |  |
| json-ast.testFiles `ge` | 2 | 503 |  |
| json-ast.testFile `ge` | 3 | 445 | boolean |
| json-ast.stringify `ge` | 1 | 421 |  |
| json-ast.stringifyNode `ge` | 1 | 294 |  |
| json-ast.stringifyNodes `ge` | 1 | 345 |  |
| json-ast.parse `ge` | 2 | 391 |  |
| json.decode `ge` | 1 | 233 |  |
| jsonDebug.decode `ge` | 2 | 250 | multiple |
| jsonPrettyEncoderCustom.encode `ge` | 6 | 76 | string |
| kdtreebox2d.new `ge` | 1 | 106 |  |
| kdtreebox3d.new `ge` | 1 | 115 |  |
| kdtreepoint3d.new `ge` | 1 | 105 |  |
| libs_binaryheap_binaryheap.binaryHeap `ge` | 3 | 58 |  |
| libs_binaryheap_binaryheap.minHeap `ge` | 1 | 217 |  |
| libs_binaryheap_binaryheap.maxHeap `ge` | 1 | 227 |  |
| libs_binaryheap_binaryheap.minUnique `ge` | 1 | 382 |  |
| libs_binaryheap_binaryheap.maxUnique `ge` | 1 | 396 |  |
| libs_xlsxlib_tests_tests.runTests `ge` | 0 | 123 |  |
| libs_xlsxlib_xlsxlib.loadFileXLSX `ge` | 1 | 402 | table |
| libs_xlsxlib_xlsxlib.getSheetData `ge` | 3 | 467 |  |
| lpack.encode `ge` | 1 | 96 | string |
| lpack.decode `ge` | 1 | 210 |  |
| lpack.encodeLua `ge` | 1 | 85 |  |
| lpack.decodeLua `ge` | 1 | 91 |  |
| lpack.encodeBin `ge` | 1 | 105 | string |
| lpack.encodeBinWorkBuffer `ge` | 1 | 112 | string |
| lpack.encodeDoubleArray `ge` | 1 | 71 |  |
| lpack.decodeDoubleArray `ge` | 2 | 76 |  |
| particles.getMaterialByID `ge` | 2 | 11 |  |
| particles.getMaterialIDByName `ge` | 2 | 30 |  |
| particles.getOrAddMaterialIDByName `ge` | 2 | 16 |  |
| particles.getMaterialsParticlesTable `ge` | 0 | 122 | multiple |
| quadtree.newQuadtree `ge` | 1 | 81 |  |
| settings.getValue `ge` | 2 | 127 |  |
| settings.getValues `ge` | 0 | 98 |  |
| settings.refresh `ge` | 0 | 135 |  |
| settings.settingsChanged `ge` | 0 | 135 |  |
| settings.invalidateCache `ge` | 0 | 135 |  |
| tech_pcdLib.newPcd `ge` | 0 | 114 |  |
| tech_techCommunication.newSet `ge` | 0 | 36 |  |
| tech_techCommunication.checkForClients `ge` | 1 | 62 |  |
| tech_techCommunication.receive `ge` | 1 | 72 | multiple |
| tech_techCommunication.checkMessages `ge` | 2 | 190 |  |
| tech_techCommunication.sanitizeTable `ge` | 1 | 233 |  |
| tech_techCommunication.sendLegacyError `ge` | 2 | 274 |  |
| tech_techCommunication.sendMessage `ge` | 2 | 287 |  |
| tech_techCommunication.openServer `ge` | 2 | 305 |  |
| tech_techCommunication.enableDebug `ge` | 0 | 360 |  |
| tech_techCommunication.disableDebug `ge` | 0 | 365 |  |
| tech_techCommunication.callRequestHandler `ge` | 2 | 166 |  |
| tech_techUtils.getSurfaceHeight `ge` | 1 | 7 |  |
| tech_techUtils.tableToVec3Recursive `ge` | 1 | 38 |  |
| tech_techUtils.migrateOldKeysRecursive `ge` | 1 | 58 |  |
| utils_calltracer.start `ge` | 0 | 52 |  |
| utils_calltracer.stop `ge` | 0 | 56 |  |
| utils_calltracer.reset `ge` | 0 | 86 |  |
| utils_calltracer.save `ge` | 1 | 61 |  |
| utils_dateUtils.parseIso8601 `ge` | 1 | 8 |  |
| utils_dateUtils.timeSince `ge` | 1 | 38 |  |
| utils_debugDraw.drawSphere `ge` | 4 | 33 |  |
| utils_debugDraw.drawLineInstance_MinArg `ge` | 4 | 37 |  |
| utils_debugDraw.drawSquarePrism `ge` | 6 | 40 |  |
| utils_debugDraw.drawTextAdvanced `ge` | 8 | 44 |  |
| utils_debugDraw.drawTriSolid `ge` | 5 | 53 |  |
| utils_filterchain.test `ge` | 0 | 234 |  |
| utils_heatmap.init `ge` | 1 | 80 |  |
| utils_heatmap.destroy `ge` | 0 | 74 |  |
| utils_heatmap.save `ge` | 0 | 69 |  |
| utils_heatmap.update `ge` | 0 | 96 |  |
| utils_httpJsonServer.init `ge` | 3 | 52 |  |
| utils_httpJsonServer.update `ge` | 0 | 105 |  |
| utils_interactiveShell.start `ge` | 0 | 66 |  |
| utils_languageMap.resolve `ge` | 1 | 544 |  |
| utils_perf.update `ge` | 0 | 38 |  |
| utils_perf.enable `ge` | 3 | 116 |  |
| utils_perf.disable `ge` | 0 | 124 |  |
| utils_perf.getData `ge` | 0 | 89 |  |
| utils_perf.saveDataToCSV `ge` | 1 | 94 |  |
| utils_pixellib.test `ge` | 0 | 240 |  |
| utils_pixellib.create `ge` | 0 | 32 |  |
| utils_simpleHttpServer.start `ge` | 5 | 68 |  |
| utils_simpleHttpServer.stop `ge` | 0 | 90 |  |
| utils_simpleHttpServer.update `ge` | 0 | 235 |  |
| utils_simpleProfiler_report.createReport `ge` | 3 | 16 |  |
| utils_torqueScriptParser.parse `ge` | 1 | 90 |  |
| utils_wsUtils.createOrGetWS `ge` | 6 | 77 | multiple |
| console_bananabench.getAllVehicles `ge` | 0 | 71 |  |
| client_canvas.createCanvas `ge` | 1 | 8 |  |
| client_canvas.initializeCanvas `ge` | 0 | 28 |  |
| client_canvas.showCursor `ge` | 0 | 48 |  |
| client_canvas.hideCursor `ge` | 0 | 57 |  |
| client_core.loadCoreMaterials `ge` | 0 | 719 |  |
| client_core.initializeCore `ge` | 0 | 1039 |  |
| client_core.reloadCore `ge` | 0 | 1066 |  |
| client_init.loadMainMenu `ge` | 0 | 101 |  |
| client_init.initClient `ge` | 0 | 179 |  |
| client_init.reloadClient `ge` | 0 | 225 |  |
| client_lighting.reloadLightingSystems `ge` | 0 | 7 |  |
| client_lighting.initLightingSystems `ge` | 0 | 65 |  |
| client_parseArgs.defaultParseArgs `ge` | 0 | 29 |  |
| client_postFx.initPostEffects `ge` | 0 | 57 |  |
| client_postFx.reloadPostEffects `ge` | 0 | 82 |  |
| client_postFx.savePresetFile `ge` | 1 | 119 |  |
| client_postFx.loadPresetFile `ge` | 1 | 143 | boolean |
| client_postFx.applyDefaultPreset `ge` | 0 | 180 |  |
| client_postFx.applySSAOPreset `ge` | 0 | 199 |  |
| client_postFx.applyHDRPreset `ge` | 0 | 221 |  |
| client_postFx.applyLightRaysPreset `ge` | 0 | 239 |  |
| client_postFx.applyDOFPreset `ge` | 0 | 244 |  |
| client_postFx.settingsApplyFromPreset `ge` | 0 | 258 |  |
| client_postFx.settingsSetEnabled `ge` | 1 | 278 |  |
| client_postFx.backupCurrentSettings `ge` | 0 | 324 |  |
| client_postFx.clearBackup `ge` | 0 | 387 |  |
| client_postFx.settingsApplyAll `ge` | 0 | 448 |  |
| client_postFx.restore_cs_preset_from_json `ge` | 0 | 467 |  |
| client_postFx_dof.updateDOFSettings `ge` | 0 | 587 |  |
| client_postFx_utils.loadPresets `ge` | 0 | 9 |  |
| client_postFx_utils.savePresets `ge` | 0 | 21 |  |
| client_renderManager.initRenderManager `ge` | 0 | 7 |  |
| extensions.c2_panelPlugins_tileManager.onExtensionLoaded `ge` | 0 | 1058 |  |
| extensions.c2_panelPlugins_tileManager.onMissionLoaded `ge` | 0 | 1063 |  |
| extensions.c2_panelPlugins_tileManager.onSerialize `ge` | 0 | 1041 | table |
| extensions.c2_panelPlugins_tileManager.onDeserialized `ge` | 1 | 1045 |  |
| extensions.c2_panelPlugins_tileManager.showWindow `ge` | 0 | 1051 |  |
| extensions.c2_webSocketHandler.onExtensionLoaded `ge` | 0 | 46 |  |
| extensions.c2_webSocketHandler.onExtensionUnloaded `ge` | 0 | 52 |  |
| extensions.campaign_campaigns.markCompleted `ge` | 2 | 466 |  |
| extensions.campaign_campaigns.rewardSelectionCallback `ge` | 1 | 517 |  |
| extensions.campaign_campaigns.isSubsectionMarker `ge` | 2 | 657 | boolean |
| extensions.campaign_campaigns.isTransitionPoint `ge` | 2 | 627 |  |
| extensions.campaign_campaigns.isMissionGiver `ge` | 2 | 637 |  |
| extensions.campaign_campaigns.isPlayerHQ `ge` | 2 | 632 |  |
| extensions.campaign_campaigns.isSiteLocation `ge` | 2 | 642 |  |
| extensions.campaign_campaigns.isScenarioLocation `ge` | 2 | 647 |  |
| extensions.campaign_campaigns.startCampaign `ge` | 1 | 712 |  |
| extensions.campaign_campaigns.getLocationData `ge` | 2 | 563 |  |
| extensions.campaign_campaigns.isCampaignOver `ge` | 1 | 45 |  |
| extensions.campaign_campaigns.getCampaign `ge` | 0 | 548 |  |
| extensions.campaign_campaigns.getCurrentLocation `ge` | 0 | 574 |  |
| extensions.campaign_campaigns.getCampaignTitle `ge` | 0 | 54 |  |
| extensions.campaign_campaigns.canStartScenario `ge` | 1 | 161 |  |
| extensions.campaign_campaigns.scenarioFinished `ge` | 1 | 474 |  |
| extensions.campaign_campaigns.scenarioStarted `ge` | 1 | 403 |  |
| extensions.campaign_campaigns.stop `ge` | 0 | 115 |  |
| extensions.campaign_campaigns.uiEventCancel `ge` | 0 | 525 |  |
| extensions.campaign_campaigns.uiEventNext `ge` | 0 | 533 |  |
| extensions.campaign_campaigns.getCampaignActive `ge` | 0 | 544 |  |
| extensions.campaign_campaigns.getActiveSubsectionLocationData `ge` | 1 | 570 |  |
| extensions.campaign_campaigns.getActiveSubsection `ge` | 0 | 559 |  |
| extensions.campaign_campaigns.getSubsection `ge` | 1 | 552 |  |
| extensions.campaign_campaigns.isLocationCompleted `ge` | 1 | 181 |  |
| extensions.campaign_campaigns.canImproveResult `ge` | 1 | 188 |  |
| extensions.campaign_campaigns.startScenarioFromKey `ge` | 2 | 61 |  |
| extensions.campaign_campaigns.execEndCallback `ge` | 0 | 195 |  |
| extensions.campaign_campaigns.onSerialize `ge` | 0 | 581 |  |
| extensions.campaign_campaigns.onDeserialized `ge` | 1 | 594 |  |
| extensions.campaign_campaigns.onExtensionUnloaded `ge` | 0 | 727 |  |
| extensions.campaign_campaigns.getOwningSubsection `ge` | 1 | 28 |  |
| extensions.campaign_campaigns.resumeCampaign `ge` | 2 | 737 |  |
| extensions.campaign_campaigns.getLocationStatusTable `ge` | 0 | 747 |  |
| extensions.campaign_campaignsLoader.getCampaignFilenames `ge` | 0 | 45 |  |
| extensions.campaign_campaignsLoader.getList `ge` | 0 | 60 |  |
| extensions.campaign_campaignsLoader.getCampaignScenarios `ge` | 0 | 76 |  |
| extensions.campaign_campaignsLoader.loadCampaign `ge` | 1 | 12 |  |
| extensions.campaign_campaignsLoader.start `ge` | 2 | 238 |  |
| extensions.campaign_campaignsLoader.startByFolder `ge` | 2 | 271 |  |
| extensions.campaign_campaignsLoader.splitFieldByToken `ge` | 2 | 123 |  |
| extensions.campaign_campaignsLoader.checkSaveExists `ge` | 2 | 300 |  |
| extensions.campaign_campaignsLoader.saveCampaign `ge` | 1 | 338 |  |
| extensions.campaign_campaignsLoader.resumeSavedCampaign `ge` | 2 | 356 |  |
| extensions.campaign_comics.playComic `ge` | 2 | 18 |  |
| extensions.campaign_comics.onSpineAnimationFinished `ge` | 0 | 55 |  |
| extensions.campaign_dealer.addToStock `ge` | 2 | 32 |  |
| extensions.campaign_dealer.buy `ge` | 2 | 98 |  |
| extensions.campaign_dealer.getStock `ge` | 1 | 61 |  |
| extensions.campaign_dealer.removeFromStock `ge` | 2 | 68 |  |
| extensions.campaign_dealer.onResumeCampaign `ge` | 2 | 118 |  |
| extensions.campaign_dealer.onSerialize `ge` | 0 | 102 |  |
| extensions.campaign_dealer.onDeserialized `ge` | 1 | 108 |  |
| extensions.campaign_exploration.onUiChangedState `ge` | 2 | 1003 |  |
| extensions.campaign_exploration.startTimeTrail `ge` | 3 | 1030 |  |
| extensions.campaign_exploration.uiEventSelectVehicle `ge` | 1 | 1037 |  |
| extensions.campaign_exploration.uiEventGarageExit `ge` | 0 | 1063 |  |
| extensions.campaign_exploration.updateMapUI `ge` | 0 | 859 |  |
| extensions.campaign_exploration.setFocusPOI `ge` | 1 | 38 |  |
| extensions.campaign_exploration.onFocusPOI `ge` | 1 | 848 |  |
| extensions.campaign_exploration.buildRoadIndicator `ge` | 0 | 102 |  |
| extensions.campaign_exploration.queryRoadNodeToPosition `ge` | 3 | 74 |  |
| extensions.campaign_exploration.accept `ge` | 0 | 736 |  |
| extensions.campaign_exploration.decline `ge` | 0 | 783 |  |
| extensions.campaign_exploration.startSubsectionExploration `ge` | 3 | 442 |  |
| extensions.campaign_exploration.endSubsectionExploration `ge` | 0 | 272 |  |
| extensions.campaign_exploration.stop `ge` | 0 | 957 |  |
| extensions.campaign_exploration.toggleMinimap `ge` | 0 | 970 |  |
| extensions.campaign_exploration.getExplorationActive `ge` | 0 | 127 |  |
| extensions.campaign_exploration.isValidLocation `ge` | 3 | 309 | boolean |
| extensions.campaign_exploration.isValidSubsection `ge` | 2 | 296 | boolean |
| extensions.campaign_exploration.onSerialize `ge` | 0 | 983 |  |
| extensions.campaign_exploration.onDeserialized `ge` | 1 | 993 |  |
| extensions.campaign_exploration.onClientEndMission `ge` | 1 | 436 |  |
| extensions.campaign_exploration.onResumeCampaign `ge` | 2 | 1106 |  |
| extensions.campaign_exploration.refreshLocationMarkers `ge` | 1 | 184 |  |
| extensions.campaign_exploration.onUILayoutLoaded `ge` | 1 | 1111 |  |
| extensions.campaign_photoSafari.missionaccepted `ge` | 1 | 22 |  |
| extensions.campaign_photoSafari.takepiccheck `ge` | 0 | 144 |  |
| extensions.campaign_rewards.iterateRewardsConst `ge` | 2 | 10 |  |
| extensions.campaign_rewards.getRewards `ge` | 4 | 17 |  |
| extensions.campaign_rewards.processRewards `ge` | 4 | 53 |  |
| extensions.campaign_rewards.processUserSelection `ge` | 2 | 97 |  |
| extensions.campaign_rewards.getScenarioReward `ge` | 2 | 119 |  |
| extensions.career_branches.getOrder `ge` | 1 | 21 |  |
| extensions.career_branches.getBranchByPath `ge` | 1 | 252 |  |
| extensions.career_branches.getBranchByDomainBranchSkill `ge` | 3 | 265 |  |
| extensions.career_branches.getBranchSimpleInfo `ge` | 1 | 315 | table |
| extensions.career_branches.expandUnlocks `ge` | 3 | 396 |  |
| extensions.career_branches.checkUnlocks `ge` | 0 | 460 |  |
| extensions.career_branches.getBranches `ge` | 0 | 158 |  |
| extensions.career_branches.getBranchById `ge` | 1 | 248 |  |
| extensions.career_branches.getSortedBranches `ge` | 0 | 281 |  |
| extensions.career_branches.getBranchLevel `ge` | 1 | 331 |  |
| extensions.career_branches.getBranchLevelByPath `ge` | 1 | 338 |  |
| extensions.career_branches.getBranchXP `ge` | 1 | 345 |  |
| extensions.career_branches.getXPNeededForLevel `ge` | 2 | 352 |  |
| extensions.career_branches.getBranchIcon `ge` | 1 | 360 |  |
| extensions.career_branches.getLevelLabel `ge` | 2 | 366 | string |
| extensions.career_branches.getLevelRewardMultiplier `ge` | 1 | 374 |  |
| extensions.career_branches.calcBranchLevelFromValue `ge` | 2 | 294 | multiple |
| extensions.career_branches.orderAttributeKeysByBranchOrder `ge` | 1 | 383 |  |
| extensions.career_branches.orderBranchNamesKeysByBranchOrder `ge` | 1 | 389 |  |
| extensions.career_branches.extractBranchPathIdFromFilePath `ge` | 1 | 620 |  |
| extensions.career_career.getAdditionalMenuButtons `ge` | 0 | 550 |  |
| extensions.career_career.createOrLoadCareerAndStart `ge` | 3 | 280 | boolean |
| extensions.career_career.activateCareer `ge` | 1 | 219 |  |
| extensions.career_career.deactivateCareer `ge` | 1 | 258 |  |
| extensions.career_career.deactivateCareerAndReloadLevel `ge` | 1 | 270 |  |
| extensions.career_career.isActive `ge` | 0 | 276 |  |
| extensions.career_career.sendAllCareerSaveSlotsData `ge` | 0 | 444 |  |
| extensions.career_career.sendCurrentSaveSlotData `ge` | 0 | 458 |  |
| extensions.career_career.getAutosavesForSaveSlot `ge` | 1 | 466 |  |
| extensions.career_career.hasBoughtStarterVehicle `ge` | 0 | 517 |  |
| extensions.career_career.hasInteractedWithOrganization `ge` | 1 | 521 |  |
| extensions.career_career.interactWithOrganization `ge` | 1 | 525 |  |
| extensions.career_career.closeAllMenus `ge` | 0 | 538 |  |
| extensions.career_career.isAutosaveEnabled `ge` | 0 | 542 |  |
| extensions.career_career.setAutosaveEnabled `ge` | 1 | 546 |  |
| extensions.career_career.getBeamXPLevel `ge` | 1 | 335 | multiple |
| extensions.career_career.setDebugMenuEnabled `ge` | 1 | 571 |  |
| extensions.career_career.onSerialize `ge` | 0 | 487 |  |
| extensions.career_career.onDeserialized `ge` | 1 | 496 |  |
| extensions.career_career.onClientEndMission `ge` | 1 | 479 |  |
| extensions.career_career.sendCurrentSaveSlotName `ge` | 0 | 502 |  |
| extensions.career_modules_branches_landing.getBranchSkillCardData `ge` | 1 | 339 |  |
| extensions.career_modules_branches_landing.openBigMapWithMissionSelected `ge` | 1 | 439 |  |
| extensions.career_modules_branches_landing.formatMission `ge` | 1 | 446 | table |
| extensions.career_modules_branches_landing.formatDriftSpot `ge` | 1 | 464 |  |
| extensions.career_modules_branches_landing.getLandingPageData `ge` | 1 | 492 |  |
| extensions.career_modules_branches_leagues.getLeagueById `ge` | 1 | 8 |  |
| extensions.career_modules_branches_leagues.clearLeagueUnlockCache `ge` | 0 | 14 |  |
| extensions.career_modules_branches_leagues.getSimpleUnlockedStatus `ge` | 0 | 18 |  |
| extensions.career_modules_branches_leagues.isLeagueUnlocked `ge` | 1 | 27 |  |
| extensions.career_modules_branches_leagues.formatLeague `ge` | 1 | 123 |  |
| extensions.career_modules_branches_leagues.getLeaguesForProgressBranchPage `ge` | 2 | 161 |  |
| extensions.career_modules_branches_leagues.getLeaguesForUnlockChange `ge` | 2 | 177 |  |
| extensions.career_modules_branches_leagues.getNoLeague `ge` | 3 | 191 |  |
| extensions.career_modules_branches_leagues.getLeaguesForMission `ge` | 1 | 197 |  |
| extensions.career_modules_branches_leagues.getStarsForSkills `ge` | 1 | 373 | multiple |
| extensions.career_modules_branches_leagues.getStarsForSkill `ge` | 1 | 386 |  |
| extensions.career_modules_branches_leagues.startConditionIncludesLeague `ge` | 2 | 388 |  |
| extensions.career_modules_branches_leagues.getStartConditionLeagueId `ge` | 2 | 401 |  |
| extensions.career_modules_branches_leagues.addLeagueSortOrder `ge` | 0 | 214 |  |
| extensions.career_modules_computer.openMenu `ge` | 3 | 18 |  |
| extensions.career_modules_computer.openComputerMenuById `ge` | 1 | 104 |  |
| extensions.career_modules_computer.onMenuClosed `ge` | 0 | 96 |  |
| extensions.career_modules_computer.closeMenu `ge` | 0 | 100 |  |
| extensions.career_modules_computer.getComputerUIData `ge` | 0 | 72 |  |
| extensions.career_modules_computer.computerButtonCallback `ge` | 2 | 61 |  |
| extensions.career_modules_delivery_cargoCards.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_cargoCards.resetFilterCounters `ge` | 0 | 65 |  |
| extensions.career_modules_delivery_cargoCards.getFilterSets `ge` | 1 | 483 |  |
| extensions.career_modules_delivery_cargoCards.addFilterPlayerData `ge` | 3 | 524 |  |
| extensions.career_modules_delivery_cargoCards.getCardGroupSetsByKey `ge` | 3 | 78 |  |
| extensions.career_modules_delivery_cargoCards.addSortingValuesToGroups `ge` | 2 | 467 |  |
| extensions.career_modules_delivery_cargoCards.getCardSortingSetsByKey `ge` | 1 | 354 |  |
| extensions.career_modules_delivery_cargoCards.getConfirmButtonFromPlayerCards `ge` | 1 | 549 | table |
| extensions.career_modules_delivery_cargoScreen.onCareerActivated `ge` | 0 | 11 |  |
| extensions.career_modules_delivery_cargoScreen.isCargoScreenOpen `ge` | 0 | 46 |  |
| extensions.career_modules_delivery_cargoScreen.setCargoScreenTab `ge` | 1 | 47 |  |
| extensions.career_modules_delivery_cargoScreen.getCargoScreenTab `ge` | 0 | 70 |  |
| extensions.career_modules_delivery_cargoScreen.formatCargoGroup `ge` | 3 | 90 |  |
| extensions.career_modules_delivery_cargoScreen.tryLoadAll `ge` | 1 | 364 |  |
| extensions.career_modules_delivery_cargoScreen.formatAcceptedOfferForUI `ge` | 1 | 521 |  |
| extensions.career_modules_delivery_cargoScreen.abandonAcceptedOffer `ge` | 1 | 580 |  |
| extensions.career_modules_delivery_cargoScreen.clearTransientMovesForStorage `ge` | 1 | 737 |  |
| extensions.career_modules_delivery_cargoScreen.moveMaterialFromUi `ge` | 4 | 748 |  |
| extensions.career_modules_delivery_cargoScreen.deliveryScreenExternalButtonPressed `ge` | 1 | 948 |  |
| extensions.career_modules_delivery_cargoScreen.requestCargoDataForUi `ge` | 3 | 958 |  |
| extensions.career_modules_delivery_cargoScreen.applyTransientMoves `ge` | 0 | 1346 |  |
| extensions.career_modules_delivery_cargoScreen.spawnOffer `ge` | 0+ | 1352 |  |
| extensions.career_modules_delivery_cargoScreen.toggleOfferForSpawning `ge` | 1 | 1354 |  |
| extensions.career_modules_delivery_cargoScreen.moveCargoFromUi `ge` | 2 | 1330 |  |
| extensions.career_modules_delivery_cargoScreen.enterMyCargo `ge` | 0 | 1423 |  |
| extensions.career_modules_delivery_cargoScreen.enterCargoOverviewScreen `ge` | 2 | 1372 |  |
| extensions.career_modules_delivery_cargoScreen.exitCargoOverviewScreen `ge` | 2 | 1427 |  |
| extensions.career_modules_delivery_cargoScreen.commitDeliveryConfiguration `ge` | 0 | 1438 |  |
| extensions.career_modules_delivery_cargoScreen.cancelDeliveryConfiguration `ge` | 0 | 1516 |  |
| extensions.career_modules_delivery_cargoScreen.setBestRoute `ge` | 1 | 1558 |  |
| extensions.career_modules_delivery_cargoScreen.onCargoPickedUp `ge` | 0 | 1643 |  |
| extensions.career_modules_delivery_cargoScreen.deliveryMarkerSelected `ge` | 1 | 1687 |  |
| extensions.career_modules_delivery_cargoScreen.showRoutePreview `ge` | 1 | 1705 |  |
| extensions.career_modules_delivery_cargoScreen.showLocationRoutePreview `ge` | 2 | 1771 |  |
| extensions.career_modules_delivery_cargoScreen.showCargoRoutePreview `ge` | 1 | 1729 |  |
| extensions.career_modules_delivery_cargoScreen.showVehicleOfferRoutePreview `ge` | 1 | 1756 |  |
| extensions.career_modules_delivery_cargoScreen.highlightCargoInPoi `ge` | 1 | 1668 |  |
| extensions.career_modules_delivery_cargoScreen.setCargoRoute `ge` | 2 | 1786 |  |
| extensions.career_modules_delivery_cargoScreen.setVisibleIdsForBigMap `ge` | 0 | 1801 |  |
| extensions.career_modules_delivery_cargoScreen.exitDeliveryMode `ge` | 0 | 1821 |  |
| extensions.career_modules_delivery_cargoScreen.showCargoContainerHelpPopup `ge` | 0 | 1822 |  |
| extensions.career_modules_delivery_cargoScreen.unloadCargoPopupClosed `ge` | 0 | 1825 |  |
| extensions.career_modules_delivery_cargoScreen.requestDropOffData `ge` | 0+ | 1826 |  |
| extensions.career_modules_delivery_cargoScreen.confirmDropOffData `ge` | 0+ | 1827 |  |
| extensions.career_modules_delivery_cargoScreen.clearTransientMoveForCargo `ge` | 0+ | 1828 |  |
| extensions.career_modules_delivery_cargoScreen.dropOffPopupClosed `ge` | 1 | 1830 |  |
| extensions.career_modules_delivery_general.onCareerActivated `ge` | 0 | 10 |  |
| extensions.career_modules_delivery_general.getDeliveryAbandonPenaltyFactor `ge` | 0 | 29 |  |
| extensions.career_modules_delivery_general.loadSaveData `ge` | 0 | 37 |  |
| extensions.career_modules_delivery_general.time `ge` | 0 | 172 |  |
| extensions.career_modules_delivery_general.getVehicleName `ge` | 1 | 178 |  |
| extensions.career_modules_delivery_general.getNearbyVehicleCargoContainers `ge` | 1 | 189 | table |
| extensions.career_modules_delivery_general.getMostRecentCargoContainerData `ge` | 0 | 285 |  |
| extensions.career_modules_delivery_general.requestUpdateContainerWeights `ge` | 0 | 323 |  |
| extensions.career_modules_delivery_general.updateContainerWeights `ge` | 1 | 324 |  |
| extensions.career_modules_delivery_general.setDeliveryTimePaused `ge` | 1 | 407 |  |
| extensions.career_modules_delivery_general.isAutomaticRouteEnabled `ge` | 0 | 981 |  |
| extensions.career_modules_delivery_general.setAutomaticRoute `ge` | 1 | 986 |  |
| extensions.career_modules_delivery_general.setDetailedDropOff `ge` | 1 | 997 |  |
| extensions.career_modules_delivery_general.setSetting `ge` | 2 | 1009 |  |
| extensions.career_modules_delivery_general.getSettings `ge` | 0 | 1013 |  |
| extensions.career_modules_delivery_general.startDeliveryMode `ge` | 0 | 932 |  |
| extensions.career_modules_delivery_general.exitDeliveryMode `ge` | 0 | 940 |  |
| extensions.career_modules_delivery_general.checkExitDeliveryMode `ge` | 0 | 973 |  |
| extensions.career_modules_delivery_general.isDeliveryModeActive `ge` | 0 | 1027 |  |
| extensions.career_modules_delivery_general.getDeliveryModePenalty `ge` | 1 | 1029 |  |
| extensions.career_modules_delivery_general.onCareerPaintingStarted `ge` | 0 | 1073 |  |
| extensions.career_modules_delivery_generator.onCareerActivated `ge` | 0 | 10 |  |
| extensions.career_modules_delivery_generator.selectAccessPointByLookupKeyByType `ge` | 3 | 56 |  |
| extensions.career_modules_delivery_generator.finalizeParcelItemDistanceAndRewards `ge` | 1 | 142 |  |
| extensions.career_modules_delivery_generator.getParcelTemplateById `ge` | 1 | 222 |  |
| extensions.career_modules_delivery_generator.finalizeVehicleOffer `ge` | 1 | 468 |  |
| extensions.career_modules_delivery_generator.getMaterialsTemplatesById `ge` | 1 | 685 |  |
| extensions.career_modules_delivery_generator.splitOffPartsFromMaterialCargo `ge` | 2 | 892 |  |
| extensions.career_modules_delivery_generator.changeMaterialAmountInFacility `ge` | 3 | 955 |  |
| extensions.career_modules_delivery_generator.moveMaterialToDestination `ge` | 2 | 918 |  |
| extensions.career_modules_delivery_generator.addMaterialAsParcelToContainer `ge` | 5 | 814 |  |
| extensions.career_modules_delivery_generator.finalizeMaterialDistances `ge` | 1 | 711 |  |
| extensions.career_modules_delivery_generator.finalizeMaterialDistanceRewards `ge` | 2 | 981 |  |
| extensions.career_modules_delivery_generator.triggerGenerator `ge` | 3 | 1002 |  |
| extensions.career_modules_delivery_generator.isMixable `ge` | 1 | 1082 |  |
| extensions.career_modules_delivery_generator.setup `ge` | 1 | 1441 |  |
| extensions.career_modules_delivery_generator.getFacilities `ge` | 0 | 1497 |  |
| extensions.career_modules_delivery_generator.getFacilityById `ge` | 1 | 1498 |  |
| extensions.career_modules_delivery_generator.getParkingSpotByPath `ge` | 1 | 1499 |  |
| extensions.career_modules_delivery_generator.getFacilitiesForOrganizationId `ge` | 1 | 1500 |  |
| extensions.career_modules_delivery_generator.getDistanceBetweenFacilities `ge` | 2 | 105 |  |
| extensions.career_modules_delivery_generator.getLocationCoordinates `ge` | 1 | 90 |  |
| extensions.career_modules_delivery_generator.distanceBetween `ge` | 2 | 75 |  |
| extensions.career_modules_delivery_generator.triggerAllGenerators `ge` | 0 | 1018 |  |
| extensions.career_modules_delivery_pages.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_parcelManager.onCareerActivated `ge` | 0 | 14 |  |
| extensions.career_modules_delivery_parcelManager.addTransientMoveCargo `ge` | 2 | 78 |  |
| extensions.career_modules_delivery_parcelManager.getTransientMoveCargo `ge` | 0 | 95 |  |
| extensions.career_modules_delivery_parcelManager.clearTransientMoveForCargo `ge` | 1 | 106 |  |
| extensions.career_modules_delivery_parcelManager.clearAllTransientMoves `ge` | 0 | 123 |  |
| extensions.career_modules_delivery_parcelManager.applyTransientMoves `ge` | 1 | 131 | multiple |
| extensions.career_modules_delivery_parcelManager.getTransientMovesForTargetLocationWithCargo `ge` | 1 | 193 |  |
| extensions.career_modules_delivery_parcelManager.addCargo `ge` | 2 | 39 |  |
| extensions.career_modules_delivery_parcelManager.changeCargoLocation `ge` | 2 | 46 |  |
| extensions.career_modules_delivery_parcelManager.clearTransientFlags `ge` | 0 | 206 |  |
| extensions.career_modules_delivery_parcelManager.undoTransientCargo `ge` | 0 | 219 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoForFacilityUnexpiredUndelivered `ge` | 3 | 308 |  |
| extensions.career_modules_delivery_parcelManager.sameLocationCargo `ge` | 2 | 241 |  |
| extensions.career_modules_delivery_parcelManager.sameLocation `ge` | 2 | 245 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoCustomFilter `ge` | 1+ | 253 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoForLocation `ge` | 1 | 264 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoForLocationUnexpired `ge` | 1 | 278 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoForLocationUnexpiredUndelivered `ge` | 3 | 292 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoForDestinationFacilityStillAtOriginUnexpired `ge` | 1 | 324 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoAtFacilityUnexpired `ge` | 1 | 337 |  |
| extensions.career_modules_delivery_parcelManager.getAllCargoInVehicles `ge` | 1 | 350 |  |
| extensions.career_modules_delivery_parcelManager.getRewardsWithBreakdown `ge` | 1 | 429 | multiple |
| extensions.career_modules_delivery_parcelManager.addParcelRewardsSummary `ge` | 1 | 567 |  |
| extensions.career_modules_delivery_parcelManager.getLocationLabelShort `ge` | 1 | 370 |  |
| extensions.career_modules_delivery_parcelManager.getLocationLabelLong `ge` | 1 | 393 |  |
| extensions.career_modules_delivery_parcelManager.getCargoById `ge` | 1 | 419 |  |
| extensions.career_modules_delivery_parcelManager.cleanUpCargo `ge` | 0 | 653 |  |
| extensions.career_modules_delivery_parcelMods.onCareerActivated `ge` | 0 | 6 |  |
| extensions.career_modules_delivery_parcelMods.setProgress `ge` | 1 | 180 |  |
| extensions.career_modules_delivery_parcelMods.getProgress `ge` | 0 | 184 |  |
| extensions.career_modules_delivery_parcelMods.getModData `ge` | 1 | 188 |  |
| extensions.career_modules_delivery_parcelMods.getModifierIcon `ge` | 1 | 189 |  |
| extensions.career_modules_delivery_parcelMods.getLabelAndShortDescription `ge` | 1 | 190 |  |
| extensions.career_modules_delivery_parcelMods.isImportant `ge` | 1 | 191 |  |
| extensions.career_modules_delivery_parcelMods.calculateTimedModifierTime `ge` | 1 | 193 |  |
| extensions.career_modules_delivery_parcelMods.generateModifiers `ge` | 3 | 204 |  |
| extensions.career_modules_delivery_parcelMods.isParcelModUnlocked `ge` | 1 | 228 |  |
| extensions.career_modules_delivery_parcelMods.lockedBecauseOfMods `ge` | 1 | 234 | multiple |
| extensions.career_modules_delivery_parcelMods.getParcelModUnlockStatusSimple `ge` | 0 | 254 |  |
| extensions.career_modules_delivery_parcelMods.getParcelModProgressLabel `ge` | 1 | 262 |  |
| extensions.career_modules_delivery_parcelMods.trackModifierStats `ge` | 1 | 265 |  |
| extensions.career_modules_delivery_parcelMods.onGetSkillUnlockInfoForUi `ge` | 2 | 288 |  |
| extensions.career_modules_delivery_precisionParking.onCareerActivated `ge` | 0 | 9 |  |
| extensions.career_modules_delivery_precisionParking.calculateVehiclePrecisionParking `ge` | 1 | 378 |  |
| extensions.career_modules_delivery_precisionParking.calculateCargoPrecisionParking `ge` | 2 | 398 |  |
| extensions.career_modules_delivery_precisionParking.getPrecisionParkingConfig `ge` | 0 | 413 |  |
| extensions.career_modules_delivery_precisionParking.getPrecisionParkingBonus `ge` | 1 | 171 | table |
| extensions.career_modules_delivery_precisionParking.calculateVehiclePrecisionScore `ge` | 2 | 64 | table |
| extensions.career_modules_delivery_precisionParking.debugPrecisionParking `ge` | 2 | 424 |  |
| extensions.career_modules_delivery_progress.onCareerActivated `ge` | 0 | 7 |  |
| extensions.career_modules_delivery_progress.setProgress `ge` | 1 | 33 |  |
| extensions.career_modules_delivery_progress.getProgress `ge` | 0 | 37 |  |
| extensions.career_modules_delivery_progress.onCargoDelivered `ge` | 1 | 41 |  |
| extensions.career_modules_delivery_progress.onVehicleTasksFinished `ge` | 1 | 71 |  |
| extensions.career_modules_delivery_progress.aggregateBefore `ge` | 0 | 92 |  |
| extensions.career_modules_delivery_progress.aggregateAfter `ge` | 0 | 101 |  |
| extensions.career_modules_delivery_progress.requestDropOffData `ge` | 2 | 118 |  |
| extensions.career_modules_delivery_progress.unloadMaterialsManualStart `ge` | 2 | 187 |  |
| extensions.career_modules_delivery_progress.openDropOffScreenGatheringComplete `ge` | 0 | 193 |  |
| extensions.career_modules_delivery_progress.confirmDropOffData `ge` | 3 | 294 |  |
| extensions.career_modules_delivery_progress.confirmDropOffCheckComplete `ge` | 0 | 360 |  |
| extensions.career_modules_delivery_progress.unloadCargoPopupClosed `ge` | 0 | 513 |  |
| extensions.career_modules_delivery_progress.isFacilityUnlocked `ge` | 1 | 526 | boolean |
| extensions.career_modules_delivery_progress.isFacilityVisible `ge` | 2 | 550 | boolean |
| extensions.career_modules_delivery_progress.getFacilityCountForCargoCount `ge` | 1 | 575 |  |
| extensions.career_modules_delivery_progress.getMoneyMultiplerForSkill `ge` | 2 | 588 |  |
| extensions.career_modules_delivery_progress.activateSound `ge` | 2 | 605 |  |
| extensions.career_modules_delivery_tasklist.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_tasklist.sendCargoToTasklist `ge` | 0 | 22 |  |
| extensions.career_modules_delivery_tasklist.updateTasklistForCargoId `ge` | 1 | 122 |  |
| extensions.career_modules_delivery_tasklist.updateTasklistForOfferId `ge` | 1 | 129 |  |
| extensions.career_modules_delivery_tasklist.clearTasklistForOfferId `ge` | 1 | 136 |  |
| extensions.career_modules_delivery_tasklist.clearAll `ge` | 0 | 143 |  |
| extensions.career_modules_delivery_tasklist.updateCargoTasklistElements `ge` | 0 | 152 |  |
| extensions.career_modules_delivery_tutorial.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_tutorial.isCargoDeliveryTutorialActive `ge` | 0 | 25 |  |
| extensions.career_modules_delivery_tutorial.isVehicleDeliveryTutorialActive `ge` | 0 | 32 |  |
| extensions.career_modules_delivery_tutorial.isMaterialsDeliveryTutorialActive `ge` | 0 | 39 |  |
| extensions.career_modules_delivery_tutorial.getTutorialInfo `ge` | 0 | 111 |  |
| extensions.career_modules_delivery_vehicleOfferManager.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_vehicleOfferManager.makeTaskLabel `ge` | 1 | 21 |  |
| extensions.career_modules_delivery_vehicleOfferManager.isVehicleTagUnlocked `ge` | 1 | 110 | multiple |
| extensions.career_modules_delivery_vehicleOfferManager.getVehicleTagUnlockedSimple `ge` | 0 | 121 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getVehicleTagLabelSingular `ge` | 1 | 130 | string |
| extensions.career_modules_delivery_vehicleOfferManager.getVehicleTagLabelPlural `ge` | 1 | 135 | string |
| extensions.career_modules_delivery_vehicleOfferManager.getDefaultVehicleModifiersForUI `ge` | 0 | 141 | table |
| extensions.career_modules_delivery_vehicleOfferManager.onGetSkillUnlockInfoForUi `ge` | 2 | 151 |  |
| extensions.career_modules_delivery_vehicleOfferManager.spawnOffer `ge` | 3 | 277 |  |
| extensions.career_modules_delivery_vehicleOfferManager.addOffer `ge` | 1 | 206 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getOfferById `ge` | 1 | 268 |  |
| extensions.career_modules_delivery_vehicleOfferManager.sameLocationOffer `ge` | 2 | 210 |  |
| extensions.career_modules_delivery_vehicleOfferManager.sameLocation `ge` | 2 | 214 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getAllOfferCustomFilter `ge` | 1+ | 222 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getAllOfferUnexpired `ge` | 0 | 237 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getAllOfferForLocation `ge` | 1 | 233 |  |
| extensions.career_modules_delivery_vehicleOfferManager.getAllOfferAtFacilityUnexpired `ge` | 2 | 250 |  |
| extensions.career_modules_delivery_vehicleTasks.onCareerActivated `ge` | 0 | 8 |  |
| extensions.career_modules_delivery_vehicleTasks.addVehicleTask `ge` | 2 | 73 |  |
| extensions.career_modules_delivery_vehicleTasks.getVehicleDataWithRewardsSummary `ge` | 0 | 360 |  |
| extensions.career_modules_delivery_vehicleTasks.canDropOffCargoAtPsPath `ge` | 1 | 418 | multiple |
| extensions.career_modules_delivery_vehicleTasks.finishTasks `ge` | 1 | 432 |  |
| extensions.career_modules_delivery_vehicleTasks.getFineForAbandon `ge` | 1 | 525 |  |
| extensions.career_modules_delivery_vehicleTasks.getTargetDestinationsForActiveTasks `ge` | 0 | 607 |  |
| extensions.career_modules_delivery_vehicleTasks.isVehicleDeliveryVehicle `ge` | 1 | 621 | boolean |
| extensions.career_modules_delivery_vehicleTasks.giveBackDeliveryVehicle `ge` | 1 | 631 |  |
| extensions.career_modules_delivery_vehicleTasks.getVehicleTasks `ge` | 0 | 641 |  |
| extensions.career_modules_delivery_vehicleTasks.getFineForAbandonAllVehicleTasks `ge` | 0 | 646 |  |
| extensions.career_modules_delivery_vehicleTasks.abandonAllVehicleTasks `ge` | 0 | 657 |  |
| extensions.career_modules_delivery_vehicleTasks.getVehicleTaskForOffer `ge` | 1 | 669 |  |
| extensions.career_modules_delivery_vehicleTasks.drawDebugMenu `ge` | 0 | 683 |  |
| extensions.career_modules_delivery_vehicleTasks.navigateToNextTask `ge` | 0 | 554 |  |
| extensions.career_modules_fuel.startTransaction `ge` | 1 | 178 |  |
| extensions.career_modules_fuel.getFuelData `ge` | 0 | 187 |  |
| extensions.career_modules_fuel.isCurrentlyFueling `ge` | 0 | 388 | boolean |
| extensions.career_modules_fuel.getFuelingData `ge` | 0 | 328 |  |
| extensions.career_modules_fuel.payPrice `ge` | 0 | 357 |  |
| extensions.career_modules_fuel.onChangeFlowRate `ge` | 1 | 306 |  |
| extensions.career_modules_fuel.uiButtonStartFueling `ge` | 1 | 374 |  |
| extensions.career_modules_fuel.uiButtonStopFueling `ge` | 1 | 378 |  |
| extensions.career_modules_fuel.requestRefuelingTransactionData `ge` | 0 | 174 |  |
| extensions.career_modules_fuel.uiCancelTransaction `ge` | 0 | 382 |  |
| extensions.career_modules_fuel.sendUpdateDataToUI `ge` | 0 | 126 |  |
| extensions.career_modules_fuel.onClientEndMission `ge` | 1 | 530 |  |
| extensions.career_modules_fuel.minimumRefuelingCheck `ge` | 1 | 505 |  |
| extensions.career_modules_inspectVehicle.repairVehicle `ge` | 0 | 350 |  |
| extensions.career_modules_inspectVehicle.showVehicle `ge` | 1 | 78 |  |
| extensions.career_modules_inspectVehicle.buySpawnedVehicle `ge` | 1 | 259 |  |
| extensions.career_modules_inspectVehicle.startTestDrive `ge` | 0 | 340 |  |
| extensions.career_modules_inspectVehicle.startInspection `ge` | 2 | 196 |  |
| extensions.career_modules_inspectVehicle.getSpawnedVehicleInfo `ge` | 0 | 345 |  |
| extensions.career_modules_inspectVehicle.getDidTestDrive `ge` | 0 | 430 |  |
| extensions.career_modules_inspectVehicle.getInspectVehiclePoi `ge` | 0 | 360 |  |
| extensions.career_modules_inspectVehicle.onPurchaseMenuClosed `ge` | 0 | 434 |  |
| extensions.career_modules_inspectVehicle.onTestDriveAbandoned `ge` | 0 | 439 |  |
| extensions.career_modules_inspectVehicle.leaveSaleCallback `ge` | 4 | 136 |  |
| extensions.career_modules_insurance_history.addToPlHistory `ge` | 1 | 10 |  |
| extensions.career_modules_insurance_history.buildPlHistory `ge` | 0 | 23 |  |
| extensions.career_modules_insurance_history.getPlHistory `ge` | 0 | 53 |  |
| extensions.career_modules_insurance_history.setPlHistory `ge` | 1 | 57 |  |
| extensions.career_modules_insurance_history.initPlHistory `ge` | 0 | 61 |  |
| extensions.career_modules_insurance_history.getInsuranceClaimsCount `ge` | 0 | 85 |  |
| extensions.career_modules_insurance_history.getNonInsuranceRepairsCount `ge` | 0 | 89 |  |
| extensions.career_modules_insurance_history.getTotalPremiumPaid `ge` | 0 | 93 |  |
| extensions.career_modules_insurance_history.getTotalInsuranceRepairDeductiblesPaid `ge` | 0 | 65 |  |
| extensions.career_modules_insurance_history.getTotalPrivateRepairsPaid `ge` | 0 | 99 |  |
| extensions.career_modules_insurance_history.getDamageCostCoveredByInsurance `ge` | 0 | 75 |  |
| extensions.career_modules_insurance_insurance.genericVehNeedsRepair `ge` | 2 | 594 |  |
| extensions.career_modules_insurance_insurance.makeRepairClaim `ge` | 3 | 437 |  |
| extensions.career_modules_insurance_insurance.makeTestDriveDamageClaim `ge` | 1 | 420 |  |
| extensions.career_modules_insurance_insurance.startRepairInstant `ge` | 3 | 517 |  |
| extensions.career_modules_insurance_insurance.startRepair `ge` | 3 | 533 |  |
| extensions.career_modules_insurance_insurance.inventoryVehNeedsRepair `ge` | 1 | 353 |  |
| extensions.career_modules_insurance_insurance.missionStartRepairCallback `ge` | 1 | 512 |  |
| extensions.career_modules_insurance_insurance.closeMenu `ge` | 1 | 1556 |  |
| extensions.career_modules_insurance_insurance.repairPartConditions `ge` | 1 | 359 |  |
| extensions.career_modules_insurance_insurance.expediteRepair `ge` | 2 | 1667 |  |
| extensions.career_modules_insurance_insurance.isRoadSideAssistanceFree `ge` | 1 | 1709 |  |
| extensions.career_modules_insurance_insurance.sendChooseInsuranceDataToTheUI `ge` | 3 | 1356 |  |
| extensions.career_modules_insurance_insurance.sendChangeInsuranceDataToTheUI `ge` | 1 | 1340 |  |
| extensions.career_modules_insurance_insurance.calculateAddVehiclePrice `ge` | 2 | 1067 |  |
| extensions.career_modules_insurance_insurance.calculateInsurancePremium `ge` | 4 | 988 |  |
| extensions.career_modules_insurance_insurance.calculateVehiclePremium `ge` | 3 | 937 |  |
| extensions.career_modules_insurance_insurance.saveNewInsuranceCoverageOptions `ge` | 2 | 1676 |  |
| extensions.career_modules_insurance_insurance.saveNewVehicleCoverageOptions `ge` | 2 | 1695 |  |
| extensions.career_modules_insurance_insurance.openChooseInsuranceScreen `ge` | 0 | 1783 |  |
| extensions.career_modules_insurance_insurance.useRoadsideAssistance `ge` | 1 | 1717 |  |
| extensions.career_modules_insurance_insurance.getInsuranceClassFromVehicleShoppingData `ge` | 1 | 848 |  |
| extensions.career_modules_insurance_insurance.getInsuranceDataById `ge` | 1 | 1779 |  |
| extensions.career_modules_insurance_insurance.getVehInsuranceInfo `ge` | 1 | 1658 | table |
| extensions.career_modules_insurance_insurance.getQuickRepairExtraPrice `ge` | 0 | 1654 |  |
| extensions.career_modules_insurance_insurance.getInvVehRepairTime `ge` | 1 | 1646 |  |
| extensions.career_modules_insurance_insurance.getPlayerInsurancesData `ge` | 0 | 1650 |  |
| extensions.career_modules_insurance_insurance.getPlHistory `ge` | 0 | 1834 |  |
| extensions.career_modules_insurance_insurance.getTestDriveClaimPrice `ge` | 0 | 1724 |  |
| extensions.career_modules_insurance_insurance.getDefaultInsuranceForClassId `ge` | 1 | 1741 |  |
| extensions.career_modules_insurance_insurance.getDriverScore `ge` | 0 | 508 |  |
| extensions.career_modules_insurance_insurance.resetDriverScore `ge` | 0 | 1621 | boolean |
| extensions.career_modules_insurance_insurance.getPlayerAbstractData `ge` | 0 | 1251 |  |
| extensions.career_modules_insurance_insurance.startRepairInGarage `ge` | 2 | 583 |  |
| extensions.career_modules_insurance_insurance.openMenu `ge` | 1 | 1577 |  |
| extensions.career_modules_insurance_insurance.sendUIData `ge` | 0 | 1369 |  |
| extensions.career_modules_insurance_insurance.changeInvVehInsuranceCoverageOptions `ge` | 2 | 1532 |  |
| extensions.career_modules_insurance_insurance.changeInvVehInsurance `ge` | 3 | 1428 |  |
| extensions.career_modules_insurance_insurance.onExitInsurancesComputerScreen `ge` | 0 | 1585 |  |
| extensions.career_modules_insurance_insurance.getInvVehFuelDiscountData `ge` | 1 | 1759 |  |
| extensions.career_modules_insurance_insurance.getPerkValueByInvVehId `ge` | 2 | 1735 |  |
| extensions.career_modules_insurance_insurance.getPerkValueByInsuranceId `ge` | 2 | 1728 |  |
| extensions.career_modules_insurance_insurance.getActualRepairPrice `ge` | 1 | 734 |  |
| extensions.career_modules_insurance_insurance.getPlCoverageOptionValue `ge` | 2 | 115 |  |
| extensions.career_modules_insurance_insurance.addToPlHistory `ge` | 1 | 1872 |  |
| extensions.career_modules_insurance_insurance.formatPerkIconData `ge` | 4 | 882 | table |
| extensions.career_modules_insurance_insurance.getRenewsIn `ge` | 1 | 1051 |  |
| extensions.career_modules_insurance_insurance.topUpRoadsideAssistance `ge` | 1 | 1703 |  |
| extensions.career_modules_insurance_insurance.getDriverScoreResetCost `ge` | 0 | 1605 |  |
| extensions.career_modules_insurance_insurance.sanitizeCoverageOption `ge` | 3 | 650 |  |
| extensions.career_modules_insurance_insurance.getDriverScoreTierData `ge` | 1 | 498 |  |
| extensions.career_modules_insurance_insurance.doesInsuranceExist `ge` | 1 | 1791 |  |
| extensions.career_modules_insurance_insurance.getInsuranceName `ge` | 1 | 1795 |  |
| extensions.career_modules_insurance_insurance.getAccidentForgivenessCount `ge` | 1 | 1799 |  |
| extensions.career_modules_insurance_insurance.getInvVehs `ge` | 0 | 1803 |  |
| extensions.career_modules_insurance_insurance.resetPlPolicyData `ge` | 0 | 1888 |  |
| extensions.career_modules_insurance_insurance.setDriverScore `ge` | 1 | 1787 |  |
| extensions.career_modules_insurance_repairScreen.getRepairData `ge` | 0 | 81 |  |
| extensions.career_modules_insurance_repairScreen.openRepairMenu `ge` | 2 | 11 |  |
| extensions.career_modules_insurance_repairScreen.closeRepairMenu `ge` | 0 | 17 |  |
| extensions.career_modules_insurance_repairScreen.closeMenu `ge` | 0 | 173 |  |
| extensions.career_modules_insurance_repairScreen.startRepairInGarage `ge` | 2 | 177 |  |
| extensions.career_modules_inventory.addVehicle `ge` | 3 | 297 |  |
| extensions.career_modules_inventory.removeVehicle `ge` | 1 | 366 |  |
| extensions.career_modules_inventory.enterVehicle `ge` | 3 | 500 |  |
| extensions.career_modules_inventory.sellVehicle `ge` | 2 | 1114 | boolean |
| extensions.career_modules_inventory.sellVehicleFromInventory `ge` | 1 | 1127 |  |
| extensions.career_modules_inventory.returnLoanedVehicleFromInventory `ge` | 1 | 1134 |  |
| extensions.career_modules_inventory.expediteRepairFromInventory `ge` | 2 | 1141 |  |
| extensions.career_modules_inventory.updatePartConditions `ge` | 3 | 389 |  |
| extensions.career_modules_inventory.updatePartConditionsOfSpawnedVehicles `ge` | 1 | 154 |  |
| extensions.career_modules_inventory.removeVehicleObject `ge` | 2 | 348 |  |
| extensions.career_modules_inventory.openMenu `ge` | 3 | 974 |  |
| extensions.career_modules_inventory.closeMenu `ge` | 0 | 996 |  |
| extensions.career_modules_inventory.openMenuFromComputer `ge` | 1 | 1041 |  |
| extensions.career_modules_inventory.chooseVehicleFromMenu `ge` | 3 | 1070 |  |
| extensions.career_modules_inventory.delayVehicleAccess `ge` | 3 | 1147 |  |
| extensions.career_modules_inventory.hasFreeSlot `ge` | 0 | 292 |  |
| extensions.career_modules_inventory.getNumberOfFreeSlots `ge` | 0 | 284 |  |
| extensions.career_modules_inventory.setFavoriteVehicle `ge` | 1 | 1162 |  |
| extensions.career_modules_inventory.getFavoriteVehicle `ge` | 0 | 1168 |  |
| extensions.career_modules_inventory.sendDataToUi `ge` | 0 | 864 |  |
| extensions.career_modules_inventory.setLicensePlateText `ge` | 2 | 1188 |  |
| extensions.career_modules_inventory.purchaseLicensePlateText `ge` | 3 | 1196 |  |
| extensions.career_modules_inventory.getVehicleThumbnail `ge` | 1 | 731 |  |
| extensions.career_modules_inventory.renameVehicle `ge` | 2 | 1305 | boolean |
| extensions.career_modules_inventory.isLicensePlateValid `ge` | 1 | 1296 |  |
| extensions.career_modules_inventory.isVehicleNameValid `ge` | 1 | 1300 |  |
| extensions.career_modules_inventory.onExtensionLoaded `ge` | 0 | 54 |  |
| extensions.career_modules_inventory.onExitVehicleInventory `ge` | 0 | 1095 |  |
| extensions.career_modules_inventory.openInventoryMenuForChoosingListing `ge` | 0 | 1074 |  |
| extensions.career_modules_inventory.getPartConditionsCallback `ge` | 2 | 383 |  |
| extensions.career_modules_inventory.applyPartConditions `ge` | 2 | 411 |  |
| extensions.career_modules_inventory.setVehicleDirty `ge` | 1 | 150 |  |
| extensions.career_modules_inventory.getDirtiedVehicles `ge` | 0 | 1288 |  |
| extensions.career_modules_inventory.getVehicles `ge` | 0 | 1106 |  |
| extensions.career_modules_inventory.getVehicle `ge` | 1 | 1110 |  |
| extensions.career_modules_inventory.isEmpty `ge` | 0 | 1292 |  |
| extensions.career_modules_inventory.spawnVehicle `ge` | 3 | 419 |  |
| extensions.career_modules_inventory.getInventoryIdsInClosestGarage `ge` | 1 | 938 |  |
| extensions.career_modules_inventory.getClosestGarage `ge` | 1 | 36 |  |
| extensions.career_modules_inventory.isSeatedInsideOwnedVehicle `ge` | 0 | 673 |  |
| extensions.career_modules_inventory.getCurrentVehicle `ge` | 0 | 645 |  |
| extensions.career_modules_inventory.getCurrentVehicleId `ge` | 0 | 669 |  |
| extensions.career_modules_inventory.getLastVehicle `ge` | 0 | 649 |  |
| extensions.career_modules_inventory.getVehicleIdFromInventoryId `ge` | 1 | 653 |  |
| extensions.career_modules_inventory.getInventoryIdFromVehicleId `ge` | 1 | 659 |  |
| extensions.career_modules_inventory.getMapInventoryIdToVehId `ge` | 0 | 665 |  |
| extensions.career_modules_inventory.debugRespawnCurrentVehicle `ge` | 0 | 1315 |  |
| extensions.career_modules_inventory.getVehicleUiData `ge` | 2 | 801 |  |
| extensions.career_modules_linearTutorial.endTutorial `ge` | 0 | 77 |  |
| extensions.career_modules_linearTutorial.getCustomTowHookLabel `ge` | 0 | 88 |  |
| extensions.career_modules_linearTutorial.onExtensionUnloaded `ge` | 0 | 125 |  |
| extensions.career_modules_linearTutorial.getTutorialData `ge` | 0 | 159 |  |
| extensions.career_modules_linearTutorial.setTrafficForTutorial `ge` | 0 | 168 |  |
| extensions.career_modules_linearTutorial.setTrafficAfterTutorial `ge` | 0 | 185 |  |
| extensions.career_modules_linearTutorial.wasIntroPopupsSeen `ge` | 1 | 196 | boolean |
| extensions.career_modules_linearTutorial.introPopup `ge` | 2 | 206 |  |
| extensions.career_modules_linearTutorial.showNonTutorialWelcomeSplashscreen `ge` | 0 | 287 |  |
| extensions.career_modules_linearTutorial.showAllSplashscreensAndLogbookEntries `ge` | 0 | 307 |  |
| extensions.career_modules_linearTutorial.drawDebugFunctions `ge` | 0 | 353 |  |
| extensions.career_modules_linearTutorial.onExtensionLoaded `ge` | 0 | 23 |  |
| extensions.career_modules_linearTutorial.beginLinearStep `ge` | 1 | 101 |  |
| extensions.career_modules_linearTutorial.completeLinearStep `ge` | 1 | 138 |  |
| extensions.career_modules_linearTutorial.getLinearStep `ge` | 0 | 145 |  |
| extensions.career_modules_linearTutorial.isLinearTutorialActive `ge` | 0 | 148 |  |
| extensions.career_modules_linearTutorial.getTutorialFlag `ge` | 1 | 151 |  |
| extensions.career_modules_linearTutorial.setTutorialFlag `ge` | 2 | 154 |  |
| extensions.career_modules_loanerVehicles.markForSpawning `ge` | 1 | 18 |  |
| extensions.career_modules_loanerVehicles.unmarkAllForSpawning `ge` | 0 | 27 |  |
| extensions.career_modules_loanerVehicles.spawnAllOffers `ge` | 0 | 37 |  |
| extensions.career_modules_loanerVehicles.returnVehicle `ge` | 2 | 109 |  |
| extensions.career_modules_loanerVehicles.getLoanedVehiclesByOrg `ge` | 1 | 134 |  |
| extensions.career_modules_loanerVehicles.formatLoanerOfferForUi `ge` | 1 | 283 |  |
| extensions.career_modules_loanerVehicles.formatSpawnedLoanersForUi `ge` | 0 | 249 |  |
| extensions.career_modules_loanerVehicles.getLoaningOrgsOfVehicle `ge` | 1 | 205 |  |
| extensions.career_modules_log.addLog `ge` | 3 | 11 |  |
| extensions.career_modules_logbook.getPopups `ge` | 0 | 35 |  |
| extensions.career_modules_logbook.getLogbookMostRecentUnread `ge` | 1 | 46 |  |
| extensions.career_modules_logbook.logbookEntry `ge` | 1 | 203 |  |
| extensions.career_modules_logbook.getLogbook `ge` | 0 | 23 |  |
| extensions.career_modules_logbook.setLogbookEntryRead `ge` | 2 | 72 |  |
| extensions.career_modules_logbook.addNewLogbookEntry `ge` | 2 | 84 |  |
| extensions.career_modules_logbook.missionUnlocked `ge` | 1 | 106 |  |
| extensions.career_modules_logbook.deliveryFacilityUnlocked `ge` | 1 | 120 |  |
| extensions.career_modules_logbook.spawnPointUnlocked `ge` | 1 | 134 |  |
| extensions.career_modules_logbook.genericInfoUnlocked `ge` | 6 | 148 |  |
| extensions.career_modules_logbook.genericLogbookEntry `ge` | 4 | 170 |  |
| extensions.career_modules_marketplace.onExtensionLoaded `ge` | 0 | 939 |  |
| extensions.career_modules_marketplace.getListings `ge` | 0 | 875 |  |
| extensions.career_modules_marketplace.menuOpened `ge` | 1 | 922 |  |
| extensions.career_modules_marketplace.acceptOffer `ge` | 2 | 189 |  |
| extensions.career_modules_marketplace.declineOffer `ge` | 2 | 200 |  |
| extensions.career_modules_marketplace.listVehicles `ge` | 1 | 28 |  |
| extensions.career_modules_marketplace.findVehicleListing `ge` | 1 | 20 |  |
| extensions.career_modules_marketplace.openMenu `ge` | 1 | 929 |  |
| extensions.career_modules_marketplace.removeVehicleListing `ge` | 1 | 69 |  |
| extensions.career_modules_marketplace.generateOffer `ge` | 1 | 147 |  |
| extensions.career_modules_marketplace.generatePersonality `ge` | 2 | 77 | table |
| extensions.career_modules_marketplace.startNegotiateBuyingOffer `ge` | 2 | 351 |  |
| extensions.career_modules_marketplace.startNegotiateSellingOffer `ge` | 1 | 402 |  |
| extensions.career_modules_marketplace.getNegotiationState `ge` | 0 | 284 | table |
| extensions.career_modules_marketplace.makeNegotiationOffer `ge` | 1 | 797 |  |
| extensions.career_modules_marketplace.takeTheirOffer `ge` | 0 | 801 |  |
| extensions.career_modules_marketplace.cancelNegotiation `ge` | 0 | 454 |  |
| extensions.career_modules_milestones_general.claim `ge` | 1 | 59 |  |
| extensions.career_modules_milestones_general.getMilestone `ge` | 1 | 78 |  |
| extensions.career_modules_milestones_general.printDebug `ge` | 0 | 160 |  |
| extensions.career_modules_milestones_generalMilestones_branches.setNotificationTarget `ge` | 1 | 65 |  |
| extensions.career_modules_milestones_generalMilestones_delivery.setNotificationTarget `ge` | 1 | 162 |  |
| extensions.career_modules_milestones_generalMilestones_missions.makeAllMissionStarMilestones `ge` | 2 | 39 |  |
| extensions.career_modules_milestones_generalMilestones_missions.makeBranchMissionStarMilestones `ge` | 3 | 145 |  |
| extensions.career_modules_milestones_generalMilestones_missions.makeUnlockMissionsMilestones `ge` | 2 | 251 |  |
| extensions.career_modules_milestones_generalMilestones_missions.setNotificationTarget `ge` | 1 | 285 |  |
| extensions.career_modules_milestones_generalMilestones_money.setNotificationTarget `ge` | 1 | 116 |  |
| extensions.career_modules_milestones_generalMilestones_statistic.registerStastisticCallback `ge` | 1 | 95 |  |
| extensions.career_modules_milestones_generalMilestones_statistic.clearStatisticCallback `ge` | 1 | 88 |  |
| extensions.career_modules_milestones_milestones.claim `ge` | 1 | 34 |  |
| extensions.career_modules_milestones_milestones.getMilestones `ge` | 1 | 48 | table |
| extensions.career_modules_milestones_milestones.milestoneReached `ge` | 1 | 78 |  |
| extensions.career_modules_milestones_milestones.loadSaveData `ge` | 0 | 92 |  |
| extensions.career_modules_milestones_milestones.onExtensionLoaded `ge` | 0 | 101 |  |
| extensions.career_modules_milestones_milestones.unclaimedMilestonesCount `ge` | 0 | 111 |  |
| extensions.career_modules_milestones_milestones.minorLinear `ge` | 1 | 140 |  |
| extensions.career_modules_milestones_milestones.majorLinear `ge` | 1 | 141 |  |
| extensions.career_modules_missionWrapper.cacheMissionData `ge` | 2 | 48 |  |
| extensions.career_modules_missionWrapper.onMissionLoaded `ge` | 2 | 52 |  |
| extensions.career_modules_missionWrapper.saveMission `ge` | 1 | 56 |  |
| extensions.career_modules_missionWrapper.preMissionHandling `ge` | 2 | 76 |  |
| extensions.career_modules_missionWrapper.onExtensionLoaded `ge` | 0 | 20 |  |
| extensions.career_modules_missionWrapper.onExtensionUnloaded `ge` | 0 | 27 |  |
| extensions.career_modules_painting.start `ge` | 2 | 105 |  |
| extensions.career_modules_painting.apply `ge` | 0 | 178 |  |
| extensions.career_modules_painting.close `ge` | 1 | 127 |  |
| extensions.career_modules_painting.getPaintData `ge` | 0 | 75 |  |
| extensions.career_modules_painting.setPaints `ge` | 3 | 248 |  |
| extensions.career_modules_painting.getFactoryPaint `ge` | 0 | 272 |  |
| extensions.career_modules_painting.getPrimerColor `ge` | 0 | 45 |  |
| extensions.career_modules_painting.onUIOpened `ge` | 0 | 278 |  |
| extensions.career_modules_partInventory.generateAndGetPartsFromVehicle `ge` | 1 | 197 | table |
| extensions.career_modules_partInventory.changedPartsCallback `ge` | 2 | 261 |  |
| extensions.career_modules_partInventory.initConditionsCallback `ge` | 2 | 108 |  |
| extensions.career_modules_partInventory.sendUIData `ge` | 0 | 371 |  |
| extensions.career_modules_partInventory.openMenu `ge` | 1 | 529 |  |
| extensions.career_modules_partInventory.closeMenu `ge` | 0 | 554 |  |
| extensions.career_modules_partInventory.partInventoryClosed `ge` | 0 | 576 |  |
| extensions.career_modules_partInventory.getSlotToPartIdMap `ge` | 0 | 580 |  |
| extensions.career_modules_partInventory.getPartPathToPartIdMap `ge` | 0 | 584 |  |
| extensions.career_modules_partInventory.getInventory `ge` | 0 | 588 |  |
| extensions.career_modules_partInventory.addPartToInventory `ge` | 1 | 252 |  |
| extensions.career_modules_partInventory.getPart `ge` | 2 | 520 |  |
| extensions.career_modules_partInventory.updatePartConditionsInInventory `ge` | 0 | 244 |  |
| extensions.career_modules_partInventory.sellParts `ge` | 1 | 124 |  |
| extensions.career_modules_partInventory.onExtensionLoaded `ge` | 0 | 454 |  |
| extensions.career_modules_partShopping.startShopping `ge` | 2 | 410 |  |
| extensions.career_modules_partShopping.installPart `ge` | 1 | 699 |  |
| extensions.career_modules_partShopping.installPartByPartShopId `ge` | 1 | 714 |  |
| extensions.career_modules_partShopping.removePartBySlot `ge` | 1 | 723 |  |
| extensions.career_modules_partShopping.updatePreviewVehicle `ge` | 1 | 335 |  |
| extensions.career_modules_partShopping.cancelShopping `ge` | 0 | 754 |  |
| extensions.career_modules_partShopping.applyShopping `ge` | 0 | 811 |  |
| extensions.career_modules_partShopping.sendShoppingDataToUI `ge` | 0 | 313 |  |
| extensions.career_modules_partShopping.getPartsInShop `ge` | 0 | 840 |  |
| extensions.career_modules_partShopping.getShoppingCart `ge` | 0 | 844 |  |
| extensions.career_modules_partShopping.isShoppingSessionActive `ge` | 0 | 836 |  |
| extensions.career_modules_partShopping.setupTether `ge` | 0 | 395 |  |
| extensions.career_modules_payment.canPay `ge` | 1 | 9 | boolean |
| extensions.career_modules_payment.pay `ge` | 2 | 18 | boolean |
| extensions.career_modules_permissions.getStatusForTag `ge` | 2 | 41 |  |
| extensions.career_modules_playbookWriter.onExtensionLoaded `ge` | 0 | 32 |  |
| extensions.career_modules_playbookWriter.addMissionPlayedEntry `ge` | 2 | 14 |  |
| extensions.career_modules_playerAbstract.openPlayerAbstractMenu `ge` | 1 | 6 |  |
| extensions.career_modules_playerAbstract.getPlayerAbstractData `ge` | 0 | 39 |  |
| extensions.career_modules_playerAbstract.closePlayerAbstractMenu `ge` | 0 | 30 |  |
| extensions.career_modules_playerAttributes.addAttributes `ge` | 2 | 32 |  |
| extensions.career_modules_playerAttributes.setAttributes `ge` | 2 | 87 |  |
| extensions.career_modules_playerAttributes.getAttribute `ge` | 1 | 96 |  |
| extensions.career_modules_playerAttributes.getAttributeValue `ge` | 1 | 99 |  |
| extensions.career_modules_playerAttributes.getAllAttributes `ge` | 0 | 103 |  |
| extensions.career_modules_playerAttributes.getAttributeLog `ge` | 0 | 260 |  |
| extensions.career_modules_playerAttributes.onExtensionLoaded `ge` | 0 | 107 |  |
| extensions.career_modules_playerDriving.getPlayerData `ge` | 0 | 16 |  |
| extensions.career_modules_playerDriving.retrieveFavoriteVehicle `ge` | 0 | 103 |  |
| extensions.career_modules_playerDriving.playerPursuitActive `ge` | 0 | 92 |  |
| extensions.career_modules_playerDriving.resetPlayerState `ge` | 0 | 96 |  |
| extensions.career_modules_playerDriving.teleportToGarage `ge` | 3 | 151 |  |
| extensions.career_modules_playerDriving.showPosition `ge` | 1 | 302 |  |
| extensions.career_modules_quickTravel.quickTravelToPos `ge` | 3 | 33 |  |
| extensions.career_modules_quickTravel.quickTravelToGarage `ge` | 1 | 45 |  |
| extensions.career_modules_quickTravel.getPriceForQuickTravel `ge` | 1 | 19 | multiple |
| extensions.career_modules_quickTravel.getPriceForQuickTravelToGarage `ge` | 1 | 54 |  |
| extensions.career_modules_rentals.isRenting `ge` | 0 | 42 |  |
| extensions.career_modules_reputation.addReputationToOrg `ge` | 1 | 101 |  |
| extensions.career_modules_reputation.getLabel `ge` | 1 | 133 |  |
| extensions.career_modules_reputation.getMinimumValue `ge` | 0 | 137 |  |
| extensions.career_modules_reputation.getMaximumValue `ge` | 0 | 141 |  |
| extensions.career_modules_reputation.getValueForEvent `ge` | 1 | 78 |  |
| extensions.career_modules_spawnPoints.onExtensionLoaded `ge` | 0 | 97 |  |
| extensions.career_modules_spawnPoints.isSpawnPointDiscovered `ge` | 2 | 90 |  |
| extensions.career_modules_spawnPoints.getUnlockedSpawnpointsData `ge` | 0 | 76 |  |
| extensions.career_modules_speedTraps.onExtensionLoaded `ge` | 0 | 119 |  |
| extensions.career_modules_testDrive.abandonTestDrive `ge` | 0 | 196 |  |
| extensions.career_modules_testDrive.onPoiDetailPromptOpening `ge` | 2 | 255 |  |
| extensions.career_modules_testDrive.getTimeLeft `ge` | 0 | 227 |  |
| extensions.career_modules_testDrive.stop `ge` | 0 | 189 |  |
| extensions.career_modules_testDrive.start `ge` | 2 | 99 |  |
| extensions.career_modules_testDrive.isActive `ge` | 0 | 231 |  |
| extensions.career_modules_testDrive.formatTestDriveToRawPoi `ge` | 1 | 236 |  |
| extensions.career_modules_testDrive.resetData `ge` | 0 | 52 |  |
| extensions.career_modules_testDrive.onVehicleRepairedByInsurance `ge` | 1 | 185 |  |
| extensions.career_modules_tether.startBoxTether `ge` | 6 | 27 |  |
| extensions.career_modules_tether.startSphereTether `ge` | 4 | 63 |  |
| extensions.career_modules_tether.startDoorTether `ge` | 4 | 38 |  |
| extensions.career_modules_tether.startCapsuleTetherBetweenStaticAndVehicle `ge` | 6 | 112 |  |
| extensions.career_modules_tether.startCapsuleTetherBetweenStatics `ge` | 6 | 94 |  |
| extensions.career_modules_tether.startVehicleTether `ge` | 4 | 153 |  |
| extensions.career_modules_tether.addTether `ge` | 1 | 202 |  |
| extensions.career_modules_tether.removeTether `ge` | 1 | 210 |  |
| extensions.career_modules_tether.drawAxisBox `ge` | 5 | 221 |  |
| extensions.career_modules_tuning.start `ge` | 2 | 261 |  |
| extensions.career_modules_tuning.apply `ge` | 2 | 282 |  |
| extensions.career_modules_tuning.getTuningData `ge` | 0 | 163 |  |
| extensions.career_modules_tuning.close `ge` | 0 | 322 |  |
| extensions.career_modules_tuning.applyShopping `ge` | 0 | 142 |  |
| extensions.career_modules_tuning.cancelShopping `ge` | 0 | 318 |  |
| extensions.career_modules_tuning.removeVarFromShoppingCart `ge` | 1 | 305 |  |
| extensions.career_modules_uiUtils.getCareerStatusData `ge` | 0 | 10 |  |
| extensions.career_modules_uiUtils.getCareerSimpleStats `ge` | 0 | 21 |  |
| extensions.career_modules_uiUtils.storeCareerPauseContextButtons `ge` | 1 | 51 |  |
| extensions.career_modules_uiUtils.callCareerPauseContextButtons `ge` | 1 | 58 |  |
| extensions.career_modules_uiUtils.getCareerPauseContextButtons `ge` | 0 | 62 |  |
| extensions.career_modules_uiUtils.getCareerCurrentLevelName `ge` | 0 | 129 |  |
| extensions.career_modules_unlockFlags.onCareerActivated `ge` | 0 | 59 |  |
| extensions.career_modules_unlockFlags.getFlag `ge` | 1 | 29 |  |
| extensions.career_modules_unlockFlags.getFlagDefinition `ge` | 1 | 38 |  |
| extensions.career_modules_unlockFlags.setFlag `ge` | 2 | 49 |  |
| extensions.career_modules_unlockFlags.resetFlags `ge` | 0 | 55 |  |
| extensions.career_modules_valueCalculator.getPartDifference `ge` | 3 | 54 | multiple |
| extensions.career_modules_valueCalculator.getInventoryVehicleValue `ge` | 2 | 198 |  |
| extensions.career_modules_valueCalculator.getPartValue `ge` | 1 | 90 |  |
| extensions.career_modules_valueCalculator.getAdjustedVehicleBaseValue `ge` | 2 | 46 |  |
| extensions.career_modules_valueCalculator.getVehicleMileageById `ge` | 1 | 32 |  |
| extensions.career_modules_valueCalculator.getBrokenPartsThreshold `ge` | 0 | 232 |  |
| extensions.career_modules_valueCalculator.getRepairDetails `ge` | 1 | 137 |  |
| extensions.career_modules_valueCalculator.getNumberOfBrokenParts `ge` | 1 | 204 |  |
| extensions.career_modules_valueCalculator.partConditionsNeedRepair `ge` | 1 | 222 |  |
| extensions.career_modules_vehicleClassGrouping.getAggressionMultiplier `ge` | 1 | 37 |  |
| extensions.career_modules_vehicleClassGrouping.generateGroup `ge` | 8 | 50 |  |
| extensions.career_modules_vehicleDeletionService.flagForDeletion `ge` | 2 | 71 |  |
| extensions.career_modules_vehicleDeletionService.clearFlags `ge` | 1 | 78 |  |
| extensions.career_modules_vehicleDeletionService.deleteFlaggedVehicles `ge` | 0 | 65 |  |
| extensions.career_modules_vehicleDeletionService.onExtensionLoaded `ge` | 0 | 12 |  |
| extensions.career_modules_vehiclePerformance.startDragTest `ge` | 1 | 114 |  |
| extensions.career_modules_vehiclePerformance.invalidateCertification `ge` | 1 | 54 |  |
| extensions.career_modules_vehiclePerformance.isTestInProgress `ge` | 0 | 572 |  |
| extensions.career_modules_vehiclePerformance.cancelTest `ge` | 1 | 490 |  |
| extensions.career_modules_vehiclePerformance.getAggregateScoresFromVehId `ge` | 1 | 471 |  |
| extensions.career_modules_vehiclePerformance.getVehicleClass `ge` | 1 | 478 |  |
| extensions.career_modules_vehiclePerformance.addScoresToPerformanceData `ge` | 1 | 485 |  |
| extensions.career_modules_vehiclePerformance.openMenu `ge` | 1 | 551 |  |
| extensions.career_modules_vehiclePerformance.onVehicleDamaged `ge` | 2 | 559 |  |
| extensions.career_modules_vehicleShopping.openShop `ge` | 3 | 485 |  |
| extensions.career_modules_vehicleShopping.showVehicle `ge` | 1 | 729 |  |
| extensions.career_modules_vehicleShopping.navigateToPos `ge` | 1 | 477 |  |
| extensions.career_modules_vehicleShopping.buySpawnedVehicle `ge` | 1 | 566 |  |
| extensions.career_modules_vehicleShopping.quickTravelToVehicle `ge` | 1 | 734 |  |
| extensions.career_modules_vehicleShopping.updateVehicleList `ge` | 1 | 185 |  |
| extensions.career_modules_vehicleShopping.getShoppingData `ge` | 0 | 83 |  |
| extensions.career_modules_vehicleShopping.sendPurchaseDataToUi `ge` | 0 | 581 |  |
| extensions.career_modules_vehicleShopping.getCurrentSellerId `ge` | 0 | 860 |  |
| extensions.career_modules_vehicleShopping.getVisualValueFromMileage `ge` | 1 | 393 |  |
| extensions.career_modules_vehicleShopping.getVehicleInfoByShopId `ge` | 1 | 157 |  |
| extensions.career_modules_vehicleShopping.openPurchaseMenu `ge` | 3 | 739 |  |
| extensions.career_modules_vehicleShopping.updateInsuranceSelection `ge` | 1 | 746 |  |
| extensions.career_modules_vehicleShopping.buyFromPurchaseMenu `ge` | 2 | 753 |  |
| extensions.career_modules_vehicleShopping.openInventoryMenuForTradeIn `ge` | 0 | 803 |  |
| extensions.career_modules_vehicleShopping.removeTradeInVehicle `ge` | 0 | 798 |  |
| extensions.career_modules_vehicleShopping.endShopping `ge` | 0 | 535 |  |
| extensions.career_modules_vehicleShopping.cancelShopping `ge` | 0 | 540 |  |
| extensions.career_modules_vehicleShopping.cancelPurchase `ge` | 1 | 790 |  |
| extensions.career_modules_vehicleShopping.getVehiclesInShop `ge` | 0 | 553 |  |
| extensions.career_modules_vehicleShopping.onVehicleSpawnFinished `ge` | 1 | 426 |  |
| extensions.career_modules_vehicleShopping.onExtensionLoaded `ge` | 0 | 827 |  |
| extensions.career_modules_vehicleShopping.onShoppingMenuClosed `ge` | 0 | 549 |  |
| extensions.career_modules_vehicleShopping.onUiChangedState `ge` | 1 | 909 |  |
| extensions.career_modules_vehicleShopping.getEligibleVehiclesWithoutDealershipVehicles `ge` | 2 | 166 |  |
| extensions.career_saveSystem.setSaveSlot `ge` | 2 | 70 | boolean |
| extensions.career_saveSystem.removeSaveSlot `ge` | 1 | 101 |  |
| extensions.career_saveSystem.renameSaveSlot `ge` | 2 | 140 |  |
| extensions.career_saveSystem.getCurrentSaveSlot `ge` | 0 | 156 | multiple |
| extensions.career_saveSystem.saveCurrent `ge` | 1 | 213 |  |
| extensions.career_saveSystem.getAllSaveSlots `ge` | 0 | 240 |  |
| extensions.career_saveSystem.getSaveRootDirectory `ge` | 0 | 253 |  |
| extensions.career_saveSystem.getAutosave `ge` | 2 | 32 | multiple |
| extensions.career_saveSystem.getAllAutosaves `ge` | 1 | 15 |  |
| extensions.career_saveSystem.getSaveSystemVersion `ge` | 0 | 271 |  |
| extensions.career_saveSystem.getBackwardsCompVersion `ge` | 0 | 275 |  |
| extensions.career_saveSystem.saveFailed `ge` | 0 | 166 |  |
| extensions.career_saveSystem.registerAsyncSaveExtension `ge` | 1 | 202 |  |
| extensions.career_saveSystem.asyncSaveExtensionFinished `ge` | 1 | 206 |  |
| extensions.career_saveSystem.jsonWriteFileSafe `ge` | 5 | 170 | boolean |
| extensions.career_saveSystem.onExtensionLoaded `ge` | 0 | 250 |  |
| extensions.career_saveSystem.onSerialize `ge` | 0 | 257 |  |
| extensions.career_saveSystem.onDeserialized `ge` | 1 | 265 |  |
| extensions.core_activity.startActivity `ge` | 1 | 16 |  |
| extensions.core_audio.registerBaseBank `ge` | 1 | 193 |  |
| extensions.core_audio.loadLevelBank `ge` | 1 | 213 |  |
| extensions.core_audio.loadVehicleBank `ge` | 1 | 249 |  |
| extensions.core_audio.triggerBankHotloading `ge` | 0 | 366 |  |
| extensions.core_audio.onClientEndMission `ge` | 0 | 348 |  |
| extensions.core_audio.onSerialize `ge` | 0 | 412 | table |
| extensions.core_audio.onDeserialized `ge` | 1 | 419 |  |
| extensions.core_audioRibbon.onSerialize `ge` | 0 | 612 |  |
| extensions.core_audioRibbon.onDeserialized `ge` | 1 | 625 |  |
| extensions.core_audioRibbon.createEmitterHost `ge` | 1 | 455 | table |
| extensions.core_audioRibbon.updateRibbonData `ge` | 1 | 437 |  |
| extensions.core_audioRibbon.removeRibbon `ge` | 1 | 427 |  |
| extensions.core_audioRibbon.recomputeMap `ge` | 0 | 407 |  |
| extensions.core_audioRibbon.clearAllSFXEmitters `ge` | 0 | 415 |  |
| extensions.core_audioRibbon.clearNearFarLists `ge` | 0 | 701 |  |
| extensions.core_audioRibbon.clearRibbonNames `ge` | 0 | 707 |  |
| extensions.core_audioRibbon.getRibbons `ge` | 0 | 710 |  |
| extensions.core_audioRibbon.setRibbons `ge` | 1 | 711 |  |
| extensions.core_audioRibbon.getRibbonNames `ge` | 0 | 712 |  |
| extensions.core_audioRibbon.getNearList `ge` | 0 | 713 |  |
| extensions.core_audioRibbon.getFarList `ge` | 0 | 714 |  |
| extensions.core_audioRibbon.getSfxEmitters `ge` | 0 | 715 |  |
| extensions.core_busRouteManager.onExtensionLoaded `ge` | 0 | 73 |  |
| extensions.core_busRouteManager.onBusUpdate `ge` | 1 | 119 |  |
| extensions.core_busRouteManager.setLine `ge` | 3 | 83 |  |
| extensions.core_busRouteManager.onAtStop `ge` | 1 | 96 |  |
| extensions.core_camera.processVehicleCameraConfigChanged `ge` | 3 | 528 |  |
| extensions.core_camera.onTrigger `ge` | 1 | 1141 |  |
| extensions.core_camera.onDespawnObject `ge` | 2 | 1370 |  |
| extensions.core_camera.onClientEndMission `ge` | 0 | 1512 |  |
| extensions.core_camera.onSerialize `ge` | 0 | 1429 |  |
| extensions.core_camera.onDeserialized `ge` | 1 | 1464 |  |
| extensions.core_camera.clearInputs `ge` | 0 | 197 |  |
| extensions.core_camera.resetCameraByID `ge` | 1+ | 1029 |  |
| extensions.core_camera.setRotation `ge` | 1+ | 1033 |  |
| extensions.core_camera.setFOV `ge` | 1+ | 1045 |  |
| extensions.core_camera.setOffset `ge` | 1+ | 1057 |  |
| extensions.core_camera.setRefNodes `ge` | 1+ | 1065 |  |
| extensions.core_camera.setRef `ge` | 1+ | 1069 |  |
| extensions.core_camera.setTargetMode `ge` | 1+ | 1073 |  |
| extensions.core_camera.setDefaultDistance `ge` | 1+ | 1077 |  |
| extensions.core_camera.setDistance `ge` | 1+ | 1081 |  |
| extensions.core_camera.setMaxDistance `ge` | 1+ | 1085 |  |
| extensions.core_camera.setDefaultRotation `ge` | 1+ | 1089 |  |
| extensions.core_camera.setSkipFovModifier `ge` | 1+ | 1093 |  |
| extensions.core_camera.setFastSpeedModifier `ge` | 1 | 1520 |  |
| extensions.core_camera.changeSpeed `ge` | 1 | 1599 |  |
| extensions.core_camera.setPosition `ge` | 1+ | 1099 |  |
| extensions.core_camera.setSmoothedCam `ge` | 1+ | 1111 |  |
| extensions.core_camera.setNewtonRotation `ge` | 1+ | 1115 |  |
| extensions.core_camera.setNewtonTranslation `ge` | 1+ | 1119 |  |
| extensions.core_camera.setByName `ge` | 0+ | 383 |  |
| extensions.core_camera.setVehicleCameraByNameWithId `ge` | 4 | 347 |  |
| extensions.core_camera.exitCinematicCamera `ge` | 0 | 1658 |  |
| extensions.core_camera.toggleEnabledById `ge` | 1 | 234 |  |
| extensions.core_camera.setBySlotId `ge` | 2 | 485 |  |
| extensions.core_camera.changeOrder `ge` | 2 | 208 |  |
| extensions.core_camera.getCameraDataById `ge` | 1 | 426 |  |
| extensions.core_camera.getDriverData `ge` | 1 | 444 |  |
| extensions.core_camera.getDriverDataById `ge` | 1 | 433 | multiple |
| extensions.core_camera.getActiveCamName `ge` | 1 | 448 |  |
| extensions.core_camera.getActiveCamNameByVehId `ge` | 1 | 466 |  |
| extensions.core_camera.displayCameraNameUI `ge` | 1 | 154 |  |
| extensions.core_camera.isCameraInside `ge` | 2 | 408 |  |
| extensions.core_camera.timeSinceLastRotation `ge` | 0 | 1217 |  |
| extensions.core_camera.getGlobalCameras `ge` | 0 | 99 |  |
| extensions.core_camera.objectTeleported `ge` | 4 | 774 |  |
| extensions.core_camera.setGlobalCameraByName `ge` | 3 | 243 |  |
| extensions.core_camera.setPosRot `ge` | 8 | 1524 |  |
| extensions.core_camera.setSpeed `ge` | 1 | 1532 |  |
| extensions.core_camera.getSpeed `ge` | 0 | 1536 |  |
| extensions.core_camera.getActiveGlobalCameraName `ge` | 0 | 1611 |  |
| extensions.core_camera.getPosition `ge` | 0 | 1548 | vec3 |
| extensions.core_camera.getPositionXYZ `ge` | 0 | 1552 | multiple |
| extensions.core_camera.getUp `ge` | 0 | 1557 |  |
| extensions.core_camera.getRight `ge` | 0 | 1563 |  |
| extensions.core_camera.getForward `ge` | 0 | 1569 |  |
| extensions.core_camera.getForwardXYZ `ge` | 0 | 1576 | multiple |
| extensions.core_camera.getQuat `ge` | 0 | 1582 | quat |
| extensions.core_camera.getQuatXYZW `ge` | 0 | 1586 | multiple |
| extensions.core_camera.getFovDeg `ge` | 0 | 1591 |  |
| extensions.core_camera.getFovRad `ge` | 0 | 1595 |  |
| extensions.core_camera.proxy_Player `ge` | 1+ | 1136 |  |
| extensions.core_camera.globalCameraFunction `ge` | 2+ | 1123 |  |
| extensions.core_camera.requestConfig `ge` | 1 | 191 |  |
| extensions.core_camera.notifyUI `ge` | 2 | 180 |  |
| extensions.core_camera.resetConfiguration `ge` | 0 | 1399 |  |
| extensions.core_camera.setVehicleCameraByIndexOffset `ge` | 2 | 957 |  |
| extensions.core_camera.resetCamera `ge` | 1 | 1200 |  |
| extensions.core_camera.setLookBack `ge` | 2 | 1540 |  |
| extensions.core_camera.hotkey `ge` | 3 | 1205 |  |
| extensions.core_camera.rotate_pitch `ge` | 2 | 1257 |  |
| extensions.core_camera.rotate_pitch_up `ge` | 2 | 1245 |  |
| extensions.core_camera.rotate_pitch_down `ge` | 2 | 1251 |  |
| extensions.core_camera.rotate_yaw `ge` | 2 | 1233 |  |
| extensions.core_camera.rotate_yaw_left `ge` | 2 | 1221 |  |
| extensions.core_camera.rotate_yaw_right `ge` | 2 | 1227 |  |
| extensions.core_camera.cameraZoom `ge` | 1 | 1301 |  |
| extensions.core_camera.rotate_yaw_relative `ge` | 1 | 1312 |  |
| extensions.core_camera.rotate_pitch_relative `ge` | 1 | 1316 |  |
| extensions.core_camera.rotate_roll_right `ge` | 2 | 1269 |  |
| extensions.core_camera.rotate_roll_left `ge` | 2 | 1275 |  |
| extensions.core_camera.yawAbs `ge` | 1 | 1333 |  |
| extensions.core_camera.rollAbs `ge` | 1 | 1334 |  |
| extensions.core_camera.pitchAbs `ge` | 1 | 1335 |  |
| extensions.core_camera.xAxisAbs `ge` | 1 | 1340 |  |
| extensions.core_camera.yAxisAbs `ge` | 1 | 1341 |  |
| extensions.core_camera.zAxisAbs `ge` | 1 | 1342 |  |
| extensions.core_camera.yAxisMoveStep `ge` | 1 | 1345 |  |
| extensions.core_camera.moveleft `ge` | 1 | 1321 |  |
| extensions.core_camera.moveright `ge` | 1 | 1322 |  |
| extensions.core_camera.moveforward `ge` | 1 | 1323 |  |
| extensions.core_camera.movebackward `ge` | 1 | 1324 |  |
| extensions.core_camera.moveup `ge` | 1 | 1325 |  |
| extensions.core_camera.movedown `ge` | 1 | 1326 |  |
| extensions.core_camera.moveForwardBackward `ge` | 1 | 1281 |  |
| extensions.core_camera.moveLeftRight `ge` | 1 | 1291 |  |
| extensions.core_camera.getLastFilter `ge` | 0 | 1210 |  |
| extensions.core_chat.send `ge` | 2 | 136 |  |
| extensions.core_chat.requestState `ge` | 0 | 34 |  |
| extensions.core_chat.activate `ge` | 0 | 142 |  |
| extensions.core_chat.deactivate `ge` | 0 | 156 |  |
| extensions.core_checkpoints.onClientEndMission `ge` | 1 | 266 |  |
| extensions.core_checkpoints.completeReset `ge` | 2 | 54 |  |
| extensions.core_checkpoints.onSerialize `ge` | 0 | 206 |  |
| extensions.core_checkpoints.onDeserialized `ge` | 1 | 217 |  |
| extensions.core_checkpoints.onResumeCampaign `ge` | 2 | 285 |  |
| extensions.core_checkpoints.saveCheckpoint `ge` | 3 | 25 |  |
| extensions.core_checkpoints.saveAIPath `ge` | 2 | 87 |  |
| extensions.core_commandhandler.onSchemeCommand `ge` | 2 | 25 |  |
| extensions.core_commandhandler.onSerialize `ge` | 0 | 172 | table |
| extensions.core_commandhandler.onDeserialized `ge` | 1 | 176 |  |
| extensions.core_couplerCameraModifier.checkForTrailer `ge` | 2 | 17 | boolean |
| extensions.core_couplerCameraModifier.onSerialize `ge` | 0 | 188 | table |
| extensions.core_couplerCameraModifier.onDeserialized `ge` | 1 | 199 |  |
| extensions.core_dynamicProps.westCoastPole `ge` | 0 | 296 |  |
| extensions.core_dynamicProps.westCoastBin `ge` | 0 | 306 |  |
| extensions.core_dynamicProps.unloadAll `ge` | 0 | 286 |  |
| extensions.core_dynamicProps.createDynamicProps `ge` | 1 | 91 |  |
| extensions.core_environment.getTimeOfDayOptions `ge` | 1 | 133 |  |
| extensions.core_environment.getDefaultTimeOfDayOptions `ge` | 0 | 138 |  |
| extensions.core_environment.setState `ge` | 1 | 589 |  |
| extensions.core_environment.requestState `ge` | 0 | 833 |  |
| extensions.core_environment.reset `ge` | 0 | 769 |  |
| extensions.core_environment.getState `ge` | 0 | 559 |  |
| extensions.core_environment.reset_init `ge` | 0 | 779 |  |
| extensions.core_environment.setTimeOfDay `ge` | 1 | 142 |  |
| extensions.core_environment.getTimeOfDay `ge` | 0 | 161 |  |
| extensions.core_environment.cycleTimeOfDay `ge` | 0 | 175 |  |
| extensions.core_environment.getShadowDistance `ge` | 0 | 194 |  |
| extensions.core_environment.setShadowDistance `ge` | 1 | 201 |  |
| extensions.core_environment.getShadowSoftness `ge` | 0 | 208 |  |
| extensions.core_environment.setShadowSoftness `ge` | 1 | 215 |  |
| extensions.core_environment.getShadowLogWeight `ge` | 0 | 222 |  |
| extensions.core_environment.setShadowLogWeight `ge` | 1 | 229 |  |
| extensions.core_environment.getSkyBrightness `ge` | 0 | 236 |  |
| extensions.core_environment.setSkyBrightness `ge` | 1 | 243 |  |
| extensions.core_environment.getColorizeGradientFile `ge` | 0 | 250 |  |
| extensions.core_environment.setColorizeGradientFile `ge` | 1 | 257 |  |
| extensions.core_environment.getSunScaleGradientFile `ge` | 0 | 264 |  |
| extensions.core_environment.setSunScaleGradientFile `ge` | 1 | 271 |  |
| extensions.core_environment.getAmbientScaleGradientFile `ge` | 0 | 278 |  |
| extensions.core_environment.setAmbientScaleGradientFile `ge` | 1 | 285 |  |
| extensions.core_environment.getFogScaleGradientFile `ge` | 0 | 292 |  |
| extensions.core_environment.setFogScaleGradientFile `ge` | 1 | 299 |  |
| extensions.core_environment.getNightGradientFile `ge` | 0 | 306 |  |
| extensions.core_environment.setNightGradientFile `ge` | 1 | 313 |  |
| extensions.core_environment.getNightFogGradientFile `ge` | 0 | 320 |  |
| extensions.core_environment.setNightFogGradientFile `ge` | 1 | 327 |  |
| extensions.core_environment.setWindSpeed `ge` | 1 | 340 |  |
| extensions.core_environment.getWindSpeed `ge` | 0 | 351 |  |
| extensions.core_environment.setCloudCover `ge` | 1 | 360 |  |
| extensions.core_environment.getCloudCover `ge` | 0 | 371 |  |
| extensions.core_environment.getCloudCoverByID `ge` | 1 | 382 |  |
| extensions.core_environment.setCloudCoverByID `ge` | 2 | 391 |  |
| extensions.core_environment.getCloudExposureByID `ge` | 1 | 400 |  |
| extensions.core_environment.setCloudExposureByID `ge` | 2 | 409 |  |
| extensions.core_environment.getCloudWindByID `ge` | 1 | 418 |  |
| extensions.core_environment.setCloudWindByID `ge` | 2 | 427 |  |
| extensions.core_environment.getCloudHeightByID `ge` | 1 | 437 |  |
| extensions.core_environment.setCloudHeightByID `ge` | 2 | 446 |  |
| extensions.core_environment.setFogDensity `ge` | 1 | 460 |  |
| extensions.core_environment.getFogDensity `ge` | 0 | 470 | multiple |
| extensions.core_environment.setFogDensityOffset `ge` | 1 | 479 |  |
| extensions.core_environment.getFogDensityOffset `ge` | 0 | 487 |  |
| extensions.core_environment.setFogAtmosphereHeight `ge` | 1 | 496 |  |
| extensions.core_environment.getFogAtmosphereHeight `ge` | 0 | 504 |  |
| extensions.core_environment.setGravity `ge` | 1 | 513 |  |
| extensions.core_environment.getGravity `ge` | 0 | 526 |  |
| extensions.core_environment.setPrecipitation `ge` | 1 | 537 |  |
| extensions.core_environment.getPrecipitation `ge` | 0 | 544 |  |
| extensions.core_environment.enableChanges `ge` | 1 | 783 |  |
| extensions.core_environment.canChange `ge` | 0 | 788 |  |
| extensions.core_environment.getTemperatureK `ge` | 0 | 553 |  |
| extensions.core_environment.reloadGroundModels `ge` | 1 | 739 |  |
| extensions.core_environment.onClientEndMission `ge` | 0 | 896 |  |
| extensions.core_environment.dumpGroundModels `ge` | 0 | 607 |  |
| extensions.core_flowgraphManager.refreshDependencies `ge` | 0 | 21 |  |
| extensions.core_flowgraphManager.getAvailableStateTemplates `ge` | 0 | 323 | multiple |
| extensions.core_flowgraphManager.controls `ge` | 1 | 384 |  |
| extensions.core_flowgraphManager.onFlowgraphSceneObjectAdd `ge` | 3 | 396 |  |
| extensions.core_flowgraphManager.onFlowgraphSceneObjectRemove `ge` | 3 | 400 |  |
| extensions.core_flowgraphManager.onFlowgraphSceneObjectChanged `ge` | 3 | 404 |  |
| extensions.core_flowgraphManager.startNextFrame `ge` | 1 | 144 |  |
| extensions.core_flowgraphManager.removeNextFrame `ge` | 1 | 147 |  |
| extensions.core_flowgraphManager.getManagerByID `ge` | 1 | 69 |  |
| extensions.core_flowgraphManager.getManagerGraphNode `ge` | 3 | 78 |  |
| extensions.core_flowgraphManager.getManagerModule `ge` | 2 | 88 |  |
| extensions.core_flowgraphManager.onExtensionLoaded `ge` | 0 | 28 |  |
| extensions.core_flowgraphManager.getNextUniqueIdentifier `ge` | 0 | 9 |  |
| extensions.core_flowgraphManager.removeManager `ge` | 1 | 123 |  |
| extensions.core_flowgraphManager.loadManager `ge` | 3 | 96 |  |
| extensions.core_flowgraphManager.addManager `ge` | 1 | 114 |  |
| extensions.core_flowgraphManager.getAllManagers `ge` | 0 | 65 |  |
| extensions.core_flowgraphManager.clearAllManagers `ge` | 0 | 58 |  |
| extensions.core_flowgraphManager.onDeserialized `ge` | 1 | 241 |  |
| extensions.core_flowgraphManager.onSerialize `ge` | 0 | 221 | table |
| extensions.core_flowgraphManager.getSingleton `ge` | 1 | 364 |  |
| extensions.core_flowgraphManager.getAvailableNodeTemplates `ge` | 0 | 259 | multiple |
| extensions.core_flowgraphManager.getAvailablePinTypes `ge` | 1 | 299 |  |
| extensions.core_flowgraphManager.startOnLoadingScreenFadeout `ge` | 1 | 160 |  |
| extensions.core_forest.getForestObject `ge` | 0 | 9 |  |
| extensions.core_funstuff.breakAllBreakgroups `ge` | 0 | 63 | table |
| extensions.core_funstuff.breakHinges `ge` | 0 | 68 | table |
| extensions.core_funstuff.deflateTires `ge` | 0 | 73 | table |
| extensions.core_funstuff.deflateRandomTire `ge` | 0 | 78 | table |
| extensions.core_funstuff.igniteVehicle `ge` | 0 | 83 | table |
| extensions.core_funstuff.extinguishVehicle `ge` | 0 | 88 | table |
| extensions.core_funstuff.explodeVehicle `ge` | 0 | 111 | table |
| extensions.core_funstuff.toggleForceField `ge` | 0 | 7 | table |
| extensions.core_funstuff.openLatches `ge` | 0 | 226 | table |
| extensions.core_funstuff.closeLatches `ge` | 0 | 231 | table |
| extensions.core_funstuff.flingUpward `ge` | 0 | 23 | table |
| extensions.core_funstuff.flingDownward `ge` | 0 | 31 | table |
| extensions.core_funstuff.boost `ge` | 0 | 39 | table |
| extensions.core_funstuff.boostBackwards `ge` | 0 | 50 | table |
| extensions.core_funstuff.registerFunstuffActions `ge` | 1 | 249 |  |
| extensions.core_gameContext.getWIPWarningLabel `ge` | 0 | 25 |  |
| extensions.core_gameContext.getGameContext `ge` | 0+ | 7 | table |
| extensions.core_gameContext.toggleMenues `ge` | 0 | 17 |  |
| extensions.core_gamestate.onDeserialized `ge` | 1 | 162 |  |
| extensions.core_gamestate.requestGameState `ge` | 0 | 23 |  |
| extensions.core_gamestate.setGameState `ge` | 4 | 29 |  |
| extensions.core_gamestate.requestMainMenuState `ge` | 0 | 47 |  |
| extensions.core_gamestate.requestEnterLoadingScreen `ge` | 2 | 87 |  |
| extensions.core_gamestate.requestExitLoadingScreen `ge` | 2 | 127 |  |
| extensions.core_gamestate.loading `ge` | 0 | 79 |  |
| extensions.core_gamestate.getLoadingStatus `ge` | 1 | 83 |  |
| extensions.core_gamestate.loadingScreenActive `ge` | 0 | 156 |  |
| extensions.core_gamestate.onUIInitialised `ge` | 0 | 165 |  |
| extensions.core_gamestate.onExtensionLoaded `ge` | 0 | 177 |  |
| extensions.core_gamestate.onUiChangedState `ge` | 2 | 210 |  |
| extensions.core_groundMarkerArrows.createArrowPool `ge` | 1 | 50 |  |
| extensions.core_groundMarkerArrows.updateArrows `ge` | 2 | 121 |  |
| extensions.core_groundMarkerArrows.clearArrows `ge` | 0 | 29 |  |
| extensions.core_groundMarkers.setPath `ge` | 2 | 246 |  |
| extensions.core_groundMarkers.getPathLength `ge` | 0 | 43 | number |
| extensions.core_groundMarkers.onClientEndMission `ge` | 0 | 334 |  |
| extensions.core_groundMarkers.onExtensionUnloaded `ge` | 0 | 338 |  |
| extensions.core_groundMarkers.onSerialize `ge` | 0 | 342 |  |
| extensions.core_groundMarkers.resetAll `ge` | 0 | 320 |  |
| extensions.core_groundMarkers.generateRouteDecals `ge` | 1 | 139 |  |
| extensions.core_groundMarkers.sendToApp `ge` | 0 | 231 |  |
| extensions.core_groundMarkers.currentlyHasTarget `ge` | 0 | 346 |  |
| extensions.core_groundMarkers.getTargetPos `ge` | 0 | 349 |  |
| extensions.core_groundMarkers.setFocus `ge` | 11 | 307 |  |
| extensions.core_hardwareinfo.getInfo `ge` | 0 | 11 |  |
| extensions.core_hardwareinfo.requestInfo `ge` | 0 | 180 |  |
| extensions.core_hardwareinfo.logInfo `ge` | 1 | 187 |  |
| extensions.core_hardwareinfo.runPhysicsBenchmark `ge` | 0 | 198 |  |
| extensions.core_hardwareinfo.onBananaBenchReady `ge` | 1 | 206 |  |
| extensions.core_hardwareinfo.latestBananbench `ge` | 0 | 217 |  |
| extensions.core_hardwareinfo.latestBenchmarkExists `ge` | 0 | 221 |  |
| extensions.core_hardwareinfo.acknowledgeWarning `ge` | 1 | 225 |  |
| extensions.core_hardwareinfo.diskInfoCallback `ge` | 1 | 234 |  |
| extensions.core_hardwareinfo.runDiskUsage `ge` | 0 | 248 |  |
| extensions.core_highscores.setHighscores `ge` | 1 | 34 |  |
| extensions.core_highscores.getHighscores `ge` | 0 | 25 |  |
| extensions.core_highscores.setScenarioHighscores `ge` | 7 | 77 |  |
| extensions.core_highscores.setScenarioHighscoresCustom `ge` | 5 | 86 |  |
| extensions.core_highscores.getScenarioHighscores `ge` | 3 | 38 | table |
| extensions.core_hotlapping.newRaceStart `ge` | 1 | 887 |  |
| extensions.core_hotlapping.newRacePathnodeReached `ge` | 2 | 903 |  |
| extensions.core_hotlapping.newRaceLapSkipped `ge` | 2 | 929 |  |
| extensions.core_hotlapping.onMenuToggled `ge` | 0+ | 950 |  |
| extensions.core_hotlapping.newRaceStop `ge` | 0 | 958 |  |
| extensions.core_hotlapping.startHotlapping `ge` | 0 | 56 |  |
| extensions.core_hotlapping.stopHotlapping `ge` | 0 | 88 |  |
| extensions.core_hotlapping.start `ge` | 0 | 168 |  |
| extensions.core_hotlapping.skipLap `ge` | 1 | 209 |  |
| extensions.core_hotlapping.startAi `ge` | 0 | 104 |  |
| extensions.core_hotlapping.stopAi `ge` | 1 | 135 |  |
| extensions.core_hotlapping.addCheckPoint `ge` | 3 | 250 |  |
| extensions.core_hotlapping.setVisible `ge` | 1 | 298 |  |
| extensions.core_hotlapping.getTimeInfoRaw `ge` | 0 | 584 |  |
| extensions.core_hotlapping.setTime `ge` | 1 | 504 |  |
| extensions.core_hotlapping.setEndTime `ge` | 0 | 475 |  |
| extensions.core_hotlapping.passTimeToGUI `ge` | 0 | 459 |  |
| extensions.core_hotlapping.getTimeInfo `ge` | 0 | 592 |  |
| extensions.core_hotlapping.formatMillis `ge` | 2 | 714 |  |
| extensions.core_hotlapping.getDiffColor `ge` | 1 | 732 |  |
| extensions.core_hotlapping.clearAllCP `ge` | 0 | 291 |  |
| extensions.core_hotlapping.stopTimer `ge` | 0 | 216 |  |
| extensions.core_hotlapping.load `ge` | 1 | 748 |  |
| extensions.core_hotlapping.save `ge` | 1 | 797 |  |
| extensions.core_hotlapping.rename `ge` | 2 | 813 |  |
| extensions.core_hotlapping.changeRadius `ge` | 1 | 839 |  |
| extensions.core_hotlapping.refreshTracklist `ge` | 0 | 824 |  |
| extensions.core_hotlapping.onClientEndMission `ge` | 0 | 875 |  |
| extensions.core_hotlapping.onExtensionUnloaded `ge` | 0 | 879 |  |
| extensions.core_hotlapping.onCheckPointPassed `ge` | 1 | 329 |  |
| extensions.core_input_actionFilter.addAction `ge` | 3 | 92 |  |
| extensions.core_input_actionFilter.clear `ge` | 1 | 98 |  |
| extensions.core_input_actionFilter.setGroup `ge` | 2 | 103 |  |
| extensions.core_input_actionFilter.getGroup `ge` | 1 | 107 |  |
| extensions.core_input_actionFilter.isActionBlocked `ge` | 1 | 111 |  |
| extensions.core_input_actionFilter.createActionTemplate `ge` | 3 | 12 |  |
| extensions.core_input_actionFilter.getActionTemplates `ge` | 0 | 131 |  |
| extensions.core_input_actionFilter.onSerialize `ge` | 0 | 119 |  |
| extensions.core_input_actionFilter.onDeserialized `ge` | 1 | 126 |  |
| extensions.core_input_actionFilter.getBlockedActions `ge` | 0 | 135 |  |
| extensions.core_input_actions.getActiveActions `ge` | 0 | 358 |  |
| extensions.core_input_actions.upgradeAction `ge` | 1 | 170 |  |
| extensions.core_input_actions.actionToCommands `ge` | 2 | 202 | multiple |
| extensions.core_input_actions.uniqueNameToName `ge` | 2 | 20 |  |
| extensions.core_input_actions.nameToUniqueName `ge` | 2 | 16 |  |
| extensions.core_input_actions.executeCommand `ge` | 3 | 305 | number |
| extensions.core_input_actions.triggerDown `ge` | 1 | 272 |  |
| extensions.core_input_actions.triggerUp `ge` | 1 | 275 |  |
| extensions.core_input_actions.triggerDownUp `ge` | 1 | 278 |  |
| extensions.core_input_bindings.resetBindings `ge` | 1 | 859 |  |
| extensions.core_input_bindings.saveBindingsToDisk `ge` | 1 | 824 |  |
| extensions.core_input_bindings.notifyUI `ge` | 1 | 643 |  |
| extensions.core_input_bindings.menuActive `ge` | 1 | 1013 |  |
| extensions.core_input_bindings.setMenuActionMapEnabled `ge` | 1 | 940 |  |
| extensions.core_input_bindings.getMenuActionMapEnabled `ge` | 0 | 951 |  |
| extensions.core_input_bindings.setMenuActionEnabled `ge` | 3 | 918 |  |
| extensions.core_input_bindings.getAssignedPlayers `ge` | 0 | 964 |  |
| extensions.core_input_bindings.setPlayerToDevice `ge` | 2 | 885 |  |
| extensions.core_input_bindings.onDeviceChanged `ge` | 0 | 992 |  |
| extensions.core_input_bindings.getControlForAction `ge` | 1 | 629 |  |
| extensions.core_input_bindings.getUsedBindingsFiles `ge` | 0 | 1028 |  |
| extensions.core_input_bindings.enableCustomModifier `ge` | 3 | 1034 |  |
| extensions.core_input_bindings.getRecentDevices `ge` | 0 | 1125 |  |
| extensions.core_input_bindings.onUIStateTriggered `ge` | 3 | 955 |  |
| extensions.core_input_bindings.onExtensionLoaded `ge` | 0 | 1121 |  |
| extensions.core_input_bindings.onRecentDevicesChanged `ge` | 1 | 1130 |  |
| extensions.core_input_vehicleSwitching.switchCycleVehicle `ge` | 2 | 14 |  |
| extensions.core_input_vehicleSwitching.setVehicleOrder `ge` | 1 | 8 |  |
| extensions.core_input_virtualInput.createDevice `ge` | 5 | 9 | multiple |
| extensions.core_input_virtualInput.deleteDevice `ge` | 1 | 26 |  |
| extensions.core_input_virtualInput.getDeviceInfo `ge` | 1 | 38 |  |
| extensions.core_input_virtualInput.emit `ge` | 5 | 48 |  |
| extensions.core_inventory.addItem `ge` | 2 | 29 |  |
| extensions.core_inventory.removeItem `ge` | 2 | 58 |  |
| extensions.core_inventory.getItem `ge` | 2 | 85 |  |
| extensions.core_inventory.getItemList `ge` | 1 | 101 |  |
| extensions.core_inventory.processOnEvent `ge` | 2 | 129 |  |
| extensions.core_inventory.onResumeCampaign `ge` | 2 | 185 |  |
| extensions.core_inventory.onSerialize `ge` | 0 | 190 |  |
| extensions.core_inventory.onDeserialized `ge` | 1 | 196 |  |
| extensions.core_jobsystem.create `ge` | 2+ | 43 |  |
| extensions.core_jobsystem.wrap `ge` | 2 | 89 |  |
| extensions.core_jobsystem.getRunningJobCount `ge` | 0 | 140 |  |
| extensions.core_lapTimes.initialize `ge` | 0 | 53 |  |
| extensions.core_lapTimes.formatTime `ge` | 2 | 92 |  |
| extensions.core_lapTimes.getDiffFlavor `ge` | 1 | 109 |  |
| extensions.core_lapTimes.setConfiguration `ge` | 1 | 120 |  |
| extensions.core_lapTimes.onRaceStop `ge` | 0 | 147 |  |
| extensions.core_lapTimes.updateFastFromRace `ge` | 2 | 156 |  |
| extensions.core_lapTimes.updateSlowFromRace `ge` | 2 | 240 |  |
| extensions.core_lapTimes.updateStaticFromRace `ge` | 2 | 544 |  |
| extensions.core_lapTimes.updatePlacementFromRace `ge` | 2 | 570 |  |
| extensions.core_lapTimes.newRaceStart `ge` | 1 | 639 |  |
| extensions.core_lapTimes.newRaceStop `ge` | 0 | 652 |  |
| extensions.core_levels.maybeSpawnDefaultVehicle `ge` | 0 | 400 |  |
| extensions.core_levels.requestData `ge` | 0 | 221 |  |
| extensions.core_levels.startLevel `ge` | 4 | 532 |  |
| extensions.core_levels.expandMissionFileName `ge` | 1 | 459 |  |
| extensions.core_levels.getLevelName `ge` | 1 | 528 |  |
| extensions.core_levels.getLevelPaths `ge` | 0 | 213 |  |
| extensions.core_levels.getList `ge` | 0 | 67 |  |
| extensions.core_levels.getListWithStats `ge` | 0 | 583 | table |
| extensions.core_levels.getLevelNames `ge` | 0 | 205 |  |
| extensions.core_levels.getSimpleList `ge` | 0 | 205 |  |
| extensions.core_levels.getLevelByName `ge` | 1 | 226 |  |
| extensions.core_levels.getLevelTitle `ge` | 1 | 236 |  |
| extensions.core_levels.getLevelPreview `ge` | 1 | 261 |  |
| extensions.core_levels.getTimeOfDayOptions `ge` | 1 | 291 |  |
| extensions.core_loadMapCmd.onExtensionLoaded `ge` | 0 | 66 |  |
| extensions.core_loadMapCmd.onExtensionUnloaded `ge` | 0 | 69 |  |
| extensions.core_loadMapCmd.onSerialize `ge` | 0 | 103 | table |
| extensions.core_loadMapCmd.onDeserialized `ge` | 1 | 107 |  |
| extensions.core_loadMapCmd.set `ge` | 2 | 49 |  |
| extensions.core_metrics.onSerialize `ge` | 0 | 258 | table |
| extensions.core_metrics.onDeserialized `ge` | 1 | 262 |  |
| extensions.core_metrics.toggle `ge` | 0 | 15 |  |
| extensions.core_modmanager.isReady `ge` | 0 | 1194 |  |
| extensions.core_modmanager.unpackMod `ge` | 1 | 1008 |  |
| extensions.core_modmanager.openEntryInExplorer `ge` | 1 | 81 |  |
| extensions.core_modmanager.openModFolderInExplorer `ge` | 0 | 1303 |  |
| extensions.core_modmanager.packMod `ge` | 1 | 1084 |  |
| extensions.core_modmanager.requestState `ge` | 0 | 39 |  |
| extensions.core_modmanager.updateZipMod `ge` | 2 | 1382 |  |
| extensions.core_modmanager.getModNameFromID `ge` | 1 | 863 |  |
| extensions.core_modmanager.getStats `ge` | 0 | 1363 |  |
| extensions.core_modmanager.deleteMod `ge` | 1 | 975 | boolean |
| extensions.core_modmanager.deactivateMod `ge` | 2 | 834 |  |
| extensions.core_modmanager.deactivateModId `ge` | 1 | 873 |  |
| extensions.core_modmanager.activateMod `ge` | 1 | 882 |  |
| extensions.core_modmanager.activateModId `ge` | 1 | 920 |  |
| extensions.core_modmanager.enableModsAfterUpdate `ge` | 0 | 650 |  |
| extensions.core_modmanager.deactivateAllMods `ge` | 0 | 627 |  |
| extensions.core_modmanager.activateAllMods `ge` | 0 | 929 |  |
| extensions.core_modmanager.deleteAllMods `ge` | 0 | 998 |  |
| extensions.core_modmanager.workOffChangedMod `ge` | 2 | 1164 |  |
| extensions.core_modmanager.checkMod `ge` | 1 | 180 |  |
| extensions.core_modmanager.getConflict `ge` | 1 | 1294 |  |
| extensions.core_modmanager.getModDB `ge` | 1 | 1299 |  |
| extensions.core_modmanager.modIsUnpacked `ge` | 1 | 1307 |  |
| extensions.core_modmanager.check4Update `ge` | 0 | 1343 |  |
| extensions.core_modmanager.getModFromPath `ge` | 1 | 112 |  |
| extensions.core_modmanager.getModFromPathSUPERSLOW `ge` | 1 | 112 |  |
| extensions.core_modmanager.getPossiblyBrokenMods `ge` | 0 | 729 |  |
| extensions.core_modmanager.getMods `ge` | 0 | 1378 |  |
| extensions.core_modmanager.getModForFilename `ge` | 1 | 1318 |  |
| extensions.core_modmanager.disableAutoMount `ge` | 0 | 1354 |  |
| extensions.core_modmanager.enableAutoMount `ge` | 0 | 1358 |  |
| extensions.core_multiseat.getAssignedPlayers `ge` | 3 | 17 |  |
| extensions.core_multiseat.enterNextVehicle `ge` | 2 | 109 |  |
| extensions.core_multiseatCamera.onSerialize `ge` | 0 | 85 |  |
| extensions.core_multiSpawn.deleteVehicles `ge` | 2 | 802 |  |
| extensions.core_multiSpawn.setupVehicles `ge` | 4 | 797 |  |
| extensions.core_multiSpawn.getInstalledVehicleData `ge` | 1 | 134 |  |
| extensions.core_multiSpawn.vehIdsToGroup `ge` | 1 | 310 |  |
| extensions.core_multiSpawn.spawnedVehsToGroup `ge` | 1 | 333 |  |
| extensions.core_multiSpawn.createGroup `ge` | 2 | 285 |  |
| extensions.core_multiSpawn.spawnGroup `ge` | 3 | 751 |  |
| extensions.core_multiSpawn.spawnProcessedGroup `ge` | 2 | 569 |  |
| extensions.core_multiSpawn.fitGroup `ge` | 2 | 660 |  |
| extensions.core_multiSpawn.placeGroup `ge` | 2 | 642 |  |
| extensions.core_multiSpawn.teleportGroup `ge` | 2 | 642 |  |
| extensions.core_multiSpawn.setVehicleSpawnData `ge` | 2 | 684 |  |
| extensions.core_online.openSession `ge` | 0 | 50 |  |
| extensions.core_online.onExtensionLoaded `ge` | 0 | 248 |  |
| extensions.core_online.onOnlineStateChanged `ge` | 1 | 22 |  |
| extensions.core_online.onUIOnlineMessageReady `ge` | 0 | 276 |  |
| extensions.core_online.onUIOnlineMessageHide `ge` | 1 | 282 |  |
| extensions.core_online.apiCall `ge` | 8 | 143 |  |
| extensions.core_online.download `ge` | 6 | 139 |  |
| extensions.core_online.requestState `ge` | 0 | 37 |  |
| extensions.core_online.callbackSecureCommCpp `ge` | 9 | 148 |  |
| extensions.core_online.callbackSecureCommCppProgress `ge` | 8 | 199 |  |
| extensions.core_online.onInstructions `ge` | 1 | 297 |  |
| extensions.core_online.getRequestsUI `ge` | 0 | 41 |  |
| extensions.core_online.clearRequest `ge` | 1 | 194 |  |
| extensions.core_paths.onExtensionLoaded `ge` | 0 | 183 |  |
| extensions.core_paths.loadPath `ge` | 1 | 125 |  |
| extensions.core_paths.savePath `ge` | 2 | 96 |  |
| extensions.core_paths.getPaths `ge` | 0 | 84 |  |
| extensions.core_paths.addPath `ge` | 1 | 60 |  |
| extensions.core_paths.createPath `ge` | 1 | 65 |  |
| extensions.core_paths.deletePath `ge` | 1 | 70 |  |
| extensions.core_paths.getUniquePathName `ge` | 1 | 27 |  |
| extensions.core_paths.getMarkerIds `ge` | 2 | 42 | multiple |
| extensions.core_paths.getEndIdx `ge` | 1 | 88 |  |
| extensions.core_paths.playPath `ge` | 3 | 272 |  |
| extensions.core_paths.stopCurrentPath `ge` | 0 | 284 |  |
| extensions.core_paths.onSerialize `ge` | 0 | 186 | table |
| extensions.core_paths.onDeserialized `ge` | 1 | 192 |  |
| extensions.core_paths.getPath `ge` | 1 | 220 |  |
| extensions.core_quickAccess.resetDynamicSlotSettings `ge` | 0 | 321 |  |
| extensions.core_quickAccess.setDynamicSlotConfiguration `ge` | 2 | 508 |  |
| extensions.core_quickAccess.gotoLevel `ge` | 1 | 2171 |  |
| extensions.core_quickAccess.clearRecentActions `ge` | 0 | 2258 |  |
| extensions.core_quickAccess.getVehicleName `ge` | 1 | 2616 | string |
| extensions.core_quickAccess.tryAction `ge` | 1 | 2678 |  |
| extensions.core_quickAccess.getMostRecentAvailableActions `ge` | 3 | 1932 |  |
| extensions.core_quickAccess.vehicleItemsCallback `ge` | 3 | 2158 |  |
| extensions.core_quickAccess.vehicleItemSelectCallback `ge` | 2 | 2573 |  |
| extensions.core_quickAccess.onExtensionLoaded `ge` | 0 | 2586 |  |
| extensions.core_quickAccess.onExtensionUnloaded `ge` | 0 | 2592 |  |
| extensions.core_quickAccess.onUiChangedState `ge` | 1 | 2602 |  |
| extensions.core_quickAccess.onSerialize `ge` | 0 | 2606 |  |
| extensions.core_quickAccess.getUiData `ge` | 0 | 1814 |  |
| extensions.core_quickAccess.openDynamicSlotConfigurator `ge` | 1 | 434 |  |
| extensions.core_quickAccess.addEntry `ge` | 1 | 592 | boolean |
| extensions.core_quickAccess.registerMenu `ge` | 0 | 2711 |  |
| extensions.core_quickAccess.selectItem `ge` | 3 | 2458 |  |
| extensions.core_quickAccess.contextAction `ge` | 3 | 2469 |  |
| extensions.core_quickAccess.back `ge` | 0 | 2207 |  |
| extensions.core_quickAccess.isEnabled `ge` | 0 | 255 |  |
| extensions.core_quickAccess.moved `ge` | 0 | 2509 |  |
| extensions.core_quickAccess.getMovedRadialLastTimeMs `ge` | 0 | 2505 |  |
| extensions.core_quickAccess.reload `ge` | 0 | 2203 |  |
| extensions.core_quickAccess.getDynamicSlotConfigurationData `ge` | 0 | 440 |  |
| extensions.core_quickAccess.toNiceName `ge` | 1 | 535 |  |
| extensions.core_quickAccess.setEnabled `ge` | 3 | 2481 |  |
| extensions.core_quickAccess.toggle `ge` | 1 | 2496 |  |
| extensions.core_recoveryPrompt.isActive `ge` | 0 | 475 |  |
| extensions.core_recoveryPrompt.setActive `ge` | 1 | 476 |  |
| extensions.core_recoveryPrompt.setDefaultsForFreeroam `ge` | 0 | 477 |  |
| extensions.core_recoveryPrompt.setDefaultsForCareer `ge` | 0 | 482 |  |
| extensions.core_recoveryPrompt.setDefaultsForTutorial `ge` | 0 | 496 |  |
| extensions.core_recoveryPrompt.setEverythingActive `ge` | 0 | 505 |  |
| extensions.core_recoveryPrompt.deactivateAllButtons `ge` | 0 | 510 |  |
| extensions.core_recoveryPrompt.addButton `ge` | 9 | 538 |  |
| extensions.core_recoveryPrompt.removeButtonById `ge` | 1 | 568 |  |
| extensions.core_recoveryPrompt.getButtonActiveById `ge` | 1 | 517 |  |
| extensions.core_recoveryPrompt.setButtonActiveById `ge` | 2 | 512 |  |
| extensions.core_recoveryPrompt.setButtonEnabledById `ge` | 2 | 522 |  |
| extensions.core_recoveryPrompt.setButtonLimits `ge` | 1 | 590 |  |
| extensions.core_recoveryPrompt.resetButtonLimitCounters `ge` | 1 | 601 |  |
| extensions.core_recoveryPrompt.getButtonLimitsAndCounts `ge` | 0 | 609 |  |
| extensions.core_recoveryPrompt.serializeState `ge` | 0 | 622 |  |
| extensions.core_recoveryPrompt.deserializeState `ge` | 1 | 632 |  |
| extensions.core_recoveryPrompt.buttonPressed `ge` | 2 | 645 |  |
| extensions.core_recoveryPrompt.onPopupClosed `ge` | 0 | 666 |  |
| extensions.core_recoveryPrompt.handleCurrRecoveryOption `ge` | 0 | 672 |  |
| extensions.core_recoveryPrompt.getCustomRecoveryOptionsActiveState `ge` | 0 | 895 |  |
| extensions.core_remoteController.onExtensionLoaded `ge` | 0 | 164 | boolean |
| extensions.core_remoteController.getQRCode `ge` | 0 | 54 |  |
| extensions.core_remoteController.devicesConnected `ge` | 0 | 182 |  |
| extensions.core_replay.onClientEndMission `ge` | 1 | 277 |  |
| extensions.core_replay.startLevel `ge` | 1 | 297 |  |
| extensions.core_replay.stateChanged `ge` | 9 | 37 |  |
| extensions.core_replay.getRecordings `ge` | 0 | 28 |  |
| extensions.core_replay.setSpeed `ge` | 1 | 81 |  |
| extensions.core_replay.toggleSpeed `ge` | 1 | 90 |  |
| extensions.core_replay.togglePlay `ge` | 0 | 146 |  |
| extensions.core_replay.toggleRecording `ge` | 2 | 196 |  |
| extensions.core_replay.cancelRecording `ge` | 0 | 183 |  |
| extensions.core_replay.loadFile `ge` | 1 | 164 |  |
| extensions.core_replay.stop `ge` | 0 | 175 |  |
| extensions.core_replay.pause `ge` | 1 | 132 |  |
| extensions.core_replay.seek `ge` | 1 | 246 |  |
| extensions.core_replay.jumpTime `ge` | 1 | 262 |  |
| extensions.core_replay.jump `ge` | 1 | 254 |  |
| extensions.core_replay.jumpFrames `ge` | 1 | 254 |  |
| extensions.core_replay.openReplayFolderInExplorer `ge` | 0 | 270 |  |
| extensions.core_replay.displayMsg `ge` | 3 | 140 |  |
| extensions.core_replay.getPositionSeconds `ge` | 0 | 61 |  |
| extensions.core_replay.getTotalSeconds `ge` | 0 | 65 |  |
| extensions.core_replay.getState `ge` | 0 | 69 |  |
| extensions.core_replay.isPaused `ge` | 0 | 73 |  |
| extensions.core_replay.getLoadedFile `ge` | 0 | 77 |  |
| extensions.core_replay.acceptRename `ge` | 2 | 304 |  |
| extensions.core_replay.saveMissionReplay `ge` | 1 | 365 |  |
| extensions.core_replay.getMissionReplayFiles `ge` | 2 | 325 |  |
| extensions.core_replay.getMissionReplaysPath `ge` | 0 | 440 |  |
| extensions.core_replay.toggleMissionRecording `ge` | 0 | 242 |  |
| extensions.core_replay.removeMissionSavedReplay `ge` | 1 | 382 |  |
| extensions.core_replay.openMissionReplayFolder `ge` | 1 | 398 |  |
| extensions.core_repository.requestMods `ge` | 5 | 262 |  |
| extensions.core_repository.requestMyMods `ge` | 5 | 346 |  |
| extensions.core_repository.requestMod `ge` | 2 | 318 |  |
| extensions.core_repository.modSubscribe `ge` | 2 | 376 |  |
| extensions.core_repository.modUnsubscribe `ge` | 1 | 429 |  |
| extensions.core_repository.installMod `ge` | 4 | 152 |  |
| extensions.core_repository.addUpdateQueue `ge` | 1 | 474 |  |
| extensions.core_repository.uiUpdateQueue `ge` | 0 | 53 |  |
| extensions.core_repository.updateAllMods `ge` | 0 | 504 |  |
| extensions.core_repository.updateOneMod `ge` | 1 | 517 |  |
| extensions.core_repository.changeStateUpdateQueue `ge` | 2 | 139 |  |
| extensions.core_repository.setRepoMsg `ge` | 1 | 543 |  |
| extensions.core_repository.setRepoCmd `ge` | 1 | 547 |  |
| extensions.core_repository.setrepoAutomationMsg `ge` | 1 | 551 |  |
| extensions.core_repository.uiShowRepo `ge` | 0 | 588 |  |
| extensions.core_repository.uiShowMod `ge` | 1 | 593 |  |
| extensions.core_repository.onOnlineStateChanged `ge` | 1 | 609 |  |
| extensions.core_repository.runSubscription `ge` | 0 | 600 |  |
| extensions.core_repository.requestModOffline `ge` | 1 | 293 |  |
| extensions.core_repository.updateAllMissing `ge` | 0 | 530 |  |
| extensions.core_ropeVisualTest.onExtensionLoaded `ge` | 1 | 2013 |  |
| extensions.core_ropeVisualTest.onExtensionUnloaded `ge` | 0 | 700 |  |
| extensions.core_ropeVisualTest.onSerialize `ge` | 0 | 617 |  |
| extensions.core_settings_audio.getOptions `ge` | 0 | 328 |  |
| extensions.core_settings_audio.restoreDefaults `ge` | 0 | 261 |  |
| extensions.core_settings_audio.buildOptionHelpers `ge` | 0 | 47 |  |
| extensions.core_settings_audio.onFirstUpdateSettings `ge` | 1 | 282 |  |
| extensions.core_settings_audio.switchOutputDevice `ge` | 1 | 316 |  |
| extensions.core_settings_graphic.getOptions `ge` | 1 | 1273 |  |
| extensions.core_settings_graphic.getDisplayInformation `ge` | 0 | 1277 |  |
| extensions.core_settings_graphic.load `ge` | 1 | 1206 |  |
| extensions.core_settings_graphic.buildOptionHelpers `ge` | 0 | 137 |  |
| extensions.core_settings_graphic.onInitSettings `ge` | 1 | 1026 |  |
| extensions.core_settings_graphic.onFirstUpdateSettings `ge` | 0 | 1039 |  |
| extensions.core_settings_graphic.refreshGraphicsState `ge` | 1 | 1112 |  |
| extensions.core_settings_graphic.applyGraphicsState `ge` | 0 | 1059 |  |
| extensions.core_settings_graphic.onUiChangedState `ge` | 2 | 1190 |  |
| extensions.core_settings_graphic.openMonitorConfiguration `ge` | 0 | 1211 |  |
| extensions.core_settings_graphic.autoDetectApplyGraphicsQuality `ge` | 0 | 1214 |  |
| extensions.core_settings_graphic.toggleFullscreen `ge` | 0 | 1265 |  |
| extensions.core_settings_graphic.getOverallQualityPresets `ge` | 0 | 1294 |  |
| extensions.core_settings_lightingQuality.onApply `ge` | 0 | 34 |  |
| extensions.core_settings_rally.getOptions `ge` | 1 | 52 |  |
| extensions.core_settings_rally.isNgrcMode `ge` | 0 | 59 | boolean |
| extensions.core_settings_rally.buildOptionHelpers `ge` | 0 | 27 |  |
| extensions.core_settings_settings.finalizeInit `ge` | 0 | 455 |  |
| extensions.core_settings_settings.notifyUI `ge` | 0 | 47 |  |
| extensions.core_settings_settings.requestState `ge` | 0 | 47 |  |
| extensions.core_settings_settings.refreshTSState `ge` | 1 | 104 |  |
| extensions.core_settings_settings.requestSave `ge` | 0 | 301 |  |
| extensions.core_settings_settings.setState `ge` | 2 | 233 |  |
| extensions.core_settings_settings.setValue `ge` | 3 | 307 |  |
| extensions.core_settings_settings.getValue `ge` | 2 | 341 |  |
| extensions.core_settings_settings.getValuesCopy `ge` | 0 | 490 |  |
| extensions.core_settings_settings.save `ge` | 0 | 301 |  |
| extensions.core_settings_settings.load `ge` | 1 | 375 |  |
| extensions.core_settings_settings.initSettings `ge` | 1 | 400 |  |
| extensions.core_settings_settings.loadPlatformSettings `ge` | 1 | 443 |  |
| extensions.core_settings_settings.exit `ge` | 0 | 494 |  |
| extensions.core_settings_settings.resetSettingToDefault `ge` | 1 | 335 |  |
| extensions.core_settings_textureQuality.onApply `ge` | 0 | 37 |  |
| extensions.core_snapshot.onSnapshotSchemeCommand `ge` | 3 | 54 |  |
| extensions.core_snapshot.onSerialize `ge` | 0 | 62 | table |
| extensions.core_snapshot.onDeserialized `ge` | 1 | 68 |  |
| extensions.core_snapshot.createSnapshot `ge` | 2 | 27 |  |
| extensions.core_snapshot.loadSnapshot `ge` | 1 | 43 |  |
| extensions.core_sounds.initEngineSound `ge` | 6 | 82 |  |
| extensions.core_sounds.initExhaustSound `ge` | 6 | 93 |  |
| extensions.core_sounds.updateEngineSound `ge` | 5 | 105 |  |
| extensions.core_sounds.setEngineSoundParameter `ge` | 4 | 111 |  |
| extensions.core_sounds.setEngineSoundParameterList `ge` | 3 | 117 |  |
| extensions.core_sounds.setExhaustSoundNodes `ge` | 3 | 123 |  |
| extensions.core_sounds.onUiChangedState `ge` | 2 | 134 |  |
| extensions.core_sounds.setCabinFilterStrength `ge` | 2 | 201 |  |
| extensions.core_sounds.setAudioBlur `ge` | 1 | 229 |  |
| extensions.core_terrain.getTerrain `ge` | 0 | 9 |  |
| extensions.core_terrain.getTerrainHeight `ge` | 1 | 21 |  |
| extensions.core_terrain.getTerrainNormal `ge` | 1 | 28 |  |
| extensions.core_terrain.getTerrainSmoothNormal `ge` | 1 | 35 |  |
| extensions.core_trafficSignals.newSignal `ge` | 1 | 1175 |  |
| extensions.core_trafficSignals.newController `ge` | 1 | 1179 |  |
| extensions.core_trafficSignals.newSequence `ge` | 1 | 1183 |  |
| extensions.core_trafficSignals.getSignals `ge` | 0 | 1198 |  |
| extensions.core_trafficSignals.getSignalByName `ge` | 1 | 1206 |  |
| extensions.core_trafficSignals.getControllers `ge` | 0 | 1210 |  |
| extensions.core_trafficSignals.getControllerByName `ge` | 1 | 1214 |  |
| extensions.core_trafficSignals.getSequences `ge` | 0 | 1218 |  |
| extensions.core_trafficSignals.getSequenceByName `ge` | 1 | 1222 |  |
| extensions.core_trafficSignals.getElementById `ge` | 1 | 46 |  |
| extensions.core_trafficSignals.getControllerDefinitions `ge` | 0 | 1194 |  |
| extensions.core_trafficSignals.getMapNodeSignals `ge` | 0 | 1202 |  |
| extensions.core_trafficSignals.getTimer `ge` | 0 | 1226 |  |
| extensions.core_trafficSignals.getData `ge` | 1 | 1230 |  |
| extensions.core_trafficSignals.setupSignalObjects `ge` | 0 | 50 |  |
| extensions.core_trafficSignals.loadSignals `ge` | 1 | 1426 | boolean |
| extensions.core_trafficSignals.setupSignals `ge` | 2 | 1337 |  |
| extensions.core_trafficSignals.resetSignals `ge` | 0 | 1405 |  |
| extensions.core_trafficSignals.loadControllerDefinitions `ge` | 1 | 1409 |  |
| extensions.core_trafficSignals.setControllerDefinitions `ge` | 1 | 1187 |  |
| extensions.core_trafficSignals.resetControllerDefinitions `ge` | 0 | 65 |  |
| extensions.core_trafficSignals.resetTimer `ge` | 0 | 1250 |  |
| extensions.core_trafficSignals.setTimer `ge` | 1 | 1264 |  |
| extensions.core_trafficSignals.setActive `ge` | 2 | 1311 |  |
| extensions.core_trafficSignals.setLightsManual `ge` | 2 | 1326 |  |
| extensions.core_trafficSignals.onClientEndMission `ge` | 0 | 1576 |  |
| extensions.core_trafficSignals.onSerialize `ge` | 0 | 1580 |  |
| extensions.core_trafficSignals.onDeserialized `ge` | 1 | 1598 |  |
| extensions.core_trailerRespawn.setEnabled `ge` | 1 | 209 |  |
| extensions.core_trailerRespawn.getEnabled `ge` | 0 | 227 |  |
| extensions.core_trailerRespawn.getTrailerData `ge` | 0 | 31 |  |
| extensions.core_trailerRespawn.getAttachedNonTrailer `ge` | 1 | 95 | boolean |
| extensions.core_trailerRespawn.isVehicleCoupledToTrailer `ge` | 2 | 219 |  |
| extensions.core_trailerRespawn.getVehicleTrain `ge` | 3 | 56 |  |
| extensions.core_trailerRespawn.placeTrailer `ge` | 1 | 156 |  |
| extensions.core_trailerRespawn.coupleTrailer `ge` | 1 | 165 |  |
| extensions.core_trailerRespawn.onSerialize `ge` | 0 | 12 |  |
| extensions.core_trailerRespawn.onDeserialized `ge` | 1 | 19 |  |
| extensions.core_trailerRespawn.resetData `ge` | 0 | 25 |  |
| extensions.core_vehicleActivePooling.createPool `ge` | 1 | 338 |  |
| extensions.core_vehicleActivePooling.deletePool `ge` | 1 | 345 |  |
| extensions.core_vehicleActivePooling.getPool `ge` | 1 | 349 |  |
| extensions.core_vehicleActivePooling.getPoolById `ge` | 1 | 364 |  |
| extensions.core_vehicleActivePooling.getPoolOfVeh `ge` | 1 | 356 |  |
| extensions.core_vehicleActivePooling.getAllPools `ge` | 0 | 368 |  |
| extensions.core_vehicleActivePooling.deleteAllPools `ge` | 0 | 372 |  |
| extensions.core_vehicleActivePooling.onClientEndMission `ge` | 0 | 391 |  |
| extensions.core_vehicleActivePooling.onSerialize `ge` | 0 | 395 |  |
| extensions.core_vehicleActivePooling.onDeserialized `ge` | 1 | 404 |  |
| extensions.core_vehicleBridge.logCommandFunction `ge` | 2 | 10 |  |
| extensions.core_vehicleBridge.setLogCommands `ge` | 1 | 14 |  |
| extensions.core_vehicleBridge.getCachedVehicleData `ge` | 2 | 124 |  |
| extensions.core_vehicleBridge.requestValue `ge` | 2+ | 48 |  |
| extensions.core_vehicleBridge.executeAction `ge` | 1+ | 106 |  |
| extensions.core_vehicleBridge.callbackFromVlua `ge` | 2+ | 32 |  |
| extensions.core_vehicleBridge.registerValueChangeNotification `ge` | 2 | 64 |  |
| extensions.core_vehicleBridge.unregisterValueChangeNotification `ge` | 2 | 87 |  |
| extensions.core_vehiclePaints.setupPaints `ge` | 2 | 209 |  |
| extensions.core_vehiclePaints.getRandomPaints `ge` | 2 | 568 |  |
| extensions.core_vehiclePaints.getRandomPaintsByVehicle `ge` | 1 | 594 | table |
| extensions.core_vehiclePaints.testRandomPaint `ge` | 3 | 614 |  |
| extensions.core_vehicles.getFilesJson `ge` | 0 | 424 |  |
| extensions.core_vehicles.getFilesParsed `ge` | 0 | 440 |  |
| extensions.core_vehicles.getPaintFiles `ge` | 0 | 446 |  |
| extensions.core_vehicles.getModelsData `ge` | 0 | 464 |  |
| extensions.core_vehicles.createFilters `ge` | 1 | 933 |  |
| extensions.core_vehicles.getCurrentVehicleDetails `ge` | 0 | 928 |  |
| extensions.core_vehicles.getVehicleDetails `ge` | 1 | 906 | table |
| extensions.core_vehicles.getModel `ge` | 1 | 763 | table |
| extensions.core_vehicles.openSelectorUI `ge` | 0 | 1012 |  |
| extensions.core_vehicles.openSelectorUI_legcay `ge` | 0 | 1021 |  |
| extensions.core_vehicles.requestList `ge` | 0 | 1034 |  |
| extensions.core_vehicles.requestListEnd `ge` | 0 | 1081 |  |
| extensions.core_vehicles.getModelList `ge` | 1 | 969 | table |
| extensions.core_vehicles.getConfigList `ge` | 1 | 983 | table |
| extensions.core_vehicles.getConfig `ge` | 2 | 1002 |  |
| extensions.core_vehicles.generateAttachedVehiclesTree `ge` | 1 | 1419 |  |
| extensions.core_vehicles.getCouplerOffset `ge` | 2 | 1425 |  |
| extensions.core_vehicles.replaceVehicle `ge` | 4 | 1797 |  |
| extensions.core_vehicles.spawnNewVehicle `ge` | 2 | 1762 |  |
| extensions.core_vehicles.removeCurrent `ge` | 0 | 1784 |  |
| extensions.core_vehicles.cloneCurrent `ge` | 0 | 1864 |  |
| extensions.core_vehicles.removeAll `ge` | 0 | 1884 |  |
| extensions.core_vehicles.removeAllExceptCurrent `ge` | 0 | 1854 |  |
| extensions.core_vehicles.clearCache `ge` | 0 | 1894 |  |
| extensions.core_vehicles.setPlateText `ge` | 4 | 2098 |  |
| extensions.core_vehicles.getVehicleLicenseText `ge` | 1 | 2083 |  |
| extensions.core_vehicles.makeVehicleLicenseText `ge` | 2 | 2028 | string |
| extensions.core_vehicles.regenerateVehicleLicenseText `ge` | 1 | 2071 |  |
| extensions.core_vehicles.isLicensePlateValid `ge` | 1 | 2091 |  |
| extensions.core_vehicles.reloadVehicle `ge` | 1 | 2789 |  |
| extensions.core_vehicles.getDefaultVehicleParams `ge` | 0 | 2272 |  |
| extensions.core_vehicles.loadCustomVehicle `ge` | 2 | 2262 |  |
| extensions.core_vehicles.spawnDefault `ge` | 0 | 2514 |  |
| extensions.core_vehicles.onSerialize `ge` | 0 | 2810 |  |
| extensions.core_vehicles.onDeserialized `ge` | 1 | 2840 |  |
| extensions.core_vehicles.getVehicleList `ge` | 0 | 1087 | table |
| extensions.core_vehicles.changeMeshVisibility `ge` | 1 | 2797 |  |
| extensions.core_vehicles.setMeshVisibility `ge` | 1 | 2802 |  |
| extensions.core_vehicles.convertVehicleInfo `ge` | 2 | 593 |  |
| extensions.core_vehicles.getAttributesWhiteList `ge` | 0 | 2806 |  |
| extensions.core_vehicles.getAttributesConvertToDict `ge` | 0 | 2807 |  |
| extensions.core_vehicles.getAttributesConvertToRange `ge` | 0 | 2808 |  |
| extensions.core_vehicleTriggers.onActionEvent `ge` | 2 | 569 |  |
| extensions.core_vehicleTriggers.triggerEvent `ge` | 5 | 540 |  |
| extensions.core_vehicleTriggers.triggerEventWithoutVdata `ge` | 4 | 561 |  |
| extensions.core_vehicleTriggers.onCursorVisibilityChanged `ge` | 1 | 419 |  |
| extensions.core_vehicleTriggers.onSerialize `ge` | 0 | 602 | table |
| extensions.core_vehicleTriggers.onDeserialized `ge` | 1 | 609 |  |
| extensions.core_vehicleTriggers.enableDebugUI `ge` | 0 | 598 |  |
| extensions.core_vehicle_colors.setVehicleColor `ge` | 3 | 35 |  |
| extensions.core_vehicle_colors.setVehiclePaint `ge` | 3 | 52 |  |
| extensions.core_vehicle_colors.colorStringToColorTable `ge` | 1 | 8 |  |
| extensions.core_vehicle_inplaceEdit.setShowWindow `ge` | 1 | 345 |  |
| extensions.core_vehicle_inplaceEdit.toggleShowWindow `ge` | 0 | 350 |  |
| extensions.core_vehicle_inplaceEdit.onInput `ge` | 2 | 361 |  |
| extensions.core_vehicle_manager.onDespawnObject `ge` | 2 | 221 |  |
| extensions.core_vehicle_manager.onSerialize `ge` | 0 | 283 |  |
| extensions.core_vehicle_manager.onDeserialized `ge` | 1 | 275 |  |
| extensions.core_vehicle_manager.onClientEndMission `ge` | 0 | 47 |  |
| extensions.core_vehicle_manager.getPlayerVehicleData `ge` | 0 | 227 |  |
| extensions.core_vehicle_manager.spawnPhysicsForVehicle `ge` | 3 | 68 |  |
| extensions.core_vehicle_manager.setVehicleColorsNames `ge` | 3 | 258 |  |
| extensions.core_vehicle_manager.setVehiclePaintsNames `ge` | 3 | 258 |  |
| extensions.core_vehicle_manager.liveUpdateVehicleColors `ge` | 4 | 235 |  |
| extensions.core_vehicle_manager.getVehicleData `ge` | 1 | 231 |  |
| extensions.core_vehicle_manager.toggleModifyKey `ge` | 0 | 294 |  |
| extensions.core_vehicle_manager.queueAdditionalVehicleData `ge` | 2 | 63 |  |
| extensions.core_vehicle_manager._spawnCCallback `ge` | 4 | 98 |  |
| extensions.core_vehicle_manager.reloadVehicle `ge` | 1 | 298 |  |
| extensions.core_vehicle_manager.reloadAllVehicles `ge` | 0 | 305 |  |
| extensions.core_vehicle_manager.getDebug `ge` | 0 | 19 |  |
| extensions.core_vehicle_manager.setDebug `ge` | 1 | 23 |  |
| extensions.core_vehicle_manager.toggleDebug `ge` | 0 | 28 |  |
| extensions.core_vehicle_mirror.onExtensionLoaded `ge` | 0 | 288 |  |
| extensions.core_vehicle_mirror.onSerialize `ge` | 0 | 35 |  |
| extensions.core_vehicle_mirror.onDeserialized `ge` | 1 | 41 |  |
| extensions.core_vehicle_mirror.focusOnMirror `ge` | 1 | 240 |  |
| extensions.core_vehicle_mirror.setAngleOffset `ge` | 5 | 110 |  |
| extensions.core_vehicle_mirror.getAnglesOffset `ge` | 2 | 65 | table |
| extensions.core_vehicle_mirror.vehicleEvent `ge` | 3 | 213 |  |
| extensions.core_vehicle_mirror.setDebug `ge` | 1 | 205 |  |
| extensions.core_vehicle_partmgmt.save `ge` | 1 | 494 |  |
| extensions.core_vehicle_partmgmt.compileVehicleCollection `ge` | 1 | 275 |  |
| extensions.core_vehicle_partmgmt.saveVehicleCollection `ge` | 2 | 359 |  |
| extensions.core_vehicle_partmgmt.savePartConfigFileStage2 `ge` | 2 | 402 |  |
| extensions.core_vehicle_partmgmt.buildConfigFromString `ge` | 3 | 104 | multiple |
| extensions.core_vehicle_partmgmt.setHighlightedPartsVisiblity `ge` | 2 | 814 |  |
| extensions.core_vehicle_partmgmt.changeHighlightedPartsVisiblity `ge` | 2 | 825 |  |
| extensions.core_vehicle_partmgmt.highlightParts `ge` | 2 | 845 |  |
| extensions.core_vehicle_partmgmt.selectParts `ge` | 2 | 876 |  |
| extensions.core_vehicle_partmgmt.setNewParts `ge` | 1 | 886 |  |
| extensions.core_vehicle_partmgmt.showHighlightedParts `ge` | 1 | 836 |  |
| extensions.core_vehicle_partmgmt.resetVehicleHighlights `ge` | 2 | 968 |  |
| extensions.core_vehicle_partmgmt.setConfig `ge` | 2 | 640 |  |
| extensions.core_vehicle_partmgmt.setConfigPaints `ge` | 2 | 670 |  |
| extensions.core_vehicle_partmgmt.setConfigVars `ge` | 2 | 674 |  |
| extensions.core_vehicle_partmgmt.setPartsConfig `ge` | 2 | 678 |  |
| extensions.core_vehicle_partmgmt.setPartsTreeConfig `ge` | 2 | 682 |  |
| extensions.core_vehicle_partmgmt.getConfig `ge` | 0 | 686 |  |
| extensions.core_vehicle_partmgmt.resetConfig `ge` | 0 | 988 |  |
| extensions.core_vehicle_partmgmt.reset `ge` | 0 | 636 |  |
| extensions.core_vehicle_partmgmt.sendDataToUI `ge` | 0 | 541 |  |
| extensions.core_vehicle_partmgmt.sendPartsSelectorStateToUI `ge` | 0 | 935 |  |
| extensions.core_vehicle_partmgmt.partsSelectorChanged `ge` | 1 | 961 |  |
| extensions.core_vehicle_partmgmt.getConfigList `ge` | 0 | 739 |  |
| extensions.core_vehicle_partmgmt.openConfigFolderInExplorer `ge` | 0 | 762 |  |
| extensions.core_vehicle_partmgmt.loadLocal `ge` | 2 | 695 |  |
| extensions.core_vehicle_partmgmt.removeLocal `ge` | 1 | 704 |  |
| extensions.core_vehicle_partmgmt.resetAllToLoadedConfig `ge` | 0 | 992 |  |
| extensions.core_vehicle_partmgmt.resetPartsToLoadedConfig `ge` | 0 | 1002 |  |
| extensions.core_vehicle_partmgmt.resetVarsToLoadedConfig `ge` | 0 | 1022 |  |
| extensions.core_vehicle_partmgmt.saveLocal `ge` | 1 | 507 |  |
| extensions.core_vehicle_partmgmt.saveLocalScreenshot `ge` | 1 | 516 |  |
| extensions.core_vehicle_partmgmt.saveLocalScreenshot_stage2 `ge` | 1 | 526 |  |
| extensions.core_vehicle_partmgmt.savedefault `ge` | 0 | 536 |  |
| extensions.core_vehicle_partmgmt.hasAvailablePart `ge` | 1 | 582 | boolean |
| extensions.core_vehicle_partmgmt.setSkin `ge` | 1 | 594 |  |
| extensions.core_vehicle_partmgmt.onSerialize `ge` | 0 | 1057 | table |
| extensions.core_vehicle_partmgmt.onDeserialized `ge` | 1 | 1064 |  |
| extensions.core_versionUpdate.updatedFromVersion `ge` | 0 | 41 |  |
| extensions.core_versionUpdate.onExtensionLoaded `ge` | 0 | 12 |  |
| extensions.core_weather.onExtensionLoaded `ge` | 0 | 323 |  |
| extensions.core_weather.activate `ge` | 1 | 209 |  |
| extensions.core_weather.switchWeather `ge` | 2 | 185 |  |
| extensions.core_weather.getPresets `ge` | 0 | 315 |  |
| extensions.core_weather.dumpWeather `ge` | 0 | 344 |  |
| extensions.core_weather.getCurrentWeatherPreset `ge` | 0 | 22 |  |
| extensions.core_windowsConsole.onExtensionLoaded `ge` | 0 | 77 |  |
| extensions.core_windowsConsole.configure `ge` | 0 | 47 |  |
| extensions.core_windowsConsole.executeCommand `ge` | 2 | 10 |  |
| extensions.core_windowsConsole.tryRunCommand `ge` | 1 | 28 | string |
| extensions.editor_aiViz.enableDrawMode `ge` | 2 | 389 |  |
| extensions.editor_aiViz.getDrawMode `ge` | 0 | 401 |  |
| extensions.editor_api_aiPath.initialize `ge` | 1 | 8 |  |
| extensions.editor_api_assets.initialize `ge` | 1 | 39 |  |
| extensions.editor_api_camera.initialize `ge` | 1 | 319 |  |
| extensions.editor_api_core.initialize `ge` | 1 | 667 |  |
| extensions.editor_api_dataBlock.initialize `ge` | 1 | 99 |  |
| extensions.editor_api_decal.initialize `ge` | 1 | 127 |  |
| extensions.editor_api_dynamicDecals.getRandomUid `ge` | 0 | 1001 |  |
| extensions.editor_api_dynamicDecals.setLayerNameBuildString `ge` | 1 | 1005 |  |
| extensions.editor_api_dynamicDecals.getLayerNameBuildString `ge` | 0 | 1009 |  |
| extensions.editor_api_dynamicDecals.setProjectDynamicDecalsState `ge` | 1 | 1013 |  |
| extensions.editor_api_dynamicDecals.addMaskDecal `ge` | 1 | 1053 |  |
| extensions.editor_api_dynamicDecals.addDecal `ge` | 1 | 1098 |  |
| extensions.editor_api_dynamicDecals.addPathDataPoint `ge` | 0 | 1142 |  |
| extensions.editor_api_dynamicDecals.addFillLayer `ge` | 1 | 1187 |  |
| extensions.editor_api_dynamicDecals.addTextureFillLayer `ge` | 1 | 1229 |  |
| extensions.editor_api_dynamicDecals.addGroup `ge` | 1 | 1270 |  |
| extensions.editor_api_dynamicDecals.addLinkedSet `ge` | 1 | 1305 |  |
| extensions.editor_api_dynamicDecals.addBrushStrokeLayer `ge` | 1 | 1342 |  |
| extensions.editor_api_dynamicDecals.updateVehicleMaterials `ge` | 0 | 1447 |  |
| extensions.editor_api_dynamicDecals.setup `ge` | 0 | 1452 |  |
| extensions.editor_api_dynamicDecals.disableDecalHighlighting `ge` | 0 | 1523 |  |
| extensions.editor_api_dynamicDecals.setLayerVisibility `ge` | 2 | 1529 |  |
| extensions.editor_api_dynamicDecals.toggleLayerVisibility `ge` | 1 | 1548 |  |
| extensions.editor_api_dynamicDecals.getLayerStack `ge` | 0 | 1562 |  |
| extensions.editor_api_dynamicDecals.getLayerCount `ge` | 0 | 1566 |  |
| extensions.editor_api_dynamicDecals.changeDecalSize `ge` | 2 | 1572 |  |
| extensions.editor_api_dynamicDecals.changeDecalRotation `ge` | 2 | 1578 |  |
| extensions.editor_api_dynamicDecals.bakeLayers `ge` | 1 | 1583 |  |
| extensions.editor_api_dynamicDecals.getHighlightedLayer `ge` | 0 | 1597 |  |
| extensions.editor_api_dynamicDecals.highlightLayer `ge` | 1 | 1602 |  |
| extensions.editor_api_dynamicDecals.highlightLayerByUid `ge` | 1 | 1611 |  |
| extensions.editor_api_dynamicDecals.clearLayerStack `ge` | 0 | 1637 |  |
| extensions.editor_api_dynamicDecals.reprojectLayers `ge` | 0 | 1646 |  |
| extensions.editor_api_dynamicDecals.getLayerByUid `ge` | 1 | 1698 |  |
| extensions.editor_api_dynamicDecals.getLayerById `ge` | 2 | 1707 |  |
| extensions.editor_api_dynamicDecals.setLayer `ge` | 2 | 1753 |  |
| extensions.editor_api_dynamicDecals.moveLayer `ge` | 4 | 1798 |  |
| extensions.editor_api_dynamicDecals.removeLayer `ge` | 2 | 1840 |  |
| extensions.editor_api_dynamicDecals.duplicateLayer `ge` | 2 | 1879 |  |
| extensions.editor_api_dynamicDecals.duplicateAndMirrorLayer `ge` | 3 | 1907 |  |
| extensions.editor_api_dynamicDecals.getSettings `ge` | 0 | 1925 |  |
| extensions.editor_api_dynamicDecals.isDecalGradientColorEnabled `ge` | 0 | 1929 |  |
| extensions.editor_api_dynamicDecals.isAlphaMaskInvertEnabled `ge` | 0 | 1933 |  |
| extensions.editor_api_dynamicDecals.isWrapAlphaMaskXEnabled `ge` | 0 | 1937 |  |
| extensions.editor_api_dynamicDecals.isWrapAlphaMaskYEnabled `ge` | 0 | 1941 |  |
| extensions.editor_api_dynamicDecals.isWrapColorTextureXEnabled `ge` | 0 | 1945 |  |
| extensions.editor_api_dynamicDecals.isWrapColorTextureYEnabled `ge` | 0 | 1949 |  |
| extensions.editor_api_dynamicDecals.isUseMousePos `ge` | 0 | 1953 |  |
| extensions.editor_api_dynamicDecals.toggleSetting `ge` | 1 | 1957 |  |
| extensions.editor_api_dynamicDecals.getBlendMode `ge` | 0 | 1961 |  |
| extensions.editor_api_dynamicDecals.setBlendMode `ge` | 1 | 1965 |  |
| extensions.editor_api_dynamicDecals.exportTextures `ge` | 3 | 1969 |  |
| extensions.editor_api_dynamicDecals.exportLayerMask `ge` | 4 | 1973 |  |
| extensions.editor_api_dynamicDecals.exportSkin `ge` | 2 | 1977 |  |
| extensions.editor_api_dynamicDecals.getDecalTexturePath `ge` | 1 | 2073 |  |
| extensions.editor_api_dynamicDecals.setDecalTexturePath `ge` | 2 | 2077 |  |
| extensions.editor_api_dynamicDecals.getFillTexturePath `ge` | 0 | 2081 |  |
| extensions.editor_api_dynamicDecals.setFillTexturePath `ge` | 1 | 2085 |  |
| extensions.editor_api_dynamicDecals.getDecalColor `ge` | 0 | 2089 |  |
| extensions.editor_api_dynamicDecals.setDecalColor `ge` | 1 | 2093 |  |
| extensions.editor_api_dynamicDecals.getDecalScale `ge` | 0 | 2097 |  |
| extensions.editor_api_dynamicDecals.setDecalScale `ge` | 1 | 2101 |  |
| extensions.editor_api_dynamicDecals.getDecalRotation `ge` | 0 | 2105 |  |
| extensions.editor_api_dynamicDecals.setDecalRotation `ge` | 1 | 2109 |  |
| extensions.editor_api_dynamicDecals.drawDynamicTextures `ge` | 1 | 2113 |  |
| extensions.editor_api_dynamicDecals.drawBakedTextures `ge` | 1 | 2117 |  |
| extensions.editor_api_dynamicDecals.drawHighlightTextures `ge` | 1 | 2121 |  |
| extensions.editor_api_dynamicDecals.drawBrushInputTextures `ge` | 1 | 2125 |  |
| extensions.editor_api_dynamicDecals.drawMaskTextures `ge` | 1 | 2129 |  |
| extensions.editor_api_dynamicDecals.drawTextureSet `ge` | 3 | 2133 |  |
| extensions.editor_api_dynamicDecals.getEnabled `ge` | 0 | 2137 |  |
| extensions.editor_api_dynamicDecals.setEnabled `ge` | 1 | 2141 |  |
| extensions.editor_api_dynamicDecals.toggleEnabled `ge` | 0 | 2154 |  |
| extensions.editor_api_dynamicDecals.getFontTextureAtlasPath `ge` | 0 | 2162 |  |
| extensions.editor_api_dynamicDecals.setFontTextureAtlasPath `ge` | 1 | 2166 |  |
| extensions.editor_api_dynamicDecals.getDecalUv `ge` | 0 | 2170 |  |
| extensions.editor_api_dynamicDecals.setDecalUv `ge` | 1 | 2174 |  |
| extensions.editor_api_dynamicDecals.getDecalSkew `ge` | 0 | 2178 |  |
| extensions.editor_api_dynamicDecals.setDecalSkew `ge` | 1 | 2182 |  |
| extensions.editor_api_dynamicDecals.getColorTextureScale `ge` | 0 | 2186 |  |
| extensions.editor_api_dynamicDecals.setColorTextureScale `ge` | 1 | 2190 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskScale `ge` | 0 | 2194 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskScale `ge` | 1 | 2198 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskOffset `ge` | 0 | 2202 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskOffset `ge` | 1 | 2206 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskIntensity `ge` | 0 | 2210 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskIntensity `ge` | 1 | 2214 |  |
| extensions.editor_api_dynamicDecals.getNormalIntensity `ge` | 0 | 2218 |  |
| extensions.editor_api_dynamicDecals.setNormalIntensity `ge` | 1 | 2222 |  |
| extensions.editor_api_dynamicDecals.getMetallicIntensity `ge` | 0 | 2226 |  |
| extensions.editor_api_dynamicDecals.setMetallicIntensity `ge` | 1 | 2230 |  |
| extensions.editor_api_dynamicDecals.getRoughnessIntensity `ge` | 0 | 2234 |  |
| extensions.editor_api_dynamicDecals.setRoughnessIntensity `ge` | 1 | 2238 |  |
| extensions.editor_api_dynamicDecals.getGradientColorTopLeft `ge` | 0 | 2242 |  |
| extensions.editor_api_dynamicDecals.setGradientColorTopLeft `ge` | 1 | 2246 |  |
| extensions.editor_api_dynamicDecals.getGradientColorTopRight `ge` | 0 | 2250 |  |
| extensions.editor_api_dynamicDecals.setGradientColorTopRight `ge` | 1 | 2254 |  |
| extensions.editor_api_dynamicDecals.getGradientColorBottomLeft `ge` | 0 | 2258 |  |
| extensions.editor_api_dynamicDecals.setGradientColorBottomLeft `ge` | 1 | 2262 |  |
| extensions.editor_api_dynamicDecals.getGradientColorBottomRight `ge` | 0 | 2266 |  |
| extensions.editor_api_dynamicDecals.setGradientColorBottomRight `ge` | 1 | 2270 |  |
| extensions.editor_api_dynamicDecals.getColorPaletteMapId `ge` | 0 | 2274 |  |
| extensions.editor_api_dynamicDecals.setColorPaletteMapId `ge` | 1 | 2278 |  |
| extensions.editor_api_dynamicDecals.getShapePath `ge` | 0 | 2284 |  |
| extensions.editor_api_dynamicDecals.setShapePath `ge` | 1 | 2288 |  |
| extensions.editor_api_dynamicDecals.getTextureResolution `ge` | 0 | 2293 |  |
| extensions.editor_api_dynamicDecals.setTextureResolution `ge` | 1 | 2297 |  |
| extensions.editor_api_dynamicDecals.getUvLayer `ge` | 0 | 2305 |  |
| extensions.editor_api_dynamicDecals.setUvLayer `ge` | 1 | 2309 |  |
| extensions.editor_api_dynamicDecals.clearMaterialIdx `ge` | 0 | 2314 |  |
| extensions.editor_api_dynamicDecals.getMaterialIndices `ge` | 0 | 2318 |  |
| extensions.editor_api_dynamicDecals.setMaterialIdx `ge` | 1 | 2322 |  |
| extensions.editor_api_dynamicDecals.addMaterialIdx `ge` | 1 | 2326 |  |
| extensions.editor_api_dynamicDecals.removeMaterialIdx `ge` | 1 | 2330 |  |
| extensions.editor_api_dynamicDecals.getMeshObjectCount `ge` | 0 | 2334 |  |
| extensions.editor_api_dynamicDecals.getFillLayerColor `ge` | 0 | 2338 |  |
| extensions.editor_api_dynamicDecals.setFillLayerColor `ge` | 1 | 2342 |  |
| extensions.editor_api_dynamicDecals.getFillLayerColorPaletteMapId `ge` | 0 | 2346 |  |
| extensions.editor_api_dynamicDecals.setFillLayerColorPaletteMapId `ge` | 1 | 2350 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskChannel `ge` | 0 | 2354 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskChannel `ge` | 1 | 2358 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskBlendMode `ge` | 0 | 2362 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskBlendMode `ge` | 1 | 2366 |  |
| extensions.editor_api_dynamicDecals.getAlphaMaskRotation `ge` | 0 | 2370 |  |
| extensions.editor_api_dynamicDecals.setAlphaMaskRotation `ge` | 1 | 2374 |  |
| extensions.editor_api_dynamicDecals.getMirrored `ge` | 0 | 2378 |  |
| extensions.editor_api_dynamicDecals.setMirrored `ge` | 1 | 2382 |  |
| extensions.editor_api_dynamicDecals.getMirrorOffset `ge` | 0 | 2386 |  |
| extensions.editor_api_dynamicDecals.setMirrorOffset `ge` | 1 | 2390 |  |
| extensions.editor_api_dynamicDecals.getMirrorDebug `ge` | 0 | 2394 |  |
| extensions.editor_api_dynamicDecals.setMirrorDebug `ge` | 1 | 2398 |  |
| extensions.editor_api_dynamicDecals.getTextureFillLayerScale `ge` | 0 | 2402 |  |
| extensions.editor_api_dynamicDecals.setTextureFillLayerScale `ge` | 1 | 2406 |  |
| extensions.editor_api_dynamicDecals.getTextureFillOffset `ge` | 0 | 2410 |  |
| extensions.editor_api_dynamicDecals.setTextureFillOffset `ge` | 1 | 2414 |  |
| extensions.editor_api_dynamicDecals.getBrushStrokeInterpolationSteps `ge` | 0 | 2418 |  |
| extensions.editor_api_dynamicDecals.setBrushStrokeInterpolationSteps `ge` | 1 | 2422 |  |
| extensions.editor_api_dynamicDecals.getPathLayerInterpolationSteps `ge` | 0 | 2426 |  |
| extensions.editor_api_dynamicDecals.setPathLayerInterpolationSteps `ge` | 1 | 2430 |  |
| extensions.editor_api_dynamicDecals.getShapeMaterialNames `ge` | 0 | 2434 |  |
| extensions.editor_api_dynamicDecals.getLockDepth `ge` | 0 | 2438 |  |
| extensions.editor_api_dynamicDecals.setLockDepth `ge` | 1 | 2442 |  |
| extensions.editor_api_dynamicDecals.getDepth `ge` | 0 | 2446 |  |
| extensions.editor_api_dynamicDecals.getLockSurfaceNormal `ge` | 0 | 2450 |  |
| extensions.editor_api_dynamicDecals.setLockSurfaceNormal `ge` | 1 | 2454 |  |
| extensions.editor_api_dynamicDecals.getSurfaceNormal `ge` | 0 | 2458 |  |
| extensions.editor_api_dynamicDecals.getUseSurfaceNormal `ge` | 0 | 2462 |  |
| extensions.editor_api_dynamicDecals.setUseSurfaceNormal `ge` | 1 | 2466 |  |
| extensions.editor_api_dynamicDecals.setEnableBrushStroke `ge` | 1 | 2470 |  |
| extensions.editor_api_dynamicDecals.setEnablePathLayer `ge` | 1 | 2474 |  |
| extensions.editor_api_dynamicDecals.getEnablePathLayer `ge` | 0 | 2481 |  |
| extensions.editor_api_dynamicDecals.hasActivePathLayer `ge` | 0 | 2485 |  |
| extensions.editor_api_dynamicDecals.finishPathLayer `ge` | 0 | 2489 |  |
| extensions.editor_api_dynamicDecals.removeLastPathLayerPoint `ge` | 0 | 2493 |  |
| extensions.editor_api_dynamicDecals.getOrientPathDecals `ge` | 0 | 2506 |  |
| extensions.editor_api_dynamicDecals.setOrientPathDecals `ge` | 1 | 2510 |  |
| extensions.editor_api_dynamicDecals.getPathType `ge` | 0 | 2514 |  |
| extensions.editor_api_dynamicDecals.setPathType `ge` | 1 | 2518 |  |
| extensions.editor_api_dynamicDecals.getBrushStrokeLayerData `ge` | 0 | 2522 |  |
| extensions.editor_api_dynamicDecals.getShapeMeshes `ge` | 0 | 2526 |  |
| extensions.editor_api_dynamicDecals.enableAllMeshes `ge` | 0 | 2530 |  |
| extensions.editor_api_dynamicDecals.disableAllMeshes `ge` | 0 | 2534 |  |
| extensions.editor_api_dynamicDecals.areAllMeshesEnabled `ge` | 0 | 2538 |  |
| extensions.editor_api_dynamicDecals.setMeshEnable `ge` | 2 | 2542 |  |
| extensions.editor_api_dynamicDecals.getDecalWorldPos `ge` | 1 | 2546 |  |
| extensions.editor_api_dynamicDecals.getDecalLocalPos `ge` | 1 | 2550 |  |
| extensions.editor_api_dynamicDecals.setDecalLocalPos `ge` | 2 | 2554 |  |
| extensions.editor_api_dynamicDecals.getDecalWorldTransform `ge` | 1 | 2558 |  |
| extensions.editor_api_dynamicDecals.getPathLayerText `ge` | 0 | 2562 |  |
| extensions.editor_api_dynamicDecals.setPathLayerText `ge` | 1 | 2566 |  |
| extensions.editor_api_dynamicDecals.getDecalLayerFontCharacter `ge` | 0 | 2570 |  |
| extensions.editor_api_dynamicDecals.setDecalLayerFontCharacter `ge` | 1 | 2574 |  |
| extensions.editor_api_dynamicDecals.getDecalLayerFontPath `ge` | 0 | 2578 |  |
| extensions.editor_api_dynamicDecals.setDecalLayerFontPath `ge` | 1 | 2582 |  |
| extensions.editor_api_dynamicDecals.getPathLayerFontPath `ge` | 0 | 2586 |  |
| extensions.editor_api_dynamicDecals.setPathLayerFontPath `ge` | 1 | 2590 |  |
| extensions.editor_api_dynamicDecals.getFlipMirroredDecal `ge` | 0 | 2594 |  |
| extensions.editor_api_dynamicDecals.setFlipMirroredDecal `ge` | 1 | 2598 |  |
| extensions.editor_api_dynamicDecals.getSdfOutlineColor `ge` | 0 | 2602 |  |
| extensions.editor_api_dynamicDecals.setSdfOutlineColor `ge` | 1 | 2606 |  |
| extensions.editor_api_dynamicDecals.getSdfEnabled `ge` | 0 | 2610 |  |
| extensions.editor_api_dynamicDecals.setSdfEnabled `ge` | 1 | 2614 |  |
| extensions.editor_api_dynamicDecals.getSdfThickness `ge` | 0 | 2618 |  |
| extensions.editor_api_dynamicDecals.setSdfThickness `ge` | 1 | 2622 |  |
| extensions.editor_api_dynamicDecals.getSdfSoftness `ge` | 0 | 2626 |  |
| extensions.editor_api_dynamicDecals.setSdfSoftness `ge` | 1 | 2630 |  |
| extensions.editor_api_dynamicDecals.getSdfOutlineThickness `ge` | 0 | 2634 |  |
| extensions.editor_api_dynamicDecals.setSdfOutlineThickness `ge` | 1 | 2638 |  |
| extensions.editor_api_dynamicDecals.getSdfOutlineSoftness `ge` | 0 | 2642 |  |
| extensions.editor_api_dynamicDecals.setSdfOutlineSoftness `ge` | 1 | 2646 |  |
| extensions.editor_api_dynamicDecals.bakeBrush `ge` | 0 | 2650 |  |
| extensions.editor_api_dynamicDecals.getTextureSet `ge` | 0 | 2654 |  |
| extensions.editor_api_dynamicDecals.getCursorPosition `ge` | 0 | 2658 |  |
| extensions.editor_api_dynamicDecals.setCursorPosition `ge` | 1 | 2662 |  |
| extensions.editor_api_dynamicDecals.renderSdfTextureImgui `ge` | 2 | 2666 |  |
| extensions.editor_api_dynamicDecals.moveLayerLocalPos `ge` | 4 | 2820 |  |
| extensions.editor_api_dynamicDecals.rotateLayer `ge` | 2 | 2837 |  |
| extensions.editor_api_dynamicDecals.scaleLayer `ge` | 2 | 2859 |  |
| extensions.editor_api_dynamicDecals.onSerialize `ge` | 0 | 2893 | table |
| extensions.editor_api_dynamicDecals.onDeserialized `ge` | 1 | 2903 |  |
| extensions.editor_api_dynamicDecals.saveLayerStackToFile `ge` | 1 | 2910 |  |
| extensions.editor_api_dynamicDecals.loadLayerStackFromFile `ge` | 2 | 2916 |  |
| extensions.editor_api_dynamicDecals.onUpdate_ `ge` | 0 | 2927 |  |
| extensions.editor_api_dynamicDecals.getHistory `ge` | 0 | 2945 |  |
| extensions.editor_api_dynamicDecals.undo `ge` | 0 | 2949 |  |
| extensions.editor_api_dynamicDecals.redo `ge` | 0 | 2953 |  |
| extensions.editor_api_dynamicDecals.onExtensionUnloaded `ge` | 0 | 2957 |  |
| extensions.editor_api_dynamicDecals.getRandomUid `ge` | 0 | 48 |  |
| extensions.editor_api_dynamicDecals.serializeLayer `ge` | 1 | 230 |  |
| extensions.editor_api_dynamicDecals.deserializeLayer `ge` | 1 | 483 |  |
| extensions.editor_api_dynamicDecals_sidecarFileMigration.migrate `ge` | 1 | 34 |  |
| extensions.editor_api_dynamicDecals_textures.setup `ge` | 0 | 181 |  |
| extensions.editor_api_dynamicDecals_textures.reloadTextureFiles `ge` | 0 | 111 |  |
| extensions.editor_api_dynamicDecals_textures.getTextureFiles `ge` | 0 | 222 |  |
| extensions.editor_api_dynamicDecals_textures.getSidecarTemplate `ge` | 0 | 223 |  |
| extensions.editor_api_dynamicDecals_textures.getAndFlushMissingSidecarFiles `ge` | 0 | 224 |  |
| extensions.editor_api_dynamicDecals_textures.sidecarFileExists `ge` | 1 | 72 |  |
| extensions.editor_api_dynamicDecals_textures.readSidecarFile `ge` | 1 | 76 |  |
| extensions.editor_api_dynamicDecals_textures.updateSidecarFile `ge` | 2 | 84 |  |
| extensions.editor_api_dynamicDecals_textures.getTags `ge` | 0 | 232 |  |
| extensions.editor_api_dynamicDecals_textures.getTagsWithRefs `ge` | 0 | 233 |  |
| extensions.editor_api_dynamicDecals_textures.getTexturesDirectoryPath `ge` | 0 | 234 |  |
| extensions.editor_api_forest.initialize `ge` | 1 | 93 |  |
| extensions.editor_api_gizmo.initialize `ge` | 1 | 526 |  |
| extensions.editor_api_gui.initialize `ge` | 1 | 2104 |  |
| extensions.editor_api_gui.presentGui `ge` | 3 | 425 |  |
| extensions.editor_api_material.initialize `ge` | 1 | 98 |  |
| extensions.editor_api_navigation.initialize `ge` | 1 | 43 |  |
| extensions.editor_api_object.initialize `ge` | 1 | 1335 |  |
| extensions.editor_api_objectHistoryActions.createObjectUndo `ge` | 1 | 19 |  |
| extensions.editor_api_objectHistoryActions.createObjectRedo `ge` | 1 | 27 |  |
| extensions.editor_api_objectHistoryActions.deleteObjectUndo `ge` | 1 | 50 |  |
| extensions.editor_api_objectHistoryActions.deleteObjectRedo `ge` | 1 | 94 |  |
| extensions.editor_api_objectHistoryActions.changeObjectFieldUndo `ge` | 1 | 133 |  |
| extensions.editor_api_objectHistoryActions.changeObjectFieldRedo `ge` | 1 | 147 |  |
| extensions.editor_api_objectHistoryActions.changeObjectDynFieldUndo `ge` | 1 | 197 |  |
| extensions.editor_api_objectHistoryActions.changeObjectDynFieldRedo `ge` | 1 | 204 |  |
| extensions.editor_api_objectHistoryActions.selectObjectsUndo `ge` | 1 | 211 |  |
| extensions.editor_api_objectHistoryActions.selectObjectsRedo `ge` | 1 | 221 |  |
| extensions.editor_api_objectHistoryActions.setObjectTransformUndo `ge` | 1 | 231 |  |
| extensions.editor_api_objectHistoryActions.setObjectTransformRedo `ge` | 1 | 240 |  |
| extensions.editor_api_objectHistoryActions.setObjectScaleUndo `ge` | 1 | 249 |  |
| extensions.editor_api_objectHistoryActions.setObjectScaleRedo `ge` | 1 | 258 |  |
| extensions.editor_api_objectHistoryActions.createObjectWithUndo `ge` | 2 | 271 |  |
| extensions.editor_api_objectHistoryActions.deleteObjectWithUndo `ge` | 1 | 276 |  |
| extensions.editor_api_objectHistoryActions.deleteSelectedObjectsWithUndo `ge` | 0 | 282 |  |
| extensions.editor_api_objectHistoryActions.changeObjectFieldWithUndo `ge` | 4 | 293 |  |
| extensions.editor_api_objectHistoryActions.changeObjectFieldMultipleValuesWithUndo `ge` | 4 | 306 |  |
| extensions.editor_api_objectHistoryActions.changeObjectFieldWithOldValues `ge` | 5 | 319 |  |
| extensions.editor_api_objectHistoryActions.changeObjectDynFieldWithUndo `ge` | 4 | 324 |  |
| extensions.editor_api_objectHistoryActions.callHookWithUndo `ge` | 1+ | 359 |  |
| extensions.editor_api_objectHistoryActions.selectObjectsWithUndo `ge` | 2 | 364 |  |
| extensions.editor_api_roadRiver.initialize `ge` | 1 | 238 |  |
| extensions.editor_api_sketch.initialize `ge` | 1 | 26 |  |
| extensions.editor_api_terrain.initialize `ge` | 1 | 205 |  |
| extensions.editor_assemblySpline.setSelectedSplineIdx `ge` | 1 | 86 |  |
| extensions.editor_assemblySpline.setSelectedNodeIdx `ge` | 1 | 89 |  |
| extensions.editor_assemblySpline.onSerialize `ge` | 0 | 92 |  |
| extensions.editor_assemblySpline.onDeserialized `ge` | 1 | 104 |  |
| extensions.editor_assemblySpline.onClientEndMission `ge` | 0 | 1673 |  |
| extensions.editor_assemblySpline_distribution.computeMeshMap `ge` | 3 | 114 | multiple |
| extensions.editor_assemblySpline_import.handleDelayedSplineUpdates `ge` | 0 | 42 |  |
| extensions.editor_assemblySpline_import.validateToolCompatibleTSStatic `ge` | 1 | 145 | boolean |
| extensions.editor_assemblySpline_import.convertTSStatics2AssemblySpline `ge` | 1 | 566 |  |
| extensions.editor_assemblySpline_import.importFromPolygon `ge` | 1 | 651 |  |
| extensions.editor_assemblySpline_molecule.getRigidEnabled `ge` | 2 | 41 |  |
| extensions.editor_assemblySpline_molecule.setRigidEnabled `ge` | 3 | 50 |  |
| extensions.editor_assemblySpline_molecule.getBridgeEnabled `ge` | 2 | 56 |  |
| extensions.editor_assemblySpline_molecule.setBridgeEnabled `ge` | 3 | 65 |  |
| extensions.editor_assemblySpline_molecule.getRigidRandom `ge` | 2 | 71 |  |
| extensions.editor_assemblySpline_molecule.setRigidRandom `ge` | 3 | 79 |  |
| extensions.editor_assemblySpline_molecule.getRigidRandomWeight `ge` | 2 | 85 |  |
| extensions.editor_assemblySpline_molecule.setRigidRandomWeight `ge` | 3 | 93 |  |
| extensions.editor_assemblySpline_molecule.getBridgeRandom `ge` | 2 | 99 |  |
| extensions.editor_assemblySpline_molecule.setBridgeRandom `ge` | 3 | 107 |  |
| extensions.editor_assemblySpline_molecule.getBridgeRandomWeight `ge` | 2 | 113 |  |
| extensions.editor_assemblySpline_molecule.setBridgeRandomWeight `ge` | 3 | 121 |  |
| extensions.editor_assemblySpline_molecule.getAssemblyKit `ge` | 1 | 127 |  |
| extensions.editor_assemblySpline_molecule.buildMolecule `ge` | 2 | 425 |  |
| extensions.editor_assemblySpline_molecule.applyEnabledStatesToMolecule `ge` | 2 | 757 |  |
| extensions.editor_assemblySpline_populate.populateAssemblySpline `ge` | 3 | 156 |  |
| extensions.editor_assemblySpline_populate.tryRemove `ge` | 1 | 428 |  |
| extensions.editor_assemblySpline_splineMgr.getToolPrefixStr `ge` | 0 | 87 |  |
| extensions.editor_assemblySpline_splineMgr.getEditModeKey `ge` | 0 | 90 |  |
| extensions.editor_assemblySpline_splineMgr.getAssemblySplines `ge` | 0 | 93 |  |
| extensions.editor_assemblySpline_splineMgr.getSplineMap `ge` | 0 | 96 |  |
| extensions.editor_assemblySpline_splineMgr.setAssemblySplines `ge` | 1 | 118 |  |
| extensions.editor_assemblySpline_splineMgr.setAssemblySpline `ge` | 2 | 99 |  |
| extensions.editor_assemblySpline_splineMgr.getDefaultSliderParams `ge` | 0 | 125 | table |
| extensions.editor_assemblySpline_splineMgr.setPreset `ge` | 2 | 140 |  |
| extensions.editor_assemblySpline_splineMgr.addNewAssemblySpline `ge` | 0 | 172 |  |
| extensions.editor_assemblySpline_splineMgr.splitAssemblySpline `ge` | 2 | 316 |  |
| extensions.editor_assemblySpline_splineMgr.joinAssemblySplines `ge` | 4 | 405 |  |
| extensions.editor_assemblySpline_splineMgr.removeAssemblySpline `ge` | 1 | 250 |  |
| extensions.editor_assemblySpline_splineMgr.removeLinkedAssemblySpline `ge` | 1 | 266 |  |
| extensions.editor_assemblySpline_splineMgr.removeAllAssemblySplines `ge` | 1 | 276 |  |
| extensions.editor_assemblySpline_splineMgr.deepCopyAssemblySpline `ge` | 1 | 295 |  |
| extensions.editor_assemblySpline_splineMgr.deepCopyAssemblySplineState `ge` | 0 | 307 |  |
| extensions.editor_assemblySpline_splineMgr.copyAssemblySplineProfile `ge` | 1 | 545 |  |
| extensions.editor_assemblySpline_splineMgr.pasteAssemblySplineProfile `ge` | 2 | 569 |  |
| extensions.editor_assemblySpline_splineMgr.singleSplineEditUndo `ge` | 1 | 488 |  |
| extensions.editor_assemblySpline_splineMgr.singleSplineEditRedo `ge` | 1 | 496 |  |
| extensions.editor_assemblySpline_splineMgr.transSplineEditUndo `ge` | 1 | 504 |  |
| extensions.editor_assemblySpline_splineMgr.transSplineEditRedo `ge` | 1 | 516 |  |
| extensions.editor_assemblySpline_splineMgr.objectSelectUndo `ge` | 1 | 539 |  |
| extensions.editor_assemblySpline_splineMgr.objectSelectRedo `ge` | 1 | 542 |  |
| extensions.editor_assemblySpline_splineMgr.updateDirtyAssemblySplines `ge` | 0 | 625 |  |
| extensions.editor_assemblySpline_splineMgr.convertPathsToAssemblySplines `ge` | 1 | 661 |  |
| extensions.editor_assemblySpline_splineMgr.serializeAssemblySpline `ge` | 1 | 594 |  |
| extensions.editor_assemblySpline_splineMgr.deserializeAssemblySpline `ge` | 2 | 605 |  |
| extensions.editor_assemblySpline_splineMgr.deepCopyAssemblySplineState `ge` | 0 | 307 |  |
| extensions.editor_assemblySpline_splineMgr.getCurrentAssemblySplineList `ge` | 0 | 693 |  |
| extensions.editor_assemblySpline_splineMgr.isLinked `ge` | 1 | 707 |  |
| extensions.editor_assemblySpline_splineMgr.setLink `ge` | 3 | 713 |  |
| extensions.editor_assemblySpline_splineMgr.updateLinkedAssemblySpline `ge` | 6 | 728 |  |
| extensions.editor_assemblySpline_splineMgr.unlinkAll `ge` | 0 | 751 |  |
| extensions.editor_assetBrowser.selectFileByPath `ge` | 1 | 4125 |  |
| extensions.editor_assetBrowser.onEditorRegisterPreferences `ge` | 1 | 4584 |  |
| extensions.editor_assetBrowser.moveSelectionIndex `ge` | 1 | 4725 |  |
| extensions.editor_assetDeduplicator.onWindowMenuItem `ge` | 0 | 30 |  |
| extensions.editor_assetManagementTool.onExtensionLoaded `ge` | 0 | 1777 |  |
| extensions.editor_audioEventsList.onWindowMenuItem `ge` | 0 | 269 |  |
| extensions.editor_autoSave.onEditorRegisterPreferences `ge` | 1 | 152 |  |
| extensions.editor_barriersEditor.onSerialize `ge` | 0 | 300 |  |
| extensions.editor_barriersEditor.onDeserialized `ge` | 1 | 303 |  |
| extensions.editor_barriersEditor.show `ge` | 0 | 281 |  |
| extensions.editor_buildingEditor.reload `ge` | 2 | 48 |  |
| extensions.editor_buildingEditor.onUp `ge` | 0 | 2514 |  |
| extensions.editor_buildingEditor.onDeserialize `ge` | 1 | 2723 |  |
| extensions.editor_buildingEditor.onSerialize `ge` | 0 | 2742 | table |
| extensions.editor_buildingEditor.onInput `ge` | 2 | 2836 |  |
| extensions.editor_bulkRename.onExtensionLoaded `ge` | 0 | 261 |  |
| extensions.editor_cameraBookmarks.onExtensionLoaded `ge` | 0 | 63 |  |
| extensions.editor_camPathEditor.selectPath `ge` | 1 | 129 |  |
| extensions.editor_camPathEditor.getTrackingOffset `ge` | 0 | 2044 |  |
| extensions.editor_cosimulationSignalEditor.updateCollectedVehicleData `ge` | 1 | 92 |  |
| extensions.editor_crawlEditor.getAllTrails `ge` | 0 | 1426 |  |
| extensions.editor_crawlEditor.getAllMissionTrails `ge` | 0 | 1427 |  |
| extensions.editor_crawlEditor.getAllPaths `ge` | 0 | 1428 |  |
| extensions.editor_crawlEditor.getAllBoundaries `ge` | 0 | 1429 |  |
| extensions.editor_crawlEditor.getAllStartingPositions `ge` | 0 | 1430 |  |
| extensions.editor_crawlEditor.getSelectedTrailIndex `ge` | 0 | 1431 |  |
| extensions.editor_crawlEditor.getSelectedPathIndex `ge` | 0 | 1432 |  |
| extensions.editor_crawlEditor.getSelectedBoundaryIndex `ge` | 0 | 1433 |  |
| extensions.editor_crawlEditor.getSelectedStartingPositionIndex `ge` | 0 | 1434 |  |
| extensions.editor_crawlEditor.setSelectedTrailIndex `ge` | 1 | 1435 |  |
| extensions.editor_crawlEditor.setSelectedPathIndex `ge` | 1 | 1436 |  |
| extensions.editor_crawlEditor.setSelectedBoundaryIndex `ge` | 1 | 1437 |  |
| extensions.editor_crawlEditor.setSelectedStartingPositionIndex `ge` | 1 | 1438 |  |
| extensions.editor_crawlEditor.getSelectedTrail `ge` | 0 | 262 |  |
| extensions.editor_crawlEditor.getSelectedPath `ge` | 0 | 271 |  |
| extensions.editor_crawlEditor.getSelectedBoundary `ge` | 0 | 280 |  |
| extensions.editor_crawlEditor.getSelectedStartingPosition `ge` | 0 | 289 |  |
| extensions.editor_crawlEditor.renameObjectFile `ge` | 3 | 74 | boolean |
| extensions.editor_crawlEditor.markAsDirty `ge` | 2 | 296 |  |
| extensions.editor_crawlEditor.testLogging `ge` | 0 | 1420 | boolean |
| extensions.editor_crawlEditor.onSerialize `ge` | 0 | 835 |  |
| extensions.editor_crawlEditor.onDeserialized `ge` | 1 | 849 |  |
| extensions.editor_crawlEditor.loadAllObjects `ge` | 0 | 167 |  |
| extensions.editor_crawlEditor.moveTrailToLevel `ge` | 1 | 448 | boolean |
| extensions.editor_crawlEditor_input.getMouseInfo `ge` | 0 | 45 |  |
| extensions.editor_crawlEditor_input.updateMouseInfo `ge` | 0 | 10 |  |
| extensions.editor_crawlEditor_missionPortTool.portMission `ge` | 2 | 132 | boolean |
| extensions.editor_crawlEditor_missionPortTool.showPortingDialog `ge` | 0 | 409 |  |
| extensions.editor_crawlEditor_missionPortTool.openPortingDialog `ge` | 0 | 492 |  |
| extensions.editor_createObjectTool.onEditorRegisterPreferences `ge` | 1 | 1080 |  |
| extensions.editor_createObjectTool.initGroups `ge` | 0 | 963 |  |
| extensions.editor_createObjectTool.selectClass `ge` | 0 | 331 |  |
| extensions.editor_createObjectTool.navigateList `ge` | 1 | 336 |  |
| extensions.editor_dataBlockEditor.onExtensionLoaded `ge` | 0 | 97 |  |
| extensions.editor_decalEditor.onExtensionLoaded `ge` | 0 | 1030 |  |
| extensions.editor_decalSpline.setSelectedSplineIdx `ge` | 1 | 68 |  |
| extensions.editor_decalSpline.setSelectedNodeIdx `ge` | 1 | 71 |  |
| extensions.editor_decalSpline.onSerialize `ge` | 0 | 74 |  |
| extensions.editor_decalSpline.onDeserialized `ge` | 1 | 90 |  |
| extensions.editor_decalSpline.onClientEndMission `ge` | 0 | 1693 |  |
| extensions.editor_decalSpline_populate.populateDecalSpline `ge` | 2 | 170 |  |
| extensions.editor_decalSpline_populate.tryRemove `ge` | 1 | 129 |  |
| extensions.editor_decalSpline_populate.removeFolder `ge` | 0 | 160 |  |
| extensions.editor_decalSpline_populate.propagateRowsCols `ge` | 2 | 258 |  |
| extensions.editor_decalSpline_splineMgr.getToolPrefixStr `ge` | 0 | 54 |  |
| extensions.editor_decalSpline_splineMgr.getEditModeKey `ge` | 0 | 57 |  |
| extensions.editor_decalSpline_splineMgr.getDecalSplines `ge` | 0 | 60 |  |
| extensions.editor_decalSpline_splineMgr.getSplineMap `ge` | 0 | 63 |  |
| extensions.editor_decalSpline_splineMgr.setDecalSplines `ge` | 1 | 72 |  |
| extensions.editor_decalSpline_splineMgr.setDecalSpline `ge` | 2 | 66 |  |
| extensions.editor_decalSpline_splineMgr.getDefaultSliderParams `ge` | 0 | 79 |  |
| extensions.editor_decalSpline_splineMgr.addNewDecalSpline `ge` | 0 | 82 |  |
| extensions.editor_decalSpline_splineMgr.splitDecalSpline `ge` | 2 | 218 |  |
| extensions.editor_decalSpline_splineMgr.joinDecalSplines `ge` | 4 | 334 |  |
| extensions.editor_decalSpline_splineMgr.removeDecalSpline `ge` | 1 | 157 |  |
| extensions.editor_decalSpline_splineMgr.removeLinkedDecalSpline `ge` | 1 | 168 |  |
| extensions.editor_decalSpline_splineMgr.removeAllDecalSplines `ge` | 1 | 178 |  |
| extensions.editor_decalSpline_splineMgr.deepCopyDecalSpline `ge` | 1 | 197 |  |
| extensions.editor_decalSpline_splineMgr.deepCopyDecalSplineState `ge` | 0 | 209 |  |
| extensions.editor_decalSpline_splineMgr.copyDecalSplineProfile `ge` | 1 | 465 |  |
| extensions.editor_decalSpline_splineMgr.pasteDecalSplineProfile `ge` | 2 | 480 |  |
| extensions.editor_decalSpline_splineMgr.singleSplineEditUndo `ge` | 1 | 425 |  |
| extensions.editor_decalSpline_splineMgr.singleSplineEditRedo `ge` | 1 | 433 |  |
| extensions.editor_decalSpline_splineMgr.transSplineEditUndo `ge` | 1 | 441 |  |
| extensions.editor_decalSpline_splineMgr.transSplineEditRedo `ge` | 1 | 453 |  |
| extensions.editor_decalSpline_splineMgr.updateDirtyDecalSplines `ge` | 0 | 542 |  |
| extensions.editor_decalSpline_splineMgr.convertPathsToDecalSplines `ge` | 1 | 576 |  |
| extensions.editor_decalSpline_splineMgr.serializeDecalSpline `ge` | 1 | 523 |  |
| extensions.editor_decalSpline_splineMgr.deserializeDecalSpline `ge` | 2 | 535 |  |
| extensions.editor_decalSpline_splineMgr.deepCopyDecalSplineState `ge` | 0 | 209 |  |
| extensions.editor_decalSpline_splineMgr.getCurrentDecalSplineList `ge` | 0 | 609 |  |
| extensions.editor_decalSpline_splineMgr.isLinked `ge` | 1 | 623 |  |
| extensions.editor_decalSpline_splineMgr.setLink `ge` | 3 | 629 |  |
| extensions.editor_decalSpline_splineMgr.updateLinkedDecalSpline `ge` | 6 | 644 |  |
| extensions.editor_decalSpline_splineMgr.unlinkAll `ge` | 0 | 666 |  |
| extensions.editor_dragRaceEditor.onSerialize `ge` | 0 | 172 | table |
| extensions.editor_dragRaceEditor.onDeserialized `ge` | 1 | 185 |  |
| extensions.editor_dragRaceEditor.show `ge` | 0 | 198 |  |
| extensions.editor_dragRaceEditor_dragSettings.loadAllSettings `ge` | 0 | 63 |  |
| extensions.editor_dragRaceEditor_dragSettings.getAllSettings `ge` | 0 | 154 |  |
| extensions.editor_dragRaceEditor_dragSettings.getSelectedSettingsIndex `ge` | 0 | 158 |  |
| extensions.editor_dragRaceEditor_dragSettings.setSelectedSettingsIndex `ge` | 1 | 162 |  |
| extensions.editor_dragRaceEditor_dragSettings.getSelectedSettings `ge` | 0 | 166 |  |
| extensions.editor_dragRaceEditor_dragSettings.selectSettings `ge` | 1 | 173 |  |
| extensions.editor_dragRaceEditor_dragSettings.drawSettingsList `ge` | 0 | 189 |  |
| extensions.editor_dragRaceEditor_dragSettings.drawSettingsDetails `ge` | 0 | 292 |  |
| extensions.editor_dragRaceEditor_dragSettings.getDragSettings `ge` | 0 | 568 |  |
| extensions.editor_dragRaceEditor_dragSettings.setDragSettings `ge` | 1 | 572 |  |
| extensions.editor_dragRaceEditor_dragSettings.loadDragSettings `ge` | 1 | 576 |  |
| extensions.editor_dragRaceEditor_dragSettings.saveDragSettings `ge` | 1 | 588 | boolean |
| extensions.editor_dragRaceEditor_dragSettings.validateDragSettings `ge` | 1 | 601 | boolean/multiple |
| extensions.editor_dragRaceEditor_dragSettings.drawDragSettingsSection `ge` | 0 | 619 |  |
| extensions.editor_dragRaceEditor_dragSettings.drawPrefabsSection `ge` | 0 | 679 |  |
| extensions.editor_dragRaceEditor_dragSettings.drawPhasesSection `ge` | 0 | 742 |  |
| extensions.editor_dragRaceEditor_facilities.loadAllFacilities `ge` | 0 | 17 |  |
| extensions.editor_dragRaceEditor_facilities.getAllFacilities `ge` | 0 | 22 |  |
| extensions.editor_dragRaceEditor_facilities.getSelectedFacilityIndex `ge` | 0 | 26 |  |
| extensions.editor_dragRaceEditor_facilities.setSelectedFacilityIndex `ge` | 1 | 30 |  |
| extensions.editor_dragRaceEditor_facilities.getSelectedFacility `ge` | 0 | 34 |  |
| extensions.editor_dragRaceEditor_facilities.selectFacility `ge` | 1 | 41 |  |
| extensions.editor_dragRaceEditor_facilities.addFacility `ge` | 0 | 70 |  |
| extensions.editor_dragRaceEditor_facilities.removeSelectedFacility `ge` | 0 | 87 |  |
| extensions.editor_dragRaceEditor_facilities.saveAllFacilities `ge` | 0 | 101 |  |
| extensions.editor_dragRaceEditor_facilities.saveFacility `ge` | 1 | 112 |  |
| extensions.editor_dragRaceEditor_facilities.drawFacilitiesList `ge` | 0 | 127 |  |
| extensions.editor_dragRaceEditor_facilities.drawFacilityDetails `ge` | 0 | 164 |  |
| extensions.editor_dragRaceEditor_facilities.drawFacilitiesPreview `ge` | 0 | 241 |  |
| extensions.editor_dragRaceEditor_lanes.loadAllLanes `ge` | 0 | 17 |  |
| extensions.editor_dragRaceEditor_lanes.getAllLanes `ge` | 0 | 22 |  |
| extensions.editor_dragRaceEditor_lanes.getSelectedLaneIndex `ge` | 0 | 26 |  |
| extensions.editor_dragRaceEditor_lanes.setSelectedLaneIndex `ge` | 1 | 30 |  |
| extensions.editor_dragRaceEditor_lanes.getSelectedLane `ge` | 0 | 34 |  |
| extensions.editor_dragRaceEditor_lanes.selectLane `ge` | 1 | 41 |  |
| extensions.editor_dragRaceEditor_lanes.addLane `ge` | 0 | 49 |  |
| extensions.editor_dragRaceEditor_lanes.removeSelectedLane `ge` | 0 | 70 |  |
| extensions.editor_dragRaceEditor_lanes.saveLane `ge` | 1 | 84 |  |
| extensions.editor_dragRaceEditor_lanes.drawLanesSection `ge` | 0 | 97 |  |
| extensions.editor_dragRaceEditor_lanes.drawLaneDetails `ge` | 0 | 143 |  |
| extensions.editor_dragRaceEditor_lanes.drawTransformsPreview `ge` | 0 | 225 |  |
| extensions.editor_dragRaceEditor_lanes.drawAxisBox `ge` | 5 | 234 |  |
| extensions.editor_dragRaceEditor_state.getState `ge` | 0 | 38 |  |
| extensions.editor_dragRaceEditor_state.setState `ge` | 1 | 42 |  |
| extensions.editor_dragRaceEditor_state.getDragRaceData `ge` | 0 | 46 |  |
| extensions.editor_dragRaceEditor_state.setDragRaceData `ge` | 1 | 50 |  |
| extensions.editor_dragRaceEditor_state.getSelectedLaneIndex `ge` | 0 | 54 |  |
| extensions.editor_dragRaceEditor_state.setSelectedLaneIndex `ge` | 1 | 58 |  |
| extensions.editor_dragRaceEditor_state.getSelectedFacilityIndex `ge` | 0 | 62 |  |
| extensions.editor_dragRaceEditor_state.setSelectedFacilityIndex `ge` | 1 | 66 |  |
| extensions.editor_dragRaceEditor_state.getSelectedStripIndex `ge` | 0 | 70 |  |
| extensions.editor_dragRaceEditor_state.setSelectedStripIndex `ge` | 1 | 74 |  |
| extensions.editor_dragRaceEditor_state.getSelectedWaypointIndex `ge` | 0 | 78 |  |
| extensions.editor_dragRaceEditor_state.setSelectedWaypointIndex `ge` | 1 | 82 |  |
| extensions.editor_dragRaceEditor_state.getMouseInfo `ge` | 0 | 86 |  |
| extensions.editor_dragRaceEditor_state.setMouseInfo `ge` | 1 | 90 |  |
| extensions.editor_dragRaceEditor_state.getHasUnsavedChanges `ge` | 0 | 94 |  |
| extensions.editor_dragRaceEditor_state.setHasUnsavedChanges `ge` | 1 | 98 |  |
| extensions.editor_dragRaceEditor_state.getTransforms `ge` | 0 | 102 |  |
| extensions.editor_dragRaceEditor_state.setTransforms `ge` | 1 | 106 |  |
| extensions.editor_dragRaceEditor_state.getCurrentFileDir `ge` | 0 | 110 |  |
| extensions.editor_dragRaceEditor_state.setCurrentFileDir `ge` | 1 | 114 |  |
| extensions.editor_dragRaceEditor_state.getCurrentFileName `ge` | 0 | 118 |  |
| extensions.editor_dragRaceEditor_state.setCurrentFileName `ge` | 1 | 122 |  |
| extensions.editor_dragRaceEditor_state.getUndoStack `ge` | 0 | 126 |  |
| extensions.editor_dragRaceEditor_state.setUndoStack `ge` | 1 | 130 |  |
| extensions.editor_dragRaceEditor_state.getRedoStack `ge` | 0 | 134 |  |
| extensions.editor_dragRaceEditor_state.setRedoStack `ge` | 1 | 138 |  |
| extensions.editor_dragRaceEditor_state.getMaxUndoSteps `ge` | 0 | 142 |  |
| extensions.editor_dragRaceEditor_state.getLastError `ge` | 0 | 146 |  |
| extensions.editor_dragRaceEditor_state.setLastError `ge` | 1 | 150 |  |
| extensions.editor_dragRaceEditor_state.getErrorTimeout `ge` | 0 | 154 |  |
| extensions.editor_dragRaceEditor_state.setErrorTimeout `ge` | 1 | 158 |  |
| extensions.editor_dragRaceEditor_state.getUsingPrefabs `ge` | 0 | 162 |  |
| extensions.editor_dragRaceEditor_state.getHasEndCamera `ge` | 0 | 166 |  |
| extensions.editor_dragRaceEditor_state.getSearch `ge` | 0 | 170 |  |
| extensions.editor_dragRaceEditor_strips.loadAllStrips `ge` | 0 | 20 |  |
| extensions.editor_dragRaceEditor_strips.getAllStrips `ge` | 0 | 25 |  |
| extensions.editor_dragRaceEditor_strips.getSelectedStripIndex `ge` | 0 | 29 |  |
| extensions.editor_dragRaceEditor_strips.setSelectedStripIndex `ge` | 1 | 33 |  |
| extensions.editor_dragRaceEditor_strips.getSelectedStrip `ge` | 0 | 37 |  |
| extensions.editor_dragRaceEditor_strips.selectStrip `ge` | 1 | 44 |  |
| extensions.editor_dragRaceEditor_strips.addStrip `ge` | 0 | 73 |  |
| extensions.editor_dragRaceEditor_strips.removeSelectedStrip `ge` | 0 | 168 |  |
| extensions.editor_dragRaceEditor_strips.saveStrip `ge` | 1 | 182 |  |
| extensions.editor_dragRaceEditor_strips.drawStripsList `ge` | 0 | 195 |  |
| extensions.editor_dragRaceEditor_strips.drawStripDetails `ge` | 0 | 240 |  |
| extensions.editor_dragRaceEditor_strips.editLane `ge` | 2 | 364 |  |
| extensions.editor_dragRaceEditor_strips.getSelectedLane `ge` | 0 | 376 |  |
| extensions.editor_dragRaceEditor_strips.drawLaneEditor `ge` | 0 | 384 |  |
| extensions.editor_dragRaceEditor_strips.drawStripsPreview `ge` | 0 | 651 |  |
| extensions.editor_dragRaceEditor_strips.enableWaypointGizmo `ge` | 1 | 664 |  |
| extensions.editor_dragRaceEditor_strips.enableBoundaryGizmo `ge` | 1 | 682 |  |
| extensions.editor_dragRaceEditor_strips.beginWaypointDrag `ge` | 1 | 700 |  |
| extensions.editor_dragRaceEditor_strips.draggingWaypoint `ge` | 1 | 709 |  |
| extensions.editor_dragRaceEditor_strips.endWaypointDrag `ge` | 1 | 727 |  |
| extensions.editor_dragRaceEditor_strips.beginBoundaryDrag `ge` | 1 | 731 |  |
| extensions.editor_dragRaceEditor_strips.draggingBoundary `ge` | 1 | 740 |  |
| extensions.editor_dragRaceEditor_strips.endBoundaryDrag `ge` | 1 | 758 |  |
| extensions.editor_dragRaceEditor_strips.drawWaypointsInWorld `ge` | 0 | 763 |  |
| extensions.editor_dragRaceEditor_strips.drawAxisBox `ge` | 5 | 787 |  |
| extensions.editor_dragRaceEditor_strips.drawBoundariesInWorld `ge` | 0 | 843 |  |
| extensions.editor_dragRaceEditor_utils.logError `ge` | 1 | 11 |  |
| extensions.editor_dragRaceEditor_utils.showError `ge` | 0 | 17 |  |
| extensions.editor_dragRaceEditor_utils.markUnsavedChanges `ge` | 0 | 30 |  |
| extensions.editor_dragRaceEditor_utils.clearUnsavedChanges `ge` | 0 | 34 |  |
| extensions.editor_dragRaceEditor_utils.saveToUndoStack `ge` | 0 | 38 |  |
| extensions.editor_dragRaceEditor_utils.undo `ge` | 0 | 50 |  |
| extensions.editor_dragRaceEditor_utils.redo `ge` | 0 | 62 |  |
| extensions.editor_dragRaceEditor_utils.validateDragRaceData `ge` | 1 | 74 | multiple |
| extensions.editor_dragRaceEditor_utils.createNewLane `ge` | 1 | 96 | table |
| extensions.editor_dragRaceEditor_utils.createNewDragRaceData `ge` | 0 | 118 | table |
| extensions.editor_dragRaceEditor_utils.reorderLanes `ge` | 3 | 166 |  |
| extensions.editor_dragRaceEditor_utils.updateMouseInfo `ge` | 0 | 176 |  |
| extensions.editor_dragRaceEditor_utils.setupTransform `ge` | 5 | 215 |  |
| extensions.editor_dragRaceEditor_waypoints.loadAllWaypoints `ge` | 0 | 17 |  |
| extensions.editor_dragRaceEditor_waypoints.getAllWaypoints `ge` | 0 | 22 |  |
| extensions.editor_dragRaceEditor_waypoints.getSelectedWaypointIndex `ge` | 0 | 26 |  |
| extensions.editor_dragRaceEditor_waypoints.setSelectedWaypointIndex `ge` | 1 | 30 |  |
| extensions.editor_dragRaceEditor_waypoints.getSelectedWaypoint `ge` | 0 | 34 |  |
| extensions.editor_dragRaceEditor_waypoints.selectWaypoint `ge` | 1 | 41 |  |
| extensions.editor_dragRaceEditor_waypoints.addWaypoint `ge` | 1 | 49 |  |
| extensions.editor_dragRaceEditor_waypoints.removeSelectedWaypoint `ge` | 0 | 64 |  |
| extensions.editor_dragRaceEditor_waypoints.saveWaypoint `ge` | 1 | 78 |  |
| extensions.editor_dragRaceEditor_waypoints.drawWaypointsSection `ge` | 0 | 91 |  |
| extensions.editor_dragRaceEditor_waypoints.drawWaypointDetails `ge` | 0 | 142 |  |
| extensions.editor_dragRaceEditor_waypoints.drawWaypointsPreview `ge` | 0 | 183 |  |
| extensions.editor_driftDataEditor.updateMouseInfo `ge` | 0 | 759 |  |
| extensions.editor_driftDataEditor.drawAxisBox `ge` | 5 | 795 |  |
| extensions.editor_driftDataEditor.onSerialize `ge` | 0 | 739 |  |
| extensions.editor_driftDataEditor.onDeserialized `ge` | 1 | 749 |  |
| extensions.editor_driftDataEditor.show `ge` | 0 | 726 |  |
| extensions.editor_driftDataEditor.drawElementDetail `ge` | 1 | 58 |  |
| extensions.editor_driftDataEditor.selectStuntZone `ge` | 1 | 113 |  |
| extensions.editor_driftDataEditor.clearStuntZonesEditor `ge` | 0 | 171 |  |
| extensions.editor_drivePathEditor.setSelectedSplineIdx `ge` | 1 | 78 |  |
| extensions.editor_drivePathEditor.setSelectedNodeIdx `ge` | 1 | 81 |  |
| extensions.editor_drivePathEditor.onSerialize `ge` | 0 | 84 |  |
| extensions.editor_drivePathEditor.onDeserialized `ge` | 1 | 97 |  |
| extensions.editor_drivePathEditor.onClientEndMission `ge` | 0 | 1127 |  |
| extensions.editor_drivePathEditor_playback.getPlaybackTime `ge` | 0 | 25 |  |
| extensions.editor_drivePathEditor_playback.startPlayback `ge` | 2 | 30 |  |
| extensions.editor_drivePathEditor_playback.stopPlayback `ge` | 0 | 58 |  |
| extensions.editor_drivePathEditor_playback.handlePlayback `ge` | 0 | 77 |  |
| extensions.editor_drivePathEditor_record.getRecordingTime `ge` | 0 | 36 |  |
| extensions.editor_drivePathEditor_record.handleRecord `ge` | 0 | 39 |  |
| extensions.editor_drivePathEditor_record.startRecord `ge` | 1 | 64 |  |
| extensions.editor_drivePathEditor_record.stopRecord `ge` | 1 | 86 |  |
| extensions.editor_drivePathEditor_splineMgr.getToolPrefixStr `ge` | 0 | 58 |  |
| extensions.editor_drivePathEditor_splineMgr.getEditModeKey `ge` | 0 | 61 |  |
| extensions.editor_drivePathEditor_splineMgr.getDrivePathSplines `ge` | 0 | 64 |  |
| extensions.editor_drivePathEditor_splineMgr.getSplineMap `ge` | 0 | 67 |  |
| extensions.editor_drivePathEditor_splineMgr.setDrivePathSplines `ge` | 1 | 76 |  |
| extensions.editor_drivePathEditor_splineMgr.setDrivePathSpline `ge` | 2 | 70 |  |
| extensions.editor_drivePathEditor_splineMgr.computeActiveVehicles `ge` | 0 | 83 |  |
| extensions.editor_drivePathEditor_splineMgr.getActiveVehicles `ge` | 1 | 93 |  |
| extensions.editor_drivePathEditor_splineMgr.getVehicleById `ge` | 1 | 101 |  |
| extensions.editor_drivePathEditor_splineMgr.getNavGraph `ge` | 0 | 140 |  |
| extensions.editor_drivePathEditor_splineMgr.resetGeometry `ge` | 1 | 185 |  |
| extensions.editor_drivePathEditor_splineMgr.getDefaultSliderParams `ge` | 0 | 182 |  |
| extensions.editor_drivePathEditor_splineMgr.addNewDrivePathSpline `ge` | 0 | 201 |  |
| extensions.editor_drivePathEditor_splineMgr.splitDrivePathSpline `ge` | 2 | 357 |  |
| extensions.editor_drivePathEditor_splineMgr.joinDrivePathSplines `ge` | 4 | 481 |  |
| extensions.editor_drivePathEditor_splineMgr.flipSpline `ge` | 1 | 572 |  |
| extensions.editor_drivePathEditor_splineMgr.removeDrivePathSpline `ge` | 1 | 254 |  |
| extensions.editor_drivePathEditor_splineMgr.removeAllDrivePathSplines `ge` | 1 | 262 |  |
| extensions.editor_drivePathEditor_splineMgr.deepCopyDrivePathSpline `ge` | 1 | 281 |  |
| extensions.editor_drivePathEditor_splineMgr.deepCopyDrivePathSplineState `ge` | 0 | 347 |  |
| extensions.editor_drivePathEditor_splineMgr.singleSplineEditUndo `ge` | 1 | 710 |  |
| extensions.editor_drivePathEditor_splineMgr.singleSplineEditRedo `ge` | 1 | 718 |  |
| extensions.editor_drivePathEditor_splineMgr.transSplineEditUndo `ge` | 1 | 726 |  |
| extensions.editor_drivePathEditor_splineMgr.transSplineEditRedo `ge` | 1 | 738 |  |
| extensions.editor_drivePathEditor_splineMgr.updateDirtyDrivePathSplines `ge` | 1 | 900 |  |
| extensions.editor_drivePathEditor_splineMgr.convertPathsToDrivePathSplines `ge` | 1 | 944 |  |
| extensions.editor_drivePathEditor_splineMgr.serializeDrivePathSpline `ge` | 1 | 750 |  |
| extensions.editor_drivePathEditor_splineMgr.deserializeDrivePathSpline `ge` | 1 | 804 |  |
| extensions.editor_drivePathEditor_splineMgr.deepCopyDrivePathSplineState `ge` | 0 | 347 |  |
| extensions.editor_drivePathEditor_splineMgr.resetVehiclePose `ge` | 2 | 597 |  |
| extensions.editor_drivePathEditor_splineMgr.linkSpline `ge` | 2 | 630 |  |
| extensions.editor_drivePathEditor_splineMgr.unlinkSpline `ge` | 2 | 641 |  |
| extensions.editor_drivePathEditor_splineMgr.relinkAllVehiclesToSplines `ge` | 0 | 668 |  |
| extensions.editor_dynamicDecalsTool.getSectionWindowName `ge` | 1 | 146 |  |
| extensions.editor_dynamicDecalsTool.registerEditorOnUpdateFn `ge` | 2 | 780 |  |
| extensions.editor_dynamicDecalsTool.unregisterEditorOnUpdateFn `ge` | 1 | 784 |  |
| extensions.editor_dynamicDecalsTool.registerSection `ge` | 6 | 801 |  |
| extensions.editor_dynamicDecalsTool.setSectionOpenState `ge` | 3 | 805 |  |
| extensions.editor_dynamicDecalsTool.getSectionOpenState `ge` | 1 | 827 |  |
| extensions.editor_dynamicDecalsTool.registerToolbarToolItem `ge` | 3 | 838 |  |
| extensions.editor_dynamicDecalsTool.registerToolbarActionItem `ge` | 3 | 843 |  |
| extensions.editor_dynamicDecalsTool.registerOnEditorGuiFn `ge` | 2 | 848 |  |
| extensions.editor_dynamicDecalsTool.unregisterOnEditorGuiFn `ge` | 1 | 852 |  |
| extensions.editor_dynamicDecalsTool.onSerialize `ge` | 0 | 859 | table |
| extensions.editor_dynamicDecalsTool.onDeserialized `ge` | 1 | 864 |  |
| extensions.editor_dynamicDecalsTool.onEditorRegisterPreferences `ge` | 1 | 690 |  |
| extensions.editor_dynamicDecalsTool.applyDecal `ge` | 1 | 880 |  |
| extensions.editor_dynamicDecalsTool.changeDecalSize `ge` | 2 | 906 |  |
| extensions.editor_dynamicDecalsTool.changeDecalRotation `ge` | 2 | 907 |  |
| extensions.editor_dynamicDecalsTool.undo `ge` | 0 | 909 |  |
| extensions.editor_dynamicDecalsTool.redo `ge` | 0 | 918 |  |
| extensions.editor_dynamicDecalsTool.lockDepth `ge` | 1 | 944 |  |
| extensions.editor_dynamicDecalsTool.lockSurfaceNormal `ge` | 1 | 948 |  |
| extensions.editor_dynamicDecalsTool.enableBrushStroke `ge` | 1 | 952 |  |
| extensions.editor_dynamicDecalsTool.enablePathLayer `ge` | 1 | 960 |  |
| extensions.editor_dynamicDecalsTool.finishPathLayer `ge` | 0 | 964 |  |
| extensions.editor_dynamicDecalsTool.removeLastPathLayerPoint `ge` | 0 | 968 |  |
| extensions.editor_dynamicDecalsTool.getIconSize `ge` | 0 | 978 |  |
| extensions.editor_dynamicDecalsTool.getIconSizeVec2 `ge` | 0 | 982 |  |
| extensions.editor_dynamicDecalsTool.getMainScrollY `ge` | 0 | 986 |  |
| extensions.editor_dynamicDecalsTool.setCurrentMaskEditingLayerUid `ge` | 1 | 990 |  |
| extensions.editor_dynamicDecalsTool.getCurrentMaskEditingLayerUid `ge` | 0 | 994 |  |
| extensions.editor_dynamicDecals_browser.registerBrowserTab `ge` | 3 | 71 |  |
| extensions.editor_dynamicDecals_browser.showWindow `ge` | 0 | 76 |  |
| extensions.editor_dynamicDecals_browser.hideWindow `ge` | 0 | 80 |  |
| extensions.editor_dynamicDecals_browser.isWindowVisible `ge` | 0 | 84 |  |
| extensions.editor_dynamicDecals_browser.onGui `ge` | 0 | 20 |  |
| extensions.editor_dynamicDecals_browser.registerEditorPreferences `ge` | 1 | 37 |  |
| extensions.editor_dynamicDecals_browser.editorPreferenceValueChanged `ge` | 2 | 43 |  |
| extensions.editor_dynamicDecals_browser.setup `ge` | 1 | 60 |  |
| extensions.editor_dynamicDecals_brushes.inspectorGui `ge` | 1 | 306 |  |
| extensions.editor_dynamicDecals_brushes.loadBrush `ge` | 1 | 135 |  |
| extensions.editor_dynamicDecals_brushes.saveBrush `ge` | 1 | 55 |  |
| extensions.editor_dynamicDecals_brushes.getBrushes `ge` | 0 | 599 |  |
| extensions.editor_dynamicDecals_brushes.registerEditorPreferences `ge` | 1 | 603 |  |
| extensions.editor_dynamicDecals_brushes.editorPreferenceValueChanged `ge` | 2 | 609 |  |
| extensions.editor_dynamicDecals_brushes.setup `ge` | 1 | 613 |  |
| extensions.editor_dynamicDecals_camera.registerEditorPreferences `ge` | 1 | 102 |  |
| extensions.editor_dynamicDecals_camera.editorPreferenceValueChanged `ge` | 2 | 118 |  |
| extensions.editor_dynamicDecals_camera.setup `ge` | 1 | 122 |  |
| extensions.editor_dynamicDecals_colorHistory.addColorToHistory `ge` | 1 | 15 |  |
| extensions.editor_dynamicDecals_colorHistory.onGui `ge` | 1 | 29 |  |
| extensions.editor_dynamicDecals_colorHistory.registerEditorPreferences `ge` | 1 | 52 |  |
| extensions.editor_dynamicDecals_colorHistory.editorPreferenceValueChanged `ge` | 2 | 61 |  |
| extensions.editor_dynamicDecals_colorHistory.setup `ge` | 1 | 76 |  |
| extensions.editor_dynamicDecals_colorPresets.onGui `ge` | 1 | 30 |  |
| extensions.editor_dynamicDecals_colorPresets.registerEditorPreferences `ge` | 1 | 101 |  |
| extensions.editor_dynamicDecals_colorPresets.editorPreferenceValueChanged `ge` | 2 | 152 |  |
| extensions.editor_dynamicDecals_colorPresets.setup `ge` | 1 | 169 |  |
| extensions.editor_dynamicDecals_debugSection.registerEditorPreferences `ge` | 1 | 166 |  |
| extensions.editor_dynamicDecals_debugSection.editorPreferenceValueChanged `ge` | 2 | 172 |  |
| extensions.editor_dynamicDecals_debugSection.setup `ge` | 1 | 176 |  |
| extensions.editor_dynamicDecals_debugTextures.registerEditorPreferences `ge` | 1 | 42 |  |
| extensions.editor_dynamicDecals_debugTextures.editorPreferenceValueChanged `ge` | 2 | 48 |  |
| extensions.editor_dynamicDecals_debugTextures.setup `ge` | 1 | 52 |  |
| extensions.editor_dynamicDecals_docs.introductionGui `ge` | 1 | 197 |  |
| extensions.editor_dynamicDecals_docs.register `ge` | 1 | 328 |  |
| extensions.editor_dynamicDecals_docs.selectSection `ge` | 2 | 386 |  |
| extensions.editor_dynamicDecals_docs.showWindow `ge` | 0 | 401 |  |
| extensions.editor_dynamicDecals_docs.hideWindow `ge` | 0 | 408 |  |
| extensions.editor_dynamicDecals_docs.isWindowVisible `ge` | 0 | 412 |  |
| extensions.editor_dynamicDecals_docs.image `ge` | 4 | 173 |  |
| extensions.editor_dynamicDecals_docs.verticalSpacing `ge` | 0 | 193 |  |
| extensions.editor_dynamicDecals_docs.registerEditorPreferences `ge` | 1 | 307 |  |
| extensions.editor_dynamicDecals_docs.editorPreferenceValueChanged `ge` | 2 | 314 |  |
| extensions.editor_dynamicDecals_docs.setup `ge` | 1 | 278 |  |
| extensions.editor_dynamicDecals_export.registerEditorPreferences `ge` | 1 | 185 |  |
| extensions.editor_dynamicDecals_export.editorPreferenceValueChanged `ge` | 2 | 191 |  |
| extensions.editor_dynamicDecals_export.setup `ge` | 1 | 196 |  |
| extensions.editor_dynamicDecals_fonts.checkOrGenerateFontBitmaps `ge` | 1 | 501 |  |
| extensions.editor_dynamicDecals_fonts.getFontDirectory `ge` | 0 | 516 |  |
| extensions.editor_dynamicDecals_fonts.getGeneratedFontAtlases `ge` | 0 | 520 |  |
| extensions.editor_dynamicDecals_fonts.registerEditorPreferences `ge` | 1 | 461 |  |
| extensions.editor_dynamicDecals_fonts.editorPreferenceValueChanged `ge` | 2 | 469 |  |
| extensions.editor_dynamicDecals_fonts.setup `ge` | 1 | 482 |  |
| extensions.editor_dynamicDecals_gizmo.getTransformMode `ge` | 0 | 40 |  |
| extensions.editor_dynamicDecals_gizmo.setTransformMode `ge` | 1 | 44 |  |
| extensions.editor_dynamicDecals_gizmo.resetTransformFn `ge` | 0 | 48 |  |
| extensions.editor_dynamicDecals_gizmo.getDragCount `ge` | 0 | 54 |  |
| extensions.editor_dynamicDecals_gizmo.gizmoBeginDrag `ge` | 0 | 59 |  |
| extensions.editor_dynamicDecals_gizmo.gizmoEndDrag `ge` | 0 | 66 |  |
| extensions.editor_dynamicDecals_gizmo.gizmoDragging `ge` | 0 | 72 |  |
| extensions.editor_dynamicDecals_gizmo.registerEditorPreferences `ge` | 1 | 100 |  |
| extensions.editor_dynamicDecals_gizmo.editorPreferenceValueChanged `ge` | 2 | 112 |  |
| extensions.editor_dynamicDecals_gizmo.editModeUpdate `ge` | 3 | 116 |  |
| extensions.editor_dynamicDecals_gizmo.setup `ge` | 1 | 142 |  |
| extensions.editor_dynamicDecals_helper.textUnformattedCentered `ge` | 1 | 12 |  |
| extensions.editor_dynamicDecals_helper.textColoredCentered `ge` | 2 | 18 |  |
| extensions.editor_dynamicDecals_helper.imageWidget `ge` | 2 | 24 |  |
| extensions.editor_dynamicDecals_helper.imageTooltip `ge` | 2 | 32 |  |
| extensions.editor_dynamicDecals_helper.iconTooltip `ge` | 2 | 44 |  |
| extensions.editor_dynamicDecals_helper.splitAndCapitalizeCamelCase `ge` | 1 | 52 |  |
| extensions.editor_dynamicDecals_helper.capitalizeWords `ge` | 1 | 60 |  |
| extensions.editor_dynamicDecals_helper.registerEditorPreferences `ge` | 1 | 66 |  |
| extensions.editor_dynamicDecals_helper.editorPreferenceValueChanged `ge` | 2 | 72 |  |
| extensions.editor_dynamicDecals_helper.setup `ge` | 1 | 76 |  |
| extensions.editor_dynamicDecals_history.registerEditorPreferences `ge` | 1 | 83 |  |
| extensions.editor_dynamicDecals_history.editorPreferenceValueChanged `ge` | 2 | 89 |  |
| extensions.editor_dynamicDecals_history.setup `ge` | 1 | 93 |  |
| extensions.editor_dynamicDecals_inspector.registerLayerGui `ge` | 2 | 133 |  |
| extensions.editor_dynamicDecals_inspector.inspectorGuiLayer `ge` | 1 | 64 |  |
| extensions.editor_dynamicDecals_inspector.inspectorGuiBrush `ge` | 1 | 91 |  |
| extensions.editor_dynamicDecals_inspector.registerEditorPreferences `ge` | 1 | 98 |  |
| extensions.editor_dynamicDecals_inspector.editorPreferenceValueChanged `ge` | 2 | 104 |  |
| extensions.editor_dynamicDecals_inspector.setup `ge` | 1 | 118 |  |
| extensions.editor_dynamicDecals_inspector_utils.onGui `ge` | 0 | 126 |  |
| extensions.editor_dynamicDecals_inspector_utils.decalTextureWidgetInspect `ge` | 4 | 17 |  |
| extensions.editor_dynamicDecals_inspector_utils.decalColorGradientWidgetInspect `ge` | 3 | 56 |  |
| extensions.editor_dynamicDecals_inspector_utils.registerEditorPreferences `ge` | 1 | 130 |  |
| extensions.editor_dynamicDecals_inspector_utils.editorPreferenceValueChanged `ge` | 2 | 136 |  |
| extensions.editor_dynamicDecals_inspector_utils.setup `ge` | 1 | 140 |  |
| extensions.editor_dynamicDecals_layerStack.registerLayerElementGui `ge` | 0 | 839 |  |
| extensions.editor_dynamicDecals_layerStack.registerEditorPreferences `ge` | 1 | 786 |  |
| extensions.editor_dynamicDecals_layerStack.editorPreferenceValueChanged `ge` | 2 | 804 |  |
| extensions.editor_dynamicDecals_layerStack.setup `ge` | 1 | 820 |  |
| extensions.editor_dynamicDecals_layerTypes_brushStroke.registerEditorPreferences `ge` | 1 | 538 |  |
| extensions.editor_dynamicDecals_layerTypes_brushStroke.editorPreferenceValueChanged `ge` | 2 | 544 |  |
| extensions.editor_dynamicDecals_layerTypes_brushStroke.setup `ge` | 1 | 589 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.isTexturesSdfCompatible `ge` | 1 | 67 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.checkColorDecalTexturesSdfCompatible `ge` | 0 | 77 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.showSdfIntroWindow `ge` | 0 | 1246 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.hideSdfIntroWindow `ge` | 0 | 1247 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.registerEditorPreferences `ge` | 1 | 1134 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.editorPreferenceValueChanged `ge` | 2 | 1146 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.setup `ge` | 1 | 1211 |  |
| extensions.editor_dynamicDecals_layerTypes_decal.editModeUpdate `ge` | 3 | 1154 |  |
| extensions.editor_dynamicDecals_layerTypes_fill.registerEditorPreferences `ge` | 1 | 119 |  |
| extensions.editor_dynamicDecals_layerTypes_fill.editorPreferenceValueChanged `ge` | 2 | 125 |  |
| extensions.editor_dynamicDecals_layerTypes_fill.setup `ge` | 1 | 143 |  |
| extensions.editor_dynamicDecals_layerTypes_fill.openAddLayerWindow `ge` | 0 | 129 |  |
| extensions.editor_dynamicDecals_layerTypes_group.onGui `ge` | 1 | 27 |  |
| extensions.editor_dynamicDecals_layerTypes_group.registerEditorPreferences `ge` | 1 | 31 |  |
| extensions.editor_dynamicDecals_layerTypes_group.editorPreferenceValueChanged `ge` | 2 | 37 |  |
| extensions.editor_dynamicDecals_layerTypes_group.setup `ge` | 1 | 52 |  |
| extensions.editor_dynamicDecals_layerTypes_linkedSet.onGui `ge` | 1 | 174 |  |
| extensions.editor_dynamicDecals_layerTypes_linkedSet.registerEditorPreferences `ge` | 1 | 178 |  |
| extensions.editor_dynamicDecals_layerTypes_linkedSet.editorPreferenceValueChanged `ge` | 2 | 184 |  |
| extensions.editor_dynamicDecals_layerTypes_linkedSet.setup `ge` | 1 | 202 |  |
| extensions.editor_dynamicDecals_layerTypes_path.registerEditorPreferences `ge` | 1 | 712 |  |
| extensions.editor_dynamicDecals_layerTypes_path.editorPreferenceValueChanged `ge` | 2 | 718 |  |
| extensions.editor_dynamicDecals_layerTypes_path.setup `ge` | 1 | 769 |  |
| extensions.editor_dynamicDecals_layerTypes_textureFill.registerEditorPreferences `ge` | 1 | 155 |  |
| extensions.editor_dynamicDecals_layerTypes_textureFill.editorPreferenceValueChanged `ge` | 2 | 161 |  |
| extensions.editor_dynamicDecals_layerTypes_textureFill.setup `ge` | 1 | 181 |  |
| extensions.editor_dynamicDecals_layerTypes_textureFill.openAddLayerWindow `ge` | 0 | 165 |  |
| extensions.editor_dynamicDecals_loadSave.onSerialize `ge` | 0 | 135 | table |
| extensions.editor_dynamicDecals_loadSave.onDeserialized `ge` | 1 | 141 |  |
| extensions.editor_dynamicDecals_loadSave.getCurrentPorjectFilePath `ge` | 0 | 145 |  |
| extensions.editor_dynamicDecals_loadSave.loadFileDialog `ge` | 0 | 22 |  |
| extensions.editor_dynamicDecals_loadSave.saveAsFileDialog `ge` | 0 | 39 |  |
| extensions.editor_dynamicDecals_loadSave.registerEditorPreferences `ge` | 1 | 82 |  |
| extensions.editor_dynamicDecals_loadSave.editorPreferenceValueChanged `ge` | 2 | 88 |  |
| extensions.editor_dynamicDecals_loadSave.setup `ge` | 1 | 117 |  |
| extensions.editor_dynamicDecals_meshes.registerEditorPreferences `ge` | 1 | 40 |  |
| extensions.editor_dynamicDecals_meshes.editorPreferenceValueChanged `ge` | 2 | 46 |  |
| extensions.editor_dynamicDecals_meshes.setup `ge` | 1 | 50 |  |
| extensions.editor_dynamicDecals_news.showWindow `ge` | 0 | 164 |  |
| extensions.editor_dynamicDecals_news.registerEditorPreferences `ge` | 1 | 154 |  |
| extensions.editor_dynamicDecals_news.editorPreferenceValueChanged `ge` | 2 | 160 |  |
| extensions.editor_dynamicDecals_news.setup `ge` | 1 | 145 |  |
| extensions.editor_dynamicDecals_notification.add `ge` | 4 | 97 |  |
| extensions.editor_dynamicDecals_notification.onGui `ge` | 0 | 31 |  |
| extensions.editor_dynamicDecals_notification.registerEditorPreferences `ge` | 1 | 78 |  |
| extensions.editor_dynamicDecals_notification.editorPreferenceValueChanged `ge` | 2 | 84 |  |
| extensions.editor_dynamicDecals_notification.setup `ge` | 1 | 88 |  |
| extensions.editor_dynamicDecals_selection.selectLayer `ge` | 2 | 28 |  |
| extensions.editor_dynamicDecals_selection.deselectLayer `ge` | 1 | 119 |  |
| extensions.editor_dynamicDecals_selection.registerEditorPreferences `ge` | 1 | 136 |  |
| extensions.editor_dynamicDecals_selection.editorPreferenceValueChanged `ge` | 2 | 142 |  |
| extensions.editor_dynamicDecals_selection.setup `ge` | 1 | 146 |  |
| extensions.editor_dynamicDecals_settings.updateMaterials `ge` | 0 | 28 |  |
| extensions.editor_dynamicDecals_settings.getUsedMaterialNames `ge` | 0 | 246 |  |
| extensions.editor_dynamicDecals_settings.registerEditorPreferences `ge` | 1 | 198 |  |
| extensions.editor_dynamicDecals_settings.editorPreferenceValueChanged `ge` | 2 | 204 |  |
| extensions.editor_dynamicDecals_settings.setup `ge` | 1 | 213 |  |
| extensions.editor_dynamicDecals_textures.getTexturesDirectoryPath `ge` | 0 | 585 |  |
| extensions.editor_dynamicDecals_textures.registerEditorPreferences `ge` | 1 | 249 |  |
| extensions.editor_dynamicDecals_textures.editorPreferenceValueChanged `ge` | 2 | 257 |  |
| extensions.editor_dynamicDecals_textures.setup `ge` | 1 | 492 |  |
| extensions.editor_dynamicDecals_vehicleColorPalette.onSerialize `ge` | 0 | 438 | table |
| extensions.editor_dynamicDecals_vehicleColorPalette.onDeserialized `ge` | 1 | 454 |  |
| extensions.editor_dynamicDecals_vehicleColorPalette.onGui `ge` | 1 | 66 |  |
| extensions.editor_dynamicDecals_vehicleColorPalette.registerEditorPreferences `ge` | 1 | 322 |  |
| extensions.editor_dynamicDecals_vehicleColorPalette.editorPreferenceValueChanged `ge` | 2 | 394 |  |
| extensions.editor_dynamicDecals_vehicleColorPalette.setup `ge` | 1 | 426 |  |
| extensions.editor_dynamicDecals_widgets.draw `ge` | 5 | 1325 |  |
| extensions.editor_dynamicDecals_widgets.highlight `ge` | 2 | 1553 |  |
| extensions.editor_dynamicDecals_widgets.defaultButton `ge` | 3 | 59 |  |
| extensions.editor_dynamicDecals_widgets.registerEditorPreferences `ge` | 1 | 1575 |  |
| extensions.editor_dynamicDecals_widgets.editorPreferenceValueChanged `ge` | 2 | 1582 |  |
| extensions.editor_dynamicDecals_widgets.setup `ge` | 1 | 1567 |  |
| extensions.editor_engineAudioDebug.onExtensionLoaded `ge` | 0 | 271 |  |
| extensions.editor_engineAudioDebug.open `ge` | 0 | 265 |  |
| extensions.editor_extensionsDebug.onExtensionLoaded `ge` | 0 | 56 |  |
| extensions.editor_extensionsEditor.onEditorRegisterPreferences `ge` | 1 | 67 |  |
| extensions.editor_fileDialog.onExtensionLoaded `ge` | 0 | 899 |  |
| extensions.editor_fileDialog.onEditorRegisterPreferences `ge` | 1 | 940 |  |
| extensions.editor_fileDialog.openFile `ge` | 6 | 891 |  |
| extensions.editor_fileDialog.saveFile `ge` | 5 | 895 |  |
| extensions.editor_flowgraphEditor.getPropertiesWindow `ge` | 0 | 1059 |  |
| extensions.editor_flowgraphEditor.uiFocusNodesShortcut `ge` | 0 | 854 |  |
| extensions.editor_flowgraphEditor.uiHideShortcut `ge` | 1 | 864 |  |
| extensions.editor_flowgraphEditor.uiShowSourceShortcut `ge` | 0 | 903 |  |
| extensions.editor_flowgraphEditor.uiAutoConnectShortcut `ge` | 0 | 913 |  |
| extensions.editor_flowgraphEditor.uiFindShortcut `ge` | 0 | 1033 |  |
| extensions.editor_flowgraphEditor.uiDisconnectShortcut `ge` | 0 | 1000 |  |
| extensions.editor_flowgraphEditor.uiToggleCategoryShortcut `ge` | 0 | 1038 |  |
| extensions.editor_flowgraphEditor.isActionMapEnabled `ge` | 1 | 1048 | boolean |
| extensions.editor_flowgraphEditor.arrowControllableWindowCall `ge` | 1+ | 848 |  |
| extensions.editor_flowgraphEditor.open `ge` | 0 | 618 |  |
| extensions.editor_flowgraphEditor.closeCurrent `ge` | 0 | 100 |  |
| extensions.editor_flowgraphEditor.autoSave `ge` | 0 | 149 |  |
| extensions.editor_flowgraphEditor.onSerialize `ge` | 0 | 693 | table |
| extensions.editor_flowgraphEditor.onDeserialized `ge` | 1 | 792 |  |
| extensions.editor_flowgraphEditor.drawRestoreMenu `ge` | 0 | 406 |  |
| extensions.editor_flowgraphEditor.drawExecution `ge` | 0 | 386 |  |
| extensions.editor_flowgraphEditor.drawEditor `ge` | 3 | 473 |  |
| extensions.editor_flowgraphEditor.drawContextMenus `ge` | 0 | 378 |  |
| extensions.editor_flowgraphEditor.setManager `ge` | 2 | 685 |  |
| extensions.editor_flowgraphEditor.getManager `ge` | 0 | 797 |  |
| extensions.editor_flowgraphEditor.showNodeReferences `ge` | 1 | 835 |  |
| extensions.editor_flowgraphEditor.saveCurrent `ge` | 0 | 131 |  |
| extensions.editor_flowgraphEditor.saveMacro `ge` | 1 | 114 |  |
| extensions.editor_flowgraphEditor.save `ge` | 0 | 139 |  |
| extensions.editor_flowgraphEditor.saveFile `ge` | 0 | 160 |  |
| extensions.editor_flowgraphEditor.saveAsFile `ge` | 1 | 195 |  |
| extensions.editor_flowgraphEditor.openFile `ge` | 3 | 80 |  |
| extensions.editor_flowgraphEditor.windowsMenu `ge` | 0 | 801 |  |
| extensions.editor_flowgraphEditor.addHistory `ge` | 2 | 392 |  |
| extensions.editor_flowgraphEditor.onEditorRegisterPreferences `ge` | 1 | 745 |  |
| extensions.editor_forestEditor.dumpForestBrushes `ge` | 0 | 137 |  |
| extensions.editor_forestEditor.dumpForestBrushesMap `ge` | 0 | 143 |  |
| extensions.editor_forestEditor.dumpBrushProperties `ge` | 0 | 149 |  |
| extensions.editor_forestEditor.onEditorRegisterPreferences `ge` | 1 | 2911 |  |
| extensions.editor_forestEditor.onDeserialize `ge` | 1 | 2941 |  |
| extensions.editor_forestEditor.onSerialize `ge` | 0 | 2945 | boolean |
| extensions.editor_forestEditor.changeBrush `ge` | 2 | 1059 |  |
| extensions.editor_forestEditor.selectBrushByIndex `ge` | 1 | 2937 |  |
| extensions.editor_forestEditor.beginChangeBrushSizeWithKeys `ge` | 1 | 2964 |  |
| extensions.editor_forestEditor.endChangeBrushSizeWithKeys `ge` | 0 | 2965 |  |
| extensions.editor_forestEditor.selectForestItems `ge` | 2 | 235 |  |
| extensions.editor_forestEditor.selectToolByName `ge` | 1 | 380 |  |
| extensions.editor_forestEditor.clearForestItemsSelection `ge` | 0 | 224 |  |
| extensions.editor_gen_lib_ai.go2 `ge` | 5 | 61 | multiple |
| extensions.editor_gen_lib_ai.line `ge` | 2 | 120 | multiple |
| extensions.editor_gen_lib_jbeam.fileUp `ge` | 3 | 23 |  |
| extensions.editor_gen_lib_jbeam.part2file `ge` | 0 | 146 |  |
| extensions.editor_gen_lib_ui.columnRight `ge` | 2 | 69 |  |
| extensions.editor_gen_lib_ui.buttonTxt `ge` | 7 | 77 |  |
| extensions.editor_gen_lib_ui.buttonImg `ge` | 7 | 112 |  |
| extensions.editor_gen_lib_ui.check `ge` | 3 | 163 |  |
| extensions.editor_gen_lib_ui.sliderC `ge` | 5 | 183 |  |
| extensions.editor_gen_lib_ui.slider `ge` | 5 | 208 |  |
| extensions.editor_gen_lib_ui.check_ `ge` | 2 | 238 |  |
| extensions.editor_gen_lib_ui.combo `ge` | 4 | 257 |  |
| extensions.editor_gen_lib_ui.table `ge` | 6 | 308 |  |
| extensions.editor_gen_lib_ui.listBox `ge` | 3 | 387 |  |
| extensions.editor_gen_lib_ui.tree2ui `ge` | 1 | 416 |  |
| extensions.editor_gen_lib_ui.tree2ui_ `ge` | 1 | 449 |  |
| extensions.editor_gen_mesh.to `ge` | 4 | 96 |  |
| extensions.editor_gen_mesh.fillSegment `ge` | 5 | 125 |  |
| extensions.editor_gen_mesh.flipSide `ge` | 2 | 159 |  |
| extensions.editor_gen_mesh.forBeam `ge` | 5 | 234 | table |
| extensions.editor_gen_mesh.tri2mdata `ge` | 9 | 271 | multiple |
| extensions.editor_gen_mesh.zip2 `ge` | 8 | 345 | multiple |
| extensions.editor_gen_mesh.uvTransform `ge` | 3 | 714 |  |
| extensions.editor_gen_mesh.forNode `ge` | 5 | 1124 |  |
| extensions.editor_gen_mesh.ofChild `ge` | 3 | 1162 |  |
| extensions.editor_gen_mesh.d2buf `ge` | 2 | 1178 |  |
| extensions.editor_gen_mesh.toSource `ge` | 4 | 1200 |  |
| extensions.editor_gen_mesh.toGeo `ge` | 4 | 1210 |  |
| extensions.editor_gen_mesh.gpuFrom `ge` | 1 | 1276 |  |
| extensions.editor_gen_mesh.forBeams `ge` | 2 | 1366 |  |
| extensions.editor_gen_mesh.vehFrom `ge` | 1 | 1433 | multiple |
| extensions.editor_gen_mesh.toGhost `ge` | 1 | 1536 |  |
| extensions.editor_gen_mesh.daeFrom `ge` | 1 | 1551 |  |
| extensions.editor_gen_mesh.forChild `ge` | 3 | 1672 |  |
| extensions.editor_gen_mesh.geoFrom `ge` | 2 | 1686 | multiple/table |
| extensions.editor_gen_mesh.toDAE `ge` | 2 | 1847 |  |
| extensions.editor_gen_mesh.toXML `ge` | 2 | 1942 |  |
| extensions.editor_gen_mesh.toLOD `ge` | 4 | 2000 |  |
| extensions.editor_gen_mesh.forLOD `ge` | 3 | 2172 |  |
| extensions.editor_gen_mesh.text2node `ge` | 2 | 2184 |  |
| extensions.editor_gen_mesh.toNode `ge` | 3 | 2192 |  |
| extensions.editor_gen_mesh.ofNode `ge` | 2 | 2205 |  |
| extensions.editor_gen_mesh.xmlOn `ge` | 1 | 2223 |  |
| extensions.editor_gen_mesh.xml2file `ge` | 2 | 2242 |  |
| extensions.editor_gen_mesh.matUp `ge` | 2 | 2394 | multiple |
| extensions.editor_gen_mesh.matReplace `ge` | 2 | 2424 |  |
| extensions.editor_gen_mesh.rcPave__ `ge` | 3 | 3448 |  |
| extensions.editor_gen_mesh.framePave `ge` | 3 | 3471 | table |
| extensions.editor_gen_mesh.rcPave `ge` | 4 | 4379 | multiple |
| extensions.editor_gen_mesh.rcPave_ `ge` | 5 | 5066 |  |
| extensions.editor_gen_mesh.valid `ge` | 1 | 5750 | boolean |
| extensions.editor_gen_mesh.frameSpline `ge` | 5 | 5848 | multiple |
| extensions.editor_gen_mesh.forBags `ge` | 1 | 6038 | multiple |
| extensions.editor_gen_mesh.forPlate `ge` | 1 | 6128 | multiple/table |
| extensions.editor_gen_mesh.joint `ge` | 3 | 6468 |  |
| extensions.editor_gen_mesh.forJoint `ge` | 2 | 6538 | multiple |
| extensions.editor_gen_mesh.colorOn `ge` | 2 | 6634 |  |
| extensions.editor_gen_mesh.space `ge` | 6 | 6646 |  |
| extensions.editor_gen_mesh.align `ge` | 4 | 27 |  |
| extensions.editor_gen_mesh.rc `ge` | 6 | 643 | multiple |
| extensions.editor_gen_mesh.rect `ge` | 6 | 677 | multiple |
| extensions.editor_gen_mesh.dissect `ge` | 3 | 2504 |  |
| extensions.editor_gen_mesh.faceHit `ge` | 1 | 2546 | multiple |
| extensions.editor_gen_mesh.fromGrid `ge` | 10 | 872 | multiple |
| extensions.editor_gen_mesh.daeParse `ge` | 1 | 2387 |  |
| extensions.editor_gen_mesh.matSet `ge` | 4 | 2462 |  |
| extensions.editor_gen_mesh.pop `ge` | 2 | 2961 | multiple |
| extensions.editor_gen_mesh.move `ge` | 5 | 2852 |  |
| extensions.editor_gen_mesh.copy `ge` | 4 | 2902 |  |
| extensions.editor_gen_mesh.cut `ge` | 4 | 2907 |  |
| extensions.editor_gen_mesh.clone `ge` | 1 | 2791 |  |
| extensions.editor_gen_mesh.step `ge` | 2 | 2382 |  |
| extensions.editor_gen_mesh.update `ge` | 1 | 2772 |  |
| extensions.editor_gen_mesh.mark `ge` | 2 | 2912 |  |
| extensions.editor_gen_mesh.save `ge` | 2 | 2491 |  |
| extensions.editor_gen_mesh.meshUp `ge` | 3 | 5810 | multiple |
| extensions.editor_gen_mesh.dae2proc `ge` | 3 | 2582 |  |
| extensions.editor_gen_mesh.forAMat `ge` | 1 | 2570 |  |
| extensions.editor_gen_mesh.grid2mesh `ge` | 10 | 910 | multiple |
| extensions.editor_gen_mesh.forUV `ge` | 6 | 200 |  |
| extensions.editor_gen_mesh.ifHit `ge` | 4 | 2922 | multiple |
| extensions.editor_gen_mesh.uv4grid `ge` | 7 | 728 |  |
| extensions.editor_gen_mesh.uv4poly `ge` | 4 | 171 |  |
| extensions.editor_gen_mesh.grid2plate `ge` | 11 | 758 | multiple |
| extensions.editor_gen_mesh.tri `ge` | 8 | 617 | multiple |
| extensions.editor_gen_mesh.zip `ge` | 5 | 502 |  |
| extensions.editor_gen_mesh.log `ge` | 3 | 33 | multiple |
| extensions.editor_gen_test.clear `ge` | 1 | 9 |  |
| extensions.editor_gen_test.pretest_BAT `ge` | 1 | 104 |  |
| extensions.editor_gen_test.test_BAT `ge` | 1 | 156 | boolean |
| extensions.editor_gen_test.inject `ge` | 1 | 2021 |  |
| extensions.editor_gen_test.onUp `ge` | 1 | 2033 |  |
| extensions.editor_gen_ui.inject `ge` | 1 | 220 |  |
| extensions.editor_gen_ui.tree2ui `ge` | 1 | 2759 |  |
| extensions.editor_gen_ui.control `ge` | 4 | 722 |  |
| extensions.editor_gen_ui.hint `ge` | 1 | 2850 |  |
| extensions.editor_gen_world.wallCut `ge` | 0 | 6411 |  |
| extensions.editor_gizmoHelper.gizmoDrawCalled `ge` | 0 | 17 |  |
| extensions.editor_gizmoHelper.isGizmoVisible `ge` | 0 | 21 |  |
| extensions.editor_iconOverview.onExtensionLoaded `ge` | 0 | 80 |  |
| extensions.editor_iconOverview.open `ge` | 0 | 68 |  |
| extensions.editor_iconOverview.drawContent `ge` | 1 | 35 |  |
| extensions.editor_inspector.onExtensionLoaded `ge` | 0 | 820 |  |
| extensions.editor_layoutManager.getWindowLayouts `ge` | 1 | 14 |  |
| extensions.editor_layoutManager.loadWindowLayout `ge` | 2 | 18 |  |
| extensions.editor_layoutManager.saveWindowLayout `ge` | 2 | 30 |  |
| extensions.editor_layoutManager.loadCurrentWindowLayout `ge` | 1 | 37 |  |
| extensions.editor_layoutManager.saveCurrentWindowLayout `ge` | 1 | 42 |  |
| extensions.editor_layoutManager.deleteWindowLayout `ge` | 1 | 47 |  |
| extensions.editor_layoutManager.resetLayouts `ge` | 1 | 55 |  |
| extensions.editor_levelSettings.onExtensionLoaded `ge` | 0 | 13 |  |
| extensions.editor_levelValidator.startLevelValidation `ge` | 0 | 560 |  |
| extensions.editor_levelValidator.getLevelLogs `ge` | 0 | 887 |  |
| extensions.editor_levelValidator.getLevelLogsAggregated `ge` | 0 | 890 |  |
| extensions.editor_levelValidator.onExtensionLoaded `ge` | 0 | 854 |  |
| extensions.editor_levelValidator.onEditorRegisterPreferences `ge` | 1 | 858 |  |
| extensions.editor_logger.onExtensionLoaded `ge` | 0 | 12 |  |
| extensions.editor_main.log `ge` | 1 | 50 |  |
| extensions.editor_main.logDebug `ge` | 1 | 54 |  |
| extensions.editor_main.logError `ge` | 1 | 58 |  |
| extensions.editor_main.logWarn `ge` | 1 | 62 |  |
| extensions.editor_main.logInfo `ge` | 1 | 50 |  |
| extensions.editor_main.initializeModules `ge` | 0 | 294 |  |
| extensions.editor_main.toggleActive `ge` | 1 | 656 |  |
| extensions.editor_main.setEditorActive `ge` | 2 | 578 |  |
| extensions.editor_main.isEditorActive `ge` | 0 | 585 |  |
| extensions.editor_main.saveState `ge` | 1 | 353 |  |
| extensions.editor_main.loadState `ge` | 1 | 365 |  |
| extensions.editor_main.savePreferences `ge` | 0 | 81 |  |
| extensions.editor_main.loadPreferences `ge` | 0 | 74 |  |
| extensions.editor_main.loadExtensionsSettings `ge` | 0 | 85 |  |
| extensions.editor_main.saveExtensionsSettings `ge` | 0 | 89 |  |
| extensions.editor_main.loadEditorExtension `ge` | 1 | 140 |  |
| extensions.editor_main.loadEditorExtensions `ge` | 1 | 171 |  |
| extensions.editor_main.unloadEditorExtension `ge` | 1 | 213 |  |
| extensions.editor_main.shutdown `ge` | 0 | 589 |  |
| extensions.editor_main.onClientEndMission `ge` | 0 | 610 |  |
| extensions.editor_main.onExtensionLoaded `ge` | 0 | 665 |  |
| extensions.editor_main.onExtensionUnloaded `ge` | 0 | 668 |  |
| extensions.editor_main.onSerialize `ge` | 0 | 672 |  |
| extensions.editor_main.onDeserialized `ge` | 1 | 715 |  |
| extensions.editor_mainMenu.onExtensionLoaded `ge` | 0 | 735 |  |
| extensions.editor_mainUpdate.onExtensionLoaded `ge` | 0 | 41 |  |
| extensions.editor_mainUpdate.onExtensionUnloaded `ge` | 0 | 44 |  |
| extensions.editor_mapSensorEditor.onSerialize `ge` | 0 | 1365 | table |
| extensions.editor_mapSensorEditor.onDeserialized `ge` | 1 | 1374 |  |
| extensions.editor_masterSpline.setSelectedSplineIdx `ge` | 1 | 110 |  |
| extensions.editor_masterSpline.setSelectedNodeIdx `ge` | 1 | 113 |  |
| extensions.editor_masterSpline.onSerialize `ge` | 0 | 116 |  |
| extensions.editor_masterSpline.onDeserialized `ge` | 1 | 136 |  |
| extensions.editor_masterSpline.onClientEndMission `ge` | 0 | 1661 |  |
| extensions.editor_masterSpline_autoRoadGen.isPreview `ge` | 0 | 64 |  |
| extensions.editor_masterSpline_autoRoadGen.clearPreview `ge` | 0 | 67 |  |
| extensions.editor_masterSpline_autoRoadGen.generateAutoPreview `ge` | 3 | 290 |  |
| extensions.editor_masterSpline_autoRoadGen.createAutoRoad `ge` | 3 | 346 |  |
| extensions.editor_masterSpline_autoRoadGen.handlePreview `ge` | 1 | 375 |  |
| extensions.editor_masterSpline_homologation.getOptimisationIterationsPerFrame `ge` | 0 | 46 |  |
| extensions.editor_masterSpline_homologation.analyseSpline `ge` | 1 | 218 |  |
| extensions.editor_masterSpline_homologation.optimiseSpline `ge` | 2 | 406 |  |
| extensions.editor_masterSpline_layerMgr.getSliderDefaults `ge` | 0 | 61 |  |
| extensions.editor_masterSpline_layerMgr.deepCopyLayer `ge` | 1 | 64 |  |
| extensions.editor_masterSpline_layerMgr.deepCopyAllLayers `ge` | 1 | 67 |  |
| extensions.editor_masterSpline_layerMgr.updateAllLayers `ge` | 1 | 143 |  |
| extensions.editor_masterSpline_layerMgr.updateOnlyDirtyLayers `ge` | 1 | 150 |  |
| extensions.editor_masterSpline_layerMgr.removeLayer `ge` | 2 | 162 |  |
| extensions.editor_masterSpline_layerMgr.removeAllLayers `ge` | 1 | 173 |  |
| extensions.editor_masterSpline_layerMgr.addNewLayer `ge` | 1 | 186 |  |
| extensions.editor_masterSpline_layerMgr.serializeLayer `ge` | 1 | 201 | table |
| extensions.editor_masterSpline_layerMgr.deserializeLayer `ge` | 1 | 216 | table |
| extensions.editor_masterSpline_splineMgr.getToolPrefixStr `ge` | 0 | 54 |  |
| extensions.editor_masterSpline_splineMgr.getEditModeKey `ge` | 0 | 57 |  |
| extensions.editor_masterSpline_splineMgr.getMasterSplines `ge` | 0 | 60 |  |
| extensions.editor_masterSpline_splineMgr.getIdToIdxMap `ge` | 0 | 63 |  |
| extensions.editor_masterSpline_splineMgr.addToMasterSplineArray `ge` | 1 | 135 |  |
| extensions.editor_masterSpline_splineMgr.removeMasterSpline `ge` | 1 | 138 |  |
| extensions.editor_masterSpline_splineMgr.removeAllMasterSplines `ge` | 0 | 148 |  |
| extensions.editor_masterSpline_splineMgr.updateDirtyMasterSplines `ge` | 1 | 156 |  |
| extensions.editor_masterSpline_splineMgr.manageLiveOptimise `ge` | 1 | 215 |  |
| extensions.editor_masterSpline_splineMgr.addNewMasterSpline `ge` | 1 | 75 |  |
| extensions.editor_masterSpline_splineMgr.deepCopyMasterSpline `ge` | 1 | 224 |  |
| extensions.editor_masterSpline_splineMgr.deepCopyAllMasterSplines `ge` | 0 | 227 |  |
| extensions.editor_masterSpline_splineMgr.captureLinkedSplinesState `ge` | 0 | 230 |  |
| extensions.editor_masterSpline_splineMgr.captureTransTierState `ge` | 0 | 301 | table |
| extensions.editor_masterSpline_splineMgr.splitMasterSpline `ge` | 3 | 309 |  |
| extensions.editor_masterSpline_splineMgr.joinMasterSplines `ge` | 4 | 472 |  |
| extensions.editor_masterSpline_splineMgr.convertPathsToMasterSplines `ge` | 1 | 1024 |  |
| extensions.editor_masterSpline_splineMgr.serializeMasterSpline `ge` | 1 | 501 | table |
| extensions.editor_masterSpline_splineMgr.deserializeMasterSpline `ge` | 1 | 537 | table |
| extensions.editor_masterSpline_splineMgr.lightSplineUndo `ge` | 1 | 670 |  |
| extensions.editor_masterSpline_splineMgr.lightSplineRedo `ge` | 1 | 673 |  |
| extensions.editor_masterSpline_splineMgr.singleMasterSplineEditUndo `ge` | 1 | 732 |  |
| extensions.editor_masterSpline_splineMgr.singleMasterSplineEditRedo `ge` | 1 | 831 |  |
| extensions.editor_masterSpline_splineMgr.undoLayerAdd `ge` | 1 | 862 |  |
| extensions.editor_masterSpline_splineMgr.redoLayerAdd `ge` | 1 | 884 |  |
| extensions.editor_masterSpline_splineMgr.undoLayerRemove `ge` | 1 | 929 |  |
| extensions.editor_masterSpline_splineMgr.redoLayerRemove `ge` | 1 | 973 |  |
| extensions.editor_masterSpline_splineMgr.undoAddNewMasterSpline `ge` | 1 | 999 |  |
| extensions.editor_masterSpline_splineMgr.redoAddNewMasterSpline `ge` | 1 | 1008 |  |
| extensions.editor_masterSpline_splineMgr.transMasterSplineEditUndo `ge` | 1 | 826 |  |
| extensions.editor_masterSpline_splineMgr.transMasterSplineEditRedo `ge` | 1 | 857 |  |
| extensions.editor_masterSpline_splineMgr.updateLinkedSplineName `ge` | 3 | 996 |  |
| extensions.editor_masterSpline_splineMgr.unlinkAllSplines `ge` | 1 | 1015 |  |
| extensions.editor_materialEditor.setProperty `ge` | 4 | 1075 |  |
| extensions.editor_materialEditor.deleteMapButton `ge` | 3 | 1357 |  |
| extensions.editor_materialEditor.imageButton `ge` | 4 | 1403 |  |
| extensions.editor_materialEditor.inputFloat `ge` | 7 | 1672 |  |
| extensions.editor_materialEditor.colorEdit4 `ge` | 5 | 1552 |  |
| extensions.editor_materialEditor.showMaterialEditor `ge` | 0 | 2821 |  |
| extensions.editor_materialEditor.selectMaterialByName `ge` | 2 | 811 |  |
| extensions.editor_materialEditor.setMaterialDirty `ge` | 1 | 1068 |  |
| extensions.editor_materialEditor.onEditorRegisterPreferences `ge` | 1 | 3307 |  |
| extensions.editor_measuresInspectorHeader.onExtensionLoaded `ge` | 0 | 49 |  |
| extensions.editor_meshEditor.onEditorInspectorHeaderGui_ `ge` | 1 | 354 |  |
| extensions.editor_meshEditor.onEditorRegisterPreferences_ `ge` | 1 | 979 |  |
| extensions.editor_meshEditor.onEditorPreferenceValueChanged_ `ge` | 2 | 975 |  |
| extensions.editor_meshEditor.onEditorInspectorFieldChanged_ `ge` | 4 | 991 |  |
| extensions.editor_meshEditor.onEditorAxisGizmoAligmentChanged_ `ge` | 0 | 1002 |  |
| extensions.editor_meshEditor.onEditorObjectSelectionChanged_ `ge` | 0 | 1009 |  |
| extensions.editor_meshEditor.onUpdate_ `ge` | 0 | 717 |  |
| extensions.editor_meshEditor.onToolbar_ `ge` | 0 | 962 |  |
| extensions.editor_meshEditor.onActivate_ `ge` | 0 | 1017 |  |
| extensions.editor_meshEditor.copySettingsAM `ge` | 0 | 942 |  |
| extensions.editor_meshEditor.pasteFieldsAM `ge` | 0 | 129 |  |
| extensions.editor_meshEditor.onDeleteSelection `ge` | 0 | 269 |  |
| extensions.editor_meshEditor.onSelectAll `ge` | 0 | 53 |  |
| extensions.editor_meshRoadEditor.onExtensionLoaded `ge` | 0 | 39 |  |
| extensions.editor_meshSpline.setSelectedSplineIdx `ge` | 1 | 84 |  |
| extensions.editor_meshSpline.setSelectedNodeIdx `ge` | 1 | 87 |  |
| extensions.editor_meshSpline.onSerialize `ge` | 0 | 90 |  |
| extensions.editor_meshSpline.onDeserialized `ge` | 1 | 107 |  |
| extensions.editor_meshSpline.onClientEndMission `ge` | 0 | 1679 |  |
| extensions.editor_meshSpline_import.handleDelayedSplineUpdates `ge` | 0 | 35 |  |
| extensions.editor_meshSpline_import.convertTSStatics2MeshSpline `ge` | 1 | 508 |  |
| extensions.editor_meshSpline_import.importFromPolygon `ge` | 1 | 627 |  |
| extensions.editor_meshSpline_populate.populateMeshSpline `ge` | 2 | 227 |  |
| extensions.editor_meshSpline_populate.tryRemove `ge` | 1 | 327 |  |
| extensions.editor_meshSpline_splineMgr.getToolPrefixStr `ge` | 0 | 345 |  |
| extensions.editor_meshSpline_splineMgr.getEditModeKey `ge` | 0 | 348 |  |
| extensions.editor_meshSpline_splineMgr.getMeshSplines `ge` | 0 | 351 |  |
| extensions.editor_meshSpline_splineMgr.getSplineMap `ge` | 0 | 354 |  |
| extensions.editor_meshSpline_splineMgr.setMeshSplines `ge` | 1 | 377 |  |
| extensions.editor_meshSpline_splineMgr.setMeshSpline `ge` | 2 | 357 |  |
| extensions.editor_meshSpline_splineMgr.setPreset `ge` | 2 | 384 |  |
| extensions.editor_meshSpline_splineMgr.getDefaultSliderParams `ge` | 0 | 477 |  |
| extensions.editor_meshSpline_splineMgr.addNewMeshSpline `ge` | 0 | 480 |  |
| extensions.editor_meshSpline_splineMgr.splitMeshSpline `ge` | 2 | 591 |  |
| extensions.editor_meshSpline_splineMgr.joinMeshSplines `ge` | 4 | 742 |  |
| extensions.editor_meshSpline_splineMgr.removeMeshSpline `ge` | 1 | 525 |  |
| extensions.editor_meshSpline_splineMgr.removeLinkedMeshSpline `ge` | 1 | 541 |  |
| extensions.editor_meshSpline_splineMgr.removeAllMeshSplines `ge` | 1 | 551 |  |
| extensions.editor_meshSpline_splineMgr.deepCopyMeshSpline `ge` | 1 | 570 |  |
| extensions.editor_meshSpline_splineMgr.deepCopyMeshSplineState `ge` | 0 | 582 |  |
| extensions.editor_meshSpline_splineMgr.copyMeshSplineProfile `ge` | 1 | 934 |  |
| extensions.editor_meshSpline_splineMgr.pasteMeshSplineProfile `ge` | 2 | 949 |  |
| extensions.editor_meshSpline_splineMgr.singleSplineEditUndo `ge` | 1 | 853 |  |
| extensions.editor_meshSpline_splineMgr.singleSplineEditRedo `ge` | 1 | 861 |  |
| extensions.editor_meshSpline_splineMgr.presetSelectionUndo `ge` | 1 | 869 |  |
| extensions.editor_meshSpline_splineMgr.presetSelectionRedo `ge` | 1 | 883 |  |
| extensions.editor_meshSpline_splineMgr.transSplineEditUndo `ge` | 1 | 897 |  |
| extensions.editor_meshSpline_splineMgr.transSplineEditRedo `ge` | 1 | 907 |  |
| extensions.editor_meshSpline_splineMgr.objectSelectUndo `ge` | 1 | 928 |  |
| extensions.editor_meshSpline_splineMgr.objectSelectRedo `ge` | 1 | 931 |  |
| extensions.editor_meshSpline_splineMgr.updateDirtyMeshSplines `ge` | 0 | 1038 |  |
| extensions.editor_meshSpline_splineMgr.convertPathsToMeshSplines `ge` | 1 | 1074 |  |
| extensions.editor_meshSpline_splineMgr.serializeMeshSpline `ge` | 1 | 1006 |  |
| extensions.editor_meshSpline_splineMgr.deserializeMeshSpline `ge` | 2 | 1017 |  |
| extensions.editor_meshSpline_splineMgr.deepCopyMeshSplineState `ge` | 0 | 582 |  |
| extensions.editor_meshSpline_splineMgr.getCurrentMeshSplineList `ge` | 0 | 1107 |  |
| extensions.editor_meshSpline_splineMgr.isLinked `ge` | 1 | 1121 |  |
| extensions.editor_meshSpline_splineMgr.setLink `ge` | 3 | 1127 |  |
| extensions.editor_meshSpline_splineMgr.updateLinkedMeshSpline `ge` | 6 | 1142 |  |
| extensions.editor_meshSpline_splineMgr.unlinkAll `ge` | 0 | 1165 |  |
| extensions.editor_missionEditor.onSerialize `ge` | 0 | 1698 |  |
| extensions.editor_missionEditor.onDeserialized `ge` | 1 | 1706 |  |
| extensions.editor_missionEditor.onEditorRegisterPreferences `ge` | 1 | 1684 |  |
| extensions.editor_missionEditor.getMissionList `ge` | 0 | 1724 |  |
| extensions.editor_missionEditor.clickMission `ge` | 1 | 1725 |  |
| extensions.editor_missionEditor.show `ge` | 0 | 1663 |  |
| extensions.editor_missionEditor.getStartTriggerWindow `ge` | 0 | 1727 |  |
| extensions.editor_missionEditor.getMissionTypeWindow `ge` | 0 | 1728 |  |
| extensions.editor_missionEditor.setMissionById `ge` | 2 | 1729 |  |
| extensions.editor_missionEditor.getCurrentEditorHelperWhenActive `ge` | 0 | 1747 |  |
| extensions.editor_missionEditor.reloadMissionSystem `ge` | 0 | 1753 |  |
| extensions.editor_missionEditor.onConsoleLog `ge` | 4 | 1777 |  |
| extensions.editor_missionEditor.getSelectedMissionId `ge` | 0 | 1781 |  |
| extensions.editor_missionPlaybook.book `ge` | 0 | 25 | table |
| extensions.editor_missionPlaybook.onSerialize `ge` | 0 | 444 |  |
| extensions.editor_missionPlaybook.onDeserialized `ge` | 1 | 452 |  |
| extensions.editor_missionPlaybook.drawBookViewer `ge` | 0 | 428 |  |
| extensions.editor_missionPlaybook.onEditorRegisterPreferences `ge` | 1 | 413 |  |
| extensions.editor_missionPlaybook.show `ge` | 0 | 401 |  |
| extensions.editor_missionPlaybook_attributeViewer.show `ge` | 0 | 87 |  |
| extensions.editor_missionPlaybook_missionTreeViewer.show `ge` | 0 | 221 |  |
| extensions.editor_missionPlaybook_unlockedMissionsViewer.show `ge` | 0 | 49 |  |
| extensions.editor_missionStartPositionEditor.setSelectedMission `ge` | 1 | 284 |  |
| extensions.editor_multiSpawnManager.onWindowMenuItem `ge` | 0 | 868 |  |
| extensions.editor_multiSpawnManager.loadGroup `ge` | 1 | 192 |  |
| extensions.editor_multiSpawnManager.saveGroup `ge` | 2 | 223 |  |
| extensions.editor_navMeshEditor.allowGizmo `ge` | 0 | 61 |  |
| extensions.editor_navMeshEditor.show `ge` | 0 | 22 |  |
| extensions.editor_newsMessage.onEditorRegisterPreferences `ge` | 1 | 43 |  |
| extensions.editor_objectTool.onEditorRegisterPreferences `ge` | 1 | 1001 |  |
| extensions.editor_particleEditor.onExtensionLoaded `ge` | 0 | 561 |  |
| extensions.editor_particleEditor.onExtensionUnloaded `ge` | 0 | 565 |  |
| extensions.editor_perfProfiler.loadFile `ge` | 1 | 427 |  |
| extensions.editor_perfProfiler.show `ge` | 0 | 550 |  |
| extensions.editor_physicsReloader.openWindow `ge` | 0 | 13 |  |
| extensions.editor_preferences.onExtensionLoaded `ge` | 0 | 299 |  |
| extensions.editor_preferences.onSerialize `ge` | 1 | 420 | table |
| extensions.editor_preferences.onDeserialized `ge` | 1 | 424 |  |
| extensions.editor_preferences.onEditorRegisterPreferences `ge` | 1 | 331 |  |
| extensions.editor_raceEditor.onEditorRegisterPreferences `ge` | 1 | 549 |  |
| extensions.editor_raceEditor.onSerialize `ge` | 0 | 526 |  |
| extensions.editor_raceEditor.onDeserialized `ge` | 1 | 535 |  |
| extensions.editor_raceEditor.allowGizmo `ge` | 0 | 565 |  |
| extensions.editor_raceEditor.getCurrentFilename `ge` | 0 | 566 |  |
| extensions.editor_raceEditor.getCurrentPath `ge` | 0 | 567 |  |
| extensions.editor_raceEditor.isVisible `ge` | 0 | 568 |  |
| extensions.editor_raceEditor.changedFromExternal `ge` | 0 | 569 |  |
| extensions.editor_raceEditor.setupRace `ge` | 0 | 109 |  |
| extensions.editor_raceEditor.show `ge` | 0 | 462 |  |
| extensions.editor_raceEditor.loadRace `ge` | 1 | 84 |  |
| extensions.editor_raceEditor.saveRace `ge` | 2 | 72 |  |
| extensions.editor_raceEditor.onWindowGotFocus `ge` | 1 | 520 |  |
| extensions.editor_raceEditor.getToolsWindow `ge` | 0 | 580 |  |
| extensions.editor_rallyEditor.onEditorRegisterPreferences `ge` | 1 | 742 |  |
| extensions.editor_rallyEditor.onSerialize `ge` | 0 | 716 |  |
| extensions.editor_rallyEditor.onDeserialized `ge` | 1 | 731 |  |
| extensions.editor_rallyEditor.allowGizmo `ge` | 0 | 899 |  |
| extensions.editor_rallyEditor.getCurrentFilename `ge` | 0 | 829 |  |
| extensions.editor_rallyEditor.getCurrentPath `ge` | 0 | 902 |  |
| extensions.editor_rallyEditor.isVisible `ge` | 0 | 903 |  |
| extensions.editor_rallyEditor.show `ge` | 0 | 615 |  |
| extensions.editor_rallyEditor.showRallyTool `ge` | 0 | 603 |  |
| extensions.editor_rallyEditor.showPacenotesTab `ge` | 0 | 598 |  |
| extensions.editor_rallyEditor.loadNotebook `ge` | 1 | 178 |  |
| extensions.editor_rallyEditor.loadOrCreateNotebook `ge` | 1 | 165 |  |
| extensions.editor_rallyEditor.saveNotebook `ge` | 0 | 51 |  |
| extensions.editor_rallyEditor.onWindowGotFocus `ge` | 1 | 710 |  |
| extensions.editor_rallyEditor.detectNotebookToLoad `ge` | 1 | 812 |  |
| extensions.editor_rallyEditor.listNotebooks `ge` | 1 | 794 |  |
| extensions.editor_rallyEditor.selectPrevPacenote `ge` | 0 | 68 |  |
| extensions.editor_rallyEditor.selectNextPacenote `ge` | 0 | 73 |  |
| extensions.editor_rallyEditor.insertMode `ge` | 0 | 78 |  |
| extensions.editor_rallyEditor.setFreeCam `ge` | 0 | 83 |  |
| extensions.editor_rallyEditor.deselect `ge` | 0 | 92 |  |
| extensions.editor_rallyEditor.selectNextWaypoint `ge` | 0 | 97 |  |
| extensions.editor_rallyEditor.moveSelectedWaypointForward `ge` | 1 | 116 |  |
| extensions.editor_rallyEditor.moveSelectedWaypointBackward `ge` | 1 | 126 |  |
| extensions.editor_rallyEditor.cameraPathPlay `ge` | 0 | 136 |  |
| extensions.editor_rallyEditor.toggleCornerCalls `ge` | 0 | 141 |  |
| extensions.editor_rallyEditor.getPrefDefaultRadius `ge` | 0 | 778 |  |
| extensions.editor_rallyEditor.getPrefLockWaypoints `ge` | 0 | 786 |  |
| extensions.editor_rallyEditor.setPrefLockWaypoints `ge` | 1 | 790 |  |
| extensions.editor_rallyEditor.getPrefShowNextPacenote `ge` | 0 | 774 |  |
| extensions.editor_rallyEditor.getPrefShowPreviousPacenote `ge` | 0 | 770 |  |
| extensions.editor_rallyEditor.getPrefUiPacenoteNoteFieldWidth `ge` | 0 | 782 |  |
| extensions.editor_rallyEditor.changeDebugDrawOpacity `ge` | 1 | 837 |  |
| extensions.editor_rallyEditor.mouseWheelZoom `ge` | 1 | 849 |  |
| extensions.editor_rallyEditor.zoomIn `ge` | 1 | 860 |  |
| extensions.editor_rallyEditor.zoomOut `ge` | 1 | 873 |  |
| extensions.editor_rallyEditor.loadForMissionEditor `ge` | 1 | 824 |  |
| extensions.editor_rallyEditor.getVolatilePreferences `ge` | 0 | 942 |  |
| extensions.editor_rallyEditor.getPacenotesWindow `ge` | 0 | 944 |  |
| extensions.editor_rallyEditor.getMissionDir `ge` | 0 | 945 |  |
| extensions.editor_rallyEditor.getMissionId `ge` | 0 | 946 |  |
| extensions.editor_rallyEditor.isToolboxOpen `ge` | 0 | 885 |  |
| extensions.editor_rallyEditor.isPacenotesToolsSectionExpanded `ge` | 0 | 948 |  |
| extensions.editor_rallyEditor_pacenotes_customForm.load `ge` | 0 | 17 |  |
| extensions.editor_rallyEditor_pacenotes_customForm.draw `ge` | 1 | 20 |  |
| extensions.editor_rallyEditor_pacenotes_customForm.clear `ge` | 0 | 119 |  |
| extensions.editor_rallyEditor_pacenotes_measurementsForm.draw `ge` | 2 | 17 |  |
| extensions.editor_rallyEditor_pacenotes_measurementsForm.clear `ge` | 0 | 170 |  |
| extensions.editor_rallyEditor_pacenotes_structuredForm.draw `ge` | 1 | 153 |  |
| extensions.editor_rallyEditor_pacenotes_structuredForm.clear `ge` | 0 | 402 |  |
| extensions.editor_rayCastTest.onExtensionLoaded `ge` | 0 | 47 |  |
| extensions.editor_rayCastTest.onEditorRegisterPreferences `ge` | 1 | 123 |  |
| extensions.editor_resourceChecker.jobData `ge` | 2 | 1804 |  |
| extensions.editor_resourceChecker.updateDuplicateTable `ge` | 1 | 1813 |  |
| extensions.editor_resourceChecker.onWindowMenuItem `ge` | 0 | 17 |  |
| extensions.editor_resourceChecker_resourceUtil.onExtensionLoaded `ge` | 0 | 2909 |  |
| extensions.editor_resourceChecker_resourceUtil.onExtensionUnloaded `ge` | 0 | 149 |  |
| extensions.editor_resourceChecker_resourceUtil.getSimObjects `ge` | 1 | 154 |  |
| extensions.editor_resourceChecker_resourceUtil.resaveMaterial `ge` | 1 | 166 |  |
| extensions.editor_resourceChecker_resourceUtil.powerOfTwo `ge` | 1 | 186 |  |
| extensions.editor_resourceChecker_resourceUtil.removeFromForestJson `ge` | 2 | 195 |  |
| extensions.editor_resourceChecker_resourceUtil.findDuplicates `ge` | 1 | 245 |  |
| extensions.editor_resourceChecker_resourceUtil.getMaterialTexFields `ge` | 1 | 215 |  |
| extensions.editor_resourceChecker_resourceUtil.verifyVersion `ge` | 1 | 335 |  |
| extensions.editor_resourceChecker_resourceUtil.verifyDuplicate `ge` | 2 | 403 |  |
| extensions.editor_resourceChecker_resourceUtil.fixPID `ge` | 2 | 457 |  |
| extensions.editor_resourceChecker_resourceUtil.checkMatTex `ge` | 1 | 597 |  |
| extensions.editor_resourceChecker_resourceUtil.checkTex `ge` | 1 | 724 |  |
| extensions.editor_resourceChecker_resourceUtil.checkmissingMats `ge` | 1 | 812 |  |
| extensions.editor_resourceChecker_resourceUtil.checkStatic `ge` | 0 | 884 |  |
| extensions.editor_resourceChecker_resourceUtil.checkForest `ge` | 0 | 953 |  |
| extensions.editor_resourceChecker_resourceUtil.checkTerrains `ge` | 0 | 1002 |  |
| extensions.editor_resourceChecker_resourceUtil.checkUnusedMats `ge` | 2 | 1286 |  |
| extensions.editor_resourceChecker_resourceUtil.checkUsedMats `ge` | 2 | 1602 |  |
| extensions.editor_resourceChecker_resourceUtil.checkUnusedModels `ge` | 2 | 1946 |  |
| extensions.editor_resourceChecker_resourceUtil.unusedTextures `ge` | 2 | 2188 |  |
| extensions.editor_resourceChecker_resourceUtil.removeUnused `ge` | 3 | 2341 |  |
| extensions.editor_resourceChecker_resourceUtil.checkColData `ge` | 2 | 1748 |  |
| extensions.editor_resourceChecker_resourceUtil.duplicateData `ge` | 1 | 2390 |  |
| extensions.editor_resourceChecker_resourceUtil.removeDummy `ge` | 2 | 2459 |  |
| extensions.editor_resourceChecker_resourceUtil.textureExporter `ge` | 2 | 2504 |  |
| extensions.editor_resourceChecker_resourceUtil.assetStats `ge` | 1 | 2790 |  |
| extensions.editor_resourceChecker_resourceUtil.getProgress `ge` | 0 | 2795 |  |
| extensions.editor_resourceChecker_resourceUtil.stopProgress `ge` | 0 | 2852 |  |
| extensions.editor_riverEditor.onExtensionLoaded `ge` | 0 | 39 |  |
| extensions.editor_roadArchitect.onSerialize `ge` | 0 | 7937 | table |
| extensions.editor_roadArchitect.onDeserialized `ge` | 0 | 8017 |  |
| extensions.editor_roadDecorations.decorateProps `ge` | 7 | 112 |  |
| extensions.editor_roadDecorations.findOffsetPoint `ge` | 4 | 7 |  |
| extensions.editor_roadEditor.onExtensionLoaded `ge` | 0 | 1538 |  |
| extensions.editor_roadEditor.onEditorRegisterPreferences `ge` | 1 | 1670 |  |
| extensions.editor_roadEditor.cycleHoveredRoadsAM `ge` | 1 | 1616 |  |
| extensions.editor_roadRiverGui.editModeToolbar `ge` | 0 | 34 |  |
| extensions.editor_roadSpline.setSelectedSplineIdx `ge` | 1 | 73 |  |
| extensions.editor_roadSpline.setSelectedNodeIdx `ge` | 1 | 76 |  |
| extensions.editor_roadSpline.onSerialize `ge` | 0 | 101 |  |
| extensions.editor_roadSpline.onDeserialized `ge` | 1 | 113 |  |
| extensions.editor_roadSpline.onClientEndMission `ge` | 0 | 1437 |  |
| extensions.editor_roadSpline_groupMgr.getGroups `ge` | 0 | 38 |  |
| extensions.editor_roadSpline_groupMgr.getIdToIdxMap `ge` | 0 | 41 |  |
| extensions.editor_roadSpline_groupMgr.getToolPrefixStr `ge` | 0 | 44 |  |
| extensions.editor_roadSpline_groupMgr.getEditModeKey `ge` | 0 | 47 |  |
| extensions.editor_roadSpline_groupMgr.addGroupToGroupArray `ge` | 1 | 50 |  |
| extensions.editor_roadSpline_groupMgr.removeGroup `ge` | 1 | 69 |  |
| extensions.editor_roadSpline_groupMgr.removeLinkedRoadSpline `ge` | 1 | 89 |  |
| extensions.editor_roadSpline_groupMgr.removeAllGroups `ge` | 1 | 97 |  |
| extensions.editor_roadSpline_groupMgr.updateDirtyGroups `ge` | 0 | 142 |  |
| extensions.editor_roadSpline_groupMgr.setFixedWidth `ge` | 2 | 191 |  |
| extensions.editor_roadSpline_groupMgr.recreateAutoGeneratedLayers `ge` | 1 | 117 |  |
| extensions.editor_roadSpline_groupMgr.addNewGroup `ge` | 1 | 199 |  |
| extensions.editor_roadSpline_groupMgr.copyGroupProfile `ge` | 1 | 279 |  |
| extensions.editor_roadSpline_groupMgr.pasteGroupProfile `ge` | 2 | 312 |  |
| extensions.editor_roadSpline_groupMgr.deepCopyGroup `ge` | 1 | 343 |  |
| extensions.editor_roadSpline_groupMgr.deepCopyAllGroups `ge` | 0 | 355 |  |
| extensions.editor_roadSpline_groupMgr.splitGroup `ge` | 3 | 364 |  |
| extensions.editor_roadSpline_groupMgr.joinRoadSplines `ge` | 4 | 404 |  |
| extensions.editor_roadSpline_groupMgr.convertPathsToRoadGroups `ge` | 1 | 431 |  |
| extensions.editor_roadSpline_groupMgr.serializeGroup `ge` | 1 | 464 |  |
| extensions.editor_roadSpline_groupMgr.deserializeGroup `ge` | 2 | 477 |  |
| extensions.editor_roadSpline_groupMgr.singleGroupEditUndo `ge` | 1 | 554 |  |
| extensions.editor_roadSpline_groupMgr.singleGroupEditRedo `ge` | 1 | 555 |  |
| extensions.editor_roadSpline_groupMgr.transGroupEditUndo `ge` | 1 | 573 |  |
| extensions.editor_roadSpline_groupMgr.transGroupEditRedo `ge` | 1 | 574 |  |
| extensions.editor_roadSpline_groupMgr.getCurrentRoadSplineList `ge` | 0 | 577 |  |
| extensions.editor_roadSpline_groupMgr.isLinked `ge` | 1 | 590 |  |
| extensions.editor_roadSpline_groupMgr.setLink `ge` | 3 | 596 |  |
| extensions.editor_roadSpline_groupMgr.updateLinkedRoadSpline `ge` | 6 | 610 |  |
| extensions.editor_roadSpline_groupMgr.unlinkAll `ge` | 0 | 620 |  |
| extensions.editor_roadSpline_import.importSelectedIntoNewGroup `ge` | 1 | 351 |  |
| extensions.editor_roadSpline_import.importFromPolygon `ge` | 1 | 425 |  |
| extensions.editor_roadSpline_layerMgr.getSliderDefaults `ge` | 0 | 110 |  |
| extensions.editor_roadSpline_layerMgr.deepCopyLayer `ge` | 1 | 113 |  |
| extensions.editor_roadSpline_layerMgr.deepCopyAllLayers `ge` | 1 | 122 |  |
| extensions.editor_roadSpline_layerMgr.updateAllLayers `ge` | 2 | 367 |  |
| extensions.editor_roadSpline_layerMgr.updateOnlyDirtyLayers `ge` | 2 | 380 |  |
| extensions.editor_roadSpline_layerMgr.removeDecalRoadInLayer `ge` | 1 | 151 |  |
| extensions.editor_roadSpline_layerMgr.removeLayer `ge` | 2 | 396 |  |
| extensions.editor_roadSpline_layerMgr.removeAllLayers `ge` | 1 | 404 |  |
| extensions.editor_roadSpline_layerMgr.removeAllHiddenLayers `ge` | 1 | 411 |  |
| extensions.editor_roadSpline_layerMgr.addNewLayer `ge` | 1 | 421 |  |
| extensions.editor_roadSpline_layerMgr.duplicateLayer `ge` | 2 | 450 |  |
| extensions.editor_roadSpline_layerMgr.switchOffAllAutoLayers `ge` | 1 | 459 |  |
| extensions.editor_roadSpline_layerMgr.addLightTreadMarksLayers `ge` | 1 | 550 |  |
| extensions.editor_roadSpline_layerMgr.removeLightTreadMarksLayers `ge` | 1 | 551 |  |
| extensions.editor_roadSpline_layerMgr.addHeavyTreadMarksLayers `ge` | 1 | 552 |  |
| extensions.editor_roadSpline_layerMgr.removeHeavyTreadMarksLayers `ge` | 1 | 553 |  |
| extensions.editor_roadSpline_layerMgr.addRoadCrackLayers `ge` | 1 | 554 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadCrackLayers `ge` | 1 | 555 |  |
| extensions.editor_roadSpline_layerMgr.addRepair1Layers `ge` | 1 | 556 |  |
| extensions.editor_roadSpline_layerMgr.removeRepair1Layers `ge` | 1 | 557 |  |
| extensions.editor_roadSpline_layerMgr.addRepair2Layers `ge` | 1 | 558 |  |
| extensions.editor_roadSpline_layerMgr.removeRepair2Layers `ge` | 1 | 559 |  |
| extensions.editor_roadSpline_layerMgr.addPatchesLayers `ge` | 1 | 560 |  |
| extensions.editor_roadSpline_layerMgr.removePatchesLayers `ge` | 1 | 561 |  |
| extensions.editor_roadSpline_layerMgr.addRoadDamageAsphalt1Layers `ge` | 1 | 562 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadDamageAsphalt1Layers `ge` | 1 | 563 |  |
| extensions.editor_roadSpline_layerMgr.addRoadDamageAsphalt2Layers `ge` | 1 | 564 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadDamageAsphalt2Layers `ge` | 1 | 565 |  |
| extensions.editor_roadSpline_layerMgr.addRoadCenterLineLayers `ge` | 1 | 568 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadCenterLineLayers `ge` | 1 | 595 |  |
| extensions.editor_roadSpline_layerMgr.addRoadEdgeLinesLayers `ge` | 1 | 598 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadEdgeLinesLayers `ge` | 1 | 649 |  |
| extensions.editor_roadSpline_layerMgr.addRoadLaneLinesLayers `ge` | 1 | 652 |  |
| extensions.editor_roadSpline_layerMgr.removeRoadLaneLinesLayers `ge` | 1 | 709 |  |
| extensions.editor_roadSpline_layerMgr.addEdgeBlend1Layers `ge` | 1 | 712 |  |
| extensions.editor_roadSpline_layerMgr.removeEdgeBlend1Layers `ge` | 1 | 763 |  |
| extensions.editor_roadSpline_layerMgr.addEdgeBlend2Layers `ge` | 1 | 766 |  |
| extensions.editor_roadSpline_layerMgr.removeEdgeBlend2Layers `ge` | 1 | 817 |  |
| extensions.editor_roadSpline_layerMgr.addEdgeBlend3Layers `ge` | 1 | 820 |  |
| extensions.editor_roadSpline_layerMgr.removeEdgeBlend3Layers `ge` | 1 | 871 |  |
| extensions.editor_roadSpline_layerMgr.serializeLayer `ge` | 1 | 874 | table |
| extensions.editor_roadSpline_layerMgr.deserializeLayer `ge` | 1 | 894 | table |
| extensions.editor_roadTemplateEditor.onEditorRegisterPreferences `ge` | 1 | 412 |  |
| extensions.editor_roadUtils.updateChildRoads `ge` | 1 | 172 |  |
| extensions.editor_roadUtils.reloadTemplates `ge` | 0 | 234 |  |
| extensions.editor_roadUtils.getMaterials `ge` | 0 | 283 |  |
| extensions.editor_roadUtils.getMaterialNames `ge` | 0 | 287 |  |
| extensions.editor_roadUtils.getRoadTemplateFiles `ge` | 0 | 291 |  |
| extensions.editor_roadUtils.reloadDecorations `ge` | 1 | 43 |  |
| extensions.editor_roadUtils.reloadDecals `ge` | 2 | 97 |  |
| extensions.editor_sceneTree.onExtensionLoaded `ge` | 0 | 2285 |  |
| extensions.editor_sceneTree.moveSelectionIndex `ge` | 1 | 913 |  |
| extensions.editor_sceneTree.refreshNodeNames `ge` | 1 | 2439 |  |
| extensions.editor_sceneTree.refreshAllNodes `ge` | 1 | 934 |  |
| extensions.editor_sceneTree.recacheAllNodes `ge` | 1 | 617 |  |
| extensions.editor_sceneTree.closeAllInstances `ge` | 0 | 2478 |  |
| extensions.editor_sceneTree.openSceneTree `ge` | 0 | 2060 |  |
| extensions.editor_sceneTree.debugNode `ge` | 2 | 2486 |  |
| extensions.editor_sceneView.onSerialize `ge` | 0 | 417 | table |
| extensions.editor_sceneView.onDeserialized `ge` | 1 | 438 |  |
| extensions.editor_scriptAIEditor.onVehicleSubmitRecording `ge` | 2 | 3146 |  |
| extensions.editor_scriptAIEditor.onSerialize `ge` | 0 | 3179 | table |
| extensions.editor_scriptAIEditor.onDeserialized `ge` | 1 | 3196 |  |
| extensions.editor_scriptAIManager.getCurrentRecordings `ge` | 0 | 576 |  |
| extensions.editor_scriptAIManager.onWindowMenuItem `ge` | 0 | 552 |  |
| extensions.editor_scriptAIManager.onVehicleSubmitRecording `ge` | 2 | 509 |  |
| extensions.editor_scriptAIManager.onVehicleSubmitInfo `ge` | 2 | 515 |  |
| extensions.editor_scriptAIManager.onSerialize `ge` | 0 | 557 | table |
| extensions.editor_scriptAIManager.onDeserialized `ge` | 1 | 561 |  |
| extensions.editor_sensorConfigurationEditor.doesContainSensorType `ge` | 2 | 181 | boolean |
| extensions.editor_sensorConfigurationEditor.numberOfSensorType `ge` | 2 | 195 | multiple |
| extensions.editor_sensorConfigurationEditor.updateCollectedVehiclePOIData `ge` | 1 | 98 |  |
| extensions.editor_sensorConfigurationEditor.onSerialize `ge` | 0 | 2545 | table |
| extensions.editor_sensorConfigurationEditor.onDeserialized `ge` | 1 | 2559 |  |
| extensions.editor_shapeEditor.onSerialize `ge` | 0 | 696 |  |
| extensions.editor_shapeEditor.onDeserialized `ge` | 1 | 703 |  |
| extensions.editor_shapeEditor.onEditorRegisterPreferences `ge` | 1 | 728 |  |
| extensions.editor_shapeEditor.showShapeEditorLoadFile `ge` | 1 | 684 |  |
| extensions.editor_shortcutLegend.onExtensionLoaded `ge` | 0 | 133 |  |
| extensions.editor_sidewalkSpline.setSelectedSplineIdx `ge` | 1 | 82 |  |
| extensions.editor_sidewalkSpline.setSelectedNodeIdx `ge` | 1 | 85 |  |
| extensions.editor_sidewalkSpline.onSerialize `ge` | 0 | 88 |  |
| extensions.editor_sidewalkSpline.onDeserialized `ge` | 1 | 100 |  |
| extensions.editor_sidewalkSpline.onClientEndMission `ge` | 0 | 1177 |  |
| extensions.editor_sidewalkSpline_kit.getSidewalkKit `ge` | 1 | 60 |  |
| extensions.editor_sidewalkSpline_kit.buildSidewalkKit `ge` | 2 | 79 | table |
| extensions.editor_sidewalkSpline_kit.buildDistributionGroups `ge` | 1 | 157 |  |
| extensions.editor_sidewalkSpline_kit.getRectAndPizzaMeshPaths `ge` | 1 | 244 | multiple |
| extensions.editor_sidewalkSpline_kit.getPieceEnabled `ge` | 2 | 230 |  |
| extensions.editor_sidewalkSpline_kit.setPieceEnabled `ge` | 3 | 238 |  |
| extensions.editor_sidewalkSpline_populate.populateSidewalkSpline `ge` | 2 | 210 |  |
| extensions.editor_sidewalkSpline_populate.tryRemove `ge` | 1 | 477 |  |
| extensions.editor_sidewalkSpline_splineMgr.getToolPrefixStr `ge` | 0 | 40 |  |
| extensions.editor_sidewalkSpline_splineMgr.getEditModeKey `ge` | 0 | 43 |  |
| extensions.editor_sidewalkSpline_splineMgr.getSidewalkSplines `ge` | 0 | 46 |  |
| extensions.editor_sidewalkSpline_splineMgr.getSplineMap `ge` | 0 | 49 |  |
| extensions.editor_sidewalkSpline_splineMgr.setSidewalkSpline `ge` | 2 | 52 |  |
| extensions.editor_sidewalkSpline_splineMgr.setSidewalkSplines `ge` | 1 | 71 |  |
| extensions.editor_sidewalkSpline_splineMgr.getDefaultSliderParams `ge` | 0 | 78 |  |
| extensions.editor_sidewalkSpline_splineMgr.addNewSidewalkSpline `ge` | 0 | 81 |  |
| extensions.editor_sidewalkSpline_splineMgr.removeSidewalkSpline `ge` | 1 | 140 |  |
| extensions.editor_sidewalkSpline_splineMgr.removeAllSidewalkSplines `ge` | 1 | 162 |  |
| extensions.editor_sidewalkSpline_splineMgr.deepCopySidewalkSpline `ge` | 1 | 181 |  |
| extensions.editor_sidewalkSpline_splineMgr.deepCopySidewalkSplineState `ge` | 0 | 193 |  |
| extensions.editor_sidewalkSpline_splineMgr.splitSidewalkSpline `ge` | 2 | 202 |  |
| extensions.editor_sidewalkSpline_splineMgr.joinSidewalkSplines `ge` | 4 | 269 |  |
| extensions.editor_sidewalkSpline_splineMgr.singleSplineEditUndo `ge` | 1 | 348 |  |
| extensions.editor_sidewalkSpline_splineMgr.singleSplineEditRedo `ge` | 1 | 356 |  |
| extensions.editor_sidewalkSpline_splineMgr.transSplineEditUndo `ge` | 1 | 364 |  |
| extensions.editor_sidewalkSpline_splineMgr.transSplineEditRedo `ge` | 1 | 376 |  |
| extensions.editor_sidewalkSpline_splineMgr.objectSelectUndo `ge` | 1 | 399 |  |
| extensions.editor_sidewalkSpline_splineMgr.objectSelectRedo `ge` | 1 | 402 |  |
| extensions.editor_sidewalkSpline_splineMgr.copySidewalkSplineProfile `ge` | 1 | 405 |  |
| extensions.editor_sidewalkSpline_splineMgr.pasteSidewalkSplineProfile `ge` | 1 | 419 |  |
| extensions.editor_sidewalkSpline_splineMgr.hasCopiedProfile `ge` | 0 | 448 |  |
| extensions.editor_sidewalkSpline_splineMgr.copyProfileTemplate `ge` | 1 | 453 | table |
| extensions.editor_sidewalkSpline_splineMgr.pasteProfileTemplate `ge` | 2 | 467 |  |
| extensions.editor_sidewalkSpline_splineMgr.serializeSidewalkSpline `ge` | 1 | 493 |  |
| extensions.editor_sidewalkSpline_splineMgr.deserializeSidewalkSpline `ge` | 2 | 505 |  |
| extensions.editor_sidewalkSpline_splineMgr.updateDirtySidewalkSplines `ge` | 0 | 555 |  |
| extensions.editor_sitesEditor.onSerialize `ge` | 0 | 341 |  |
| extensions.editor_sitesEditor.onDeserialized `ge` | 1 | 348 |  |
| extensions.editor_sitesEditor.allowGizmo `ge` | 0 | 371 |  |
| extensions.editor_sitesEditor.getCurrentSites `ge` | 0 | 372 |  |
| extensions.editor_sitesEditor.getCurrentLocation `ge` | 0 | 373 |  |
| extensions.editor_sitesEditor.getCurrentZone `ge` | 0 | 374 |  |
| extensions.editor_sitesEditor.getCurrentParkingSpot `ge` | 0 | 375 |  |
| extensions.editor_sitesEditor.selectZone `ge` | 2 | 376 |  |
| extensions.editor_sitesEditor.show `ge` | 0 | 267 |  |
| extensions.editor_sitesEditor.loadSites `ge` | 1 | 34 |  |
| extensions.editor_sitesEditor.saveSites `ge` | 2 | 25 |  |
| extensions.editor_sitesEditor.managerSites `ge` | 0 | 217 |  |
| extensions.editor_slotTrafficEditor.onEditorRegisterPreferences `ge` | 1 | 1567 |  |
| extensions.editor_slotTrafficEditor.selectAllNodes `ge` | 0 | 1432 |  |
| extensions.editor_suspensionAudioDebug.onExtensionLoaded `ge` | 0 | 127 |  |
| extensions.editor_suspensionAudioDebug.onExtensionUnloaded `ge` | 0 | 131 |  |
| extensions.editor_suspensionAudioDebug.open `ge` | 0 | 122 |  |
| extensions.editor_tech_roadArchitect_clothoid.evaluate `ge` | 5 | 296 | vec3 |
| extensions.editor_tech_roadArchitect_decals.createDecal `ge` | 2 | 91 |  |
| extensions.editor_tech_roadArchitect_decals.tryRemove `ge` | 1 | 447 |  |
| extensions.editor_tech_roadArchitect_decals.removeTemplates `ge` | 0 | 477 |  |
| extensions.editor_tech_roadArchitect_decals.tryRemoveAll `ge` | 0 | 488 |  |
| extensions.editor_tech_roadArchitect_export.export `ge` | 0 | 323 |  |
| extensions.editor_tech_roadArchitect_geometry.computeRoadRenderData `ge` | 1 | 533 |  |
| extensions.editor_tech_roadArchitect_groups.addGroupToRoadsAudition `ge` | 1 | 117 |  |
| extensions.editor_tech_roadArchitect_groups.addGroupToRoadsPlace `ge` | 2 | 158 |  |
| extensions.editor_tech_roadArchitect_groups.goToGroupView `ge` | 3 | 105 |  |
| extensions.editor_tech_roadArchitect_groups.manageRotateCam `ge` | 0 | 198 |  |
| extensions.editor_tech_roadArchitect_groups.createGroup `ge` | 2 | 207 |  |
| extensions.editor_tech_roadArchitect_groups.copyPlacedGroup `ge` | 1 | 240 | table |
| extensions.editor_tech_roadArchitect_groups.createPrefabGroup `ge` | 1 | 247 |  |
| extensions.editor_tech_roadArchitect_groups.goToOldView `ge` | 0 | 297 |  |
| extensions.editor_tech_roadArchitect_groups.getDefaultGroups `ge` | 0 | 351 |  |
| extensions.editor_tech_roadArchitect_groups.getPlacedGroups `ge` | 0 | 380 |  |
| extensions.editor_tech_roadArchitect_groups.setPlacedGroups `ge` | 1 | 383 |  |
| extensions.editor_tech_roadArchitect_groups.removePlacedGroupSoft `ge` | 1 | 386 |  |
| extensions.editor_tech_roadArchitect_groups.removePlacedGroupHard `ge` | 1 | 389 |  |
| extensions.editor_tech_roadArchitect_groups.goToPlacedGroup `ge` | 1 | 405 |  |
| extensions.editor_tech_roadArchitect_groups.updateGroupsAfterRoadRemove `ge` | 0 | 364 |  |
| extensions.editor_tech_roadArchitect_groups.save `ge` | 1 | 325 |  |
| extensions.editor_tech_roadArchitect_groups.load `ge` | 0 | 338 |  |
| extensions.editor_tech_roadArchitect_groups.serialiseGroup `ge` | 1 | 305 |  |
| extensions.editor_tech_roadArchitect_groups.deserialiseGroup `ge` | 1 | 315 |  |
| extensions.editor_tech_roadArchitect_import.import `ge` | 6 | 548 |  |
| extensions.editor_tech_roadArchitect_junctions.addPedXJunction `ge` | 1 | 8280 |  |
| extensions.editor_tech_roadArchitect_junctions.addCrossroads `ge` | 1 | 8381 |  |
| extensions.editor_tech_roadArchitect_junctions.addTJunction `ge` | 1 | 8482 |  |
| extensions.editor_tech_roadArchitect_junctions.addYJunction `ge` | 1 | 8583 |  |
| extensions.editor_tech_roadArchitect_junctions.addRoundaboutJunction `ge` | 1 | 8684 |  |
| extensions.editor_tech_roadArchitect_junctions.addRuralUrbanTransJunction `ge` | 1 | 8785 |  |
| extensions.editor_tech_roadArchitect_junctions.addUrbanMergeJunction `ge` | 1 | 8869 |  |
| extensions.editor_tech_roadArchitect_junctions.addUrbanSeparatorJunction `ge` | 1 | 8970 |  |
| extensions.editor_tech_roadArchitect_junctions.addHighwayMergeJunction `ge` | 1 | 9056 |  |
| extensions.editor_tech_roadArchitect_junctions.addHighwayUrbanTransJunction `ge` | 1 | 9155 |  |
| extensions.editor_tech_roadArchitect_junctions.addHighwaySeparatorJunction `ge` | 1 | 9246 |  |
| extensions.editor_tech_roadArchitect_junctions.addShoulderFadeJunction `ge` | 1 | 9330 |  |
| extensions.editor_tech_roadArchitect_junctions.addHighwaySlipJunction `ge` | 1 | 9429 |  |
| extensions.editor_tech_roadArchitect_junctions.updateJunctionAfterChange `ge` | 1 | 8244 |  |
| extensions.editor_tech_roadArchitect_junctions.removeJunction `ge` | 1 | 9528 |  |
| extensions.editor_tech_roadArchitect_junctions.clearAllJunctions `ge` | 0 | 9537 |  |
| extensions.editor_tech_roadArchitect_junctions.getJunctionCentroid `ge` | 1 | 65 |  |
| extensions.editor_tech_roadArchitect_junctions.computeInitRot `ge` | 1 | 97 |  |
| extensions.editor_tech_roadArchitect_junctions.translateJunction `ge` | 2 | 9544 |  |
| extensions.editor_tech_roadArchitect_junctions.rotateJunction `ge` | 3 | 9557 |  |
| extensions.editor_tech_roadArchitect_junctions.rotateJunctionQuat `ge` | 3 | 9575 |  |
| extensions.editor_tech_roadArchitect_junctions.goToJunction `ge` | 1 | 9588 |  |
| extensions.editor_tech_roadArchitect_junctions.setAllMeshProperty `ge` | 1 | 9629 |  |
| extensions.editor_tech_roadArchitect_junctions.updateJunctionsAfterRoadRemove `ge` | 0 | 9637 |  |
| extensions.editor_tech_roadArchitect_junctions.updateJunctionCondition `ge` | 1 | 152 |  |
| extensions.editor_tech_roadArchitect_junctions.finaliseJunction `ge` | 1 | 9651 |  |
| extensions.editor_tech_roadArchitect_junctions.copyJunction `ge` | 1 | 9672 | table |
| extensions.editor_tech_roadArchitect_junctions.serialiseJct `ge` | 1 | 9730 | table |
| extensions.editor_tech_roadArchitect_junctions.deserialiseJct `ge` | 1 | 9788 | table |
| extensions.editor_tech_roadArchitect_junctions.saveJunction `ge` | 1 | 9846 |  |
| extensions.editor_tech_roadArchitect_junctions.loadJunction `ge` | 0 | 9861 |  |
| extensions.editor_tech_roadArchitect_junctions.chopRoadsToSphere `ge` | 3 | 10076 |  |
| extensions.editor_tech_roadArchitect_junctions.createAutoJctOverlays `ge` | 3 | 10146 |  |
| extensions.editor_tech_roadArchitect_junctions.importRoadsFromLSystem `ge` | 5 | 10329 |  |
| extensions.editor_tech_roadArchitect_link.computePossibleLinks `ge` | 4 | 371 |  |
| extensions.editor_tech_roadArchitect_link.joinRoads `ge` | 1 | 1020 |  |
| extensions.editor_tech_roadArchitect_link.computePossibleJct `ge` | 4 | 1071 |  |
| extensions.editor_tech_roadArchitect_link.createSplitJunction `ge` | 1 | 1180 |  |
| extensions.editor_tech_roadArchitect_overlays.addCrossroadsOverlays `ge` | 1 | 17 |  |
| extensions.editor_tech_roadArchitect_overlays.addTJunctionOverlays `ge` | 1 | 121 |  |
| extensions.editor_tech_roadArchitect_overlays.addYJunctionOverlays `ge` | 1 | 205 |  |
| extensions.editor_tech_roadArchitect_overlays.addRoundaboutOverlays `ge` | 2 | 265 |  |
| extensions.editor_tech_roadArchitect_overlays.addHighwayMergeOverlays `ge` | 1 | 367 |  |
| extensions.editor_tech_roadArchitect_overlays.addHighwayTransOverlays `ge` | 1 | 412 |  |
| extensions.editor_tech_roadArchitect_overlays.addHighwaySlipOverlays `ge` | 1 | 457 |  |
| extensions.editor_tech_roadArchitect_profiles.getMinMaxLaneKeys `ge` | 1 | 88 | multiple |
| extensions.editor_tech_roadArchitect_profiles.updateLaneFlags `ge` | 1 | 845 |  |
| extensions.editor_tech_roadArchitect_profiles.getLaneFlags `ge` | 0 | 1210 | table |
| extensions.editor_tech_roadArchitect_profiles.removeLayer `ge` | 2 | 131 |  |
| extensions.editor_tech_roadArchitect_profiles.layerChangePriority `ge` | 3 | 945 |  |
| extensions.editor_tech_roadArchitect_profiles.addLayer `ge` | 3 | 989 |  |
| extensions.editor_tech_roadArchitect_profiles.getIdFromName `ge` | 1 | 834 |  |
| extensions.editor_tech_roadArchitect_profiles.getProfileFromName `ge` | 1 | 842 |  |
| extensions.editor_tech_roadArchitect_profiles.cycleLaneType `ge` | 1 | 1032 | string |
| extensions.editor_tech_roadArchitect_profiles.cycleLaneTypeBack `ge` | 1 | 1041 | string |
| extensions.editor_tech_roadArchitect_profiles.computeLaneKeys `ge` | 1 | 1050 | multiple |
| extensions.editor_tech_roadArchitect_profiles.getOrderedLanes `ge` | 1 | 1069 | multiple |
| extensions.editor_tech_roadArchitect_profiles.getNumLanesLR `ge` | 1 | 1081 | multiple |
| extensions.editor_tech_roadArchitect_profiles.getNumRoadLanesLR `ge` | 1 | 1097 | multiple |
| extensions.editor_tech_roadArchitect_profiles.isProfileValidForMidJctPerfect `ge` | 1 | 1113 | boolean |
| extensions.editor_tech_roadArchitect_profiles.areSidewalksPresent `ge` | 1 | 1153 | boolean |
| extensions.editor_tech_roadArchitect_profiles.getWAndHByKey `ge` | 1 | 1164 | multiple |
| extensions.editor_tech_roadArchitect_profiles.getWidth `ge` | 1 | 1176 |  |
| extensions.editor_tech_roadArchitect_profiles.removeAllTempCurrentProfiles `ge` | 0 | 3387 |  |
| extensions.editor_tech_roadArchitect_profiles.autoPaintLines `ge` | 1 | 374 |  |
| extensions.editor_tech_roadArchitect_profiles.autoEdgeBlending `ge` | 4 | 383 |  |
| extensions.editor_tech_roadArchitect_profiles.addCenterline `ge` | 2 | 134 |  |
| extensions.editor_tech_roadArchitect_profiles.addEdgeLines `ge` | 6 | 172 |  |
| extensions.editor_tech_roadArchitect_profiles.addEndLine `ge` | 3 | 297 |  |
| extensions.editor_tech_roadArchitect_profiles.addLaneDivisionLines `ge` | 2 | 252 |  |
| extensions.editor_tech_roadArchitect_profiles.addLightTreadToLanes `ge` | 5 | 455 |  |
| extensions.editor_tech_roadArchitect_profiles.createTemplateOnRequest `ge` | 1 | 3396 |  |
| extensions.editor_tech_roadArchitect_profiles.computeSectionsByType `ge` | 3 | 100 |  |
| extensions.editor_tech_roadArchitect_profiles.createCustomImportProfile `ge` | 1 | 1217 | multiple |
| extensions.editor_tech_roadArchitect_profiles.createProfileFromTemplate `ge` | 2 | 1297 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileFromDecalData `ge` | 2 | 1369 |  |
| extensions.editor_tech_roadArchitect_profiles.createOverlayProfile `ge` | 1 | 1444 |  |
| extensions.editor_tech_roadArchitect_profiles.createBridgeProfile `ge` | 2 | 1510 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoad `ge` | 7 | 1581 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadYSpecial `ge` | 8 | 1669 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoad1Way `ge` | 6 | 1752 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoad_SW `ge` | 7 | 1833 |  |
| extensions.editor_tech_roadArchitect_profiles.createSidewalkOnlyProfile `ge` | 3 | 1922 |  |
| extensions.editor_tech_roadArchitect_profiles.createRoundaboutProfile `ge` | 3 | 1992 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyCap `ge` | 5 | 2060 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyCapUrban `ge` | 7 | 2161 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyUrbanTrans `ge` | 6 | 2273 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyCap1W `ge` | 4 | 2390 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyS2 `ge` | 5 | 2467 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyS3 `ge` | 5 | 2568 |  |
| extensions.editor_tech_roadArchitect_profiles.createProfileForJctRoadHwyExit `ge` | 3 | 2693 |  |
| extensions.editor_tech_roadArchitect_profiles.updateToNewTemplate `ge` | 2 | 859 |  |
| extensions.editor_tech_roadArchitect_profiles.copyProfile `ge` | 1 | 2768 |  |
| extensions.editor_tech_roadArchitect_profiles.goToProfileView `ge` | 2 | 2840 |  |
| extensions.editor_tech_roadArchitect_profiles.goToOldView `ge` | 0 | 2852 |  |
| extensions.editor_tech_roadArchitect_profiles.removeLane `ge` | 3 | 2878 |  |
| extensions.editor_tech_roadArchitect_profiles.addLane `ge` | 4 | 2903 |  |
| extensions.editor_tech_roadArchitect_profiles.applyMasterWidth `ge` | 2 | 2938 |  |
| extensions.editor_tech_roadArchitect_profiles.populateProfileTemplates `ge` | 0 | 3413 |  |
| extensions.editor_tech_roadArchitect_profiles.resetTemplates `ge` | 0 | 3424 |  |
| extensions.editor_tech_roadArchitect_profiles.updateCondition `ge` | 1 | 2948 |  |
| extensions.editor_tech_roadArchitect_profiles.serialiseProfile `ge` | 1 | 3142 |  |
| extensions.editor_tech_roadArchitect_profiles.deserialiseProfile `ge` | 1 | 3247 |  |
| extensions.editor_tech_roadArchitect_profiles.save `ge` | 1 | 3358 |  |
| extensions.editor_tech_roadArchitect_profiles.load `ge` | 0 | 3373 |  |
| extensions.editor_tech_roadArchitect_roadMesh.createRoad `ge` | 3 | 669 |  |
| extensions.editor_tech_roadArchitect_roadMesh.tryRemove `ge` | 1 | 686 |  |
| extensions.editor_tech_roadArchitect_roadMesh.updateBridge `ge` | 2 | 697 |  |
| extensions.editor_tech_roadArchitect_roadMesh.tryRemoveBridge `ge` | 1 | 879 |  |
| extensions.editor_tech_roadArchitect_roadMesh.clearBridges `ge` | 0 | 888 |  |
| extensions.editor_tech_roadArchitect_roads.getCurrentMap `ge` | 0 | 55 |  |
| extensions.editor_tech_roadArchitect_roads.setCurrentMap `ge` | 1 | 58 |  |
| extensions.editor_tech_roadArchitect_roads.getTree `ge` | 0 | 182 |  |
| extensions.editor_tech_roadArchitect_roads.removeTree `ge` | 0 | 185 |  |
| extensions.editor_tech_roadArchitect_roads.createRoadFromProfile `ge` | 1 | 61 | table |
| extensions.editor_tech_roadArchitect_roads.createRoadFromTemplate `ge` | 1 | 129 |  |
| extensions.editor_tech_roadArchitect_roads.setDirty `ge` | 1 | 149 |  |
| extensions.editor_tech_roadArchitect_roads.setAllDirty `ge` | 0 | 175 |  |
| extensions.editor_tech_roadArchitect_roads.setAuditionProfileDirty `ge` | 0 | 188 |  |
| extensions.editor_tech_roadArchitect_roads.addNodeToRoad `ge` | 2 | 191 |  |
| extensions.editor_tech_roadArchitect_roads.addNodeToRoadAtIdx `ge` | 3 | 210 |  |
| extensions.editor_tech_roadArchitect_roads.isMouseAtIntermediatePos `ge` | 2 | 230 | multiple |
| extensions.editor_tech_roadArchitect_roads.setLocalWidth `ge` | 3 | 260 |  |
| extensions.editor_tech_roadArchitect_roads.copyNode `ge` | 1 | 285 | table |
| extensions.editor_tech_roadArchitect_roads.updateWAndHToNewProfile `ge` | 1 | 304 |  |
| extensions.editor_tech_roadArchitect_roads.computeRoadAABB_2D `ge` | 1 | 137 | multiple |
| extensions.editor_tech_roadArchitect_roads.computeAABB2D `ge` | 1 | 314 |  |
| extensions.editor_tech_roadArchitect_roads.getRoadsFromGroup `ge` | 1 | 329 |  |
| extensions.editor_tech_roadArchitect_roads.offsetRoads2Terrain `ge` | 0 | 1240 |  |
| extensions.editor_tech_roadArchitect_roads.offsetByValue `ge` | 1 | 1248 |  |
| extensions.editor_tech_roadArchitect_roads.recomputeMap `ge` | 0 | 345 |  |
| extensions.editor_tech_roadArchitect_roads.removeRoad `ge` | 1 | 354 |  |
| extensions.editor_tech_roadArchitect_roads.removeNode `ge` | 2 | 376 |  |
| extensions.editor_tech_roadArchitect_roads.addIntermediateNode `ge` | 3 | 395 |  |
| extensions.editor_tech_roadArchitect_roads.clearAllRoads `ge` | 0 | 443 |  |
| extensions.editor_tech_roadArchitect_roads.removeHiddenRoads `ge` | 0 | 453 |  |
| extensions.editor_tech_roadArchitect_roads.goToRoad `ge` | 1 | 469 |  |
| extensions.editor_tech_roadArchitect_roads.moveRoad `ge` | 4 | 506 |  |
| extensions.editor_tech_roadArchitect_roads.adjustHeight `ge` | 4 | 546 |  |
| extensions.editor_tech_roadArchitect_roads.adjustLateralRotation `ge` | 4 | 593 |  |
| extensions.editor_tech_roadArchitect_roads.copyRoad `ge` | 1 | 654 |  |
| extensions.editor_tech_roadArchitect_roads.splitRoad `ge` | 2 | 728 |  |
| extensions.editor_tech_roadArchitect_roads.flipRoad `ge` | 1 | 864 |  |
| extensions.editor_tech_roadArchitect_roads.updateRoads `ge` | 0 | 880 |  |
| extensions.editor_tech_roadArchitect_roads.clearBridges `ge` | 0 | 901 |  |
| extensions.editor_tech_roadArchitect_roads.removeAll `ge` | 0 | 904 |  |
| extensions.editor_tech_roadArchitect_roads.manageTempRoadSection `ge` | 1 | 950 |  |
| extensions.editor_tech_roadArchitect_roads.updateBridgeParameters `ge` | 1 | 1045 |  |
| extensions.editor_tech_roadArchitect_roads.createMultiSelect `ge` | 1 | 1066 |  |
| extensions.editor_tech_roadArchitect_roads.getMultiSelectionCentroid `ge` | 0 | 1091 | vec3 |
| extensions.editor_tech_roadArchitect_roads.removeGroupFromRoad `ge` | 2 | 1120 |  |
| extensions.editor_tech_roadArchitect_roads.updateRoadsAfterRemovingGroup `ge` | 1 | 1179 |  |
| extensions.editor_tech_roadArchitect_roads.updateMultiAfterRemove `ge` | 0 | 1193 |  |
| extensions.editor_tech_roadArchitect_roads.convertDecalRoads2RoadArchitect `ge` | 0 | 1204 |  |
| extensions.editor_tech_roadArchitect_roads.finalise `ge` | 0 | 1261 |  |
| extensions.editor_tech_roadArchitect_roads.unfinalise `ge` | 0 | 1325 |  |
| extensions.editor_tech_roadArchitect_roads.computeAllRoadRenderData `ge` | 0 | 1106 |  |
| extensions.editor_tech_roadArchitect_roads.computeRoadRenderDataSingle `ge` | 1 | 1117 |  |
| extensions.editor_tech_roadArchitect_roads.setRoadsVisibilityMaster `ge` | 1 | 1407 |  |
| extensions.editor_tech_roadArchitect_roads.setBridgesVisibilityMaster `ge` | 1 | 1417 |  |
| extensions.editor_tech_roadArchitect_roads.setOverlaysVisibilityMaster `ge` | 1 | 1427 |  |
| extensions.editor_tech_roadArchitect_roads.serialiseRoad `ge` | 1 | 1437 | table |
| extensions.editor_tech_roadArchitect_roads.deserialiseRoad `ge` | 1 | 1496 | table |
| extensions.editor_tech_roadArchitect_staticMesh.createStaticMeshes `ge` | 3 | 228 |  |
| extensions.editor_tech_roadArchitect_staticMesh.tryRemove `ge` | 1 | 246 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.fetchAvailableStaticMeshes `ge` | 0 | 41 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.addMeshToAudition `ge` | 3 | 72 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.goToMeshView `ge` | 2 | 118 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.manageRotateCam `ge` | 0 | 129 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.goToOldView `ge` | 0 | 138 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.removeAuditionMesh `ge` | 0 | 55 |  |
| extensions.editor_tech_roadArchitect_staticMeshMgr.updateCameraPose `ge` | 0 | 64 |  |
| extensions.editor_tech_roadArchitect_terraform.conformTerrainToRoad `ge` | 3 | 237 |  |
| extensions.editor_tech_roadArchitect_terraform.terraformMultiRoads `ge` | 3 | 386 |  |
| extensions.editor_tech_roadArchitect_terraform.writeHeightmapToPng `ge` | 1 | 540 |  |
| extensions.editor_tech_roadArchitect_terraform.setHeightmapFromPng `ge` | 1 | 568 |  |
| extensions.editor_tech_roadArchitect_terraform.getRoadMasks `ge` | 3 | 608 | multiple |
| extensions.editor_tech_roadArchitect_tunnelMesh.createTunnel `ge` | 5 | 200 |  |
| extensions.editor_tech_roadArchitect_tunnelMesh.tryRemove `ge` | 2 | 393 |  |
| extensions.editor_tech_roadArchitect_utilities.drawSphere `ge` | 1 | 46 |  |
| extensions.editor_tech_roadArchitect_utilities.drawGroupSphere `ge` | 1 | 47 |  |
| extensions.editor_tech_roadArchitect_utilities.drawSphereHighlight `ge` | 1 | 48 |  |
| extensions.editor_tech_roadArchitect_utilities.drawSphereHighlightRed `ge` | 1 | 49 |  |
| extensions.editor_tech_roadArchitect_utilities.drawSphereHighlightPurple `ge` | 1 | 50 |  |
| extensions.editor_tech_roadArchitect_utilities.drawHighlightSphereRad `ge` | 2 | 51 |  |
| extensions.editor_tech_roadArchitect_utilities.drawPurpleLine `ge` | 2 | 54 |  |
| extensions.editor_tech_roadArchitect_utilities.drawAutoJctMarkup `ge` | 3 | 57 |  |
| extensions.editor_tech_roadArchitect_utilities.isMouseHoveringOverTerrain `ge` | 0 | 63 |  |
| extensions.editor_tech_roadArchitect_utilities.mouseOnMapPos `ge` | 0 | 66 |  |
| extensions.editor_tech_roadArchitect_utilities.isMouseOverNode `ge` | 1 | 74 | multiple |
| extensions.editor_tech_roadArchitect_utilities.isMouseCloseToNode `ge` | 3 | 158 | multiple |
| extensions.editor_tech_roadArchitect_utilities.getFilenameFromPath `ge` | 1 | 213 |  |
| extensions.editor_tech_roadArchitect_utilities.removeExtension `ge` | 1 | 216 |  |
| extensions.editor_tech_roadArchitect_utilities.removeFileNameFromPath `ge` | 1 | 219 | string |
| extensions.editor_tech_roadArchitect_utilities.computeRoadLength `ge` | 1 | 228 |  |
| extensions.editor_tech_roadArchitect_utilities.getHalfWidthAtNode `ge` | 1 | 256 |  |
| extensions.editor_tech_roadArchitect_utilities.findBounds `ge` | 2 | 267 |  |
| extensions.editor_tech_roadArchitect_utilities.computeDivIndicesFromNode `ge` | 2 | 283 | number |
| extensions.editor_tech_roadArchitect_utilities.isInTunnel `ge` | 4 | 305 | boolean |
| extensions.editor_tech_roadArchitect_utilities.computeAABB2DGroup `ge` | 3 | 102 | table |
| extensions.editor_tech_roadArchitect_utilities.computeAABB2DAllRoads `ge` | 1 | 116 | table |
| extensions.editor_tech_roadArchitect_utilities.tryAddGroupIdxToRoad `ge` | 2 | 130 |  |
| extensions.editor_tech_roadArchitect_utilities.round2 `ge` | 1 | 145 |  |
| extensions.editor_tech_roadArchitect_utilities.polyLerp `ge` | 4 | 316 | multiple |
| extensions.editor_tech_roadArchitect_utilities.sqDist2D `ge` | 2 | 148 |  |
| extensions.editor_tech_roadArchitect_utilities.distance2D `ge` | 4 | 154 |  |
| extensions.editor_tech_roadArchitect_utilities.intersection2Lines `ge` | 4 | 339 | vec3 |
| extensions.editor_tech_roadArchitect_utilities.intersection2LineSegs `ge` | 4 | 378 | vec3 |
| extensions.editor_tech_roadArchitect_utilities.intersectionLineSegmentCircle `ge` | 7 | 390 |  |
| extensions.editor_tech_roadArchitect_utilities.projectPointToLine `ge` | 3 | 428 | vec3 |
| extensions.editor_tech_roadArchitect_utilities.circle2DFrom3Points `ge` | 3 | 455 | vec3 |
| extensions.editor_tech_roadArchitect_utilities.slerp `ge` | 3 | 471 |  |
| extensions.editor_tech_roadArchitect_utilities.angleBetweenVecs `ge` | 2 | 490 |  |
| extensions.editor_tech_roadArchitect_utilities.angleBetweenVecs2D `ge` | 2 | 493 |  |
| extensions.editor_tech_roadArchitect_utilities.clockwiseAngleBetweenVecs2D `ge` | 2 | 496 |  |
| extensions.editor_tech_roadArchitect_utilities.rotateVecAroundAxis `ge` | 3 | 512 |  |
| extensions.editor_tech_roadArchitect_utilities.getRotationBetweenVecs `ge` | 2 | 518 | quat |
| extensions.editor_tech_roadArchitect_utilities.rotateVecByQuaternion `ge` | 2 | 540 | vec3 |
| extensions.editor_tech_roadArchitect_utilities.isPointOnLeftSideOfLine `ge` | 3 | 546 |  |
| extensions.editor_tech_roadArchitect_utilities.isInBox `ge` | 2 | 549 |  |
| extensions.editor_tech_roadArchitect_utilities.isOverTerrain `ge` | 1 | 555 |  |
| extensions.editor_tech_roadArchitect_utilities.randomInRange `ge` | 2 | 563 |  |
| extensions.editor_tech_sensorConfiguration_conversions.makeSensorLive `ge` | 2 | 152 |  |
| extensions.editor_tech_sensorConfiguration_conversions.makeSensorNotLive `ge` | 2 | 161 |  |
| extensions.editor_tech_sensorConfiguration_conversions.createNewSensor `ge` | 3 | 308 |  |
| extensions.editor_tech_sensorConfiguration_conversions.getLiveSensorConfiguration `ge` | 3 | 319 |  |
| extensions.editor_tech_sensorConfiguration_conversions.updateLiveSensorPositionDirection `ge` | 2 | 339 | boolean |
| extensions.editor_tech_sensorConfiguration_utilities.posVS2Coeffs `ge` | 2 | 31 | vec3 |
| extensions.editor_tech_sensorConfiguration_utilities.coeffs2PosVS `ge` | 2 | 40 |  |
| extensions.editor_tech_sensorConfiguration_utilities.sensor2VS `ge` | 3 | 49 | vec3 |
| extensions.editor_tech_sensorConfiguration_utilities.vS2Sensor `ge` | 3 | 58 | vec3 |
| extensions.editor_tech_sensorConfiguration_utilities.dirWorldSpace2Sensor `ge` | 3 | 66 | multiple |
| extensions.editor_tech_sensorConfiguration_utilities.coeffsToDirWorldSpace `ge` | 2 | 79 | vec3 |
| extensions.editor_tech_sensorConfiguration_utilities.dirToDirWorldSpace `ge` | 1 | 84 | vec3 |
| extensions.editor_tech_sensorConfiguration_utilities.computeBeamShapeRadius `ge` | 4 | 89 | number |
| extensions.editor_tech_sensorConfiguration_utilities.renderBeamShape `ge` | 5 | 121 |  |
| extensions.editor_tech_sensorConfiguration_utilities.drawMouseSphere `ge` | 1 | 142 |  |
| extensions.editor_tech_sensorConfiguration_utilities.renderLocalFrame `ge` | 3 | 147 |  |
| extensions.editor_tech_sensorConfiguration_utilities.renderSensorBoxAndFrame `ge` | 4 | 158 |  |
| extensions.editor_terraformTool.getDOI `ge` | 0 | 29 |  |
| extensions.editor_terraformTool.getMargin `ge` | 0 | 30 |  |
| extensions.editor_terraformTool.getFalloff `ge` | 0 | 31 |  |
| extensions.editor_terraformTool.getRoughness `ge` | 0 | 32 |  |
| extensions.editor_terraformTool.getScale `ge` | 0 | 33 |  |
| extensions.editor_terraformTool.setDOI `ge` | 1 | 36 |  |
| extensions.editor_terraformTool.setMargin `ge` | 1 | 37 |  |
| extensions.editor_terraformTool.setFalloff `ge` | 1 | 38 |  |
| extensions.editor_terraformTool.setRoughness `ge` | 1 | 39 |  |
| extensions.editor_terraformTool.setScale `ge` | 1 | 40 |  |
| extensions.editor_terraformTool.getPolygon `ge` | 0 | 43 |  |
| extensions.editor_terraformTool.isPolygonExist `ge` | 0 | 46 |  |
| extensions.editor_terraformTool.clearPolygon `ge` | 0 | 49 |  |
| extensions.editor_terraformTool.handleTerraformingPolygon `ge` | 0 | 58 |  |
| extensions.editor_terraformTool.terraformPolygon `ge` | 1 | 52 |  |
| extensions.editor_terraformTool.terraformSelection `ge` | 0 | 61 |  |
| extensions.editor_terraformTool.onEditorRegisterPreferences `ge` | 1 | 67 |  |
| extensions.editor_terraform_fetchSources.getAllSourcesInPolygon `ge` | 1 | 245 |  |
| extensions.editor_terraform_fetchSources.getAllSourcesInSelection `ge` | 0 | 287 |  |
| extensions.editor_terraform_terraform.terraformToSources `ge` | 6 | 207 |  |
| extensions.editor_terrainAndRoadImporter.conformTerrainToPeaks `ge` | 1 | 75 |  |
| extensions.editor_terrainAndRoadImporter.importTerrain `ge` | 2 | 535 |  |
| extensions.editor_terrainAndRoadImporter.importRoads `ge` | 3 | 581 |  |
| extensions.editor_terrainAndRoadImporter.reset `ge` | 0 | 630 |  |
| extensions.editor_terrainAndRoadImporter.toggleWorldEditor `ge` | 1 | 666 |  |
| extensions.editor_terrainEditor.onEditorRegisterPreferences `ge` | 1 | 2326 |  |
| extensions.editor_terrainEditor.onClientEndMission `ge` | 0 | 2392 |  |
| extensions.editor_terrainEditor.changeBrushSize `ge` | 2 | 1615 |  |
| extensions.editor_terrainEditor.updateTerrainBlockProxies `ge` | 0 | 732 |  |
| extensions.editor_terrainEditor.updateMaterialLibrary `ge` | 0 | 590 |  |
| extensions.editor_terrainEditor.getUniqueMtlName `ge` | 2 | 578 |  |
| extensions.editor_terrainEditor.createMaterialProxy `ge` | 6 | 540 |  |
| extensions.editor_terrainEditor.getMtlIdByName `ge` | 1 | 199 | multiple |
| extensions.editor_terrainEditor.setMaterialsDirty `ge` | 0 | 450 |  |
| extensions.editor_terrainEditor.setTerrainDirty `ge` | 0 | 445 |  |
| extensions.editor_terrainEditor.saveMaterials `ge` | 0 | 717 |  |
| extensions.editor_terrainEditor.saveTerrainAndMaterials `ge` | 0 | 722 |  |
| extensions.editor_terrainEditor.copyMaterialProxyWithInputs `ge` | 1 | 490 |  |
| extensions.editor_terrainEditor.setupVars `ge` | 0 | 1522 |  |
| extensions.editor_terrainEditor.dragDropTarget `ge` | 3 | 329 |  |
| extensions.editor_terrainEditor.updatePaintMaterialProxies `ge` | 0 | 641 |  |
| extensions.editor_terrainEditor.updateMap `ge` | 3 | 305 |  |
| extensions.editor_terrainEditor.removeMap `ge` | 2 | 712 |  |
| extensions.editor_terrainEditor.selectPaintMaterial `ge` | 1 | 625 |  |
| extensions.editor_terrainEditor.fixGroundmodelName `ge` | 3 | 518 |  |
| extensions.editor_terrainEditor.checkForTerrainMaterialFileFormat `ge` | 0 | 1905 |  |
| extensions.editor_terrainEditor.deleteMaterialInJson `ge` | 1 | 2434 |  |
| extensions.editor_terrainEditor.getTerrainBlockMaterialIndex `ge` | 1 | 2443 | number |
| extensions.editor_terrainEditor.getVars `ge` | 0 | 2452 |  |
| extensions.editor_terrainEditor.getTerrainEditor `ge` | 0 | 2453 |  |
| extensions.editor_terrainEditor.getTerrainBlock `ge` | 0 | 2454 |  |
| extensions.editor_terrainEditor.getMaterialsInJson `ge` | 0 | 2455 |  |
| extensions.editor_terrainEditor.getSelectedPaintMaterialProxy `ge` | 0 | 2456 |  |
| extensions.editor_terrainEditor.getPaintMaterialProxies `ge` | 0 | 2457 |  |
| extensions.editor_terrainEditor.getTerrainBlockProxies `ge` | 0 | 2458 |  |
| extensions.editor_terrainEditor.getMatFilePath `ge` | 0 | 2459 |  |
| extensions.editor_terrainEditor.getTerrainFolder `ge` | 0 | 2460 |  |
| extensions.editor_terrainEditor.getErrors `ge` | 0 | 2461 |  |
| extensions.editor_terrainEditor.getLevelPath `ge` | 0 | 2462 |  |
| extensions.editor_terrainEditor.fixedFileFormat `ge` | 0 | 2463 |  |
| extensions.editor_terrainEditor.beginChangeBrushSizeWithKeys `ge` | 1 | 2464 |  |
| extensions.editor_terrainEditor.endChangeBrushSizeWithKeys `ge` | 0 | 2465 |  |
| extensions.editor_textEditor.onSerialize `ge` | 0 | 90 |  |
| extensions.editor_textEditor.onDeserialize `ge` | 1 | 84 |  |
| extensions.editor_toolManager.removeAllSplineToolMeshes `ge` | 0 | 18 |  |
| extensions.editor_toolUtilities_fitPoly.fitPoly `ge` | 1 | 118 |  |
| extensions.editor_toolUtilities_geom.getPreRotQuats `ge` | 0 | 64 |  |
| extensions.editor_toolUtilities_geom.getBarScale `ge` | 0 | 67 |  |
| extensions.editor_toolUtilities_geom.squaredSegSegDist `ge` | 6 | 70 |  |
| extensions.editor_toolUtilities_geom.isMouseOverNode `ge` | 1 | 109 | multiple |
| extensions.editor_toolUtilities_geom.isMouseOverSpline `ge` | 2 | 1091 | multiple |
| extensions.editor_toolUtilities_geom.isMouseOverPolyline `ge` | 2 | 130 | multiple |
| extensions.editor_toolUtilities_geom.isMouseOverRib `ge` | 1 | 150 | multiple |
| extensions.editor_toolUtilities_geom.isMouseOverBar `ge` | 1 | 191 | multiple |
| extensions.editor_toolUtilities_geom.isMouseOverGraphNode `ge` | 1 | 217 | multiple |
| extensions.editor_toolUtilities_geom.getAABB `ge` | 1 | 235 | table |
| extensions.editor_toolUtilities_geom.computeSplinePolygon `ge` | 3 | 248 |  |
| extensions.editor_toolUtilities_geom.isPointInTriangle `ge` | 4 | 282 |  |
| extensions.editor_toolUtilities_geom.getTerrainNormal `ge` | 1 | 296 |  |
| extensions.editor_toolUtilities_geom.getTerrainNormalInPlace `ge` | 2 | 309 |  |
| extensions.editor_toolUtilities_geom.rotateVecAroundZ `ge` | 3 | 321 |  |
| extensions.editor_toolUtilities_geom.rotateVecAroundAxis `ge` | 3 | 329 |  |
| extensions.editor_toolUtilities_geom.rotateVecAroundAxisInlined `ge` | 4 | 343 |  |
| extensions.editor_toolUtilities_geom.computeTurningRadius `ge` | 3 | 357 |  |
| extensions.editor_toolUtilities_geom.isLineSegIntersect `ge` | 4 | 372 |  |
| extensions.editor_toolUtilities_geom.intersection2LineSegs `ge` | 5 | 378 |  |
| extensions.editor_toolUtilities_geom.angleBetweenVecsNorm `ge` | 2 | 389 |  |
| extensions.editor_toolUtilities_geom.angleBetweenVecs `ge` | 2 | 392 |  |
| extensions.editor_toolUtilities_geom.angleBetweenVecs2D `ge` | 2 | 401 |  |
| extensions.editor_toolUtilities_geom.signedAngleBetweenVecs `ge` | 3 | 411 |  |
| extensions.editor_toolUtilities_geom.signedAngleAroundAxis `ge` | 3 | 421 |  |
| extensions.editor_toolUtilities_geom.intersectsUpQuadBarycentric `ge` | 2 | 431 | boolean |
| extensions.editor_toolUtilities_geom.pointInQuadBarycentric `ge` | 2 | 440 |  |
| extensions.editor_toolUtilities_geom.computeSourcesAABB `ge` | 1 | 446 | table |
| extensions.editor_toolUtilities_geom.getAllQuadrilaterals `ge` | 2 | 460 |  |
| extensions.editor_toolUtilities_geom.populateTreeQuads `ge` | 1 | 483 |  |
| extensions.editor_toolUtilities_geom.splitSplineGeometry `ge` | 4 | 497 | multiple |
| extensions.editor_toolUtilities_geom.splitLoopSplineGeometry `ge` | 4 | 533 | multiple |
| extensions.editor_toolUtilities_geom.joinSplineGeometry `ge` | 8 | 563 | multiple |
| extensions.editor_toolUtilities_geom.flipSplineDirection `ge` | 1 | 610 |  |
| extensions.editor_toolUtilities_geom.closestRibbonSegPointToPoint `ge` | 3 | 623 | multiple |
| extensions.editor_toolUtilities_geom.getNodeSpansInsidePolygon `ge` | 2 | 641 |  |
| extensions.editor_toolUtilities_geom.projectPointToSpline `ge` | 2 | 668 | multiple |
| extensions.editor_toolUtilities_geom.sampleSpline `ge` | 7 | 722 |  |
| extensions.editor_toolUtilities_geom.sampleSplineAdaptive `ge` | 8 | 771 |  |
| extensions.editor_toolUtilities_geom.translateSpline `ge` | 4 | 800 |  |
| extensions.editor_toolUtilities_geom.computeRandomJitterQuat_ZOnly `ge` | 3 | 815 |  |
| extensions.editor_toolUtilities_geom.computeRandomJitterQuat `ge` | 5 | 822 |  |
| extensions.editor_toolUtilities_geom.computeRandomJitterQuatFromFreedomAxes `ge` | 3 | 845 |  |
| extensions.editor_toolUtilities_geom.updateRibPointsFree `ge` | 1 | 859 |  |
| extensions.editor_toolUtilities_geom.updateRibPointsRaycast `ge` | 1 | 886 |  |
| extensions.editor_toolUtilities_geom.updateBarPoints `ge` | 2 | 914 |  |
| extensions.editor_toolUtilities_geom.updateBarPointsGraph `ge` | 3 | 953 |  |
| extensions.editor_toolUtilities_geom.computeSDF `ge` | 1 | 1027 |  |
| extensions.editor_toolUtilities_geom.getScanlineSpans `ge` | 8 | 993 |  |
| extensions.editor_toolUtilities_geom.catmullRomCentripetalFast `ge` | 7 | 1067 |  |
| extensions.editor_toolUtilities_geom.catmullRomNodesOnly `ge` | 2 | 1116 |  |
| extensions.editor_toolUtilities_geom.catmullRomNodesWidthsOnly `ge` | 4 | 1139 | multiple |
| extensions.editor_toolUtilities_geom.catmullRomNodesWidthsVelVelLimits `ge` | 2 | 1171 | multiple |
| extensions.editor_toolUtilities_geom.catmullRomRaycast `ge` | 3 | 1257 |  |
| extensions.editor_toolUtilities_geom.catmullRomConformToTerrain `ge` | 2 | 1310 |  |
| extensions.editor_toolUtilities_geom.catmullRomFree `ge` | 2 | 1360 |  |
| extensions.editor_toolUtilities_geom.catmullRomFreeWithBanking `ge` | 3 | 1431 |  |
| extensions.editor_toolUtilities_geom.computeGraphPathFromNodes `ge` | 1 | 1508 |  |
| extensions.editor_toolUtilities_gizmo.handleGizmo `ge` | 9 | 91 |  |
| extensions.editor_toolUtilities_materialSelectionMgr.getTexObj `ge` | 1 | 43 |  |
| extensions.editor_toolUtilities_materialSelectionMgr.registerWindow `ge` | 0 | 57 |  |
| extensions.editor_toolUtilities_materialSelectionMgr.openWindow `ge` | 0 | 60 |  |
| extensions.editor_toolUtilities_materialSelectionMgr.closeWindow `ge` | 0 | 63 |  |
| extensions.editor_toolUtilities_materialSelectionMgr.handleMaterialSelectionSubWindow `ge` | 2 | 66 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.getAvailableStaticMeshes `ge` | 0 | 53 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.populateAvailableStaticMeshes `ge` | 0 | 56 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.addMeshToAudition `ge` | 2 | 97 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.goToMeshView `ge` | 2 | 143 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.manageRotateCam `ge` | 0 | 154 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.goToOldView `ge` | 0 | 163 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.leaveAuditionView `ge` | 0 | 174 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.removeAuditionMesh `ge` | 0 | 78 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.updateCameraPose `ge` | 0 | 89 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.registerWindow `ge` | 0 | 171 |  |
| extensions.editor_toolUtilities_meshAuditionMgr.handleMeshAuditionAndSelection `ge` | 2 | 184 |  |
| extensions.editor_toolUtilities_polygon.getPolygon `ge` | 0 | 53 |  |
| extensions.editor_toolUtilities_polygon.isPolygonValid `ge` | 0 | 56 |  |
| extensions.editor_toolUtilities_polygon.clearPolygon `ge` | 0 | 59 |  |
| extensions.editor_toolUtilities_polygon.handleUserPolygon `ge` | 1 | 108 |  |
| extensions.editor_toolUtilities_rdp.rdpIndices `ge` | 5 | 24 |  |
| extensions.editor_toolUtilities_rdp.simplifyNodes `ge` | 2 | 69 |  |
| extensions.editor_toolUtilities_rdp.simplifyNodesWidths `ge` | 3 | 92 |  |
| extensions.editor_toolUtilities_rdp.simplifyNodesWidthsNormals `ge` | 4 | 116 |  |
| extensions.editor_toolUtilities_rdp.simplifyNodesVels `ge` | 3 | 140 |  |
| extensions.editor_toolUtilities_rdp.simplifyNodesWidthsVelVelLimits `ge` | 5 | 164 |  |
| extensions.editor_toolUtilities_render.drawSphereCulled `ge` | 3 | 79 |  |
| extensions.editor_toolUtilities_render.drawSphereCursor `ge` | 2 | 151 |  |
| extensions.editor_toolUtilities_render.drawSphereNode `ge` | 1 | 144 |  |
| extensions.editor_toolUtilities_render.drawSphereRib `ge` | 1 | 85 |  |
| extensions.editor_toolUtilities_render.drawSphereBarHover `ge` | 1 | 97 |  |
| extensions.editor_toolUtilities_render.drawSphereNodeDull `ge` | 1 | 159 |  |
| extensions.editor_toolUtilities_render.drawSphereHighlight `ge` | 1 | 160 |  |
| extensions.editor_toolUtilities_render.drawSphereHighlightHover `ge` | 1 | 107 |  |
| extensions.editor_toolUtilities_render.drawSphereHighlightSelected `ge` | 1 | 116 |  |
| extensions.editor_toolUtilities_render.drawLineCulled `ge` | 4 | 163 |  |
| extensions.editor_toolUtilities_render.drawLineImmediate `ge` | 4 | 158 |  |
| extensions.editor_toolUtilities_render.drawSplineLine `ge` | 2 | 213 |  |
| extensions.editor_toolUtilities_render.drawSplineLineDull `ge` | 2 | 207 |  |
| extensions.editor_toolUtilities_render.drawWireFrameLine `ge` | 2 | 169 |  |
| extensions.editor_toolUtilities_render.drawRibLine `ge` | 2 | 185 |  |
| extensions.editor_toolUtilities_render.drawSplineLineLinked `ge` | 2 | 206 |  |
| extensions.editor_toolUtilities_render.drawDropLine `ge` | 4 | 198 |  |
| extensions.editor_toolUtilities_render.drawDropLineThick `ge` | 4 | 199 |  |
| extensions.editor_toolUtilities_render.drawDropLineDull `ge` | 2 | 200 |  |
| extensions.editor_toolUtilities_render.drawNormalLine `ge` | 2 | 201 |  |
| extensions.editor_toolUtilities_render.drawRefNormalLine `ge` | 2 | 202 |  |
| extensions.editor_toolUtilities_render.drawGroundLine `ge` | 2 | 192 |  |
| extensions.editor_toolUtilities_render.drawGroundLineDull `ge` | 2 | 195 |  |
| extensions.editor_toolUtilities_render.drawArcSegment `ge` | 2 | 217 |  |
| extensions.editor_toolUtilities_render.drawSphereImmediate `ge` | 3 | 150 |  |
| extensions.editor_toolUtilities_render.drawTriCulled `ge` | 4 | 226 |  |
| extensions.editor_toolUtilities_render.drawTriNotSelectedSurface `ge` | 3 | 232 |  |
| extensions.editor_toolUtilities_render.drawTriActiveSurface `ge` | 3 | 234 |  |
| extensions.editor_toolUtilities_render.markupDrag `ge` | 1 | 252 |  |
| extensions.editor_toolUtilities_render.markupAddNode `ge` | 1 | 256 |  |
| extensions.editor_toolUtilities_render.markupInsertNode `ge` | 1 | 257 |  |
| extensions.editor_toolUtilities_render.markupAdjustWidth `ge` | 1 | 259 |  |
| extensions.editor_toolUtilities_render.markupAdjustBar `ge` | 1 | 260 |  |
| extensions.editor_toolUtilities_render.markupWidthDisplay `ge` | 2 | 261 |  |
| extensions.editor_toolUtilities_render.markupVelocity `ge` | 4 | 276 |  |
| extensions.editor_toolUtilities_render.markupAddPolygonNode `ge` | 1 | 262 |  |
| extensions.editor_toolUtilities_render.markupStart `ge` | 1 | 263 |  |
| extensions.editor_toolUtilities_render.markupEnd `ge` | 1 | 264 |  |
| extensions.editor_toolUtilities_render.markupAddPairLeft `ge` | 1 | 265 |  |
| extensions.editor_toolUtilities_render.markupPairFirstNode `ge` | 1 | 266 |  |
| extensions.editor_toolUtilities_render.markupPairSecondNode `ge` | 1 | 267 |  |
| extensions.editor_toolUtilities_render.markupNode1 `ge` | 1 | 268 |  |
| extensions.editor_toolUtilities_render.markupNode2 `ge` | 1 | 269 |  |
| extensions.editor_toolUtilities_render.markupNode3 `ge` | 1 | 270 |  |
| extensions.editor_toolUtilities_render.markupSelectSpline `ge` | 1 | 253 |  |
| extensions.editor_toolUtilities_render.markupSelectedSplineDisabled `ge` | 1 | 254 |  |
| extensions.editor_toolUtilities_render.markupSelectOrAdd `ge` | 1 | 255 |  |
| extensions.editor_toolUtilities_render.markupActiveSurf `ge` | 1 | 272 |  |
| extensions.editor_toolUtilities_render.markupVolume `ge` | 1 | 273 |  |
| extensions.editor_toolUtilities_render.markupGraphFreeSpace `ge` | 1 | 278 |  |
| extensions.editor_toolUtilities_render.markupGraphNodeHover `ge` | 1 | 277 |  |
| extensions.editor_toolUtilities_render.markupObstacleDistance `ge` | 2 | 284 |  |
| extensions.editor_toolUtilities_render.markupObstacleDistanceWithElevation `ge` | 3 | 285 |  |
| extensions.editor_toolUtilities_render.markupAngleAndDistance `ge` | 3 | 286 |  |
| extensions.editor_toolUtilities_render.markupAngleDistanceWithElevation `ge` | 4 | 287 |  |
| extensions.editor_toolUtilities_render.markupLinkedSplineCannotAdd `ge` | 1 | 282 |  |
| extensions.editor_toolUtilities_render.markupLoopedSplineCannotAdd `ge` | 1 | 283 |  |
| extensions.editor_toolUtilities_render.drawArc `ge` | 6 | 290 |  |
| extensions.editor_toolUtilities_render.drawRibPoints `ge` | 2 | 313 |  |
| extensions.editor_toolUtilities_render.drawBarPoints `ge` | 2 | 336 |  |
| extensions.editor_toolUtilities_render.handleSplineRendering `ge` | 9 | 351 |  |
| extensions.editor_toolUtilities_render.renderLayer `ge` | 4 | 442 |  |
| extensions.editor_toolUtilities_render.renderMasterLayer `ge` | 4 | 510 |  |
| extensions.editor_toolUtilities_render.renderShells `ge` | 1 | 574 |  |
| extensions.editor_toolUtilities_render.renderRibbonWireFrame `ge` | 3 | 603 |  |
| extensions.editor_toolUtilities_render.renderHalfSplineWireFrame `ge` | 3 | 640 |  |
| extensions.editor_toolUtilities_render.renderWireframeRibbons `ge` | 1 | 669 |  |
| extensions.editor_toolUtilities_render.renderHomologatedSurface `ge` | 2 | 720 |  |
| extensions.editor_toolUtilities_render.renderDrivePathSurface `ge` | 1 | 794 |  |
| extensions.editor_toolUtilities_render.renderPreviewRibbon `ge` | 2 | 839 |  |
| extensions.editor_toolUtilities_render.renderVelocities `ge` | 4 | 882 |  |
| extensions.editor_toolUtilities_render.renderVelocitiesGraph `ge` | 4 | 921 |  |
| extensions.editor_toolUtilities_render.renderStartEndMarkups `ge` | 1 | 1055 |  |
| extensions.editor_toolUtilities_render.renderCandidateLoop `ge` | 2 | 1067 |  |
| extensions.editor_toolUtilities_render.renderCandidateJoin `ge` | 2 | 1077 |  |
| extensions.editor_toolUtilities_render.renderRibbon `ge` | 6 | 1096 |  |
| extensions.editor_toolUtilities_render.renderNavGraph `ge` | 2 | 1240 |  |
| extensions.editor_toolUtilities_render.renderGraphPath `ge` | 2 | 1272 |  |
| extensions.editor_toolUtilities_render.renderChosenNodes `ge` | 2 | 1285 |  |
| extensions.editor_toolUtilities_render.renderSplinePolylines `ge` | 2 | 1296 |  |
| extensions.editor_toolUtilities_render.drawSplineLineUnselected `ge` | 2 | 210 |  |
| extensions.editor_toolUtilities_ribbonInput.handleRibbonEvents `ge` | 9 | 210 | multiple |
| extensions.editor_toolUtilities_riverbed.terraform `ge` | 1 | 177 |  |
| extensions.editor_toolUtilities_riverbed.revert `ge` | 1 | 289 |  |
| extensions.editor_toolUtilities_riverbed.revertAll `ge` | 1 | 318 |  |
| extensions.editor_toolUtilities_roadDesignStandards.getPresetStrings `ge` | 0 | 93 |  |
| extensions.editor_toolUtilities_roadDesignStandards.getPresetsMap `ge` | 0 | 97 |  |
| extensions.editor_toolUtilities_skeleton.skeletonise `ge` | 1 | 155 |  |
| extensions.editor_toolUtilities_skeleton.extractPaths `ge` | 1 | 331 |  |
| extensions.editor_toolUtilities_skeleton.estimateWidths `ge` | 2 | 451 |  |
| extensions.editor_toolUtilities_skeleton.getPathsFromPng `ge` | 1 | 652 |  |
| extensions.editor_toolUtilities_splineInput.handleNavGraphEvents `ge` | 6 | 835 |  |
| extensions.editor_toolUtilities_splineInput.registerSplineTool `ge` | 6 | 460 |  |
| extensions.editor_toolUtilities_splineMaskExport.export `ge` | 3 | 19 |  |
| extensions.editor_toolUtilities_style.getStyle `ge` | 0 | 14 | table |
| extensions.editor_toolUtilities_style.getImguiCols `ge` | 1 | 290 |  |
| extensions.editor_toolUtilities_terrainPainter.paint `ge` | 1 | 30 |  |
| extensions.editor_toolUtilities_terrainPainter.revert `ge` | 1 | 116 |  |
| extensions.editor_toolUtilities_terrainPainter.revertAll `ge` | 1 | 143 |  |
| extensions.editor_toolUtilities_util.isMouseHoveringOverTerrain `ge` | 0 | 39 |  |
| extensions.editor_toolUtilities_util.mouseOnMapPos `ge` | 0 | 44 |  |
| extensions.editor_toolUtilities_util.vertRaycast `ge` | 1 | 52 |  |
| extensions.editor_toolUtilities_util.fastArrayCopy `ge` | 1 | 59 |  |
| extensions.editor_toolUtilities_util.msToMph `ge` | 1 | 68 |  |
| extensions.editor_toolUtilities_util.msToKph `ge` | 1 | 69 |  |
| extensions.editor_toolUtilities_util.sumOverNonArrayTable `ge` | 1 | 72 |  |
| extensions.editor_toolUtilities_util.getMeshBox `ge` | 1 | 81 | table |
| extensions.editor_toolUtilities_util.getBlueToRedColour `ge` | 3 | 100 | color |
| extensions.editor_toolUtilities_util.getHueBasedColour255 `ge` | 1 | 124 |  |
| extensions.editor_toolUtilities_util.hsvToRgb255 `ge` | 3 | 106 | multiple |
| extensions.editor_toolUtilities_util.generateUniqueName `ge` | 2 | 127 |  |
| extensions.editor_toolUtilities_util.computeIdToIdxMap `ge` | 2 | 141 |  |
| extensions.editor_toolUtilities_util.getNumMaterials `ge` | 0 | 149 |  |
| extensions.editor_toolUtilities_util.getPolyLength `ge` | 1 | 156 |  |
| extensions.editor_toolUtilities_util.getMinMaxWidth `ge` | 1 | 165 | multiple |
| extensions.editor_toolUtilities_util.isWidthFixed `ge` | 1 | 179 | multiple |
| extensions.editor_toolUtilities_util.filterClosePointsXY `ge` | 2 | 189 |  |
| extensions.editor_toolUtilities_util.calculateAverageSpacingXY `ge` | 2 | 214 |  |
| extensions.editor_toolUtilities_util.doesPathContainNode `ge` | 2 | 246 | multiple |
| extensions.editor_toolUtilities_util.flipSplineDirection `ge` | 1 | 256 |  |
| extensions.editor_toolUtilities_util.goToSpline `ge` | 1 | 269 |  |
| extensions.editor_toolUtilities_util.buildRibbonMeshFromPolyline `ge` | 3 | 302 | table |
| extensions.editor_toolUtilities_util.buildRibbonGLTF `ge` | 3 | 344 |  |
| extensions.editor_toolUtilities_util.getSourcesSingle `ge` | 1 | 447 | table |
| extensions.editor_toolUtilities_util.getAllSources `ge` | 1 | 459 |  |
| extensions.editor_toolUtilities_util.hsvToRgb `ge` | 3 | 479 | multiple |
| extensions.editor_toolUtilities_util.flipBitmapY `ge` | 1 | 499 |  |
| extensions.editor_toolUtilities_util.writeMaskToPng `ge` | 2 | 514 |  |
| extensions.editor_toolUtilities_util.writePathsToPng `ge` | 4 | 538 |  |
| extensions.editor_toolUtilities_util.writeWidthsToPng `ge` | 5 | 573 |  |
| extensions.editor_trafficManager.loadSession `ge` | 1 | 2058 |  |
| extensions.editor_trafficManager.saveSession `ge` | 1 | 2169 |  |
| extensions.editor_trafficManager.getSessionData `ge` | 0 | 2262 |  |
| extensions.editor_trafficManager.enableSimulation `ge` | 0 | 579 | boolean |
| extensions.editor_trafficManager.disableSimulation `ge` | 0 | 596 | boolean |
| extensions.editor_trafficManager.onWindowMenuItem `ge` | 0 | 2513 |  |
| extensions.editor_trafficManager.onSerialize `ge` | 0 | 2505 |  |
| extensions.editor_trafficManager.onDeserialized `ge` | 1 | 2510 |  |
| extensions.editor_trafficSignalsEditor.getCurrentElements `ge` | 0 | 253 |  |
| extensions.editor_trafficSignalsEditor.getCurrentSignals `ge` | 0 | 257 | table |
| extensions.editor_trafficSignalsEditor.setCurrentSignals `ge` | 1 | 261 |  |
| extensions.editor_trafficSignalsEditor.loadFile `ge` | 1 | 291 |  |
| extensions.editor_trafficSignalsEditor.saveFile `ge` | 1 | 304 |  |
| extensions.editor_trafficSignalsEditor.onWindowMenuItem `ge` | 0 | 1880 |  |
| extensions.editor_trafficSignalsEditor.onClientEndMission `ge` | 0 | 1865 |  |
| extensions.editor_trafficSignalsEditor.onSerialize `ge` | 0 | 1869 |  |
| extensions.editor_trafficSignalsEditor.onDeserialized `ge` | 1 | 1874 |  |
| extensions.editor_undoHistory.onExtensionLoaded `ge` | 0 | 85 |  |
| extensions.editor_vehicleBridgeTest.callback `ge` | 0+ | 53 |  |
| extensions.editor_vehicleDetailViewer.onDeserialized `ge` | 1 | 297 |  |
| extensions.editor_vehicleDetailViewer.onSerialize `ge` | 0 | 274 | table |
| extensions.editor_vehicleDetailViewer.onExtensionLoaded `ge` | 0 | 596 |  |
| extensions.editor_vehicleDetailViewer.onExtensionUnloaded `ge` | 0 | 601 |  |
| extensions.editor_vehicleEditor_api_nodeTransformer.transformNodes `ge` | 0 | 48 |  |
| extensions.editor_vehicleEditor_api_powerTrainUtils.displayLivedataByType `ge` | 2 | 11 |  |
| extensions.editor_vehicleEditor_api_powerTrainUtils.displayLivedata `ge` | 1 | 102 |  |
| extensions.editor_vehicleEditor_api_powerTrainUtils.showJbeamData `ge` | 1 | 126 |  |
| extensions.editor_vehicleEditor_api_powerTrainUtils.initialize `ge` | 1 | 133 |  |
| extensions.editor_vehicleEditor_liveEditor_veAdjustableTechCarTuner.open `ge` | 0 | 234 |  |
| extensions.editor_vehicleEditor_liveEditor_veAdjustableTechCarTuner.onSerialize `ge` | 0 | 238 | table |
| extensions.editor_vehicleEditor_liveEditor_veAdjustableTechCarTuner.onDeserialized `ge` | 1 | 244 |  |
| extensions.editor_vehicleEditor_liveEditor_veAeroDebug.open `ge` | 0 | 145 |  |
| extensions.editor_vehicleEditor_liveEditor_veAeroDebug.onSerialize `ge` | 0 | 169 | table |
| extensions.editor_vehicleEditor_liveEditor_veAeroDebug.onDeserialized `ge` | 1 | 175 |  |
| extensions.editor_vehicleEditor_liveEditor_veCrashTester.open `ge` | 0 | 141 |  |
| extensions.editor_vehicleEditor_liveEditor_veCrashTester.onSerialize `ge` | 0 | 145 | table |
| extensions.editor_vehicleEditor_liveEditor_veCrashTester.onDeserialized `ge` | 1 | 151 |  |
| extensions.editor_vehicleEditor_liveEditor_veFlexbodyDebug.open `ge` | 0 | 1145 |  |
| extensions.editor_vehicleEditor_liveEditor_veFlexbodyDebug.onSerialize `ge` | 0 | 1149 | table |
| extensions.editor_vehicleEditor_liveEditor_veFlexbodyDebug.onDeserialized `ge` | 1 | 1155 |  |
| extensions.editor_vehicleEditor_liveEditor_veGeneralData.open `ge` | 0 | 91 |  |
| extensions.editor_vehicleEditor_liveEditor_veGeneralData.onSerialize `ge` | 0 | 95 | table |
| extensions.editor_vehicleEditor_liveEditor_veGeneralData.onDeserialized `ge` | 1 | 101 |  |
| extensions.editor_vehicleEditor_liveEditor_veJBeamPicker.requestDrawnNodesCallback `ge` | 2 | 165 |  |
| extensions.editor_vehicleEditor_liveEditor_veJBeamPicker.requestDrawnBeamsCallback `ge` | 2 | 172 |  |
| extensions.editor_vehicleEditor_liveEditor_veJBeamPicker.open `ge` | 0 | 772 |  |
| extensions.editor_vehicleEditor_liveEditor_veJBeamPicker.onSerialize `ge` | 0 | 784 | table |
| extensions.editor_vehicleEditor_liveEditor_veJBeamPicker.onDeserialized `ge` | 1 | 790 |  |
| extensions.editor_vehicleEditor_liveEditor_veLightsDebug.open `ge` | 0 | 137 |  |
| extensions.editor_vehicleEditor_liveEditor_veLightsDebug.onSerialize `ge` | 0 | 141 | table |
| extensions.editor_vehicleEditor_liveEditor_veLightsDebug.onDeserialized `ge` | 1 | 147 |  |
| extensions.editor_vehicleEditor_liveEditor_veNodeTriSelfCollisionDetector.open `ge` | 0 | 201 |  |
| extensions.editor_vehicleEditor_liveEditor_veNodeTriSelfCollisionDetector.onSerialize `ge` | 0 | 205 | table |
| extensions.editor_vehicleEditor_liveEditor_veNodeTriSelfCollisionDetector.onDeserialized `ge` | 1 | 213 |  |
| extensions.editor_vehicleEditor_liveEditor_vePowerTrain.open `ge` | 0 | 79 |  |
| extensions.editor_vehicleEditor_liveEditor_vePowerTrain.onSerialize `ge` | 0 | 67 | table |
| extensions.editor_vehicleEditor_liveEditor_vePowerTrain.onDeserialize `ge` | 1 | 74 |  |
| extensions.editor_vehicleEditor_liveEditor_vePropTransformer.open `ge` | 0 | 550 |  |
| extensions.editor_vehicleEditor_liveEditor_vePropTransformer.onSerialize `ge` | 0 | 554 | table |
| extensions.editor_vehicleEditor_liveEditor_vePropTransformer.onDeserialized `ge` | 1 | 560 |  |
| extensions.editor_vehicleEditor_liveEditor_veRawData.open `ge` | 0 | 26 |  |
| extensions.editor_vehicleEditor_liveEditor_veRawData.onSerialize `ge` | 0 | 30 | table |
| extensions.editor_vehicleEditor_liveEditor_veRawData.onDeserialized `ge` | 1 | 36 |  |
| extensions.editor_vehicleEditor_liveEditor_veTCSDebug.onExtensionLoaded `ge` | 0 | 206 |  |
| extensions.editor_vehicleEditor_liveEditor_veTCSDebug.onExtensionUnloaded `ge` | 0 | 213 |  |
| extensions.editor_vehicleEditor_liveEditor_veTCSDebug.open `ge` | 0 | 201 |  |
| extensions.editor_vehicleEditor_liveEditor_veTCSDebug.onSerialize `ge` | 0 | 216 | table |
| extensions.editor_vehicleEditor_liveEditor_veTCSDebug.onDeserialized `ge` | 1 | 222 |  |
| extensions.editor_vehicleEditor_liveEditor_veVehicleSpawner.open `ge` | 0 | 148 |  |
| extensions.editor_vehicleEditor_liveEditor_veVehicleSpawner.onSerialize `ge` | 0 | 166 | table |
| extensions.editor_vehicleEditor_liveEditor_veVehicleSpawner.onDeserialized `ge` | 1 | 172 |  |
| extensions.editor_vehicleEditor_liveEditor_veView.addSceneView `ge` | 0 | 106 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamBeautifier.open `ge` | 0 | 422 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamBeautifier.onSerialize `ge` | 0 | 426 | table |
| extensions.editor_vehicleEditor_staticEditor_veJBeamBeautifier.onDeserialized `ge` | 1 | 432 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamModifierLeakVis.open `ge` | 0 | 1080 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamModifierLeakVis.onSerialize `ge` | 0 | 1084 | table |
| extensions.editor_vehicleEditor_staticEditor_veJBeamModifierLeakVis.onDeserialized `ge` | 1 | 1090 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamSpellchecker.open `ge` | 0 | 461 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamSpellchecker.onSerialize `ge` | 0 | 465 | table |
| extensions.editor_vehicleEditor_staticEditor_veJBeamSpellchecker.onDeserialized `ge` | 1 | 471 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamTableVis.open `ge` | 0 | 180 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamTableVis.onSerialize `ge` | 0 | 184 | table |
| extensions.editor_vehicleEditor_staticEditor_veJBeamTableVis.onDeserialized `ge` | 1 | 190 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamVariablesChecker.open `ge` | 0 | 117 |  |
| extensions.editor_vehicleEditor_staticEditor_veJBeamVariablesChecker.onSerialize `ge` | 0 | 121 | table |
| extensions.editor_vehicleEditor_staticEditor_veJBeamVariablesChecker.onDeserialized `ge` | 1 | 127 |  |
| extensions.editor_vehicleEditor_staticEditor_vePartList.onDeserialized `ge` | 1 | 244 |  |
| extensions.editor_vehicleEditor_staticEditor_vePartList.onSerialize `ge` | 0 | 238 | table |
| extensions.editor_vehicleEditor_staticEditor_vePartList.open `ge` | 0 | 229 |  |
| extensions.editor_vehicleEditor_staticEditor_vePartPropertyView.open `ge` | 0 | 51 |  |
| extensions.editor_vehicleEditor_staticEditor_vePartTextView.open `ge` | 0 | 322 |  |
| extensions.editor_vehicleEditor_staticEditor_vePartTree.open `ge` | 0 | 657 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.createRenderViewUI `ge` | 0 | 191 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.getMainRenderViewMouseRay `ge` | 0 | 748 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.destroyAllRenderViews `ge` | 0 | 757 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.onSerialize `ge` | 0 | 787 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.onDeserialize `ge` | 1 | 793 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.moveLeft `ge` | 1 | 798 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.moveRight `ge` | 1 | 799 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.moveForward `ge` | 1 | 800 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.moveBackward `ge` | 1 | 801 |  |
| extensions.editor_vehicleEditor_staticEditor_veStaticRenderView.setCameraSpeed `ge` | 1 | 802 |  |
| extensions.editor_veMain.saveCurrentWindowLayout `ge` | 0 | 401 |  |
| extensions.editor_veMain.onSerialize `ge` | 0 | 405 |  |
| extensions.editor_veMain.onDeserialize `ge` | 1 | 411 |  |
| extensions.editor_veMain.toggleActive `ge` | 0 | 297 |  |
| extensions.editor_visualization.onEditorRegisterPreferences `ge` | 1 | 451 |  |
| extensions.editor_vizHelper.openWindow `ge` | 0 | 37 |  |
| extensions.editor_vizHelper.onExtensionLoaded `ge` | 0 | 190 |  |
| extensions.editor_vizHelper.onDeserialized `ge` | 1 | 211 |  |
| extensions.editor_vizHelper.onSerialize `ge` | 0 | 205 | table |
| extensions.freeroam_bigMapMarkers.displayBigMapMarkers `ge` | 1 | 63 |  |
| extensions.freeroam_bigMapMarkers.handleMouse `ge` | 4 | 110 |  |
| extensions.freeroam_bigMapMarkers.getIdsFromHoveredPoiId `ge` | 1 | 142 |  |
| extensions.freeroam_bigMapMarkers.getClusterMarker `ge` | 1 | 151 |  |
| extensions.freeroam_bigMapMarkers.setupFilter `ge` | 2 | 23 |  |
| extensions.freeroam_bigMapMarkers.hideMarkers `ge` | 0 | 170 |  |
| extensions.freeroam_bigMapMarkers.clearMarkers `ge` | 0 | 181 |  |
| extensions.freeroam_bigMapMarkers.getAllClustersBySettings `ge` | 1 | 268 |  |
| extensions.freeroam_bigMapMarkers.setNextMarkersFullAlphaInstant `ge` | 0 | 285 |  |
| extensions.freeroam_bigMapMode.setOnlyIdsVisible `ge` | 1 | 320 |  |
| extensions.freeroam_bigMapMode.clearRoutePreview `ge` | 0 | 1113 |  |
| extensions.freeroam_bigMapMode.setRoutePreview `ge` | 1 | 1115 |  |
| extensions.freeroam_bigMapMode.setRoutePreviewSimple `ge` | 2 | 1123 |  |
| extensions.freeroam_bigMapMode.setBigmapScreenBounds `ge` | 2 | 1468 |  |
| extensions.freeroam_bigMapMode.enterBigMap `ge` | 1 | 840 |  |
| extensions.freeroam_bigMapMode.exitBigMap `ge` | 3 | 878 |  |
| extensions.freeroam_bigMapMode.toggleBigMap `ge` | 0 | 940 |  |
| extensions.freeroam_bigMapMode.bigMapActive `ge` | 0 | 932 |  |
| extensions.freeroam_bigMapMode.isTransitionActive `ge` | 0 | 936 |  |
| extensions.freeroam_bigMapMode.zoom `ge` | 1 | 967 |  |
| extensions.freeroam_bigMapMode.zoomInOut `ge` | 2 | 976 |  |
| extensions.freeroam_bigMapMode.controllerZoom `ge` | 2 | 985 |  |
| extensions.freeroam_bigMapMode.navigateToMission `ge` | 1 | 1177 |  |
| extensions.freeroam_bigMapMode.selectPoi `ge` | 1 | 1212 |  |
| extensions.freeroam_bigMapMode.teleportToPoi `ge` | 1 | 1238 |  |
| extensions.freeroam_bigMapMode.closePopupCallback `ge` | 0 | 1276 |  |
| extensions.freeroam_bigMapMode.openPopupCallback `ge` | 0 | 1281 |  |
| extensions.freeroam_bigMapMode.updateMergeRadius `ge` | 1 | 1372 |  |
| extensions.freeroam_bigMapMode.deselect `ge` | 0 | 1160 |  |
| extensions.freeroam_bigMapMode.setNavFocus `ge` | 1 | 359 |  |
| extensions.freeroam_bigMapMode.getVerticalResolution `ge` | 0 | 1424 |  |
| extensions.freeroam_bigMapMode.poiHovered `ge` | 2 | 1146 |  |
| extensions.freeroam_bigMapMode.isUIPopupOpen `ge` | 0 | 1457 |  |
| extensions.freeroam_bigMapMode.enterBigMapWithCustomPOIs `ge` | 3 | 1461 |  |
| extensions.freeroam_bigMapMode.resetRoute `ge` | 0 | 347 |  |
| extensions.freeroam_bigMapMode.onClientEndMission `ge` | 1 | 1433 |  |
| extensions.freeroam_bigMapMode.onMouseButton `ge` | 1 | 1354 |  |
| extensions.freeroam_bigMapMode.onControllerSelect `ge` | 0 | 1365 |  |
| extensions.freeroam_bigMapMode.camMoveController `ge` | 2 | 1261 |  |
| extensions.freeroam_bigMapMode.camMoveKey `ge` | 2 | 1290 |  |
| extensions.freeroam_bigMapMode.onSerialize `ge` | 0 | 1381 |  |
| extensions.freeroam_bigMapMode.onDeserialized `ge` | 1 | 1398 |  |
| extensions.freeroam_bigMapMode.onMenuItemNavigation `ge` | 0 | 1204 |  |
| extensions.freeroam_bigMapMode.onChangeUiFilter `ge` | 2 | 1446 |  |
| extensions.freeroam_bigMapPoiProvider.requestMissionLocationsForMinimap `ge` | 0 | 10 |  |
| extensions.freeroam_bigMapPoiProvider.setGroupVisibility `ge` | 2 | 58 |  |
| extensions.freeroam_bigMapPoiProvider.getGroupVisibility `ge` | 1 | 63 |  |
| extensions.freeroam_bigMapPoiProvider.toggleGroupVisibility `ge` | 1 | 68 |  |
| extensions.freeroam_bigMapPoiProvider.getActiveGroupIds `ge` | 0 | 77 |  |
| extensions.freeroam_bigMapPoiProvider.getAllGroupIds `ge` | 0 | 88 |  |
| extensions.freeroam_bigMapPoiProvider.getAllActiveGroupPoiIds `ge` | 0 | 96 |  |
| extensions.freeroam_bigMapPoiProvider.resetAllGroupsToVisible `ge` | 0 | 120 |  |
| extensions.freeroam_bigMapPoiProvider.getCachedGroupData `ge` | 0 | 127 |  |
| extensions.freeroam_bigMapPoiProvider.getCachedPoiData `ge` | 0 | 135 |  |
| extensions.freeroam_bigMapPoiProvider.getCachedFilters `ge` | 0 | 143 |  |
| extensions.freeroam_bigMapPoiProvider.invalidateCache `ge` | 0 | 45 |  |
| extensions.freeroam_bigMapPoiProvider.sendMissionLocationsToMinimap `ge` | 0 | 153 |  |
| extensions.freeroam_bigMapPoiProvider.clearMissionsFromMinimap `ge` | 0 | 158 |  |
| extensions.freeroam_bigMapPoiProvider.formatPoiForBigmap `ge` | 1 | 177 | table |
| extensions.freeroam_bigMapPoiProvider.formatMissionForBigmap `ge` | 1 | 199 |  |
| extensions.freeroam_bigMapPoiProvider.sendCurrentLevelMissionsToBigmap `ge` | 0 | 642 |  |
| extensions.freeroam_bigMapPoiProvider.forceSend `ge` | 0 | 10 |  |
| extensions.freeroam_crashCamMode.onSerialize `ge` | 0 | 639 |  |
| extensions.freeroam_crashCamMode.onClientEndMission `ge` | 1 | 643 |  |
| extensions.freeroam_crashCamMode.onExtensionLoaded `ge` | 0 | 653 |  |
| extensions.freeroam_crashCamMode.onExtensionUnloaded `ge` | 0 | 657 |  |
| extensions.freeroam_crashCamMode.trackCamMode `ge` | 0 | 662 |  |
| extensions.freeroam_crashCamMode.setTrackingMode `ge` | 1 | 697 |  |
| extensions.freeroam_crashCamMode.setForcedEnabled `ge` | 1 | 705 |  |
| extensions.freeroam_crashCamMode.getTrackingMode `ge` | 0 | 701 |  |
| extensions.freeroam_crashCamModeLoader.onExtensionLoaded `ge` | 0 | 15 |  |
| extensions.freeroam_dragRace.accept `ge` | 0 | 728 |  |
| extensions.freeroam_dragRace.exit `ge` | 0 | 732 |  |
| extensions.freeroam_dragRace.onExtensionLoaded `ge` | 0 | 742 |  |
| extensions.freeroam_dragRace.onExtensionUnloaded `ge` | 0 | 859 |  |
| extensions.freeroam_dragRace.onClientEndMission `ge` | 0 | 867 |  |
| extensions.freeroam_dragRace.selectOpponent `ge` | 1 | 822 |  |
| extensions.freeroam_dragRace.selectRandomOpponent `ge` | 1 | 562 |  |
| extensions.freeroam_dragRace.setupPrestage `ge` | 0 | 158 |  |
| extensions.freeroam_dragRace.setupStage `ge` | 0 | 179 |  |
| extensions.freeroam_dragRace.resetLights `ge` | 0 | 107 |  |
| extensions.freeroam_dragRace.restartRace `ge` | 0 | 717 |  |
| extensions.freeroam_dragRace.enableCinematicCam `ge` | 1 | 808 |  |
| extensions.freeroam_dragRace.enableProTree `ge` | 1 | 815 |  |
| extensions.freeroam_dragRace.closeOverview `ge` | 0 | 298 |  |
| extensions.freeroam_dragRace.setLevel `ge` | 1 | 878 |  |
| extensions.freeroam_facilities.teleportToGarage `ge` | 3 | 261 |  |
| extensions.freeroam_facilities.zoneMarkerFormatFacility `ge` | 3 | 354 |  |
| extensions.freeroam_facilities.walkingMarkerFormatFacility `ge` | 2 | 373 |  |
| extensions.freeroam_facilities.formatFacilityToRawPoi `ge` | 2 | 411 |  |
| extensions.freeroam_facilities.getFacilities `ge` | 1 | 79 |  |
| extensions.freeroam_facilities.getFacility `ge` | 2 | 102 |  |
| extensions.freeroam_facilities.getFacilitiesByType `ge` | 2 | 118 |  |
| extensions.freeroam_facilities.getGarage `ge` | 1 | 131 |  |
| extensions.freeroam_facilities.getGasStation `ge` | 1 | 132 |  |
| extensions.freeroam_facilities.getDealership `ge` | 1 | 133 |  |
| extensions.freeroam_facilities.getAverageDoorPositionForFacility `ge` | 1 | 136 |  |
| extensions.freeroam_facilities.getClosestDoorPositionForFacility `ge` | 1 | 157 |  |
| extensions.freeroam_facilities.getParkingSpotsForFacility `ge` | 1 | 180 |  |
| extensions.freeroam_facilities.getZonesForFacility `ge` | 1 | 215 |  |
| extensions.freeroam_facilities.getGaragePosRot `ge` | 2 | 249 | multiple |
| extensions.freeroam_facilities_fuelPrice.onSerialize `ge` | 0 | 122 |  |
| extensions.freeroam_facilities_fuelPrice.onDeserialized `ge` | 1 | 130 |  |
| extensions.freeroam_facilities_fuelPrice.setDisplayPrices `ge` | 0 | 29 | boolean |
| extensions.freeroam_facilities_fuelPrice.getFuelPrice `ge` | 2 | 99 |  |
| extensions.freeroam_facilities_fuelPrice.restoreSign `ge` | 1 | 141 |  |
| extensions.freeroam_freeroam.resetSpawningOptions `ge` | 0 | 31 |  |
| extensions.freeroam_freeroam.startFreeroam `ge` | 5 | 83 |  |
| extensions.freeroam_freeroam.startFreeroamByName `ge` | 5 | 111 | boolean |
| extensions.freeroam_freeroam.onClientEndMission `ge` | 1 | 248 |  |
| extensions.freeroam_freeroam.startTrackBuilder `ge` | 2 | 284 |  |
| extensions.freeroam_freeroamConfigurator.getConfiguration `ge` | 0 | 219 | table |
| extensions.freeroam_freeroamConfigurator.getButtons `ge` | 0 | 263 |  |
| extensions.freeroam_freeroamConfigurator.triggerButton `ge` | 1+ | 286 |  |
| extensions.freeroam_freeroamConfigurator.doubleClickOverride `ge` | 1 | 296 |  |
| extensions.freeroam_freeroamConfigurator.updateOption `ge` | 2 | 302 |  |
| extensions.freeroam_freeroamConfigurator.setSpawnPoint `ge` | 3 | 309 |  |
| extensions.freeroam_freeroamConfigurator.validateFiles `ge` | 1 | 326 | boolean |
| extensions.freeroam_freeroamConfigurator.getCurrentSpawnPointTile `ge` | 0 | 346 |  |
| extensions.freeroam_freeroamConfigurator.getCurrentVehicleTile `ge` | 0 | 393 |  |
| extensions.freeroam_freeroamConfigurator.setVehicle `ge` | 4 | 441 |  |
| extensions.freeroam_freeroamConfigurator.getCurrentVehicle `ge` | 0 | 459 |  |
| extensions.freeroam_freeroamConfigurator.onSpawnPointTileClick `ge` | 0 | 464 |  |
| extensions.freeroam_freeroamConfigurator.onVehicleTileClick `ge` | 0 | 472 |  |
| extensions.freeroam_freeroamConfigurator.onSerialize `ge` | 0 | 480 |  |
| extensions.freeroam_freeroamConfigurator.onDeserialized `ge` | 1 | 487 |  |
| extensions.freeroam_freeroamConfigurator.startFreeroam `ge` | 1 | 493 |  |
| extensions.freeroam_gasStations.gasStationCenterRadius `ge` | 1 | 29 | multiple |
| extensions.freeroam_gasStations.formatGasStationPoi `ge` | 1 | 52 |  |
| extensions.freeroam_gasStations.refuelCar `ge` | 3 | 121 |  |
| extensions.freeroam_organizations.getOrganizations `ge` | 0 | 15 |  |
| extensions.freeroam_organizations.getOrganization `ge` | 1 | 36 |  |
| extensions.freeroam_organizations.getOrganizationIdOrderAndIcon `ge` | 1 | 47 | multiple |
| extensions.freeroam_organizations.getUIData `ge` | 0 | 87 |  |
| extensions.freeroam_organizations.getUIDataForOrg `ge` | 1 | 70 |  |
| extensions.freeroam_specialTriggers.reset `ge` | 1 | 170 |  |
| extensions.freeroam_specialTriggers.loadTriggers `ge` | 1 | 195 |  |
| extensions.freeroam_specialTriggers.setupTriggers `ge` | 1 | 184 |  |
| extensions.freeroam_specialTriggers.addTrigger `ge` | 2 | 109 |  |
| extensions.freeroam_specialTriggers.removeTrigger `ge` | 2 | 155 |  |
| extensions.freeroam_specialTriggers.getTriggers `ge` | 0 | 206 |  |
| extensions.freeroam_specialTriggers.setTriggerActive `ge` | 3 | 313 |  |
| extensions.freeroam_specialTriggers.onClientEndMission `ge` | 0 | 399 |  |
| extensions.freeroam_specialTriggers.onSerialize `ge` | 0 | 518 | table |
| extensions.freeroam_specialTriggers.onDeserialized `ge` | 1 | 525 |  |
| extensions.freeroam_vueBigMap.enterBigMap `ge` | 0 | 615 |  |
| extensions.freeroam_vueBigMap.exitBigMap `ge` | 0 | 629 |  |
| extensions.freeroam_vueBigMap.getPoiData `ge` | 0 | 642 |  |
| extensions.freeroam_vueBigMap.getFilters `ge` | 0 | 649 |  |
| extensions.freeroam_vueBigMap.getGroups `ge` | 0 | 661 |  |
| extensions.freeroam_vueBigMap.toggleFiltersByIds `ge` | 1 | 84 |  |
| extensions.freeroam_vueBigMap.toggleFilterSectionById `ge` | 1 | 91 |  |
| extensions.freeroam_vueBigMap.getGameStateInfo `ge` | 0 | 705 |  |
| extensions.freeroam_vueBigMap.selectPoiFromList `ge` | 1 | 728 | string |
| extensions.freeroam_vueBigMap.hoverPoiFromList `ge` | 2 | 753 | string |
| extensions.freeroam_vueBigMap.executePoiAction `ge` | 1 | 760 |  |
| extensions.freeroam_vueBigMap.setVisibleIds `ge` | 0 | 712 |  |
| extensions.freeroam_vueBigMap.getFreeActionId `ge` | 0 | 119 |  |
| extensions.freeroam_vueBigMap.clearActionFunctions `ge` | 0 | 125 |  |
| extensions.freeroam_vueBigMap.addAction `ge` | 2 | 130 |  |
| extensions.freeroam_vueBigMap.executeAction `ge` | 1 | 140 |  |
| extensions.gameplay_achievement.onExtensionLoaded `ge` | 0 | 8 |  |
| extensions.gameplay_achievement.statCallback `ge` | 3 | 24 |  |
| extensions.gameplay_backgroundActivities_g2g.activateFinished `ge` | 0 | 30 |  |
| extensions.gameplay_backgroundActivities_g2g.getVehicleOptions `ge` | 0 | 89 |  |
| extensions.gameplay_backgroundActivities_g2g.activate `ge` | 0 | 13 |  |
| extensions.gameplay_backgroundActivities_g2g.deactivate `ge` | 0 | 35 |  |
| extensions.gameplay_backgroundActivities_g2g.toggleActive `ge` | 0 | 50 |  |
| extensions.gameplay_backgroundActivities_g2g.isActive `ge` | 0 | 70 |  |
| extensions.gameplay_backgroundActivities_g2g.onClientEndMission `ge` | 0 | 62 |  |
| extensions.gameplay_backgroundActivities_g2g.onSerialize `ge` | 0 | 74 |  |
| extensions.gameplay_backgroundActivities_g2g.onDeserialized `ge` | 0 | 78 |  |
| extensions.gameplay_city.reset `ge` | 0 | 116 |  |
| extensions.gameplay_city.loadSites `ge` | 1 | 97 |  |
| extensions.gameplay_city.getSites `ge` | 0 | 112 |  |
| extensions.gameplay_city.getZonesByPrioForPosition `ge` | 1 | 13 | multiple |
| extensions.gameplay_city.getHighestPrioZone `ge` | 1 | 30 |  |
| extensions.gameplay_city.getMergedFieldsFromZones `ge` | 2 | 47 | table |
| extensions.gameplay_city.getRandomParkingSpots `ge` | 2 | 61 | multiple |
| extensions.gameplay_city.onClientEndMission `ge` | 1 | 124 |  |
| extensions.gameplay_crashTest_crashTestBoundaries.setParameters `ge` | 1 | 16 |  |
| extensions.gameplay_crashTest_crashTestBoundaries.setDebug `ge` | 1 | 75 |  |
| extensions.gameplay_crashTest_crashTestBoundaries.onNewCrashTestStep `ge` | 1 | 92 |  |
| extensions.gameplay_crashTest_crashTestBoundaries.deactivateBounds `ge` | 0 | 96 |  |
| extensions.gameplay_crashTest_crashTestCountdown.startNewCountdown `ge` | 2 | 11 |  |
| extensions.gameplay_crashTest_crashTestScoring.calculateIndividualDamageScore `ge` | 3 | 64 |  |
| extensions.gameplay_crashTest_crashTestScoring.calculateDamageLocationScore `ge` | 2 | 55 | table |
| extensions.gameplay_crashTest_crashTestScoring.calculateStepScore `ge` | 2 | 117 |  |
| extensions.gameplay_crashTest_crashTestScoring.getTotalScoreData `ge` | 0 | 137 |  |
| extensions.gameplay_crashTest_crashTestScoring.getStepScoreData `ge` | 1 | 148 |  |
| extensions.gameplay_crashTest_crashTestScoring.reset `ge` | 0 | 152 |  |
| extensions.gameplay_crashTest_crashTestTaskList.onExtensionUnloaded `ge` | 0 | 148 |  |
| extensions.gameplay_crashTest_crashTestTaskList.onCrashTestStepFailed `ge` | 1 | 118 |  |
| extensions.gameplay_crashTest_crashTestTaskList.finishedCurrentTask `ge` | 1 | 134 |  |
| extensions.gameplay_crashTest_crashTestTaskList.onNewCrashTestStep `ge` | 1 | 104 |  |
| extensions.gameplay_crashTest_crashTestTaskList.setCrashTestDataAndInit `ge` | 1 | 97 |  |
| extensions.gameplay_crashTest_crashTestTaskList.reset `ge` | 0 | 152 |  |
| extensions.gameplay_crashTest_scenarioManager.onExtensionUnloaded `ge` | 1 | 743 |  |
| extensions.gameplay_crashTest_scenarioManager.onPlayerOutOfBounds `ge` | 0 | 749 |  |
| extensions.gameplay_crashTest_scenarioManager.startScenario `ge` | 0 | 466 |  |
| extensions.gameplay_crashTest_scenarioManager.goToNextStepFromUI `ge` | 0 | 757 |  |
| extensions.gameplay_crashTest_scenarioManager.startStepFromUI `ge` | 0 | 761 |  |
| extensions.gameplay_crashTest_scenarioManager.processData `ge` | 2 | 203 |  |
| extensions.gameplay_crashTest_scenarioManager.reset `ge` | 0 | 318 |  |
| extensions.gameplay_crashTest_scenarioManager.activatesAllVehForReset `ge` | 0 | 753 |  |
| extensions.gameplay_crashTest_scenarioManager.getCrashTestData `ge` | 0 | 769 |  |
| extensions.gameplay_crashTest_scenarioManager.setDebug `ge` | 1 | 792 |  |
| extensions.gameplay_crashTest_scenarioManager.clearMarkers `ge` | 0 | 572 |  |
| extensions.gameplay_crashTest_scenarioManager.trackVehiclesForCrash `ge` | 0 | 342 |  |
| extensions.gameplay_crawl_boundary.spawnBoundaryMarkers `ge` | 2 | 172 |  |
| extensions.gameplay_crawl_boundary.cleanupBoundaryMarkers `ge` | 0 | 274 |  |
| extensions.gameplay_crawl_boundary.checkBoundary `ge` | 3 | 286 | boolean |
| extensions.gameplay_crawl_boundary.updateBoundaryAnimations `ge` | 1 | 58 |  |
| extensions.gameplay_crawl_boundary.resetBoundaryObjects `ge` | 0 | 157 |  |
| extensions.gameplay_crawl_boundary.setVisibilityRadius `ge` | 1 | 401 |  |
| extensions.gameplay_crawl_boundary.setAnimationTiming `ge` | 4 | 407 |  |
| extensions.gameplay_crawl_boundary.rebuildQuadtree `ge` | 0 | 418 |  |
| extensions.gameplay_crawl_boundary.getQuadtreeStats `ge` | 0 | 423 | table |
| extensions.gameplay_crawl_boundary.triggerAppearingAnimation `ge` | 0 | 436 |  |
| extensions.gameplay_crawl_boundary.clearCrawlerExitPoint `ge` | 1 | 385 |  |
| extensions.gameplay_crawl_boundary.clearAllExitPoints `ge` | 0 | 394 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.loadCrawlTrail `ge` | 1 | 16 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.configureCrawl `ge` | 1 | 32 | boolean |
| extensions.gameplay_crawl_crawlFlowgraphBridge.startCrawl `ge` | 1 | 59 | boolean |
| extensions.gameplay_crawl_crawlFlowgraphBridge.stopCrawl `ge` | 0 | 86 | boolean |
| extensions.gameplay_crawl_crawlFlowgraphBridge.resetCrawl `ge` | 0 | 102 | boolean |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getCrawlEndData `ge` | 0 | 151 | table |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getCrawlRuntimeData `ge` | 0 | 171 | table |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getTrailInfo `ge` | 1 | 193 | table |
| extensions.gameplay_crawl_crawlFlowgraphBridge.isCrawlActive `ge` | 0 | 219 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getActiveCrawlerId `ge` | 0 | 223 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getAllTrails `ge` | 0 | 227 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getAllStartingPositions `ge` | 0 | 231 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getPlayerTrailStats `ge` | 1 | 235 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getDynamicObjectsFromPrefab `ge` | 2 | 239 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.applyPenalty `ge` | 1 | 243 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getPenaltyTypes `ge` | 0 | 267 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.getLastRecoveryCheckpointIndex `ge` | 0 | 271 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.setRecoveryCheckpoint `ge` | 1 | 279 |  |
| extensions.gameplay_crawl_crawlFlowgraphBridge.cleanup `ge` | 0 | 303 |  |
| extensions.gameplay_crawl_debug.setEnableDebugWindow `ge` | 1 | 339 |  |
| extensions.gameplay_crawl_debug.getEnableDebugWindow `ge` | 0 | 348 |  |
| extensions.gameplay_crawl_debug.clearDebugData `ge` | 0 | 352 |  |
| extensions.gameplay_crawl_debug.onCrawlComplete `ge` | 1 | 293 |  |
| extensions.gameplay_crawl_debug.onCrawlDisqualified `ge` | 1 | 300 |  |
| extensions.gameplay_crawl_debug.onExtensionLoaded `ge` | 0 | 308 |  |
| extensions.gameplay_crawl_debug.onExtensionUnloaded `ge` | 0 | 314 |  |
| extensions.gameplay_crawl_display.onExtensionLoaded `ge` | 0 | 32 |  |
| extensions.gameplay_crawl_display.onExtensionUnloaded `ge` | 0 | 36 |  |
| extensions.gameplay_crawl_display.onCrawlComplete `ge` | 0 | 24 |  |
| extensions.gameplay_crawl_display.showPointsMessage `ge` | 1 | 40 |  |
| extensions.gameplay_crawl_display.clearPointsMessage `ge` | 0 | 44 |  |
| extensions.gameplay_crawl_display.showCrawlCompletedMessage `ge` | 2 | 48 |  |
| extensions.gameplay_crawl_display.showSkippedCheckpointsMessage `ge` | 1 | 53 |  |
| extensions.gameplay_crawl_display.showGateReachedMessage `ge` | 0 | 57 |  |
| extensions.gameplay_crawl_display.showStartedCrawlMessage `ge` | 0 | 61 |  |
| extensions.gameplay_crawl_display.showDrivingBackwardsMessage `ge` | 0 | 69 |  |
| extensions.gameplay_crawl_display.showVehicleFlippedUprightMessage `ge` | 0 | 73 |  |
| extensions.gameplay_crawl_display.showVehicleResetMessage `ge` | 0 | 77 |  |
| extensions.gameplay_crawl_display.showBoundaryViolationMessage `ge` | 0 | 81 |  |
| extensions.gameplay_crawl_display.showBonusCheckpointMessage `ge` | 1 | 85 |  |
| extensions.gameplay_crawl_display.showGateClearedMessage `ge` | 1 | 89 |  |
| extensions.gameplay_crawl_display.showDNFMessage `ge` | 0 | 93 |  |
| extensions.gameplay_crawl_flowgraphBridge.loadCrawlTrail `ge` | 1 | 21 |  |
| extensions.gameplay_crawl_flowgraphBridge.setupCrawl `ge` | 2 | 36 |  |
| extensions.gameplay_crawl_flowgraphBridge.startCrawl `ge` | 2 | 66 |  |
| extensions.gameplay_crawl_flowgraphBridge.stopCrawl `ge` | 0 | 112 | boolean |
| extensions.gameplay_crawl_flowgraphBridge.resetCrawl `ge` | 0 | 121 | boolean |
| extensions.gameplay_crawl_flowgraphBridge.getCrawlEndData `ge` | 0 | 160 | table |
| extensions.gameplay_crawl_flowgraphBridge.getCrawlRuntimeData `ge` | 0 | 182 | table |
| extensions.gameplay_crawl_flowgraphBridge.getTrailInfo `ge` | 1 | 205 | table |
| extensions.gameplay_crawl_flowgraphBridge.isCrawlActive `ge` | 0 | 231 |  |
| extensions.gameplay_crawl_flowgraphBridge.getActiveCrawlerId `ge` | 0 | 235 |  |
| extensions.gameplay_crawl_flowgraphBridge.getAllTrails `ge` | 0 | 239 |  |
| extensions.gameplay_crawl_flowgraphBridge.getAllStartingPositions `ge` | 0 | 243 |  |
| extensions.gameplay_crawl_flowgraphBridge.getPlayerTrailStats `ge` | 1 | 247 |  |
| extensions.gameplay_crawl_flowgraphBridge.getDynamicObjectsFromPrefab `ge` | 2 | 251 |  |
| extensions.gameplay_crawl_flowgraphBridge.applyPenalty `ge` | 1 | 255 |  |
| extensions.gameplay_crawl_flowgraphBridge.getPenaltyTypes `ge` | 0 | 280 |  |
| extensions.gameplay_crawl_flowgraphBridge.getLastRecoveryCheckpoint `ge` | 0 | 284 |  |
| extensions.gameplay_crawl_flowgraphBridge.getLastRecoveryCheckpointIndex `ge` | 0 | 293 |  |
| extensions.gameplay_crawl_flowgraphBridge.setRecoveryCheckpoint `ge` | 1 | 302 |  |
| extensions.gameplay_crawl_flowgraphBridge.cleanup `ge` | 0 | 324 |  |
| extensions.gameplay_crawl_general.clear `ge` | 1 | 14 |  |
| extensions.gameplay_crawl_general.onExtensionLoaded `ge` | 0 | 361 |  |
| extensions.gameplay_crawl_general.onSerialize `ge` | 0 | 366 |  |
| extensions.gameplay_crawl_general.startCrawlFreeroam `ge` | 2 | 95 |  |
| extensions.gameplay_crawl_general.startCrawlFlowgraph `ge` | 2 | 122 |  |
| extensions.gameplay_crawl_general.setupCrawl `ge` | 3 | 25 | boolean |
| extensions.gameplay_crawl_saveSystem.getCurrentLevelCrawlPath `ge` | 0 | 20 | string |
| extensions.gameplay_crawl_saveSystem.clearCache `ge` | 1 | 67 |  |
| extensions.gameplay_crawl_saveSystem.saveTrail `ge` | 2 | 287 |  |
| extensions.gameplay_crawl_saveSystem.saveBoundary `ge` | 2 | 322 |  |
| extensions.gameplay_crawl_saveSystem.savePath `ge` | 2 | 357 |  |
| extensions.gameplay_crawl_saveSystem.saveStartingPosition `ge` | 2 | 392 |  |
| extensions.gameplay_crawl_saveSystem.loadCrawlData `ge` | 1 | 428 |  |
| extensions.gameplay_crawl_saveSystem.saveCrawlData `ge` | 2 | 469 |  |
| extensions.gameplay_crawl_saveSystem.getTrailById `ge` | 1 | 557 |  |
| extensions.gameplay_crawl_saveSystem.getBoundaryById `ge` | 1 | 566 |  |
| extensions.gameplay_crawl_saveSystem.getPathById `ge` | 1 | 575 |  |
| extensions.gameplay_crawl_saveSystem.getStartingPositionById `ge` | 2 | 584 |  |
| extensions.gameplay_crawl_saveSystem.getAllTrailFiles `ge` | 1 | 614 |  |
| extensions.gameplay_crawl_saveSystem.getAllBoundaryFiles `ge` | 1 | 618 |  |
| extensions.gameplay_crawl_saveSystem.getAllPathFiles `ge` | 1 | 622 |  |
| extensions.gameplay_crawl_saveSystem.getAllStartingPositionFiles `ge` | 1 | 626 |  |
| extensions.gameplay_crawl_saveSystem.cleanup `ge` | 0 | 837 |  |
| extensions.gameplay_crawl_saveSystem.savePlayerCrawlTrailScoresForTrailById `ge` | 1 | 710 |  |
| extensions.gameplay_crawl_saveSystem.getPlayerCrawlTrailById `ge` | 1 | 720 |  |
| extensions.gameplay_crawl_saveSystem.getPlayerCrawlTrailsById `ge` | 0 | 724 |  |
| extensions.gameplay_crawl_saveSystem.addNewPlayerScore `ge` | 3 | 771 | table |
| extensions.gameplay_crawl_saveSystem.resetPlayerTrailScores `ge` | 1 | 812 |  |
| extensions.gameplay_crawl_saveSystem.getPlayerTrailStats `ge` | 1 | 824 |  |
| extensions.gameplay_crawl_saveSystem.ensurePlayerSaveDirectories `ge` | 0 | 684 |  |
| extensions.gameplay_crawl_saveSystem.isTrailFromMission `ge` | 1 | 854 |  |
| extensions.gameplay_crawl_utils.startCrawl `ge` | 4 | 710 |  |
| extensions.gameplay_crawl_utils.stopCrawl `ge` | 1 | 682 |  |
| extensions.gameplay_crawl_utils.resetCrawlData `ge` | 2 | 778 | boolean |
| extensions.gameplay_crawl_utils.resumeCrawlTimer `ge` | 1 | 1282 | boolean |
| extensions.gameplay_crawl_utils.updateCrawl `ge` | 1 | 1126 |  |
| extensions.gameplay_crawl_utils.drawMarkers `ge` | 3 | 1185 |  |
| extensions.gameplay_crawl_utils.clearMarkers `ge` | 0 | 151 |  |
| extensions.gameplay_crawl_utils.clear `ge` | 1 | 168 |  |
| extensions.gameplay_crawl_utils.clearCrawler `ge` | 1 | 161 |  |
| extensions.gameplay_crawl_utils.loadPrefabs `ge` | 1 | 124 |  |
| extensions.gameplay_crawl_utils.unloadPrefabs `ge` | 0 | 85 |  |
| extensions.gameplay_crawl_utils.setupCrawlerData `ge` | 1 | 904 |  |
| extensions.gameplay_crawl_utils.onVehicleReset `ge` | 1 | 1066 |  |
| extensions.gameplay_crawl_utils.onBoundaryViolation `ge` | 1 | 1109 |  |
| extensions.gameplay_crawl_utils.calculatePathStats `ge` | 2 | 1217 |  |
| extensions.gameplay_crawl_utils.setupCrawlMarkers `ge` | 1 | 216 |  |
| extensions.gameplay_crawl_utils.activateCrawlMarkers `ge` | 0 | 309 |  |
| extensions.gameplay_crawl_utils.getDynamicObjectsFromPrefab `ge` | 2 | 99 |  |
| extensions.gameplay_crawl_utils.getCrawlState `ge` | 1 | 1328 |  |
| extensions.gameplay_crawl_utils.getCrawlerPosition `ge` | 1 | 1332 |  |
| extensions.gameplay_crawl_utils.getCrawlerDirection `ge` | 1 | 1336 | quat |
| extensions.gameplay_crawl_utils.setCrawlState `ge` | 2 | 1352 | boolean |
| extensions.gameplay_crawl_utils.getAllCrawlStates `ge` | 0 | 1360 |  |
| extensions.gameplay_crawl_utils.getActiveCrawlerId `ge` | 0 | 1364 |  |
| extensions.gameplay_crawl_utils.isPreviewMode `ge` | 0 | 1373 |  |
| extensions.gameplay_crawl_utils.getDottedPath `ge` | 0 | 1377 |  |
| extensions.gameplay_crawl_utils.getLastRecoveryCheckpoint `ge` | 1 | 1381 |  |
| extensions.gameplay_crawl_utils.getLastRecoveryCheckpointIndex `ge` | 1 | 1394 |  |
| extensions.gameplay_crawl_utils.setRecoveryCheckpoint `ge` | 2 | 1407 | boolean |
| extensions.gameplay_crawl_utils.applyPenalty `ge` | 3 | 56 |  |
| extensions.gameplay_discover.loadDiscovers `ge` | 0 | 16 |  |
| extensions.gameplay_discover.clearTasksOnClientEndMission `ge` | 0 | 96 |  |
| extensions.gameplay_discover.onClientEndMission `ge` | 0 | 100 |  |
| extensions.gameplay_discover.basicControlsIntroPopup `ge` | 0 | 120 |  |
| extensions.gameplay_discover.introPopup `ge` | 1 | 149 |  |
| extensions.gameplay_discover.getDiscoverPages `ge` | 0 | 51 |  |
| extensions.gameplay_discover.startDiscover `ge` | 1 | 72 |  |
| extensions.gameplay_drag_debug.setDebugMenu `ge` | 1 | 212 |  |
| extensions.gameplay_drag_debug.getDebugMenu `ge` | 0 | 216 |  |
| extensions.gameplay_drag_debug.setSelectedVehicle `ge` | 1 | 220 |  |
| extensions.gameplay_drag_debug.getSelectedVehicle `ge` | 0 | 224 |  |
| extensions.gameplay_drag_debug.setAviableLanes `ge` | 1 | 228 |  |
| extensions.gameplay_drag_debug.getAviableLanes `ge` | 0 | 232 |  |
| extensions.gameplay_drag_debug.drawDebugMenu `ge` | 2 | 38 |  |
| extensions.gameplay_drag_debug.getSelection `ge` | 1 | 17 |  |
| extensions.gameplay_drag_debug.selectElement `ge` | 1 | 28 |  |
| extensions.gameplay_drag_debug.getLastElement `ge` | 1 | 32 |  |
| extensions.gameplay_drag_display.preStageLightOn `ge` | 1 | 648 |  |
| extensions.gameplay_drag_display.preStageLightOff `ge` | 1 | 682 |  |
| extensions.gameplay_drag_display.stageLightOn `ge` | 1 | 707 |  |
| extensions.gameplay_drag_display.stageLightOff `ge` | 1 | 736 |  |
| extensions.gameplay_drag_display.clearAll `ge` | 0 | 283 |  |
| extensions.gameplay_drag_display.onExtensionLoaded `ge` | 0 | 289 |  |
| extensions.gameplay_drag_dragBridge.loadDragStrip `ge` | 1 | 11 |  |
| extensions.gameplay_drag_dragBridge.configureDragStrip `ge` | 1 | 33 |  |
| extensions.gameplay_drag_dragBridge.startDragRace `ge` | 2 | 38 |  |
| extensions.gameplay_drag_dragBridge.stopDragRace `ge` | 0 | 47 | boolean |
| extensions.gameplay_drag_dragBridge.resetDragRace `ge` | 0 | 52 | boolean |
| extensions.gameplay_drag_dragBridge.getDragRaceData `ge` | 0 | 59 | table |
| extensions.gameplay_drag_dragBridge.getDragRaceRuntimeData `ge` | 0 | 82 | table |
| extensions.gameplay_drag_dragBridge.getDragStripInfo `ge` | 1 | 108 |  |
| extensions.gameplay_drag_dragBridge.isDragRaceActive `ge` | 0 | 132 |  |
| extensions.gameplay_drag_dragBridge.getActiveRacerId `ge` | 0 | 136 |  |
| extensions.gameplay_drag_dragBridge.getAllDragStrips `ge` | 0 | 145 |  |
| extensions.gameplay_drag_dragBridge.getPlayerDragTimes `ge` | 1 | 149 |  |
| extensions.gameplay_drag_dragBridge.savePlayerDragTimes `ge` | 2 | 153 |  |
| extensions.gameplay_drag_dragBridge.generateOpponentsGroup `ge` | 5 | 197 |  |
| extensions.gameplay_drag_dragBridge.setupRacer `ge` | 2 | 256 |  |
| extensions.gameplay_drag_dragBridge.setVehicles `ge` | 1 | 260 |  |
| extensions.gameplay_drag_dragBridge.getTimers `ge` | 1 | 280 | table |
| extensions.gameplay_drag_dragBridge.getData `ge` | 0 | 287 |  |
| extensions.gameplay_drag_dragBridge.getRacerData `ge` | 1 | 291 | table |
| extensions.gameplay_drag_dragBridge.loadDragDataForMission `ge` | 1 | 297 |  |
| extensions.gameplay_drag_dragBridge.startDragRaceActivity `ge` | 1 | 324 |  |
| extensions.gameplay_drag_dragBridge.clearRacers `ge` | 0 | 328 |  |
| extensions.gameplay_drag_dragBridge.setRacerDial `ge` | 2 | 332 |  |
| extensions.gameplay_drag_dragBridge.setRacersDial `ge` | 1 | 336 |  |
| extensions.gameplay_drag_dragBridge.unloadRace `ge` | 0 | 340 |  |
| extensions.gameplay_drag_dragBridge.getDialTimes `ge` | 0 | 344 |  |
| extensions.gameplay_drag_dragBridge.generateHashFromFile `ge` | 1 | 349 |  |
| extensions.gameplay_drag_dragBridge.getDragIsStarted `ge` | 0 | 358 |  |
| extensions.gameplay_drag_dragBridge.getWinnersData `ge` | 0 | 364 |  |
| extensions.gameplay_drag_dragBridge.createTimeslipData `ge` | 0 | 368 |  |
| extensions.gameplay_drag_dragBridge.sendTimeslipDataToUi `ge` | 0 | 372 |  |
| extensions.gameplay_drag_dragBridge.screenshotTimeslip `ge` | 0 | 376 |  |
| extensions.gameplay_drag_dragBridge.clearTimeslip `ge` | 0 | 380 |  |
| extensions.gameplay_drag_dragBridge.getHistory `ge` | 1 | 384 |  |
| extensions.gameplay_drag_dragBridge.openHistoryScreen `ge` | 1 | 393 |  |
| extensions.gameplay_drag_dragBridge.onMenuClosed `ge` | 0 | 401 |  |
| extensions.gameplay_drag_dragBridge.closeMenu `ge` | 0 | 405 |  |
| extensions.gameplay_drag_dragBridge.cleanup `ge` | 0 | 409 |  |
| extensions.gameplay_drag_dragTypes_bracketRace.onExtensionLoaded `ge` | 0 | 24 |  |
| extensions.gameplay_drag_dragTypes_bracketRace.startDebugPhase `ge` | 2 | 59 |  |
| extensions.gameplay_drag_dragTypes_bracketRace.startActivity `ge` | 0 | 38 |  |
| extensions.gameplay_drag_dragTypes_bracketRace.resetDragRace `ge` | 0 | 31 |  |
| extensions.gameplay_drag_dragTypes_dragPracticeRace.onExtensionLoaded `ge` | 0 | 25 |  |
| extensions.gameplay_drag_dragTypes_dragPracticeRace.startActivity `ge` | 0 | 42 |  |
| extensions.gameplay_drag_dragTypes_dragPracticeRace.resetDragRace `ge` | 0 | 31 |  |
| extensions.gameplay_drag_dragTypes_dragPracticeRace.jumpDescualifiedDrag `ge` | 0 | 155 |  |
| extensions.gameplay_drag_dragTypes_headsUpDrag.onExtensionLoaded `ge` | 0 | 24 |  |
| extensions.gameplay_drag_dragTypes_headsUpDrag.startDebugPhase `ge` | 2 | 60 |  |
| extensions.gameplay_drag_dragTypes_headsUpDrag.startActivity `ge` | 0 | 39 |  |
| extensions.gameplay_drag_dragTypes_headsUpDrag.resetDragRace `ge` | 0 | 31 |  |
| extensions.gameplay_drag_general.onExtensionLoaded `ge` | 0 | 572 |  |
| extensions.gameplay_drag_general.loadDragStripData `ge` | 1 | 159 |  |
| extensions.gameplay_drag_general.setDragRaceData `ge` | 1 | 348 |  |
| extensions.gameplay_drag_general.setupRacer `ge` | 2 | 181 |  |
| extensions.gameplay_drag_general.setPlayableVehicle `ge` | 1 | 448 |  |
| extensions.gameplay_drag_general.setRacerDial `ge` | 2 | 407 | boolean |
| extensions.gameplay_drag_general.setRacersDial `ge` | 1 | 428 |  |
| extensions.gameplay_drag_general.clearRacers `ge` | 0 | 399 |  |
| extensions.gameplay_drag_general.resetDragRace `ge` | 0 | 365 |  |
| extensions.gameplay_drag_general.clearDragData `ge` | 0 | 142 |  |
| extensions.gameplay_drag_general.startDragRaceActivity `ge` | 1 | 470 | boolean |
| extensions.gameplay_drag_general.getDragIsStarted `ge` | 0 | 535 |  |
| extensions.gameplay_drag_general.getGameplayContext `ge` | 0 | 540 |  |
| extensions.gameplay_drag_general.getData `ge` | 0 | 528 |  |
| extensions.gameplay_drag_general.getRacerData `ge` | 1 | 458 |  |
| extensions.gameplay_drag_general.getTimers `ge` | 1 | 453 |  |
| extensions.gameplay_drag_general.getCurrentSavePath `ge` | 0 | 584 |  |
| extensions.gameplay_drag_general.saveDialTimes `ge` | 1 | 588 |  |
| extensions.gameplay_drag_general.saveDialFile `ge` | 1 | 594 |  |
| extensions.gameplay_drag_general.setCareerRewrads `ge` | 0 | 612 |  |
| extensions.gameplay_drag_general.clearTimeslip `ge` | 0 | 630 |  |
| extensions.gameplay_drag_general.createTimeslipData `ge` | 0 | 634 |  |
| extensions.gameplay_drag_general.createTimeslipPanelData `ge` | 0 | 698 |  |
| extensions.gameplay_drag_general.sendTimeslipDataToUi `ge` | 0 | 731 |  |
| extensions.gameplay_drag_general.screenshotTimeslip `ge` | 0 | 744 |  |
| extensions.gameplay_drag_general.drawDebugMenu `ge` | 0 | 750 |  |
| extensions.gameplay_drag_general.setDebugMenu `ge` | 1 | 754 |  |
| extensions.gameplay_drag_general.getDebugMenu `ge` | 0 | 758 |  |
| extensions.gameplay_drag_general.getExtension `ge` | 0 | 762 |  |
| extensions.gameplay_drag_general.setExtension `ge` | 1 | 766 |  |
| extensions.gameplay_drag_general._getDragData `ge` | 0 | 898 |  |
| extensions.gameplay_drag_general._setDragData `ge` | 1 | 902 |  |
| extensions.gameplay_drag_general._getGameplayContext `ge` | 0 | 906 |  |
| extensions.gameplay_drag_general._setGameplayContext `ge` | 1 | 910 |  |
| extensions.gameplay_drag_general._getDragExtension `ge` | 0 | 914 |  |
| extensions.gameplay_drag_general._setDragExtension `ge` | 1 | 918 |  |
| extensions.gameplay_drag_general._loadDragStripData `ge` | 1 | 159 |  |
| extensions.gameplay_drag_general._loadPrefabs `ge` | 1 | 168 |  |
| extensions.gameplay_drag_general._clear `ge` | 0 | 142 |  |
| extensions.gameplay_drag_general._setupRacer `ge` | 2 | 181 |  |
| extensions.gameplay_drag_general.getDragDataForLevel `ge` | 1 | 771 |  |
| extensions.gameplay_drag_saveSystem.getCurrentLevelDragPath `ge` | 0 | 9 | string |
| extensions.gameplay_drag_saveSystem.createMissionData `ge` | 7 | 20 | table |
| extensions.gameplay_drag_saveSystem.loadCompleteDragRaceData `ge` | 1 | 36 |  |
| extensions.gameplay_drag_saveSystem.loadDragStripData `ge` | 1 | 167 |  |
| extensions.gameplay_drag_saveSystem.convertLegacyData `ge` | 1 | 200 |  |
| extensions.gameplay_drag_saveSystem.saveDialTimes `ge` | 2 | 258 |  |
| extensions.gameplay_drag_saveSystem.getDialTimes `ge` | 0 | 319 |  |
| extensions.gameplay_drag_saveSystem.generateHashFromFile `ge` | 1 | 332 | string |
| extensions.gameplay_drag_saveSystem.getCurrentSavePath `ge` | 0 | 371 |  |
| extensions.gameplay_drag_saveSystem.saveDialFile `ge` | 1 | 376 |  |
| extensions.gameplay_drag_saveSystem.getHistory `ge` | 1 | 394 |  |
| extensions.gameplay_drag_saveSystem.getAllFacilities `ge` | 0 | 529 |  |
| extensions.gameplay_drag_saveSystem.getAllStrips `ge` | 0 | 545 |  |
| extensions.gameplay_drag_saveSystem.getAllLanes `ge` | 0 | 561 |  |
| extensions.gameplay_drag_saveSystem.getAllWaypoints `ge` | 0 | 576 |  |
| extensions.gameplay_drag_saveSystem.saveFacility `ge` | 2 | 591 |  |
| extensions.gameplay_drag_saveSystem.saveStrip `ge` | 2 | 595 |  |
| extensions.gameplay_drag_saveSystem.saveLane `ge` | 2 | 599 |  |
| extensions.gameplay_drag_saveSystem.saveWaypoint `ge` | 2 | 603 |  |
| extensions.gameplay_drag_saveSystem.loadPrefabs `ge` | 1 | 608 |  |
| extensions.gameplay_drag_saveSystem.unloadPrefabs `ge` | 1 | 655 |  |
| extensions.gameplay_drag_saveSystem.saveFacilities `ge` | 2 | 693 |  |
| extensions.gameplay_drag_times.reset `ge` | 0 | 20 |  |
| extensions.gameplay_drag_times.preStageStarted `ge` | 0 | 121 |  |
| extensions.gameplay_drag_times.onExtensionLoaded `ge` | 0 | 13 |  |
| extensions.gameplay_drag_utils.onExtensionLoaded `ge` | 0 | 18 |  |
| extensions.gameplay_drag_utils.getFrontWheelDistanceFromStagePos `ge` | 1 | 27 |  |
| extensions.gameplay_drag_utils.calculateDistanceOfAllWheelsFromStagePos `ge` | 1 | 41 |  |
| extensions.gameplay_drag_utils.isRacerInsideBoundary `ge` | 1 | 66 |  |
| extensions.gameplay_drag_utils.generateWinData `ge` | 0 | 249 | table |
| extensions.gameplay_drag_utils.changeRacerPhase `ge` | 1 | 262 |  |
| extensions.gameplay_drag_utils.changeAllPhases `ge` | 0 | 275 |  |
| extensions.gameplay_drag_utils.stage `ge` | 3 | 302 |  |
| extensions.gameplay_drag_utils.countdown `ge` | 3 | 382 |  |
| extensions.gameplay_drag_utils.race `ge` | 3 | 447 |  |
| extensions.gameplay_drag_utils.stop `ge` | 3 | 543 |  |
| extensions.gameplay_drag_utils.emergencyStop `ge` | 3 | 600 |  |
| extensions.gameplay_drag_utils.updateRacer `ge` | 1 | 652 |  |
| extensions.gameplay_drag_utils.setDialsData `ge` | 1 | 726 |  |
| extensions.gameplay_drift_bounds.setBounds `ge` | 2 | 24 |  |
| extensions.gameplay_drift_bounds.getIsOutOfBounds `ge` | 0 | 81 |  |
| extensions.gameplay_drift_bounds.getDriftDebugInfo `ge` | 0 | 85 |  |
| extensions.gameplay_drift_bounds.getGC `ge` | 0 | 89 |  |
| extensions.gameplay_drift_destination.setRacePath `ge` | 1 | 27 |  |
| extensions.gameplay_drift_destination.getPathData `ge` | 0 | 151 |  |
| extensions.gameplay_drift_destination.getWaypoints `ge` | 0 | 155 |  |
| extensions.gameplay_drift_destination.getRemainingDist `ge` | 0 | 159 |  |
| extensions.gameplay_drift_destination.getGoingWrongWay `ge` | 0 | 163 |  |
| extensions.gameplay_drift_destination.getWrongWayFail `ge` | 0 | 167 |  |
| extensions.gameplay_drift_destination.getDriftDebugInfo `ge` | 0 | 171 |  |
| extensions.gameplay_drift_destination.getDistToIntendedRoad `ge` | 0 | 179 |  |
| extensions.gameplay_drift_destination.getDisableWrongWayAndDist `ge` | 0 | 183 |  |
| extensions.gameplay_drift_destination.getGC `ge` | 0 | 175 |  |
| extensions.gameplay_drift_destination.reset `ge` | 0 | 187 |  |
| extensions.gameplay_drift_display.reset `ge` | 0 | 339 |  |
| extensions.gameplay_drift_display.onSerialize `ge` | 0 | 313 | table |
| extensions.gameplay_drift_display.onDeserialized `ge` | 1 | 321 |  |
| extensions.gameplay_drift_display.onExtensionUnloaded `ge` | 0 | 287 |  |
| extensions.gameplay_drift_display.getDriftDebugInfo `ge` | 0 | 343 |  |
| extensions.gameplay_drift_display.onDriftCruisingToggled `ge` | 1 | 347 |  |
| extensions.gameplay_drift_drift.onSerialize `ge` | 0 | 984 | table |
| extensions.gameplay_drift_drift.onDeserialized `ge` | 1 | 990 |  |
| extensions.gameplay_drift_drift.onDriftChallengeFinished `ge` | 0 | 919 |  |
| extensions.gameplay_drift_drift.reset `ge` | 0 | 105 |  |
| extensions.gameplay_drift_drift.getDriftActiveData `ge` | 0 | 814 |  |
| extensions.gameplay_drift_drift.getDriftChainActiveData `ge` | 0 | 818 |  |
| extensions.gameplay_drift_drift.getVehId `ge` | 0 | 838 |  |
| extensions.gameplay_drift_drift.getVehVel `ge` | 0 | 973 |  |
| extensions.gameplay_drift_drift.getDriftChainChainedDrifts `ge` | 0 | 822 |  |
| extensions.gameplay_drift_drift.getPlVeh `ge` | 0 | 842 |  |
| extensions.gameplay_drift_drift.getVehData `ge` | 0 | 969 |  |
| extensions.gameplay_drift_drift.getIsDrifting `ge` | 0 | 846 |  |
| extensions.gameplay_drift_drift.getDriftOptions `ge` | 0 | 850 |  |
| extensions.gameplay_drift_drift.getAirSpeed `ge` | 0 | 858 |  |
| extensions.gameplay_drift_drift.getDistSinceLastFrame `ge` | 0 | 945 |  |
| extensions.gameplay_drift_drift.getVehPos `ge` | 0 | 878 |  |
| extensions.gameplay_drift_drift.getAngleDiff `ge` | 0 | 870 |  |
| extensions.gameplay_drift_drift.getVehCorners `ge` | 0 | 854 | table |
| extensions.gameplay_drift_drift.getCurrDriftCompletedTime `ge` | 0 | 866 |  |
| extensions.gameplay_drift_drift.getCurrDegAngleSigned `ge` | 0 | 862 |  |
| extensions.gameplay_drift_drift.getIsCrashing `ge` | 0 | 882 |  |
| extensions.gameplay_drift_drift.getDriftDebugInfo `ge` | 0 | 886 |  |
| extensions.gameplay_drift_drift.getGC `ge` | 0 | 874 |  |
| extensions.gameplay_drift_drift.getCurrentDriftDuration `ge` | 0 | 949 |  |
| extensions.gameplay_drift_drift.getIsOverSteering `ge` | 0 | 957 |  |
| extensions.gameplay_drift_drift.getIsOverMinSpeedForDrift `ge` | 0 | 961 |  |
| extensions.gameplay_drift_drift.getIsInTheAir `ge` | 0 | 977 |  |
| extensions.gameplay_drift_drift.doesPlHaveVeh `ge` | 0 | 965 |  |
| extensions.gameplay_drift_drift.setVehId `ge` | 1 | 834 |  |
| extensions.gameplay_drift_drift.setAllowTightDrift `ge` | 1 | 830 |  |
| extensions.gameplay_drift_drift.setAllowDonut `ge` | 1 | 826 |  |
| extensions.gameplay_drift_drift.setBalanceMode `ge` | 1 | 981 |  |
| extensions.gameplay_drift_drift.simulateADrift `ge` | 1 | 810 |  |
| extensions.gameplay_drift_freeroam_driftSpots.detectStart `ge` | 1 | 236 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onDeserialized `ge` | 1 | 463 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onSerialize `ge` | 0 | 470 | table |
| extensions.gameplay_drift_freeroam_driftSpots.getDriftDebugInfo `ge` | 0 | 374 |  |
| extensions.gameplay_drift_freeroam_driftSpots.getIsInTheConcludingPhase `ge` | 0 | 378 |  |
| extensions.gameplay_drift_freeroam_driftSpots.getIsInFreeroamChallenge `ge` | 0 | 386 |  |
| extensions.gameplay_drift_freeroam_driftSpots.getGC `ge` | 0 | 382 |  |
| extensions.gameplay_drift_general.reset `ge` | 0 | 81 |  |
| extensions.gameplay_drift_general.clear `ge` | 0 | 76 |  |
| extensions.gameplay_drift_general.setChallengeMode `ge` | 1 | 139 |  |
| extensions.gameplay_drift_general.getChallengeMode `ge` | 0 | 199 |  |
| extensions.gameplay_drift_general.getExtensionDebug `ge` | 1 | 190 |  |
| extensions.gameplay_drift_general.getGeneralDebug `ge` | 0 | 174 |  |
| extensions.gameplay_drift_general.getContext `ge` | 0 | 182 |  |
| extensions.gameplay_drift_general.getFrozen `ge` | 0 | 195 |  |
| extensions.gameplay_drift_general.getPaused `ge` | 0 | 178 |  |
| extensions.gameplay_drift_general.getDriftDebugInfo `ge` | 0 | 186 |  |
| extensions.gameplay_drift_general.getIsThereAnyDriftUIAppDisplayed `ge` | 0 | 203 |  |
| extensions.gameplay_drift_general.setDebug `ge` | 1 | 166 |  |
| extensions.gameplay_drift_general.setContext `ge` | 1 | 151 |  |
| extensions.gameplay_drift_general.setPaused `ge` | 1 | 147 |  |
| extensions.gameplay_drift_general.onSerialize `ge` | 0 | 380 | table |
| extensions.gameplay_drift_general.onDeserialized `ge` | 1 | 386 |  |
| extensions.gameplay_drift_general.onExtensionLoaded `ge` | 0 | 390 |  |
| extensions.gameplay_drift_general.onDriftAppMounted `ge` | 0 | 394 |  |
| extensions.gameplay_drift_general.onDriftAppUnmounted `ge` | 0 | 398 |  |
| extensions.gameplay_drift_quickMessages.reset `ge` | 0 | 363 |  |
| extensions.gameplay_drift_quickMessages.getQuickMessages `ge` | 0 | 384 |  |
| extensions.gameplay_drift_quickMessages.getDriftDebugInfo `ge` | 0 | 390 |  |
| extensions.gameplay_drift_quickMessages.getGC `ge` | 0 | 394 |  |
| extensions.gameplay_drift_saveLoad.loadDriftData `ge` | 1 | 138 |  |
| extensions.gameplay_drift_saveLoad.loadAndSanitizeDriftFreeroamSpotsCurrMap `ge` | 0 | 128 |  |
| extensions.gameplay_drift_saveLoad.saveDriftSpotsScoresForSpotById `ge` | 1 | 32 |  |
| extensions.gameplay_drift_saveLoad.getDriftSpotById `ge` | 1 | 41 |  |
| extensions.gameplay_drift_saveLoad.getDriftSpotsById `ge` | 0 | 46 |  |
| extensions.gameplay_drift_saveLoad.getPreviewWithFallback `ge` | 1 | 115 |  |
| extensions.gameplay_drift_scoreboard.reset `ge` | 0 | 103 |  |
| extensions.gameplay_drift_scoreboard.getDriftDebugInfo `ge` | 0 | 118 |  |
| extensions.gameplay_drift_scoreboard.getPerformanceStats `ge` | 0 | 147 |  |
| extensions.gameplay_drift_scoreboard.getTiersStats `ge` | 0 | 193 |  |
| extensions.gameplay_drift_scoreboard.getDriftEventStats `ge` | 0 | 197 |  |
| extensions.gameplay_drift_scoring.onSerialize `ge` | 0 | 629 | table |
| extensions.gameplay_drift_scoring.onDeserialized `ge` | 1 | 648 |  |
| extensions.gameplay_drift_scoring.onDriftThroughAccomplished `ge` | 1 | 484 |  |
| extensions.gameplay_drift_scoring.onHitPoleAccomplished `ge` | 1 | 490 |  |
| extensions.gameplay_drift_scoring.onDonutDriftAccomplished `ge` | 1 | 502 |  |
| extensions.gameplay_drift_scoring.onNearPoleAccomplished `ge` | 1 | 496 |  |
| extensions.gameplay_drift_scoring.getScore `ge` | 0 | 593 |  |
| extensions.gameplay_drift_scoring.getScoreOptions `ge` | 0 | 621 |  |
| extensions.gameplay_drift_scoring.getPotentialScore `ge` | 0 | 597 |  |
| extensions.gameplay_drift_scoring.getScoreAddedThisFrame `ge` | 0 | 605 |  |
| extensions.gameplay_drift_scoring.getStuntZoneBasePoints `ge` | 1 | 644 |  |
| extensions.gameplay_drift_scoring.getDriftDebugInfo `ge` | 0 | 609 |  |
| extensions.gameplay_drift_scoring.getGC `ge` | 0 | 617 |  |
| extensions.gameplay_drift_scoring.getDriftTiers `ge` | 0 | 613 |  |
| extensions.gameplay_drift_scoring.getDriftPerformanceFactor `ge` | 0 | 601 |  |
| extensions.gameplay_drift_scoring.getSteppedDriftPerformanceFactor `ge` | 0 | 654 |  |
| extensions.gameplay_drift_scoring.getCurrentDriftTier `ge` | 0 | 640 |  |
| extensions.gameplay_drift_scoring.reset `ge` | 0 | 176 |  |
| extensions.gameplay_drift_scoring.wrapUp `ge` | 0 | 508 |  |
| extensions.gameplay_drift_scoring.wrapUpWithText `ge` | 0 | 518 |  |
| extensions.gameplay_drift_scoring.addCachedScore `ge` | 2 | 224 |  |
| extensions.gameplay_drift_sounds.onExtensionUnloaded `ge` | 0 | 194 |  |
| extensions.gameplay_drift_sounds.getDriftDebugInfo `ge` | 0 | 67 |  |
| extensions.gameplay_drift_stallingSystem.reset `ge` | 0 | 40 |  |
| extensions.gameplay_drift_stallingSystem.calculateScore `ge` | 1 | 118 |  |
| extensions.gameplay_drift_stallingSystem.processStuntZone `ge` | 1 | 122 |  |
| extensions.gameplay_drift_stallingSystem.getDriftDebugInfo `ge` | 0 | 172 |  |
| extensions.gameplay_drift_stuntZones.onExtensionUnloaded `ge` | 0 | 315 |  |
| extensions.gameplay_drift_stuntZones.onSerialize `ge` | 0 | 319 |  |
| extensions.gameplay_drift_stuntZones.clear `ge` | 0 | 214 |  |
| extensions.gameplay_drift_stuntZones.reset `ge` | 0 | 208 |  |
| extensions.gameplay_drift_stuntZones.setStuntZones `ge` | 1 | 223 |  |
| extensions.gameplay_drift_stuntZones.getStuntZones `ge` | 0 | 311 |  |
| extensions.gameplay_drift_stuntZones.increaseDecalPool `ge` | 1 | 48 |  |
| extensions.gameplay_drift_stuntZones.getDecalColor `ge` | 3 | 63 |  |
| extensions.gameplay_drift_stuntZones.getLineThickness `ge` | 1 | 352 |  |
| extensions.gameplay_drift_stuntZones.getGreenColor `ge` | 0 | 336 |  |
| extensions.gameplay_drift_stuntZones.getWhiteColor `ge` | 0 | 340 |  |
| extensions.gameplay_drift_stuntZones.getRedColor `ge` | 0 | 344 |  |
| extensions.gameplay_drift_stuntZones.getDriftDebugInfo `ge` | 0 | 348 |  |
| extensions.gameplay_drift_stuntZones.getDrawLines `ge` | 0 | 332 |  |
| extensions.gameplay_drift_stuntZones.clearStuntZone `ge` | 1 | 298 |  |
| extensions.gameplay_forceField.activate `ge` | 0 | 17 |  |
| extensions.gameplay_forceField.deactivate `ge` | 1 | 24 |  |
| extensions.gameplay_forceField.toggleActive `ge` | 0 | 36 |  |
| extensions.gameplay_forceField.isActive `ge` | 0 | 74 |  |
| extensions.gameplay_forceField.setForceMultiplier `ge` | 1 | 91 |  |
| extensions.gameplay_forceField.getForceMultiplier `ge` | 0 | 95 |  |
| extensions.gameplay_forceField.onClientEndMission `ge` | 0 | 66 |  |
| extensions.gameplay_forceField.onSerialize `ge` | 0 | 78 |  |
| extensions.gameplay_forceField.onDeserialized `ge` | 0 | 82 |  |
| extensions.gameplay_garageMode.start `ge` | 2 | 321 |  |
| extensions.gameplay_garageMode.stop `ge` | 0 | 378 |  |
| extensions.gameplay_garageMode.isActive `ge` | 0 | 415 |  |
| extensions.gameplay_garageMode.zoom `ge` | 1 | 147 |  |
| extensions.gameplay_garageMode.setCamera `ge` | 1 | 83 |  |
| extensions.gameplay_garageMode.setObjectsAutohide `ge` | 1 | 419 |  |
| extensions.gameplay_garageMode.isObjectsAutohide `ge` | 0 | 423 |  |
| extensions.gameplay_garageMode.testVehicle `ge` | 0 | 466 |  |
| extensions.gameplay_garageMode.setLighting `ge` | 1 | 254 |  |
| extensions.gameplay_garageMode.getLighting `ge` | 0 | 383 |  |
| extensions.gameplay_garageMode.setGarageMenuState `ge` | 1 | 55 |  |
| extensions.gameplay_garageMode.getGarageMenuState `ge` | 0 | 64 |  |
| extensions.gameplay_garageMode.setVehicleDirty `ge` | 2 | 49 |  |
| extensions.gameplay_garageMode.getLastOwnedVehicleId `ge` | 0 | 470 |  |
| extensions.gameplay_garageMode.initStepFinished `ge` | 0 | 298 |  |
| extensions.gameplay_garageMode.garageModeStartStep `ge` | 0 | 308 |  |
| extensions.gameplay_garageMode.onDeserialized `ge` | 1 | 411 |  |
| extensions.gameplay_garageMode.onSerialize `ge` | 0 | 405 |  |
| extensions.gameplay_garageMode.onThumbnailTriggered `ge` | 1 | 427 |  |
| extensions.gameplay_markerInteraction.getCurrentInteractableElements `ge` | 0 | 61 |  |
| extensions.gameplay_markerInteraction.formatMission `ge` | 1 | 66 |  |
| extensions.gameplay_markerInteraction.formatDataForUi `ge` | 0 | 114 |  |
| extensions.gameplay_markerInteraction.startMissionById `ge` | 3 | 128 |  |
| extensions.gameplay_markerInteraction.stopMissionById `ge` | 2 | 133 |  |
| extensions.gameplay_markerInteraction.changeUserSettings `ge` | 2 | 138 |  |
| extensions.gameplay_markerInteraction.setPreselectedMissionId `ge` | 1 | 144 |  |
| extensions.gameplay_markerInteraction.getGameContext `ge` | 1 | 149 |  |
| extensions.gameplay_markerInteraction.onSelectDetailPromptClicked `ge` | 1 | 199 |  |
| extensions.gameplay_markerInteraction.closeViewDetailPrompt `ge` | 1 | 211 |  |
| extensions.gameplay_markerInteraction.setMarkersVisibleTemporary `ge` | 1 | 589 |  |
| extensions.gameplay_markerInteraction.skipNextIconFading `ge` | 0 | 560 |  |
| extensions.gameplay_markerInteraction.onClientEndMission `ge` | 1 | 585 |  |
| extensions.gameplay_markerInteraction.clearCache `ge` | 0 | 555 |  |
| extensions.gameplay_markerInteraction.setForceReevaluateOpenPrompt `ge` | 0 | 609 |  |
| extensions.gameplay_markerInteraction.onUIPlayStateChanged `ge` | 1 | 613 |  |
| extensions.gameplay_missions_locationsDetector.getNearbyLocations `ge` | 2 | 43 |  |
| extensions.gameplay_missions_missionManager.allowMissionInteraction `ge` | 0 | 1065 | boolean |
| extensions.gameplay_missions_missionManager.start `ge` | 3 | 754 |  |
| extensions.gameplay_missions_missionManager.startWithFade `ge` | 3 | 754 |  |
| extensions.gameplay_missions_missionManager.startAsScenario `ge` | 2 | 815 |  |
| extensions.gameplay_missions_missionManager.startFromWithinMission `ge` | 3 | 851 |  |
| extensions.gameplay_missions_missionManager.startInstant `ge` | 3 | 880 |  |
| extensions.gameplay_missions_missionManager.startWithLoadingLevel `ge` | 3 | 905 |  |
| extensions.gameplay_missions_missionManager.stop `ge` | 2 | 1018 |  |
| extensions.gameplay_missions_missionManager.attemptAbandonMissionWithFade `ge` | 3 | 959 |  |
| extensions.gameplay_missions_missionManager.getCurrentTaskdataTypeOrNil `ge` | 0 | 1168 | string |
| extensions.gameplay_missions_missionManager.onClientEndMission `ge` | 0 | 1152 |  |
| extensions.gameplay_missions_missionManager.stopForegroundMissionInstantly `ge` | 0 | 1152 |  |
| extensions.gameplay_missions_missionManager.getForegroundMissionId `ge` | 0 | 1180 |  |
| extensions.gameplay_missions_missions.getMissionEditorForType `ge` | 1 | 155 |  |
| extensions.gameplay_missions_missions.getNoPreviewFilepath `ge` | 0 | 183 |  |
| extensions.gameplay_missions_missions.getNoThumbFilepath `ge` | 0 | 184 |  |
| extensions.gameplay_missions_missions.getNoVehicleThumbFilepath `ge` | 0 | 185 |  |
| extensions.gameplay_missions_missions.getMissionPreviewFilepath `ge` | 1 | 187 |  |
| extensions.gameplay_missions_missions.getMissionPreviewFilepath `ge` | 1 | 187 |  |
| extensions.gameplay_missions_missions.sanitizeMissionAfterCreation `ge` | 1 | 270 |  |
| extensions.gameplay_missions_missions.recursiveRemoveNestedFromCondition `ge` | 2 | 344 |  |
| extensions.gameplay_missions_missions.formatMissionToRawPoi `ge` | 3 | 915 |  |
| extensions.gameplay_missions_missions.logMissionIssues `ge` | 1 | 1016 |  |
| extensions.gameplay_missions_missions.getLocations `ge` | 1 | 873 |  |
| extensions.gameplay_missions_missions.getFilesData `ge` | 0 | 663 |  |
| extensions.gameplay_missions_missions.getMissionTypes `ge` | 0 | 81 |  |
| extensions.gameplay_missions_missions.getRecommendedAttributesList `ge` | 0 | 11 |  |
| extensions.gameplay_missions_missions.getAdditionalAttributes `ge` | 0 | 73 | multiple |
| extensions.gameplay_missions_missions.getMissionTypeConstructor `ge` | 1 | 96 |  |
| extensions.gameplay_missions_missions.getMissionStaticData `ge` | 1 | 136 |  |
| extensions.gameplay_missions_missions.getMissionProgressSetupData `ge` | 1 | 116 |  |
| extensions.gameplay_missions_missions.get `ge` | 0 | 719 |  |
| extensions.gameplay_missions_missions.getAllIds `ge` | 0 | 826 |  |
| extensions.gameplay_missions_missions.getMissionById `ge` | 1 | 831 |  |
| extensions.gameplay_missions_missions.getMissionsByMissionType `ge` | 1 | 836 |  |
| extensions.gameplay_missions_missions.getMissionsByFilter `ge` | 1 | 847 |  |
| extensions.gameplay_missions_missions.loadMission `ge` | 1 | 572 |  |
| extensions.gameplay_missions_missions.saveMission `ge` | 2 | 606 |  |
| extensions.gameplay_missions_missions.createMission `ge` | 2 | 698 |  |
| extensions.gameplay_missions_missions.onExtensionLoaded `ge` | 0 | 895 |  |
| extensions.gameplay_missions_missions.reloadCompleteMissionSystem `ge` | 0 | 1073 |  |
| extensions.gameplay_missions_missions.clearCache `ge` | 0 | 1090 |  |
| extensions.gameplay_missions_missions.baseMission `ge` | 1+ | 1092 |  |
| extensions.gameplay_missions_missions.flowMission `ge` | 1+ | 1093 |  |
| extensions.gameplay_missions_missions.editorHelper `ge` | 1+ | 1094 |  |
| extensions.gameplay_missions_missionScreen.getRepairCostForStartingRepairType `ge` | 1 | 13 | table |
| extensions.gameplay_missions_missionScreen.requestStartingOptionsForUserSettings `ge` | 2 | 280 |  |
| extensions.gameplay_missions_missionScreen.getActiveStarsForUserSettings `ge` | 2 | 436 | table |
| extensions.gameplay_missions_missionScreen.abandonCurrentMission `ge` | 0 | 586 |  |
| extensions.gameplay_missions_missionScreen.showMissionRules `ge` | 1 | 588 |  |
| extensions.gameplay_missions_missionScreen.onExtensionUnloaded `ge` | 0 | 696 |  |
| extensions.gameplay_missions_missionScreen.activateSoundBlur `ge` | 1 | 667 |  |
| extensions.gameplay_missions_missionScreen.onClientEndMission `ge` | 1 | 700 |  |
| extensions.gameplay_missions_missionScreen.openAPMChallenges `ge` | 2 | 710 |  |
| extensions.gameplay_missions_missionScreen.navigateToMission `ge` | 1 | 741 |  |
| extensions.gameplay_missions_missionScreen.activateSound `ge` | 3 | 776 |  |
| extensions.gameplay_missions_missionScreen.openVehicleSelectorForMissionBySetting `ge` | 2 | 802 |  |
| extensions.gameplay_missions_missionScreen.getMissionTiles `ge` | 1 | 859 | table |
| extensions.gameplay_missions_missionScreen.formatMission `ge` | 1 | 19 |  |
| extensions.gameplay_missions_missionScreen.getMissionsAtCurrentLocationFormatted `ge` | 0 | 162 |  |
| extensions.gameplay_missions_missionScreen.startMissionById `ge` | 3 | 556 |  |
| extensions.gameplay_missions_missionScreen.stopMissionById `ge` | 3 | 577 |  |
| extensions.gameplay_missions_missionScreen.startFromWithinMission `ge` | 2 | 1009 |  |
| extensions.gameplay_missions_missionScreen.changeUserSettings `ge` | 2 | 597 |  |
| extensions.gameplay_missions_missionScreen.setPreselectedMissionId `ge` | 1 | 655 |  |
| extensions.gameplay_missions_missionScreen.setPreselectedPage `ge` | 1 | 650 |  |
| extensions.gameplay_missions_missionScreen.getMissionScreenData `ge` | 0 | 203 |  |
| extensions.gameplay_missions_missionScreen.discoverLayouts `ge` | 0 | 1028 |  |
| extensions.gameplay_missions_missionScreen.enableDebug `ge` | 1 | 1040 |  |
| extensions.gameplay_missions_missionScreen.debugOnUpdate `ge` | 1 | 1050 |  |
| extensions.gameplay_missions_missionScreen.onRequestMissionScreenData `ge` | 1 | 1151 |  |
| extensions.gameplay_missions_missionScreen.isAnyMissionActive `ge` | 0 | 1162 |  |
| extensions.gameplay_missions_missionScreen.isMissionStartOrEndScreenActive `ge` | 0 | 1163 |  |
| extensions.gameplay_missions_poiTest.onPoiDetailPromptOpening `ge` | 2 | 31 |  |
| extensions.gameplay_missions_poiTest.onExtensionLoaded `ge` | 0 | 50 |  |
| extensions.gameplay_missions_proceduralMissionGenerators_busModeMissions.generate `ge` | 0 | 33 |  |
| extensions.gameplay_missions_proceduralMissionGenerators_timeTrialMissions.generate `ge` | 0 | 75 |  |
| extensions.gameplay_missions_progress.addCareerRewardInfo `ge` | 3 | 581 |  |
| extensions.gameplay_missions_progress.reduceCareerRewardsForDefaultStars `ge` | 1 | 961 |  |
| extensions.gameplay_missions_progress.setDynamicStarRewards `ge` | 2 | 987 |  |
| extensions.gameplay_missions_progress.missionHasQuickTravelUnlocked `ge` | 1 | 1020 | boolean |
| extensions.gameplay_missions_progress.missionHasUserSettingsUnlocked `ge` | 1 | 1033 | boolean |
| extensions.gameplay_missions_progress.getLeaderboardChangeKeys `ge` | 1 | 1052 |  |
| extensions.gameplay_missions_progress.formatAttemptSimple `ge` | 2 | 1259 |  |
| extensions.gameplay_missions_progress.tryBuildContext `ge` | 2 | 1480 | table |
| extensions.gameplay_missions_progress.getUnlockedStarCountsForMissionById `ge` | 1 | 1631 | multiple |
| extensions.gameplay_missions_progress.aggregateAttempt `ge` | 3 | 366 |  |
| extensions.gameplay_missions_progress.saveMissionSaveData `ge` | 2 | 294 |  |
| extensions.gameplay_missions_progress.loadMissionSaveData `ge` | 1 | 886 | multiple |
| extensions.gameplay_missions_progress.ensureProgressExistsForKey `ge` | 2 | 1000 |  |
| extensions.gameplay_missions_progress.newAttempt `ge` | 2 | 225 | table |
| extensions.gameplay_missions_progress.setSaveSlot `ge` | 1 | 280 |  |
| extensions.gameplay_missions_progress.getSaveSlot `ge` | 0 | 290 | multiple |
| extensions.gameplay_missions_progress.setSavePath `ge` | 1 | 286 |  |
| extensions.gameplay_missions_progress.formatSaveDataForUi `ge` | 4 | 1555 |  |
| extensions.gameplay_missions_progress.formatSaveDataForBigmap `ge` | 1 | 1591 |  |
| extensions.gameplay_missions_progress.formatStars `ge` | 1 | 1492 |  |
| extensions.gameplay_missions_progress.onExtensionLoaded `ge` | 0 | 1679 |  |
| extensions.gameplay_missions_progress.generateAttempt `ge` | 2 | 1716 |  |
| extensions.gameplay_missions_progress.generateAttempts `ge` | 3 | 1747 |  |
| extensions.gameplay_missions_progress.startBatchMode `ge` | 0 | 1778 |  |
| extensions.gameplay_missions_progress.endBatchMode `ge` | 0 | 1781 |  |
| extensions.gameplay_missions_progress.getBatchMode `ge` | 0 | 1784 |  |
| extensions.gameplay_missions_progress.exportAllProgressToCSV `ge` | 0 | 1788 |  |
| extensions.gameplay_missions_startTrigger.defaultLocationCheck `ge` | 4 | 15 |  |
| extensions.gameplay_missions_startTrigger.defaultLocationDisplayMarker `ge` | 2 | 20 |  |
| extensions.gameplay_missions_startTrigger.getMissionClusters `ge` | 1 | 138 |  |
| extensions.gameplay_missions_startTrigger.parseMission `ge` | 1 | 73 |  |
| extensions.gameplay_missions_unlocks.getMissionsForCondition `ge` | 2 | 146 |  |
| extensions.gameplay_missions_unlocks.getBranchLevelForCondition `ge` | 2 | 160 |  |
| extensions.gameplay_missions_unlocks.setUnlockForwardBackward `ge` | 1 | 209 |  |
| extensions.gameplay_missions_unlocks.updateUnlockStatus `ge` | 1 | 22 |  |
| extensions.gameplay_missions_unlocks.conditionMet `ge` | 1 | 10 | table |
| extensions.gameplay_missions_unlocks.getSimpleUnlockedStatus `ge` | 0 | 83 |  |
| extensions.gameplay_missions_unlocks.getUnlockDiff `ge` | 2 | 108 |  |
| extensions.gameplay_missions_unlocks.getMissionBasedUnlockDiff `ge` | 2 | 132 |  |
| extensions.gameplay_missions_unlocks.onExtensionLoaded `ge` | 0 | 315 |  |
| extensions.gameplay_missions_unlocks.depthIdSort `ge` | 2 | 330 |  |
| extensions.gameplay_missions_unlocks.depthIdSortUsingIds `ge` | 2 | 337 |  |
| extensions.gameplay_parking.setSites `ge` | 1 | 45 |  |
| extensions.gameplay_parking.setState `ge` | 1 | 58 |  |
| extensions.gameplay_parking.getState `ge` | 0 | 70 |  |
| extensions.gameplay_parking.setupVehicles `ge` | 2 | 614 | boolean |
| extensions.gameplay_parking.insertVehicle `ge` | 1 | 522 |  |
| extensions.gameplay_parking.removeVehicle `ge` | 1 | 552 |  |
| extensions.gameplay_parking.processVehicles `ge` | 2 | 572 |  |
| extensions.gameplay_parking.activate `ge` | 2 | 572 |  |
| extensions.gameplay_parking.deactivate `ge` | 0 | 598 |  |
| extensions.gameplay_parking.deleteVehicles `ge` | 1 | 559 |  |
| extensions.gameplay_parking.getParkedCarsAmount `ge` | 1 | 416 |  |
| extensions.gameplay_parking.getParkedCarsList `ge` | 0 | 420 |  |
| extensions.gameplay_parking.getParkedCarsData `ge` | 0 | 424 |  |
| extensions.gameplay_parking.enableTracking `ge` | 2 | 336 |  |
| extensions.gameplay_parking.disableTracking `ge` | 1 | 356 |  |
| extensions.gameplay_parking.resetAll `ge` | 0 | 681 |  |
| extensions.gameplay_parking.getTrackingData `ge` | 0 | 361 |  |
| extensions.gameplay_parking.getParkingSpots `ge` | 0 | 74 |  |
| extensions.gameplay_parking.findParkingSpots `ge` | 3 | 167 | table |
| extensions.gameplay_parking.filterParkingSpots `ge` | 2 | 196 |  |
| extensions.gameplay_parking.getRandomParkingSpots `ge` | 5 | 276 | multiple/table |
| extensions.gameplay_parking.checkParkingSpot `ge` | 2 | 146 | boolean |
| extensions.gameplay_parking.moveToParkingSpot `ge` | 3 | 81 |  |
| extensions.gameplay_parking.getCurrentParkingSpot `ge` | 1 | 365 |  |
| extensions.gameplay_parking.forceTeleport `ge` | 4 | 255 |  |
| extensions.gameplay_parking.scatterParkedCars `ge` | 3 | 324 |  |
| extensions.gameplay_parking.setActiveAmount `ge` | 1 | 407 |  |
| extensions.gameplay_parking.setParkingVars `ge` | 2 | 395 |  |
| extensions.gameplay_parking.getParkingVars `ge` | 0 | 412 |  |
| extensions.gameplay_parking.onClientEndMission `ge` | 0 | 908 |  |
| extensions.gameplay_parking.onSerialize `ge` | 0 | 913 |  |
| extensions.gameplay_parking.onDeserialized `ge` | 1 | 919 |  |
| extensions.gameplay_playmodeMarkers.getPlaymodeClusters `ge` | 0 | 80 |  |
| extensions.gameplay_playmodeMarkers.getPlaymodeClustersAsQuadtree `ge` | 0 | 91 |  |
| extensions.gameplay_playmodeMarkers.getMarkerForCluster `ge` | 1 | 105 |  |
| extensions.gameplay_playmodeMarkers.isStateWithPlaymodeMarkers `ge` | 0 | 123 | boolean |
| extensions.gameplay_playmodeMarkers.onClientEndMission `ge` | 0 | 26 |  |
| extensions.gameplay_playmodeMarkers.onSerialize `ge` | 0 | 26 |  |
| extensions.gameplay_playmodeMarkers.clear `ge` | 0 | 26 |  |
| extensions.gameplay_police.insertProp `ge` | 1 | 116 |  |
| extensions.gameplay_police.removeProp `ge` | 1 | 123 |  |
| extensions.gameplay_police.setPropsActive `ge` | 2 | 107 |  |
| extensions.gameplay_police.checkRoadblock `ge` | 3 | 27 | multiple |
| extensions.gameplay_police.placeRoadblock `ge` | 4 | 62 |  |
| extensions.gameplay_police.setPursuitMode `ge` | 3 | 206 |  |
| extensions.gameplay_police.setPursuitVars `ge` | 1 | 146 |  |
| extensions.gameplay_police.setPoliceVars `ge` | 1 | 146 |  |
| extensions.gameplay_police.setSuspect `ge` | 1 | 308 |  |
| extensions.gameplay_police.setSuspectTimer `ge` | 1 | 318 |  |
| extensions.gameplay_police.arrestVehicle `ge` | 2 | 323 |  |
| extensions.gameplay_police.evadeVehicle `ge` | 2 | 360 |  |
| extensions.gameplay_police.releaseVehicle `ge` | 2 | 388 |  |
| extensions.gameplay_police.setupPursuitGameplay `ge` | 3 | 413 | boolean |
| extensions.gameplay_police.getPursuitData `ge` | 1 | 463 |  |
| extensions.gameplay_police.getPursuitVars `ge` | 0 | 472 |  |
| extensions.gameplay_police.getPoliceVars `ge` | 0 | 472 |  |
| extensions.gameplay_police.getPoliceVehicles `ge` | 0 | 154 |  |
| extensions.gameplay_police.getNearestPoliceVehicle `ge` | 3 | 158 | multiple |
| extensions.gameplay_police.isVehicleInPursuit `ge` | 2 | 180 | multiple |
| extensions.gameplay_police.onClientEndMission `ge` | 0 | 569 |  |
| extensions.gameplay_police.onSerialize `ge` | 0 | 794 |  |
| extensions.gameplay_police.onDeserialized `ge` | 1 | 800 |  |
| extensions.gameplay_rally.actionToggleMouseLikeVehicle `ge` | 0 | 156 |  |
| extensions.gameplay_rally.actionTranscribeRecordingCut `ge` | 0 | 161 |  |
| extensions.gameplay_rally.actionRecceMoveVehicleForward `ge` | 0 | 166 |  |
| extensions.gameplay_rally.actionRecceMoveVehicleBackward `ge` | 0 | 171 |  |
| extensions.gameplay_rally.actionCodriverCallsEarlier `ge` | 0 | 216 |  |
| extensions.gameplay_rally.actionCodriverCallsLater `ge` | 0 | 220 |  |
| extensions.gameplay_rally.onExtensionLoaded `ge` | 0 | 138 |  |
| extensions.gameplay_rally.onExtensionUnloaded `ge` | 0 | 145 |  |
| extensions.gameplay_rally.enableRecceApp `ge` | 1 | 73 |  |
| extensions.gameplay_rally.loadMission `ge` | 3 | 47 |  |
| extensions.gameplay_rally.unloadMission `ge` | 0 | 60 |  |
| extensions.gameplay_rally.isReady `ge` | 0 | 65 | boolean |
| extensions.gameplay_rally.getRallyManager `ge` | 0 | 331 |  |
| extensions.gameplay_rally.getErrorMsgForUser `ge` | 0 | 332 |  |
| extensions.gameplay_rally.getDebugLogging `ge` | 0 | 335 |  |
| extensions.gameplay_rally.setDebugLogging `ge` | 1 | 336 |  |
| extensions.gameplay_rally.toggleDebug `ge` | 0 | 200 |  |
| extensions.gameplay_rally.getRallyToolbox `ge` | 0 | 212 |  |
| extensions.gameplay_rally.isRallyToolboxVisible `ge` | 0 | 340 |  |
| extensions.gameplay_rally.getRace `ge` | 0 | 342 |  |
| extensions.gameplay_rallyLoop.onExtensionLoaded `ge` | 0 | 135 |  |
| extensions.gameplay_rallyLoop.onExtensionUnloaded `ge` | 0 | 143 |  |
| extensions.gameplay_rallyLoop.isReady `ge` | 0 | 52 | boolean |
| extensions.gameplay_rallyLoop.setup `ge` | 2 | 44 |  |
| extensions.gameplay_rallyLoop.unload `ge` | 0 | 48 |  |
| extensions.gameplay_rallyLoop.getDebugLogging `ge` | 0 | 232 |  |
| extensions.gameplay_rallyLoop.setDebugLogging `ge` | 1 | 233 |  |
| extensions.gameplay_rallyLoop.toggleDebug `ge` | 0 | 157 |  |
| extensions.gameplay_rallyLoop.getLoopToolbox `ge` | 0 | 165 |  |
| extensions.gameplay_rallyLoop.isLoopToolboxVisible `ge` | 0 | 237 |  |
| extensions.gameplay_rallyLoop.setupForNewMission `ge` | 0 | 239 |  |
| extensions.gameplay_rallyLoop.setMissionExecutionTransferFlag `ge` | 1 | 245 |  |
| extensions.gameplay_rallyLoop.getMissionExecutionTransferFlag `ge` | 0 | 250 | boolean |
| extensions.gameplay_rallyLoop.getNextMissionId `ge` | 0 | 257 |  |
| extensions.gameplay_rallyLoop.startNextMission `ge` | 0 | 264 | boolean |
| extensions.gameplay_rallyLoop.handleGOTO `ge` | 1 | 271 |  |
| extensions.gameplay_rallyLoop.getManager `ge` | 0 | 308 |  |
| extensions.gameplay_rallyLoop.drawDebug `ge` | 3 | 169 |  |
| extensions.gameplay_rallyLoop.getDrawFlag `ge` | 1 | 314 | boolean |
| extensions.gameplay_rallyLoop.setDrawFlag `ge` | 2 | 321 |  |
| extensions.gameplay_rallyLoop.getSSRescheduleCount `ge` | 0 | 327 | number |
| extensions.gameplay_rally_client.transcribe_recording_cut `ge` | 1 | 96 |  |
| extensions.gameplay_rally_client.transcribe_transcripts_get `ge` | 1 | 112 |  |
| extensions.gameplay_rally_extHelper.load `ge` | 0 | 8 |  |
| extensions.gameplay_rally_extHelper.unload `ge` | 0 | 11 |  |
| extensions.gameplay_rally_loop_penalties.calculateEarlyPenalty `ge` | 1 | 11 |  |
| extensions.gameplay_rally_loop_penalties.calculateLatePenalty `ge` | 1 | 19 |  |
| extensions.gameplay_rally_loop_penalties.getTimingStatus `ge` | 2 | 31 | table |
| extensions.gameplay_rally_loop_rallyAttempts.createRallyLoopAttemptForFinish `ge` | 1 | 57 | multiple |
| extensions.gameplay_rally_loop_rallyAttempts.createRallyLoopAttemptForDnf `ge` | 2 | 75 | multiple |
| extensions.gameplay_rally_notebook_structured_libCompositor.postProcessPhrase `ge` | 2 | 271 |  |
| extensions.gameplay_rally_notebook_structured_libCompositor.composite `ge` | 5 | 279 |  |
| extensions.gameplay_rally_notebook_structured_libCompositor.enumerate `ge` | 2 | 324 |  |
| extensions.gameplay_rally_notebook_structured_libCompositor.getRandomWeightedItem `ge` | 1 | 463 |  |
| extensions.gameplay_rally_notebook_structured_schema.default `ge` | 1 | 75 |  |
| extensions.gameplay_rally_notebook_structured_schema.initDefaultFields `ge` | 1 | 79 |  |
| extensions.gameplay_rally_notebook_test_testNotebook.testAll `ge` | 0 | 75 |  |
| extensions.gameplay_rally_notebook_waypointTypes.shortenWaypointType `ge` | 1 | 15 |  |
| extensions.gameplay_rally_recceApp.reload `ge` | 1 | 382 |  |
| extensions.gameplay_rally_recceApp.loadMission `ge` | 2 | 101 |  |
| extensions.gameplay_rally_recceApp.unloadMission `ge` | 0 | 141 |  |
| extensions.gameplay_rally_recceApp.setLastMissionId `ge` | 1 | 89 |  |
| extensions.gameplay_rally_recceApp.setLastLoadState `ge` | 1 | 95 |  |
| extensions.gameplay_rally_recceApp.setShowNotes `ge` | 1 | 275 |  |
| extensions.gameplay_rally_recceApp.moveVehicleBackward `ge` | 0 | 245 |  |
| extensions.gameplay_rally_recceApp.moveVehicleForward `ge` | 0 | 241 |  |
| extensions.gameplay_rally_recceApp.moveVehicleToStart `ge` | 0 | 163 |  |
| extensions.gameplay_rally_recceApp.moveVehicleToMission `ge` | 0 | 249 |  |
| extensions.gameplay_rally_recceApp.recordDrivelineCut `ge` | 0 | 279 |  |
| extensions.gameplay_rally_recceApp.recordDrivelineStart `ge` | 1 | 297 |  |
| extensions.gameplay_rally_recceApp.recordDrivelineStop `ge` | 0 | 307 |  |
| extensions.gameplay_rally_recceApp.recordDrivelineClearAll `ge` | 0 | 322 |  |
| extensions.gameplay_rally_recceApp.isRecording `ge` | 0 | 530 |  |
| extensions.gameplay_rally_recceApp.setEnabled `ge` | 1 | 64 |  |
| extensions.gameplay_rally_recceApp.isEnabled `ge` | 0 | 68 |  |
| extensions.gameplay_rally_recceApp.toggleDebug `ge` | 0 | 341 |  |
| extensions.gameplay_rally_recceApp.toggleMouseLikeVehicle `ge` | 0 | 400 |  |
| extensions.gameplay_rally_settingsManager.getMissionSettings `ge` | 0 | 20 |  |
| extensions.gameplay_rally_settingsManager.ensureMissionSettingsFile `ge` | 1 | 24 |  |
| extensions.gameplay_rally_settingsManager.load `ge` | 1 | 50 |  |
| extensions.gameplay_rally_settingsManager.loadMissionSettingsForMissionDir `ge` | 1 | 12 | multiple |
| extensions.gameplay_rally_snaproad_geoPacenotes.calculateMiddlePoint `ge` | 4 | 264 |  |
| extensions.gameplay_rally_snaproad_geoPacenotes.calculateCircleFromPoints2 `ge` | 3 | 182 | multiple |
| extensions.gameplay_rally_snaproad_normals.normalAlignPoints `ge` | 1 | 9 | multiple |
| extensions.gameplay_rally_snaproad_normals.forwardNormalVec `ge` | 1 | 19 |  |
| extensions.gameplay_rally_test_testRouteFix.onExtensionLoaded `ge` | 0 | 72 |  |
| extensions.gameplay_rally_test_testRouteFix.onExtensionUnloaded `ge` | 0 | 77 |  |
| extensions.gameplay_rally_trafficExclusion.createZones `ge` | 1 | 69 |  |
| extensions.gameplay_rally_util.calculateForwardNormal `ge` | 2 | 282 |  |
| extensions.gameplay_rally_util.detectMissionEditorMissionId `ge` | 0 | 108 |  |
| extensions.gameplay_rally_util.detectMissionIdHelper `ge` | 0 | 141 | multiple |
| extensions.gameplay_rally_util.detectMissionManagerMissionId `ge` | 0 | 100 |  |
| extensions.gameplay_rally_util.missionDirHelper `ge` | 1 | 132 | string |
| extensions.gameplay_rally_util.determineCornerCall `ge` | 2 | 314 |  |
| extensions.gameplay_rally_util.loadNotebook `ge` | 1 | 203 |  |
| extensions.gameplay_rally_util.loadNotebookForMissionDir `ge` | 2 | 230 |  |
| extensions.gameplay_rally_util.createNotebook `ge` | 1 | 192 |  |
| extensions.gameplay_rally_util.loadRacePath `ge` | 1 | 235 | multiple |
| extensions.gameplay_rally_util.getTime `ge` | 0 | 65 |  |
| extensions.gameplay_rally_util.hasPunctuation `ge` | 1 | 90 | boolean |
| extensions.gameplay_rally_util.loadCornerAnglesFile `ge` | 0 | 302 |  |
| extensions.gameplay_rally_util.matchSearchPattern `ge` | 2 | 351 |  |
| extensions.gameplay_rally_util.missionRecceRecordDir `ge` | 1 | 254 |  |
| extensions.gameplay_rally_util.missionReccePath `ge` | 2 | 259 |  |
| extensions.gameplay_rally_util.getAppropriateTextColor `ge` | 1 | 436 |  |
| extensions.gameplay_rally_util.drivelineFile `ge` | 1 | 265 |  |
| extensions.gameplay_rally_util.finalDrivelineFile `ge` | 1 | 269 |  |
| extensions.gameplay_rally_util.cutsFile `ge` | 1 | 273 |  |
| extensions.gameplay_rally_util.transcriptsFile `ge` | 1 | 277 |  |
| extensions.gameplay_rally_util.pacenoteHashSha1 `ge` | 1 | 59 |  |
| extensions.gameplay_rally_util.normalizeName `ge` | 1 | 78 |  |
| extensions.gameplay_rally_util.trimString `ge` | 1 | 331 |  |
| extensions.gameplay_rally_util.stripBasename `ge` | 1 | 337 |  |
| extensions.gameplay_rally_util.useNote `ge` | 1 | 360 |  |
| extensions.gameplay_rally_util.customRound `ge` | 2 | 367 |  |
| extensions.gameplay_rally_util.getCompositorFile `ge` | 2 | 375 |  |
| extensions.gameplay_rally_util.getCompositorPacenoteFile `ge` | 2 | 380 |  |
| extensions.gameplay_rally_util.getCompositorMetadataFile `ge` | 1 | 384 |  |
| extensions.gameplay_rally_util.makePacenoteAudioFilename `ge` | 1 | 371 | string |
| extensions.gameplay_rally_util.getMissionSettingsFile `ge` | 1 | 388 |  |
| extensions.gameplay_rally_util.getNotebookFullPath `ge` | 2 | 187 |  |
| extensions.gameplay_rally_util.getMissionName `ge` | 1 | 396 |  |
| extensions.gameplay_rally_util.translatedMissionName `ge` | 1 | 407 |  |
| extensions.gameplay_rally_util.translatedMissionNameFromId `ge` | 1 | 418 |  |
| extensions.gameplay_rally_util.randomId `ge` | 0 | 430 |  |
| extensions.gameplay_rally_util.arePointsEqualWithinThreshold `ge` | 3 | 440 |  |
| extensions.gameplay_rally_util.getVehFrontCenter `ge` | 1 | 446 |  |
| extensions.gameplay_rally_util.getVehFrontBottom `ge` | 1 | 462 |  |
| extensions.gameplay_rally_util.drawVehLeadingPoint `ge` | 2 | 475 |  |
| extensions.gameplay_rally_util.drawVehBB `ge` | 1 | 483 |  |
| extensions.gameplay_rally_util.formatTime24Hour `ge` | 3 | 522 | table |
| extensions.gameplay_rally_util.formatTime12Hour `ge` | 3 | 546 | table |
| extensions.gameplay_rally_util.formatTimeFromSeconds `ge` | 3 | 574 | string |
| extensions.gameplay_rally_util_jsonlUtils.startsWithDoubleSlash `ge` | 1 | 11 |  |
| extensions.gameplay_rally_util_jsonlUtils.readFileToMemory `ge` | 1 | 17 |  |
| extensions.gameplay_rally_util_jsonlUtils.splitIntoLines `ge` | 1 | 27 |  |
| extensions.gameplay_rally_util_normalizer.replaceWords `ge` | 2 | 7 |  |
| extensions.gameplay_rawPois.getRawPoiGeneration `ge` | 0 | 100 |  |
| extensions.gameplay_rawPois.getRawPoiListByLevel `ge` | 1 | 30 | multiple |
| extensions.gameplay_rawPois.clear `ge` | 0 | 102 |  |
| extensions.gameplay_sites_sitesManager.getAllLevelSites `ge` | 0 | 13 |  |
| extensions.gameplay_sites_sitesManager.loadSites `ge` | 3 | 30 |  |
| extensions.gameplay_sites_sitesManager.onClientEndMission `ge` | 0 | 62 |  |
| extensions.gameplay_sites_sitesManager.onSerialize `ge` | 0 | 73 |  |
| extensions.gameplay_sites_sitesManager.onDeserialized `ge` | 1 | 89 |  |
| extensions.gameplay_sites_sitesManager.getSitesFilesByLevel `ge` | 0 | 104 |  |
| extensions.gameplay_sites_sitesManager.getCurrentLevelSitesFiles `ge` | 1 | 108 |  |
| extensions.gameplay_sites_sitesManager.getCurrentLevelSitesFileByName `ge` | 1 | 112 |  |
| extensions.gameplay_sites_sitesManager.getBestParkingSpotForVehicleFromList `ge` | 2 | 121 |  |
| extensions.gameplay_skidpadTest.getData `ge` | 0 | 49 |  |
| extensions.gameplay_skidpadTest.startTest `ge` | 1 | 44 |  |
| extensions.gameplay_skidpadTest.cancelTest `ge` | 0 | 53 |  |
| extensions.gameplay_speedTrapLeaderboards.onClientEndMission `ge` | 0 | 94 |  |
| extensions.gameplay_speedTrapLeaderboards.onSerialize `ge` | 0 | 110 |  |
| extensions.gameplay_speedTrapLeaderboards.onDeserialized `ge` | 1 | 116 |  |
| extensions.gameplay_speedTrapLeaderboards.saveLeaderboards `ge` | 2 | 35 |  |
| extensions.gameplay_speedTrapLeaderboards.getLeaderboards `ge` | 0 | 106 |  |
| extensions.gameplay_speedTrapLeaderboards.loadLeaderboards `ge` | 1 | 21 |  |
| extensions.gameplay_speedTrapLeaderboards.addRecord `ge` | 4 | 58 | multiple |
| extensions.gameplay_speedTraps.getSpeedTrapsInCurrentLevel `ge` | 1 | 105 | table |
| extensions.gameplay_statistic.onExtensionUnloaded `ge` | 0 | 72 |  |
| extensions.gameplay_statistic.onSerialize `ge` | 0 | 76 |  |
| extensions.gameplay_statistic.onDeserialized `ge` | 1 | 88 |  |
| extensions.gameplay_statistic.onExtensionLoaded `ge` | 0 | 656 |  |
| extensions.gameplay_statistic.onClientEndMission `ge` | 1 | 450 |  |
| extensions.gameplay_statistic.sendGUIState `ge` | 0 | 618 |  |
| extensions.gameplay_statistic.forceTimerUpdate `ge` | 0 | 660 |  |
| extensions.gameplay_statistic.metricAdd `ge` | 3 | 189 |  |
| extensions.gameplay_statistic.metricSet `ge` | 3 | 229 |  |
| extensions.gameplay_statistic.metricGet `ge` | 2 | 246 |  |
| extensions.gameplay_statistic.timerStart `ge` | 4 | 260 |  |
| extensions.gameplay_statistic.timerStop `ge` | 1 | 283 |  |
| extensions.gameplay_statistic.callbackRegister `ge` | 4 | 293 |  |
| extensions.gameplay_statistic.callbackRemove `ge` | 4 | 315 | boolean |
| extensions.gameplay_statistic.addSchedule `ge` | 1 | 101 |  |
| extensions.gameplay_statistic.removeSchedule `ge` | 1 | 106 | boolean |
| extensions.gameplay_statistic.setDebug `ge` | 1 | 610 |  |
| extensions.gameplay_statisticModules_watchJturn.onExtensionLoaded `ge` | 0 | 91 |  |
| extensions.gameplay_statisticModules_watchJturn.workload `ge` | 3 | 29 |  |
| extensions.gameplay_statisticModules_watchRollover.onExtensionLoaded `ge` | 0 | 66 |  |
| extensions.gameplay_statisticModules_watchRollover.workload `ge` | 3 | 28 |  |
| extensions.gameplay_taxi.startTaxiWithCurrentRoute `ge` | 1 | 238 |  |
| extensions.gameplay_taxi.onChangeDestinationCalled `ge` | 0 | 444 |  |
| extensions.gameplay_taxi.onHurryUpCalled `ge` | 0 | 451 |  |
| extensions.gameplay_taxi.onSkipCalled `ge` | 0 | 456 |  |
| extensions.gameplay_taxi.onTrafficVehicleRespawned `ge` | 1 | 487 |  |
| extensions.gameplay_traffic.spawnTraffic `ge` | 3 | 645 |  |
| extensions.gameplay_traffic.setupTraffic `ge` | 3 | 655 | boolean |
| extensions.gameplay_traffic.setupTrafficWaitForUi `ge` | 1 | 771 |  |
| extensions.gameplay_traffic.setupCustomTraffic `ge` | 2 | 780 |  |
| extensions.gameplay_traffic.insertTraffic `ge` | 3 | 473 |  |
| extensions.gameplay_traffic.removeTraffic `ge` | 2 | 507 |  |
| extensions.gameplay_traffic.deleteVehicles `ge` | 0 | 602 |  |
| extensions.gameplay_traffic.activate `ge` | 2 | 612 |  |
| extensions.gameplay_traffic.deactivate `ge` | 1 | 639 |  |
| extensions.gameplay_traffic.toggle `ge` | 1 | 789 |  |
| extensions.gameplay_traffic.refreshVehicles `ge` | 0 | 387 |  |
| extensions.gameplay_traffic.getFocus `ge` | 0 | 136 |  |
| extensions.gameplay_traffic.setFocus `ge` | 2 | 109 |  |
| extensions.gameplay_traffic.forceTeleport `ge` | 6 | 260 |  |
| extensions.gameplay_traffic.forceTeleportAll `ge` | 3 | 284 |  |
| extensions.gameplay_traffic.scatterTraffic `ge` | 3 | 284 |  |
| extensions.gameplay_traffic.setDebugMode `ge` | 1 | 463 |  |
| extensions.gameplay_traffic.getTrafficPool `ge` | 0 | 89 |  |
| extensions.gameplay_traffic.getTrafficVars `ge` | 0 | 105 |  |
| extensions.gameplay_traffic.setTrafficVars `ge` | 2 | 410 |  |
| extensions.gameplay_traffic.setActiveAmount `ge` | 1 | 468 |  |
| extensions.gameplay_traffic.getIdealSpawnAmount `ge` | 2 | 67 |  |
| extensions.gameplay_traffic.getState `ge` | 0 | 85 |  |
| extensions.gameplay_traffic.freezeState `ge` | 0 | 815 | multiple |
| extensions.gameplay_traffic.unfreezeState `ge` | 3 | 819 |  |
| extensions.gameplay_traffic.getNumOfTraffic `ge` | 1 | 93 |  |
| extensions.gameplay_traffic.getTrafficAmount `ge` | 1 | 93 |  |
| extensions.gameplay_traffic.getTrafficAiVehIds `ge` | 0 | 97 |  |
| extensions.gameplay_traffic.getTrafficList `ge` | 0 | 97 |  |
| extensions.gameplay_traffic.getTrafficData `ge` | 0 | 101 |  |
| extensions.gameplay_traffic.getTraffic `ge` | 0 | 101 |  |
| extensions.gameplay_traffic.onClientEndMission `ge` | 0 | 1089 |  |
| extensions.gameplay_traffic.onUiWaitingState `ge` | 0 | 1096 |  |
| extensions.gameplay_traffic.onSerialize `ge` | 0 | 1114 |  |
| extensions.gameplay_traffic.onDeserialized `ge` | 1 | 1125 |  |
| extensions.gameplay_traffic_trafficUtils.checkSpawnPoint `ge` | 4 | 198 | boolean |
| extensions.gameplay_traffic_trafficUtils.finalizeSpawnPoint `ge` | 5 | 240 | multiple |
| extensions.gameplay_traffic_trafficUtils.findSpawnPoint `ge` | 6 | 462 | multiple |
| extensions.gameplay_traffic_trafficUtils.findSpawnPointOnRoute `ge` | 6 | 462 | multiple |
| extensions.gameplay_traffic_trafficUtils.findSpawnPointOnLine `ge` | 6 | 395 | multiple |
| extensions.gameplay_traffic_trafficUtils.findSpawnPointRadial `ge` | 6 | 327 | multiple |
| extensions.gameplay_traffic_trafficUtils.findSafeSpawnPoint `ge` | 6 | 581 | multiple |
| extensions.gameplay_traffic_trafficUtils.createTrafficGroup `ge` | 4 | 47 |  |
| extensions.gameplay_traffic_trafficUtils.createPoliceGroup `ge` | 2 | 74 |  |
| extensions.gameplay_traffic_trafficUtils.getTrafficGroupFromFile `ge` | 1 | 96 | multiple |
| extensions.gameplay_traffic_trafficUtils.getRoleConstructor `ge` | 1 | 138 |  |
| extensions.gameplay_traffic_trafficUtils.placeTrafficVehicles `ge` | 3 | 602 |  |
| extensions.gameplay_traffic_trafficUtils.getNearestTrafficVehicle `ge` | 2 | 611 | multiple |
| extensions.gameplay_util_crashDetection.onSerialize `ge` | 0 | 734 | table |
| extensions.gameplay_util_crashDetection.onDeserialized `ge` | 1 | 742 |  |
| extensions.gameplay_util_crashDetection.addTrackedVehicleById `ge` | 3 | 633 |  |
| extensions.gameplay_util_crashDetection.removeTrackedVehicleById `ge` | 1 | 715 |  |
| extensions.gameplay_util_crashDetection.setDebug `ge` | 1 | 721 |  |
| extensions.gameplay_util_crashDetection.isVehCrashing `ge` | 1 | 725 |  |
| extensions.gameplay_util_crashDetection.isVehTracked `ge` | 1 | 730 |  |
| extensions.gameplay_util_crashDetection.resetCrashData `ge` | 1 | 73 |  |
| extensions.gameplay_util_damageAssessment.onSerialize `ge` | 0 | 412 | table |
| extensions.gameplay_util_damageAssessment.onDeserialized `ge` | 1 | 418 |  |
| extensions.gameplay_util_damageAssessment.setDebug `ge` | 1 | 428 |  |
| extensions.gameplay_util_damageAssessment.getOverallDamageLevel `ge` | 1 | 149 | table |
| extensions.gameplay_util_damageAssessment.getSectionsDamageInfoRaw `ge` | 1 | 182 |  |
| extensions.gameplay_util_damageAssessment.getTextualCollisionDamageLocations `ge` | 1 | 403 |  |
| extensions.gameplay_util_damageAssessment.getTextualBeamDamageLocations `ge` | 1 | 408 |  |
| extensions.gameplay_util_damageAssessment.calculateDamageVariation `ge` | 2 | 272 |  |
| extensions.gameplay_util_groundContact.isOnWheels `ge` | 1 | 20 |  |
| extensions.gameplay_vehiclePerformance.getClassFromData `ge` | 1 | 85 |  |
| extensions.gameplay_vehiclePerformance.getClassFromVehId `ge` | 1 | 96 |  |
| extensions.gameplay_vehiclePerformance.getClassFromConfig `ge` | 2 | 109 |  |
| extensions.gameplay_vehiclePerformance.getAggregateScores `ge` | 1 | 48 |  |
| extensions.gameplay_walk.isWalking `ge` | 0 | 29 |  |
| extensions.gameplay_walk.getPosRot `ge` | 0 | 310 |  |
| extensions.gameplay_walk.getVehicleInFront `ge` | 0 | 292 |  |
| extensions.gameplay_walk.isAtParkingSpeed `ge` | 0 | 296 |  |
| extensions.gameplay_walk.toggleWalkingMode `ge` | 0 | 157 |  |
| extensions.gameplay_walk.enableToggling `ge` | 1 | 331 |  |
| extensions.gameplay_walk.isTogglingEnabled `ge` | 0 | 335 |  |
| extensions.gameplay_walk.setWalkingMode `ge` | 4 | 131 |  |
| extensions.gameplay_walk.getInVehicle `ge` | 1 | 88 |  |
| extensions.gameplay_walk.getDoorsidePosRot `ge` | 1 | 55 | multiple |
| extensions.gameplay_walk.getPlayerUnicycle `ge` | 1 | 22 |  |
| extensions.gameplay_walk.addVehicleToBlacklist `ge` | 1 | 339 |  |
| extensions.gameplay_walk.removeVehicleFromBlacklist `ge` | 1 | 343 |  |
| extensions.gameplay_walk.isVehicleBlacklisted `ge` | 1 | 347 |  |
| extensions.gameplay_walk.clearBlacklist `ge` | 0 | 351 |  |
| extensions.gameplay_walk.getBlacklist `ge` | 0 | 355 |  |
| extensions.gameplay_walk.setRot `ge` | 2 | 121 |  |
| extensions.gameplay_walk.getPosXYZ `ge` | 0 | 317 |  |
| extensions.gameplay_walk.getRotXYZW `ge` | 0 | 324 |  |
| extensions.gameplay_walk.onSerialize `ge` | 0 | 300 | table |
| extensions.gameplay_walk.onDeserialize `ge` | 1 | 304 |  |
| extensions.remoteControl_remoteControl.onExtensionUnloaded `ge` | 0 | 62 |  |
| extensions.remoteControl_remoteControl.onExtensionLoaded `ge` | 0 | 17 |  |
| extensions.render_hdr.onSerialize `ge` | 0 | 49 | table |
| extensions.render_hdr.onDeserialized `ge` | 1 | 53 |  |
| extensions.render_openxr.setStateUI `ge` | 1 | 208 |  |
| extensions.render_openxr.stateChanged `ge` | 23 | 62 |  |
| extensions.render_openxr.toggle `ge` | 0 | 248 |  |
| extensions.render_openxr.center `ge` | 1 | 256 |  |
| extensions.render_openxr.isSessionRunning `ge` | 0 | 271 |  |
| extensions.render_openxr.restart `ge` | 0 | 203 |  |
| extensions.render_openxr.closeWelcome `ge` | 1 | 132 |  |
| extensions.render_openxr.updateUI `ge` | 1 | 46 |  |
| extensions.render_openxr.errorDetected `ge` | 1 | 275 |  |
| extensions.render_renderViews.takeScreenshot `ge` | 2 | 37 |  |
| extensions.scenario_busdriver.onBusUpdate `ge` | 1 | 668 |  |
| extensions.scenario_busdriver.onExtensionUnloaded `ge` | 0 | 801 |  |
| extensions.scenario_busdriver.fail `ge` | 1 | 80 |  |
| extensions.scenario_busdriver.requestState `ge` | 0 | 820 |  |
| extensions.scenario_busdriver.onClientEndMission `ge` | 0 | 838 |  |
| extensions.scenario_damageGoal.updateFinalStatus `ge` | 2 | 95 |  |
| extensions.scenario_damageGoal.init `ge` | 1 | 68 |  |
| extensions.scenario_damageGoal.processState `ge` | 3 | 36 |  |
| extensions.scenario_distanceGoal.updateFinalStatus `ge` | 2 | 118 |  |
| extensions.scenario_distanceGoal.init `ge` | 1 | 88 |  |
| extensions.scenario_distanceGoal.processState `ge` | 3 | 37 |  |
| extensions.scenario_driftGoal.updateFinalStatus `ge` | 2 | 147 |  |
| extensions.scenario_driftGoal.processState `ge` | 3 | 53 |  |
| extensions.scenario_driftGoal.init `ge` | 1 | 118 |  |
| extensions.scenario_finishRaceGoal.updateFinalStatus `ge` | 1 | 76 |  |
| extensions.scenario_finishRaceGoal.processState `ge` | 3 | 31 |  |
| extensions.scenario_finishRaceGoal.init `ge` | 1 | 66 |  |
| extensions.scenario_nomoveGoal.updateFinalStatus `ge` | 2 | 61 |  |
| extensions.scenario_nomoveGoal.init `ge` | 1 | 45 |  |
| extensions.scenario_nomoveGoal.processState `ge` | 3 | 9 |  |
| extensions.scenario_positionGoal.updateFinalStatus `ge` | 2 | 78 |  |
| extensions.scenario_positionGoal.init `ge` | 1 | 60 |  |
| extensions.scenario_positionGoal.processState `ge` | 3 | 38 |  |
| extensions.scenario_quickRace.getNodesOnBranch `ge` | 2 | 67 |  |
| extensions.scenario_quickRace.onClientEndMission `ge` | 0 | 140 |  |
| extensions.scenario_quickRace.changeTimeTrialConfig `ge` | 0 | 371 |  |
| extensions.scenario_quickRace.onUiChangedState `ge` | 2 | 387 |  |
| extensions.scenario_quickRace.loadVehicle `ge` | 1 | 167 |  |
| extensions.scenario_quickRace.getConfigKey `ge` | 3 | 244 |  |
| extensions.scenario_quickRace.getVehicleBrand `ge` | 1 | 316 |  |
| extensions.scenario_quickRace.getVehicleName `ge` | 1 | 320 |  |
| extensions.scenario_quickRaceLoader.loadQuickrace `ge` | 5 | 451 |  |
| extensions.scenario_quickRaceLoader.getQuickraceList `ge` | 0 | 49 |  |
| extensions.scenario_quickRaceLoader.customPreviewLoader `ge` | 2 | 189 |  |
| extensions.scenario_quickRaceLoader.getTracks `ge` | 3 | 339 |  |
| extensions.scenario_quickRaceLoader.startQuickrace `ge` | 4 | 580 |  |
| extensions.scenario_quickRaceLoader.getLevelList `ge` | 0 | 17 |  |
| extensions.scenario_quickRaceLoader.getLevel `ge` | 1 | 162 |  |
| extensions.scenario_quickRaceLoader.getLevelTrack `ge` | 2 | 175 |  |
| extensions.scenario_quickRaceLoader.getTrackEditorTracks `ge` | 0 | 233 |  |
| extensions.scenario_quickRaceLoader.loadTrackBuilderJSON `ge` | 1 | 320 |  |
| extensions.scenario_quickRaceLoader.uiEventStartHotlapping `ge` | 0 | 591 |  |
| extensions.scenario_quickRaceLoader.uiHotlappingAppDestroyed `ge` | 0 | 603 |  |
| extensions.scenario_raceGoals.updateGoalsFinalStatus `ge` | 0 | 182 |  |
| extensions.scenario_raceGoals.initialiseGoals `ge` | 0 | 128 |  |
| extensions.scenario_raceUI.initialise `ge` | 1 | 10 |  |
| extensions.scenario_race_marker.onClientEndMission `ge` | 0 | 104 |  |
| extensions.scenario_race_marker.init `ge` | 0 | 49 |  |
| extensions.scenario_race_marker.render `ge` | 2 | 75 |  |
| extensions.scenario_race_marker.hide `ge` | 0 | 16 |  |
| extensions.scenario_race_marker.show `ge` | 0 | 22 |  |
| extensions.scenario_race_marker.setToCheckpoints `ge` | 1 | 87 |  |
| extensions.scenario_race_marker.createRaceMarker `ge` | 2 | 28 |  |
| extensions.scenario_race_marker.setupMarkers `ge` | 2 | 56 |  |
| extensions.scenario_race_marker.setModes `ge` | 1 | 82 |  |
| extensions.scenario_race_marker.drawOnMinimap `ge` | 1 | 95 |  |
| extensions.scenario_scenariohelper.queueLuaCommand `ge` | 2 | 9 |  |
| extensions.scenario_scenariohelper.queueLuaCommandByName `ge` | 2 | 19 |  |
| extensions.scenario_scenariohelper.getVehicleByName `ge` | 1 | 14 |  |
| extensions.scenario_scenariohelper.breakBreakGroup `ge` | 2 | 29 |  |
| extensions.scenario_scenariohelper.triggerDeformGroup `ge` | 2 | 34 |  |
| extensions.scenario_scenariohelper.trackVehicle `ge` | 2 | 39 |  |
| extensions.scenario_scenariohelper.setAiMode `ge` | 3 | 44 |  |
| extensions.scenario_scenariohelper.setAiAggression `ge` | 2 | 58 |  |
| extensions.scenario_scenariohelper.setAiAggressionMode `ge` | 2 | 67 |  |
| extensions.scenario_scenariohelper.setAiTarget `ge` | 2 | 74 |  |
| extensions.scenario_scenariohelper.setAiAvoidCars `ge` | 2 | 81 |  |
| extensions.scenario_scenariohelper.setAiRoute `ge` | 2 | 90 |  |
| extensions.scenario_scenariohelper.setAiPath `ge` | 1 | 104 |  |
| extensions.scenario_scenariohelper.setCutOffDrivability `ge` | 2 | 97 |  |
| extensions.scenario_scenariohelper.flashUiMessage `ge` | 3 | 180 |  |
| extensions.scenario_scenariohelper.realTimeUiDisplay `ge` | 1 | 187 |  |
| extensions.scenario_scenariohelper.getDistanceBetweenSceneObjects `ge` | 2 | 191 |  |
| extensions.scenario_scenarios.spawnPrefab `ge` | 6 | 626 |  |
| extensions.scenario_scenarios.executeScenario `ge` | 1 | 1056 |  |
| extensions.scenario_scenarios.stop `ge` | 0 | 405 |  |
| extensions.scenario_scenarios.finish `ge` | 1 | 616 |  |
| extensions.scenario_scenarios.endScenario `ge` | 1 | 1331 |  |
| extensions.scenario_scenarios.getScenario `ge` | 0 | 1319 |  |
| extensions.scenario_scenarios.onClientEndMission `ge` | 0 | 2190 |  |
| extensions.scenario_scenarios.changeState `ge` | 1 | 188 |  |
| extensions.scenario_scenarios.prepareStartUI `ge` | 0 | 349 |  |
| extensions.scenario_scenarios.uiEventRetry `ge` | 0 | 1354 |  |
| extensions.scenario_scenarios.uiEventFreeRoam `ge` | 0 | 1360 |  |
| extensions.scenario_scenarios.getVehicleName `ge` | 1 | 1368 |  |
| extensions.scenario_scenarios.trackVehicleMovementAfterDamage `ge` | 2 | 1372 |  |
| extensions.scenario_scenarios.restartScenario `ge` | 0 | 1082 |  |
| extensions.scenario_scenarios.onFilteredInputChanged `ge` | 3 | 1233 |  |
| extensions.scenario_scenarios.onSerialize `ge` | 0 | 2054 |  |
| extensions.scenario_scenarios.onDeserialized `ge` | 1 | 2081 |  |
| extensions.scenario_scenarios.onExtensionUnloaded `ge` | 0 | 2117 |  |
| extensions.scenario_scenarios.displayStartUI `ge` | 0 | 1397 |  |
| extensions.scenario_scenarios.displayEndUI `ge` | 0 | 1402 |  |
| extensions.scenario_scenarios.updateVehicleAiState `ge` | 2 | 2141 |  |
| extensions.scenario_scenarios.rollingStartTriggered `ge` | 0 | 1460 |  |
| extensions.scenario_scenarios.freezeAll `ge` | 1 | 56 |  |
| extensions.scenario_scenarios.endRace `ge` | 1 | 337 |  |
| extensions.scenario_scenarios.onExtensionLoaded `ge` | 0 | 2122 |  |
| extensions.scenario_scenarios.stopRaceTimer `ge` | 0 | 322 |  |
| extensions.scenario_scenarios.pauseScenario `ge` | 0 | 327 |  |
| extensions.scenario_scenarios.continueScenario `ge` | 0 | 332 |  |
| extensions.scenario_scenarios.getRaceDistance `ge` | 1 | 272 |  |
| extensions.scenario_scenarios.onVehicleSelected `ge` | 1 | 1864 |  |
| extensions.scenario_scenarios.getscenarioName `ge` | 0 | 2112 |  |
| extensions.scenario_scenariosLoader.getScenarioDataForMission `ge` | 1 | 282 |  |
| extensions.scenario_scenariosLoader.getLevels `ge` | 1 | 525 |  |
| extensions.scenario_scenariosLoader.getList `ge` | 3 | 325 |  |
| extensions.scenario_scenariosLoader.loadScenario `ge` | 2 | 260 |  |
| extensions.scenario_scenariosLoader.processScenarioData `ge` | 3 | 38 |  |
| extensions.scenario_scenariosLoader.start `ge` | 1 | 395 |  |
| extensions.scenario_scenariosLoader.startByPath `ge` | 1 | 443 | boolean |
| extensions.scenario_scenariosLoader.load `ge` | 1 | 488 |  |
| extensions.scenario_speedGoal.updateFinalStatus `ge` | 2 | 140 |  |
| extensions.scenario_speedGoal.processState `ge` | 3 | 58 |  |
| extensions.scenario_speedGoal.init `ge` | 1 | 98 |  |
| extensions.scenario_timeLimit.updateFinalStatus `ge` | 2 | 76 |  |
| extensions.scenario_timeLimit.init `ge` | 1 | 55 |  |
| extensions.scenario_timeLimit.processState `ge` | 3 | 21 |  |
| extensions.scenario_waypointAction.updateFinalStatus `ge` | 2 | 55 |  |
| extensions.scenario_waypointAction.init `ge` | 1 | 38 |  |
| extensions.scenario_waypointAction.processState `ge` | 3 | 9 |  |
| extensions.scenario_waypoints.onSerialize `ge` | 0 | 685 |  |
| extensions.scenario_waypoints.onDeserialized `ge` | 1 | 697 |  |
| extensions.scenario_waypoints.onClientEndMission `ge` | 0 | 724 |  |
| extensions.scenario_waypoints.initialise `ge` | 0 | 518 |  |
| extensions.scenario_waypoints.getVehicleWaypointData `ge` | 1 | 680 |  |
| extensions.scenario_waypoints.onScenarioVehicleTrigger `ge` | 3 | 205 |  |
| extensions.scenario_waypoints.deactivateWaypointBranch `ge` | 1 | 309 |  |
| extensions.scenario_waypoints.activateWaypointBranch `ge` | 3 | 324 |  |
| extensions.scenario_waypoints.isFinalWaypoint `ge` | 2 | 665 | boolean |
| extensions.scenario_waypoints.updateResetVehicleData `ge` | 3 | 712 |  |
| extensions.statistics_statistics.getVehicleStat `ge` | 1 | 114 |  |
| extensions.statistics_statistics.getSummaryStats `ge` | 1 | 191 | multiple |
| extensions.statistics_statistics.getScenarioOverallStat `ge` | 1 | 105 |  |
| extensions.statistics_statistics.initialiseArbitraryStat `ge` | 6 | 400 |  |
| extensions.statistics_statistics.stopStatsGathering `ge` | 1 | 648 |  |
| extensions.statistics_statistics.setGoalProgress `ge` | 4 | 210 |  |
| extensions.statistics_statistics.setStatProgress `ge` | 4 | 238 |  |
| extensions.statistics_statistics.disableStatisticTracking `ge` | 2 | 65 |  |
| extensions.statistics_statistics.enableStatisticTracking `ge` | 2 | 33 |  |
| extensions.statistics_statistics.reset `ge` | 0 | 15 |  |
| extensions.statistics_statistics.onSerialize `ge` | 0 | 852 |  |
| extensions.statistics_statistics.onDeserialized `ge` | 1 | 862 |  |
| extensions.statistics_statistics.onResumeCampaign `ge` | 2 | 878 |  |
| extensions.statistics_statistics.getMedalRanking `ge` | 1 | 590 |  |
| extensions.statistics_statistics.DEBUG_generateScoreForMedal `ge` | 1 | 884 |  |
| extensions.tech_adasUltrasonic.onExtensionLoaded `ge` | 0 | 168 |  |
| extensions.tech_adasUltrasonic.onExtensionUnloaded `ge` | 0 | 149 |  |
| extensions.tech_adasUltrasonic.load `ge` | 2 | 119 |  |
| extensions.tech_adasUltrasonic.unload `ge` | 0 | 149 |  |
| extensions.tech_adasUltrasonic.runUpdate `ge` | 1 | 21 |  |
| extensions.tech_adasUltrasonic.receivePOI `ge` | 1 | 115 |  |
| extensions.tech_cameraPreview.onExtensionLoaded `ge` | 0 | 59 |  |
| extensions.tech_cameraPreview.getCamData `ge` | 0 | 147 |  |
| extensions.tech_cameraPreview.changeCamDebugState `ge` | 1 | 68 |  |
| extensions.tech_cameraPreview.visualizeCameraById `ge` | 1 | 122 |  |
| extensions.tech_cameraPreview.stopVisualizeCameraById `ge` | 1 | 135 |  |
| extensions.tech_capturePlayer.mergeCaptures `ge` | 3 | 80 |  |
| extensions.tech_capturePlayer.playCapture `ge` | 5 | 292 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenSetImageProperties `ge` | 1 | 277 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenGenerateOutput `ge` | 1 | 292 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenRunLinear `ge` | 1 | 354 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenRunTBone `ge` | 1 | 411 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenRunPole `ge` | 1 | 484 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenRunNonCrash `ge` | 1 | 520 |  |
| extensions.tech_impactgen_crashOutput.handleImpactGenPostSettings `ge` | 1 | 607 |  |
| extensions.tech_license.isValid `ge` | 0 | 9 |  |
| extensions.tech_license.requestState `ge` | 0 | 19 |  |
| extensions.tech_license.isAllowedInputmapPath `ge` | 1 | 24 |  |
| extensions.tech_license.isAllowedActionsPath `ge` | 1 | 30 |  |
| extensions.tech_lidarTest.onExtensionLoaded `ge` | 0 | 147 |  |
| extensions.tech_lidarTest.onExtensionUnloaded `ge` | 0 | 156 |  |
| extensions.tech_multiscreen.onUnload `ge` | 0 | 65 |  |
| extensions.tech_multiscreen.addView `ge` | 1 | 8 |  |
| extensions.tech_multiscreen.addVehicleView `ge` | 17 | 12 |  |
| extensions.tech_multiscreen.removeAllViews `ge` | 0 | 29 |  |
| extensions.tech_openDriveExporter.export `ge` | 1 | 475 |  |
| extensions.tech_openStreetMapExporter.export `ge` | 1 | 220 |  |
| extensions.tech_partAnnotations.onExtensionLoaded `ge` | 0 | 10 |  |
| extensions.tech_partAnnotations.getPartAnnotation `ge` | 1 | 37 |  |
| extensions.tech_partAnnotations.annotateParts `ge` | 1 | 71 |  |
| extensions.tech_partAnnotations.revertAnnotations `ge` | 1 | 81 |  |
| extensions.tech_partAnnotations.getPartAnnotations `ge` | 1 | 89 |  |
| extensions.tech_platoonFunctions.onExtensionLoaded `ge` | 0 | 358 |  |
| extensions.tech_platoonFunctions.leavePlatoon `ge` | 2 | 243 |  |
| extensions.tech_platoonFunctions.loadWithID `ge` | 4 | 192 |  |
| extensions.tech_platoonFunctions.joinWithID `ge` | 4 | 220 |  |
| extensions.tech_platoonFunctions.changeSpeed `ge` | 1 | 38 |  |
| extensions.tech_platoonFunctions.launchPlatoon `ge` | 3 | 250 |  |
| extensions.tech_platoonFunctions.endPlatoon `ge` | 1 | 258 |  |
| extensions.tech_platoonFunctions.leaderExitPlatoon `ge` | 1 | 273 |  |
| extensions.tech_platoonFunctions.splitPlatoon `ge` | 2 | 301 |  |
| extensions.tech_platoonFunctions.createPlatoon `ge` | 2 | 44 |  |
| extensions.tech_platoonFunctions.addVehicleToPlatoon `ge` | 3 | 73 |  |
| extensions.tech_platoonFunctions.removeVehicleFromPlatoon `ge` | 1 | 121 |  |
| extensions.tech_platoonFunctions.changePlatoonLeaderID `ge` | 1 | 155 |  |
| extensions.tech_platoonFunctions.printPlatoons `ge` | 0 | 179 |  |
| extensions.tech_platoonFunctions.getVehicleIndex `ge` | 2 | 52 |  |
| extensions.tech_platoonFunctions.joinInBetween `ge` | 5 | 313 |  |
| extensions.tech_platoonFunctions.getRelayVehiclesID `ge` | 2 | 107 |  |
| extensions.tech_platoonFunctions.addVehicleInPlatoon `ge` | 4 | 90 |  |
| extensions.tech_pythonExport.coeffs2Python `ge` | 2 | 28 | vec3 |
| extensions.tech_pythonExport.getFullConfigVehicleCallback `ge` | 2 | 154 |  |
| extensions.tech_pythonExport.getFullConfig `ge` | 3 | 165 |  |
| extensions.tech_pythonExport.getScenarioConfig `ge` | 3 | 70 |  |
| extensions.tech_pythonExport.getSensorConfig `ge` | 4 | 93 |  |
| extensions.tech_rawLidar.onRemove `ge` | 0 | 89 |  |
| extensions.tech_rawLidarEmpty.onRemove `ge` | 0 | 37 |  |
| extensions.tech_sensors.updateLuaSensorConfiguration `ge` | 4 | 54 |  |
| extensions.tech_sensors.getSensorName `ge` | 2 | 1389 |  |
| extensions.tech_sensors.getSensorConfiguration `ge` | 2 | 1416 |  |
| extensions.tech_sensors.getActiveSensors `ge` | 0 | 1430 |  |
| extensions.tech_sensors.doesSensorExist `ge` | 1 | 94 |  |
| extensions.tech_sensors.removeSensor `ge` | 1 | 98 |  |
| extensions.tech_sensors.removeAllSensorsFromVehicle `ge` | 1 | 108 |  |
| extensions.tech_sensors.getAverageUpdateTime `ge` | 1 | 115 |  |
| extensions.tech_sensors.getMaxLoadPerFrame `ge` | 0 | 119 |  |
| extensions.tech_sensors.setMaxLoadPerFrame `ge` | 1 | 123 |  |
| extensions.tech_sensors.getFullCameraRequest `ge` | 1 | 142 |  |
| extensions.tech_sensors.sendCameraRequest `ge` | 1 | 128 |  |
| extensions.tech_sensors.sendLidarRequest `ge` | 1 | 129 |  |
| extensions.tech_sensors.sendUltrasonicRequest `ge` | 1 | 130 |  |
| extensions.tech_sensors.sendRadarRequest `ge` | 1 | 131 |  |
| extensions.tech_sensors.collectCameraRequest `ge` | 1 | 133 |  |
| extensions.tech_sensors.collectLidarRequest `ge` | 1 | 135 |  |
| extensions.tech_sensors.collectUltrasonicRequest `ge` | 1 | 136 |  |
| extensions.tech_sensors.collectRadarRequest `ge` | 1 | 137 |  |
| extensions.tech_sensors.isRequestComplete `ge` | 1 | 139 |  |
| extensions.tech_sensors.sendAdvancedIMURequest `ge` | 2 | 158 |  |
| extensions.tech_sensors.collectAdvancedIMURequest `ge` | 1 | 165 | boolean |
| extensions.tech_sensors.sendGPSRequest `ge` | 2 | 174 |  |
| extensions.tech_sensors.collectGPSRequest `ge` | 1 | 181 | boolean |
| extensions.tech_sensors.sendPowertrainRequest `ge` | 2 | 190 |  |
| extensions.tech_sensors.collectPowertrainRequest `ge` | 1 | 197 | boolean |
| extensions.tech_sensors.sendIdealRADARRequest `ge` | 2 | 206 |  |
| extensions.tech_sensors.collectIdealRADARRequest `ge` | 1 | 213 | boolean |
| extensions.tech_sensors.sendRoadsSensorRequest `ge` | 2 | 222 |  |
| extensions.tech_sensors.collectRoadsSensorRequest `ge` | 1 | 229 | boolean |
| extensions.tech_sensors.sendMeshRequest `ge` | 2 | 238 |  |
| extensions.tech_sensors.collectMeshRequest `ge` | 1 | 245 | boolean |
| extensions.tech_sensors.isVluaRequestComplete `ge` | 1 | 254 | boolean |
| extensions.tech_sensors.attachSensor `ge` | 10 | 261 |  |
| extensions.tech_sensors.getSensorMatrix `ge` | 1 | 265 |  |
| extensions.tech_sensors.getWorldFrame `ge` | 1 | 269 |  |
| extensions.tech_sensors.getLocalFrame `ge` | 1 | 273 |  |
| extensions.tech_sensors.getBeamData `ge` | 1 | 277 |  |
| extensions.tech_sensors.getFullTriangleData `ge` | 1 | 289 |  |
| extensions.tech_sensors.getWheelTriangleData `ge` | 2 | 301 |  |
| extensions.tech_sensors.getNodePositions `ge` | 2 | 313 |  |
| extensions.tech_sensors.getClosestMeshPointToGivenPoint `ge` | 2 | 318 |  |
| extensions.tech_sensors.getClosestTriangle `ge` | 3 | 323 |  |
| extensions.tech_sensors.createCamera `ge` | 2 | 328 |  |
| extensions.tech_sensors.createCameraWithSharedMemory `ge` | 2 | 334 |  |
| extensions.tech_sensors.getCameraImage `ge` | 1 | 340 |  |
| extensions.tech_sensors.getCameraAnnotations `ge` | 1 | 346 |  |
| extensions.tech_sensors.getCameraDepth `ge` | 1 | 352 |  |
| extensions.tech_sensors.getCameraData `ge` | 1 | 358 | table |
| extensions.tech_sensors.getCameraDataShmem `ge` | 1 | 365 |  |
| extensions.tech_sensors.processCameraData `ge` | 1 | 369 | table |
| extensions.tech_sensors.getCameraSensorName `ge` | 1 | 386 |  |
| extensions.tech_sensors.getCameraSensorPosition `ge` | 1 | 390 |  |
| extensions.tech_sensors.getCameraSensorDirection `ge` | 1 | 394 |  |
| extensions.tech_sensors.getCameraMaxPendingGpuRequests `ge` | 1 | 398 |  |
| extensions.tech_sensors.getCameraRequestedUpdateTime `ge` | 1 | 402 |  |
| extensions.tech_sensors.getCameraUpdatePriority `ge` | 1 | 406 |  |
| extensions.tech_sensors.getCameraSize `ge` | 1 | 410 |  |
| extensions.tech_sensors.getActiveCameraSensors `ge` | 0 | 414 |  |
| extensions.tech_sensors.setCameraSensorPosition `ge` | 2 | 419 |  |
| extensions.tech_sensors.setCameraSensorDirection `ge` | 2 | 420 |  |
| extensions.tech_sensors.setCameraSensorUp `ge` | 2 | 421 |  |
| extensions.tech_sensors.setCameraSensorResolution `ge` | 3 | 422 |  |
| extensions.tech_sensors.setCameraSensorFOVX `ge` | 2 | 423 |  |
| extensions.tech_sensors.setCameraSensorNearFarPlanes `ge` | 3 | 424 |  |
| extensions.tech_sensors.setCameraMaxPendingGpuRequests `ge` | 2 | 426 |  |
| extensions.tech_sensors.setCameraRequestedUpdateTime `ge` | 2 | 430 |  |
| extensions.tech_sensors.setCameraUpdatePriority `ge` | 2 | 434 |  |
| extensions.tech_sensors.convertWorldPointToPixel `ge` | 2 | 438 |  |
| extensions.tech_sensors.createRawLidar `ge` | 3 | 444 | table |
| extensions.tech_sensors.createLidar `ge` | 2 | 504 |  |
| extensions.tech_sensors.createLidarWithSharedMemory `ge` | 2 | 510 |  |
| extensions.tech_sensors.getLidarPointCloud `ge` | 1 | 516 |  |
| extensions.tech_sensors.getLidarColourData `ge` | 1 | 522 |  |
| extensions.tech_sensors.getLidarPointCloudShmem `ge` | 1 | 547 |  |
| extensions.tech_sensors.getLidarColourDataShmem `ge` | 1 | 551 |  |
| extensions.tech_sensors.getLidarDataPositions `ge` | 1 | 528 | table |
| extensions.tech_sensors.getActiveLidarSensors `ge` | 0 | 555 |  |
| extensions.tech_sensors.getLidarSensorName `ge` | 1 | 559 |  |
| extensions.tech_sensors.getLidarSensorPosition `ge` | 1 | 563 |  |
| extensions.tech_sensors.getLidarSensorDirection `ge` | 1 | 567 |  |
| extensions.tech_sensors.getLidarVerticalResolution `ge` | 1 | 571 |  |
| extensions.tech_sensors.getLidarFrequency `ge` | 1 | 575 |  |
| extensions.tech_sensors.getLidarMaxDistance `ge` | 1 | 579 |  |
| extensions.tech_sensors.getLidarIsVisualised `ge` | 1 | 583 |  |
| extensions.tech_sensors.getLidarIsAnnotated `ge` | 1 | 587 |  |
| extensions.tech_sensors.getLidarMaxPendingGpuRequests `ge` | 1 | 591 |  |
| extensions.tech_sensors.getLidarRequestedUpdateTime `ge` | 1 | 595 |  |
| extensions.tech_sensors.getLidarUpdatePriority `ge` | 1 | 599 |  |
| extensions.tech_sensors.setLidarVerticalResolution `ge` | 2 | 603 |  |
| extensions.tech_sensors.setLidarFrequency `ge` | 2 | 607 |  |
| extensions.tech_sensors.setLidarMaxDistance `ge` | 2 | 611 |  |
| extensions.tech_sensors.setLidarIsVisualised `ge` | 2 | 615 |  |
| extensions.tech_sensors.setLidarIsAnnotated `ge` | 2 | 619 |  |
| extensions.tech_sensors.setLidarMaxPendingGpuRequests `ge` | 2 | 623 |  |
| extensions.tech_sensors.setLidarRequestedUpdateTime `ge` | 2 | 627 |  |
| extensions.tech_sensors.setLidarUpdatePriority `ge` | 2 | 631 |  |
| extensions.tech_sensors.createUltrasonic `ge` | 2 | 635 |  |
| extensions.tech_sensors.getUltrasonicReadings `ge` | 1 | 644 |  |
| extensions.tech_sensors.getActiveUltrasonicSensors `ge` | 0 | 648 |  |
| extensions.tech_sensors.getUltrasonicIsVisualised `ge` | 1 | 652 |  |
| extensions.tech_sensors.getUltrasonicMaxPendingGpuRequests `ge` | 1 | 656 |  |
| extensions.tech_sensors.getUltrasonicRequestedUpdateTime `ge` | 1 | 660 |  |
| extensions.tech_sensors.getUltrasonicUpdatePriority `ge` | 1 | 664 |  |
| extensions.tech_sensors.setUltrasonicIsVisualised `ge` | 2 | 668 |  |
| extensions.tech_sensors.getUltrasonicSensorName `ge` | 1 | 676 |  |
| extensions.tech_sensors.getUltrasonicSensorPosition `ge` | 1 | 680 |  |
| extensions.tech_sensors.getUltrasonicSensorDirection `ge` | 1 | 684 |  |
| extensions.tech_sensors.getUltrasonicSensorRadius `ge` | 2 | 688 |  |
| extensions.tech_sensors.setUltrasonicMaxPendingGpuRequests `ge` | 2 | 692 |  |
| extensions.tech_sensors.setUltrasonicRequestedUpdateTime `ge` | 2 | 696 |  |
| extensions.tech_sensors.setUltrasonicUpdatePriority `ge` | 2 | 700 |  |
| extensions.tech_sensors.createRadar `ge` | 2 | 788 |  |
| extensions.tech_sensors.getRadarReadings `ge` | 1 | 794 |  |
| extensions.tech_sensors.getRadarPPIData `ge` | 1 | 800 |  |
| extensions.tech_sensors.getRadarRangeDopplerData `ge` | 1 | 806 |  |
| extensions.tech_sensors.getActiveRadarSensors `ge` | 0 | 812 |  |
| extensions.tech_sensors.getRadarMaxPendingGpuRequests `ge` | 1 | 816 |  |
| extensions.tech_sensors.getRadarRequestedUpdateTime `ge` | 1 | 820 |  |
| extensions.tech_sensors.getRadarUpdatePriority `ge` | 1 | 824 |  |
| extensions.tech_sensors.getRadarSensorName `ge` | 1 | 828 |  |
| extensions.tech_sensors.getRadarSensorPosition `ge` | 1 | 832 |  |
| extensions.tech_sensors.getRadarSensorDirection `ge` | 1 | 836 |  |
| extensions.tech_sensors.setRadarMaxPendingGpuRequests `ge` | 2 | 840 |  |
| extensions.tech_sensors.setRadarRequestedUpdateTime `ge` | 2 | 844 |  |
| extensions.tech_sensors.setRadarUpdatePriority `ge` | 2 | 848 |  |
| extensions.tech_sensors.createAdvancedIMU `ge` | 2 | 852 |  |
| extensions.tech_sensors.removeAdvancedIMU `ge` | 2 | 904 |  |
| extensions.tech_sensors.getAdvancedIMUReadings `ge` | 1 | 911 |  |
| extensions.tech_sensors.updateAdvancedIMULastReadings `ge` | 1 | 920 |  |
| extensions.tech_sensors.updateAdvancedIMUAdHocRequest `ge` | 1 | 932 |  |
| extensions.tech_sensors.setAdvancedIMUUpdateTime `ge` | 3 | 937 |  |
| extensions.tech_sensors.setAdvancedIMUIsUsingGravity `ge` | 3 | 942 |  |
| extensions.tech_sensors.setAdvancedIMUIsVisualised `ge` | 3 | 948 |  |
| extensions.tech_sensors.createGPS `ge` | 2 | 954 |  |
| extensions.tech_sensors.removeGPS `ge` | 2 | 1002 |  |
| extensions.tech_sensors.getGPSReadings `ge` | 1 | 1009 |  |
| extensions.tech_sensors.updateGPSLastReadings `ge` | 1 | 1018 |  |
| extensions.tech_sensors.updateGPSAdHocRequest `ge` | 1 | 1030 |  |
| extensions.tech_sensors.setGPSUpdateTime `ge` | 3 | 1035 |  |
| extensions.tech_sensors.setGPSIsVisualised `ge` | 3 | 1040 |  |
| extensions.tech_sensors.createPowertrainSensor `ge` | 2 | 1046 |  |
| extensions.tech_sensors.removePowertrainSensor `ge` | 2 | 1066 |  |
| extensions.tech_sensors.getPowertrainReadings `ge` | 1 | 1073 |  |
| extensions.tech_sensors.updatePowertrainLastReadings `ge` | 1 | 1082 |  |
| extensions.tech_sensors.updatePowertrainAdHocRequest `ge` | 1 | 1094 |  |
| extensions.tech_sensors.setPowertrainUpdateTime `ge` | 3 | 1099 |  |
| extensions.tech_sensors.createIdealRADARSensor `ge` | 2 | 1104 |  |
| extensions.tech_sensors.removeIdealRADARSensor `ge` | 2 | 1124 |  |
| extensions.tech_sensors.getIdealRADARReadings `ge` | 1 | 1131 |  |
| extensions.tech_sensors.updateIdealRADARLastReadings `ge` | 1 | 1140 |  |
| extensions.tech_sensors.updateIdealRADARAdHocRequest `ge` | 1 | 1152 |  |
| extensions.tech_sensors.setIdealRADARUpdateTime `ge` | 3 | 1157 |  |
| extensions.tech_sensors.createRoadsSensor `ge` | 2 | 1162 |  |
| extensions.tech_sensors.removeRoadsSensor `ge` | 2 | 1182 |  |
| extensions.tech_sensors.getRoadsSensorReadings `ge` | 1 | 1189 |  |
| extensions.tech_sensors.updateRoadsSensorLastReadings `ge` | 1 | 1198 |  |
| extensions.tech_sensors.updateRoadsSensorAdHocRequest `ge` | 1 | 1210 |  |
| extensions.tech_sensors.setRoadsSensorUpdateTime `ge` | 3 | 1215 |  |
| extensions.tech_sensors.createMeshSensor `ge` | 2 | 1220 |  |
| extensions.tech_sensors.removeMeshSensor `ge` | 2 | 1237 |  |
| extensions.tech_sensors.updateMeshAdHocRequest `ge` | 1 | 1243 |  |
| extensions.tech_sensors.setMeshUpdateTime `ge` | 3 | 1248 |  |
| extensions.tech_sensors.getRoadGraph `ge` | 0 | 1253 | table |
| extensions.tech_sensors.resetNavgraph `ge` | 0 | 1272 |  |
| extensions.tech_sensors.createValidation `ge` | 2 | 1276 |  |
| extensions.tech_sensors.removeValidation `ge` | 2 | 1319 |  |
| extensions.tech_sensors.markVehicleFeedingComplete `ge` | 0 | 1328 |  |
| extensions.tech_sensors.isTimeEvolutionComplete `ge` | 1 | 1324 |  |
| extensions.tech_sensors.createTyreBarrierTest `ge` | 7 | 1333 |  |
| extensions.tech_sensors.removeTyreBarrierTest `ge` | 2 | 1376 |  |
| extensions.tech_sensors.onDeserialized `ge` | 1 | 1503 |  |
| extensions.tech_sumoExporter.export `ge` | 1 | 153 |  |
| extensions.tech_techCore.notifyUI `ge` | 0 | 346 |  |
| extensions.tech_techCore.onSerialize `ge` | 0 | 413 |  |
| extensions.tech_techCore.onDeserialized `ge` | 1 | 428 |  |
| extensions.tech_techCore.isServerRunning `ge` | 0 | 440 |  |
| extensions.tech_techCore.openServer `ge` | 1 | 444 |  |
| extensions.tech_techCore.closeServer `ge` | 0 | 482 |  |
| extensions.tech_techCore.onRequestMissionScreenData `ge` | 1 | 550 |  |
| extensions.tech_techCore.handleHello `ge` | 1 | 693 |  |
| extensions.tech_techCore.handleEcho `ge` | 1 | 702 |  |
| extensions.tech_techCore.handleQuit `ge` | 1 | 716 |  |
| extensions.tech_techCore.handleLoadScenario `ge` | 1 | 722 | boolean |
| extensions.tech_techCore.handleStartScenario `ge` | 1 | 773 | boolean |
| extensions.tech_techCore.handleRestartScenario `ge` | 1 | 799 | boolean |
| extensions.tech_techCore.handleStopScenario `ge` | 1 | 813 |  |
| extensions.tech_techCore.handleGetScenarioName `ge` | 1 | 818 |  |
| extensions.tech_techCore.handleHideHUD `ge` | 1 | 830 |  |
| extensions.tech_techCore.handleShowHUD `ge` | 1 | 834 |  |
| extensions.tech_techCore.handleSetPhysicsDeterministic `ge` | 1 | 838 |  |
| extensions.tech_techCore.handleSetPhysicsNonDeterministic `ge` | 1 | 847 |  |
| extensions.tech_techCore.handleFPSLimit `ge` | 1 | 852 |  |
| extensions.tech_techCore.handleRemoveFPSLimit `ge` | 1 | 859 |  |
| extensions.tech_techCore.handlePause `ge` | 1 | 864 |  |
| extensions.tech_techCore.handleResume `ge` | 1 | 869 |  |
| extensions.tech_techCore.handleStep `ge` | 1 | 874 | boolean |
| extensions.tech_techCore.handleTeleport `ge` | 1 | 883 |  |
| extensions.tech_techCore.handleTeleportScenarioObject `ge` | 1 | 914 |  |
| extensions.tech_techCore.handleStartVehicleConnection `ge` | 1 | 926 | boolean |
| extensions.tech_techCore.handleWaitForSpawn `ge` | 1 | 959 |  |
| extensions.tech_techCore.handleSpawnVehicle `ge` | 1 | 964 |  |
| extensions.tech_techCore.handleDespawnVehicle `ge` | 1 | 1035 |  |
| extensions.tech_techCore.handleSensorRequest `ge` | 1 | 1044 | boolean |
| extensions.tech_techCore.handleGetDecalRoadVertices `ge` | 1 | 1062 |  |
| extensions.tech_techCore.handleGetDecalRoadData `ge` | 1 | 1069 |  |
| extensions.tech_techCore.handleGetRoadNetwork `ge` | 1 | 1086 |  |
| extensions.tech_techCore.handleGetDecalRoadEdges `ge` | 1 | 1121 |  |
| extensions.tech_techCore.handleGetTimeOfDay `ge` | 1 | 1150 |  |
| extensions.tech_techCore.handleTimeOfDayChange `ge` | 1 | 1156 |  |
| extensions.tech_techCore.handleGetAdvancedImuId `ge` | 1 | 1187 |  |
| extensions.tech_techCore.handleGetGPSId `ge` | 1 | 1193 |  |
| extensions.tech_techCore.handleGetPowertrainId `ge` | 1 | 1199 |  |
| extensions.tech_techCore.handleGetMeshId `ge` | 1 | 1205 |  |
| extensions.tech_techCore.handleGetIdealRADARId `ge` | 1 | 1211 |  |
| extensions.tech_techCore.handleGetRoadsSensorId `ge` | 1 | 1217 |  |
| extensions.tech_techCore.handleOpenCamera `ge` | 1 | 1223 |  |
| extensions.tech_techCore.handleCloseCamera `ge` | 1 | 1283 |  |
| extensions.tech_techCore.handlePollCamera `ge` | 1 | 1295 |  |
| extensions.tech_techCore.handleSendAdHocRequestCamera `ge` | 1 | 1323 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyCamera `ge` | 1 | 1329 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestCamera `ge` | 1 | 1335 |  |
| extensions.tech_techCore.handleGetFullCameraRequest `ge` | 1 | 1342 |  |
| extensions.tech_techCore.handleCameraWorldPointToPixel `ge` | 1 | 1362 |  |
| extensions.tech_techCore.handleGetCameraSensorPosition `ge` | 1 | 1369 |  |
| extensions.tech_techCore.handleGetCameraSensorDirection `ge` | 1 | 1375 |  |
| extensions.tech_techCore.handleGetCameraSensorUp `ge` | 1 | 1381 |  |
| extensions.tech_techCore.handleGetCameraMaxPendingGpuRequests `ge` | 1 | 1387 |  |
| extensions.tech_techCore.handleGetCameraRequestedUpdateTime `ge` | 1 | 1393 |  |
| extensions.tech_techCore.handleGetCameraUpdatePriority `ge` | 1 | 1399 |  |
| extensions.tech_techCore.handleSetCameraSensorPosition `ge` | 1 | 1405 |  |
| extensions.tech_techCore.handleSetCameraSensorDirection `ge` | 1 | 1410 |  |
| extensions.tech_techCore.handleSetCameraMaxPendingGpuRequests `ge` | 1 | 1415 |  |
| extensions.tech_techCore.handleSetCameraRequestedUpdateTime `ge` | 1 | 1420 |  |
| extensions.tech_techCore.handleSetCameraUpdatePriority `ge` | 1 | 1425 |  |
| extensions.tech_techCore.handleOpenLidar `ge` | 1 | 1430 |  |
| extensions.tech_techCore.handleCloseLidar `ge` | 1 | 1482 |  |
| extensions.tech_techCore.handlePollLidar `ge` | 1 | 1493 |  |
| extensions.tech_techCore.handleSendAdHocRequestLidar `ge` | 1 | 1519 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyLidar `ge` | 1 | 1525 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestLidar `ge` | 1 | 1531 |  |
| extensions.tech_techCore.handleGetLidarSensorPosition `ge` | 1 | 1537 |  |
| extensions.tech_techCore.handleGetLidarSensorDirection `ge` | 1 | 1543 |  |
| extensions.tech_techCore.handleGetLidarMaxPendingGpuRequests `ge` | 1 | 1549 |  |
| extensions.tech_techCore.handleGetLidarRequestedUpdateTime `ge` | 1 | 1555 |  |
| extensions.tech_techCore.handleGetLidarUpdatePriority `ge` | 1 | 1561 |  |
| extensions.tech_techCore.handleGetLidarVerticalResolution `ge` | 1 | 1567 |  |
| extensions.tech_techCore.handleGetLidarFrequency `ge` | 1 | 1573 |  |
| extensions.tech_techCore.handleGetLidarMaxDistance `ge` | 1 | 1579 |  |
| extensions.tech_techCore.handleGetLidarIsVisualised `ge` | 1 | 1585 |  |
| extensions.tech_techCore.handleGetLidarIsAnnotated `ge` | 1 | 1591 |  |
| extensions.tech_techCore.handleSetLidarVerticalResolution `ge` | 1 | 1597 |  |
| extensions.tech_techCore.handleSetLidarFrequency `ge` | 1 | 1602 |  |
| extensions.tech_techCore.handleSetLidarMaxDistance `ge` | 1 | 1607 |  |
| extensions.tech_techCore.handleSetLidarIsVisualised `ge` | 1 | 1612 |  |
| extensions.tech_techCore.handleSetLidarIsAnnotated `ge` | 1 | 1617 |  |
| extensions.tech_techCore.handleSetLidarMaxPendingGpuRequests `ge` | 1 | 1622 |  |
| extensions.tech_techCore.handleSetLidarRequestedUpdateTime `ge` | 1 | 1627 |  |
| extensions.tech_techCore.handleSetLidarUpdatePriority `ge` | 1 | 1632 |  |
| extensions.tech_techCore.handleOpenUltrasonic `ge` | 1 | 1637 |  |
| extensions.tech_techCore.handleCloseUltrasonic `ge` | 1 | 1684 |  |
| extensions.tech_techCore.handlePollUltrasonic `ge` | 1 | 1696 |  |
| extensions.tech_techCore.handleSendAdHocRequestUltrasonic `ge` | 1 | 1711 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyUltrasonic `ge` | 1 | 1717 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestUltrasonic `ge` | 1 | 1723 |  |
| extensions.tech_techCore.handleGetUltrasonicSensorPosition `ge` | 1 | 1729 |  |
| extensions.tech_techCore.handleGetUltrasonicSensorDirection `ge` | 1 | 1735 |  |
| extensions.tech_techCore.handleGetUltrasonicMaxPendingGpuRequests `ge` | 1 | 1741 |  |
| extensions.tech_techCore.handleGetUltrasonicRequestedUpdateTime `ge` | 1 | 1747 |  |
| extensions.tech_techCore.handleGetUltrasonicUpdatePriority `ge` | 1 | 1753 |  |
| extensions.tech_techCore.handleGetUltrasonicIsVisualised `ge` | 1 | 1759 |  |
| extensions.tech_techCore.handleSetUltrasonicMaxPendingGpuRequests `ge` | 1 | 1765 |  |
| extensions.tech_techCore.handleSetUltrasonicRequestedUpdateTime `ge` | 1 | 1770 |  |
| extensions.tech_techCore.handleSetUltrasonicUpdatePriority `ge` | 1 | 1775 |  |
| extensions.tech_techCore.handleSetUltrasonicIsVisualised `ge` | 1 | 1780 |  |
| extensions.tech_techCore.handleOpenRadar `ge` | 1 | 1785 |  |
| extensions.tech_techCore.handleCloseRadar `ge` | 1 | 1839 |  |
| extensions.tech_techCore.handlePollRadar `ge` | 1 | 1851 |  |
| extensions.tech_techCore.handleGetPPIRadar `ge` | 1 | 1866 |  |
| extensions.tech_techCore.handleGetRangeDopplerRadar `ge` | 1 | 1881 |  |
| extensions.tech_techCore.handleSendAdHocRequestRadar `ge` | 1 | 1896 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyRadar `ge` | 1 | 1902 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestRadar `ge` | 1 | 1908 |  |
| extensions.tech_techCore.handleGetRadarSensorPosition `ge` | 1 | 1914 |  |
| extensions.tech_techCore.handleGetRadarSensorDirection `ge` | 1 | 1920 |  |
| extensions.tech_techCore.handleGetRadarMaxPendingGpuRequests `ge` | 1 | 1926 |  |
| extensions.tech_techCore.handleGetRadarRequestedUpdateTime `ge` | 1 | 1932 |  |
| extensions.tech_techCore.handleGetRadarUpdatePriority `ge` | 1 | 1938 |  |
| extensions.tech_techCore.handleSetRadarMaxPendingGpuRequests `ge` | 1 | 1944 |  |
| extensions.tech_techCore.handleSetRadarRequestedUpdateTime `ge` | 1 | 1949 |  |
| extensions.tech_techCore.handleSetRadarUpdatePriority `ge` | 1 | 1954 |  |
| extensions.tech_techCore.handleOpenAdvancedIMU `ge` | 1 | 1959 |  |
| extensions.tech_techCore.handleCloseAdvancedIMU `ge` | 1 | 1989 |  |
| extensions.tech_techCore.handlePollAdvancedImuGE `ge` | 1 | 2002 |  |
| extensions.tech_techCore.handleSendAdHocRequestAdvancedIMU `ge` | 1 | 2020 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyAdvancedIMU `ge` | 1 | 2026 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestAdvancedIMU `ge` | 1 | 2032 |  |
| extensions.tech_techCore.handleSetAdvancedIMURequestedUpdateTime `ge` | 1 | 2038 |  |
| extensions.tech_techCore.handleSetAdvancedIMUIsUsingGravity `ge` | 1 | 2043 |  |
| extensions.tech_techCore.handleSetAdvancedIMUIsVisualised `ge` | 1 | 2048 |  |
| extensions.tech_techCore.handleOpenGPS `ge` | 1 | 2053 |  |
| extensions.tech_techCore.handleCloseGPS `ge` | 1 | 2081 |  |
| extensions.tech_techCore.handlePollGPSGE `ge` | 1 | 2094 |  |
| extensions.tech_techCore.handleSendAdHocRequestGPS `ge` | 1 | 2112 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyGPS `ge` | 1 | 2118 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestGPS `ge` | 1 | 2124 |  |
| extensions.tech_techCore.handleSetGPSRequestedUpdateTime `ge` | 1 | 2130 |  |
| extensions.tech_techCore.handleSetGPSIsVisualised `ge` | 1 | 2135 |  |
| extensions.tech_techCore.handleOpenPowertrain `ge` | 1 | 2140 |  |
| extensions.tech_techCore.handleClosePowertrain `ge` | 1 | 2161 |  |
| extensions.tech_techCore.handlePollPowertrainGE `ge` | 1 | 2174 |  |
| extensions.tech_techCore.handleSendAdHocRequestPowertrain `ge` | 1 | 2192 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyPowertrain `ge` | 1 | 2198 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestPowertrain `ge` | 1 | 2204 |  |
| extensions.tech_techCore.handleSetPowertrainRequestedUpdateTime `ge` | 1 | 2210 |  |
| extensions.tech_techCore.handleOpenMesh `ge` | 1 | 2215 |  |
| extensions.tech_techCore.handleCloseMesh `ge` | 1 | 2235 |  |
| extensions.tech_techCore.handleSendAdHocRequestMesh `ge` | 1 | 2248 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyMesh `ge` | 1 | 2254 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestMesh `ge` | 1 | 2260 |  |
| extensions.tech_techCore.handleSetMeshRequestedUpdateTime `ge` | 1 | 2266 |  |
| extensions.tech_techCore.handleOpenIdealRADAR `ge` | 1 | 2271 |  |
| extensions.tech_techCore.handleCloseIdealRADAR `ge` | 1 | 2291 |  |
| extensions.tech_techCore.handlePollIdealRADARGE `ge` | 1 | 2304 |  |
| extensions.tech_techCore.handleSendAdHocRequestIdealRADAR `ge` | 1 | 2322 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyIdealRADAR `ge` | 1 | 2328 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestIdealRADAR `ge` | 1 | 2334 |  |
| extensions.tech_techCore.handleSetIdealRADARRequestedUpdateTime `ge` | 1 | 2340 |  |
| extensions.tech_techCore.handleOpenRoadsSensor `ge` | 1 | 2345 |  |
| extensions.tech_techCore.handleCloseRoadsSensor `ge` | 1 | 2366 |  |
| extensions.tech_techCore.handlePollRoadsSensorGE `ge` | 1 | 2379 |  |
| extensions.tech_techCore.handleSendAdHocRequestRoadsSensor `ge` | 1 | 2397 |  |
| extensions.tech_techCore.handleIsAdHocPollRequestReadyRoadsSensor `ge` | 1 | 2403 |  |
| extensions.tech_techCore.handleCollectAdHocPollRequestRoadsSensor `ge` | 1 | 2409 |  |
| extensions.tech_techCore.handleSetRoadsSensorRequestedUpdateTime `ge` | 1 | 2415 |  |
| extensions.tech_techCore.handleOpenVehicleFeeder `ge` | 1 | 2420 |  |
| extensions.tech_techCore.handleCloseVehicleFeeder `ge` | 1 | 2435 |  |
| extensions.tech_techCore.handleIsTimeEvolutionComplete `ge` | 1 | 2448 |  |
| extensions.tech_techCore.handleGetRoadGraph `ge` | 1 | 2455 |  |
| extensions.tech_techCore.handleExportOpenDrive `ge` | 1 | 2461 |  |
| extensions.tech_techCore.handleExportOpenStreetMap `ge` | 1 | 2468 |  |
| extensions.tech_techCore.handleExportSumo `ge` | 1 | 2474 |  |
| extensions.tech_techCore.handleResetNavgraph `ge` | 1 | 2482 |  |
| extensions.tech_techCore.handleGetBeamData `ge` | 1 | 2488 |  |
| extensions.tech_techCore.handleGetFullTriangleData `ge` | 1 | 2494 |  |
| extensions.tech_techCore.handleGetWheelTriangleData `ge` | 1 | 2500 |  |
| extensions.tech_techCore.handleGetNodePositions `ge` | 1 | 2506 |  |
| extensions.tech_techCore.handleGetClosestMeshPointToGivenPoint `ge` | 1 | 2512 |  |
| extensions.tech_techCore.handleGetClosestTriangle `ge` | 1 | 2518 |  |
| extensions.tech_techCore.handleSetWeatherPreset `ge` | 1 | 2524 |  |
| extensions.tech_techCore.handleDisplayGuiMessage `ge` | 1 | 2531 |  |
| extensions.tech_techCore.handleSwitchVehicle `ge` | 1 | 2537 |  |
| extensions.tech_techCore.handleSetFreeCamera `ge` | 1 | 2544 |  |
| extensions.tech_techCore.handleParticlesEnabled `ge` | 1 | 2554 |  |
| extensions.tech_techCore.handleAnnotateParts `ge` | 1 | 2560 |  |
| extensions.tech_techCore.handleRevertAnnotations `ge` | 1 | 2566 |  |
| extensions.tech_techCore.handleGetPartAnnotations `ge` | 1 | 2572 |  |
| extensions.tech_techCore.handleGetPartAnnotation `ge` | 1 | 2582 |  |
| extensions.tech_techCore.handleGetAnnotations `ge` | 1 | 2591 |  |
| extensions.tech_techCore.handleFindObjectsClass `ge` | 1 | 2605 |  |
| extensions.tech_techCore.handleCreateCylinder `ge` | 1 | 2646 |  |
| extensions.tech_techCore.handleCreateBump `ge` | 1 | 2661 |  |
| extensions.tech_techCore.handleCreateCone `ge` | 1 | 2679 |  |
| extensions.tech_techCore.handleCreateCube `ge` | 1 | 2694 |  |
| extensions.tech_techCore.handleCreateRing `ge` | 1 | 2708 |  |
| extensions.tech_techCore.handleRemoveObject `ge` | 1 | 2723 |  |
| extensions.tech_techCore.handleGetBBoxCorners `ge` | 1 | 2735 |  |
| extensions.tech_techCore.handleGetGravity `ge` | 1 | 2749 |  |
| extensions.tech_techCore.handleSetGravity `ge` | 1 | 2753 |  |
| extensions.tech_techCore.handleGetAvailableVehicles `ge` | 1 | 2759 |  |
| extensions.tech_techCore.handleSpawnTraffic `ge` | 1 | 2791 |  |
| extensions.tech_techCore.handleStartTraffic `ge` | 1 | 2802 |  |
| extensions.tech_techCore.handleResetTraffic `ge` | 1 | 2820 |  |
| extensions.tech_techCore.handleStopTraffic `ge` | 1 | 2825 |  |
| extensions.tech_techCore.handleChangeSetting `ge` | 1 | 2831 |  |
| extensions.tech_techCore.handleApplyGraphicsSetting `ge` | 1 | 2838 |  |
| extensions.tech_techCore.handleSetRelativeCam `ge` | 1 | 2843 | boolean |
| extensions.tech_techCore.handleAddDebugSpheres `ge` | 1 | 2865 |  |
| extensions.tech_techCore.handleRemoveDebugObjects `ge` | 1 | 2880 |  |
| extensions.tech_techCore.handleAddDebugPolyline `ge` | 1 | 2887 |  |
| extensions.tech_techCore.handleAddDebugCylinder `ge` | 1 | 2903 |  |
| extensions.tech_techCore.handleAddDebugTriangle `ge` | 1 | 2914 |  |
| extensions.tech_techCore.handleAddDebugRectangle `ge` | 1 | 2926 |  |
| extensions.tech_techCore.handleAddDebugText `ge` | 1 | 2939 |  |
| extensions.tech_techCore.handleAddDebugSquarePrism `ge` | 1 | 2950 |  |
| extensions.tech_techCore.handleQueueLuaCommandGE `ge` | 1 | 2964 |  |
| extensions.tech_techCore.handleGetLevels `ge` | 1 | 2986 |  |
| extensions.tech_techCore.handleGetScenarios `ge` | 1 | 2992 |  |
| extensions.tech_techCore.handleGetCurrentScenario `ge` | 1 | 3018 |  |
| extensions.tech_techCore.handleCreateScenario `ge` | 1 | 3062 | boolean |
| extensions.tech_techCore.handleDeleteScenario `ge` | 1 | 3153 |  |
| extensions.tech_techCore.handleGameStateRequest `ge` | 1 | 3166 |  |
| extensions.tech_techCore.handleGetPlayerVehicleID `ge` | 1 | 3183 |  |
| extensions.tech_techCore.handleGetCurrentVehicles `ge` | 1 | 3197 |  |
| extensions.tech_techCore.handleGetSceneTree `ge` | 1 | 3263 |  |
| extensions.tech_techCore.handleSyncScene `ge` | 1 | 3453 |  |
| extensions.tech_techCore.handleGetObject `ge` | 1 | 3460 |  |
| extensions.tech_techCore.handleGetPartConfig `ge` | 1 | 3472 |  |
| extensions.tech_techCore.handleGetPartConfigForConfig `ge` | 1 | 3492 |  |
| extensions.tech_techCore.handleGetPartOptions `ge` | 1 | 3509 |  |
| extensions.tech_techCore.handleSetPartConfig `ge` | 1 | 3524 |  |
| extensions.tech_techCore.handleSetPlayerCameraMode `ge` | 1 | 3544 |  |
| extensions.tech_techCore.handleGetPlayerCameraMode `ge` | 1 | 3577 |  |
| extensions.tech_techCore.handleLoadTrackBuilderTrack `ge` | 1 | 3588 |  |
| extensions.tech_techCore.handleSetLicensePlate `ge` | 1 | 3611 |  |
| extensions.tech_techCore.handleGetSystemInfo `ge` | 1 | 3626 |  |
| extensions.tech_techCore.handleImportHeightmap `ge` | 1 | 3648 |  |
| extensions.tech_techCore.handleTerrainAndRoadImport `ge` | 1 | 3656 |  |
| extensions.tech_techCore.handlePeaksAndRoadImport `ge` | 1 | 3664 |  |
| extensions.tech_techCore.handleResetTerrain `ge` | 1 | 3671 |  |
| extensions.tech_techCore.handleOpenCloseWorldEditor `ge` | 1 | 3678 |  |
| extensions.tech_techCore.handleUnpackVehicleSensorConfiguration `ge` | 1 | 3704 |  |
| extensions.tech_techCore.handleUnpackMapSensorConfiguration `ge` | 1 | 3730 |  |
| extensions.tech_techCore.handleGetEnvironmentPaths `ge` | 1 | 3742 |  |
| extensions.tech_techCore.handleLoadPlatoon `ge` | 1 | 3751 |  |
| extensions.tech_techCore.handlePlatoonSpeed `ge` | 1 | 3795 |  |
| extensions.tech_techCore.handleJoinPlatoon `ge` | 1 | 3818 |  |
| extensions.tech_techCore.handleJoinMiddlePlatoon `ge` | 1 | 3841 |  |
| extensions.tech_techCore.handleLeavePlatoon `ge` | 1 | 3866 |  |
| extensions.tech_techCore.handleLoadUltrasonicADAS `ge` | 1 | 3889 |  |
| extensions.tech_techCore.handleUnloadUltrasonicADAS `ge` | 1 | 3905 |  |
| extensions.tech_techCore.setTcomParams `ge` | 2 | 3929 |  |
| extensions.tech_techCore.getTcomParams `ge` | 0 | 3938 |  |
| extensions.tech_techCore.isScenarioUnrestricted `ge` | 0 | 3942 |  |
| extensions.tech_terrainImporter.importHeightmap `ge` | 7 | 36 |  |
| extensions.tech_terrainImporter.terrainAndRoadImport `ge` | 5 | 72 |  |
| extensions.tech_terrainImporter.peaksAndRoadImport `ge` | 4 | 80 |  |
| extensions.tech_terrainImporter.reset `ge` | 0 | 88 |  |
| extensions.tech_terrainImporter.toggleWorldEditor `ge` | 1 | 91 |  |
| extensions.tech_ultrasonicTest.executeUltrasonicTest `ge` | 0 | 24 |  |
| extensions.tech_ultrasonicTest.onExtensionUnloaded `ge` | 0 | 260 |  |
| extensions.tech_ultrasonicTest.createUltrasonic `ge` | 1 | 208 |  |
| extensions.tech_utils.onExtensionLoaded `ge` | 0 | 223 |  |
| extensions.tech_utils.onClientEndMission `ge` | 0 | 188 |  |
| extensions.tech_utils.toggleLidar `ge` | 0 | 61 |  |
| extensions.tech_utils.toggleAnnotations `ge` | 0 | 100 |  |
| extensions.tech_utils.toggleUltrasonic `ge` | 0 | 119 |  |
| extensions.tech_utils.toggleSecondView `ge` | 0 | 228 |  |
| extensions.tech_utils.toggleVehicleSystemsCoupling `ge` | 0 | 256 |  |
| extensions.telemetry_core.saveTelemetryData `ge` | 0 | 249 |  |
| extensions.telemetry_core.addEvent `ge` | 1 | 39 |  |
| extensions.telemetry_core.startActivity `ge` | 2 | 237 |  |
| extensions.telemetry_core.endActivity `ge` | 2 | 243 |  |
| extensions.telemetry_core.onExtensionLoaded `ge` | 0 | 202 | boolean |
| extensions.telemetry_core.onExtensionUnloaded `ge` | 0 | 230 |  |
| extensions.trackbuilder_trackBuilder.showTrackBuilder `ge` | 0 | 3520 |  |
| extensions.trackbuilder_trackBuilder.hideTrackBuilder `ge` | 0 | 3528 |  |
| extensions.trackbuilder_trackBuilder.toggleTrackBuilder `ge` | 0 | 3540 |  |
| extensions.trackbuilder_trackBuilder.showTrackBuilderWindow `ge` | 1 | 3487 |  |
| extensions.trackbuilder_trackBuilder.onClientEndMission `ge` | 0 | 3528 |  |
| extensions.ui_ambientSound.init `ge` | 1 | 69 |  |
| extensions.ui_ambientSound.update `ge` | 1 | 44 |  |
| extensions.ui_ambientSound.deleteSoundSFX `ge` | 1 | 90 |  |
| extensions.ui_ambientSound.setStreamState `ge` | 4 | 33 |  |
| extensions.ui_apps.getAvailableLayouts `ge` | 0 | 67 |  |
| extensions.ui_apps.requestUIAppsData `ge` | 0 | 150 |  |
| extensions.ui_apps.getUIAppsData `ge` | 0 | 146 | table |
| extensions.ui_apps.saveLayout `ge` | 1 | 189 |  |
| extensions.ui_apps.deleteLayout `ge` | 1 | 203 |  |
| extensions.ui_apps.isAppOnLayout `ge` | 2 | 236 | boolean |
| extensions.ui_appSelector_general.getAppData `ge` | 0 | 177 |  |
| extensions.ui_apps_genericMissionData.setData `ge` | 1 | 37 |  |
| extensions.ui_apps_genericMissionData.clearData `ge` | 0 | 17 |  |
| extensions.ui_apps_genericMissionData.sendAllData `ge` | 0 | 26 |  |
| extensions.ui_apps_minimap_additionalInfo.requestAdditionalInfo `ge` | 0 | 5 |  |
| extensions.ui_apps_minimap_additionalInfo.onClientEndMission `ge` | 0 | 91 |  |
| extensions.ui_apps_minimap_minimap.getScale `ge` | 0 | 43 |  |
| extensions.ui_apps_minimap_minimap.drawOcclusion `ge` | 2 | 524 |  |
| extensions.ui_apps_minimap_minimap.drawDebugOverlay `ge` | 0 | 576 |  |
| extensions.ui_apps_minimap_minimap.getMode `ge` | 0 | 603 |  |
| extensions.ui_apps_minimap_minimap.setOcclusionTransform `ge` | 5 | 646 |  |
| extensions.ui_apps_minimap_minimap.resetOcclusionTransform `ge` | 1 | 654 |  |
| extensions.ui_apps_minimap_minimap.setDrawTransform `ge` | 4 | 633 |  |
| extensions.ui_apps_minimap_minimap.setBuffers `ge` | 4 | 626 |  |
| extensions.ui_apps_minimap_minimap.hide `ge` | 0 | 663 |  |
| extensions.ui_apps_minimap_minimap.toggledebugSettings `ge` | 0 | 671 |  |
| extensions.ui_apps_minimap_minimap.getDebugSettingsData `ge` | 0 | 683 |  |
| extensions.ui_apps_minimap_minimap.onClientEndMission `ge` | 0 | 687 |  |
| extensions.ui_apps_minimap_roads.drawRoads `ge` | 7 | 15 |  |
| extensions.ui_apps_minimap_roads.reset `ge` | 0 | 96 |  |
| extensions.ui_apps_minimap_route.drawNavigationRoute `ge` | 2 | 61 |  |
| extensions.ui_apps_minimap_route.drawRoutePointer `ge` | 1 | 77 |  |
| extensions.ui_apps_minimap_topomap.drawContours `ge` | 6 | 385 |  |
| extensions.ui_apps_minimap_topomap.loadTopoMap `ge` | 0 | 357 | boolean |
| extensions.ui_apps_minimap_topomap.isLoaded `ge` | 0 | 410 |  |
| extensions.ui_apps_minimap_topomap.getHeightmapData `ge` | 0 | 411 |  |
| extensions.ui_apps_minimap_topomap.getHeightmapBounds `ge` | 0 | 412 |  |
| extensions.ui_apps_minimap_topomap.getContourSegments `ge` | 0 | 413 |  |
| extensions.ui_apps_minimap_topomap.getContourQuadtree `ge` | 0 | 414 |  |
| extensions.ui_apps_minimap_topomap.onClientEndMission `ge` | 0 | 417 |  |
| extensions.ui_apps_minimap_utils.setMinimapState `ge` | 14 | 35 |  |
| extensions.ui_apps_minimap_utils.isInsideMinimapBounds `ge` | 2 | 138 |  |
| extensions.ui_apps_minimap_utils.worldToMap `ge` | 1 | 64 |  |
| extensions.ui_apps_minimap_utils.worldToMapXYZ `ge` | 2 | 78 |  |
| extensions.ui_apps_minimap_utils.worldToMapXY `ge` | 2 | 95 | multiple |
| extensions.ui_apps_minimap_utils.mapToWorld `ge` | 1 | 129 |  |
| extensions.ui_apps_minimap_utils.simpleCircle `ge` | 4 | 236 |  |
| extensions.ui_apps_minimap_utils.simpleLine `ge` | 4 | 244 |  |
| extensions.ui_apps_minimap_utils.simpleCircleWithEdgePointer `ge` | 4 | 315 |  |
| extensions.ui_apps_minimap_utils.simpleLineWithEdgePointer `ge` | 4 | 322 |  |
| extensions.ui_apps_minimap_utils.drawEdgePointer `ge` | 5 | 256 | boolean |
| extensions.ui_apps_minimap_utils.clampToMinimapBounds `ge` | 2 | 146 |  |
| extensions.ui_apps_minimap_utils.setClampToBounds `ge` | 3 | 156 | multiple |
| extensions.ui_apps_minimap_utils.drawGrid `ge` | 0 | 347 |  |
| extensions.ui_apps_minimap_utils.getStyleColorSet `ge` | 0 | 471 |  |
| extensions.ui_apps_minimap_utils.getDefaultStyleColorSet `ge` | 0 | 476 |  |
| extensions.ui_apps_minimap_utils.getCurrentStyleColors `ge` | 0 | 481 |  |
| extensions.ui_apps_minimap_vehicles.setMinimapState `ge` | 13 | 32 |  |
| extensions.ui_apps_minimap_vehicles.drawPlayer `ge` | 2 | 131 |  |
| extensions.ui_apps_minimap_vehicles.drawOtherVehicles `ge` | 2 | 222 |  |
| extensions.ui_apps_pointsBar.setPoints `ge` | 2 | 26 |  |
| extensions.ui_apps_pointsBar.setThresholds `ge` | 1 | 41 |  |
| extensions.ui_apps_pointsBar.clearData `ge` | 0 | 55 |  |
| extensions.ui_apps_pointsBar.requestAllData `ge` | 0 | 60 |  |
| extensions.ui_audio.playEventSound `ge` | 2 | 12 |  |
| extensions.ui_bindingsLegend.addActions `ge` | 3 | 493 |  |
| extensions.ui_bindingsLegend.sendDataToUI `ge` | 1 | 369 |  |
| extensions.ui_bindingsLegend.toggleShowVehicleSpecificActions `ge` | 0 | 646 |  |
| extensions.ui_bindingsLegend.enableShowVehicleSpecificActions `ge` | 1 | 627 |  |
| extensions.ui_bindingsLegend.setDebug `ge` | 1 | 72 |  |
| extensions.ui_bindingsLegend.triggerInputAction `ge` | 2 | 697 |  |
| extensions.ui_bindingsLegend.resetFade `ge` | 0 | 97 |  |
| extensions.ui_bindingsLegend.toggleShowApp `ge` | 0 | 713 |  |
| extensions.ui_bindingsLegend.onModifierChanged `ge` | 1 | 530 |  |
| extensions.ui_bindingsLegend.onClientEndMission `ge` | 0 | 653 |  |
| extensions.ui_bindingsLegend.onExtensionLoaded `ge` | 0 | 690 |  |
| extensions.ui_bindingsLegend.onDeviceChanged `ge` | 0 | 702 |  |
| extensions.ui_bindingsLegend.onDeserialized `ge` | 1 | 707 |  |
| extensions.ui_console.onExtensionLoaded `ge` | 0 | 1230 |  |
| extensions.ui_console.onSerialize `ge` | 0 | 1199 |  |
| extensions.ui_console.onDeserialized `ge` | 1 | 1215 |  |
| extensions.ui_console.show `ge` | 0 | 168 |  |
| extensions.ui_console.hide `ge` | 0 | 172 |  |
| extensions.ui_console.toggle `ge` | 0 | 176 |  |
| extensions.ui_credits.onExtensionLoaded `ge` | 0 | 12 |  |
| extensions.ui_credits.onExtensionUnloaded `ge` | 0 | 22 |  |
| extensions.ui_extApp.onExtensionLoaded `ge` | 0 | 24 |  |
| extensions.ui_extApp.onExtensionUnloaded `ge` | 0 | 30 |  |
| extensions.ui_extApp.requestUIData `ge` | 0 | 19 |  |
| extensions.ui_fadeScreen.fadeToBlack `ge` | 3 | 13 |  |
| extensions.ui_fadeScreen.fadeFromBlack `ge` | 2 | 38 |  |
| extensions.ui_fadeScreen.fadeSequence `ge` | 5 | 55 |  |
| extensions.ui_fadeScreen.start `ge` | 3 | 13 |  |
| extensions.ui_fadeScreen.stop `ge` | 2 | 38 |  |
| extensions.ui_fadeScreen.cycle `ge` | 5 | 55 |  |
| extensions.ui_fadeScreen.onScreenFadeStateDelayed `ge` | 1 | 64 |  |
| extensions.ui_freeroamSelector_general.getGameplayData `ge` | 0 | 343 |  |
| extensions.ui_gameBlur.replaceGroup `ge` | 2 | 31 |  |
| extensions.ui_gameBlur.removeGroup `ge` | 1 | 35 |  |
| extensions.ui_gameBlur.removeAllGroups `ge` | 0 | 39 |  |
| extensions.ui_gameplayAppContainers.onExtensionLoaded `ge` | 0 | 185 |  |
| extensions.ui_gameplayAppContainers.onExtensionUnloaded `ge` | 0 | 483 |  |
| extensions.ui_gameplayAppContainers.clearMessagesFromSource `ge` | 1 | 261 |  |
| extensions.ui_gameplayAppContainers.clearAllFlashMessages `ge` | 0 | 286 |  |
| extensions.ui_gameplayAppContainers.onScenarioFlashMessage `ge` | 1 | 190 |  |
| extensions.ui_gameplayAppContainers.onScenarioFlashMessageClear `ge` | 0 | 219 |  |
| extensions.ui_gameplayAppContainers.onScenarioNotRunning `ge` | 0 | 224 |  |
| extensions.ui_gameplayAppContainers.onGameplayAppContainerMounted `ge` | 0 | 489 |  |
| extensions.ui_gameplayAppContainers.onGameplayAppContainerUnmounted `ge` | 0 | 493 |  |
| extensions.ui_gameplayAppContainers.getGameplayAppContainerMounted `ge` | 0 | 497 |  |
| extensions.ui_gameplayAppContainers.setVerboseLogging `ge` | 1 | 180 |  |
| extensions.ui_gameplayAppContainers.setDebug `ge` | 1 | 175 |  |
| extensions.ui_gameplayAppContainers.setContainerContext `ge` | 2 | 142 |  |
| extensions.ui_gameplayAppContainers.getContainerContext `ge` | 1 | 165 |  |
| extensions.ui_gameplayAppContainers.resetContainerContext `ge` | 1 | 156 |  |
| extensions.ui_gameplayAppContainers.getAvailableContexts `ge` | 1 | 129 |  |
| extensions.ui_gameplayAppContainers.setAppVisibility `ge` | 3 | 33 |  |
| extensions.ui_gameplayAppContainers.getAppVisibility `ge` | 2 | 53 |  |
| extensions.ui_gameplayAppContainers.showApp `ge` | 2 | 82 |  |
| extensions.ui_gameplayAppContainers.hideApp `ge` | 2 | 86 |  |
| extensions.ui_gameplayAppContainers.toggleApp `ge` | 2 | 90 |  |
| extensions.ui_gameplayAppContainers.hideAllApps `ge` | 1 | 66 |  |
| extensions.ui_gameplayAppContainers.getVisibleApps `ge` | 1 | 95 |  |
| extensions.ui_gameplayAppContainers.getAvailableApps `ge` | 1 | 129 |  |
| extensions.ui_gameplayAppContainers.onSerialize `ge` | 0 | 110 |  |
| extensions.ui_gameplayAppContainers.onDeserialize `ge` | 1 | 121 |  |
| extensions.ui_gameplaySelector_general.getGameplayData `ge` | 0 | 365 |  |
| extensions.ui_gameplaySelector_tileClustering.setBackend `ge` | 1 | 4 |  |
| extensions.ui_gameplaySelector_tileClustering.getClusteredItemsFavouriteIconPercent `ge` | 1 | 40 | multiple |
| extensions.ui_gameplaySelector_tileClustering.getClusteredItemsStats `ge` | 2 | 67 | multiple |
| extensions.ui_gameplaySelector_tileClustering.getSourceIcons `ge` | 1 | 141 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.onFilterCustomLevelTiles `ge` | 3 | 239 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.setAlwaysShowDialogue `ge` | 2 | 280 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.openLevelConfigurationPopup `ge` | 1 | 289 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.onFreeroamSelectorOpenedWithItemDetails `ge` | 2 | 294 |  |
| extensions.ui_gridSelector.getBackendByName `ge` | 1 | 4 |  |
| extensions.ui_gridSelector.getTiles `ge` | 1+ | 19 |  |
| extensions.ui_gridSelector.getFilters `ge` | 1+ | 21 |  |
| extensions.ui_gridSelector.getActiveFilters `ge` | 1+ | 22 |  |
| extensions.ui_gridSelector.toggleFilter `ge` | 1+ | 23 |  |
| extensions.ui_gridSelector.updateRangeFilter `ge` | 1+ | 24 |  |
| extensions.ui_gridSelector.resetRangeFilter `ge` | 1+ | 25 |  |
| extensions.ui_gridSelector.resetSetFilter `ge` | 1+ | 26 |  |
| extensions.ui_gridSelector.getSearchText `ge` | 1+ | 27 |  |
| extensions.ui_gridSelector.setSearchText `ge` | 1+ | 28 |  |
| extensions.ui_gridSelector.getDisplayDataOptions `ge` | 1+ | 30 |  |
| extensions.ui_gridSelector.setDisplayDataOption `ge` | 1+ | 31 |  |
| extensions.ui_gridSelector.resetDisplayDataToDefaults `ge` | 1+ | 32 |  |
| extensions.ui_gridSelector.getScreenHeaderTitleAndPath `ge` | 1+ | 34 |  |
| extensions.ui_gridSelector.profilerFinish `ge` | 1+ | 35 |  |
| extensions.ui_gridSelector.closedFromUI `ge` | 1+ | 36 |  |
| extensions.ui_gridSelector.getDetails `ge` | 1+ | 38 |  |
| extensions.ui_gridSelector.executeButton `ge` | 1+ | 39 |  |
| extensions.ui_gridSelector.getManagementDetails `ge` | 1+ | 40 |  |
| extensions.ui_gridSelector.exitCallback `ge` | 1+ | 41 |  |
| extensions.ui_gridSelector.executeDoubleClick `ge` | 1+ | 42 |  |
| extensions.ui_gridSelector.toggleFavourite `ge` | 1+ | 45 |  |
| extensions.ui_gridSelector.exploreFolder `ge` | 2 | 48 |  |
| extensions.ui_gridSelector.goToMod `ge` | 2 | 52 |  |
| extensions.ui_gridSelectorUtils_translateHelper.translate `ge` | 1 | 48 |  |
| extensions.ui_liveryEditor.setDecalTexture `ge` | 1 | 70 |  |
| extensions.ui_liveryEditor.save `ge` | 1 | 74 |  |
| extensions.ui_liveryEditor.setup `ge` | 1 | 83 |  |
| extensions.ui_liveryEditor.deactivate `ge` | 0 | 126 |  |
| extensions.ui_liveryEditor.useSurfaceNormal `ge` | 1 | 140 |  |
| extensions.ui_liveryEditor.useMousePosition `ge` | 1 | 144 |  |
| extensions.ui_liveryEditor.requestSettingsData `ge` | 0 | 164 |  |
| extensions.ui_liveryEditor_camera.setCameraByLayer `ge` | 1 | 162 |  |
| extensions.ui_liveryEditor_camera.setOrthographicView `ge` | 1 | 166 |  |
| extensions.ui_liveryEditor_camera.switchToOrbit `ge` | 1 | 174 |  |
| extensions.ui_liveryEditor_camera.setOrthographicViewByPosition `ge` | 1 | 178 |  |
| extensions.ui_liveryEditor_camera.setOrthographicViewLayer `ge` | 1 | 183 |  |
| extensions.ui_liveryEditor_camera.getViewPointByLayer `ge` | 1 | 188 |  |
| extensions.ui_liveryEditor_camera.switchOrthographicViewByDirection `ge` | 2 | 192 |  |
| extensions.ui_liveryEditor_camera.getOrthographicViewByPosition `ge` | 1 | 230 |  |
| extensions.ui_liveryEditor_camera.getCoordinatesByView `ge` | 1 | 244 |  |
| extensions.ui_liveryEditor_camera.getOrthographicView `ge` | 0 | 248 |  |
| extensions.ui_liveryEditor_camera.getCoordinates `ge` | 0 | 252 |  |
| extensions.ui_liveryEditor_controls.useMouseProjection `ge` | 0 | 38 |  |
| extensions.ui_liveryEditor_controls.useCursorProjection `ge` | 0 | 55 |  |
| extensions.ui_liveryEditor_controls.useActionMap `ge` | 1 | 71 |  |
| extensions.ui_liveryEditor_controls.disableAllActionMaps `ge` | 0 | 25 |  |
| extensions.ui_liveryEditor_controls.toggleEditActionMaps `ge` | 1 | 96 |  |
| extensions.ui_liveryEditor_controls.enableVehicleControls `ge` | 1 | 104 |  |
| extensions.ui_liveryEditor_controls.disableAllActionMaps `ge` | 0 | 25 |  |
| extensions.ui_liveryEditor_editor.setup `ge` | 0 | 69 |  |
| extensions.ui_liveryEditor_editor.startEditor `ge` | 0 | 88 |  |
| extensions.ui_liveryEditor_editor.startSession `ge` | 0 | 109 |  |
| extensions.ui_liveryEditor_editor.createNew `ge` | 0 | 131 |  |
| extensions.ui_liveryEditor_editor.loadFile `ge` | 1 | 136 | boolean |
| extensions.ui_liveryEditor_editor.save `ge` | 1 | 148 |  |
| extensions.ui_liveryEditor_editor.applySkin `ge` | 0 | 168 |  |
| extensions.ui_liveryEditor_editor.exitEditor `ge` | 0 | 179 |  |
| extensions.ui_liveryEditor_history.undo `ge` | 0 | 9 |  |
| extensions.ui_liveryEditor_history.redo `ge` | 0 | 13 |  |
| extensions.ui_liveryEditor_layerAction.toggleEnabledByLayerUid `ge` | 1 | 166 |  |
| extensions.ui_liveryEditor_layerAction.performAction `ge` | 1 | 179 |  |
| extensions.ui_liveryEditor_layerEdit.setup `ge` | 0 | 37 |  |
| extensions.ui_liveryEditor_layerEdit.editNewDecal `ge` | 1 | 41 |  |
| extensions.ui_liveryEditor_layerEdit.editExistingLayer `ge` | 2 | 52 |  |
| extensions.ui_liveryEditor_layerEdit.setCursorProperties `ge` | 1 | 82 |  |
| extensions.ui_liveryEditor_layerEdit.translateLayer `ge` | 2 | 97 | table |
| extensions.ui_liveryEditor_layerEdit.setPosition `ge` | 2 | 119 |  |
| extensions.ui_liveryEditor_layerEdit.scaleLayer `ge` | 2 | 135 | table |
| extensions.ui_liveryEditor_layerEdit.setScale `ge` | 3 | 162 |  |
| extensions.ui_liveryEditor_layerEdit.skewLayer `ge` | 2 | 173 | table |
| extensions.ui_liveryEditor_layerEdit.setSkew `ge` | 2 | 197 |  |
| extensions.ui_liveryEditor_layerEdit.rotateLayer `ge` | 2 | 209 |  |
| extensions.ui_liveryEditor_layerEdit.setRotation `ge` | 1 | 234 |  |
| extensions.ui_liveryEditor_layerEdit.setLayerMaterials `ge` | 1 | 246 |  |
| extensions.ui_liveryEditor_layerEdit.stampDecal `ge` | 0 | 285 |  |
| extensions.ui_liveryEditor_layerEdit.requestStateData `ge` | 0 | 291 |  |
| extensions.ui_liveryEditor_layerEdit.requestLayerMaterials `ge` | 0 | 295 |  |
| extensions.ui_liveryEditor_layerEdit.cancelChanges `ge` | 0 | 319 |  |
| extensions.ui_liveryEditor_layerEdit.saveChanges `ge` | 0 | 335 |  |
| extensions.ui_liveryEditor_layerEdit.requestReposition `ge` | 0 | 364 |  |
| extensions.ui_liveryEditor_layerEdit.cancelReposition `ge` | 0 | 376 |  |
| extensions.ui_liveryEditor_layerEdit.applyReposition `ge` | 0 | 386 |  |
| extensions.ui_liveryEditor_layerEdit.toggleUseMouseOrCursor `ge` | 0 | 409 | table |
| extensions.ui_liveryEditor_layerEdit.requestTransform `ge` | 0 | 425 |  |
| extensions.ui_liveryEditor_layerEdit.endTransform `ge` | 0 | 444 |  |
| extensions.ui_liveryEditor_layerEdit.showCursorOrLayer `ge` | 1 | 453 |  |
| extensions.ui_liveryEditor_layerEdit.requestInitialLayerData `ge` | 0 | 481 |  |
| extensions.ui_liveryEditor_layerEdit.resetEditState `ge` | 0 | 534 |  |
| extensions.ui_liveryEditor_layerEdit.showCursor `ge` | 1 | 30 |  |
| extensions.ui_liveryEditor_layerEdit.setIsRotationPrecise `ge` | 1 | 552 |  |
| extensions.ui_liveryEditor_layerEdit.setAllowRotationAction `ge` | 1 | 556 |  |
| extensions.ui_liveryEditor_layerEdit.holdPrecise `ge` | 1 | 579 |  |
| extensions.ui_liveryEditor_layerEdit.holdRotate `ge` | 2 | 583 |  |
| extensions.ui_liveryEditor_layerEdit.holdTranslate `ge` | 2 | 597 |  |
| extensions.ui_liveryEditor_layerEdit.holdTranslateScalar `ge` | 2 | 612 |  |
| extensions.ui_liveryEditor_layerEdit.holdScale `ge` | 2 | 628 |  |
| extensions.ui_liveryEditor_layerEdit.holdSkew `ge` | 2 | 644 |  |
| extensions.ui_liveryEditor_layerEdit.holdTranslateAction `ge` | 0 | 660 |  |
| extensions.ui_liveryEditor_layerEdit.holdRotateAction `ge` | 0 | 676 |  |
| extensions.ui_liveryEditor_layerEdit.holdScaleAction `ge` | 0 | 687 |  |
| extensions.ui_liveryEditor_layerEdit.holdSkewAction `ge` | 0 | 702 |  |
| extensions.ui_liveryEditor_layers.parseLayersData `ge` | 2 | 59 |  |
| extensions.ui_liveryEditor_layers.getVisibleLayersCount `ge` | 0 | 105 |  |
| extensions.ui_liveryEditor_layers.rebuildLayerData `ge` | 0 | 118 |  |
| extensions.ui_liveryEditor_layers.getLayers `ge` | 0 | 125 |  |
| extensions.ui_liveryEditor_layers.getLayerByUid `ge` | 1 | 129 |  |
| extensions.ui_liveryEditor_layers.getLayerByOrder `ge` | 2 | 133 |  |
| extensions.ui_liveryEditor_layers.getChildrenCount `ge` | 1 | 141 |  |
| extensions.ui_liveryEditor_layers.requestInitialData `ge` | 0 | 156 |  |
| extensions.ui_liveryEditor_layers_cursor.translate `ge` | 2 | 58 |  |
| extensions.ui_liveryEditor_layers_cursor.setPosition `ge` | 2 | 66 |  |
| extensions.ui_liveryEditor_layers_cursor.scale `ge` | 2 | 71 |  |
| extensions.ui_liveryEditor_layers_cursor.skew `ge` | 2 | 79 |  |
| extensions.ui_liveryEditor_layers_cursor.rotate `ge` | 2 | 87 |  |
| extensions.ui_liveryEditor_layers_cursor.setColor `ge` | 1 | 99 |  |
| extensions.ui_liveryEditor_layers_cursor.setMetallicIntensity `ge` | 1 | 104 |  |
| extensions.ui_liveryEditor_layers_cursor.setRoughnessIntensity `ge` | 1 | 109 |  |
| extensions.ui_liveryEditor_layers_cursor.setMirrored `ge` | 2 | 114 |  |
| extensions.ui_liveryEditor_layers_cursor.setMirrorOffset `ge` | 1 | 120 |  |
| extensions.ui_liveryEditor_layers_cursor.setUseMousePos `ge` | 1 | 125 |  |
| extensions.ui_liveryEditor_layers_cursor.setProjectSurfaceNormal `ge` | 1 | 133 |  |
| extensions.ui_liveryEditor_layers_cursor.setScale `ge` | 2 | 138 |  |
| extensions.ui_liveryEditor_layers_cursor.setSkew `ge` | 2 | 144 |  |
| extensions.ui_liveryEditor_layers_cursor.setRotation `ge` | 1 | 149 |  |
| extensions.ui_liveryEditor_layers_cursor.setDecal `ge` | 1 | 155 |  |
| extensions.ui_liveryEditor_layers_cursor.setCursorProperties `ge` | 1 | 165 |  |
| extensions.ui_liveryEditor_layers_cursor.resetProperties `ge` | 1 | 201 |  |
| extensions.ui_liveryEditor_layers_cursor.getData `ge` | 0 | 17 | table |
| extensions.ui_liveryEditor_layers_cursor.requestData `ge` | 0 | 54 |  |
| extensions.ui_liveryEditor_layers_cursor.notifyListeners `ge` | 0 | 54 |  |
| extensions.ui_liveryEditor_layers_decal.setLayer `ge` | 1 | 46 |  |
| extensions.ui_liveryEditor_layers_decal.addLayer `ge` | 1 | 75 |  |
| extensions.ui_liveryEditor_layers_decal.addLayerCentered `ge` | 1 | 87 |  |
| extensions.ui_liveryEditor_layers_decal.updateLayer `ge` | 1 | 99 |  |
| extensions.ui_liveryEditor_layers_decal.getLayerActions `ge` | 1 | 102 |  |
| extensions.ui_liveryEditor_layers_decals.setLayer `ge` | 1 | 94 |  |
| extensions.ui_liveryEditor_layers_decals.addLayer `ge` | 1 | 100 |  |
| extensions.ui_liveryEditor_layers_decals.setColor `ge` | 2 | 110 |  |
| extensions.ui_liveryEditor_layers_decals.setMetallicIntensity `ge` | 2 | 116 |  |
| extensions.ui_liveryEditor_layers_decals.setRoughnessIntensity `ge` | 2 | 122 |  |
| extensions.ui_liveryEditor_layers_decals.rotate `ge` | 3 | 128 |  |
| extensions.ui_liveryEditor_layers_decals.setRotation `ge` | 2 | 141 |  |
| extensions.ui_liveryEditor_layers_decals.scale `ge` | 3 | 147 |  |
| extensions.ui_liveryEditor_layers_decals.setScale `ge` | 3 | 159 |  |
| extensions.ui_liveryEditor_layers_decals.skew `ge` | 3 | 165 |  |
| extensions.ui_liveryEditor_layers_decals.setSkew `ge` | 3 | 177 |  |
| extensions.ui_liveryEditor_layers_decals.setMirrored `ge` | 3 | 183 |  |
| extensions.ui_liveryEditor_layers_decals.setDecal `ge` | 2 | 190 |  |
| extensions.ui_liveryEditor_layers_decals.getLayerActions `ge` | 0 | 19 |  |
| extensions.ui_liveryEditor_layers_decals.getData `ge` | 1 | 49 | table |
| extensions.ui_liveryEditor_layers_decals.requestData `ge` | 1 | 82 |  |
| extensions.ui_liveryEditor_layers_decals.notifyListeners `ge` | 1 | 82 |  |
| extensions.ui_liveryEditor_layers_fill.setLayer `ge` | 1 | 14 |  |
| extensions.ui_liveryEditor_layers_fill.changeColor `ge` | 1 | 20 |  |
| extensions.ui_liveryEditor_layers_fill.addLayer `ge` | 1 | 37 |  |
| extensions.ui_liveryEditor_layers_fill.updateLayer `ge` | 1 | 57 |  |
| extensions.ui_liveryEditor_layers_fill.saveChanges `ge` | 0 | 67 |  |
| extensions.ui_liveryEditor_layers_fill.restoreLayer `ge` | 0 | 73 |  |
| extensions.ui_liveryEditor_layers_fill.restoreDefault `ge` | 0 | 79 |  |
| extensions.ui_liveryEditor_layers_fill.requestLayerData `ge` | 0 | 86 |  |
| extensions.ui_liveryEditor_layers_group.setColor `ge` | 2 | 14 |  |
| extensions.ui_liveryEditor_layers_group.setMetallicIntensity `ge` | 2 | 35 |  |
| extensions.ui_liveryEditor_layers_group.setRoughnessIntensity `ge` | 2 | 42 |  |
| extensions.ui_liveryEditor_layers_group.setNormalIntensity `ge` | 2 | 49 |  |
| extensions.ui_liveryEditor_layers_group.getLayerActions `ge` | 0 | 10 |  |
| extensions.ui_liveryEditor_resources.setup `ge` | 0 | 54 |  |
| extensions.ui_liveryEditor_resources.requestData `ge` | 0 | 84 |  |
| extensions.ui_liveryEditor_resources.getTextureCategories `ge` | 0 | 88 |  |
| extensions.ui_liveryEditor_resources.getTexturesByCategory `ge` | 1 | 96 |  |
| extensions.ui_liveryEditor_resources.getDecalTextures `ge` | 0 | 104 |  |
| extensions.ui_liveryEditor_resources.getCategories `ge` | 0 | 108 |  |
| extensions.ui_liveryEditor_selection.toggleHighlightSelectedLayer `ge` | 0 | 148 |  |
| extensions.ui_liveryEditor_selection.toggleSelection `ge` | 1 | 187 |  |
| extensions.ui_liveryEditor_selection.duplicateSelectedLayer `ge` | 0 | 196 |  |
| extensions.ui_liveryEditor_selection.reapplySelectedLayer `ge` | 0 | 203 |  |
| extensions.ui_liveryEditor_selection.cancelReapplySelectedLayer `ge` | 0 | 215 |  |
| extensions.ui_liveryEditor_selection.setup `ge` | 0 | 227 |  |
| extensions.ui_liveryEditor_selection.select `ge` | 2 | 162 |  |
| extensions.ui_liveryEditor_selection.clearSelection `ge` | 0 | 126 |  |
| extensions.ui_liveryEditor_selection.getSelectedLayers `ge` | 0 | 132 |  |
| extensions.ui_liveryEditor_selection.getFirstSelectedLayer `ge` | 0 | 55 |  |
| extensions.ui_liveryEditor_selection.addToSelection `ge` | 1 | 35 |  |
| extensions.ui_liveryEditor_selection.removeFromSelection `ge` | 1 | 42 | boolean |
| extensions.ui_liveryEditor_selection.getSelectedLayersData `ge` | 0 | 20 |  |
| extensions.ui_liveryEditor_selection.isLayerSelected `ge` | 1 | 136 | boolean |
| extensions.ui_liveryEditor_selection.getAvailableActions `ge` | 0 | 63 |  |
| extensions.ui_liveryEditor_selection.notifyUiListeners `ge` | 0 | 110 |  |
| extensions.ui_liveryEditor_selection.requestInitialData `ge` | 0 | 110 |  |
| extensions.ui_liveryEditor_tools.useTool `ge` | 1 | 26 |  |
| extensions.ui_liveryEditor_tools.closeCurrentTool `ge` | 0 | 32 |  |
| extensions.ui_liveryEditor_tools.getCurrentTool `ge` | 0 | 38 |  |
| extensions.ui_liveryEditor_tools.applyChanges `ge` | 0 | 42 |  |
| extensions.ui_liveryEditor_tools.doOperation `ge` | 1+ | 47 |  |
| extensions.ui_liveryEditor_tools_group.moveOrderUp `ge` | 0 | 11 |  |
| extensions.ui_liveryEditor_tools_group.moveOrderDown `ge` | 0 | 20 |  |
| extensions.ui_liveryEditor_tools_group.changeOrderToTop `ge` | 0 | 27 |  |
| extensions.ui_liveryEditor_tools_group.changeOrderToBottom `ge` | 0 | 37 |  |
| extensions.ui_liveryEditor_tools_group.setOrder `ge` | 1 | 47 |  |
| extensions.ui_liveryEditor_tools_group.moveOrderUpById `ge` | 1 | 55 |  |
| extensions.ui_liveryEditor_tools_group.moveOrderDownById `ge` | 1 | 70 |  |
| extensions.ui_liveryEditor_tools_group.changeOrder `ge` | 4 | 84 |  |
| extensions.ui_liveryEditor_tools_group.groupLayers `ge` | 0 | 94 |  |
| extensions.ui_liveryEditor_tools_group.ungroupLayer `ge` | 0 | 125 |  |
| extensions.ui_liveryEditor_tools_material.setColor `ge` | 1 | 12 |  |
| extensions.ui_liveryEditor_tools_material.setMetallicIntensity `ge` | 1 | 25 |  |
| extensions.ui_liveryEditor_tools_material.setRoughnessIntensity `ge` | 1 | 42 |  |
| extensions.ui_liveryEditor_tools_material.setNormalIntensity `ge` | 1 | 59 |  |
| extensions.ui_liveryEditor_tools_material.setDecal `ge` | 1 | 75 |  |
| extensions.ui_liveryEditor_tools_misc.duplicate `ge` | 0 | 10 |  |
| extensions.ui_liveryEditor_tools_settings.setVisibility `ge` | 1 | 13 |  |
| extensions.ui_liveryEditor_tools_settings.toggleVisibility `ge` | 0 | 20 |  |
| extensions.ui_liveryEditor_tools_settings.toggleLock `ge` | 0 | 34 |  |
| extensions.ui_liveryEditor_tools_settings.toggleVisibilityById `ge` | 1 | 41 |  |
| extensions.ui_liveryEditor_tools_settings.toggleLockById `ge` | 1 | 47 |  |
| extensions.ui_liveryEditor_tools_settings.rename `ge` | 1 | 53 |  |
| extensions.ui_liveryEditor_tools_settings.deleteLayer `ge` | 0 | 60 |  |
| extensions.ui_liveryEditor_tools_settings.setMirrored `ge` | 2 | 67 |  |
| extensions.ui_liveryEditor_tools_settings.setMirrorOffset `ge` | 1 | 77 |  |
| extensions.ui_liveryEditor_tools_settings.setUseMousePos `ge` | 1 | 85 |  |
| extensions.ui_liveryEditor_tools_settings.setProjectSurfaceNormal `ge` | 1 | 93 |  |
| extensions.ui_liveryEditor_tools_transform.useStamp `ge` | 0 | 17 |  |
| extensions.ui_liveryEditor_tools_transform.cancelStamp `ge` | 0 | 39 |  |
| extensions.ui_liveryEditor_tools_transform.translate `ge` | 2 | 55 |  |
| extensions.ui_liveryEditor_tools_transform.setPosition `ge` | 2 | 63 |  |
| extensions.ui_liveryEditor_tools_transform.rotate `ge` | 2 | 72 |  |
| extensions.ui_liveryEditor_tools_transform.setRotation `ge` | 1 | 87 |  |
| extensions.ui_liveryEditor_tools_transform.scale `ge` | 2 | 118 |  |
| extensions.ui_liveryEditor_tools_transform.setScale `ge` | 2 | 132 |  |
| extensions.ui_liveryEditor_tools_transform.skew `ge` | 2 | 147 |  |
| extensions.ui_liveryEditor_tools_transform.setSkew `ge` | 2 | 161 |  |
| extensions.ui_liveryEditor_userData.requestUpdatedData `ge` | 0 | 26 |  |
| extensions.ui_liveryEditor_userData.saveFileExists `ge` | 1 | 30 |  |
| extensions.ui_liveryEditor_userData.getSaveFiles `ge` | 0 | 35 |  |
| extensions.ui_liveryEditor_userData.createSaveFile `ge` | 1 | 52 |  |
| extensions.ui_liveryEditor_userData.renameFile `ge` | 2 | 63 |  |
| extensions.ui_liveryEditor_userData.deleteSaveFile `ge` | 1 | 83 | boolean |
| extensions.ui_liveryEditor_userData.getFilename `ge` | 1 | 17 |  |
| extensions.ui_liveryEditor_utils.roundAndTruncateDecimal `ge` | 2 | 33 |  |
| extensions.ui_liveryEditor_utils.getXYCoordinates `ge` | 2 | 43 | table |
| extensions.ui_liveryEditor_utils.getActionMapNameByTool `ge` | 1 | 62 |  |
| extensions.ui_liveryEditor_utils.convertDegreesToRadians `ge` | 1 | 18 |  |
| extensions.ui_liveryEditor_utils.convertRadiansToDegrees `ge` | 1 | 10 |  |
| extensions.ui_liveryEditor_utils.getBaseDegreesValue `ge` | 1 | 25 |  |
| extensions.ui_liveryEditor_utils.cycleRange `ge` | 3 | 54 |  |
| extensions.ui_messagesDebugger.show `ge` | 0 | 37 |  |
| extensions.ui_messagesDebugger.hide `ge` | 0 | 38 |  |
| extensions.ui_messagesDebugger.toggle `ge` | 0 | 39 |  |
| extensions.ui_messagesTasksAppContainers.onExtensionLoaded `ge` | 0 | 154 |  |
| extensions.ui_messagesTasksAppContainers.onExtensionUnloaded `ge` | 0 | 158 |  |
| extensions.ui_messagesTasksAppContainers.setVerboseLogging `ge` | 0 | 151 |  |
| extensions.ui_messagesTasksAppContainers.setDebug `ge` | 1 | 147 |  |
| extensions.ui_messagesTasksAppContainers.setAppVisibility `ge` | 3 | 22 |  |
| extensions.ui_messagesTasksAppContainers.getAppVisibility `ge` | 2 | 44 |  |
| extensions.ui_messagesTasksAppContainers.showApp `ge` | 2 | 79 |  |
| extensions.ui_messagesTasksAppContainers.hideApp `ge` | 2 | 83 |  |
| extensions.ui_messagesTasksAppContainers.toggleApp `ge` | 2 | 87 |  |
| extensions.ui_messagesTasksAppContainers.hideAllApps `ge` | 1 | 60 |  |
| extensions.ui_messagesTasksAppContainers.getVisibleApps `ge` | 1 | 92 |  |
| extensions.ui_messagesTasksAppContainers.getAvailableApps `ge` | 1 | 109 |  |
| extensions.ui_messagesTasksAppContainers.onMessagesTasksAppContainerMounted `ge` | 0 | 211 |  |
| extensions.ui_messagesTasksAppContainers.onMessagesTasksAppContainerUnmounted `ge` | 0 | 215 |  |
| extensions.ui_messagesTasksAppContainers.getMessagesTasksAppContainerMounted `ge` | 0 | 219 |  |
| extensions.ui_messagesTasksAppContainers.onSerialize `ge` | 0 | 124 |  |
| extensions.ui_messagesTasksAppContainers.onDeserialize `ge` | 1 | 135 |  |
| extensions.ui_missionInfo.performAction `ge` | 1 | 10 |  |
| extensions.ui_missionInfo.openDialogue `ge` | 1 | 22 |  |
| extensions.ui_missionInfo.performActivityAction `ge` | 1 | 35 |  |
| extensions.ui_missionInfo.openActivityAcceptDialogue `ge` | 1 | 42 |  |
| extensions.ui_missionInfo.closeDialogue `ge` | 0 | 65 |  |
| extensions.ui_missionInfo.setActivityIndexVisible `ge` | 1 | 77 |  |
| extensions.ui_topBar.setActiveItem `ge` | 1 | 31 |  |
| extensions.ui_topBar.selectItem `ge` | 1 | 40 |  |
| extensions.ui_topBar.selectPreviousItem `ge` | 1 | 51 |  |
| extensions.ui_topBar.selectNextItem `ge` | 1 | 70 |  |
| extensions.ui_topBar.show `ge` | 0 | 84 |  |
| extensions.ui_topBar.hide `ge` | 0 | 89 |  |
| extensions.ui_topBar.addEntry `ge` | 2 | 94 |  |
| extensions.ui_topBar.removeEntry `ge` | 1 | 99 |  |
| extensions.ui_topBar.updateEntry `ge` | 2 | 104 |  |
| extensions.ui_topBar.updateEntries `ge` | 1 | 113 |  |
| extensions.ui_topBar.getEntries `ge` | 0 | 122 |  |
| extensions.ui_topBar.getEntry `ge` | 1 | 118 |  |
| extensions.ui_topBar.requestData `ge` | 0 | 138 |  |
| extensions.ui_topBar.requestEntries `ge` | 0 | 153 |  |
| extensions.ui_topBar.requestGameState `ge` | 0 | 148 |  |
| extensions.ui_topBar.updateVisibleItems `ge` | 0 | 159 |  |
| extensions.ui_topBar.updateActiveItem `ge` | 0 | 186 |  |
| extensions.ui_topBar.onExtensionLoaded `ge` | 0 | 227 |  |
| extensions.ui_topBar.onUiChangedState `ge` | 1 | 241 |  |
| extensions.ui_topBar.onUIStateTriggered `ge` | 3 | 245 |  |
| extensions.ui_uiMods.getVueMods `ge` | 0 | 3 |  |
| extensions.ui_uiNavi.requestUIDashboardMap `ge` | 0 | 386 |  |
| extensions.ui_uiNavi.requestVehicleDashboardMap `ge` | 3 | 411 |  |
| extensions.ui_uiNavi.findClosestRoad `ge` | 3 | 9 |  |
| extensions.ui_uiNavi.route_start `ge` | 2 | 139 |  |
| extensions.ui_uiNavi.route_end `ge` | 0 | 145 |  |
| extensions.ui_uiNavi.route_requestStatus `ge` | 2 | 158 |  |
| extensions.ui_uiNavi.planRoute `ge` | 2 | 172 |  |
| extensions.ui_uiNavi.getBusStops `ge` | 0 | 183 |  |
| extensions.ui_uiNavi.getSpawnpoints `ge` | 0 | 13 |  |
| extensions.ui_uiNavi.getPointsOfInterest `ge` | 0 | 44 |  |
| extensions.ui_uiNavi.requestMissions `ge` | 0 | 123 |  |
| extensions.ui_uiNavi.getMissions `ge` | 0 | 119 |  |
| extensions.ui_uiNavi.setMissions `ge` | 1 | 127 |  |
| extensions.ui_uiNavi.requestPoi `ge` | 0 | 60 |  |
| extensions.ui_uiNavi.onExtensionLoaded `ge` | 0 | 452 |  |
| extensions.ui_vehiclePaint.show `ge` | 0 | 78 |  |
| extensions.ui_vehiclePaint.onExtensionLoaded `ge` | 0 | 82 |  |
| extensions.ui_vehiclePaint.changeData `ge` | 2 | 91 |  |
| extensions.ui_vehicleSelector_detailsInteraction.setExitCallback `ge` | 1 | 58 |  |
| extensions.ui_vehicleSelector_detailsInteraction.exploreFolder `ge` | 1 | 64 |  |
| extensions.ui_vehicleSelector_detailsInteraction.goToMod `ge` | 1 | 69 |  |
| extensions.ui_vehicleSelector_detailsInteraction.getDetails `ge` | 1 | 13 |  |
| extensions.ui_vehicleSelector_detailsInteraction.getManagementDetails `ge` | 0 | 54 |  |
| extensions.ui_vehicleSelector_detailsInteraction.executeButton `ge` | 0+ | 78 |  |
| extensions.ui_vehicleSelector_detailsInteraction.executeDoubleClick `ge` | 0+ | 79 |  |
| extensions.ui_vehicleSelector_detailsInteraction.setManagementButtonsEnabled `ge` | 0+ | 80 |  |
| extensions.ui_vehicleSelector_detailsInteraction.setDetailsButtonForFreeroam `ge` | 0+ | 81 |  |
| extensions.ui_vehicleSelector_detailsInteraction.setCustomDetailsButtons `ge` | 1 | 82 |  |
| extensions.ui_vehicleSelector_general.emptyProfiler `ge` | 0 | 474 | table |
| extensions.ui_vehicleSelector_general.p `ge` | 0 | 474 | table |
| extensions.ui_vehicleSelector_general.getDisplayData `ge` | 0 | 490 |  |
| extensions.ui_vehicleSelector_general.clearCache `ge` | 0 | 552 |  |
| extensions.ui_vehicleSelector_general.onfilechanged `ge` | 2 | 560 |  |
| extensions.ui_vehicleSelector_general.getDefaultVehicleInfo `ge` | 0 | 567 |  |
| extensions.ui_vehicleSelector_general.getDefaultVehicleTile `ge` | 0 | 581 |  |
| extensions.ui_vehicleSelector_general.getUiData `ge` | 0 | 619 |  |
| extensions.ui_vehicleSelector_general.closedFromUI `ge` | 0 | 632 |  |
| extensions.ui_vehicleSelector_general.getFilters `ge` | 0+ | 641 |  |
| extensions.ui_vehicleSelector_general.getSearchText `ge` | 0+ | 642 |  |
| extensions.ui_vehicleSelector_general.setSearchText `ge` | 0+ | 643 |  |
| extensions.ui_vehicleSelector_general.getTiles `ge` | 0+ | 644 |  |
| extensions.ui_vehicleSelector_general.getDisplayData `ge` | 0+ | 645 |  |
| extensions.ui_vehicleSelector_general.getDisplayDataOptions `ge` | 0+ | 646 |  |
| extensions.ui_vehicleSelector_general.setDisplayDataOption `ge` | 0+ | 647 |  |
| extensions.ui_vehicleSelector_general.resetDisplayDataToDefaults `ge` | 0+ | 648 |  |
| extensions.ui_vehicleSelector_general.toggleFavourite `ge` | 1 | 649 |  |
| extensions.ui_vehicleSelector_general.updateFilters `ge` | 0+ | 660 |  |
| extensions.ui_vehicleSelector_general.toggleFilter `ge` | 0+ | 661 |  |
| extensions.ui_vehicleSelector_general.updateRangeFilter `ge` | 0+ | 662 |  |
| extensions.ui_vehicleSelector_general.resetRangeFilter `ge` | 0+ | 663 |  |
| extensions.ui_vehicleSelector_general.resetSetFilter `ge` | 0+ | 664 |  |
| extensions.ui_vehicleSelector_general.clearAllFilters `ge` | 0+ | 665 |  |
| extensions.ui_vehicleSelector_general.lockFilter `ge` | 0+ | 668 |  |
| extensions.ui_vehicleSelector_general.unlockFilter `ge` | 0+ | 669 |  |
| extensions.ui_vehicleSelector_general.isFilterLocked `ge` | 0+ | 670 |  |
| extensions.ui_vehicleSelector_general.lockFilterMode `ge` | 0+ | 671 |  |
| extensions.ui_vehicleSelector_general.lockFilterModeExclusive `ge` | 0+ | 672 |  |
| extensions.ui_vehicleSelector_general.clearLockedFilters `ge` | 0+ | 673 |  |
| extensions.ui_vehicleSelector_general.calculateActiveFilters `ge` | 0+ | 674 |  |
| extensions.ui_vehicleSelector_general.setupValidFilters `ge` | 0+ | 675 |  |
| extensions.ui_vehicleSelector_general.getValidFilters `ge` | 0+ | 676 |  |
| extensions.ui_vehicleSelector_general.createFilters `ge` | 0+ | 677 |  |
| extensions.ui_vehicleSelector_general.passesFilters `ge` | 0+ | 678 |  |
| extensions.ui_vehicleSelector_general.isFavourite `ge` | 2 | 680 |  |
| extensions.ui_vehicleSelector_general.isRecentVehicle `ge` | 2 | 684 |  |
| extensions.ui_vehicleSelector_general.trackRecentVehicle `ge` | 2 | 688 |  |
| extensions.ui_vehicleSelector_general.goToMod `ge` | 0+ | 695 |  |
| extensions.ui_vehicleSelector_general.getDetails `ge` | 0+ | 696 |  |
| extensions.ui_vehicleSelector_general.getManagementDetails `ge` | 0+ | 697 |  |
| extensions.ui_vehicleSelector_general.executeButton `ge` | 0+ | 698 |  |
| extensions.ui_vehicleSelector_general.executeDoubleClick `ge` | 0+ | 699 |  |
| extensions.ui_vehicleSelector_general.setManagementButtonsEnabled `ge` | 0+ | 700 |  |
| extensions.ui_vehicleSelector_general.setDetailsButtonForFreeroam `ge` | 0+ | 701 |  |
| extensions.ui_vehicleSelector_general.setCustomDetailsButtons `ge` | 0+ | 702 |  |
| extensions.ui_vehicleSelector_general.getScreenHeaderTitleAndPath `ge` | 1 | 705 | table |
| extensions.ui_vehicleSelector_general.profilerFinish `ge` | 1 | 808 |  |
| extensions.ui_vehicleSelector_general.openVehicleSelectorForFreeroam `ge` | 0 | 821 |  |
| extensions.ui_vehicleSelector_general.openVehicleSelectorForFreeroamWithMod `ge` | 1 | 835 |  |
| extensions.ui_vehicleSelector_general.openVehicleSelectorForFreeroamModal `ge` | 0 | 851 |  |
| extensions.ui_vehicleSelector_general.openVehicleSelectorForChallenge `ge` | 1 | 880 |  |
| extensions.ui_vehicleSelector_general.openVehicleSelectorForFreeroamConfigurator `ge` | 1 | 905 |  |
| extensions.ui_vehicleSelector_tileClustering.getClusteredItemsFavouriteIconPercent `ge` | 1 | 24 | multiple |
| extensions.ui_vehicleSelector_tileClustering.getClusteredItemsStats `ge` | 2 | 46 | multiple |
| extensions.ui_vehicleSelector_tileClustering.getSources `ge` | 3 | 79 |  |
| extensions.ui_vehicleSelector_tileGrouping.getConfigOrModelPropValue `ge` | 2 | 102 |  |
| extensions.ui_vehicleSelector_tiles.emptyProfiler `ge` | 0 | 9 | table |
| extensions.ui_vehicleSelector_tiles.overrideDefaultSelectedTile `ge` | 1 | 90 |  |
| extensions.ui_vehicleSelector_tiles.getTiles `ge` | 2 | 371 |  |
| extensions.ui_vehicleSelector_tiles.configToTile `ge` | 2 | 41 | table |
| extensions.ui_vehicleSelector_tiles.clusterItems `ge` | 1 | 80 |  |
| extensions.ui_vehicleSelector_tiles.onExtensionLoaded `ge` | 0 | 343 |  |
| extensions.ui_vehicleSelector_vehicleOperations.onUiWaitingState `ge` | 1 | 38 |  |
| extensions.ui_vehicleSelector_vehicleOperations.executeButton `ge` | 2 | 17 |  |
| extensions.ui_vehicleSelector_vehicleOperations.makeSpawningButtons `ge` | 1 | 144 |  |
| extensions.ui_vehicleSelector_vehicleOperations.getManagementDetails `ge` | 0 | 246 | table |
| extensions.ui_vehicleSelector_vehicleOperations.getVehicleName `ge` | 1 | 198 | string |
| extensions.ui_vehicleSelector_vehicleOperations.getCurrentVehicleThumb `ge` | 1 | 230 |  |
| extensions.ui_vehicleSelector_vehicleOperations.setManagementButtonsEnabled `ge` | 1 | 407 |  |
| extensions.ui_vehicleSelector_vehicleOperations.setDetailsButtonForFreeroam `ge` | 1 | 412 |  |
| extensions.ui_vehicleSelector_vehicleOperations.setCustomDetailsButtons `ge` | 1 | 417 |  |
| extensions.ui_vehicleSelector_vehicleOperations.executeDoubleClick `ge` | 1 | 394 |  |
| extensions.ui_vehicleSelector_vehicleOperations.addButton `ge` | 0+ | 434 |  |
| extensions.ui_vehicleSelector_vehicleOperations.clearButtonFunctions `ge` | 0+ | 435 |  |
| extensions.ui_vehicleSelector_vehicleOperations.getFreeButtonId `ge` | 0+ | 436 |  |
| extensions.ui_vehicleSelector_vehicleSpecifications.getDetails `ge` | 1 | 355 |  |
| extensions.ui_vehicleSelector_vehicleSpecifications.addIconTags `ge` | 2 | 303 |  |
| extensions.ui_vehicleSelector_vehicleSpecifications.makeSpec `ge` | 4 | 281 |  |
| extensions.ui_visibility.toggle `ge` | 0 | 50 |  |
| extensions.ui_visibility.set `ge` | 1 | 40 |  |
| extensions.ui_visibility.get `ge` | 0 | 46 |  |
| extensions.ui_visibility.toggleCef `ge` | 0 | 22 |  |
| extensions.ui_visibility.setCef `ge` | 1 | 13 |  |
| extensions.ui_visibility.getCef `ge` | 0 | 10 |  |
| extensions.ui_visibility.setImgui `ge` | 1 | 27 |  |
| extensions.ui_visibility.getImgui `ge` | 0 | 35 |  |
| extensions.util_autoAnnotation.autoAnnotateScenetree `ge` | 0 | 121 |  |
| extensions.util_autoAnnotation.autoAnnotateGroups `ge` | 0 | 132 |  |
| extensions.util_autoAnnotation.autoAnnotateLevel `ge` | 0 | 137 |  |
| extensions.util_calibrateESC.onExtensionLoaded `ge` | 0 | 165 |  |
| extensions.util_calibrateESC.onExtensionUnloaded `ge` | 0 | 207 |  |
| extensions.util_calibrateESC.vehicleDone `ge` | 0 | 199 |  |
| extensions.util_calibrateESC.heartbeat `ge` | 0 | 203 |  |
| extensions.util_calibrateESC.work `ge` | 2 | 147 |  |
| extensions.util_compileImposters.compileImposters `ge` | 1 | 92 |  |
| extensions.util_compileImposters.onConsoleLog `ge` | 4 | 121 |  |
| extensions.util_compileMeshes.onExtensionLoaded `ge` | 0 | 237 |  |
| extensions.util_compileMeshes.work `ge` | 1 | 51 |  |
| extensions.util_configListGenerator.getEligibleVehicles `ge` | 2 | 175 |  |
| extensions.util_configListGenerator.getRandomVehicleInfos `ge` | 4 | 195 |  |
| extensions.util_configListGenerator.doesVehiclePassFilter `ge` | 2 | 70 | boolean |
| extensions.util_decalRoadsEditor.onExtensionLoaded `ge` | 0 | 109 |  |
| extensions.util_decalRoadsEditor.onExtensionUnloaded `ge` | 0 | 106 |  |
| extensions.util_dependencyTree.test `ge` | 0 | 220 |  |
| extensions.util_docCreator.run `ge` | 0 | 301 |  |
| extensions.util_docCreator.runAndQuit `ge` | 0 | 305 |  |
| extensions.util_export.export `ge` | 1 | 1124 |  |
| extensions.util_export.exportFile `ge` | 1 | 1140 |  |
| extensions.util_export.startRecording `ge` | 1 | 1248 |  |
| extensions.util_export.stopRecording `ge` | 0 | 1253 |  |
| extensions.util_export.suggestFilename `ge` | 0 | 1263 |  |
| extensions.util_export.getGeInfo `ge` | 0 | 1284 |  |
| extensions.util_followTheWhiteRabbit.onExtensionLoaded `ge` | 0 | 9 |  |
| extensions.util_forestGenerator.initForest `ge` | 0 | 23 |  |
| extensions.util_forestGenerator.createForestItem `ge` | 4 | 57 |  |
| extensions.util_forestGenerator.createRandomForestRect `ge` | 10 | 68 |  |
| extensions.util_forestGenerator.createRandomForestRadial `ge` | 7 | 109 |  |
| extensions.util_forestGenerator.updateForestItem `ge` | 4 | 141 |  |
| extensions.util_forestGenerator.getForestItemTypes `ge` | 0 | 47 |  |
| extensions.util_forestGenerator.getForestItemDict `ge` | 0 | 52 |  |
| extensions.util_forestGenerator.getForestItemsPolygon `ge` | 1 | 148 |  |
| extensions.util_forestGenerator.getForestItemsRadius `ge` | 2 | 164 |  |
| extensions.util_forestGenerator.deleteForestItem `ge` | 1 | 171 |  |
| extensions.util_forestGenerator.clearForest `ge` | 0 | 176 |  |
| extensions.util_groundModelDebug.openWindow `ge` | 0 | 161 |  |
| extensions.util_groundModelDebug.onSerialize `ge` | 0 | 519 | table |
| extensions.util_groundModelDebug.onDeserialized `ge` | 1 | 527 |  |
| extensions.util_groundModelDebug.onExtensionLoaded `ge` | 0 | 515 |  |
| extensions.util_inputSystemUtils.printStats `ge` | 0 | 20 |  |
| extensions.util_inputSystemUtils.resave `ge` | 0 | 77 |  |
| extensions.util_instancedLineRenderDemo.onExtensionLoaded `ge` | 0 | 240 |  |
| extensions.util_jbeamStats.getStats `ge` | 0 | 13 |  |
| extensions.util_logStreams.saveJson `ge` | 1 | 12 |  |
| extensions.util_logStreams.readJson `ge` | 0 | 16 |  |
| extensions.util_logStreams.saveWikitable `ge` | 1 | 20 |  |
| extensions.util_logStreams.readWikitable `ge` | 0 | 24 |  |
| extensions.util_logStreams.saveRst `ge` | 1 | 29 |  |
| extensions.util_logStreams.readRst `ge` | 0 | 33 |  |
| extensions.util_nodeBeamExport.exportFile `ge` | 1 | 97 |  |
| extensions.util_nodeBeamExport.suggestFilename `ge` | 0 | 70 |  |
| extensions.util_nodeStream.onExtensionLoaded `ge` | 0 | 214 |  |
| extensions.util_nodeStream.onExtensionUnloaded `ge` | 0 | 225 |  |
| extensions.util_photomode.getPhotomodeOverlays `ge` | 0 | 7 |  |
| extensions.util_procTrack.getDefaultParams `ge` | 0 | 10 | table |
| extensions.util_procTrack.makeGymkhana `ge` | 1 | 120 |  |
| extensions.util_procTrack.getRotationDeg `ge` | 1 | 1398 |  |
| extensions.util_procTrack.getPosition `ge` | 3 | 1402 |  |
| extensions.util_procTrack.makePylon `ge` | 4 | 1284 |  |
| extensions.util_procTrack.makeGate `ge` | 2 | 1316 |  |
| extensions.util_procTrack.makeConcreteRing `ge` | 2 | 1342 |  |
| extensions.util_procTrack.makeBarrel `ge` | 3 | 1370 |  |
| extensions.util_procTrack.dist `ge` | 4 | 1279 |  |
| extensions.util_procTrack.reGenerate `ge` | 1 | 109 |  |
| extensions.util_procTrack.getSeed `ge` | 0 | 1440 |  |
| extensions.util_procTrack.wordsToInt `ge` | 1 | 1448 |  |
| extensions.util_procTrack.intToWords `ge` | 1 | 1472 |  |
| extensions.util_rectangleGen.dist `ge` | 4 | 196 |  |
| extensions.util_rectangleGen.getGraph `ge` | 1 | 8 |  |
| extensions.util_renderComponentsAPI.getSettings `ge` | 1 | 29 |  |
| extensions.util_renderComponentsAPI.setSetting `ge` | 2 | 51 |  |
| extensions.util_renderComponentsAPI.getColorCorrections `ge` | 0 | 95 |  |
| extensions.util_renderComponentsAPI.getCurrentSettings `ge` | 0 | 83 |  |
| extensions.util_renderComponentsAPI.setMultiSettings `ge` | 1 | 104 |  |
| extensions.util_resaveMaterials.onExtensionLoaded `ge` | 0 | 62 |  |
| extensions.util_resaveMaterials.work `ge` | 1 | 25 |  |
| extensions.util_richPresence.onExtensionLoaded `ge` | 0 | 236 |  |
| extensions.util_richPresence.onExtensionUnloaded `ge` | 0 | 255 |  |
| extensions.util_richPresence.clientEndMission `ge` | 1 | 313 |  |
| extensions.util_richPresence.clientPreStartMission `ge` | 1 | 313 |  |
| extensions.util_richPresence.onUiChangedState `ge` | 2 | 348 |  |
| extensions.util_saveDynamicData.onExtensionLoaded `ge` | 0 | 160 |  |
| extensions.util_saveDynamicData.onExtensionUnloaded `ge` | 0 | 201 |  |
| extensions.util_saveDynamicData.vehicleDone `ge` | 0 | 193 |  |
| extensions.util_saveDynamicData.heartbeat `ge` | 0 | 197 |  |
| extensions.util_saveDynamicData.work `ge` | 2 | 142 |  |
| extensions.util_screenshotCreator.onExtensionLoaded `ge` | 0 | 1127 |  |
| extensions.util_screenshotCreator.onExtensionUnloaded `ge` | 0 | 1137 |  |
| extensions.util_screenshotCreator.openWindow `ge` | 0 | 1143 |  |
| extensions.util_screenshotCreator.startWork `ge` | 1 | 378 |  |
| extensions.util_screenshotCreator.onSerialize `ge` | 0 | 1148 | table |
| extensions.util_screenshotCreator.onDeserialized `ge` | 1 | 1165 |  |
| extensions.util_screenshotCreator.frameVehicle `ge` | 4 | 172 | multiple |
| extensions.util_showroom.moveInside `ge` | 1 | 42 |  |
| extensions.util_showroom.isInside `ge` | 1 | 49 |  |
| extensions.util_showroom.getPosRot `ge` | 0 | 39 | multiple |
| extensions.util_showroom.onClientEndMission `ge` | 0 | 26 |  |
| extensions.util_sortLines.handleFile `ge` | 1 | 11 |  |
| extensions.util_sortLines.handleLevel `ge` | 1 | 35 |  |
| extensions.util_stepHandler.makeStepFadeToBlack `ge` | 1 | 49 | table |
| extensions.util_stepHandler.makeStepFadeFromBlack `ge` | 1 | 59 | table |
| extensions.util_stepHandler.makeStepWait `ge` | 1 | 78 | table |
| extensions.util_stepHandler.makeStepReturnTrueFunction `ge` | 1 | 96 | table |
| extensions.util_stepHandler.makeUiMessageStep `ge` | 1 | 114 |  |
| extensions.util_stepHandler.makeStepSpawnVehicle `ge` | 2 | 142 | table |
| extensions.util_stepHandler.makeStepSpawnVehicleSimple `ge` | 3 | 151 |  |
| extensions.util_stepHandler.taskSpawnTrafficStep `ge` | 1 | 170 |  |
| extensions.util_stepHandler.makeStepSpawnTrafficSimple `ge` | 3 | 186 | table |
| extensions.util_stepHandler.taskLoadLevelStep `ge` | 1 | 200 |  |
| extensions.util_stepHandler.makeLoadLevelStep `ge` | 1 | 228 | table |
| extensions.util_stepHandler.startStepSequence `ge` | 2 | 244 |  |
| extensions.util_stepHandler.skipToLastStepOrCallback `ge` | 0 | 257 |  |
| extensions.util_terrainGenerator.new `ge` | 1 | 468 |  |
| extensions.util_testExtensionProxies.onExtensionLoaded `ge` | 0 | 27 |  |
| extensions.util_testExtensionProxies.onExtensionUnloaded `ge` | 0 | 22 |  |
| extensions.util_testJSONFilesSyntax.onExtensionLoaded `ge` | 0 | 22 |  |
| extensions.util_trackBuilder_basicBorders.getMeshes `ge` | 1 | 410 | table |
| extensions.util_trackBuilder_basicCenters.getMeshes `ge` | 1 | 371 | table |
| extensions.util_trackBuilder_basicCenters.clearShapes `ge` | 0 | 383 |  |
| extensions.util_trackBuilder_borderWallMesh.getMeshes `ge` | 1 | 239 | table |
| extensions.util_trackBuilder_cameraTransition.lerpTo `ge` | 3 | 39 |  |
| extensions.util_trackBuilder_ceilingMesh.getMeshes `ge` | 1 | 324 | table |
| extensions.util_trackBuilder_markers.step `ge` | 1 | 435 | multiple |
| extensions.util_trackBuilder_markers.linear `ge` | 1 | 439 |  |
| extensions.util_trackBuilder_markers.pow4 `ge` | 1 | 469 |  |
| extensions.util_trackBuilder_markers.pow3 `ge` | 1 | 459 |  |
| extensions.util_trackBuilder_markers.pow2 `ge` | 1 | 449 |  |
| extensions.util_trackBuilder_markers.smoothSlope `ge` | 1 | 480 |  |
| extensions.util_trackBuilder_markers.smootherSlope `ge` | 1 | 491 |  |
| extensions.util_trackBuilder_markers.interpolate `ge` | 2 | 820 |  |
| extensions.util_trackBuilder_markers.interpolatePointsOfSegment `ge` | 6 | 931 |  |
| extensions.util_trackBuilder_markers.interpolateOverSegments `ge` | 2 | 781 |  |
| extensions.util_trackBuilder_markers.interpolateOverPoints `ge` | 2 | 721 |  |
| extensions.util_trackBuilder_markers.interpolateSingle `ge` | 2 | 808 |  |
| extensions.util_trackBuilder_markers.interpolateField `ge` | 6 | 972 |  |
| extensions.util_trackBuilder_markers.transformMarkers `ge` | 2 | 976 |  |
| extensions.util_trackBuilder_markers.hideMarkers `ge` | 1 | 982 |  |
| extensions.util_trackBuilder_markers.clearMarkers `ge` | 1 | 990 |  |
| extensions.util_trackBuilder_markers.addMarkerChange `ge` | 2 | 999 |  |
| extensions.util_trackBuilder_markers.unloadAll `ge` | 0 | 1007 |  |
| extensions.util_trackBuilder_markers.caps `ge` | 2 | 921 |  |
| extensions.util_trackBuilder_materialUtil.getMaterials `ge` | 0 | 437 |  |
| extensions.util_trackBuilder_materialUtil.setMaterials `ge` | 2 | 395 |  |
| extensions.util_trackBuilder_materialUtil.setSingleMaterial `ge` | 3 | 402 |  |
| extensions.util_trackBuilder_materialUtil.resetMaterialsToDefault `ge` | 1 | 426 |  |
| extensions.util_trackBuilder_multiTrackMerger.mergeMultiTrack `ge` | 4 | 352 |  |
| extensions.util_trackBuilder_multiTrackMerger.setReferences `ge` | 1 | 360 |  |
| extensions.util_trackBuilder_multiTrackMerger.setMaterials `ge` | 3 | 338 |  |
| extensions.util_trackBuilder_obstaclePlacer.clearReferences `ge` | 0 | 172 |  |
| extensions.util_trackBuilder_obstaclePlacer.placeObstacles `ge` | 1 | 135 |  |
| extensions.util_trackBuilder_obstaclePlacer.placeProceduralObstacles `ge` | 1 | 72 |  |
| extensions.util_trackBuilder_pieces.toSegment `ge` | 2 | 12 |  |
| extensions.util_trackBuilder_pieces.getHdgVector `ge` | 1 | 87 | vec3 |
| extensions.util_trackBuilder_pieces.rotateVectorByQuat `ge` | 2 | 539 |  |
| extensions.util_trackBuilder_pieces.initialTrackPiece `ge` | 1 | 91 | table |
| extensions.util_trackBuilder_pieces.forward `ge` | 1 | 101 |  |
| extensions.util_trackBuilder_pieces.curve `ge` | 5 | 142 |  |
| extensions.util_trackBuilder_pieces.bezierCurve `ge` | 5 | 118 |  |
| extensions.util_trackBuilder_pieces.offsetCurve `ge` | 4 | 165 |  |
| extensions.util_trackBuilder_pieces.hexSpiral `ge` | 3 | 249 |  |
| extensions.util_trackBuilder_pieces.squareSpiral `ge` | 3 | 282 |  |
| extensions.util_trackBuilder_pieces.fresnelSC `ge` | 1 | 375 |  |
| extensions.util_trackBuilder_pieces.loop `ge` | 3 | 403 |  |
| extensions.util_trackBuilder_pieces.emptyOffset `ge` | 6 | 510 |  |
| extensions.util_trackBuilder_pieces.freeSpiral `ge` | 4 | 314 |  |
| extensions.util_trackBuilder_pieces.customBezier `ge` | 8 | 193 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createCylinder `ge` | 3 | 66 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createRing `ge` | 3 | 8 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createCube `ge` | 3 | 472 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createCone `ge` | 3 | 406 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createBump `ge` | 6 | 289 |  |
| extensions.util_trackBuilder_proceduralPrimitives.createRamp `ge` | 7 | 160 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.calculatePointCoordinateSystem `ge` | 1 | 55 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.materialize `ge` | 1 | 16 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.compileMeshInfo `ge` | 2 | 76 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.rotateVectorByQuat `ge` | 2 | 92 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.clearShapes `ge` | 0 | 48 |  |
| extensions.util_trackBuilder_segmentToProceduralMesh.getReferences `ge` | 0 | 95 | table |
| extensions.util_trackBuilder_splineTrack.addCheckPointPositions `ge` | 1 | 262 |  |
| extensions.util_trackBuilder_splineTrack.positionVehicle `ge` | 2 | 362 |  |
| extensions.util_trackBuilder_splineTrack.setTrackPosition `ge` | 5 | 446 |  |
| extensions.util_trackBuilder_splineTrack.getTrackPosition `ge` | 0 | 477 | table |
| extensions.util_trackBuilder_splineTrack.positionTrackAboveVehicle `ge` | 0 | 422 | boolean |
| extensions.util_trackBuilder_splineTrack.positionTrackBeforeCamera `ge` | 0 | 395 | boolean |
| extensions.util_trackBuilder_splineTrack.rotateTrackToCamera `ge` | 0 | 410 | boolean |
| extensions.util_trackBuilder_splineTrack.rotateTrackToTrackVehicle `ge` | 0 | 434 | boolean |
| extensions.util_trackBuilder_splineTrack.getLastPieceWithMarker `ge` | 2 | 493 |  |
| extensions.util_trackBuilder_splineTrack.getPieceInfo `ge` | 2 | 502 |  |
| extensions.util_trackBuilder_splineTrack.showMarkers `ge` | 1 | 684 |  |
| extensions.util_trackBuilder_splineTrack.setHighQuality `ge` | 1 | 527 |  |
| extensions.util_trackBuilder_splineTrack.stackToCursor `ge` | 0 | 543 |  |
| extensions.util_trackBuilder_splineTrack.stack `ge` | 1 | 548 |  |
| extensions.util_trackBuilder_splineTrack.applyStack `ge` | 2 | 564 |  |
| extensions.util_trackBuilder_splineTrack.deepcopy `ge` | 1 | 583 |  |
| extensions.util_trackBuilder_splineTrack.getStackCount `ge` | 0 | 598 |  |
| extensions.util_trackBuilder_splineTrack.clearStack `ge` | 0 | 603 |  |
| extensions.util_trackBuilder_splineTrack.getSelectedTrackInfo `ge` | 0 | 608 |  |
| extensions.util_trackBuilder_splineTrack.setDefaultLaps `ge` | 1 | 468 |  |
| extensions.util_trackBuilder_splineTrack.setReversible `ge` | 1 | 472 |  |
| extensions.util_trackBuilder_splineTrack.getSegmentInfo `ge` | 2 | 521 |  |
| extensions.util_trackBuilder_splineTrack.setMesh `ge` | 4 | 1026 | boolean |
| extensions.util_trackBuilder_splineTrack.setAllPiecesHighQuality `ge` | 0 | 772 |  |
| extensions.util_trackBuilder_splineTrack.focusCameraOn `ge` | 3 | 616 |  |
| extensions.util_trackBuilder_splineTrack.unselectAll `ge` | 0 | 634 |  |
| extensions.util_trackBuilder_splineTrack.focusMarkerOn `ge` | 3 | 645 |  |
| extensions.util_trackBuilder_splineTrack.createMarkers `ge` | 0 | 703 |  |
| extensions.util_trackBuilder_splineTrack.markerChange `ge` | 3 | 737 |  |
| extensions.util_trackBuilder_splineTrack.refreshAllMaterials `ge` | 0 | 836 |  |
| extensions.util_trackBuilder_splineTrack.makeTrack `ge` | 2 | 848 |  |
| extensions.util_trackBuilder_splineTrack.invalidatePiece `ge` | 3 | 1317 |  |
| extensions.util_trackBuilder_splineTrack.toSegments `ge` | 0 | 1329 |  |
| extensions.util_trackBuilder_splineTrack.calculateCustomPoints `ge` | 1 | 1263 |  |
| extensions.util_trackBuilder_splineTrack.convertToSpline `ge` | 0 | 1111 |  |
| extensions.util_trackBuilder_splineTrack.getArcPoints `ge` | 1 | 1175 |  |
| extensions.util_trackBuilder_splineTrack.initTrack `ge` | 1 | 1429 |  |
| extensions.util_trackBuilder_splineTrack.unloadAll `ge` | 0 | 1487 |  |
| extensions.util_trackBuilder_splineTrack.removeTrack `ge` | 0 | 1503 |  |
| extensions.util_trackBuilder_splineTrack.getEndOfTrack `ge` | 0 | 1534 |  |
| extensions.util_trackBuilder_splineTrack.revert `ge` | 0 | 1539 |  |
| extensions.util_trackBuilder_splineTrack.removeAt `ge` | 1 | 1544 |  |
| extensions.util_trackBuilder_splineTrack.addForward `ge` | 3 | 1603 |  |
| extensions.util_trackBuilder_splineTrack.addCurve `ge` | 5 | 1604 |  |
| extensions.util_trackBuilder_splineTrack.addOffsetCurve `ge` | 5 | 1605 |  |
| extensions.util_trackBuilder_splineTrack.addSpiral `ge` | 5 | 1606 |  |
| extensions.util_trackBuilder_splineTrack.addLoop `ge` | 4 | 1607 |  |
| extensions.util_trackBuilder_splineTrack.addPiece `ge` | 3 | 1611 |  |
| extensions.util_trackBuilder_splineTrack.addEmptyOffset `ge` | 7 | 1608 |  |
| extensions.util_trackBuilder_splineTrack.rotateVectorByQuat `ge` | 2 | 1727 |  |
| extensions.util_trackBuilder_splineTrack.setMaterial `ge` | 5 | 988 | boolean |
| extensions.util_trackBuilder_splineTrack.setSegmentMaterial `ge` | 1 | 1070 |  |
| extensions.util_trackBuilder_splineTrack.exportTrackToTable `ge` | 0 | 1736 |  |
| extensions.util_trackBuilder_splineTrack.importTrackFromTable `ge` | 1 | 1902 |  |
| extensions.util_trackBuilder_splineTrack.load `ge` | 6 | 1984 |  |
| extensions.util_trackBuilder_splineTrack.loadJSON `ge` | 1 | 2045 |  |
| extensions.util_trackBuilder_splineTrack.save `ge` | 2 | 2062 |  |
| extensions.util_trackBuilder_splineTrack.rename `ge` | 2 | 2124 |  |
| extensions.util_trackBuilder_splineTrack.getCustomTracks `ge` | 0 | 2137 |  |
| extensions.util_trackBuilder_splineTrack.getPreviewNames `ge` | 0 | 2158 |  |
| extensions.util_trackBuilder_splineTrack.onClientEndMission `ge` | 0 | 2172 |  |
| extensions.util_trackBuilder_splineTrack.snapToGrid `ge` | 1 | 1078 |  |
| extensions.util_trackBuilder_splineTrack.measureTrack `ge` | 0 | 1291 |  |
| extensions.util_trackBuilder_splineTrack.getAllCheckpoints `ge` | 0 | 347 |  |
| extensions.util_trackBuilder_splineTrack.addClosingPiece `ge` | 0 | 1092 |  |
| extensions.util_trackBuilder_splineTrack.getBezierPoints `ge` | 1 | 1209 |  |
| extensions.util_trackBuilder_splineTrack.saveHistory `ge` | 0 | 70 |  |
| extensions.util_trackBuilder_splineTrack.switchSubTrack `ge` | 1 | 96 |  |
| extensions.util_trackBuilder_splineTrack.createNewSubTrack `ge` | 2 | 90 |  |
| extensions.util_trackBuilder_splineTrack.removeSubTrack `ge` | 1 | 104 |  |
| extensions.util_trackBuilder_splineTrack.mergeMultiTrack `ge` | 4 | 173 |  |
| extensions.util_trackBuilder_splineTrack.setIntersectionMesh `ge` | 2 | 213 |  |
| extensions.util_trackBuilder_splineTrack.setIntersectionMaterial `ge` | 3 | 205 |  |
| extensions.util_trackBuilder_splineTrack.getIntersection `ge` | 1 | 222 |  |
| extensions.util_trackBuilder_splineTrack.removeIntersection `ge` | 1 | 197 |  |
| extensions.util_worker.onExtensionLoaded `ge` | 0 | 114 |  |
| extensions.util_wsTest.onExtensionLoaded `ge` | 0 | 17 |  |
| extensions.util_wsTest.onExtensionUnloaded `ge` | 0 | 23 |  |
| map.objectData `ge` | 5 | 3624 |  |
| map.tempObjectData `ge` | 8 | 3652 |  |
| map.setNameForId `ge` | 2 | 3682 |  |
| map.onWaypoint `ge` | 1 | 3473 |  |
| map.reset `ge` | 1 | 2329 |  |
| map.load `ge` | 0 | 3456 |  |
| map.assureLoad `ge` | 0 | 3462 |  |
| map.onMissionLoaded `ge` | 0 | 3469 |  |
| map.request `ge` | 2 | 3534 |  |
| map.onAddWaypoint `ge` | 1 | 3503 |  |
| map.onRemoveWaypoint `ge` | 1 | 3510 |  |
| map.onModifiedWaypoint `ge` | 1 | 3517 |  |
| map.setState `ge` | 1 | 3587 |  |
| map.getState `ge` | 0 | 3591 |  |
| map.setEditorState `ge` | 1 | 3583 |  |
| map.getMap `ge` | 0 | 3607 |  |
| map.getGraphpath `ge` | 0 | 3611 |  |
| map.getRoadRules `ge` | 0 | 153 |  |
| map.getManualWaypoints `ge` | 0 | 3615 |  |
| map.getTrackedObjects `ge` | 0 | 3619 |  |
| map.findClosestRoad `ge` | 2 | 2507 | multiple |
| map.findBestRoad `ge` | 2 | 2535 | multiple |
| map.getPath `ge` | 6 | 2575 | table |
| map.getNodesFromPathDist `ge` | 2 | 2602 | multiple |
| map.getPathLen `ge` | 1 | 2625 |  |
| map.getPointNodePath `ge` | 7 | 2588 | table |
| map.getPointToPointPath `ge` | 8 | 2712 | table |
| map.saveSVG `ge` | 3 | 2729 |  |
| map.onSerialize `ge` | 0 | 3574 | table |
| map.onDeserialize `ge` | 1 | 3578 |  |
| map.surfaceNormal `ge` | 2 | 502 |  |
| map.isCrashAvoidable `ge` | 3 | 3686 |  |
| map.nameNode `ge` | 2 | 131 |  |
| map.getNodeLinkCount `ge` | 1 | 2126 |  |
| map.updateDrivabilities `ge` | 1 | 3547 |  |
| map.safeTeleport `ge` | 13 | 3714 |  |
| map.optimizePath `ge` | 3 | 3105 |  |
| map.debugDrawTrajectory `ge` | 1 | 3226 |  |
| map.toggleDrawNavGraph `ge` | 0 | 3430 |  |
| map.logGraphHashes `ge` | 0 | 497 |  |
| map.toggleShuffledPairs `ge` | 1 | 44 |  |
| screenshot.publish `ge` | 1 | 88 |  |
| screenshot.doScreenshot `ge` | 4 | 50 |  |
| screenshot.doSteamScreenshot `ge` | 0 | 97 |  |
| screenshot.openScreenshotsFolderInExplorer `ge` | 0 | 105 |  |
| screenshot.takeScreenShot `ge` | 0 | 189 |  |
| screenshot.takeBigScreenShot `ge` | 0 | 190 |  |
| screenshot.takeHugeScreenShot `ge` | 0 | 191 |  |
| screenshot.screenshotTaken `ge` | 0 | 169 |  |
| screenshot.screenshotSaved `ge` | 2 | 163 |  |
| serverConnection.onCameraHandlerSetInitial `ge` | 0 | 8 |  |
| serverConnection.disconnect `ge` | 3 | 63 |  |
| serverConnection.noLoadingScreenDisconnect `ge` | 1 | 79 |  |
| server_commands.dropCameraAtPlayer `ge` | 1 | 68 |  |
| server_commands.dropPlayerAtCamera `ge` | 1 | 77 |  |
| server_commands.dropPlayerAtCameraNoReset `ge` | 1 | 93 |  |
| server_commands.getCamera `ge` | 0 | 31 |  |
| server_commands.onNodegrabStart `ge` | 1 | 55 |  |
| server_commands.onNodegrabStop `ge` | 1 | 62 |  |
| server_commands.setFreeCamera `ge` | 0 | 37 |  |
| server_commands.setGameCamera `ge` | 0 | 32 |  |
| server_commands.setCameraFree `ge` | 0 | 37 |  |
| server_commands.setCameraPlayer `ge` | 0 | 32 |  |
| server_commands.changeCameraSpeed `ge` | 1 | 50 |  |
| server_commands.toggleFastSpeed `ge` | 1 | 45 |  |
| server_commands.toggleCamera `ge` | 1 | 118 |  |
| server_commands.isFreeCamera `ge` | 0 | 27 |  |
| server_commands.getCameraTransformJson `ge` | 0 | 131 |  |
| server_commands.setFreeCameraTransformJson `ge` | 1 | 137 |  |
| server_commands.initCamera `ge` | 0 | 8 |  |
| server_server.createGame `ge` | 2 | 411 |  |
| server_server.destroy `ge` | 1 | 382 |  |
| server_server.fadeoutLoadingScreen `ge` | 1 | 344 |  |
| setSpawnpoint.setDefaultSP `ge` | 2 | 14 |  |
| setSpawnpoint.loadDefaultSpawnpoint `ge` | 1 | 30 |  |
| setSpawnpoint.getLastLevelName `ge` | 0 | 58 |  |
| simTimeAuthority.update `ge` | 0+ | 270 |  |
| simTimeAuthority.get `ge` | 0 | 128 |  |
| simTimeAuthority.getReal `ge` | 0 | 124 |  |
| simTimeAuthority.set `ge` | 1 | 132 |  |
| simTimeAuthority.setInstant `ge` | 1 | 137 |  |
| simTimeAuthority.selectPreset `ge` | 1 | 98 |  |
| simTimeAuthority.pause `ge` | 2 | 146 |  |
| simTimeAuthority.pauseSmooth `ge` | 5 | 174 |  |
| simTimeAuthority.getPause `ge` | 0 | 34 |  |
| simTimeAuthority.togglePause `ge` | 0 | 204 |  |
| simTimeAuthority.requestValue `ge` | 0 | 142 |  |
| simTimeAuthority.reportSpeed `ge` | 2 | 64 |  |
| simTimeAuthority.getInitialTimeScale `ge` | 0 | 265 |  |
| simTimeAuthority.pushPauseRequest `ge` | 1 | 217 |  |
| simTimeAuthority.popPauseRequest `ge` | 1 | 230 |  |
| simTimeAuthority.onSerialize `ge` | 0 | 252 | table |
| simTimeAuthority.onDeserialized `ge` | 1 | 257 |  |
| simTimeAuthority.onUIInitialised `ge` | 0 | 248 |  |
| spawn.clearCache `ge` | 0 | 32 |  |
| spawn.spawnVehicle `ge` | 5 | 747 |  |
| spawn.setVehicleObject `ge` | 2 | 538 |  |
| spawn.spawnCamera `ge` | 0 | 870 |  |
| spawn.spawnPlayer `ge` | 0 | 970 |  |
| spawn.pickSpawnPoint `ge` | 1 | 804 |  |
| spawn.calculateRelativeVehiclePlacement `ge` | 4 | 991 |  |
| spawn.placeTrailer `ge` | 6 | 1013 |  |
| spawn.safeTeleport `ge` | 8 | 616 |  |
| spawn.teleportToLastRoad `ge` | 2 | 739 |  |
| spawn.teleportToLastRoadCallback `ge` | 2 | 636 |  |
| suspensionFrequencyTester.run `ge` | 0 | 190 |  |
| AddEventHandler `ge` |3 | 302 |  |
| BString `ge` |1 | 1 |  |
| CEFTypingLostFocus `ge` |0 | 807 |  |
| ChatInputMessageCallback `ge` |1 | 139 |  |
| ConsoleInputCallback `ge` |1 | 429 |  |
| Engine.Audio.createSource `ge` |0+ | [C] |  |
| Engine.Audio.deleteSource `ge` |0+ | [C] |  |
| Engine.Audio.getCanUseHardware `ge` |0+ | [C] |  |
| Engine.Audio.getChannelVolume `ge` |0+ | [C] |  |
| Engine.Audio.getEnvironmentRaycastCone `ge` |0+ | [C] |  |
| Engine.Audio.getEnvironmentRaycastInfo `ge` |0+ | [C] |  |
| Engine.Audio.getGlobalParams `ge` |0+ | [C] |  |
| Engine.Audio.getInfo `ge` |0+ | [C] |  |
| Engine.Audio.intercomPlayPacenote `ge` |0+ | [C] |  |
| Engine.Audio.intercomStopPacenote `ge` |0+ | [C] |  |
| Engine.Audio.playLoopKTimes `ge` |0+ | [C] |  |
| Engine.Audio.playOnce `ge` |0+ | [C] |  |
| Engine.Audio.resetChannelVolume `ge` |0+ | [C] |  |
| Engine.Audio.setChannelVolume `ge` |0+ | [C] |  |
| Engine.Audio.setEnvironmentRaycastInfo `ge` |0+ | [C] |  |
| Engine.Debug.addLevelLogLua `ge` |0+ | [C] |  |
| Engine.Debug.addLevelLogLuaNoObject `ge` |0+ | [C] |  |
| Engine.Debug.clearLevelLogs `ge` |0+ | [C] |  |
| Engine.Debug.dumpShapeMaterials `ge` |0+ | [C] |  |
| Engine.Debug.getLastPerformanceMetrics `ge` |0+ | [C] |  |
| Engine.Debug.getLevelLogsLua `ge` |0+ | [C] |  |
| Engine.NodeGrabber_setFixedNodesVisible `ge` |0+ | [C] |  |
| Engine.Online.isAuthenticated `ge` |0+ | [C] |  |
| Engine.Online.openSession `ge` |0+ | [C] |  |
| Engine.Platform.exploreFolder `ge` |0+ | [C] |  |
| Engine.Platform.forcefeedbackLossBugWorkaround `ge` |0+ | [C] |  |
| Engine.Platform.getCPUInfo `ge` |0+ | [C] |  |
| Engine.Platform.getDiskFreeSpace `ge` |0+ | [C] |  |
| Engine.Platform.getFSInfo `ge` |0+ | [C] |  |
| Engine.Platform.getGFN `ge` |0+ | [C] |  |
| Engine.Platform.getGPUInfo `ge` |0+ | [C] |  |
| Engine.Platform.getKiosk `ge` |0+ | [C] |  |
| Engine.Platform.getKioskDump `ge` |0+ | [C] |  |
| Engine.Platform.getMemoryInfo `ge` |0+ | [C] |  |
| Engine.Platform.getMonitorInfo `ge` |0+ | [C] |  |
| Engine.Platform.getOSInfo `ge` |0+ | [C] |  |
| Engine.Platform.getPowerInfo `ge` |0+ | [C] |  |
| Engine.Platform.getRuntime `ge` |0+ | [C] |  |
| Engine.Platform.getSystemTimeMS `ge` |0+ | [C] |  |
| Engine.Platform.isNetworkUnrestricted `ge` |0+ | [C] |  |
| Engine.Platform.openFile `ge` |0+ | [C] |  |
| Engine.Platform.runBananaBench `ge` |0+ | [C] |  |
| Engine.Platform.runDiskUsage `ge` |0+ | [C] |  |
| Engine.Platform.taskbarSetProgress `ge` |0+ | [C] |  |
| Engine.Platform.taskbarSetProgressState `ge` |0+ | [C] |  |
| Engine.Profiler.popEvent `ge` |0+ | [C] |  |
| Engine.Profiler.pushEvent `ge` |0+ | [C] |  |
| Engine.Profiler.saveCapture `ge` |0+ | [C] |  |
| Engine.Profiler.startCapture `ge` |0+ | [C] |  |
| Engine.Profiler.stopCapture `ge` |0+ | [C] |  |
| Engine.Render.calculateGfxMemory `ge` |0+ | [C] |  |
| Engine.Render.getAdapterType `ge` |0+ | [C] |  |
| Engine.Render.getFrameId `ge` |0+ | [C] |  |
| Engine.Render.getVRAMUsage `ge` |0+ | [C] |  |
| Engine.Render.setAsyncShaderCompilation `ge` |0+ | [C] |  |
| Engine.Render.updateImposters `ge` |0+ | [C] |  |
| Engine.UI.getUIEngine `ge` |0+ | [C] |  |
| Engine.UI.setLocalSchemeVersion `ge` |0+ | [C] |  |
| Engine.cancelShutdown `ge` |0+ | [C] |  |
| Engine.castRay `ge` |0+ | [C] |  |
| Engine.generateUUID `ge` |0+ | [C] |  |
| Engine.getCollisionDebugData `ge` |0+ | [C] |  |
| Engine.getEditorEnabled `ge` |0+ | [C] |  |
| Engine.getFrameLog `ge` |0+ | [C] |  |
| Engine.getGameSenseServer `ge` |0+ | [C] |  |
| Engine.getImageData `ge` |0+ | [C] |  |
| Engine.getStartingArgs `ge` |0+ | [C] |  |
| Engine.getStartingCommandLine `ge` |0+ | [C] |  |
| Engine.getStaticColDebugEnabled `ge` |0+ | [C] |  |
| Engine.getVulkanEnabled `ge` |0+ | [C] |  |
| Engine.isProgramFocused `ge` |0+ | [C] |  |
| Engine.requestShutdown `ge` |0+ | [C] |  |
| Engine.sceneGetCameraFrustum `ge` |0+ | [C] |  |
| Engine.setRenderMode `ge` |0+ | [C] |  |
| Engine.setStaticColDebugEnabled `ge` |0+ | [C] |  |
| Engine.setVulkanEnabled `ge` |0+ | [C] |  |
| HSVtoRGB `ge` |3 | 43 |  |
| LuaExecuteFile `ge` |0+ | [C] |  |
| LuaExecuteQueueString `ge` |0+ | [C] |  |
| LuaExecuteStringSync `ge` |0+ | [C] |  |
| LuaProfiler `ge` |0+ | 169 |  |
| MPTranslate `ge` |2 | 41 |  |
| MP_Console `ge` |1 | 250 |  |
| OBBsquaredDistance `ge` |5 | 1367 |  |
| Point3F `ge` |3 | 49 |  |
| RGBtoHSV `ge` |3 | 30 |  |
| RemoveEventHandler `ge` |2 | 353 |  |
| String `ge` |1 | 1 |  |
| TorqueScript.convertCsAssetToJson `ge` |0+ | [C] |  |
| TorqueScript.eval `ge` |0+ | [C] |  |
| TorqueScript.exec `ge` |0+ | [C] |  |
| TriggerClientEvent `ge` |2 | 292 |  |
| TriggerServerEvent `ge` |2 | 284 |  |
| _flowgraph_createModule `ge` |1 | 43 |  |
| _flowgraph_createNode `ge` |1 | 31 |  |
| _flowgraph_createStateNode `ge` |1 | 37 |  |
| _kv `ge` |1 | 1268 |  |
| activeVehiclesIterator `ge` |1 | 560 |  |
| addKeyEventListener `ge` |3 | 407 |  |
| addLevelLog `ge` |5 | 148 |  |
| addPrefab `ge` |6 | 719 |  |
| alertOK `ge` |0+ | [C] |  |
| altitudeOBB_Plane `ge` |6 | 1417 |  |
| arrayConcat `ge` |2 | 635 |  |
| arrayFindValueIndex `ge` |2 | 763 |  |
| arrayReverse `ge` |1 | 782 |  |
| arrayShuffle `ge` |1 | 773 |  |
| assert `ge` |0+ | [C] |  |
| assignPlayerToDevice `ge` |0+ | [C] |  |
| assimpGetSupportedFileformats `ge` |0+ | [C] |  |
| attachDebugger `ge` |0+ | [C] |  |
| biQuadratic `ge` |5 | 1329 |  |
| biasFun `ge` |2 | 1226 |  |
| biasGainFun `ge` |3 | 1234 |  |
| bpackDecode `ge` |0+ | [C] |  |
| bpackEncode `ge` |0+ | [C] |  |
| bumpFun `ge` |9 | 1249 |  |
| bytes_to_string `ge` |1 | 251 |  |
| cameraMouseRayCast `ge` |0+ | [C] |  |
| captureCameraCubemap `ge` |0+ | [C] |  |
| cardinalSpline `ge` |9 | 1278 |  |
| castRay `ge` |4 | 1285 |  |
| castRayDebug `ge` |4 | 1298 |  |
| castRayStatic `ge` |0+ | [C] |  |
| catmullRom `ge` |6 | 1290 |  |
| catmullRomCentripetal `ge` |6 | 1299 |  |
| catmullRomChordal `ge` |6 | 1294 |  |
| checkFSErrors `ge` |0 | 552 |  |
| checkTableDataTypes `ge` |2 | 857 |  |
| checkVehicleProperty `ge` |3 | 849 |  |
| clamp `ge` |3 | 1151 |  |
| clearAllRopeVisuals `ge` |0+ | [C] |  |
| clearLevelLogs `ge` |0 | 161 |  |
| clearPlayerRole `ge` |1 | 423 |  |
| clearVehicleRole `ge` |1 | 454 |  |
| clientEndMission `ge` |1 | 480 |  |
| clientPostStartMission `ge` |1 | 464 |  |
| clientPreStartMission `ge` |1 | 455 |  |
| clientStartMission `ge` |1 | 471 |  |
| closeMeshAnimationTester `ge` |0+ | [C] |  |
| closestLinePoints `ge` |4 | 652 |  |
| closestLineSegmentPoints `ge` |4 | 672 |  |
| collectgarbage `ge` |0+ | [C] |  |
| collisionReloadTest `ge` |0 | 424 |  |
| color `ge` |4 | 60 |  |
| colorGetRGBA `ge` |1 | 64 |  |
| colorHex `ge` |2 | 68 |  |
| compileCollada `ge` |0+ | [C] |  |
| completeIntegrityChunk `ge` |0+ | [C] |  |
| concatWorkBuffer `ge` |0+ | 545 |  |
| conicBezier `ge` |5 | 1320 |  |
| consoleAddAvailableContext `ge` |0+ | [C] |  |
| consoleClearAvailableContexts `ge` |0+ | [C] |  |
| consoleRemoveAvailableContext `ge` |0+ | [C] |  |
| consoleSetContext `ge` |0+ | [C] |  |
| consoleSetPrintLogTimeAndOrigin `ge` |0+ | [C] |  |
| constainsCylinder_Point `ge` |4 | 1412 |  |
| containerRayCast `ge` |0+ | [C] |  |
| containsEllipsoid_Point `ge` |5 | 1403 |  |
| containsOBB_OBB `ge` |8 | 1360 |  |
| containsOBB_Sphere `ge` |6 | 1385 |  |
| containsOBB_point `ge` |5 | 1398 |  |
| containsSphere_OBB `ge` |6 | 1391 |  |
| convertAnimationFormat `ge` |0+ | [C] |  |
| convertCStoJson `ge` |2 | 174 |  |
| convertColladaToGlTF `ge` |0+ | [C] |  |
| convertDDSToPNG `ge` |0+ | [C] |  |
| convertLevelPrefabs `ge` |1 | 143 |  |
| convertPrefabtoJson `ge` |1 | 128 |  |
| convertToDDS `ge` |0+ | [C] |  |
| convertVehicleColorsToPaints `ge` |1 | 891 |  |
| convertVehicleIdKeysToVehicleNameKeys `ge` |1 | 1331 |  |
| convertVehicleNameKeysToVehicleIdKeys `ge` |1 | 1354 |  |
| copyfile `ge` |2 | 1538 |  |
| createGlobalSnapshot `ge` |1 | 145 |  |
| createObject `ge` |1 | 411 |  |
| createPlayerSpawningData `ge` |7 | 1230 |  |
| createRole `ge` |0 | 2714 |  |
| createRopeVisual `ge` |0+ | [C] |  |
| createScreenshot `ge` |0+ | [C] |  |
| createVehiclePaint `ge` |2 | 907 |  |
| debugBreak `ge` |0+ | [C] |  |
| decalManagerClear `ge` |0+ | [C] |  |
| deepcopy `ge` |1 | 844 |  |
| deleteObject `ge` |1 | 271 |  |
| deserialize `ge` |1 | 1277 |  |
| deserializePackages `ge` |2 | 1031 |  |
| destroyRopeVisual `ge` |0+ | [C] |  |
| detachDebugger `ge` |0+ | [C] |  |
| detectGlobalWrites `ge` |0 | 1304 |  |
| dirContent `ge` |1 | 1394 |  |
| dofile `ge` |0+ | [C] |  |
| dot `ge` |0+ | [C] |  |
| dump `ge` |0+ | 127 |  |
| dumpGfxResourcesMemory `ge` |0 | 1688 |  |
| dumpNamedTextureToPNG `ge` |0+ | [C] |  |
| dumpNotNil `ge` |1 | 142 |  |
| dumpToFile `ge` |1+ | 879 |  |
| dumps `ge` |0+ | 106 |  |
| dumpsz `ge` |2 | 134 |  |
| dumpz `ge` |2 | 138 |  |
| editorEnabled `ge` |1 | 492 |  |
| enableCEFDevConsole `ge` |0+ | [C] |  |
| enableCommunityTranslations `ge` |0 | 860 |  |
| enableMaterialDebug `ge` |0+ | [C] |  |
| enableWinConsole `ge` |0+ | [C] |  |
| endActiveGameMode `ge` |1 | 437 |  |
| enumerateConsoleClasses `ge` |0+ | [C] |  |
| error `ge` |0+ | [C] |  |
| escape_magic `ge` |1 | 1434 |  |
| exec `ge` |0+ | [C] |  |
| executeLuaSandboxed `ge` |2 | 10 |  |
| exportPersistentData `ge` |0 | 811 |  |
| exportToJson `ge` |0+ | [C] |  |
| extensions.MPConfig.acceptTos `ge` |0 | 275 |  |
| extensions.MPConfig.getConfig `ge` |0 | 241 |  |
| extensions.MPConfig.getFavorites `ge` |0 | 175 |  |
| extensions.MPConfig.getNickname `ge` |0 | 122 |  |
| extensions.MPConfig.getPlayerServerID `ge` |0 | 136 |  |
| extensions.MPConfig.onDeserialized `ge` |1 | 299 |  |
| extensions.MPConfig.onExtensionLoaded `ge` |0 | 95 |  |
| extensions.MPConfig.onInit `ge` |0 | 336 |  |
| extensions.MPConfig.onSerialize `ge` |0 | 288 |  |
| extensions.MPConfig.onSettingsChanged `ge` |0 | 306 |  |
| extensions.MPConfig.setConfig `ge` |2 | 263 |  |
| extensions.MPConfig.setDefaultUnicycle `ge` |1 | 42 |  |
| extensions.MPConfig.setFavorites `ge` |1 | 227 |  |
| extensions.MPConfig.setNickname `ge` |1 | 114 |  |
| extensions.MPConfig.setPlayerServerID `ge` |1 | 129 |  |
| extensions.MPControllerGE.applyControllerData `ge` |2 | 32 |  |
| extensions.MPControllerGE.handle `ge` |1 | 45 |  |
| extensions.MPControllerGE.onInit `ge` |0 | 67 |  |
| extensions.MPControllerGE.sendControllerData `ge` |2 | 17 |  |
| extensions.MPControllerGE.tick `ge` |0 | 7 |  |
| extensions.MPCoreNetwork.approveModDownload `ge` |0 | 501 |  |
| extensions.MPCoreNetwork.autoLogin `ge` |0 | 199 |  |
| extensions.MPCoreNetwork.connectToLauncher `ge` |1 | 110 |  |
| extensions.MPCoreNetwork.connectToServer `ge` |4 | 311 |  |
| extensions.MPCoreNetwork.disconnectLauncher `ge` |1 | 140 |  |
| extensions.MPCoreNetwork.getAuthResult `ge` |0 | 458 |  |
| extensions.MPCoreNetwork.getCurrentServer `ge` |0 | 275 |  |
| extensions.MPCoreNetwork.getLauncherVersion `ge` |0 | 172 |  |
| extensions.MPCoreNetwork.getLoginState `ge` |0 | 205 |  |
| extensions.MPCoreNetwork.getProxyPort `ge` |0 | 404 |  |
| extensions.MPCoreNetwork.isGoingMPSession `ge` |0 | 518 |  |
| extensions.MPCoreNetwork.isLauncherConnected `ge` |0 | 185 |  |
| extensions.MPCoreNetwork.isLoggedIn `ge` |0 | 178 |  |
| extensions.MPCoreNetwork.isMPSession `ge` |0 | 511 |  |
| extensions.MPCoreNetwork.leaveServer `ge` |1 | 465 |  |
| extensions.MPCoreNetwork.login `ge` |1 | 191 |  |
| extensions.MPCoreNetwork.logout `ge` |0 | 211 |  |
| extensions.MPCoreNetwork.makeRequest `ge` |3 | 445 |  |
| extensions.MPCoreNetwork.onClientEndMission `ge` |1 | 727 |  |
| extensions.MPCoreNetwork.onClientStartMission `ge` |0 | 721 |  |
| extensions.MPCoreNetwork.onDeserialized `ge` |1 | 744 |  |
| extensions.MPCoreNetwork.onExtensionLoaded `ge` |0 | 757 |  |
| extensions.MPCoreNetwork.onInit `ge` |0 | 810 |  |
| extensions.MPCoreNetwork.onSerialize `ge` |0 | 737 |  |
| extensions.MPCoreNetwork.onUpdate `ge` |1 | 594 |  |
| extensions.MPCoreNetwork.openURL `ge` |1 | 161 |  |
| extensions.MPCoreNetwork.rejectModDownload `ge` |0 | 486 |  |
| extensions.MPCoreNetwork.requestMap `ge` |0 | 526 |  |
| extensions.MPCoreNetwork.requestPlayers `ge` |0 | 254 |  |
| extensions.MPCoreNetwork.requestServerList `ge` |0 | 241 |  |
| extensions.MPCoreNetwork.send `ge` |1 | 71 |  |
| extensions.MPCoreNetwork.sendBeamMPInfo `ge` |0 | 221 |  |
| extensions.MPDebug.hideUI `ge` |0 | 244 |  |
| extensions.MPDebug.onExtensionLoaded `ge` |0 | 72 |  |
| extensions.MPDebug.onInit `ge` |0 | 290 |  |
| extensions.MPDebug.onUpdate `ge` |0 | 261 |  |
| extensions.MPDebug.packetReceived `ge` |1 | 276 |  |
| extensions.MPDebug.packetSent `ge` |1 | 270 |  |
| extensions.MPDebug.showUI `ge` |0 | 237 |  |
| extensions.MPElectricsGE.handle `ge` |1 | 63 |  |
| extensions.MPElectricsGE.onInit `ge` |0 | 85 |  |
| extensions.MPElectricsGE.sendElectrics `ge` |2 | 36 |  |
| extensions.MPElectricsGE.tick `ge` |0 | 20 |  |
| extensions.MPGameNetwork.CallEvent `ge` |1 | 269 |  |
| extensions.MPGameNetwork.addKeyEventListener `ge` |3 | 407 |  |
| extensions.MPGameNetwork.connectToLauncher `ge` |0 | 43 |  |
| extensions.MPGameNetwork.connectionStatus `ge` |0 | 518 |  |
| extensions.MPGameNetwork.disconnectLauncher `ge` |0 | 71 |  |
| extensions.MPGameNetwork.getKeyState `ge` |1 | 435 |  |
| extensions.MPGameNetwork.launcherConnected `ge` |0 | 511 |  |
| extensions.MPGameNetwork.onInit `ge` |0 | 573 |  |
| extensions.MPGameNetwork.onKeyStateChanged `ge` |2 | 420 |  |
| extensions.MPGameNetwork.onUpdate `ge` |1 | 479 |  |
| extensions.MPGameNetwork.onVehicleReady `ge` |1 | 442 |  |
| extensions.MPGameNetwork.quitMP `ge` |1 | 142 |  |
| extensions.MPGameNetwork.receiveIPCGameData `ge` |2 | 522 |  |
| extensions.MPGameNetwork.send `ge` |1 | 87 |  |
| extensions.MPGameNetwork.spawnUiDialog `ge` |1 | 217 |  |
| extensions.MPHelpers.applyQueuedEvents `ge` |0 | 2245 |  |
| extensions.MPHelpers.b64decode `ge` |1 | 82 |  |
| extensions.MPHelpers.b64encode `ge` |1 | 75 |  |
| extensions.MPHelpers.colorMatch `ge` |2 | 68 |  |
| extensions.MPHelpers.focusCameraOnPlayer `ge` |1 | 2213 |  |
| extensions.MPHelpers.getColorsFromVehObj `ge` |1 | 148 |  |
| extensions.MPHelpers.getDistanceMap `ge` |0 | 304 |  |
| extensions.MPHelpers.getGameVehicleID `ge` |1 | 196 |  |
| extensions.MPHelpers.getNicknameMap `ge` |0 | 312 |  |
| extensions.MPHelpers.getOwnMap `ge` |0 | 277 |  |
| extensions.MPHelpers.getServerVehicleID `ge` |1 | 211 |  |
| extensions.MPHelpers.getVehicleMap `ge` |0 | 292 |  |
| extensions.MPHelpers.groundmarkerFollowPlayer `ge` |2 | 2176 |  |
| extensions.MPHelpers.groundmarkerToPlayer `ge` |1 | 2158 |  |
| extensions.MPHelpers.hex2rgb `ge` |1 | 89 |  |
| extensions.MPHelpers.hideNicknames `ge` |1 | 360 |  |
| extensions.MPHelpers.isOwn `ge` |1 | 264 |  |
| extensions.MPHelpers.onExtensionLoaded `ge` |0 | 257 |  |
| extensions.MPHelpers.onInit `ge` |0 | 292 |  |
| extensions.MPHelpers.setPlayerNickPrefix `ge` |3 | 329 |  |
| extensions.MPHelpers.setPlayerNickSuffix `ge` |3 | 346 |  |
| extensions.MPHelpers.simplifyVehConfig `ge` |1 | 159 |  |
| extensions.MPHelpers.splitStringToTable `ge` |3 | 125 |  |
| extensions.MPHelpers.tableDiff `ge` |2 | 108 |  |
| extensions.MPHelpers.tableLength `ge` |1 | 696 |  |
| extensions.MPHelpers.teleportCameraToPlayer `ge` |1 | 2213 |  |
| extensions.MPHelpers.teleportVehToPlayer `ge` |1 | 2190 |  |
| extensions.MPHelpers.translate `ge` |2 | 41 |  |
| extensions.MPInputsGE.applyInputs `ge` |2 | 45 |  |
| extensions.MPInputsGE.handle `ge` |1 | 56 |  |
| extensions.MPInputsGE.onInit `ge` |0 | 78 |  |
| extensions.MPInputsGE.sendInputs `ge` |2 | 32 |  |
| extensions.MPInputsGE.tick `ge` |0 | 16 |  |
| extensions.MPModManager.checkAllMods `ge` |0 | 141 |  |
| extensions.MPModManager.cleanUpSessionMods `ge` |0 | 175 |  |
| extensions.MPModManager.getModList `ge` |0 | 133 |  |
| extensions.MPModManager.isModAllowed `ge` |1 | 71 |  |
| extensions.MPModManager.isModWhitelisted `ge` |1 | 83 |  |
| extensions.MPModManager.loadServerMods `ge` |0 | 149 |  |
| extensions.MPModManager.onExit `ge` |0 | 175 |  |
| extensions.MPModManager.onExtensionLoaded `ge` |0 | 271 |  |
| extensions.MPModManager.onExtensionUnloaded `ge` |0 | 300 |  |
| extensions.MPModManager.onInit `ge` |0 | 350 |  |
| extensions.MPModManager.onModActivated `ge` |1 | 215 |  |
| extensions.MPModManager.onServerLeave `ge` |0 | 307 |  |
| extensions.MPModManager.onUpdate `ge` |1 | 327 |  |
| extensions.MPModManager.reloadLuaReloadWithDelay `ge` |0 | 318 |  |
| extensions.MPModManager.repositoryReplacer `ge` |0 | 249 |  |
| extensions.MPModManager.setServerMods `ge` |1 | 196 |  |
| extensions.MPModManager.verifyMods `ge` |0 | 162 |  |
| extensions.MPPowertrainGE.handle `ge` |1 | 74 |  |
| extensions.MPPowertrainGE.onInit `ge` |0 | 98 |  |
| extensions.MPPowertrainGE.sendEngineData `ge` |2 | 53 |  |
| extensions.MPPowertrainGE.sendLivePowertrain `ge` |2 | 31 |  |
| extensions.MPPowertrainGE.tick `ge` |0 | 16 |  |
| extensions.MPUpdatesGE.onInit `ge` |0 | 91 |  |
| extensions.MPUpdatesGE.onPlayerConnect `ge` |0 | 35 |  |
| extensions.MPUpdatesGE.onUpdate `ge` |1 | 47 |  |
| extensions.MPVehicleGE.applyPlayerQueues `ge` |1 | 2254 |  |
| extensions.MPVehicleGE.applyQueuedEvents `ge` |0 | 2245 |  |
| extensions.MPVehicleGE.clearPlayerRole `ge` |1 | 423 |  |
| extensions.MPVehicleGE.clearVehicleRole `ge` |1 | 454 |  |
| extensions.MPVehicleGE.createRole `ge` |0 | 2714 |  |
| extensions.MPVehicleGE.focusCameraOnPlayer `ge` |1 | 2213 |  |
| extensions.MPVehicleGE.getDistanceMap `ge` |0 | 304 |  |
| extensions.MPVehicleGE.getGameVehicleID `ge` |1 | 196 |  |
| extensions.MPVehicleGE.getNicknameMap `ge` |0 | 312 |  |
| extensions.MPVehicleGE.getOwnMap `ge` |0 | 277 |  |
| extensions.MPVehicleGE.getPlayerByName `ge` |1 | 250 |  |
| extensions.MPVehicleGE.getPlayers `ge` |0 | 372 |  |
| extensions.MPVehicleGE.getRoleInfoTable `ge` |0 | 64 |  |
| extensions.MPVehicleGE.getServerVehicleID `ge` |1 | 211 |  |
| extensions.MPVehicleGE.getVehicleByGameID `ge` |1 | 240 |  |
| extensions.MPVehicleGE.getVehicleByServerID `ge` |1 | 231 |  |
| extensions.MPVehicleGE.getVehicleMap `ge` |0 | 292 |  |
| extensions.MPVehicleGE.getVehicles `ge` |0 | 377 |  |
| extensions.MPVehicleGE.groundmarkerFollowPlayer `ge` |2 | 2176 |  |
| extensions.MPVehicleGE.groundmarkerToPlayer `ge` |1 | 2158 |  |
| extensions.MPVehicleGE.handle `ge` |1 | 2033 |  |
| extensions.MPVehicleGE.hideNicknames `ge` |1 | 360 |  |
| extensions.MPVehicleGE.isOwn `ge` |1 | 264 |  |
| extensions.MPVehicleGE.onClientPostStartMission `ge` |0 | 2566 |  |
| extensions.MPVehicleGE.onDeserialized `ge` |1 | 2530 |  |
| extensions.MPVehicleGE.onDisconnect `ge` |0 | 2566 |  |
| extensions.MPVehicleGE.onInit `ge` |0 | 2698 |  |
| extensions.MPVehicleGE.onPlayerLeft `ge` |1 | 2578 |  |
| extensions.MPVehicleGE.onPreRender `ge` |1 | 2270 |  |
| extensions.MPVehicleGE.onSerialize `ge` |0 | 2520 |  |
| extensions.MPVehicleGE.onServerLeave `ge` |0 | 2104 |  |
| extensions.MPVehicleGE.onSettingsChanged `ge` |0 | 2617 |  |
| extensions.MPVehicleGE.onUIInitialised `ge` |0 | 2606 |  |
| extensions.MPVehicleGE.onUpdate `ge` |1 | 2264 |  |
| extensions.MPVehicleGE.onVehicleColorChanged `ge` |3 | 1707 |  |
| extensions.MPVehicleGE.onVehicleDestroyed `ge` |1 | 1535 |  |
| extensions.MPVehicleGE.onVehicleReady `ge` |1 | 2587 |  |
| extensions.MPVehicleGE.onVehicleResetted `ge` |1 | 1680 |  |
| extensions.MPVehicleGE.onVehicleSpawned `ge` |1 | 1432 |  |
| extensions.MPVehicleGE.onVehicleSwitched `ge` |2 | 1610 |  |
| extensions.MPVehicleGE.queryRoadNodeToPosition `ge` |2 | 2130 |  |
| extensions.MPVehicleGE.removeRole `ge` |0 | 2715 |  |
| extensions.MPVehicleGE.removeVehicleRole `ge` |0 | 2716 |  |
| extensions.MPVehicleGE.replaceRequest `ge` |3 | 2079 |  |
| extensions.MPVehicleGE.restorePlayerVehicle `ge` |1 | 1516 |  |
| extensions.MPVehicleGE.runPostJoin `ge` |0 | 2093 |  |
| extensions.MPVehicleGE.saveDefaultRequest `ge` |0 | 2043 |  |
| extensions.MPVehicleGE.sendBeamstate `ge` |2 | 1212 |  |
| extensions.MPVehicleGE.sendPastVehicles `ge` |0 | 2544 |  |
| extensions.MPVehicleGE.sendPendingVehicleEdits `ge` |0 | 2111 |  |
| extensions.MPVehicleGE.sendVehicleEdit `ge` |1 | 1179 |  |
| extensions.MPVehicleGE.setOwn `ge` |2 | 465 |  |
| extensions.MPVehicleGE.setPlayerNickPrefix `ge` |3 | 329 |  |
| extensions.MPVehicleGE.setPlayerNickSuffix `ge` |3 | 346 |  |
| extensions.MPVehicleGE.setPlayerRole `ge` |1+ | 406 |  |
| extensions.MPVehicleGE.setVehicleRole `ge` |1+ | 437 |  |
| extensions.MPVehicleGE.spawnDefaultRequest `ge` |0 | 2054 |  |
| extensions.MPVehicleGE.spawnRequest `ge` |3 | 2074 |  |
| extensions.MPVehicleGE.teleportCameraToPlayer `ge` |1 | 2709 |  |
| extensions.MPVehicleGE.teleportVehToPlayer `ge` |1 | 2190 |  |
| extensions.MPVehicleGE.toggleNicknames `ge` |0 | 367 |  |
| extensions.UI.AcceptCopy `ge` |0+ | [C] |  |
| extensions.UI.AcceptCreateNode `ge` |0+ | [C] |  |
| extensions.UI.AcceptCut `ge` |0+ | [C] |  |
| extensions.UI.AcceptDeletedItem `ge` |1 | 199 |  |
| extensions.UI.AcceptDuplicate `ge` |0+ | [C] |  |
| extensions.UI.AcceptNewItem1 `ge` |0+ | [C] |  |
| extensions.UI.AcceptNewItem2 `ge` |2 | 186 |  |
| extensions.UI.AcceptPaste `ge` |0+ | [C] |  |
| extensions.UI.AreShortcutsEnabled `ge` |0+ | [C] |  |
| extensions.UI.Begin `ge` |3 | 123 |  |
| extensions.UI.BeginCreate `ge` |2 | 170 |  |
| extensions.UI.BeginDelete `ge` |0+ | [C] |  |
| extensions.UI.BeginGroupHint `ge` |0+ | [C] |  |
| extensions.UI.BeginNode `ge` |0+ | [C] |  |
| extensions.UI.BeginPin `ge` |0+ | [C] |  |
| extensions.UI.BeginShortcut `ge` |0+ | [C] |  |
| extensions.UI.CanvasToScreen `ge` |0+ | [C] |  |
| extensions.UI.CenterNodeOnScreen `ge` |0+ | [C] |  |
| extensions.UI.ClearDirty `ge` |0+ | [C] |  |
| extensions.UI.ClearSelection `ge` |0+ | [C] |  |
| extensions.UI.CreateEditor `ge` |0+ | [C] |  |
| extensions.UI.DeleteLink `ge` |0+ | [C] |  |
| extensions.UI.DeleteNode `ge` |0+ | [C] |  |
| extensions.UI.DeselectLink `ge` |0+ | [C] |  |
| extensions.UI.DeselectNode `ge` |0+ | [C] |  |
| extensions.UI.DestroyEditor `ge` |0+ | [C] |  |
| extensions.UI.DrawIcon `ge` |0+ | [C] |  |
| extensions.UI.EnableShortcuts `ge` |0+ | [C] |  |
| extensions.UI.End `ge` |0 | 135 |  |
| extensions.UI.EndCreate `ge` |0+ | [C] |  |
| extensions.UI.EndDelete `ge` |0+ | [C] |  |
| extensions.UI.EndGroupHint `ge` |0+ | [C] |  |
| extensions.UI.EndNode `ge` |0+ | [C] |  |
| extensions.UI.EndPin `ge` |0+ | [C] |  |
| extensions.UI.EndShortcut `ge` |0+ | [C] |  |
| extensions.UI.FindLinkAt `ge` |0+ | [C] |  |
| extensions.UI.Flow `ge` |2 | 166 |  |
| extensions.UI.GetActionContextLinkIds `ge` |0+ | [C] |  |
| extensions.UI.GetActionContextLinks `ge` |2 | 279 |  |
| extensions.UI.GetActionContextNodeIds `ge` |0+ | [C] |  |
| extensions.UI.GetActionContextNodes `ge` |2 | 271 |  |
| extensions.UI.GetActionContextSize `ge` |0+ | [C] |  |
| extensions.UI.GetCurrentEditor `ge` |0+ | [C] |  |
| extensions.UI.GetCurrentZoom `ge` |0+ | [C] |  |
| extensions.UI.GetDirtyReason `ge` |0+ | [C] |  |
| extensions.UI.GetDoubleClickedLink `ge` |0+ | [C] |  |
| extensions.UI.GetDoubleClickedNode `ge` |0+ | [C] |  |
| extensions.UI.GetDoubleClickedPin `ge` |0+ | [C] |  |
| extensions.UI.GetGroupMax `ge` |0+ | [C] |  |
| extensions.UI.GetGroupMin `ge` |0+ | [C] |  |
| extensions.UI.GetHintBackgroundDrawList `ge` |0+ | [C] |  |
| extensions.UI.GetHintForegroundDrawList `ge` |0+ | [C] |  |
| extensions.UI.GetHotObjectId `ge` |0+ | [C] |  |
| extensions.UI.GetNodeBackgroundDrawList `ge` |0+ | [C] |  |
| extensions.UI.GetNodePosition `ge` |0+ | [C] |  |
| extensions.UI.GetNodeSize `ge` |0+ | [C] |  |
| extensions.UI.GetScreenSize `ge` |0+ | [C] |  |
| extensions.UI.GetSelectedLinkIds `ge` |0+ | [C] |  |
| extensions.UI.GetSelectedLinks `ge` |2 | 224 |  |
| extensions.UI.GetSelectedNodeIds `ge` |0+ | [C] |  |
| extensions.UI.GetSelectedNodes `ge` |2 | 216 |  |
| extensions.UI.GetSelectedObjectCount `ge` |0+ | [C] |  |
| extensions.UI.GetStyle `ge` |0+ | [C] |  |
| extensions.UI.GetStyleColorName `ge` |0+ | [C] |  |
| extensions.UI.GetVisibleCanvasBounds `ge` |0+ | [C] |  |
| extensions.UI.Group `ge` |0+ | [C] |  |
| extensions.UI.HasSelectionChanged `ge` |0+ | [C] |  |
| extensions.UI.Icon `ge` |0+ | [C] |  |
| extensions.UI.IsActive `ge` |0+ | [C] |  |
| extensions.UI.IsBackgroundClicked `ge` |0+ | [C] |  |
| extensions.UI.IsBackgroundDoubleClicked `ge` |0+ | [C] |  |
| extensions.UI.IsSuspended `ge` |0+ | [C] |  |
| extensions.UI.Link `ge` |7 | 160 |  |
| extensions.UI.LinkIdPtr `ge` |0 | 17 |  |
| extensions.UI.NavigateToContent `ge` |1 | 249 |  |
| extensions.UI.NavigateToSelection `ge` |2 | 253 |  |
| extensions.UI.NodeIdPtr `ge` |0 | 13 |  |
| extensions.UI.PinHadAnyLinks `ge` |0+ | [C] |  |
| extensions.UI.PinIdPtr `ge` |0 | 21 |  |
| extensions.UI.PinPivotAlignment `ge` |0+ | [C] |  |
| extensions.UI.PinPivotRect `ge` |0+ | [C] |  |
| extensions.UI.PinPivotScale `ge` |0+ | [C] |  |
| extensions.UI.PinPivotSize `ge` |0+ | [C] |  |
| extensions.UI.PinRect `ge` |0+ | [C] |  |
| extensions.UI.PopStyleColor `ge` |1 | 112 |  |
| extensions.UI.PopStyleVar `ge` |1 | 119 |  |
| extensions.UI.PtrToId `ge` |1 | 9 |  |
| extensions.UI.PushStyleColor `ge` |0+ | [C] |  |
| extensions.UI.PushStyleVar1 `ge` |0+ | [C] |  |
| extensions.UI.PushStyleVar2 `ge` |0+ | [C] |  |
| extensions.UI.PushStyleVar4 `ge` |0+ | [C] |  |
| extensions.UI.QueryDeletedLink `ge` |0+ | [C] |  |
| extensions.UI.QueryDeletedNode `ge` |0+ | [C] |  |
| extensions.UI.QueryNewLink1 `ge` |0+ | [C] |  |
| extensions.UI.QueryNewLink2 `ge` |4 | 176 |  |
| extensions.UI.QueryNewNode1 `ge` |0+ | [C] |  |
| extensions.UI.QueryNewNode2 `ge` |3 | 181 |  |
| extensions.UI.RejectDeletedItem `ge` |0+ | [C] |  |
| extensions.UI.RejectNewItem1 `ge` |0+ | [C] |  |
| extensions.UI.RejectNewItem2 `ge` |2 | 191 |  |
| extensions.UI.RestoreNodeState `ge` |0+ | [C] |  |
| extensions.UI.Resume `ge` |0+ | [C] |  |
| extensions.UI.ScreenToCanvas `ge` |0+ | [C] |  |
| extensions.UI.SelectLink `ge` |2 | 240 |  |
| extensions.UI.SelectNode `ge` |2 | 235 |  |
| extensions.UI.SetCurrentEditor `ge` |1 | 100 |  |
| extensions.UI.SetGroupingDisabled `ge` |0+ | [C] |  |
| extensions.UI.SetNodePosition `ge` |0+ | [C] |  |
| extensions.UI.ShowBackgroundContextMenu `ge` |0+ | [C] |  |
| extensions.UI.ShowLinkContextMenu `ge` |0+ | [C] |  |
| extensions.UI.ShowNodeContextMenu `ge` |0+ | [C] |  |
| extensions.UI.ShowPinContextMenu `ge` |0+ | [C] |  |
| extensions.UI.Suspend `ge` |0+ | [C] |  |
| extensions.UI.bringToFront `ge` |0 | 451 |  |
| extensions.UI.chatMessage `ge` |1 | 416 |  |
| extensions.UI.chatSend `ge` |1 | 444 |  |
| extensions.UI.getCustomButtonNames `ge` |0 | 520 |  |
| extensions.UI.getCustomPlayerlistButtons `ge` |0 | 541 |  |
| extensions.UI.getDebugEnabled `ge` |0+ | [C] |  |
| extensions.UI.getViewState `ge` |0+ | [C] |  |
| extensions.UI.onClientEndMission `ge` |1 | 475 |  |
| extensions.UI.onExtensionLoaded `ge` |0 | 483 |  |
| extensions.UI.onInit `ge` |0 | 568 |  |
| extensions.UI.onUpdate `ge` |1 | 511 |  |
| extensions.UI.promptAutoJoinConfirmation `ge` |1 | 101 |  |
| extensions.UI.sendQueue `ge` |0 | 149 |  |
| extensions.UI.setDebugEnabled `ge` |0+ | [C] |  |
| extensions.UI.setNickname `ge` |1 | 184 |  |
| extensions.UI.setPing `ge` |1 | 174 |  |
| extensions.UI.setPlayerCount `ge` |1 | 201 |  |
| extensions.UI.setPlayerPing `ge` |2 | 469 |  |
| extensions.UI.setServerName `ge` |1 | 192 |  |
| extensions.UI.setViewState `ge` |0+ | [C] |  |
| extensions.UI.showMdDialog `ge` |1 | 217 |  |
| extensions.UI.showNotification `ge` |3 | 210 |  |
| extensions.UI.toggleChat `ge` |0 | 457 |  |
| extensions.UI.updateLoading `ge` |1 | 90 |  |
| extensions.UI.updatePlayersList `ge` |1 | 125 |  |
| extensions.UI.updateQueue `ge` |3 | 157 |  |
| extensions.career_branches.onCareerModulesActivated `ge` |1 | 444 |  |
| extensions.career_branches.onGetUnlockFlagDefinitions `ge` |1 | 507 |  |
| extensions.career_branches.onSaveCurrentSaveSlot `ge` |1 | 431 |  |
| extensions.career_career.onAnyMissionChanged `ge` |2 | 506 |  |
| extensions.career_career.onBeforeSetSaveSlot `ge` |2 | 313 |  |
| extensions.career_career.onCameraModeChanged `ge` |1 | 59 |  |
| extensions.career_career.onClientStartMission `ge` |1 | 319 |  |
| extensions.career_career.onGlobalCameraSet `ge` |1 | 64 |  |
| extensions.career_career.onSaveCurrentSaveSlot `ge` |1 | 293 |  |
| extensions.career_career.onVehicleAddedToInventory `ge` |1 | 530 |  |
| extensions.core_audio.onClientPreStartMission `ge` |1 | 340 |  |
| extensions.core_audio.onFilesChanged `ge` |1 | 381 |  |
| extensions.core_audio.onFirstUpdate `ge` |0 | 312 |  |
| extensions.core_audio.onPhysicsPaused `ge` |0 | 426 |  |
| extensions.core_audio.onPhysicsUnpaused `ge` |0 | 430 |  |
| extensions.core_audio.onReplayStateChanged `ge` |1 | 434 |  |
| extensions.core_audioRibbon.onClientCustomObjectSpawning `ge` |0 | 682 |  |
| extensions.core_audioRibbon.onEditorBeforeSaveLevel `ge` |0 | 673 |  |
| extensions.core_audioRibbon.onUpdate `ge` |3 | 292 |  |
| extensions.core_camera.onClientPostStartMission `ge` |0 | 765 |  |
| extensions.core_camera.onFileChanged `ge` |2 | 1506 |  |
| extensions.core_camera.onMouseLocked `ge` |1 | 1364 |  |
| extensions.core_camera.onPreRender `ge` |3 | 825 |  |
| extensions.core_camera.onReplayStateChanged `ge` |1 | 1732 |  |
| extensions.core_camera.onScenarioChange `ge` |0+ | 1410 |  |
| extensions.core_camera.onScenarioRestarted `ge` |0+ | 1406 |  |
| extensions.core_camera.onSettingsChanged `ge` |0+ | 1392 |  |
| extensions.core_camera.onVehicleDestroyed `ge` |1 | 79 |  |
| extensions.core_camera.onVehicleResetted `ge` |1+ | 1352 |  |
| extensions.core_camera.onVehicleSpawned `ge` |1 | 75 |  |
| extensions.core_camera.onVehicleSwitched `ge` |0+ | 1422 |  |
| extensions.core_checkpoints.onClientPreStartMission `ge` |1 | 261 |  |
| extensions.core_checkpoints.onPreRender `ge` |1 | 168 |  |
| extensions.core_checkpoints.onRaceWaypointReached `ge` |1 | 109 |  |
| extensions.core_checkpoints.onSaveCampaign `ge` |1 | 277 |  |
| extensions.core_checkpoints.onScenarioRestarted `ge` |1 | 198 |  |
| extensions.core_checkpoints.onVehicleDestroyed `ge` |1 | 244 |  |
| extensions.core_checkpoints.onVehicleSpawned `ge` |1 | 224 |  |
| extensions.core_commandhandler.onExtensionLoaded `ge` |0 | 41 |  |
| extensions.core_commandhandler.onFirstUpdate `ge` |0 | 148 |  |
| extensions.core_commandhandler.onUiReady `ge` |0 | 140 |  |
| extensions.core_devices.onVehicleSwitched `ge` |3 | 26 |  |
| extensions.core_environment.onClientPostStartMission `ge` |1 | 800 |  |
| extensions.core_environment.onClientPreStartMission `ge` |1 | 792 |  |
| extensions.core_environment.onClientStartMission `ge` |1 | 876 |  |
| extensions.core_environment.onEditorEnabled `ge` |1 | 890 |  |
| extensions.core_environment.onFilesChanged `ge` |1 | 809 |  |
| extensions.core_environment.onInit `ge` |0 | 769 |  |
| extensions.core_environment.onUpdate `ge` |0 | 843 |  |
| extensions.core_flowgraphManager.onFileChanged `ge` |2 | 202 |  |
| extensions.core_flowgraphManager.onLoadingScreenFadeout `ge` |0 | 152 |  |
| extensions.core_flowgraphManager.onUpdate `ge` |0 | 164 |  |
| extensions.core_gameContext.onAnyMissionChanged `ge` |2 | 21 |  |
| extensions.core_gamestate.onUpdate `ge` |3 | 185 |  |
| extensions.core_groundMarkerArrows.onExit `ge` |0 | 29 |  |
| extensions.core_groundMarkerArrows.onPreRender `ge` |1 | 244 |  |
| extensions.core_groundMarkers.onAnyMissionChanged `ge` |1 | 376 |  |
| extensions.core_groundMarkers.onPreRender `ge` |1 | 182 |  |
| extensions.core_groundMarkers.onSettingsChanged `ge` |0 | 355 |  |
| extensions.core_hardwareinfo.onModManagerReady `ge` |0 | 230 |  |
| extensions.core_input_actions.onFileChanged `ge` |1 | 264 |  |
| extensions.core_input_actions.onFirstUpdate `ge` |0 | 256 |  |
| extensions.core_input_actions.onVehicleSwitched `ge` |3 | 260 |  |
| extensions.core_input_bindings.onFileChanged `ge` |2 | 985 |  |
| extensions.core_input_bindings.onFirstUpdate `ge` |0 | 1019 |  |
| extensions.core_input_bindings.onSettingsChanged `ge` |0 | 1002 |  |
| extensions.core_input_bindings.onVehicleSpawned `ge` |2 | 909 |  |
| extensions.core_input_bindings.onVehicleSwitched `ge` |3 | 895 |  |
| extensions.core_input_bindings.updateGFX `ge` |1 | 969 |  |
| extensions.core_inventory.onSaveCampaign `ge` |1 | 180 |  |
| extensions.core_jobsystem.onUpdate `ge` |3 | 102 |  |
| extensions.core_lapTimes.onRaceStart `ge` |1 | 134 |  |
| extensions.core_lapTimes.onUpdate `ge` |3 | 593 |  |
| extensions.core_levels.onClientPostStartMission `ge` |0 | 450 |  |
| extensions.core_levels.onFilesChanged `ge` |1 | 377 |  |
| extensions.core_levels.onGetRawPoiListForLevel `ge` |2 | 555 |  |
| extensions.core_modmanager.checkUpdate `ge` |0+ | 90 |  |
| extensions.core_modmanager.initDB `ge` |0+ | 90 |  |
| extensions.core_modmanager.onFileChanged `ge` |2 | 1187 |  |
| extensions.core_modmanager.onUiReady `ge` |0 | 634 |  |
| extensions.core_multiSpawn.onSpawnCCallback `ge` |1 | 818 |  |
| extensions.core_multiseatCamera.onSettingsChanged `ge` |0 | 78 |  |
| extensions.core_multiseatCamera.onUpdate `ge` |0 | 41 |  |
| extensions.core_online.onSettingsChanged `ge` |0 | 232 |  |
| extensions.core_paths.onClientStartMission `ge` |0 | 196 |  |
| extensions.core_quickAccess.onBeforeBigMapActivated `ge` |0 | 2612 |  |
| extensions.core_quickAccess.onExit `ge` |0 | 2597 |  |
| extensions.core_quickAccess.onInit `ge` |0 | 2449 |  |
| extensions.core_quickAccess.onUpdate `ge` |0 | 2558 |  |
| extensions.core_quickAccess.onVehicleSwitched `ge` |0 | 2579 |  |
| extensions.core_recoveryPrompt.onBeforeRadialOpened `ge` |0 | 878 |  |
| extensions.core_recoveryPrompt.onCareerModulesActivated `ge` |1 | 460 |  |
| extensions.core_recoveryPrompt.onClientStartMission `ge` |1 | 467 |  |
| extensions.core_recoveryPrompt.onHideRadialMenu `ge` |0 | 886 |  |
| extensions.core_recoveryPrompt.onQuickAccessLoaded `ge` |0 | 890 |  |
| extensions.core_recoveryPrompt.onResetGameplay `ge` |1 | 804 |  |
| extensions.core_recoveryPrompt.onScreenFadeState `ge` |1 | 701 |  |
| extensions.core_remoteController.onInputBindingsChanged `ge` |1 | 172 |  |
| extensions.core_remoteController.onUpdate `ge` |0 | 70 |  |
| extensions.core_replay.onInit `ge` |0 | 21 |  |
| extensions.core_settings_graphic.onSettingsChanged `ge` |0 | 1281 |  |
| extensions.core_settings_settings.onFilesChanged `ge` |1 | 473 |  |
| extensions.core_settings_settings.settingsTick `ge` |0 | 41 |  |
| extensions.core_sounds.onActivityAcceptGatherData `ge` |2 | 185 |  |
| extensions.core_sounds.onMissionAvailabilityChanged `ge` |1 | 195 |  |
| extensions.core_sounds.onMissionInfoChangedState `ge` |3 | 171 |  |
| extensions.core_sounds.onPreRender `ge` |3 | 29 |  |
| extensions.core_sounds.onSettingsChanged `ge` |0 | 130 |  |
| extensions.core_sounds.onVehicleSwitched `ge` |3 | 206 |  |
| extensions.core_trafficSignals.getSignalsDict `ge` |0 | 41 |  |
| extensions.core_trafficSignals.onClientStartMission `ge` |0 | 1572 |  |
| extensions.core_trafficSignals.onNavgraphReloaded `ge` |0 | 1565 |  |
| extensions.core_trafficSignals.onUpdate `ge` |2 | 1466 |  |
| extensions.core_trailerRespawn.onCouplerAttached `ge` |4 | 119 |  |
| extensions.core_trailerRespawn.onCouplerDetach `ge` |2 | 137 |  |
| extensions.core_trailerRespawn.onVehicleActiveChanged `ge` |2 | 141 |  |
| extensions.core_trailerRespawn.onVehicleDestroyed `ge` |1 | 188 |  |
| extensions.core_trailerRespawn.onVehicleResetted `ge` |1 | 181 |  |
| extensions.core_trailerRespawn.onVehicleSpawned `ge` |1 | 176 |  |
| extensions.core_vehicleActivePooling.onVehicleActiveChanged `ge` |2 | 379 |  |
| extensions.core_vehicleActivePooling.onVehicleDestroyed `ge` |1 | 385 |  |
| extensions.core_vehicleBridge.logCommand `ge` |0 | 41 |  |
| extensions.core_vehicleBridge.onVehicleDestroyed `ge` |1 | 135 |  |
| extensions.core_vehicleBridge.onVehicleReplaced `ge` |1 | 136 |  |
| extensions.core_vehicleTriggers.onCefVisibilityChanged `ge` |1 | 594 |  |
| extensions.core_vehicleTriggers.onMouseLocked `ge` |1 | 424 |  |
| extensions.core_vehicleTriggers.onUpdate `ge` |3 | 460 |  |
| extensions.core_vehicle_colors.onVehicleSpawned `ge` |1 | 72 |  |
| extensions.core_vehicle_manager.onEditorGui `ge` |0 | 312 |  |
| extensions.core_vehicle_manager.onEditorInitialized `ge` |0 | 348 |  |
| extensions.core_vehicle_manager.onFileChanged `ge` |2 | 52 |  |
| extensions.core_vehicle_manager.onUpdate `ge` |0 | 354 |  |
| extensions.core_vehicle_manager.onVehicleSwitched `ge` |3 | 208 |  |
| extensions.core_vehicle_mirror.onSettingsChanged `ge` |0 | 46 |  |
| extensions.core_vehicle_mirror.onUpdate `ge` |3 | 156 |  |
| extensions.core_vehicle_mirror.onVehicleDestroyed `ge` |1 | 51 |  |
| extensions.core_vehicle_mirror.onVehicleSpawned `ge` |2 | 54 |  |
| extensions.core_vehicle_partmgmt.onUpdate `ge` |1 | 1047 |  |
| extensions.core_vehicle_partmgmt.onVehicleSpawned `ge` |1 | 1042 |  |
| extensions.core_vehicles.onCouplerAttached `ge` |4 | 2689 |  |
| extensions.core_vehicles.onCouplerDetached `ge` |4 | 2767 |  |
| extensions.core_vehicles.onFileChanged `ge` |2 | 1944 |  |
| extensions.core_vehicles.onFileChangedEnd `ge` |0 | 1957 |  |
| extensions.core_vehicles.onPreVehicleSpawned `ge` |1 | 2532 |  |
| extensions.core_vehicles.onSettingsChanged `ge` |0 | 1963 |  |
| extensions.core_vehicles.onVehicleDestroyed `ge` |1 | 2581 |  |
| extensions.core_vehicles.onVehicleSwitched `ge` |3 | 2561 |  |
| extensions.core_weather.onClientPostStartMission `ge` |1 | 337 |  |
| extensions.core_weather.onPreRender `ge` |1 | 273 |  |
| extensions.core_windowsConsole.onVehicleActiveChanged `ge` |0 | 47 |  |
| extensions.core_windowsConsole.onVehicleDestroyed `ge` |0 | 47 |  |
| extensions.core_windowsConsole.onVehicleSpawned `ge` |0 | 47 |  |
| extensions.core_windowsConsole.onVehicleSwitched `ge` |0 | 47 |  |
| extensions.editor_main.onClientStartMission `ge` |0 | 598 |  |
| extensions.editor_main.onExit `ge` |0 | 660 |  |
| extensions.editor_main.onFirstUpdate `ge` |0 | 729 |  |
| extensions.editor_main.onPreWindowClose `ge` |0 | 604 |  |
| extensions.editor_main.onUpdate `ge` |0 | 616 |  |
| extensions.editor_main.setupEditorGuiTheme `ge` |0 | 8 |  |
| extensions.editor_veMain.getEditorName `ge` |0 | 55 |  |
| extensions.editor_veMain.onEditorHeadlessChange `ge` |2 | 313 |  |
| extensions.editor_veMain.onEditorHeadlessMainMenuBar `ge` |0 | 389 |  |
| extensions.editor_veMain.onEditorInitialized `ge` |0 | 305 |  |
| extensions.editor_veMain.onEditorInspectorFieldChanged `ge` |4 | 336 |  |
| extensions.editor_veMain.onPreRender `ge` |3 | 246 |  |
| extensions.editor_veMain.onVehicleDestroyed `ge` |0 | 328 |  |
| extensions.editor_veMain.onVehicleSwitched `ge` |3 | 309 |  |
| extensions.editor_veMain.setEditorMode `ge` |1 | 60 |  |
| extensions.freeroam_bigMapMode.onCameraPreRender `ge` |1 | 993 |  |
| extensions.freeroam_bigMapMode.onClientStartMission `ge` |1 | 1428 |  |
| extensions.freeroam_bigMapMode.onNavgraphReloaded `ge` |0 | 1438 |  |
| extensions.freeroam_bigMapMode.onReachedTargetPos `ge` |0 | 369 |  |
| extensions.freeroam_bigMapPoiProvider.onClientStartMission `ge` |0 | 10 |  |
| extensions.freeroam_bigMapPoiProvider.onPreRender `ge` |2 | 701 |  |
| extensions.freeroam_configuratorOptions_freeroamOptions.onFreeroamConfiguratorApplyOptions `ge` |1 | 123 |  |
| extensions.freeroam_configuratorOptions_freeroamOptions.onFreeroamConfiguratorGetOptions `ge` |2 | 3 |  |
| extensions.freeroam_crashCamModeLoader.onSettingsChanged `ge` |0 | 7 |  |
| extensions.freeroam_facilities.onActivityAcceptGatherData `ge` |2 | 448 |  |
| extensions.freeroam_facilities.onGetRawPoiListForLevel `ge` |2 | 427 |  |
| extensions.freeroam_facilities_fuelPrice.onClientStartMission `ge` |1 | 108 |  |
| extensions.freeroam_freeroam.onClientPostStartMission `ge` |1 | 196 |  |
| extensions.freeroam_freeroam.onClientPreStartMission `ge` |1 | 174 |  |
| extensions.freeroam_freeroam.onClientStartMission `ge` |1 | 184 |  |
| extensions.freeroam_freeroam.onPlayerCameraReady `ge` |0 | 121 |  |
| extensions.freeroam_freeroam.onRedLightCamTriggered `ge` |2 | 351 |  |
| extensions.freeroam_freeroam.onResetGameplay `ge` |1 | 272 |  |
| extensions.freeroam_freeroam.onSpeedTrapTriggered `ge` |3 | 328 |  |
| extensions.freeroam_freeroam.onUpdate `ge` |3 | 312 |  |
| extensions.freeroam_freeroam.onVehicleSpawned `ge` |1 | 266 |  |
| extensions.freeroam_freeroam.onVehicleSwitched `ge` |3 | 262 |  |
| extensions.freeroam_gasStations.onActivityAcceptGatherData `ge` |2 | 79 |  |
| extensions.freeroam_gasStations.onGetRawPoiListForLevel `ge` |2 | 68 |  |
| extensions.freeroam_levelStats.getTopLevels `ge` |0 | 34 |  |
| extensions.freeroam_levelStats.getTopSpawnPoints `ge` |1 | 52 |  |
| extensions.freeroam_levelStats.getUiStats `ge` |0 | 70 |  |
| extensions.freeroam_levelStats.recordLevelSpawn `ge` |2 | 16 |  |
| extensions.freeroam_specialTriggers.onBeamNGTrigger `ge` |1 | 512 |  |
| extensions.freeroam_specialTriggers.onClientStartMission `ge` |0 | 395 |  |
| extensions.freeroam_specialTriggers.onUpdate `ge` |2 | 403 |  |
| extensions.freeroam_specialTriggers.onVehicleActiveChanged `ge` |2 | 387 |  |
| extensions.freeroam_specialTriggers.onVehicleDestroyed `ge` |1 | 377 |  |
| extensions.freeroam_specialTriggers.onVehicleSwitched `ge` |2 | 362 |  |
| extensions.freeroam_vueBigMap.onPoiSelectedFromBigmap `ge` |1 | 739 |  |
| extensions.gameplay_city.onClientStartMission `ge` |1 | 120 |  |
| extensions.gameplay_crawl_display.onCrawlResultsShown `ge` |0 | 28 |  |
| extensions.gameplay_crawl_display.onCrawlStarted `ge` |0 | 19 |  |
| extensions.gameplay_crawl_display.showDisqualifiedMessage `ge` |0 | 65 |  |
| extensions.gameplay_crawl_general.onActivityAcceptGatherData `ge` |2 | 234 |  |
| extensions.gameplay_crawl_general.onActivityIndexVisible `ge` |1 | 317 |  |
| extensions.gameplay_crawl_general.onAnyMissionChanged `ge` |2 | 382 |  |
| extensions.gameplay_crawl_general.onCrawlResultsShown `ge` |1 | 388 |  |
| extensions.gameplay_crawl_general.onDrawOnMinimap `ge` |1 | 352 |  |
| extensions.gameplay_crawl_general.onGetRawPoiListForLevel `ge` |2 | 182 |  |
| extensions.gameplay_crawl_general.onUpdate `ge` |3 | 162 |  |
| extensions.gameplay_crawl_general.onVehicleDestroyed `ge` |1 | 376 |  |
| extensions.gameplay_crawl_general.onVehicleSwitched `ge` |2 | 370 |  |
| extensions.gameplay_crawl_saveSystem.getAllBoundaries `ge` |0 | 643 |  |
| extensions.gameplay_crawl_saveSystem.getAllPaths `ge` |0 | 655 |  |
| extensions.gameplay_crawl_saveSystem.getAllStartingPositions `ge` |0 | 667 |  |
| extensions.gameplay_crawl_saveSystem.getAllTrails `ge` |0 | 631 |  |
| extensions.gameplay_crawl_saveSystem.onCareerActive `ge` |0 | 692 |  |
| extensions.gameplay_crawl_saveSystem.onSaveCurrentSaveSlot `ge` |1 | 702 |  |
| extensions.gameplay_crawl_utils.onDrawOnMinimap `ge` |1 | 1201 |  |
| extensions.gameplay_crawl_utils.onPreRender `ge` |3 | 1207 |  |
| extensions.gameplay_crawl_utils.onVehicleFlippedUpright `ge` |1 | 1057 |  |
| extensions.gameplay_crawl_utils.trackVehReset `ge` |0 | 1460 |  |
| extensions.gameplay_discover.onInit `ge` |0 | 108 |  |
| extensions.gameplay_discover.onLoadingScreenFadeout `ge` |0 | 91 |  |
| extensions.gameplay_drag_general.onAnyMissionChanged `ge` |2 | 576 |  |
| extensions.gameplay_drag_general.onCareerActive `ge` |0 | 619 |  |
| extensions.gameplay_drag_general.onGetRawPoiListForLevel `ge` |2 | 793 |  |
| extensions.gameplay_drag_general.onSaveCurrentSaveSlot `ge` |1 | 602 |  |
| extensions.gameplay_drag_general.onVehicleDestroyed `ge` |1 | 564 |  |
| extensions.gameplay_drag_general.onVehicleResetted `ge` |1 | 545 |  |
| extensions.gameplay_drag_general.onVehicleSwitched `ge` |2 | 556 |  |
| extensions.gameplay_drag_saveSystem.onCareerActive `ge` |0 | 525 |  |
| extensions.gameplay_drag_saveSystem.onSaveCurrentSaveSlot `ge` |1 | 518 |  |
| extensions.gameplay_drift_display.onDonutDriftScored `ge` |1 | 93 |  |
| extensions.gameplay_drift_display.onDriftCachedScoreReset `ge` |0 | 279 |  |
| extensions.gameplay_drift_display.onDriftCompletedScored `ge` |1 | 53 |  |
| extensions.gameplay_drift_display.onDriftContextChanged `ge` |1 | 331 |  |
| extensions.gameplay_drift_display.onDriftCrash `ge` |0 | 66 |  |
| extensions.gameplay_drift_display.onDriftDebugChanged `ge` |1 | 325 |  |
| extensions.gameplay_drift_display.onDriftPlVehReset `ge` |0 | 267 |  |
| extensions.gameplay_drift_display.onDriftQuickMessageDisplay `ge` |1 | 263 |  |
| extensions.gameplay_drift_display.onDriftScoreWrappedUp `ge` |1 | 304 |  |
| extensions.gameplay_drift_display.onDriftSpinout `ge` |0 | 79 |  |
| extensions.gameplay_drift_display.onDriftSpotCompleted `ge` |1 | 254 |  |
| extensions.gameplay_drift_display.onDriftSpotFailed `ge` |1 | 295 |  |
| extensions.gameplay_drift_display.onFreeroamDriftZoneNewHighscore `ge` |0 | 291 |  |
| extensions.gameplay_drift_display.onHitPoleScored `ge` |1 | 108 |  |
| extensions.gameplay_drift_display.onNearPoleScored `ge` |1 | 98 |  |
| extensions.gameplay_drift_display.onNewDriftTierReached `ge` |1 | 308 |  |
| extensions.gameplay_drift_display.onTightDriftScored `ge` |1 | 103 |  |
| extensions.gameplay_drift_display.onUpdate `ge` |3 | 237 |  |
| extensions.gameplay_drift_drift.onAnyStuntZoneAccomplished `ge` |0 | 905 |  |
| extensions.gameplay_drift_drift.onDriftContextChanged `ge` |2 | 909 |  |
| extensions.gameplay_drift_drift.onDriftPlVehReset `ge` |0 | 940 |  |
| extensions.gameplay_drift_drift.onUpdate `ge` |3 | 743 |  |
| extensions.gameplay_drift_drift.onVehicleCrashStarted `ge` |1 | 930 |  |
| extensions.gameplay_drift_drift.onVehicleSwitched `ge` |2 | 890 |  |
| extensions.gameplay_drift_freeroam_cruising.onUpdate `ge` |3 | 52 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onDriftCompletedScored `ge` |0 | 441 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onGetRawPoiListForLevel `ge` |2 | 404 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onUpdate `ge` |3 | 349 |  |
| extensions.gameplay_drift_freeroam_driftSpots.onVehicleResetted `ge` |1 | 390 |  |
| extensions.gameplay_drift_general.onAnyMissionChanged `ge` |2 | 212 |  |
| extensions.gameplay_drift_general.onUpdate `ge` |0 | 368 |  |
| extensions.gameplay_drift_general.onVehicleResetted `ge` |1 | 225 |  |
| extensions.gameplay_drift_quickMessages.onDriftActiveDataFinished `ge` |0 | 370 |  |
| extensions.gameplay_drift_quickMessages.onDriftCompleted `ge` |0 | 380 |  |
| extensions.gameplay_drift_quickMessages.onDriftCrash `ge` |0 | 402 |  |
| extensions.gameplay_drift_quickMessages.onDriftPlVehReset `ge` |0 | 375 |  |
| extensions.gameplay_drift_quickMessages.onDriftSpinout `ge` |0 | 406 |  |
| extensions.gameplay_drift_quickMessages.onUpdate `ge` |1 | 334 |  |
| extensions.gameplay_drift_saveLoad.onCareerActive `ge` |0 | 13 |  |
| extensions.gameplay_drift_saveLoad.onSaveCurrentSaveSlot `ge` |1 | 23 |  |
| extensions.gameplay_drift_scoring.onAnyStuntZoneAccomplished `ge` |0 | 480 |  |
| extensions.gameplay_drift_scoring.onDriftChainStarted `ge` |0 | 636 |  |
| extensions.gameplay_drift_scoring.onDriftCompleted `ge` |0 | 537 |  |
| extensions.gameplay_drift_scoring.onDriftCrash `ge` |0 | 585 |  |
| extensions.gameplay_drift_scoring.onDriftPlVehReset `ge` |0 | 625 |  |
| extensions.gameplay_drift_scoring.onDriftSpinout `ge` |0 | 589 |  |
| extensions.gameplay_drift_scoring.onDriftTransition `ge` |0 | 571 |  |
| extensions.gameplay_drift_scoring.onUpdate `ge` |2 | 432 |  |
| extensions.gameplay_drift_statistics.onDriftCompleted `ge` |1 | 15 |  |
| extensions.gameplay_drift_statistics.onDriftCompletedScored `ge` |1 | 26 |  |
| extensions.gameplay_drift_statistics.onDriftCrash `ge` |0 | 35 |  |
| extensions.gameplay_drift_statistics.onDriftSpinout `ge` |0 | 31 |  |
| extensions.gameplay_forceField.onCareerActive `ge` |1 | 85 |  |
| extensions.gameplay_forceField.onUpdate `ge` |3 | 45 |  |
| extensions.gameplay_forceField.onVehicleSwitched `ge` |0 | 70 |  |
| extensions.gameplay_garageMode.onClientPreStartMission `ge` |1 | 394 |  |
| extensions.gameplay_garageMode.onClientStartMission `ge` |1 | 387 |  |
| extensions.gameplay_garageMode.onEnterVehicleFinished `ge` |1 | 68 |  |
| extensions.gameplay_garageMode.onSpawnCCallback `ge` |1 | 120 |  |
| extensions.gameplay_garageMode.onVehicleSaveFinished `ge` |0 | 313 |  |
| extensions.gameplay_garageMode.onVehicleSpawned `ge` |1 | 113 |  |
| extensions.gameplay_markerInteraction.onAnyMissionChanged `ge` |1 | 570 |  |
| extensions.gameplay_markerInteraction.onNavigateToMission `ge` |1 | 578 |  |
| extensions.gameplay_markerInteraction.onPreRender `ge` |2 | 507 |  |
| extensions.gameplay_markerInteraction.onSettingsChanged `ge` |0 | 221 |  |
| extensions.gameplay_markerInteraction.showMissionMarkersToggled `ge` |1 | 564 |  |
| extensions.gameplay_missions_missionManager.onCareerActive `ge` |0 | 1152 |  |
| extensions.gameplay_missions_missionManager.onParkingVehiclesActivated `ge` |0 | 726 |  |
| extensions.gameplay_missions_missionManager.onScreenFadeState `ge` |1 | 737 |  |
| extensions.gameplay_missions_missionManager.onTrafficStarted `ge` |0 | 726 |  |
| extensions.gameplay_missions_missionManager.onUpdate `ge` |3 | 1074 |  |
| extensions.gameplay_missions_missionScreen.onBigMapActivated `ge` |0 | 755 |  |
| extensions.gameplay_missions_missionScreen.onMissionStartScreenReady `ge` |1 | 1138 |  |
| extensions.gameplay_missions_missions.onActivityAcceptGatherData `ge` |2 | 955 |  |
| extensions.gameplay_missions_missions.onGetRawPoiListForLevel `ge` |2 | 936 |  |
| extensions.gameplay_missions_missions.onModManagerReady `ge` |0 | 1090 |  |
| extensions.gameplay_missions_startTrigger.onAnyMissionChanged `ge` |0 | 198 |  |
| extensions.gameplay_parking.onClientStartMission `ge` |0 | 902 |  |
| extensions.gameplay_parking.onUpdate `ge` |2 | 732 |  |
| extensions.gameplay_parking.onVehicleActiveChanged `ge` |2 | 710 |  |
| extensions.gameplay_parking.onVehicleDestroyed `ge` |1 | 697 |  |
| extensions.gameplay_parking.onVehicleGroupSpawned `ge` |3 | 691 |  |
| extensions.gameplay_police.onTrafficAction `ge` |3 | 476 |  |
| extensions.gameplay_police.onTrafficStarted `ge` |0 | 504 |  |
| extensions.gameplay_police.onTrafficStopped `ge` |0 | 511 |  |
| extensions.gameplay_police.onTrafficVehicleAdded `ge` |1 | 492 |  |
| extensions.gameplay_police.onTrafficVehicleRemoved `ge` |1 | 498 |  |
| extensions.gameplay_police.onUpdate `ge` |2 | 574 |  |
| extensions.gameplay_police.onVehicleResetted `ge` |1 | 552 |  |
| extensions.gameplay_police.onVehicleSwitched `ge` |2 | 515 |  |
| extensions.gameplay_rawPois.onModManagerReady `ge` |0 | 102 |  |
| extensions.gameplay_rawPois.showMissionMarkersToggled `ge` |0 | 102 |  |
| extensions.gameplay_sites_sitesManager.onClientStartMission `ge` |0 | 58 |  |
| extensions.gameplay_sites_sitesManager.onModManagerReady `ge` |0 | 54 |  |
| extensions.gameplay_speedTrapLeaderboards.onBeforeCareerActivate `ge` |0 | 100 |  |
| extensions.gameplay_speedTrapLeaderboards.onClientPostStartMission `ge` |1 | 88 |  |
| extensions.gameplay_speedTraps.onBeamNGTrigger `ge` |1 | 45 |  |
| extensions.gameplay_statistic.onCareerActive `ge` |1 | 637 |  |
| extensions.gameplay_statistic.onClientPostStartMission `ge` |1 | 454 |  |
| extensions.gameplay_statistic.onClientStartMission `ge` |1 | 446 |  |
| extensions.gameplay_statistic.onEditorActivated `ge` |0 | 467 |  |
| extensions.gameplay_statistic.onEditorDeactivated `ge` |0 | 471 |  |
| extensions.gameplay_statistic.onExit `ge` |0 | 65 |  |
| extensions.gameplay_statistic.onGameStateUpdate `ge` |1 | 505 |  |
| extensions.gameplay_statistic.onInit `ge` |0 | 55 |  |
| extensions.gameplay_statistic.onSaveCurrentSaveSlot `ge` |1 | 627 |  |
| extensions.gameplay_statistic.onScenarioFinished `ge` |1 | 489 |  |
| extensions.gameplay_statistic.onScenarioLoaded `ge` |1 | 482 |  |
| extensions.gameplay_statistic.onScenarioRestarted `ge` |1 | 497 |  |
| extensions.gameplay_statistic.onUpdate `ge` |3 | 512 |  |
| extensions.gameplay_statistic.onVehicleDestroyed `ge` |1 | 603 |  |
| extensions.gameplay_statistic.onVehicleResetted `ge` |1 | 599 |  |
| extensions.gameplay_statistic.onVehicleSwitched `ge` |3 | 587 |  |
| extensions.gameplay_statistic.onWorldReadyState `ge` |1 | 463 |  |
| extensions.gameplay_statisticModules_watchJturn.onVehicleResetted `ge` |1 | 87 |  |
| extensions.gameplay_statisticModules_watchJturn.onVehicleSwitched `ge` |3 | 94 |  |
| extensions.gameplay_statisticModules_watchRollover.onVehicleResetted `ge` |1 | 62 |  |
| extensions.gameplay_statisticModules_watchRollover.onVehicleSwitched `ge` |3 | 69 |  |
| extensions.gameplay_traffic.onClientStartMission `ge` |0 | 1083 |  |
| extensions.gameplay_traffic.onPreRender `ge` |1 | 1021 |  |
| extensions.gameplay_traffic.onTrafficStarted `ge` |0 | 1044 |  |
| extensions.gameplay_traffic.onTrafficStopped `ge` |0 | 1076 |  |
| extensions.gameplay_traffic.onUpdate `ge` |2 | 962 |  |
| extensions.gameplay_traffic.onVehicleActiveChanged `ge` |2 | 584 |  |
| extensions.gameplay_traffic.onVehicleDestroyed `ge` |1 | 579 |  |
| extensions.gameplay_traffic.onVehicleGroupSpawned `ge` |3 | 945 |  |
| extensions.gameplay_traffic.onVehicleMapmgrUpdate `ge` |1 | 928 |  |
| extensions.gameplay_traffic.onVehicleResetted `ge` |1 | 572 |  |
| extensions.gameplay_traffic.onVehicleSpawned `ge` |1 | 559 |  |
| extensions.gameplay_traffic.onVehicleSwitched `ge` |2 | 568 |  |
| extensions.gameplay_traffic.trackAIAllVeh `ge` |1 | 923 |  |
| extensions.gameplay_util_crashDetection.onUpdate `ge` |2 | 599 |  |
| extensions.gameplay_util_crashDetection.onVehicleDestroyed `ge` |1 | 748 |  |
| extensions.gameplay_util_damageAssessment.onUpdate `ge` |0 | 422 |  |
| extensions.gameplay_walk.onClientStartMission `ge` |1 | 359 |  |
| extensions.gameplay_walk.onUpdate `ge` |2 | 233 |  |
| extensions.gameplay_walk.onVehicleSwitched `ge` |3 | 364 |  |
| extensions.multiplayer_multiplayer.onBigMapActivated `ge` |0 | 58 |  |
| extensions.multiplayer_multiplayer.onInit `ge` |0 | 161 |  |
| extensions.multiplayer_multiplayer.onServerLeave `ge` |0 | 108 |  |
| extensions.multiplayer_multiplayer.onUpdate `ge` |1 | 68 |  |
| extensions.multiplayer_multiplayer.onWorldReadyState `ge` |1 | 119 |  |
| extensions.multiplayer_multiplayer.runPostJoin `ge` |0 | 95 |  |
| extensions.nodesGE.applyNodes `ge` |2 | 74 |  |
| extensions.nodesGE.handle `ge` |1 | 97 |  |
| extensions.nodesGE.onInit `ge` |0 | 123 |  |
| extensions.nodesGE.sendBreakGroups `ge` |2 | 46 |  |
| extensions.nodesGE.sendControllerData `ge` |2 | 56 |  |
| extensions.nodesGE.sendNodes `ge` |2 | 32 |  |
| extensions.nodesGE.tick `ge` |0 | 16 |  |
| extensions.positionGE.applyPos `ge` |2 | 78 |  |
| extensions.positionGE.getActualSimSpeed `ge` |0 | 266 |  |
| extensions.positionGE.handle `ge` |1 | 185 |  |
| extensions.positionGE.onInit `ge` |0 | 308 |  |
| extensions.positionGE.onPreRender `ge` |1 | 271 |  |
| extensions.positionGE.onSettingsChanged `ge` |0 | 288 |  |
| extensions.positionGE.sendVehiclePosRot `ge` |2 | 55 |  |
| extensions.positionGE.setActualSimSpeed `ge` |1 | 260 |  |
| extensions.positionGE.setPing `ge` |1 | 208 |  |
| extensions.positionGE.setPosition `ge` |4 | 223 |  |
| extensions.positionGE.setPositionRotationVelocity `ge` |2 | 228 |  |
| extensions.positionGE.tick `ge` |0 | 41 |  |
| extensions.render_hdr.onFirstUpdate `ge` |0 | 9 |  |
| extensions.scenario_scenarios.onBeamNGTrigger `ge` |1 | 2162 |  |
| extensions.scenario_scenarios.onCameraModeChanged `ge` |1 | 1323 |  |
| extensions.scenario_scenarios.onClientStartMission `ge` |1 | 945 |  |
| extensions.scenario_scenarios.onDrawDebug `ge` |1 | 1112 |  |
| extensions.scenario_scenarios.onPhysicsPaused `ge` |0 | 2046 |  |
| extensions.scenario_scenarios.onPhysicsUnpaused `ge` |0 | 2036 |  |
| extensions.scenario_scenarios.onPreRender `ge` |2 | 1998 |  |
| extensions.scenario_scenarios.onResetGameplay `ge` |1 | 2030 |  |
| extensions.scenario_scenarios.onScenarioUIReady `ge` |1 | 1279 |  |
| extensions.scenario_scenarios.onVehicleStoppedMoving `ge` |1 | 2019 |  |
| extensions.scenario_scenariosLoader.onFileChanged `ge` |2 | 479 |  |
| extensions.telemetry_core.onExit `ge` |0 | 230 |  |
| extensions.telemetry_core.onSettingsChanged `ge` |0 | 218 |  |
| extensions.trackbuilder_trackBuilder.onUpdate `ge` |0 | 2903 |  |
| extensions.trackbuilder_trackBuilder.onWindowResized `ge` |1 | 3352 |  |
| extensions.ui_appSelector_general.closedFromUI `ge` |0 | 520 |  |
| extensions.ui_appSelector_general.executeButton `ge` |2 | 481 |  |
| extensions.ui_appSelector_general.executeDoubleClick `ge` |1 | 506 |  |
| extensions.ui_appSelector_general.exploreFolder `ge` |1 | 496 |  |
| extensions.ui_appSelector_general.getDetails `ge` |1 | 404 |  |
| extensions.ui_appSelector_general.getDisplayDataOptions `ge` |0 | 344 |  |
| extensions.ui_appSelector_general.getFilters `ge` |0 | 319 |  |
| extensions.ui_appSelector_general.getManagementDetails `ge` |0 | 487 |  |
| extensions.ui_appSelector_general.getScreenHeaderTitleAndPath `ge` |1 | 366 |  |
| extensions.ui_appSelector_general.getSearchText `ge` |0 | 356 |  |
| extensions.ui_appSelector_general.getTiles `ge` |1 | 235 |  |
| extensions.ui_appSelector_general.goToMod `ge` |1 | 501 |  |
| extensions.ui_appSelector_general.onModActivated `ge` |0 | 191 |  |
| extensions.ui_appSelector_general.onModDeactivated `ge` |0 | 190 |  |
| extensions.ui_appSelector_general.onModManagerReady `ge` |0 | 192 |  |
| extensions.ui_appSelector_general.profilerFinish `ge` |0 | 519 |  |
| extensions.ui_appSelector_general.resetDisplayDataToDefaults `ge` |0 | 352 |  |
| extensions.ui_appSelector_general.resetRangeFilter `ge` |1 | 334 |  |
| extensions.ui_appSelector_general.resetSetFilter `ge` |1 | 339 |  |
| extensions.ui_appSelector_general.setDisplayDataOption `ge` |2 | 348 |  |
| extensions.ui_appSelector_general.setSearchText `ge` |1 | 361 |  |
| extensions.ui_appSelector_general.toggleFavourite `ge` |1 | 491 |  |
| extensions.ui_appSelector_general.toggleFilter `ge` |2 | 324 |  |
| extensions.ui_appSelector_general.updateRangeFilter `ge` |3 | 329 |  |
| extensions.ui_apps.onFilesChanged `ge` |1 | 226 |  |
| extensions.ui_apps_genericMissionData.onInit `ge` |0 | 6 |  |
| extensions.ui_apps_minimap_additionalInfo.onReachedTargetPos `ge` |0 | 33 |  |
| extensions.ui_apps_minimap_additionalInfo.onSetBigmapNavFocus `ge` |1 | 96 |  |
| extensions.ui_apps_minimap_additionalInfo.onUpdate `ge` |0 | 80 |  |
| extensions.ui_apps_minimap_minimap.onClientStartMission `ge` |0 | 695 |  |
| extensions.ui_apps_minimap_minimap.onInit `ge` |0 | 11 |  |
| extensions.ui_apps_minimap_minimap.onMinimapSettingsChanged `ge` |1 | 614 |  |
| extensions.ui_apps_minimap_minimap.onUpdate `ge` |2 | 376 |  |
| extensions.ui_apps_minimap_topomap.onClientStartMission `ge` |0 | 425 |  |
| extensions.ui_apps_pointsBar.onInit `ge` |0 | 6 |  |
| extensions.ui_audio.onFirstUpdate `ge` |0 | 7 |  |
| extensions.ui_bindingsLegend.onActionFilterUpdated `ge` |0 | 658 |  |
| extensions.ui_bindingsLegend.onClientStartMission `ge` |0 | 650 |  |
| extensions.ui_bindingsLegend.onUpdate `ge` |3 | 607 |  |
| extensions.ui_bindingsLegend.onVehicleSwitched `ge` |3 | 668 |  |
| extensions.ui_console.onFileChanged `ge` |2 | 1239 |  |
| extensions.ui_console.onUpdate `ge` |3 | 556 |  |
| extensions.ui_console.onVehicleActiveChanged `ge` |0 | 1178 |  |
| extensions.ui_console.onVehicleDestroyed `ge` |0 | 1178 |  |
| extensions.ui_console.onVehicleSpawned `ge` |0 | 1178 |  |
| extensions.ui_console.onVehicleSwitched `ge` |0 | 1178 |  |
| extensions.ui_fadeScreen.onGuiUpdate `ge` |0 | 69 |  |
| extensions.ui_flowgraph_editor.AcceptCopy `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AcceptCreateNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AcceptCut `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AcceptDeletedItem `ge` |1 | 199 |  |
| extensions.ui_flowgraph_editor.AcceptDuplicate `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AcceptNewItem1 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AcceptNewItem2 `ge` |2 | 186 |  |
| extensions.ui_flowgraph_editor.AcceptPaste `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.AreShortcutsEnabled `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Begin `ge` |3 | 123 |  |
| extensions.ui_flowgraph_editor.BeginCreate `ge` |2 | 170 |  |
| extensions.ui_flowgraph_editor.BeginDelete `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.BeginGroupHint `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.BeginNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.BeginPin `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.BeginShortcut `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.CanvasToScreen `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.CenterNodeOnScreen `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ClearDirty `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ClearSelection `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.CreateEditor `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DeleteLink `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DeleteNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DeselectLink `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DeselectNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DestroyEditor `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.DrawIcon `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EnableShortcuts `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.End `ge` |0 | 135 |  |
| extensions.ui_flowgraph_editor.EndCreate `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EndDelete `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EndGroupHint `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EndNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EndPin `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.EndShortcut `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.FindLinkAt `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Flow `ge` |2 | 166 |  |
| extensions.ui_flowgraph_editor.GetActionContextLinkIds `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetActionContextLinks `ge` |2 | 279 |  |
| extensions.ui_flowgraph_editor.GetActionContextNodeIds `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetActionContextNodes `ge` |2 | 271 |  |
| extensions.ui_flowgraph_editor.GetActionContextSize `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetCurrentEditor `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetCurrentZoom `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetDirtyReason `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetDoubleClickedLink `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetDoubleClickedNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetDoubleClickedPin `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetGroupMax `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetGroupMin `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetHintBackgroundDrawList `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetHintForegroundDrawList `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetHotObjectId `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetNodeBackgroundDrawList `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetNodePosition `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetNodeSize `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetScreenSize `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetSelectedLinkIds `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetSelectedLinks `ge` |2 | 224 |  |
| extensions.ui_flowgraph_editor.GetSelectedNodeIds `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetSelectedNodes `ge` |2 | 216 |  |
| extensions.ui_flowgraph_editor.GetSelectedObjectCount `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetStyle `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetStyleColorName `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.GetVisibleCanvasBounds `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Group `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.HasSelectionChanged `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Icon `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.IsActive `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.IsBackgroundClicked `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.IsBackgroundDoubleClicked `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.IsSuspended `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Link `ge` |7 | 160 |  |
| extensions.ui_flowgraph_editor.LinkIdPtr `ge` |0 | 17 |  |
| extensions.ui_flowgraph_editor.NavigateToContent `ge` |1 | 249 |  |
| extensions.ui_flowgraph_editor.NavigateToSelection `ge` |2 | 253 |  |
| extensions.ui_flowgraph_editor.NodeIdPtr `ge` |0 | 13 |  |
| extensions.ui_flowgraph_editor.PinHadAnyLinks `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PinIdPtr `ge` |0 | 21 |  |
| extensions.ui_flowgraph_editor.PinPivotAlignment `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PinPivotRect `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PinPivotScale `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PinPivotSize `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PinRect `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PopStyleColor `ge` |1 | 112 |  |
| extensions.ui_flowgraph_editor.PopStyleVar `ge` |1 | 119 |  |
| extensions.ui_flowgraph_editor.PtrToId `ge` |1 | 9 |  |
| extensions.ui_flowgraph_editor.PushStyleColor `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PushStyleVar1 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PushStyleVar2 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.PushStyleVar4 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.QueryDeletedLink `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.QueryDeletedNode `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.QueryNewLink1 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.QueryNewLink2 `ge` |4 | 176 |  |
| extensions.ui_flowgraph_editor.QueryNewNode1 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.QueryNewNode2 `ge` |3 | 181 |  |
| extensions.ui_flowgraph_editor.RejectDeletedItem `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.RejectNewItem1 `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.RejectNewItem2 `ge` |2 | 191 |  |
| extensions.ui_flowgraph_editor.RestoreNodeState `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Resume `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ScreenToCanvas `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.SelectLink `ge` |2 | 240 |  |
| extensions.ui_flowgraph_editor.SelectNode `ge` |2 | 235 |  |
| extensions.ui_flowgraph_editor.SetCurrentEditor `ge` |1 | 100 |  |
| extensions.ui_flowgraph_editor.SetGroupingDisabled `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.SetNodePosition `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ShowBackgroundContextMenu `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ShowLinkContextMenu `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ShowNodeContextMenu `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.ShowPinContextMenu `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.Suspend `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.fullDisplay `ge` |2 | 273 |  |
| extensions.ui_flowgraph_editor.fullValueString `ge` |2 | 238 |  |
| extensions.ui_flowgraph_editor.getAutoTypeFromName `ge` |1 | 875 |  |
| extensions.ui_flowgraph_editor.getBehaviourDescription `ge` |1 | 871 |  |
| extensions.ui_flowgraph_editor.getBehaviourIcon `ge` |1 | 867 |  |
| extensions.ui_flowgraph_editor.getDebugEnabled `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.getGraphTypes `ge` |0 | 186 |  |
| extensions.ui_flowgraph_editor.getSimpleTypes `ge` |0 | 160 |  |
| extensions.ui_flowgraph_editor.getTypeColor `ge` |1 | 178 |  |
| extensions.ui_flowgraph_editor.getTypeIcon `ge` |1 | 182 |  |
| extensions.ui_flowgraph_editor.getTypes `ge` |0 | 164 |  |
| extensions.ui_flowgraph_editor.getViewState `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.isDurationNode `ge` |1 | 833 |  |
| extensions.ui_flowgraph_editor.isDynamicNode `ge` |1 | 854 |  |
| extensions.ui_flowgraph_editor.isF_DurationNode `ge` |1 | 842 |  |
| extensions.ui_flowgraph_editor.isFunctionalNode `ge` |1 | 814 |  |
| extensions.ui_flowgraph_editor.isOnceNode `ge` |1 | 848 |  |
| extensions.ui_flowgraph_editor.isSimpleNode `ge` |1 | 828 |  |
| extensions.ui_flowgraph_editor.setDebugEnabled `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.setViewState `ge` |0+ | [C] |  |
| extensions.ui_flowgraph_editor.shortDisplay `ge` |2 | 225 |  |
| extensions.ui_flowgraph_editor.shortValueString `ge` |2 | 190 |  |
| extensions.ui_flowgraph_editor.tooltip `ge` |1 | 168 |  |
| extensions.ui_flowgraph_editor.variableEditor `ge` |3 | 286 |  |
| extensions.ui_flowgraph_editor.vehicleSelector `ge` |2 | 567 |  |
| extensions.ui_flowgraph_editor.vehicleSelectorRefresh `ge` |2 | 522 |  |
| extensions.ui_freeroamSelector_general.clearAllFilters `ge` |0 | 404 |  |
| extensions.ui_freeroamSelector_general.closedFromUI `ge` |0 | 550 |  |
| extensions.ui_freeroamSelector_general.executeButton `ge` |2 | 578 |  |
| extensions.ui_freeroamSelector_general.executeDoubleClick `ge` |1 | 590 |  |
| extensions.ui_freeroamSelector_general.exitCallback `ge` |0 | 587 |  |
| extensions.ui_freeroamSelector_general.exploreFolder `ge` |1 | 603 |  |
| extensions.ui_freeroamSelector_general.getActiveFilters `ge` |0 | 439 |  |
| extensions.ui_freeroamSelector_general.getCustomDetailsButtons `ge` |0 | 574 |  |
| extensions.ui_freeroamSelector_general.getDetails `ge` |1 | 559 |  |
| extensions.ui_freeroamSelector_general.getDisplayData `ge` |0 | 389 |  |
| extensions.ui_freeroamSelector_general.getDisplayDataOptions `ge` |0 | 468 |  |
| extensions.ui_freeroamSelector_general.getFilters `ge` |0 | 434 |  |
| extensions.ui_freeroamSelector_general.getManagementDetails `ge` |0 | 582 |  |
| extensions.ui_freeroamSelector_general.getScreenHeaderTitleAndPath `ge` |1 | 482 |  |
| extensions.ui_freeroamSelector_general.getSearchText `ge` |0 | 459 |  |
| extensions.ui_freeroamSelector_general.getTiles `ge` |1 | 363 |  |
| extensions.ui_freeroamSelector_general.getUiData `ge` |0 | 292 |  |
| extensions.ui_freeroamSelector_general.goToMod `ge` |1 | 608 |  |
| extensions.ui_freeroamSelector_general.isFavourite `ge` |1 | 410 |  |
| extensions.ui_freeroamSelector_general.isRecent `ge` |1 | 422 |  |
| extensions.ui_freeroamSelector_general.onModActivated `ge` |0 | 357 |  |
| extensions.ui_freeroamSelector_general.onModDeactivated `ge` |0 | 356 |  |
| extensions.ui_freeroamSelector_general.onModManagerReady `ge` |0 | 358 |  |
| extensions.ui_freeroamSelector_general.onModManagerStateChanged `ge` |0 | 359 |  |
| extensions.ui_freeroamSelector_general.onSettingsChanged `ge` |0 | 360 |  |
| extensions.ui_freeroamSelector_general.openFreeroamSelector `ge` |0 | 614 |  |
| extensions.ui_freeroamSelector_general.openFreeroamSelectorForFreeroamConfigurator `ge` |1 | 629 |  |
| extensions.ui_freeroamSelector_general.passesFilters `ge` |1 | 373 |  |
| extensions.ui_freeroamSelector_general.profilerFinish `ge` |0 | 546 |  |
| extensions.ui_freeroamSelector_general.resetDisplayDataToDefaults `ge` |0 | 476 |  |
| extensions.ui_freeroamSelector_general.resetRangeFilter `ge` |1 | 451 |  |
| extensions.ui_freeroamSelector_general.resetSetFilter `ge` |1 | 455 |  |
| extensions.ui_freeroamSelector_general.setCustomDetailsButtons `ge` |1 | 570 |  |
| extensions.ui_freeroamSelector_general.setDisplayDataOption `ge` |2 | 472 |  |
| extensions.ui_freeroamSelector_general.setSearchText `ge` |1 | 463 |  |
| extensions.ui_freeroamSelector_general.toggleFavourite `ge` |1 | 415 |  |
| extensions.ui_freeroamSelector_general.toggleFilter `ge` |2 | 443 |  |
| extensions.ui_freeroamSelector_general.trackRecent `ge` |1 | 427 |  |
| extensions.ui_freeroamSelector_general.updateDisplayData `ge` |2 | 394 |  |
| extensions.ui_freeroamSelector_general.updateFilterData `ge` |2 | 399 |  |
| extensions.ui_freeroamSelector_general.updateRangeFilter `ge` |3 | 447 |  |
| extensions.ui_gameplayAppContainers.onGameplayFlashMessage `ge` |1 | 293 |  |
| extensions.ui_gameplayAppContainers.onUpdate `ge` |3 | 325 |  |
| extensions.ui_gameplaySelector_general.clearAllFilters `ge` |0 | 422 |  |
| extensions.ui_gameplaySelector_general.closedFromUI `ge` |0 | 570 |  |
| extensions.ui_gameplaySelector_general.executeButton `ge` |2 | 586 |  |
| extensions.ui_gameplaySelector_general.executeDoubleClick `ge` |1 | 599 |  |
| extensions.ui_gameplaySelector_general.exitCallback `ge` |0 | 595 |  |
| extensions.ui_gameplaySelector_general.exploreFolder `ge` |1 | 611 |  |
| extensions.ui_gameplaySelector_general.getActiveFilters `ge` |0 | 457 |  |
| extensions.ui_gameplaySelector_general.getDetails `ge` |1 | 576 |  |
| extensions.ui_gameplaySelector_general.getDisplayData `ge` |0 | 407 |  |
| extensions.ui_gameplaySelector_general.getDisplayDataOptions `ge` |0 | 486 |  |
| extensions.ui_gameplaySelector_general.getFilters `ge` |0 | 452 |  |
| extensions.ui_gameplaySelector_general.getManagementDetails `ge` |0 | 590 |  |
| extensions.ui_gameplaySelector_general.getScreenHeaderTitleAndPath `ge` |1 | 499 |  |
| extensions.ui_gameplaySelector_general.getSearchText `ge` |0 | 477 |  |
| extensions.ui_gameplaySelector_general.getTiles `ge` |1 | 385 |  |
| extensions.ui_gameplaySelector_general.getUiData `ge` |0 | 319 |  |
| extensions.ui_gameplaySelector_general.goToMod `ge` |1 | 616 |  |
| extensions.ui_gameplaySelector_general.isFavourite `ge` |1 | 428 |  |
| extensions.ui_gameplaySelector_general.isRecent `ge` |1 | 440 |  |
| extensions.ui_gameplaySelector_general.onModActivated `ge` |0 | 379 |  |
| extensions.ui_gameplaySelector_general.onModDeactivated `ge` |0 | 378 |  |
| extensions.ui_gameplaySelector_general.onModManagerReady `ge` |0 | 380 |  |
| extensions.ui_gameplaySelector_general.onModManagerStateChanged `ge` |0 | 381 |  |
| extensions.ui_gameplaySelector_general.onSettingsChanged `ge` |0 | 382 |  |
| extensions.ui_gameplaySelector_general.openCampaignsSelector `ge` |0 | 649 |  |
| extensions.ui_gameplaySelector_general.openChallengesSelector `ge` |0 | 629 |  |
| extensions.ui_gameplaySelector_general.openGameplaySelector `ge` |0 | 621 |  |
| extensions.ui_gameplaySelector_general.openRallySelector `ge` |0 | 659 |  |
| extensions.ui_gameplaySelector_general.openScenariosSelector `ge` |0 | 639 |  |
| extensions.ui_gameplaySelector_general.passesFilters `ge` |1 | 391 |  |
| extensions.ui_gameplaySelector_general.profilerFinish `ge` |0 | 566 |  |
| extensions.ui_gameplaySelector_general.resetDisplayDataToDefaults `ge` |0 | 494 |  |
| extensions.ui_gameplaySelector_general.resetRangeFilter `ge` |1 | 469 |  |
| extensions.ui_gameplaySelector_general.resetSetFilter `ge` |1 | 473 |  |
| extensions.ui_gameplaySelector_general.setDisplayDataOption `ge` |2 | 490 |  |
| extensions.ui_gameplaySelector_general.setSearchText `ge` |1 | 481 |  |
| extensions.ui_gameplaySelector_general.toggleFavourite `ge` |1 | 433 |  |
| extensions.ui_gameplaySelector_general.toggleFilter `ge` |2 | 461 |  |
| extensions.ui_gameplaySelector_general.trackRecent `ge` |1 | 445 |  |
| extensions.ui_gameplaySelector_general.updateDisplayData `ge` |2 | 412 |  |
| extensions.ui_gameplaySelector_general.updateFilterData `ge` |2 | 417 |  |
| extensions.ui_gameplaySelector_general.updateRangeFilter `ge` |3 | 465 |  |
| extensions.ui_gameplaySelector_tileGenerators_campaignTiles.onGameplaySelectorGetDetails `ge` |4 | 123 |  |
| extensions.ui_gameplaySelector_tileGenerators_campaignTiles.onGameplaySelectorGetTiles `ge` |2 | 8 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.onGameplaySelectorGetDetails `ge` |4 | 141 |  |
| extensions.ui_gameplaySelector_tileGenerators_levelTiles.onGameplaySelectorGetTiles `ge` |1 | 8 |  |
| extensions.ui_gameplaySelector_tileGenerators_missionTiles.onGameplaySelectorGetDetails `ge` |4 | 182 |  |
| extensions.ui_gameplaySelector_tileGenerators_missionTiles.onGameplaySelectorGetTiles `ge` |2 | 8 |  |
| extensions.ui_gameplaySelector_tileGenerators_scenarioTiles.onGameplaySelectorGetDetails `ge` |4 | 144 |  |
| extensions.ui_gameplaySelector_tileGenerators_scenarioTiles.onGameplaySelectorGetTiles `ge` |2 | 8 |  |
| extensions.ui_gameplaySelector_tiles.getTiles `ge` |2 | 372 |  |
| extensions.ui_gameplaySelector_tiles.getUiData `ge` |0 | 407 |  |
| extensions.ui_imgui.AcceptDragDropPayload `ge` |2 | 1044 |  |
| extensions.ui_imgui.AlignTextToFramePadding `ge` |0 | 255 |  |
| extensions.ui_imgui.ArrayChar `ge` |2 | 72 |  |
| extensions.ui_imgui.ArrayCharPtrByTbl `ge` |1 | 221 |  |
| extensions.ui_imgui.ArrayFloat `ge` |1 | 90 |  |
| extensions.ui_imgui.ArrayFloatByTbl `ge` |1 | 214 |  |
| extensions.ui_imgui.ArrayInt `ge` |1 | 83 |  |
| extensions.ui_imgui.ArraySize `ge` |1 | 211 |  |
| extensions.ui_imgui.ArrowButton `ge` |2 | 342 |  |
| extensions.ui_imgui.Begin `ge` |3 | 121 |  |
| extensions.ui_imgui.BeginChild1 `ge` |4 | 74 |  |
| extensions.ui_imgui.BeginChild2 `ge` |4 | 81 |  |
| extensions.ui_imgui.BeginChildFrame `ge` |3 | 1109 |  |
| extensions.ui_imgui.BeginCombo `ge` |3 | 391 |  |
| extensions.ui_imgui.BeginDisabled `ge` |1 | 257 |  |
| extensions.ui_imgui.BeginDragDropSource `ge` |1 | 1038 |  |
| extensions.ui_imgui.BeginDragDropTarget `ge` |0 | 1043 |  |
| extensions.ui_imgui.BeginGroup `ge` |0 | 244 |  |
| extensions.ui_imgui.BeginItemTooltip `ge` |0 | 867 |  |
| extensions.ui_imgui.BeginListBox `ge` |2 | 776 |  |
| extensions.ui_imgui.BeginMainMenuBar `ge` |0 | 838 |  |
| extensions.ui_imgui.BeginMenu `ge` |2 | 840 |  |
| extensions.ui_imgui.BeginMenuBar `ge` |0 | 836 |  |
| extensions.ui_imgui.BeginPopup `ge` |2 | 873 |  |
| extensions.ui_imgui.BeginPopupContextItem `ge` |2 | 900 |  |
| extensions.ui_imgui.BeginPopupContextVoid `ge` |2 | 910 |  |
| extensions.ui_imgui.BeginPopupContextWindow `ge` |2 | 905 |  |
| extensions.ui_imgui.BeginPopupModal `ge` |3 | 878 |  |
| extensions.ui_imgui.BeginTabBar `ge` |2 | 984 |  |
| extensions.ui_imgui.BeginTabItem `ge` |3 | 990 |  |
| extensions.ui_imgui.BeginTable `ge` |5 | 920 |  |
| extensions.ui_imgui.BeginTooltip `ge` |0 | 860 |  |
| extensions.ui_imgui.Bool `ge` |1 | 38 |  |
| extensions.ui_imgui.BoolFalse `ge` |0 | 99 |  |
| extensions.ui_imgui.BoolPtr `ge` |1 | 39 |  |
| extensions.ui_imgui.BoolTrue `ge` |0 | 98 |  |
| extensions.ui_imgui.Bullet `ge` |0 | 375 |  |
| extensions.ui_imgui.BulletText `ge` |1+ | 319 |  |
| extensions.ui_imgui.Button `ge` |2 | 328 |  |
| extensions.ui_imgui.CalcItemWidth `ge` |0 | 211 |  |
| extensions.ui_imgui.CalcTextSize `ge` |4 | 1114 |  |
| extensions.ui_imgui.Checkbox `ge` |2 | 346 |  |
| extensions.ui_imgui.CheckboxFlags1 `ge` |3 | 351 |  |
| extensions.ui_imgui.CheckboxFlags2 `ge` |3 | 356 |  |
| extensions.ui_imgui.ClearActiveID `ge` |0 | 295 |  |
| extensions.ui_imgui.CloseCurrentPopup `ge` |0 | 899 |  |
| extensions.ui_imgui.CollapsingHeader1 `ge` |2 | 747 |  |
| extensions.ui_imgui.CollapsingHeader2 `ge` |3 | 752 |  |
| extensions.ui_imgui.ColorButton `ge` |4 | 697 |  |
| extensions.ui_imgui.ColorConvertFloat4ToU32 `ge` |1 | 1122 |  |
| extensions.ui_imgui.ColorConvertHSVtoRGB `ge` |6 | 1124 |  |
| extensions.ui_imgui.ColorConvertRGBtoHSV `ge` |6 | 1123 |  |
| extensions.ui_imgui.ColorConvertU32ToFloat4 `ge` |1 | 1121 |  |
| extensions.ui_imgui.ColorEdit3 `ge` |3 | 676 |  |
| extensions.ui_imgui.ColorEdit4 `ge` |3 | 681 |  |
| extensions.ui_imgui.ColorPicker3 `ge` |3 | 686 |  |
| extensions.ui_imgui.ColorPicker4 `ge` |4 | 691 |  |
| extensions.ui_imgui.Columns `ge` |3 | 965 |  |
| extensions.ui_imgui.Combo1 `ge` |5 | 144 |  |
| extensions.ui_imgui.Combo2 `ge` |4 | 405 |  |
| extensions.ui_imgui.Combo3 `ge` |6 | 412 |  |
| extensions.ui_imgui.DebugCheckVersionAndDataLayout `ge` |7 | 1178 |  |
| extensions.ui_imgui.DebugTextEncoding `ge` |1 | 1174 |  |
| extensions.ui_imgui.DestroyPlatformWindows `ge` |0 | 1189 |  |
| extensions.ui_imgui.DockSpace `ge` |4 | 1006 |  |
| extensions.ui_imgui.DockSpaceOverViewport `ge` |3 | 1012 |  |
| extensions.ui_imgui.Double `ge` |1 | 64 |  |
| extensions.ui_imgui.DoublePtr `ge` |1 | 65 |  |
| extensions.ui_imgui.DragFloat `ge` |7 | 420 |  |
| extensions.ui_imgui.DragFloat2 `ge` |7 | 430 |  |
| extensions.ui_imgui.DragFloat3 `ge` |7 | 439 |  |
| extensions.ui_imgui.DragFloat4 `ge` |7 | 448 |  |
| extensions.ui_imgui.DragFloatRange2 `ge` |9 | 457 |  |
| extensions.ui_imgui.DragInt `ge` |7 | 469 |  |
| extensions.ui_imgui.DragInt2 `ge` |7 | 479 |  |
| extensions.ui_imgui.DragInt3 `ge` |7 | 488 |  |
| extensions.ui_imgui.DragInt4 `ge` |7 | 497 |  |
| extensions.ui_imgui.DragIntRange2 `ge` |9 | 506 |  |
| extensions.ui_imgui.Dummy `ge` |1 | 235 |  |
| extensions.ui_imgui.End `ge` |0 | 73 |  |
| extensions.ui_imgui.EndChild `ge` |0 | 87 |  |
| extensions.ui_imgui.EndChildFrame `ge` |0 | 1113 |  |
| extensions.ui_imgui.EndCombo `ge` |0 | 397 |  |
| extensions.ui_imgui.EndDisabled `ge` |0 | 262 |  |
| extensions.ui_imgui.EndDragDropSource `ge` |0 | 1042 |  |
| extensions.ui_imgui.EndDragDropTarget `ge` |0 | 1049 |  |
| extensions.ui_imgui.EndFrame `ge` |0 | 19 |  |
| extensions.ui_imgui.EndGroup `ge` |0 | 245 |  |
| extensions.ui_imgui.EndListBox `ge` |0 | 781 |  |
| extensions.ui_imgui.EndMainMenuBar `ge` |0 | 839 |  |
| extensions.ui_imgui.EndMenu `ge` |0 | 845 |  |
| extensions.ui_imgui.EndMenuBar `ge` |0 | 837 |  |
| extensions.ui_imgui.EndPopup `ge` |0 | 884 |  |
| extensions.ui_imgui.EndTabBar `ge` |0 | 989 |  |
| extensions.ui_imgui.EndTabItem `ge` |0 | 996 |  |
| extensions.ui_imgui.EndTable `ge` |0 | 927 |  |
| extensions.ui_imgui.EndTooltip `ge` |0 | 861 |  |
| extensions.ui_imgui.FindViewportByID `ge` |1 | 1190 |  |
| extensions.ui_imgui.FindViewportByPlatformHandle `ge` |1 | 1191 |  |
| extensions.ui_imgui.Float `ge` |1 | 56 |  |
| extensions.ui_imgui.FloatPtr `ge` |1 | 57 |  |
| extensions.ui_imgui.GetBackgroundDrawList1 `ge` |0 | 1088 |  |
| extensions.ui_imgui.GetBackgroundDrawList2 `ge` |1 | 1090 |  |
| extensions.ui_imgui.GetClipboardText `ge` |0 | 1169 |  |
| extensions.ui_imgui.GetColorU321 `ge` |2 | 220 |  |
| extensions.ui_imgui.GetColorU322 `ge` |1 | 224 |  |
| extensions.ui_imgui.GetColorU323 `ge` |1 | 225 |  |
| extensions.ui_imgui.GetColumnIndex `ge` |0 | 972 |  |
| extensions.ui_imgui.GetColumnOffset `ge` |1 | 978 |  |
| extensions.ui_imgui.GetColumnWidth `ge` |1 | 973 |  |
| extensions.ui_imgui.GetColumnsCount `ge` |0 | 983 |  |
| extensions.ui_imgui.GetContentRegionAvail `ge` |0 | 161 |  |
| extensions.ui_imgui.GetContentRegionAvailWidth `ge` |0 | 304 |  |
| extensions.ui_imgui.GetContentRegionMax `ge` |0 | 162 |  |
| extensions.ui_imgui.GetCurrentContext `ge` |0 | 16 |  |
| extensions.ui_imgui.GetCursorPos `ge` |0 | 246 |  |
| extensions.ui_imgui.GetCursorPosX `ge` |0 | 247 |  |
| extensions.ui_imgui.GetCursorPosY `ge` |0 | 248 |  |
| extensions.ui_imgui.GetCursorScreenPos `ge` |0 | 253 |  |
| extensions.ui_imgui.GetCursorStartPos `ge` |0 | 252 |  |
| extensions.ui_imgui.GetDragDropPayload `ge` |0 | 1050 |  |
| extensions.ui_imgui.GetDrawListSharedData `ge` |0 | 1102 |  |
| extensions.ui_imgui.GetFont `ge` |0 | 217 |  |
| extensions.ui_imgui.GetFontSize `ge` |0 | 218 |  |
| extensions.ui_imgui.GetFontTexUvWhitePixel `ge` |0 | 219 |  |
| extensions.ui_imgui.GetForegroundDrawList1 `ge` |0 | 1089 |  |
| extensions.ui_imgui.GetForegroundDrawList2 `ge` |1 | 1094 |  |
| extensions.ui_imgui.GetFrameCount `ge` |0 | 1101 |  |
| extensions.ui_imgui.GetFrameHeight `ge` |0 | 258 |  |
| extensions.ui_imgui.GetFrameHeightWithSpacing `ge` |0 | 259 |  |
| extensions.ui_imgui.GetID1 `ge` |1 | 275 |  |
| extensions.ui_imgui.GetID2 `ge` |2 | 279 |  |
| extensions.ui_imgui.GetID3 `ge` |1 | 284 |  |
| extensions.ui_imgui.GetIO `ge` |0 | 162 |  |
| extensions.ui_imgui.GetImGuiIO_FontAllowUserScaling `ge` |0 | 193 |  |
| extensions.ui_imgui.GetItemID `ge` |0 | 1083 |  |
| extensions.ui_imgui.GetItemRectMax `ge` |0 | 1085 |  |
| extensions.ui_imgui.GetItemRectMin `ge` |0 | 1084 |  |
| extensions.ui_imgui.GetItemRectSize `ge` |0 | 1086 |  |
| extensions.ui_imgui.GetKeyIndex `ge` |1 | 182 |  |
| extensions.ui_imgui.GetKeyName `ge` |1 | 1132 |  |
| extensions.ui_imgui.GetKeyPressedAmount `ge` |3 | 1131 |  |
| extensions.ui_imgui.GetLengthArrayCharPtr `ge` |1 | 213 |  |
| extensions.ui_imgui.GetLengthArrayFloat `ge` |1 | 212 |  |
| extensions.ui_imgui.GetMainContext `ge` |0 | 234 |  |
| extensions.ui_imgui.GetMainViewport `ge` |0 | 1087 |  |
| extensions.ui_imgui.GetMouseClickedCount `ge` |1 | 1141 |  |
| extensions.ui_imgui.GetMouseCursor `ge` |0 | 1166 |  |
| extensions.ui_imgui.GetMouseDragDelta `ge` |2 | 1157 |  |
| extensions.ui_imgui.GetMousePos `ge` |0 | 1151 |  |
| extensions.ui_imgui.GetMousePosOnOpeningCurrentPopup `ge` |0 | 1152 |  |
| extensions.ui_imgui.GetPlatformIO `ge` |0 | 1182 |  |
| extensions.ui_imgui.GetScrollMaxX `ge` |0 | 169 |  |
| extensions.ui_imgui.GetScrollMaxY `ge` |0 | 170 |  |
| extensions.ui_imgui.GetScrollX `ge` |0 | 165 |  |
| extensions.ui_imgui.GetScrollY `ge` |0 | 166 |  |
| extensions.ui_imgui.GetStateStorage `ge` |0 | 1108 |  |
| extensions.ui_imgui.GetStyle `ge` |0 | 163 |  |
| extensions.ui_imgui.GetStyleColorName `ge` |1 | 1103 |  |
| extensions.ui_imgui.GetStyleColorVec4 `ge` |1 | 226 |  |
| extensions.ui_imgui.GetTextLineHeight `ge` |0 | 256 |  |
| extensions.ui_imgui.GetTextLineHeightWithSpacing `ge` |0 | 257 |  |
| extensions.ui_imgui.GetTime `ge` |0 | 1100 |  |
| extensions.ui_imgui.GetTreeNodeToLabelSpacing `ge` |0 | 746 |  |
| extensions.ui_imgui.GetVersion `ge` |0 | 54 |  |
| extensions.ui_imgui.GetWindowContentRegionMax `ge` |0 | 164 |  |
| extensions.ui_imgui.GetWindowContentRegionMin `ge` |0 | 163 |  |
| extensions.ui_imgui.GetWindowContentRegionWidth `ge` |0 | 380 |  |
| extensions.ui_imgui.GetWindowDockID `ge` |0 | 1026 |  |
| extensions.ui_imgui.GetWindowDpiScale `ge` |0 | 99 |  |
| extensions.ui_imgui.GetWindowDrawList `ge` |0 | 98 |  |
| extensions.ui_imgui.GetWindowHeight `ge` |0 | 103 |  |
| extensions.ui_imgui.GetWindowPos `ge` |0 | 100 |  |
| extensions.ui_imgui.GetWindowSize `ge` |0 | 101 |  |
| extensions.ui_imgui.GetWindowViewport `ge` |0 | 104 |  |
| extensions.ui_imgui.GetWindowWidth `ge` |0 | 102 |  |
| extensions.ui_imgui.HeaderText `ge` |2 | 368 |  |
| extensions.ui_imgui.HighlightSelectable `ge` |3 | 338 |  |
| extensions.ui_imgui.HighlightText `ge` |2 | 309 |  |
| extensions.ui_imgui.ImColor `ge` |0 | 1976 |  |
| extensions.ui_imgui.ImColorByRGB `ge` |4 | 114 |  |
| extensions.ui_imgui.ImColorPtr `ge` |0 | 1977 |  |
| extensions.ui_imgui.ImColor_HSV `ge` |5 | 1982 |  |
| extensions.ui_imgui.ImColor_SetHSV `ge` |5 | 1978 |  |
| extensions.ui_imgui.ImDrawList_AddBezierCubic `ge` |8 | 2082 |  |
| extensions.ui_imgui.ImDrawList_AddBezierQuadratic `ge` |7 | 2086 |  |
| extensions.ui_imgui.ImDrawList_AddCallback `ge` |3 | 2135 |  |
| extensions.ui_imgui.ImDrawList_AddCircle `ge` |6 | 2047 |  |
| extensions.ui_imgui.ImDrawList_AddCircleFilled `ge` |5 | 2052 |  |
| extensions.ui_imgui.ImDrawList_AddConvexPolyFilled `ge` |4 | 2078 |  |
| extensions.ui_imgui.ImDrawList_AddDrawCmd `ge` |1 | 2139 |  |
| extensions.ui_imgui.ImDrawList_AddImage `ge` |7 | 2090 |  |
| extensions.ui_imgui.ImDrawList_AddImageQuad `ge` |11 | 2096 |  |
| extensions.ui_imgui.ImDrawList_AddImageRounded `ge` |9 | 2104 |  |
| extensions.ui_imgui.ImDrawList_AddLine `ge` |5 | 2021 |  |
| extensions.ui_imgui.ImDrawList_AddNgon `ge` |6 | 2056 |  |
| extensions.ui_imgui.ImDrawList_AddNgonFilled `ge` |5 | 2060 |  |
| extensions.ui_imgui.ImDrawList_AddPolyline `ge` |6 | 2074 |  |
| extensions.ui_imgui.ImDrawList_AddQuad `ge` |7 | 2037 |  |
| extensions.ui_imgui.ImDrawList_AddQuadFilled `ge` |6 | 2041 |  |
| extensions.ui_imgui.ImDrawList_AddRect `ge` |7 | 2025 |  |
| extensions.ui_imgui.ImDrawList_AddRectFilled `ge` |6 | 2031 |  |
| extensions.ui_imgui.ImDrawList_AddRectFilledMultiColor `ge` |7 | 2036 |  |
| extensions.ui_imgui.ImDrawList_AddText1 `ge` |5 | 2061 |  |
| extensions.ui_imgui.ImDrawList_AddText2 `ge` |9 | 2066 |  |
| extensions.ui_imgui.ImDrawList_AddTriangle `ge` |6 | 2042 |  |
| extensions.ui_imgui.ImDrawList_AddTriangleFilled `ge` |5 | 2046 |  |
| extensions.ui_imgui.ImDrawList_ChannelsMerge `ge` |1 | 2142 |  |
| extensions.ui_imgui.ImDrawList_ChannelsSetCurrent `ge` |2 | 2143 |  |
| extensions.ui_imgui.ImDrawList_ChannelsSplit `ge` |2 | 2141 |  |
| extensions.ui_imgui.ImDrawList_CloneOutput `ge` |1 | 2140 |  |
| extensions.ui_imgui.ImDrawList_GetClipRectMax `ge` |1 | 2020 |  |
| extensions.ui_imgui.ImDrawList_GetClipRectMin `ge` |1 | 2019 |  |
| extensions.ui_imgui.ImDrawList_PathArcTo `ge` |6 | 2117 |  |
| extensions.ui_imgui.ImDrawList_PathArcToFast `ge` |5 | 2121 |  |
| extensions.ui_imgui.ImDrawList_PathBezierCubicCurveTo `ge` |5 | 2122 |  |
| extensions.ui_imgui.ImDrawList_PathBezierQuadraticCurveTo `ge` |4 | 2126 |  |
| extensions.ui_imgui.ImDrawList_PathClear `ge` |1 | 2108 |  |
| extensions.ui_imgui.ImDrawList_PathFillConvex `ge` |2 | 2111 |  |
| extensions.ui_imgui.ImDrawList_PathLineTo `ge` |2 | 2109 |  |
| extensions.ui_imgui.ImDrawList_PathLineToMergeDuplicate `ge` |2 | 2110 |  |
| extensions.ui_imgui.ImDrawList_PathRect `ge` |5 | 2130 |  |
| extensions.ui_imgui.ImDrawList_PathStroke `ge` |4 | 2112 |  |
| extensions.ui_imgui.ImDrawList_PopClipRect `ge` |1 | 2016 |  |
| extensions.ui_imgui.ImDrawList_PopTextureID `ge` |1 | 2018 |  |
| extensions.ui_imgui.ImDrawList_PrimQuadUV `ge` |10 | 2148 |  |
| extensions.ui_imgui.ImDrawList_PrimRect `ge` |4 | 2146 |  |
| extensions.ui_imgui.ImDrawList_PrimRectUV `ge` |6 | 2147 |  |
| extensions.ui_imgui.ImDrawList_PrimReserve `ge` |3 | 2144 |  |
| extensions.ui_imgui.ImDrawList_PrimUnreserve `ge` |3 | 2145 |  |
| extensions.ui_imgui.ImDrawList_PrimVtx `ge` |4 | 2151 |  |
| extensions.ui_imgui.ImDrawList_PrimWriteIdx `ge` |2 | 2150 |  |
| extensions.ui_imgui.ImDrawList_PrimWriteVtx `ge` |4 | 2149 |  |
| extensions.ui_imgui.ImDrawList_PushClipRect `ge` |4 | 2011 |  |
| extensions.ui_imgui.ImDrawList_PushClipRectFullScreen `ge` |1 | 2015 |  |
| extensions.ui_imgui.ImDrawList_PushTextureID `ge` |2 | 2017 |  |
| extensions.ui_imgui.ImGuiIO `ge` |0 | 1884 |  |
| extensions.ui_imgui.ImGuiIOPtr `ge` |0 | 1885 |  |
| extensions.ui_imgui.ImGuiIO_AddFocusEvent `ge` |2 | 1870 |  |
| extensions.ui_imgui.ImGuiIO_AddInputCharacter `ge` |2 | 1871 |  |
| extensions.ui_imgui.ImGuiIO_AddInputCharacterUTF16 `ge` |2 | 1872 |  |
| extensions.ui_imgui.ImGuiIO_AddInputCharactersUTF8 `ge` |2 | 1873 |  |
| extensions.ui_imgui.ImGuiIO_AddKeyAnalogEvent `ge` |4 | 1864 |  |
| extensions.ui_imgui.ImGuiIO_AddKeyEvent `ge` |3 | 1863 |  |
| extensions.ui_imgui.ImGuiIO_AddMouseButtonEvent `ge` |3 | 1866 |  |
| extensions.ui_imgui.ImGuiIO_AddMousePosEvent `ge` |3 | 1865 |  |
| extensions.ui_imgui.ImGuiIO_AddMouseSourceEvent `ge` |2 | 1868 |  |
| extensions.ui_imgui.ImGuiIO_AddMouseViewportEvent `ge` |2 | 1869 |  |
| extensions.ui_imgui.ImGuiIO_AddMouseWheelEvent `ge` |3 | 1867 |  |
| extensions.ui_imgui.ImGuiIO_ClearEventsQueue `ge` |1 | 1882 |  |
| extensions.ui_imgui.ImGuiIO_ClearInputKeys `ge` |1 | 1883 |  |
| extensions.ui_imgui.ImGuiIO_FontGlobalScale `ge` |2 | 195 |  |
| extensions.ui_imgui.ImGuiIO_SetAppAcceptingEvents `ge` |2 | 1881 |  |
| extensions.ui_imgui.ImGuiIO_SetKeyEventNativeData `ge` |5 | 1877 |  |
| extensions.ui_imgui.ImGuiListClipper `ge` |0 | 1965 |  |
| extensions.ui_imgui.ImGuiListClipperPtr `ge` |0 | 1966 |  |
| extensions.ui_imgui.ImGuiListClipper_Begin `ge` |3 | 1967 |  |
| extensions.ui_imgui.ImGuiListClipper_End `ge` |1 | 1971 |  |
| extensions.ui_imgui.ImGuiListClipper_IncludeRangeByIndices `ge` |3 | 1973 |  |
| extensions.ui_imgui.ImGuiListClipper_Step `ge` |1 | 1972 |  |
| extensions.ui_imgui.ImGuiPayload `ge` |0 | 1894 |  |
| extensions.ui_imgui.ImGuiPayloadPtr `ge` |0 | 1895 |  |
| extensions.ui_imgui.ImGuiPayload_Clear `ge` |1 | 1896 |  |
| extensions.ui_imgui.ImGuiPayload_IsDataType `ge` |2 | 1897 |  |
| extensions.ui_imgui.ImGuiPayload_IsDelivery `ge` |1 | 1902 |  |
| extensions.ui_imgui.ImGuiPayload_IsPreview `ge` |1 | 1901 |  |
| extensions.ui_imgui.ImGuiPlatformIO `ge` |0 | 2183 |  |
| extensions.ui_imgui.ImGuiPlatformIOPtr `ge` |0 | 2184 |  |
| extensions.ui_imgui.ImGuiPlatformImeData `ge` |0 | 2191 |  |
| extensions.ui_imgui.ImGuiPlatformImeDataPtr `ge` |0 | 2192 |  |
| extensions.ui_imgui.ImGuiPlatformMonitor `ge` |0 | 2187 |  |
| extensions.ui_imgui.ImGuiPlatformMonitorPtr `ge` |0 | 2188 |  |
| extensions.ui_imgui.ImGuiStorage_BuildSortByKey `ge` |1 | 1962 |  |
| extensions.ui_imgui.ImGuiStorage_Clear `ge` |1 | 1924 |  |
| extensions.ui_imgui.ImGuiStorage_GetBool `ge` |3 | 1930 |  |
| extensions.ui_imgui.ImGuiStorage_GetBoolRef `ge` |3 | 1949 |  |
| extensions.ui_imgui.ImGuiStorage_GetFloat `ge` |3 | 1935 |  |
| extensions.ui_imgui.ImGuiStorage_GetFloatRef `ge` |3 | 1953 |  |
| extensions.ui_imgui.ImGuiStorage_GetInt `ge` |3 | 1925 |  |
| extensions.ui_imgui.ImGuiStorage_GetIntRef `ge` |3 | 1945 |  |
| extensions.ui_imgui.ImGuiStorage_GetVoidPtr `ge` |2 | 1940 |  |
| extensions.ui_imgui.ImGuiStorage_GetVoidPtrRef `ge` |3 | 1957 |  |
| extensions.ui_imgui.ImGuiStorage_SetAllInt `ge` |2 | 1961 |  |
| extensions.ui_imgui.ImGuiStorage_SetBool `ge` |3 | 1934 |  |
| extensions.ui_imgui.ImGuiStorage_SetFloat `ge` |3 | 1939 |  |
| extensions.ui_imgui.ImGuiStorage_SetInt `ge` |3 | 1929 |  |
| extensions.ui_imgui.ImGuiStorage_SetVoidPtr `ge` |3 | 1941 |  |
| extensions.ui_imgui.ImGuiStyle `ge` |0 | 1856 |  |
| extensions.ui_imgui.ImGuiStylePtr `ge` |0 | 1857 |  |
| extensions.ui_imgui.ImGuiStyle_ScaleAllSizes `ge` |2 | 1858 |  |
| extensions.ui_imgui.ImGuiTableColumnSortSpecs `ge` |0 | 1905 |  |
| extensions.ui_imgui.ImGuiTableColumnSortSpecsPtr `ge` |0 | 1906 |  |
| extensions.ui_imgui.ImGuiTableSortSpecs `ge` |0 | 274 |  |
| extensions.ui_imgui.ImGuiTableSortSpecsPtr `ge` |0 | 275 |  |
| extensions.ui_imgui.ImGuiTextFilter `ge` |1 | 102 |  |
| extensions.ui_imgui.ImGuiTextFilterPtr `ge` |1 | 108 |  |
| extensions.ui_imgui.ImGuiTextFilter_Build `ge` |1 | 1919 |  |
| extensions.ui_imgui.ImGuiTextFilter_Clear `ge` |1 | 1920 |  |
| extensions.ui_imgui.ImGuiTextFilter_Draw `ge` |3 | 1909 |  |
| extensions.ui_imgui.ImGuiTextFilter_IsActive `ge` |1 | 1921 |  |
| extensions.ui_imgui.ImGuiTextFilter_PassFilter `ge` |3 | 1914 |  |
| extensions.ui_imgui.ImGuiViewport `ge` |0 | 2177 |  |
| extensions.ui_imgui.ImGuiViewportPtr `ge` |0 | 2178 |  |
| extensions.ui_imgui.ImGuiViewport_GetCenter `ge` |1 | 2179 |  |
| extensions.ui_imgui.ImGuiViewport_GetWorkCenter `ge` |1 | 2180 |  |
| extensions.ui_imgui.ImGuiWindowClass `ge` |0 | 1890 |  |
| extensions.ui_imgui.ImGuiWindowClassPtr `ge` |0 | 1891 |  |
| extensions.ui_imgui.ImTextureHandler `ge` |1 | 199 |  |
| extensions.ui_imgui.ImTextureHandlerIsCached `ge` |1 | 205 |  |
| extensions.ui_imgui.ImVec2 `ge` |2 | 16 |  |
| extensions.ui_imgui.ImVec2Ptr `ge` |2 | 20 |  |
| extensions.ui_imgui.ImVec4 `ge` |4 | 25 |  |
| extensions.ui_imgui.ImVec4Ptr `ge` |4 | 29 |  |
| extensions.ui_imgui.ImVecPtrDeref `ge` |1 | 34 |  |
| extensions.ui_imgui.Image `ge` |6 | 376 |  |
| extensions.ui_imgui.ImageButton `ge` |7 | 383 |  |
| extensions.ui_imgui.Indent `ge` |1 | 236 |  |
| extensions.ui_imgui.InputDouble `ge` |6 | 667 |  |
| extensions.ui_imgui.InputFloat `ge` |6 | 617 |  |
| extensions.ui_imgui.InputFloat2 `ge` |4 | 626 |  |
| extensions.ui_imgui.InputFloat3 `ge` |4 | 632 |  |
| extensions.ui_imgui.InputFloat4 `ge` |4 | 638 |  |
| extensions.ui_imgui.InputInt `ge` |5 | 644 |  |
| extensions.ui_imgui.InputInt2 `ge` |3 | 652 |  |
| extensions.ui_imgui.InputInt3 `ge` |3 | 657 |  |
| extensions.ui_imgui.InputInt4 `ge` |3 | 662 |  |
| extensions.ui_imgui.InputText `ge` |7 | 129 |  |
| extensions.ui_imgui.InputTextMultiline `ge` |7 | 136 |  |
| extensions.ui_imgui.InputTextWithHint `ge` |7 | 608 |  |
| extensions.ui_imgui.Int `ge` |1 | 48 |  |
| extensions.ui_imgui.IntPtr `ge` |1 | 49 |  |
| extensions.ui_imgui.InvisibleButton `ge` |3 | 337 |  |
| extensions.ui_imgui.IoFontsGetCount `ge` |0 | 165 |  |
| extensions.ui_imgui.IoFontsGetName `ge` |1 | 169 |  |
| extensions.ui_imgui.IsAnyItemActive `ge` |0 | 1081 |  |
| extensions.ui_imgui.IsAnyItemFocused `ge` |0 | 1082 |  |
| extensions.ui_imgui.IsAnyItemHovered `ge` |0 | 1080 |  |
| extensions.ui_imgui.IsAnyMouseDown `ge` |0 | 1150 |  |
| extensions.ui_imgui.IsItemActivated `ge` |0 | 1076 |  |
| extensions.ui_imgui.IsItemActive `ge` |0 | 1068 |  |
| extensions.ui_imgui.IsItemClicked `ge` |1 | 1070 |  |
| extensions.ui_imgui.IsItemDeactivated `ge` |0 | 1077 |  |
| extensions.ui_imgui.IsItemDeactivatedAfterEdit `ge` |0 | 1078 |  |
| extensions.ui_imgui.IsItemEdited `ge` |0 | 1075 |  |
| extensions.ui_imgui.IsItemFocused `ge` |0 | 1069 |  |
| extensions.ui_imgui.IsItemHovered `ge` |1 | 1064 |  |
| extensions.ui_imgui.IsItemToggledOpen `ge` |0 | 1079 |  |
| extensions.ui_imgui.IsItemVisible `ge` |0 | 1074 |  |
| extensions.ui_imgui.IsKeyDown `ge` |1 | 1125 |  |
| extensions.ui_imgui.IsKeyPressed `ge` |2 | 1126 |  |
| extensions.ui_imgui.IsKeyReleased `ge` |1 | 1130 |  |
| extensions.ui_imgui.IsMouseClicked `ge` |2 | 1135 |  |
| extensions.ui_imgui.IsMouseDoubleClicked `ge` |1 | 1140 |  |
| extensions.ui_imgui.IsMouseDown `ge` |1 | 1134 |  |
| extensions.ui_imgui.IsMouseDragging `ge` |2 | 1153 |  |
| extensions.ui_imgui.IsMouseHoveringRect `ge` |3 | 1142 |  |
| extensions.ui_imgui.IsMousePosValid `ge` |1 | 1146 |  |
| extensions.ui_imgui.IsMouseReleased `ge` |1 | 1139 |  |
| extensions.ui_imgui.IsPopupOpen `ge` |2 | 915 |  |
| extensions.ui_imgui.IsRectVisible1 `ge` |1 | 1098 |  |
| extensions.ui_imgui.IsRectVisible2 `ge` |2 | 1099 |  |
| extensions.ui_imgui.IsWindowAppearing `ge` |0 | 88 |  |
| extensions.ui_imgui.IsWindowCollapsed `ge` |0 | 89 |  |
| extensions.ui_imgui.IsWindowDocked `ge` |0 | 1027 |  |
| extensions.ui_imgui.IsWindowFocused `ge` |1 | 90 |  |
| extensions.ui_imgui.IsWindowHovered `ge` |1 | 94 |  |
| extensions.ui_imgui.Knob `ge` |10 | 392 |  |
| extensions.ui_imgui.KnobInt `ge` |10 | 404 |  |
| extensions.ui_imgui.LabelText `ge` |2+ | 313 |  |
| extensions.ui_imgui.ListBox1 `ge` |5 | 782 |  |
| extensions.ui_imgui.ListBox2 `ge` |6 | 789 |  |
| extensions.ui_imgui.LogButtons `ge` |0 | 1037 |  |
| extensions.ui_imgui.LogFinish `ge` |0 | 1036 |  |
| extensions.ui_imgui.LogToClipboard `ge` |1 | 1032 |  |
| extensions.ui_imgui.LogToTTY `ge` |1 | 1028 |  |
| extensions.ui_imgui.MenuItem1 `ge` |4 | 846 |  |
| extensions.ui_imgui.MenuItem2 `ge` |4 | 853 |  |
| extensions.ui_imgui.NewFrame `ge` |0 | 18 |  |
| extensions.ui_imgui.NewLine `ge` |0 | 233 |  |
| extensions.ui_imgui.NextColumn `ge` |0 | 971 |  |
| extensions.ui_imgui.OpenPopup `ge` |2 | 177 |  |
| extensions.ui_imgui.OpenPopup1 `ge` |2 | 885 |  |
| extensions.ui_imgui.OpenPopup2 `ge` |2 | 890 |  |
| extensions.ui_imgui.OpenPopupOnItemClick `ge` |2 | 894 |  |
| extensions.ui_imgui.PlotHistogram1 `ge` |9 | 808 |  |
| extensions.ui_imgui.PlotLines1 `ge` |9 | 797 |  |
| extensions.ui_imgui.PopButtonRepeat `ge` |0 | 207 |  |
| extensions.ui_imgui.PopClipRect `ge` |0 | 1057 |  |
| extensions.ui_imgui.PopFont `ge` |0 | 191 |  |
| extensions.ui_imgui.PopID `ge` |0 | 274 |  |
| extensions.ui_imgui.PopItemWidth `ge` |0 | 209 |  |
| extensions.ui_imgui.PopStyleColor `ge` |1 | 194 |  |
| extensions.ui_imgui.PopStyleVar `ge` |1 | 200 |  |
| extensions.ui_imgui.PopTabStop `ge` |0 | 205 |  |
| extensions.ui_imgui.PopTextWrapPos `ge` |0 | 216 |  |
| extensions.ui_imgui.ProgressBar `ge` |3 | 370 |  |
| extensions.ui_imgui.PushButtonRepeat `ge` |1 | 206 |  |
| extensions.ui_imgui.PushClipRect `ge` |3 | 1056 |  |
| extensions.ui_imgui.PushFont `ge` |1 | 187 |  |
| extensions.ui_imgui.PushFont2 `ge` |1 | 150 |  |
| extensions.ui_imgui.PushFont3 `ge` |1 | 154 |  |
| extensions.ui_imgui.PushID1 `ge` |1 | 260 |  |
| extensions.ui_imgui.PushID2 `ge` |2 | 264 |  |
| extensions.ui_imgui.PushID3 `ge` |1 | 269 |  |
| extensions.ui_imgui.PushID4 `ge` |1 | 273 |  |
| extensions.ui_imgui.PushItemWidth `ge` |1 | 208 |  |
| extensions.ui_imgui.PushStyleColor1 `ge` |2 | 192 |  |
| extensions.ui_imgui.PushStyleColor2 `ge` |2 | 193 |  |
| extensions.ui_imgui.PushStyleVar1 `ge` |2 | 198 |  |
| extensions.ui_imgui.PushStyleVar2 `ge` |2 | 199 |  |
| extensions.ui_imgui.PushTabStop `ge` |1 | 204 |  |
| extensions.ui_imgui.PushTextWrapPos `ge` |1 | 212 |  |
| extensions.ui_imgui.RadioButton1 `ge` |2 | 361 |  |
| extensions.ui_imgui.RadioButton2 `ge` |3 | 365 |  |
| extensions.ui_imgui.Render `ge` |0 | 20 |  |
| extensions.ui_imgui.RenderPlatformWindowsDefault `ge` |2 | 1184 |  |
| extensions.ui_imgui.ResetMouseDragDelta `ge` |1 | 1162 |  |
| extensions.ui_imgui.SameLine `ge` |2 | 228 |  |
| extensions.ui_imgui.Selectable1 `ge` |4 | 762 |  |
| extensions.ui_imgui.Selectable2 `ge` |4 | 769 |  |
| extensions.ui_imgui.Separator `ge` |0 | 227 |  |
| extensions.ui_imgui.SeparatorText `ge` |1 | 324 |  |
| extensions.ui_imgui.SetClipboardText `ge` |1 | 1170 |  |
| extensions.ui_imgui.SetColorEditOptions `ge` |1 | 703 |  |
| extensions.ui_imgui.SetColumnOffset `ge` |2 | 982 |  |
| extensions.ui_imgui.SetColumnWidth `ge` |2 | 977 |  |
| extensions.ui_imgui.SetCurrentContext `ge` |0 | 17 |  |
| extensions.ui_imgui.SetCursorPos `ge` |1 | 249 |  |
| extensions.ui_imgui.SetCursorPosX `ge` |1 | 250 |  |
| extensions.ui_imgui.SetCursorPosY `ge` |1 | 251 |  |
| extensions.ui_imgui.SetCursorScreenPos `ge` |1 | 254 |  |
| extensions.ui_imgui.SetDefaultFont `ge` |1 | 173 |  |
| extensions.ui_imgui.SetDragDropPayload `ge` |4 | 186 |  |
| extensions.ui_imgui.SetItemAllowOverlap `ge` |0 | 376 |  |
| extensions.ui_imgui.SetItemDefaultFocus `ge` |0 | 1058 |  |
| extensions.ui_imgui.SetItemTooltip `ge` |1+ | 868 |  |
| extensions.ui_imgui.SetKeyboardFocusHere `ge` |1 | 1059 |  |
| extensions.ui_imgui.SetMouseCursor `ge` |1 | 1167 |  |
| extensions.ui_imgui.SetNextFrameWantCaptureKeyboard `ge` |1 | 1133 |  |
| extensions.ui_imgui.SetNextFrameWantCaptureMouse `ge` |1 | 1168 |  |
| extensions.ui_imgui.SetNextItemAllowOverlap `ge` |0 | 1063 |  |
| extensions.ui_imgui.SetNextItemOpen `ge` |2 | 758 |  |
| extensions.ui_imgui.SetNextItemWidth `ge` |1 | 210 |  |
| extensions.ui_imgui.SetNextWindowBgAlpha `ge` |1 | 126 |  |
| extensions.ui_imgui.SetNextWindowClass `ge` |1 | 1022 |  |
| extensions.ui_imgui.SetNextWindowCollapsed `ge` |2 | 120 |  |
| extensions.ui_imgui.SetNextWindowContentSize `ge` |1 | 119 |  |
| extensions.ui_imgui.SetNextWindowDockID `ge` |2 | 1018 |  |
| extensions.ui_imgui.SetNextWindowFocus `ge` |0 | 124 |  |
| extensions.ui_imgui.SetNextWindowPos `ge` |3 | 105 |  |
| extensions.ui_imgui.SetNextWindowScroll `ge` |1 | 125 |  |
| extensions.ui_imgui.SetNextWindowSize `ge` |2 | 110 |  |
| extensions.ui_imgui.SetNextWindowSizeConstraints `ge` |4 | 114 |  |
| extensions.ui_imgui.SetNextWindowViewport `ge` |1 | 127 |  |
| extensions.ui_imgui.SetScrollFromPosX `ge` |2 | 179 |  |
| extensions.ui_imgui.SetScrollFromPosY `ge` |2 | 183 |  |
| extensions.ui_imgui.SetScrollHereX `ge` |1 | 171 |  |
| extensions.ui_imgui.SetScrollHereY `ge` |1 | 175 |  |
| extensions.ui_imgui.SetScrollX `ge` |1 | 167 |  |
| extensions.ui_imgui.SetScrollY `ge` |1 | 168 |  |
| extensions.ui_imgui.SetStateStorage `ge` |1 | 1104 |  |
| extensions.ui_imgui.SetTabItemClosed `ge` |1 | 1002 |  |
| extensions.ui_imgui.SetTooltip `ge` |1+ | 862 |  |
| extensions.ui_imgui.SetWindowCollapsed1 `ge` |2 | 136 |  |
| extensions.ui_imgui.SetWindowCollapsed2 `ge` |3 | 152 |  |
| extensions.ui_imgui.SetWindowFocus1 `ge` |0 | 140 |  |
| extensions.ui_imgui.SetWindowFocus2 `ge` |1 | 157 |  |
| extensions.ui_imgui.SetWindowFontScale `ge` |1 | 141 |  |
| extensions.ui_imgui.SetWindowPos1 `ge` |2 | 128 |  |
| extensions.ui_imgui.SetWindowPos2 `ge` |3 | 142 |  |
| extensions.ui_imgui.SetWindowSize1 `ge` |2 | 132 |  |
| extensions.ui_imgui.SetWindowSize2 `ge` |3 | 147 |  |
| extensions.ui_imgui.ShowAboutWindow `ge` |1 | 37 |  |
| extensions.ui_imgui.ShowDebugLogWindow `ge` |1 | 29 |  |
| extensions.ui_imgui.ShowDemoWindow `ge` |1 | 21 |  |
| extensions.ui_imgui.ShowFontSelector `ge` |1 | 49 |  |
| extensions.ui_imgui.ShowHelpMarker `ge` |2 | 239 |  |
| extensions.ui_imgui.ShowMetricsWindow `ge` |1 | 25 |  |
| extensions.ui_imgui.ShowStackToolWindow `ge` |1 | 33 |  |
| extensions.ui_imgui.ShowStyleEditor `ge` |1 | 41 |  |
| extensions.ui_imgui.ShowStyleSelector `ge` |1 | 45 |  |
| extensions.ui_imgui.ShowUserGuide `ge` |0 | 53 |  |
| extensions.ui_imgui.SliderAngle `ge` |6 | 543 |  |
| extensions.ui_imgui.SliderFloat `ge` |6 | 518 |  |
| extensions.ui_imgui.SliderFloat2 `ge` |6 | 525 |  |
| extensions.ui_imgui.SliderFloat3 `ge` |6 | 531 |  |
| extensions.ui_imgui.SliderFloat4 `ge` |6 | 537 |  |
| extensions.ui_imgui.SliderInt `ge` |6 | 552 |  |
| extensions.ui_imgui.SliderInt2 `ge` |6 | 559 |  |
| extensions.ui_imgui.SliderInt3 `ge` |6 | 565 |  |
| extensions.ui_imgui.SliderInt4 `ge` |6 | 571 |  |
| extensions.ui_imgui.SmallButton `ge` |1 | 333 |  |
| extensions.ui_imgui.Spacing `ge` |0 | 234 |  |
| extensions.ui_imgui.StyleColorsClassic `ge` |1 | 63 |  |
| extensions.ui_imgui.StyleColorsDark `ge` |1 | 55 |  |
| extensions.ui_imgui.StyleColorsLight `ge` |1 | 59 |  |
| extensions.ui_imgui.TabItemButton `ge` |2 | 997 |  |
| extensions.ui_imgui.TableGetColumnCount `ge` |0 | 949 |  |
| extensions.ui_imgui.TableGetColumnFlags `ge` |1 | 956 |  |
| extensions.ui_imgui.TableGetColumnIndex `ge` |0 | 950 |  |
| extensions.ui_imgui.TableGetColumnName `ge` |1 | 952 |  |
| extensions.ui_imgui.TableGetRowIndex `ge` |0 | 951 |  |
| extensions.ui_imgui.TableGetSortSpecs `ge` |0 | 948 |  |
| extensions.ui_imgui.TableHeader `ge` |1 | 944 |  |
| extensions.ui_imgui.TableHeadersRow `ge` |0 | 943 |  |
| extensions.ui_imgui.TableNextColumn `ge` |0 | 933 |  |
| extensions.ui_imgui.TableNextRow `ge` |2 | 928 |  |
| extensions.ui_imgui.TableSetBgColor `ge` |3 | 961 |  |
| extensions.ui_imgui.TableSetColumnEnabled `ge` |2 | 960 |  |
| extensions.ui_imgui.TableSetColumnIndex `ge` |1 | 934 |  |
| extensions.ui_imgui.TableSetSortSpecsDirty `ge` |1 | 277 |  |
| extensions.ui_imgui.TableSetupColumn `ge` |4 | 935 |  |
| extensions.ui_imgui.TableSetupScrollFreeze `ge` |2 | 942 |  |
| extensions.ui_imgui.TableToArrayFloat `ge` |1 | 210 |  |
| extensions.ui_imgui.Text `ge` |1+ | 293 |  |
| extensions.ui_imgui.TextColored `ge` |2+ | 298 |  |
| extensions.ui_imgui.TextDisabled `ge` |1+ | 303 |  |
| extensions.ui_imgui.TextFilter_GetInputBuf `ge` |1 | 266 |  |
| extensions.ui_imgui.TextFilter_SetInputBuf `ge` |2 | 270 |  |
| extensions.ui_imgui.TextGlyph `ge` |1 | 158 |  |
| extensions.ui_imgui.TextUnformatted `ge` |2 | 288 |  |
| extensions.ui_imgui.TextWrapped `ge` |1+ | 308 |  |
| extensions.ui_imgui.TreeNode1 `ge` |1 | 704 |  |
| extensions.ui_imgui.TreeNode2 `ge` |2+ | 708 |  |
| extensions.ui_imgui.TreeNode3 `ge` |2+ | 714 |  |
| extensions.ui_imgui.TreeNodeEx1 `ge` |2 | 720 |  |
| extensions.ui_imgui.TreeNodeEx2 `ge` |3+ | 725 |  |
| extensions.ui_imgui.TreeNodeEx3 `ge` |3+ | 731 |  |
| extensions.ui_imgui.TreePop `ge` |0 | 745 |  |
| extensions.ui_imgui.TreePush1 `ge` |1 | 737 |  |
| extensions.ui_imgui.TreePush2 `ge` |1 | 741 |  |
| extensions.ui_imgui.Unindent `ge` |1 | 240 |  |
| extensions.ui_imgui.UpdatePlatformWindows `ge` |0 | 1183 |  |
| extensions.ui_imgui.VSliderFloat `ge` |7 | 577 |  |
| extensions.ui_imgui.VSliderInt `ge` |7 | 584 |  |
| extensions.ui_imgui.Value1 `ge` |2 | 819 |  |
| extensions.ui_imgui.Value2 `ge` |2 | 823 |  |
| extensions.ui_imgui.Value3 `ge` |2 | 827 |  |
| extensions.ui_imgui.Value4 `ge` |3 | 831 |  |
| extensions.ui_imgui.flags `ge` |0+ | [C] |  |
| extensions.ui_imgui.getCurrentMonitorSize `ge` |0 | 285 |  |
| extensions.ui_imgui.getMonitorIndex `ge` |0 | 281 |  |
| extensions.ui_imgui.loadIniSettingsFromDisk `ge` |1 | 291 |  |
| extensions.ui_imgui.onExtensionLoaded `ge` |0 | 29 |  |
| extensions.ui_imgui.onImGuiReady `ge` |0 | 22 |  |
| extensions.ui_imgui.saveIniSettingsToDisk `ge` |1 | 299 |  |
| extensions.ui_imgui.setEnabled `ge` |1 | 36 |  |
| extensions.ui_imgui.tooltip `ge` |1 | 251 |  |
| extensions.ui_messagesTasksAppContainers.onUpdate `ge` |0 | 162 |  |
| extensions.ui_topBar.onAnyMissionChanged `ge` |2 | 237 |  |
| extensions.ui_topBar.onGameStateUpdate `ge` |1 | 232 |  |
| extensions.ui_vehicleSelector_detailsInteraction.exitCallback `ge` |0 | 41 |  |
| extensions.ui_vehicleSelector_general.onModActivated `ge` |0 | 540 |  |
| extensions.ui_vehicleSelector_general.onModDeactivated `ge` |0 | 536 |  |
| extensions.ui_vehicleSelector_general.onModManagerReady `ge` |0 | 544 |  |
| extensions.ui_vehicleSelector_general.onModManagerStateChanged `ge` |0 | 548 |  |
| extensions.ui_vehicleSelector_tiles.getClusteredItemsFavouriteIconPercent `ge` |1 | 24 |  |
| extensions.ui_vehicleSelector_tiles.getClusteredItemsStats `ge` |2 | 46 |  |
| extensions.ui_vehicleSelector_tiles.getConfigOrModelPropValue `ge` |2 | 102 |  |
| extensions.ui_vehicleSelector_tiles.getSources `ge` |3 | 79 |  |
| extensions.ui_vehicleSelector_tiles.sortByNameButOtherAlwaysLast `ge` |2 | 159 |  |
| extensions.ui_vehicleSelector_tiles.sortByValue `ge` |2 | 163 |  |
| extensions.ui_vehicleSelector_tiles.sortByYears `ge` |2 | 167 |  |
| extensions.ui_vehicleSelector_vehicleOperations.onScreenFadeState `ge` |1 | 31 |  |
| extensions.util_richPresence.onAnyMissionChanged `ge` |0 | 195 |  |
| extensions.util_richPresence.onAttemptCompleted `ge` |1 | 402 |  |
| extensions.util_richPresence.onAttemptFailed `ge` |1 | 392 |  |
| extensions.util_richPresence.onClientPostStartMission `ge` |1 | 156 |  |
| extensions.util_richPresence.onDeserialized `ge` |0 | 41 |  |
| extensions.util_richPresence.onEditorActivated `ge` |0 | 177 |  |
| extensions.util_richPresence.onEditorDeactivated `ge` |0 | 184 |  |
| extensions.util_richPresence.onGameStateUpdate `ge` |1 | 191 |  |
| extensions.util_richPresence.onMissionAttemptAggregated `ge` |2 | 455 |  |
| extensions.util_richPresence.onNewAttempt `ge` |1 | 382 |  |
| extensions.util_richPresence.onRaceBranchChosen `ge` |1 | 433 |  |
| extensions.util_richPresence.onRaceLap `ge` |1 | 422 |  |
| extensions.util_richPresence.onRaceResult `ge` |1 | 444 |  |
| extensions.util_richPresence.onRaceWaypointReached `ge` |1 | 412 |  |
| extensions.util_richPresence.onResetGameplay `ge` |0 | 372 |  |
| extensions.util_richPresence.onSettingsChanged `ge` |0 | 287 |  |
| extensions.util_richPresence.onUiReady `ge` |0 | 320 |  |
| extensions.util_richPresence.onVehicleSwitched `ge` |3 | 140 |  |
| extensions.util_richPresence.set `ge` |1 | 269 |  |
| extractVehicleData `ge` |1 | 1257 |  |
| fileExistsOrNil `ge` |1 | 1398 |  |
| fillVehicleSpawnOptionDefaults `ge` |2 | 1049 |  |
| findAllObjects `ge` |0+ | [C] |  |
| findFirstFile `ge` |0+ | [C] |  |
| findNextFile `ge` |0+ | [C] |  |
| findObjectList `ge` |0+ | [C] |  |
| findObjectListFrustum `ge` |0+ | [C] |  |
| flattenTable `ge` |1 | 1379 |  |
| flushGroundCoverGrids `ge` |0+ | [C] |  |
| forEachAudioChannel `ge` |1 | 595 |  |
| forceShutdown `ge` |0+ | [C] |  |
| formatTimeStringNow `ge` |1 | 263 |  |
| freqGenC `ge` |3 | 12 |  |
| fsign `ge` |1 | 1134 |  |
| gcinfo `ge` |0+ | [C] |  |
| gcprobe `ge` |2 | 1314 |  |
| generateObjectNameForClass `ge` |2 | 1632 |  |
| getActiveDDSFiles `ge` |0+ | [C] |  |
| getActiveLightManager `ge` |0+ | [C] |  |
| getAllLevelIdentifiers `ge` |0 | 1118 |  |
| getAllRopeVisuals `ge` |0+ | [C] |  |
| getAllVehicles `ge` |0 | 500 |  |
| getAllVehiclesByType `ge` |1 | 515 |  |
| getAudioChannelsVolume `ge` |0 | 606 |  |
| getBitmapInfo `ge` |0+ | [C] |  |
| getBlueNoise1d `ge` |1 | 536 |  |
| getCEFFocusMouse `ge` |0+ | [C] |  |
| getCamera `ge` |0+ | [C] |  |
| getCameraForward `ge` |0 | 189 |  |
| getCameraFov `ge` |0 | 193 |  |
| getCameraFovDeg `ge` |0 | 191 |  |
| getCameraFovRad `ge` |0 | 192 |  |
| getCameraMouseRay `ge` |0+ | [C] |  |
| getCameraMouseRayPosDir `ge` |0+ | [C] |  |
| getCameraMouseRayStartPosEndPos `ge` |0+ | [C] |  |
| getCameraPosition `ge` |0 | 186 |  |
| getCameraProjMatrix `ge` |0+ | [C] |  |
| getCameraQuat `ge` |0 | 190 |  |
| getCameraRight `ge` |0 | 188 |  |
| getCameraTransform `ge` |0+ | [C] |  |
| getCameraUp `ge` |0 | 187 |  |
| getCefDevConsoleOpen `ge` |0+ | [C] |  |
| getClipboard `ge` |0+ | [C] |  |
| getClosestVehicle `ge` |2 | 571 |  |
| getComparisonOps `ge` |0 | 1660 |  |
| getConsoleBoolVariable `ge` |0+ | [C] |  |
| getConsoleVariable `ge` |0+ | [C] |  |
| getCurrentLevelIdentifier `ge` |1 | 1110 |  |
| getDateTimeUTCString `ge` |0 | 1604 |  |
| getDesktopVideoMode `ge` |0+ | [C] |  |
| getDevicesByRecentActivity `ge` |0+ | [C] |  |
| getDirectories `ge` |1 | 1549 |  |
| getDirs `ge` |2 | 1405 |  |
| getDisplayDeviceInformation `ge` |0+ | [C] |  |
| getDistanceMap `ge` |0 | 304 |  |
| getFileSize `ge` |1 | 1422 |  |
| getFunctionParameters `ge` |1 | 1623 |  |
| getGame `ge` |0 | 81 |  |
| getGameVehicleID `ge` |1 | 196 |  |
| getGroundCoverScale `ge` |0+ | [C] |  |
| getHardwareID `ge` |0+ | [C] |  |
| getKeyState `ge` |1 | 435 |  |
| getLevelLogs `ge` |0 | 157 |  |
| getLightManagerNames `ge` |0+ | [C] |  |
| getMaxVehicleAmount `ge` |1 | 862 |  |
| getMissionFilename `ge` |0+ | [C] |  |
| getMissionPath `ge` |0+ | [C] |  |
| getModuleLocals `ge` |1 | 89 |  |
| getMovedMouseLastTimeMs `ge` |0+ | [C] |  |
| getNicknameMap `ge` |0 | 312 |  |
| getObjectByClass `ge` |1 | 647 |  |
| getObjectByID `ge` |1 | 447 |  |
| getObjectsByClass `ge` |1 | 656 |  |
| getOwnMap `ge` |0 | 277 |  |
| getPlayerByName `ge` |1 | 250 |  |
| getPlayerVehicle `ge` |1 | 438 |  |
| getPlayers `ge` |0 | 372 |  |
| getRandomPaint `ge` |2 | 983 |  |
| getRenderWorldMain `ge` |0+ | [C] |  |
| getRopeVisual `ge` |0+ | [C] |  |
| getRopeVisualManagerStats `ge` |0+ | [C] |  |
| getSceneWaypointRadius `ge` |1 | 844 |  |
| getScreenShotDateTimeString `ge` |0+ | [C] |  |
| getScreenShotFolderString `ge` |0+ | [C] |  |
| getServerVehicleID `ge` |1 | 211 |  |
| getStockColor `ge` |0+ | [C] |  |
| getStreamManager `ge` |0+ | [C] |  |
| getTSVar `ge` |0+ | [C] |  |
| getTimeOfDay `ge` |1 | 668 |  |
| getVehicleByGameID `ge` |1 | 240 |  |
| getVehicleByServerID `ge` |1 | 231 |  |
| getVehicleColor `ge` |1 | 475 |  |
| getVehicleColorPalette `ge` |2 | 486 |  |
| getVehicleMap `ge` |0 | 292 |  |
| getVehiclePaint `ge` |1 | 924 |  |
| getVehicles `ge` |0 | 377 |  |
| getVirtualInputManager `ge` |0+ | [C] |  |
| getfenv `ge` |0+ | [C] |  |
| getmetatable `ge` |0+ | [C] |  |
| graphs `ge` |2 | 282 |  |
| greyColor `ge` |2 | 98 |  |
| guardZero `ge` |1 | 1146 |  |
| hashStringSHA1 `ge` |0+ | [C] |  |
| hashStringSHA256 `ge` |0+ | [C] |  |
| hashStringXXH `ge` |0+ | [C] |  |
| hex_dump `ge` |1 | 1456 |  |
| hideNicknames `ge` |1 | 360 |  |
| imageExistsDefault `ge` |2 | 1386 |  |
| importPersistentData `ge` |0 | 820 |  |
| init `ge` |1 | 624 |  |
| intersectsRay_Capsule `ge` |5 | 1480 |  |
| intersectsRay_Cylinder `ge` |5 | 1465 |  |
| intersectsRay_Ellipsoid `ge` |6 | 1451 |  |
| intersectsRay_OBB `ge` |6 | 1429 |  |
| intersectsRay_Plane `ge` |4 | 1423 |  |
| intersectsRay_Sphere `ge` |4 | 1442 |  |
| intersectsRay_Triangle `ge` |5 | 1498 |  |
| invalidatePlayerVehicles `ge` |0 | 433 |  |
| invalidateVehicleCache `ge` |0 | 494 |  |
| inverseLerp `ge` |3 | 1197 |  |
| ipairs `ge` |0+ | [C] |  |
| ironbowColor `ge` |2 | 88 |  |
| isDebuggerAttached `ge` |0+ | [C] |  |
| isFile `ge` |0+ | [C] |  |
| isMeshAnimationTesterOpen `ge` |0+ | [C] |  |
| isOfficialContent `ge` |1 | 1372 |  |
| isOfficialContentVPath `ge` |1 | 1376 |  |
| isOwn `ge` |1 | 264 |  |
| isPlayerVehConfig `ge` |1 | 1380 |  |
| isSafeMode `ge` |0 | 124 |  |
| isTorqueScriptFunction `ge` |0+ | [C] |  |
| isWindowFocused `ge` |0+ | [C] |  |
| isinf `ge` |1 | 1172 |  |
| isnan `ge` |1 | 1168 |  |
| isnaninf `ge` |1 | 1176 |  |
| jetColor `ge` |2 | 93 |  |
| jitprobe `ge` |0 | 1347 |  |
| jsonDecode `ge` |2 | 422 |  |
| jsonEncode `ge` |1 | 349 |  |
| jsonEncodePrefix `ge` |3 | 353 |  |
| jsonEncodePretty `ge` |3 | 363 |  |
| jsonEncodeWorkBuffer `ge` |1 | 343 |  |
| jsonReadFile `ge` |1 | 478 |  |
| jsonWriteFile `ge` |5 | 460 |  |
| lerp `ge` |3 | 1193 |  |
| lightScene `ge` |0+ | [C] |  |
| lineBB2d `ge` |5 | 1271 |  |
| linePointFromXnorm `ge` |3 | 687 |  |
| linearScale `ge` |5 | 1185 |  |
| load `ge` |0+ | [C] |  |
| loadDirRec `ge` |1 | 896 |  |
| loadGameModeModules `ge` |0+ | 1112 |  |
| loadIni `ge` |1 | 1128 |  |
| loadJsonMaterialsFile `ge` |0+ | [C] |  |
| loadManualUnloadExtensions `ge` |0 | 386 |  |
| loadPrefabv2Template `ge` |1 | 707 |  |
| loadPresetExtensions `ge` |0 | 396 |  |
| load_spawn_prefabv2_indirect `ge` |0 | 1293 |  |
| load_test_prefabv1 `ge` |0 | 1202 |  |
| load_test_prefabv2 `ge` |0 | 1209 |  |
| loadfile `ge` |0+ | [C] |  |
| loadstring `ge` |0+ | [C] |  |
| lockMouse `ge` |0+ | [C] |  |
| log `ge` |0+ | 30 |  |
| logAlways `ge` |0+ | 34 |  |
| logError `ge` |0+ | [C] |  |
| logInputRegistryListeners `ge` |0+ | [C] |  |
| logWarning `ge` |0+ | [C] |  |
| lpad `ge` |3 | 165 |  |
| luaPreRender `ge` |3 | 507 |  |
| makeRelativePath `ge` |0+ | [C] |  |
| materialDebugGetFlag `ge` |0+ | [C] |  |
| materialDebugSetFlag `ge` |0+ | [C] |  |
| median3 `ge` |3 | 1255 |  |
| median4 `ge` |4 | 1259 |  |
| median5 `ge` |5 | 1263 |  |
| messageBox `ge` |0+ | [C] |  |
| module `ge` |0+ | [C] |  |
| monotonicSteffen `ge` |9 | 1304 |  |
| nanError `ge` |1 | 1180 |  |
| newExponentialSmoothing `ge` |3 | 466 |  |
| newExponentialSmoothingT `ge` |3 | 503 |  |
| newExtensionProxy `ge` |2 | 1055 |  |
| newFPSLimiter `ge` |1 | 1571 |  |
| newFreqDetector `ge` |0 | 91 |  |
| newFreqExists `ge` |0 | 157 |  |
| newFreqFilter1 `ge` |0 | 20 |  |
| newLineFitting `ge` |4 | 561 |  |
| newLinearSmoothing `ge` |3 | 423 |  |
| newNopSmoothing `ge` |0 | 449 |  |
| newTemporalSigmoidSmoothing `ge` |5 | 244 |  |
| newTemporalSmoothing `ge` |4 | 350 |  |
| newTemporalSmoothingNonLinear `ge` |3 | 311 |  |
| newTemporalSpring `ge` |3 | 214 |  |
| newproxy `ge` |0+ | [C] |  |
| next `ge` |0+ | [C] |  |
| nop `ge` |0 | 41 |  |
| onAiModeChange `ge` |2 | 775 |  |
| onBeamNGTrigger `ge` |1 | 668 |  |
| onBeamNGWaypoint `ge` |1 | 662 |  |
| onClusterTeleportNoReset `ge` |9 | 748 |  |
| onCouplerAttached `ge` |4 | 752 |  |
| onCouplerDetach `ge` |2 | 771 |  |
| onCouplerDetached `ge` |4 | 763 |  |
| onExit `ge` |0 | 959 |  |
| onFileChanged `ge` |1 | 672 |  |
| onGameEngineStartup `ge` |0 | 998 |  |
| onInstabilityDetected `ge` |1 | 865 |  |
| onKeyPressed `ge` |2 | 390 |  |
| onKeyReleased `ge` |2 | 398 |  |
| onLuaReloaded `ge` |0 | 1071 |  |
| onMouseLocked `ge` |1 | 738 |  |
| onPreExit `ge` |0 | 951 |  |
| onPreStart `ge` |0 | 943 |  |
| onPreStartCallback `ge` |0+ | [C] |  |
| onPreWindowClose `ge` |0 | 947 |  |
| onSetClusterPosRelRot `ge` |2 | 723 |  |
| onSpawnError `ge` |2 | 877 |  |
| onTexDrawPrimCompressDone `ge` |1 | 1079 |  |
| openMeshAnimationTester `ge` |0+ | [C] |  |
| openWebBrowser `ge` |0+ | [C] |  |
| openXRErrorDetected `ge` |0+ | 788 |  |
| openXRStateChanged `ge` |0+ | 783 |  |
| overlapsOBB_OBB `ge` |8 | 1346 |  |
| overlapsOBB_Plane `ge` |6 | 1380 |  |
| overlapsOBB_Sphere `ge` |6 | 1376 |  |
| pairs `ge` |1 | 232 |  |
| parseColor `ge` |1 | 76 |  |
| parseISO8601Date `ge` |1 | 1615 |  |
| pcall `ge` |0+ | [C] |  |
| physicsEngineEvent `ge` |0+ | 685 |  |
| physicsStateChanged `ge` |1 | 837 |  |
| point3f_2_Vector3 `ge` |0+ | [C] |  |
| pointBB2d `ge` |3 | 1267 |  |
| popActionMap `ge` |1 | 825 |  |
| prefabIsChildOfGroup `ge` |2 | 381 |  |
| prepareStartupExtensionsList `ge` |0 | 374 |  |
| print `ge` |1 | 18 |  |
| profilerPopEvent `ge` |0 | 41 |  |
| profilerPushEvent `ge` |0 | 41 |  |
| push3 `ge` |3 | 698 |  |
| pushActionMap `ge` |1 | 813 |  |
| pushActionMapHighestPriority `ge` |1 | 819 |  |
| quadraticBezier `ge` |4 | 1314 |  |
| quat `ge` |4 | 842 |  |
| quatFromAxisAngle `ge` |2 | 1114 |  |
| quatFromDir `ge` |2 | 1108 |  |
| quatFromEuler `ge` |3 | 1120 |  |
| queueCallbackInVehicle `ge` |3+ | 832 |  |
| queueCmdlineLevelLoadExtension `ge` |1 | 450 |  |
| queueExtensionToLoad `ge` |1 | 19 |  |
| quit `ge` |0+ | [C] |  |
| quitWithErrorMessage `ge` |0+ | [C] |  |
| rainbowColor `ge` |3 | 49 |  |
| randomASCIIString `ge` |1 | 1502 |  |
| randomGauss3 `ge` |0 | 642 |  |
| randomState `ge` |1 | 647 |  |
| rapidJsonSerializeTest `ge` |0+ | [C] |  |
| rapidJsonSerialzieTest `ge` |0+ | [C] |  |
| rapidjsonEncode `ge` |0+ | [C] |  |
| rawequal `ge` |0+ | [C] |  |
| rawget `ge` |0+ | [C] |  |
| rawset `ge` |0+ | [C] |  |
| rayCastStartPosEndPos `ge` |0+ | [C] |  |
| readDictJSONTable `ge` |1 | 487 |  |
| readFile `ge` |1 | 890 |  |
| readFiles `ge` |2 | 905 |  |
| registerCoreModule `ge` |1 | 1124 |  |
| reloadTextures `ge` |0+ | [C] |  |
| reloadUI `ge` |0+ | [C] |  |
| removeConsoleVariable `ge` |0+ | [C] |  |
| removePrefab `ge` |1 | 804 |  |
| removeRole `ge` |0 | 2715 |  |
| removeVehicleRole `ge` |0 | 2716 |  |
| replace_char `ge` |3 | 211 |  |
| replaySpawnVehicle `ge` |2 | 794 |  |
| replayStartLevel `ge` |1 | 802 |  |
| replayStateChanged `ge` |0+ | 779 |  |
| requestAnnotatedBuffers `ge` |0+ | [C] |  |
| requestGeluaProfile `ge` |0 | 502 |  |
| require `ge` |0+ | [C] |  |
| require_optional `ge` |1 | 8 |  |
| rerequire `ge` |1 | 21 |  |
| rescale `ge` |5 | 1189 |  |
| resetGameplay `ge` |1 | 882 |  |
| resetLightManager `ge` |0+ | [C] |  |
| returnToMainMenu `ge` |0 | 488 |  |
| round `ge` |1 | 1159 |  |
| roundNear `ge` |2 | 1164 |  |
| rpad `ge` |3 | 170 |  |
| sanitizePath `ge` |0+ | [C] |  |
| sanitizeVehicleSpawnOptions `ge` |2 | 1175 |  |
| saveIni `ge` |2 | 1157 |  |
| scenetree.decalRoadContainsPoint `ge` |2 | 28 |  |
| scenetree.findClassObjects `ge` |1 | 33 |  |
| scenetree.findObject `ge` |1 | 11 |  |
| scenetree.findObjectById `ge` |1 | 16 |  |
| scenetree.findSubClassObjects `ge` |1 | 41 |  |
| scenetree.getAllObjects `ge` |0 | 49 |  |
| scenetree.objectExists `ge` |1 | 20 |  |
| scenetree.objectExistsById `ge` |1 | 24 |  |
| scenetree_test_fields `ge` |0 | 134 |  |
| scenetree_tests `ge` |0 | 86 |  |
| select `ge` |0+ | [C] |  |
| sendUIModules `ge` |0 | 886 |  |
| serialize `ge` |1 | 1264 |  |
| serializeJsonToFile `ge` |5 | 460 |  |
| serializePackages `ge` |1 | 1000 |  |
| serializeWorkBuffer `ge` |1 | 1258 |  |
| setAudioChannelsVolume `ge` |1 | 615 |  |
| setCEFFocus `ge` |0 | 1714 |  |
| setCEFTyping `ge` |0+ | [C] |  |
| setCameraFov `ge` |1 | 180 |  |
| setCameraFovDeg `ge` |1 | 164 |  |
| setCameraFovDegC `ge` |0+ | [C] |  |
| setCameraFovRad `ge` |1 | 174 |  |
| setCameraPosC `ge` |0+ | [C] |  |
| setCameraPosRot `ge` |7 | 159 |  |
| setCameraPosRotFovNearClipC `ge` |0+ | [C] |  |
| setCameraRotC `ge` |0+ | [C] |  |
| setClipboard `ge` |0+ | [C] |  |
| setConsoleVariable `ge` |0+ | [C] |  |
| setDifference `ge` |2 | 529 |  |
| setEqual `ge` |2 | 507 |  |
| setExtensionUnloadMode `ge` |2 | 406 |  |
| setGroundCoverScale `ge` |0+ | [C] |  |
| setLightManager `ge` |0+ | [C] |  |
| setLogMode `ge` |0+ | [C] |  |
| setMissionFilename `ge` |0+ | [C] |  |
| setMissionPath `ge` |0+ | [C] |  |
| setMouseCursorPosition `ge` |0+ | [C] |  |
| setPlayerNickPrefix `ge` |3 | 329 |  |
| setPlayerNickSuffix `ge` |3 | 346 |  |
| setPlayerRole `ge` |1+ | 406 |  |
| setRandomSeed `ge` |0+ | [C] |  |
| setRenderWorldMain `ge` |0+ | [C] |  |
| setTSVar `ge` |0+ | [C] |  |
| setTimeOfDay `ge` |1 | 684 |  |
| setUnion `ge` |2 | 517 |  |
| setVehicleProperty `ge` |3 | 854 |  |
| setVehicleRole `ge` |1+ | 437 |  |
| setWindowTitle `ge` |0+ | [C] |  |
| setfenv `ge` |0+ | [C] |  |
| setmetatable `ge` |0+ | [C] |  |
| sfxCreateDevice `ge` |0+ | [C] |  |
| shallowcopy `ge` |1 | 815 |  |
| showCefDevConsole `ge` |0+ | [C] |  |
| shuffledPairs `ge` |2 | 1438 |  |
| shutdown `ge` |0+ | [C] |  |
| sigmoid1 `ge` |2 | 1245 |  |
| sign `ge` |1 | 1134 |  |
| sign2 `ge` |1 | 1129 |  |
| signApply `ge` |2 | 1141 |  |
| simObjectExists `ge` |0+ | [C] |  |
| simpleDebugText3d `ge` |5 | 1471 |  |
| simpletrace `ge` |1 | 223 |  |
| simpletraces `ge` |1 | 208 |  |
| sleep `ge` |0+ | [C] |  |
| smootherstep `ge` |1 | 1207 |  |
| smootheststep `ge` |1 | 1211 |  |
| smoothmax `ge` |3 | 1222 |  |
| smoothmin `ge` |3 | 1216 |  |
| smoothstep `ge` |1 | 1202 |  |
| sortedPairs `ge` |3 | 1421 |  |
| spaceSeparated4Values `ge` |4 | 1533 |  |
| spawnPrefab `ge` |6 | 741 |  |
| split `ge` |3 | 180 |  |
| square `ge` |1 | 1155 |  |
| startDebugServer `ge` |0+ | [C] |  |
| startExperiment `ge` |0+ | [C] |  |
| stopDebugServer `ge` |0+ | [C] |  |
| stringFormatWorkBuffer `ge` |0+ | 570 |  |
| stringHash `ge` |1 | 236 |  |
| stringReplaceFast `ge` |0+ | [C] |  |
| stringToTable `ge` |2 | 1518 |  |
| tableChooseRandomKey `ge` |1 | 1485 |  |
| tableContains `ge` |2 | 748 |  |
| tableContainsCaseInsensitive `ge` |2 | 753 |  |
| tableDepth `ge` |2 | 792 |  |
| tableEndC `ge` |1 | 726 |  |
| tableFindKey `ge` |2 | 739 |  |
| tableFindRecursion `ge` |1 | 200 |  |
| tableInsertC `ge` |2 | 730 |  |
| tableIsArraySlow `ge` |1 | 583 |  |
| tableIsDict `ge` |1 | 576 |  |
| tableIsEmpty `ge` |1 | 591 |  |
| tableKeys `ge` |2 | 596 |  |
| tableKeysSorted `ge` |2 | 619 |  |
| tableMerge `ge` |2 | 644 |  |
| tableMergeRecursive `ge` |2 | 653 |  |
| tableMergeRecursiveArray `ge` |2 | 665 |  |
| tableReadOnly `ge` |1 | 712 |  |
| tableRoundRobinKey `ge` |2 | 809 |  |
| tableSize `ge` |1 | 696 |  |
| tableSizeC `ge` |1 | 721 |  |
| tableToColor `ge` |1 | 72 |  |
| tableValuesAsLookupDict `ge` |2 | 626 |  |
| testBindings `ge` |0 | 249 |  |
| testCdaeSaveSpeed `ge` |0+ | [C] |  |
| testColladaPerformance `ge` |0+ | [C] |  |
| testColladaSuperCharger `ge` |0+ | [C] |  |
| testGBitmap `ge` |0 | 215 |  |
| testRaycasting `ge` |1 | 1323 |  |
| testSounds `ge` |0 | 623 |  |
| testZIP `ge` |0 | 345 |  |
| test_GE_fields `ge` |0 | 155 |  |
| test_lua `ge` |0 | 878 |  |
| test_prefabv2 `ge` |0 | 1134 |  |
| test_spawn_prefabv2 `ge` |0 | 1228 |  |
| test_spawn_prefabv2_massive `ge` |1 | 1255 |  |
| test_unload_prefabv2 `ge` |0 | 1285 |  |
| the_high_sea_crap_detector `ge` |0 | 1586 |  |
| timeprobe `ge` |1 | 1334 |  |
| timeprobeStart `ge` |0 | 1329 |  |
| toBFloat `ge` |0+ | [C] |  |
| toFloat `ge` |0+ | [C] |  |
| toggleAnnotationVisualize `ge` |1 | 220 |  |
| toggleCEFDevConsole `ge` |0+ | [C] |  |
| toggleDepthViz `ge` |1 | 221 |  |
| toggleLightColorViz `ge` |1 | 223 |  |
| toggleLightSpecularViz `ge` |1 | 224 |  |
| toggleLightVisualizer `ge` |3 | 200 |  |
| toggleNicknames `ge` |0 | 367 |  |
| toggleNormalsViz `ge` |1 | 222 |  |
| togglePerformanceGraph `ge` |0+ | [C] |  |
| tonumber `ge` |0+ | [C] |  |
| tostring `ge` |0+ | [C] |  |
| translate `ge` |0+ | [C] |  |
| translateDistance `ge` |2 | 1442 |  |
| translateLanguage `ge` |0+ | [C] |  |
| translateVelocity `ge` |2 | 1467 |  |
| trim `ge` |1 | 175 |  |
| type `ge` |0+ | [C] |  |
| uiReady `ge` |0 | 619 |  |
| ui_message `ge` |4 | 963 |  |
| unflattenTable `ge` |1 | 1402 |  |
| unloadAutoExtensions `ge` |0 | 391 |  |
| unpack `ge` |0+ | [C] |  |
| unrequire `ge` |1 | 15 |  |
| update `ge` |3 | 582 |  |
| updateFirstFrame `ge` |0 | 565 |  |
| updateLoadingProgress `ge` |2 | 1083 |  |
| updateTSShapeLoadProgressDynamic `ge` |2 | 1100 |  |
| updateTranslations `ge` |0 | 846 |  |
| validateLevelPrefabs `ge` |1 | 166 |  |
| validatePrefabJson `ge` |1 | 151 |  |
| validateVehicleDataColor `ge` |1 | 961 |  |
| validateVehiclePaint `ge` |1 | 930 |  |
| vec3 `ge` |3 | 49 |  |
| vec3toString `ge` |1 | 95 |  |
| vehicleActiveChanged `ge` |2 | 734 |  |
| vehicleDestroyed `ge` |1 | 742 |  |
| vehicleMetallicPaintDataFromColor `ge` |1 | 943 |  |
| vehicleMetallicPaintString `ge` |4 | 956 |  |
| vehicleReset `ge` |1 | 728 |  |
| vehicleSetPositionRotation `ge` |8 | 456 |  |
| vehicleSpawned `ge` |1 | 690 |  |
| vehicleSwitched `ge` |3 | 708 |  |
| vehiclesIterator `ge` |1 | 538 |  |
| writeFile `ge` |2 | 950 |  |
| xpcall `ge` |0+ | [C] |  |

## GE Object Methods

| Function | VM |
|---|---|
| FS:closeDirectory | ge |
| FS:convertLinkFileToTargetCopy | ge |
| FS:copyFile | ge |
| FS:deleteAssetFileForLinkFile | ge |
| FS:directoryCreate | ge |
| FS:directoryExists | ge |
| FS:directoryList | ge |
| FS:directoryRemove | ge |
| FS:dumpVfs | ge |
| FS:expandFilename | ge |
| FS:fileExists | ge |
| FS:fileSize | ge |
| FS:findFiles | ge |
| FS:findFilesByPattern | ge |
| FS:findFilesByRootPattern | ge |
| FS:findHighestNumberedFolder | ge |
| FS:findLinkFiles | ge |
| FS:findOverrides | ge |
| FS:folderCleanup | ge |
| FS:getFileRealPath | ge |
| FS:getGamePath | ge |
| FS:getHashFileAlgorithmId | ge |
| FS:getLastError | ge |
| FS:getOriginArchivePathRelative | ge |
| FS:getUserPath | ge |
| FS:hashFile | ge |
| FS:hashFileSHA1 | ge |
| FS:isGamePathCaseSensitive | ge |
| FS:isLinkFile | ge |
| FS:isMounted | ge |
| FS:isPathInCaseSensitiveMount | ge |
| FS:isUserPathCaseSensitive | ge |
| FS:listOverrides | ge |
| FS:mount | ge |
| FS:mountList | ge |
| FS:native2Virtual | ge |
| FS:openDirectory | ge |
| FS:openFile | ge |
| FS:remove | ge |
| FS:removeFile | ge |
| FS:renameFile | ge |
| FS:stat | ge |
| FS:triggerFilesChanged | ge |
| FS:unmount | ge |
| FS:updateDirectoryWatchers | ge |
| FS:virtual2Native | ge |
| Lua:dumpStack | ge |
| Lua:exec | ge |
| Lua:findObjectByIdAsTable | ge |
| Lua:findObjectByNameAsTable | ge |
| Lua:findObjectsByClassAsTable | ge |
| Lua:findObjectsBySubClassAsTable | ge |
| Lua:getAllObjects | ge |
| Lua:getDevLogStats | ge |
| Lua:getFunctionOpcode | ge |
| Lua:getOSLanguage | ge |
| Lua:getSelectedLanguage | ge |
| Lua:getSteamLanguage | ge |
| Lua:log | ge |
| Lua:queueLuaCommand | ge |
| Lua:reloadLanguages | ge |
| Lua:requestReload | ge |
| Lua:saveFunctionOpcode | ge |
| be:addFirewallException | ge |
| be:addObject | ge |
| be:castRay | ge |
| be:decalManagerLoad | ge |
| be:deleteAllObjects | ge |
| be:deleteDataBlocks | ge |
| be:enterNextVehicle | ge |
| be:enterVehicle | ge |
| be:executeJS | ge |
| be:exitVehicle | ge |
| be:getCameraRay | ge |
| be:getEnabled | ge |
| be:getEngineStream | ge |
| be:getEnterableObjectCount | ge |
| be:getFFBConfig | ge |
| be:getFileStream | ge |
| be:getGroundModel | ge |
| be:getGroundModelByID | ge |
| be:getGroundModelCount | ge |
| be:getGroundModelIDByName | ge |
| be:getObject | ge |
| be:getObjectActive | ge |
| be:getObjectByID | ge |
| be:getObjectCount | ge |
| be:getObjectOOBBAxisNormalizedXYZ | ge |
| be:getObjectOOBBCenterXYZ | ge |
| be:getObjectOOBBHalfAxisXYZ | ge |
| be:getObjectOOBBHalfExtentsXYZ | ge |
| be:getObjectOOBBIsInitialized | ge |
| be:getObjectPositionXYZ | ge |
| be:getObjectVelocityXYZ | ge |
| be:getPhysicsDeterministic | ge |
| be:getPhysicsRunning | ge |
| be:getPhysicsSpeedFactor | ge |
| be:getPlayerVehicle | ge |
| be:getPlayerVehicleID | ge |
| be:getSimulationTimeScale | ge |
| be:getSlot | ge |
| be:getSlotCount | ge |
| be:getSurfaceHeightBelow | ge |
| be:getTerrainDrivability | ge |
| be:getUpdateUIflag | ge |
| be:instabilityDetected | ge |
| be:isBlockedByFirewall | ge |
| be:loadTireMarks | ge |
| be:makeRelativePath | ge |
| be:physicsDestroyWorld | ge |
| be:physicsInitWorld | ge |
| be:physicsStartSimulation | ge |
| be:physicsStep | ge |
| be:physicsStopSimulation | ge |
| be:queueAllObjectLua | ge |
| be:queueAllObjectLuaExcept | ge |
| be:queueHookJS | ge |
| be:queueJS | ge |
| be:queueLuaCommand | ge |
| be:queueObjectFastLua | ge |
| be:queueObjectLua | ge |
| be:queueStreamDataJS | ge |
| be:reloadAllVehicles | ge |
| be:reloadCollision | ge |
| be:reloadStaticCollision | ge |
| be:reloadVehicle | ge |
| be:resetGroundModels | ge |
| be:resetTireMarks | ge |
| be:resetVehicle | ge |
| be:saveTireMarks | ge |
| be:sendHIDPacket | ge |
| be:sendToMailbox | ge |
| be:setDynamicCollisionEnabled | ge |
| be:setEnabled | ge |
| be:setFunctionRedirectionEnabled | ge |
| be:setGroundModel | ge |
| be:setPhysicsDeterministic | ge |
| be:setPhysicsRunning | ge |
| be:setPhysicsSpeedFactor | ge |
| be:setSeaLevelTemperatureK | ge |
| be:setSimulationTimeScale | ge |
| be:setThreadingLayout | ge |
| be:sfxGetAvailableDevices | ge |
| be:spawnObject | ge |
| be:spawnObject2 | ge |
| be:toggleEnabled | ge |
| be:triggerRaycastClosest | ge |
| be:update | ge |
| debugDrawer:assignFieldsFromObject | ge |
| debugDrawer:clone | ge |
| debugDrawer:currentRenderViewMaskAdd | ge |
| debugDrawer:currentRenderViewMaskClear | ge |
| debugDrawer:currentRenderViewMaskRemove | ge |
| debugDrawer:currentRenderViewMaskSet | ge |
| debugDrawer:decRefCount | ge |
| debugDrawer:delete | ge |
| debugDrawer:deleteObject | ge |
| debugDrawer:deletePersistentId | ge |
| debugDrawer:drawArrow | ge |
| debugDrawer:drawAxisGizmo | ge |
| debugDrawer:drawBox | ge |
| debugDrawer:drawCircle | ge |
| debugDrawer:drawCylinder | ge |
| debugDrawer:drawDot | ge |
| debugDrawer:drawFrustum | ge |
| debugDrawer:drawLine | ge |
| debugDrawer:drawLineInstance | ge |
| debugDrawer:drawQuadSolid | ge |
| debugDrawer:drawSphere | ge |
| debugDrawer:drawSphereOcclusionQuery | ge |
| debugDrawer:drawSquarePrism | ge |
| debugDrawer:drawText | ge |
| debugDrawer:drawTextAdvanced | ge |
| debugDrawer:drawTri | ge |
| debugDrawer:drawTriSolid | ge |
| debugDrawer:dump | ge |
| debugDrawer:dumpGroupHierarchy | ge |
| debugDrawer:generatePersistentId | ge |
| debugDrawer:getClassDocString | ge |
| debugDrawer:getClassName | ge |
| debugDrawer:getDeclarationLine | ge |
| debugDrawer:getDrawingEnabled | ge |
| debugDrawer:getDynDataFieldbyName | ge |
| debugDrawer:getDynamicFields | ge |
| debugDrawer:getField | ge |
| debugDrawer:getFieldInfo | ge |
| debugDrawer:getFieldList | ge |
| debugDrawer:getFields | ge |
| debugDrawer:getFieldsForEditor | ge |
| debugDrawer:getFileName | ge |
| debugDrawer:getFreezingEnabled | ge |
| debugDrawer:getGeneratedDisplayName | ge |
| debugDrawer:getGroup | ge |
| debugDrawer:getID | ge |
| debugDrawer:getId | ge |
| debugDrawer:getInternalName | ge |
| debugDrawer:getName | ge |
| debugDrawer:getOrCreatePersistentID | ge |
| debugDrawer:getStaticDataFieldbyIndex | ge |
| debugDrawer:getStaticDataFieldbyName | ge |
| debugDrawer:incRefCount | ge |
| debugDrawer:inheritParentFields | ge |
| debugDrawer:inspectUpdate | ge |
| debugDrawer:isChildOfGroup | ge |
| debugDrawer:isEditorDirty | ge |
| debugDrawer:isHidden | ge |
| debugDrawer:isLocked | ge |
| debugDrawer:isNameChangeAllowed | ge |
| debugDrawer:isSelected | ge |
| debugDrawer:isSubClassOf | ge |
| debugDrawer:onEditorDisable | ge |
| debugDrawer:onEditorEnable | ge |
| debugDrawer:postApply | ge |
| debugDrawer:preApply | ge |
| debugDrawer:registerObject | ge |
| debugDrawer:registerObjectWithIdSuffix | ge |
| debugDrawer:renderGroundModelDebug | ge |
| debugDrawer:renderStaticColCounter | ge |
| debugDrawer:renderStaticColDebug | ge |
| debugDrawer:save | ge |
| debugDrawer:serialize | ge |
| debugDrawer:serializeForEditor | ge |
| debugDrawer:serializeToDirectories | ge |
| debugDrawer:serializeToNameDictFile | ge |
| debugDrawer:setCanSave | ge |
| debugDrawer:setDeclarationLine | ge |
| debugDrawer:setDrawingEnabled | ge |
| debugDrawer:setDynDataFieldbyName | ge |
| debugDrawer:setEditorDirty | ge |
| debugDrawer:setEditorOnly | ge |
| debugDrawer:setField | ge |
| debugDrawer:setFileName | ge |
| debugDrawer:setFreezingEnabled | ge |
| debugDrawer:setHidden | ge |
| debugDrawer:setInternalName | ge |
| debugDrawer:setIsSelected | ge |
| debugDrawer:setLastTTL | ge |
| debugDrawer:setLastZTest | ge |
| debugDrawer:setLocked | ge |
| debugDrawer:setName | ge |
| debugDrawer:setNameChangeAllowed | ge |
| debugDrawer:setSelected | ge |
| debugDrawer:setSolidTriCulling | ge |
| debugDrawer:setStaticDataFieldbyIndex | ge |
| debugDrawer:setStaticDataFieldbyName | ge |
| debugDrawer:toggleDrawing | ge |
| debugDrawer:toggleFreeze | ge |
| debugDrawer:unregisterObject | ge |
| veh:addFlexmesh | ge |
| veh:addMirror | ge |
| veh:addPhysicsTriangle | ge |
| veh:addProp | ge |
| veh:addResourceSearchPath | ge |
| veh:addTrigger | ge |
| veh:applyClusterVelocityScaleAdd | ge |
| veh:applyExternalSpring | ge |
| veh:applyForceTorque | ge |
| veh:applyForceTorqueStaticPoint | ge |
| veh:assignFieldsFromObject | ge |
| veh:autoplace | ge |
| veh:canFloatAboveGround | ge |
| veh:changeMaterial | ge |
| veh:checkRayCast | ge |
| veh:clearResourceSearchPath | ge |
| veh:clone | ge |
| veh:coupleNodeWith | ge |
| veh:createUITexture | ge |
| veh:decRefCount | ge |
| veh:delete | ge |
| veh:deleteObject | ge |
| veh:deletePersistentId | ge |
| veh:destroyUITexture | ge |
| veh:disableCollision | ge |
| veh:dump | ge |
| veh:dumpCEFTexture | ge |
| veh:dumpGroupHierarchy | ge |
| veh:dumpMeshVisibility | ge |
| veh:enableCollision | ge |
| veh:engineSoundInit | ge |
| veh:engineSoundNodes | ge |
| veh:engineSoundParameter | ge |
| veh:engineSoundParameterList | ge |
| veh:engineSoundUpdate | ge |
| veh:exportColladaMesh | ge |
| veh:finishConstructionGESide | ge |
| veh:generatePersistentId | ge |
| veh:getActive | ge |
| veh:getAnchorNames | ge |
| veh:getBBCenter | ge |
| veh:getBSphereCenter | ge |
| veh:getBSphereRadius | ge |
| veh:getBrakingDistance | ge |
| veh:getClassDocString | ge |
| veh:getClassName | ge |
| veh:getClusterRotationSlow | ge |
| veh:getColorFTable | ge |
| veh:getConsoleOpenUITexture | ge |
| veh:getCornerPosition | ge |
| veh:getDataBlock | ge |
| veh:getDecalProjectionShape | ge |
| veh:getDeclarationLine | ge |
| veh:getDirectionVector | ge |
| veh:getDirectionVectorUp | ge |
| veh:getDirectionVectorUpXYZ | ge |
| veh:getDirectionVectorXYZ | ge |
| veh:getDynDataFieldbyName | ge |
| veh:getDynamicFields | ge |
| veh:getEulerRotation | ge |
| veh:getEyePoint | ge |
| veh:getEyeTransform | ge |
| veh:getEyeTransformF | ge |
| veh:getEyeVector | ge |
| veh:getFFBID | ge |
| veh:getField | ge |
| veh:getFieldInfo | ge |
| veh:getFieldList | ge |
| veh:getFields | ge |
| veh:getFieldsForEditor | ge |
| veh:getFileName | ge |
| veh:getFirstMaterialName | ge |
| veh:getFlexmesh | ge |
| veh:getForwardVector | ge |
| veh:getGeneratedDisplayName | ge |
| veh:getGroup | ge |
| veh:getHIDDeviceName | ge |
| veh:getID | ge |
| veh:getId | ge |
| veh:getInitialHeight | ge |
| veh:getInitialLength | ge |
| veh:getInitialNodeCollision | ge |
| veh:getInitialNodePosition | ge |
| veh:getInitialWidth | ge |
| veh:getInteractiveDistance | ge |
| veh:getInternalName | ge |
| veh:getJBeamFilename | ge |
| veh:getLookAtPoint | ge |
| veh:getMaterialMapping | ge |
| veh:getMaterialNames | ge |
| veh:getMeshAlpha | ge |
| veh:getMeshCacheRebuildSummary | ge |
| veh:getMeshColor | ge |
| veh:getMeshMaterialNames | ge |
| veh:getMeshNames | ge |
| veh:getMeshPaintData | ge |
| veh:getMeshesContainingMaterial | ge |
| veh:getMeshsMaterialsTbl | ge |
| veh:getMetallicPaintData | ge |
| veh:getMirror | ge |
| veh:getModelFile | ge |
| veh:getName | ge |
| veh:getNodeAbsPosition | ge |
| veh:getNodeAbsPositionXYZ | ge |
| veh:getNodeClusterGeneration | ge |
| veh:getNodeClusterId | ge |
| veh:getNodeClusters | ge |
| veh:getNodeCount | ge |
| veh:getNodePosition | ge |
| veh:getNodePositionXYZ | ge |
| veh:getNodeVelocity | ge |
| veh:getNodeVelocityXYZ | ge |
| veh:getNodeWheelId | ge |
| veh:getObjBox | ge |
| veh:getObjectBox | ge |
| veh:getOrCreatePersistentID | ge |
| veh:getPath | ge |
| veh:getPhysicsEnabled | ge |
| veh:getPosition | ge |
| veh:getPositionXYZ | ge |
| veh:getProp | ge |
| veh:getRefNodeAbsPosition | ge |
| veh:getRefNodeAbsPositionXYZ | ge |
| veh:getRefNodeId | ge |
| veh:getRefNodeMatrix | ge |
| veh:getRefNodeRotation | ge |
| veh:getRenderTransform | ge |
| veh:getRootNodeFlexmesh | ge |
| veh:getRotation | ge |
| veh:getScale | ge |
| veh:getSectionBeamDamage | ge |
| veh:getSectionCollisionDamage | ge |
| veh:getSectionDamageSum | ge |
| veh:getSpawnAABBRadius | ge |
| veh:getSpawnLocalAABB | ge |
| veh:getSpawnWorldOOBB | ge |
| veh:getSpawnWorldOOBBRearPoint | ge |
| veh:getStaticDataFieldbyIndex | ge |
| veh:getStaticDataFieldbyName | ge |
| veh:getSwitchableMaterial | ge |
| veh:getTargetCount | ge |
| veh:getTargetName | ge |
| veh:getTransform | ge |
| veh:getTransformF | ge |
| veh:getTrigger | ge |
| veh:getType | ge |
| veh:getVelocity | ge |
| veh:getVelocityXYZ | ge |
| veh:getViewportFillingCameraDistance | ge |
| veh:getWheelAxisNodes | ge |
| veh:getWheelCount | ge |
| veh:getWorldBox | ge |
| veh:getWorldBoxCenter | ge |
| veh:getWorldTransform | ge |
| veh:honkHorn | ge |
| veh:incRefCount | ge |
| veh:inheritParentFields | ge |
| veh:initialNodePositionsDone | ge |
| veh:inspectUpdate | ge |
| veh:isChildOfGroup | ge |
| veh:isEditorDirty | ge |
| veh:isGlobalBounds | ge |
| veh:isHidden | ge |
| veh:isLocked | ge |
| veh:isMateriaDiffuse | ge |
| veh:isNameChangeAllowed | ge |
| veh:isPlayerControlled | ge |
| veh:isReady | ge |
| veh:isRenderEnabled | ge |
| veh:isRenderMaterialsReady | ge |
| veh:isSelected | ge |
| veh:isSelectionEnabled | ge |
| veh:isSubClassOf | ge |
| veh:isUITexture | ge |
| veh:lua | ge |
| veh:meshCommit | ge |
| veh:modifyRespawnValues | ge |
| veh:onEditorDisable | ge |
| veh:onEditorEnable | ge |
| veh:onRefresh | ge |
| veh:onSerialize | ge |
| veh:onUpdate | ge |
| veh:openConsoleUITexture | ge |
| veh:pauseThread | ge |
| veh:playAudio | ge |
| veh:playThread | ge |
| veh:postApply | ge |
| veh:preApply | ge |
| veh:queueJSUITexture | ge |
| veh:queueLuaCommand | ge |
| veh:registerObject | ge |
| veh:registerObjectWithIdSuffix | ge |
| veh:reload | ge |
| veh:reloadAP | ge |
| veh:renderCameraToMaterial | ge |
| veh:requestMesh | ge |
| veh:requestMeshBegin | ge |
| veh:requestMeshCommit | ge |
| veh:requestReload | ge |
| veh:requestReset | ge |
| veh:reset | ge |
| veh:resetBrokenFlexMesh | ge |
| veh:resetElectrics | ge |
| veh:resetMaterials | ge |
| veh:respawn | ge |
| veh:save | ge |
| veh:serialize | ge |
| veh:serializeForEditor | ge |
| veh:serializeToDirectories | ge |
| veh:serializeToNameDictFile | ge |
| veh:setActive | ge |
| veh:setAiMode | ge |
| veh:setAiParameters | ge |
| veh:setAllMeshesHidden | ge |
| veh:setCanFloatAboveGround | ge |
| veh:setCanSave | ge |
| veh:setClusterPosRelRot | ge |
| veh:setColor | ge |
| veh:setDataBlock | ge |
| veh:setDeclarationLine | ge |
| veh:setDynDataFieldbyName | ge |
| veh:setEditorDirty | ge |
| veh:setEditorOnly | ge |
| veh:setField | ge |
| veh:setFileName | ge |
| veh:setFlexmeshDebugMode | ge |
| veh:setHidden | ge |
| veh:setInitialNodeCollision | ge |
| veh:setInitialNodePosition | ge |
| veh:setInitialNodePositionCount | ge |
| veh:setInternalName | ge |
| veh:setIsSelected | ge |
| veh:setLocked | ge |
| veh:setMaterialEmissiveFactor | ge |
| veh:setMeshAlpha | ge |
| veh:setMeshAnnotationColor | ge |
| veh:setMeshColor | ge |
| veh:setMeshDetailFactor | ge |
| veh:setMeshHidden | ge |
| veh:setMeshPaintData | ge |
| veh:setMetallicPaintData | ge |
| veh:setName | ge |
| veh:setNameChangeAllowed | ge |
| veh:setOriginalTransform | ge |
| veh:setPosRot | ge |
| veh:setPosition | ge |
| veh:setPositionNoPhysicsReset | ge |
| veh:setPositionRotation | ge |
| veh:setPositionXYZ | ge |
| veh:setRefNodes | ge |
| veh:setRenderEnabled | ge |
| veh:setRole | ge |
| veh:setScale | ge |
| veh:setScaleXYZ | ge |
| veh:setSelected | ge |
| veh:setSelectionEnabled | ge |
| veh:setShapeName | ge |
| veh:setSkin | ge |
| veh:setSkinName | ge |
| veh:setSpawnLocalAABB | ge |
| veh:setStaticDataFieldbyIndex | ge |
| veh:setStaticDataFieldbyName | ge |
| veh:setTaggedTexture | ge |
| veh:setTextureSet | ge |
| veh:setThreadDir | ge |
| veh:setThreadPosition | ge |
| veh:setThreadTimeScale | ge |
| veh:setTransform | ge |
| veh:setTransformF | ge |
| veh:setVehicleTransform | ge |
| veh:setVelocity | ge |
| veh:showEngineDirection | ge |
| veh:spawnObject | ge |
| veh:spawnObjectWithPosRot | ge |
| veh:spawnObjectWithTransform | ge |
| veh:spawnPhysics | ge |
| veh:stopAudio | ge |
| veh:stopThread | ge |
| veh:switchMaterial | ge |
| veh:toggleEditMode | ge |
| veh:tryRespawn | ge |
| veh:unregisterObject | ge |
| veh:useSiren | ge |

## VLUA API

| Function | Params | Line | Returns |
|---|---|---|---|
| advancedwheeldebug.registerDebugUser `vlua` | 2 | 17 |  |
| aeroDebug.disable `vlua` | 0 | 122 |  |
| aeroDebug.enable `vlua` | 0 | 112 |  |
| aeroDebug.getAeroData `vlua` | 0 | 101 |  |
| aeroDebug.setWheelNames `vlua` | 4 | 105 |  |
| ai.debugDraw `vlua` |0 | 41 |  |
| ai.driveInLane `vlua` | 1 | 6534 |  |
| ai.driveUsingPath `vlua` | 1 | 6702 |  |
| ai.dumpCurrentRoute `vlua` | 0 | 6901 |  |
| ai.dumpParameters `vlua` | 0 | 401 |  |
| ai.getEdgeLaneConfig `vlua` | 2 | 1257 |  |
| ai.getParameters `vlua` | 0 | 6905 |  |
| ai.getState `vlua` | 0 | 294 |  |
| ai.isDriving `vlua` | 0 | 6963 |  |
| ai.laneChange `vlua` | 3 | 1169 |  |
| ai.onDeserialized `vlua` | 1 | 6896 |  |
| ai.reset `vlua` | 0 | 6648 |  |
| ai.resetLearning `vlua` | 0 | 6666 |  |
| ai.roadNaturalContinuation `vlua` | 2 | 1280 |  |
| ai.scriptState `vlua` | 0 | 6946 |  |
| ai.scriptStop `vlua` | 0+ | 6939 |  |
| ai.setAggression `vlua` | 1 | 325 |  |
| ai.setAggressionMode `vlua` | 1 | 331 |  |
| ai.setAvoidCars `vlua` | 1 | 6524 |  |
| ai.setCutOffDrivability `vlua` | 1 | 6891 |  |
| ai.setMode `vlua` | 1 | 6566 |  |
| ai.setParameters `vlua` | 1 | 397 |  |
| ai.setPath `vlua` | 1 | 6697 |  |
| ai.setPullOver `vlua` | 1 | 4819 |  |
| ai.setRacing `vlua` | 1 | 2146 |  |
| ai.setRecoverOnCrash `vlua` | 1 | 6634 |  |
| ai.setScriptDebugMode `vlua` | 1 | 6951 |  |
| ai.setSpeed `vlua` | 1 | 304 |  |
| ai.setSpeedMode `vlua` | 1 | 308 |  |
| ai.setSpeedProfileMode `vlua` | 1 | 2025 |  |
| ai.setState `vlua` | 1 | 6669 |  |
| ai.setStopPoint `vlua` | 3 | 1199 |  |
| ai.setTarget `vlua` | 1 | 6691 |  |
| ai.setTargetObjectID `vlua` | 1 | 407 |  |
| ai.setTractionModel `vlua` | 1 | 2056 |  |
| ai.setTrafficFilter `vlua` | 1 | 2156 |  |
| ai.setVdraw `vlua` | 1 | 2165 |  |
| ai.setVehicleDebugMode `vlua` | 1 | 6545 |  |
| ai.spanMap `vlua` | 1 | 6885 |  |
| ai.startFollowing `vlua` | 0+ | 6924 |  |
| ai.startRecording `vlua` | 1 | 6909 |  |
| ai.startStopDataLog `vlua` | 1 | 223 |  |
| ai.stateChanged `vlua` | 0 | 298 |  |
| ai.stopFollowing `vlua` | 0+ | 6939 |  |
| ai.stopRecording `vlua` | 0 | 6916 |  |
| ai.toggleTrafficMode `vlua` | 0 | 6638 |  |
| ai.updateGFX `vlua` |0 | 41 |  |
| api.onExtensionLoaded `vlua` | 0 | 108 |  |
| backwardsCompatibility.init `vlua` | 0 | 393 |  |
| bdebug.beamBroke `vlua` |0 | 41 |  |
| bdebug.clearAllNodeDebugText `vlua` | 0 | 229 |  |
| bdebug.clearNodeDebugText `vlua` | 2 | 200 |  |
| bdebug.clearTypeNodeDebugText `vlua` | 1 | 209 |  |
| bdebug.cogChange `vlua` | 1 | 150 |  |
| bdebug.colTrisModeChange `vlua` | 1 | 145 |  |
| bdebug.debugDraw `vlua` |0 | 41 |  |
| bdebug.init `vlua` | 0 | 250 |  |
| bdebug.isEnabled `vlua` | 0 | 107 | boolean |
| bdebug.nodeCollision `vlua` |0 | 41 |  |
| bdebug.nodedebugtextModeChange `vlua` | 1 | 135 |  |
| bdebug.nodetextModeChange `vlua` | 1 | 125 |  |
| bdebug.nodevisModeChange `vlua` | 1 | 130 |  |
| bdebug.onDeserialize `vlua` | 1 | 244 |  |
| bdebug.onPlayersChanged `vlua` |0 | 41 |  |
| bdebug.onSerialize `vlua` | 0 | 238 | table |
| bdebug.recieveViewportSize `vlua` | 0 | 253 |  |
| bdebug.requestDrawnBeamsGE `vlua` | 1 | 102 |  |
| bdebug.requestDrawnNodesGE `vlua` | 1 | 96 |  |
| bdebug.requestState `vlua` | 0 | 85 |  |
| bdebug.reset `vlua` |0 | 41 |  |
| bdebug.resetModes `vlua` | 0 | 155 |  |
| bdebug.setEnabled `vlua` | 1 | 111 |  |
| bdebug.setNodeDebugText `vlua` | 3 | 172 |  |
| bdebug.setPartsSelected `vlua` | 1 | 164 |  |
| bdebug.setPartsSelected `vlua` | 1 | 164 |  |
| bdebug.setState `vlua` | 3 | 90 |  |
| bdebug.skeletonModeChange `vlua` | 1 | 140 |  |
| bdebug.toggleEnabled `vlua` | 0 | 120 |  |
| bdebugImpl.clearAllNodeDebugText `vlua` | 0 | 2723 |  |
| bdebugImpl.clearNodeDebugText `vlua` | 2 | 2692 |  |
| bdebugImpl.clearTypeNodeDebugText `vlua` | 1 | 2702 |  |
| bdebugImpl.cogChange `vlua` | 1 | 2783 |  |
| bdebugImpl.colTrisModeChange `vlua` | 1 | 2776 |  |
| bdebugImpl.init `vlua` | 2 | 2796 |  |
| bdebugImpl.isEnabled `vlua` | 0 | 2730 |  |
| bdebugImpl.nodedebugtextModeChange `vlua` | 1 | 2762 |  |
| bdebugImpl.nodetextModeChange `vlua` | 1 | 2748 |  |
| bdebugImpl.nodevisModeChange `vlua` | 1 | 2755 |  |
| bdebugImpl.recieveViewportSize `vlua` | 2 | 2527 |  |
| bdebugImpl.requestDrawnBeamsGE `vlua` | 1 | 2601 |  |
| bdebugImpl.requestDrawnNodesGE `vlua` | 1 | 2595 |  |
| bdebugImpl.requestState `vlua` | 0 | 2519 |  |
| bdebugImpl.reset `vlua` | 0 | 2819 |  |
| bdebugImpl.resetModes `vlua` | 0 | 2790 |  |
| bdebugImpl.setEnabled `vlua` | 1 | 2734 |  |
| bdebugImpl.setNodeDebugText `vlua` | 3 | 2659 |  |
| bdebugImpl.setPartsSelected `vlua` | 1 | 2651 |  |
| bdebugImpl.setState `vlua` | 3 | 2612 |  |
| bdebugImpl.skeletonModeChange `vlua` | 1 | 2769 |  |
| bdebugImpl.toggleEnabled `vlua` | 0 | 2743 |  |
| beamstate.activateAutoCoupling `vlua` | 1 | 245 |  |
| beamstate.addDamage `vlua` | 1 | 1388 |  |
| beamstate.addPlanet `vlua` | 4 | 624 |  |
| beamstate.attachCouplers `vlua` | 1 | 297 |  |
| beamstate.beamBroken `vlua` | 2 | 800 |  |
| beamstate.breakAllBreakgroups `vlua` | 0 | 1318 |  |
| beamstate.breakBreakGroup `vlua` | 1 | 166 |  |
| beamstate.breakHinges `vlua` | 0 | 1330 |  |
| beamstate.couplerExists `vlua` | 1 | 306 |  |
| beamstate.couplerFound `vlua` | 3 | 374 |  |
| beamstate.debugDraw `vlua` |0 | 41 |  |
| beamstate.deflateRandomTire `vlua` | 0 | 1359 |  |
| beamstate.deflateTire `vlua` | 1 | 517 |  |
| beamstate.deflateTires `vlua` | 0 | 1353 |  |
| beamstate.delPlanet `vlua` | 3 | 614 |  |
| beamstate.detachCouplers `vlua` | 3 | 310 |  |
| beamstate.disableAutoCoupling `vlua` | 0 | 284 |  |
| beamstate.exportCouplerData `vlua` | 2 | 472 |  |
| beamstate.exportPartDamageData `vlua` | 0 | 1529 |  |
| beamstate.getCouplerOffset `vlua` | 1 | 456 |  |
| beamstate.getPartCondition `vlua` | 2 | 103 | multiple |
| beamstate.getPartDamageData `vlua` | 0 | 1516 |  |
| beamstate.getVehicleState `vlua` | 0+ | 1501 | multiple |
| beamstate.hasCouplers `vlua` | 1 | 1409 | boolean |
| beamstate.importCouplerData `vlua` | 2 | 489 |  |
| beamstate.init `vlua` | 0 | 1014 |  |
| beamstate.isPhysicsStepUsed `vlua` | 0 | 1534 |  |
| beamstate.isTriangleBroken `vlua` | 1 | 955 |  |
| beamstate.load `vlua` | 1 | 1458 |  |
| beamstate.onBeamDeformed `vlua` |2 | 1270 |  |
| beamstate.onCouplerAttached `vlua` |5 | 395 |  |
| beamstate.onCouplerDetached `vlua` |3 | 434 |  |
| beamstate.registerExternalCouplerBreakGroup `vlua` | 2 | 769 |  |
| beamstate.requestSkeleton `vlua` | 0 | 1392 |  |
| beamstate.requestSkeletonState `vlua` | 0 | 510 |  |
| beamstate.reset `vlua` | 0 | 1313 |  |
| beamstate.save `vlua` | 1 | 1419 |  |
| beamstate.sendExportCouplerData `vlua` | 3 | 390 |  |
| beamstate.setCouplerVisiblityExternal `vlua` | 2 | 235 |  |
| beamstate.setPartCondition `vlua` | 5 | 68 |  |
| beamstate.setPlanets `vlua` | 1 | 652 |  |
| beamstate.toggleCouplers `vlua` | 4 | 344 |  |
| beamstate.torsionBarBroken `vlua` | 2 | 774 |  |
| beamstate.triggerDeformGroup `vlua` | 1 | 1371 |  |
| beamstate.update `vlua` |0 | 41 |  |
| beamstate.updateGFX `vlua` |1 | 665 |  |
| beamstate.updateRemoteElectrics `vlua` |0 | 41 |  |
| bullettime.get `vlua` | 0 | 13 |  |
| bullettime.requestValue `vlua` | 0 | 25 |  |
| bullettime.reset `vlua` | 0 | 8 |  |
| bullettime.selectPreset `vlua` | 1 | 21 |  |
| bullettime.set `vlua` | 1 | 17 |  |
| bullettime.slowMotion `vlua` | 0 | 8 |  |
| bullettime.update `vlua` | 0 | 8 |  |
| chassisData.requestChassisData `vlua` | 3 | 101 |  |
| controller.beamBroke `vlua` |0 | 41 |  |
| controller.beamDeformed `vlua` |0 | 41 |  |
| controller.cacheAllControllerFunctions `vlua` | 0 | 705 |  |
| controller.debugDraw `vlua` |0 | 41 |  |
| controller.getAllControllers `vlua` | 1 | 220 |  |
| controller.getController `vlua` | 1 | 224 |  |
| controller.getControllerSafe `vlua` | 1 | 228 |  |
| controller.getControllersByType `vlua` | 1 | 251 |  |
| controller.getControllersFromPath `vlua` | 1 | 264 |  |
| controller.getState `vlua` | 0 | 991 |  |
| controller.getStateEvents `vlua` | 0 | 1023 |  |
| controller.init `vlua` | 0 | 425 |  |
| controller.initLastStage `vlua` | 0 | 739 |  |
| controller.initSecondStage `vlua` | 0 | 729 |  |
| controller.initSounds `vlua` | 0 | 749 |  |
| controller.isPhysicsStepUsed `vlua` | 0 | 1027 |  |
| controller.loadControllerExternal `vlua` | 3 | 289 |  |
| controller.nodeCollision `vlua` |0 | 41 |  |
| controller.onCouplerAttached `vlua` |5 | 188 |  |
| controller.onCouplerDetached `vlua` |4 | 194 |  |
| controller.onCouplerFound `vlua` |4 | 182 |  |
| controller.onDeserialize `vlua` | 1 | 957 |  |
| controller.onGameplayEvent `vlua` |1+ | 200 |  |
| controller.onSerialize `vlua` | 0 | 969 |  |
| controller.printDebugMethodCalls `vlua` | 1 | 803 |  |
| controller.publishStateEvent `vlua` | 1+ | 1004 |  |
| controller.registerRelocatedController `vlua` | 2 | 62 |  |
| controller.reset `vlua` | 0 | 759 |  |
| controller.resetLastStage `vlua` | 0 | 781 |  |
| controller.resetSecondStage `vlua` | 0 | 769 |  |
| controller.resetSounds `vlua` | 0 | 793 |  |
| controller.setFreeze `vlua` | 1 | 274 |  |
| controller.setState `vlua` | 1 | 979 |  |
| controller.settingsChanged `vlua` | 0 | 212 |  |
| controller.triggerStateEvent `vlua` | 1+ | 1017 |  |
| controller.unloadControllerExternal `vlua` | 1 | 365 |  |
| controller.update `vlua` |0 | 41 |  |
| controller.updateGFX `vlua` |1 | 113 |  |
| controller.updateSimpleControlButtons `vlua` | 0 | 281 |  |
| controller.updateWheelsIntermediate `vlua` |0 | 41 |  |
| controller_4wd.deserialize `vlua` | 1 | 79 |  |
| controller_4wd.init `vlua` | 1 | 90 |  |
| controller_4wd.initLastStage `vlua` | 1 | 169 |  |
| controller_4wd.serialize `vlua` | 0 | 72 | table |
| controller_4wd.set4WDMode `vlua` | 1 | 66 |  |
| controller_4wd.setRangeMode `vlua` | 1 | 47 |  |
| controller_4wd.toggle4WD `vlua` | 0 | 53 |  |
| controller_4wd.toggleDiffs `vlua` | 0 | 22 |  |
| controller_4wd.toggleRange `vlua` | 0 | 34 |  |
| controller_advancedCouplerControl.detachGroup `vlua` | 0 | 136 |  |
| controller_advancedCouplerControl.getGroupState `vlua` | 0 | 316 |  |
| controller_advancedCouplerControl.init `vlua` | 1 | 350 |  |
| controller_advancedCouplerControl.initSounds `vlua` | 1 | 347 |  |
| controller_advancedCouplerControl.onGameplayEvent `vlua` | 1+ | 313 |  |
| controller_advancedCouplerControl.reset `vlua` | 1 | 329 |  |
| controller_advancedCouplerControl.resetSounds `vlua` | 1 | 326 |  |
| controller_advancedCouplerControl.toggleGroup `vlua` | 0 | 171 |  |
| controller_advancedCouplerControl.toggleGroupConditional `vlua` | 1 | 182 |  |
| controller_advancedCouplerControl.tryAttachGroupImpulse `vlua` | 0 | 111 |  |
| controller_airplaneSurfaces.init `vlua` | 1 | 89 |  |
| controller_airplaneSurfaces.setTrimValue `vlua` | 2 | 83 |  |
| controller_airplaneSurfaces.toggleTrimMode `vlua` | 0 | 73 |  |
| controller_axleLift.init `vlua` | 1 | 72 |  |
| controller_axleLift.setMode `vlua` | 1 | 53 |  |
| controller_axleLift.setParameters `vlua` | 1 | 110 |  |
| controller_axleLift.toggleMode `vlua` | 0 | 68 |  |
| controller_beaconSpin.init `vlua` | 1 | 15 |  |
| controller_beamNavigator.init `vlua` | 1 | 38 |  |
| controller_braking_adaptiveBrakeLights.init `vlua` | 1 | 137 |  |
| controller_braking_adaptiveBrakeLights.reset `vlua` | 0 | 120 |  |
| controller_braking_adaptiveBrakeLights.setParameters `vlua` | 1 | 163 |  |
| controller_braking_brakedDifferentialSteering.init `vlua` | 1 | 37 |  |
| controller_braking_brakedDifferentialSteering.reset `vlua` | 1 | 32 |  |
| controller_braking_brakedDifferentialSteering.updateWheelsIntermediate `vlua` | 1 | 19 |  |
| controller_braking_compressionBrake.changeCompressionBrakeLevel `vlua` | 1 | 25 |  |
| controller_braking_compressionBrake.init `vlua` | 1 | 71 |  |
| controller_braking_compressionBrake.reset `vlua` | 1 | 66 |  |
| controller_braking_compressionBrake.setCompressionBrakeCoef `vlua` | 1 | 20 |  |
| controller_braking_compressionBrake.setCompressionBrakeLevel `vlua` | 1 | 30 |  |
| controller_braking_compressionBrake.toggleCompressionBrakeState `vlua` | 0 | 35 |  |
| controller_braking_hydraulicPumpBrake.beamBroken `vlua` | 2 | 68 |  |
| controller_braking_hydraulicPumpBrake.changeHillAssistCoef `vlua` | 1 | 102 |  |
| controller_braking_hydraulicPumpBrake.init `vlua` | 1 | 129 |  |
| controller_braking_hydraulicPumpBrake.reset `vlua` | 1 | 122 |  |
| controller_braking_hydraulicPumpBrake.setFrontLockOutEnabled `vlua` | 1 | 106 |  |
| controller_braking_hydraulicPumpBrake.setHillAssistCoef `vlua` | 1 | 87 |  |
| controller_braking_hydraulicPumpBrake.toggleFrontLockOutEnabled `vlua` | 0 | 118 |  |
| controller_braking_postCrashBrake.init `vlua` | 1 | 53 |  |
| controller_braking_transbrake.init `vlua` | 1 | 30 |  |
| controller_braking_transbrake.onGameplayEvent `vlua` | 2 | 66 |  |
| controller_braking_transbrake.setTransbrake `vlua` | 1 | 16 |  |
| controller_braking_transbrake.toggleTransbrake `vlua` | 0 | 23 |  |
| controller_bypassDampers.init `vlua` | 1 | 122 |  |
| controller_bypassDampers.initLastStage `vlua` | 0 | 185 |  |
| controller_bypassDampers.initSounds `vlua` | 1 | 111 |  |
| controller_bypassDampers.reset `vlua` | 0 | 108 |  |
| controller_bypassDampers.update `vlua` | 1 | 33 |  |
| controller_controlModes.init `vlua` | 1 | 54 |  |
| controller_controlModes.setControlModeIndex `vlua` | 1 | 33 |  |
| controller_controlModes.setInputValue `vlua` | 2 | 50 |  |
| controller_controlModes.toggleControlMode `vlua` | 1 | 39 |  |
| controller_controllerTemplate.init `vlua` | 1 | 62 |  |
| controller_controllerTemplate.reset `vlua` | 1 | 53 |  |
| controller_couplings_fifthwheel.detachFifthwheel `vlua` | 0 | 62 |  |
| controller_couplings_fifthwheel.init `vlua` | 1 | 231 |  |
| controller_couplings_fifthwheel.initSounds `vlua` | 1 | 224 |  |
| controller_couplings_fifthwheel.isAttached `vlua` | 0 | 200 |  |
| controller_couplings_fifthwheel.kingpinDataCallback `vlua` | 2 | 73 |  |
| controller_couplings_fifthwheel.reset `vlua` | 1 | 210 |  |
| controller_couplings_fifthwheel.setFifthwheelIndicatorVisibility `vlua` | 1 | 51 |  |
| controller_couplings_fifthwheel.toggleFifthwheelIndicatorVisibility `vlua` | 0 | 58 |  |
| controller_couplings_kingpin.init `vlua` | 1 | 40 |  |
| controller_couplings_kingpin.reset `vlua` | 1 | 37 |  |
| controller_couplings_kingpin.sendDataToVehicle `vlua` | 3 | 11 |  |
| controller_couplings_kingpin.setKingpinVisibility `vlua` | 2 | 29 |  |
| controller_dragTimer.init `vlua` | 1 | 91 |  |
| controller_dragTimer.update `vlua` | 1 | 26 |  |
| controller_driveModes.deserialize `vlua` | 1 | 209 |  |
| controller_driveModes.getCurrentDriveModeKey `vlua` | 0 | 180 |  |
| controller_driveModes.getDriveModeData `vlua` | 1 | 186 |  |
| controller_driveModes.init `vlua` | 1 | 250 |  |
| controller_driveModes.initLastStage `vlua` | 1 | 361 |  |
| controller_driveModes.nextDriveMode `vlua` | 0 | 162 |  |
| controller_driveModes.previousDriveMode `vlua` | 0 | 171 |  |
| controller_driveModes.reset `vlua` | 1 | 192 |  |
| controller_driveModes.resetLastStage `vlua` | 0 | 197 |  |
| controller_driveModes.serialize `vlua` | 0 | 203 |  |
| controller_driveModes.setDriveMode `vlua` | 1 | 145 |  |
| controller_driveModes.setSimpleControlButton `vlua` | 8 | 64 |  |
| controller_driveModes.updateSimpleControlButtons `vlua` | 0 | 83 |  |
| controller_drivingDynamics_CMU.applyParameter `vlua` | 4 | 393 |  |
| controller_drivingDynamics_CMU.disableSystemsForCalibration `vlua` | 0 | 65 |  |
| controller_drivingDynamics_CMU.getActuator `vlua` | 1 | 377 |  |
| controller_drivingDynamics_CMU.getActuators `vlua` | 0 | 389 |  |
| controller_drivingDynamics_CMU.getConfig `vlua` | 0 | 440 |  |
| controller_drivingDynamics_CMU.getSensor `vlua` | 1 | 369 |  |
| controller_drivingDynamics_CMU.getSensors `vlua` | 0 | 385 |  |
| controller_drivingDynamics_CMU.getSupervisor `vlua` | 1 | 373 |  |
| controller_drivingDynamics_CMU.getSupervisors `vlua` | 0 | 381 |  |
| controller_drivingDynamics_CMU.init `vlua` | 1 | 265 |  |
| controller_drivingDynamics_CMU.initLastStage `vlua` | 0 | 320 |  |
| controller_drivingDynamics_CMU.initSecondStage `vlua` | 0 | 290 |  |
| controller_drivingDynamics_CMU.registerCalibrationCallback `vlua` | 2 | 72 |  |
| controller_drivingDynamics_CMU.reset `vlua` | 1 | 256 |  |
| controller_drivingDynamics_CMU.sendDebugPacket `vlua` | 1 | 86 |  |
| controller_drivingDynamics_CMU.setConfig `vlua` | 1 | 436 |  |
| controller_drivingDynamics_CMU.setDebugMode `vlua` | 1 | 245 |  |
| controller_drivingDynamics_CMU.setParameters `vlua` | 1 | 424 |  |
| controller_drivingDynamics_CMU.update `vlua` | 1 | 231 |  |
| controller_drivingDynamics_CMU.updateFixedStep `vlua` | 1 | 227 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.getConfig `vlua` | 0 | 230 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.init `vlua` | 1 | 145 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.initSecondStage `vlua` | 1 | 174 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.registerCMU `vlua` | 1 | 204 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.reset `vlua` | 0 | 130 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.resetOverride `vlua` | 0 | 41 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.sendConfigData `vlua` | 0 | 234 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.setConfig `vlua` | 1 | 226 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.setDebugMode `vlua` | 1 | 198 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.setParameters `vlua` | 1 | 208 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.shutdown `vlua` | 0 | 123 |  |
| controller_drivingDynamics_actuators_activeCenterDiffLock.updateWheelsIntermediate `vlua` | 1 | 46 |  |
| controller_drivingDynamics_actuators_activeDiffBias.getConfig `vlua` | 0 | 278 |  |
| controller_drivingDynamics_actuators_activeDiffBias.init `vlua` | 1 | 154 |  |
| controller_drivingDynamics_actuators_activeDiffBias.initSecondStage `vlua` | 1 | 178 |  |
| controller_drivingDynamics_actuators_activeDiffBias.registerCMU `vlua` | 1 | 251 |  |
| controller_drivingDynamics_actuators_activeDiffBias.reset `vlua` | 0 | 148 |  |
| controller_drivingDynamics_actuators_activeDiffBias.resetOverride `vlua` | 0 | 49 |  |
| controller_drivingDynamics_actuators_activeDiffBias.sendConfigData `vlua` | 0 | 282 |  |
| controller_drivingDynamics_actuators_activeDiffBias.setConfig `vlua` | 1 | 274 |  |
| controller_drivingDynamics_actuators_activeDiffBias.setDebugMode `vlua` | 1 | 245 |  |
| controller_drivingDynamics_actuators_activeDiffBias.setParameters `vlua` | 1 | 255 |  |
| controller_drivingDynamics_actuators_activeDiffBias.shutdown `vlua` | 0 | 141 |  |
| controller_drivingDynamics_actuators_activeDiffBias.updateFixedStep `vlua` | 1 | 54 |  |
| controller_drivingDynamics_actuators_activeDiffLock.getConfig `vlua` | 0 | 215 |  |
| controller_drivingDynamics_actuators_activeDiffLock.init `vlua` | 1 | 130 |  |
| controller_drivingDynamics_actuators_activeDiffLock.initSecondStage `vlua` | 1 | 152 |  |
| controller_drivingDynamics_actuators_activeDiffLock.registerCMU `vlua` | 1 | 190 |  |
| controller_drivingDynamics_actuators_activeDiffLock.reset `vlua` | 0 | 126 |  |
| controller_drivingDynamics_actuators_activeDiffLock.resetOverride `vlua` | 0 | 44 |  |
| controller_drivingDynamics_actuators_activeDiffLock.sendConfigData `vlua` | 0 | 219 |  |
| controller_drivingDynamics_actuators_activeDiffLock.setConfig `vlua` | 1 | 211 |  |
| controller_drivingDynamics_actuators_activeDiffLock.setDebugMode `vlua` | 1 | 184 |  |
| controller_drivingDynamics_actuators_activeDiffLock.setParameters `vlua` | 1 | 194 |  |
| controller_drivingDynamics_actuators_activeDiffLock.shutdown `vlua` | 0 | 119 |  |
| controller_drivingDynamics_actuators_activeDiffLock.updateFixedStep `vlua` | 1 | 49 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.getConfig `vlua` | 0 | 108 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.init `vlua` | 1 | 45 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.initLastStage `vlua` | 0 | 81 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.registerCMU `vlua` | 1 | 88 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.reset `vlua` | 0 | 42 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.sendConfigData `vlua` | 0 | 112 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.setConfig `vlua` | 1 | 104 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.setDebugMode `vlua` | 1 | 84 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.setParameters `vlua` | 1 | 98 |  |
| controller_drivingDynamics_actuators_adaptiveDampers.shutdown `vlua` | 0 | 92 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.getConfig `vlua` | 0 | 101 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.init `vlua` | 1 | 41 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.initLastStage `vlua` | 0 | 74 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.registerCMU `vlua` | 1 | 81 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.reset `vlua` | 0 | 38 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.sendConfigData `vlua` | 0 | 105 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.setConfig `vlua` | 1 | 97 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.setDebugMode `vlua` | 1 | 77 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.setParameters `vlua` | 1 | 91 |  |
| controller_drivingDynamics_actuators_adaptiveTorsionBars.shutdown `vlua` | 0 | 85 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.getConfig `vlua` | 0 | 239 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.init `vlua` | 1 | 150 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.initSecondStage `vlua` | 1 | 173 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.registerCMU `vlua` | 1 | 213 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.reset `vlua` | 0 | 145 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.resetOverride `vlua` | 0 | 46 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.sendConfigData `vlua` | 0 | 243 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.setConfig `vlua` | 1 | 235 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.setDebugMode `vlua` | 1 | 207 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.setParameters `vlua` | 1 | 217 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.shutdown `vlua` | 0 | 138 |  |
| controller_drivingDynamics_actuators_electronicDiffLock.updateWheelsIntermediate `vlua` | 1 | 51 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.getConfig `vlua` | 0 | 223 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.init `vlua` | 1 | 140 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.initSecondStage `vlua` | 1 | 169 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.registerCMU `vlua` | 1 | 197 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.reset `vlua` | 0 | 134 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.resetOverride `vlua` | 0 | 41 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.sendConfigData `vlua` | 0 | 227 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.setConfig `vlua` | 1 | 219 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.setDebugMode `vlua` | 1 | 191 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.setParameters `vlua` | 1 | 201 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.shutdown `vlua` | 0 | 127 |  |
| controller_drivingDynamics_actuators_electronicSplitShaftLock.updateWheelsIntermediate `vlua` | 1 | 46 |  |
| controller_drivingDynamics_sensors_sensorHub.init `vlua` | 1 | 168 |  |
| controller_drivingDynamics_sensors_sensorHub.initLastStage `vlua` | 0 | 174 |  |
| controller_drivingDynamics_sensors_sensorHub.registerCMU `vlua` | 1 | 184 |  |
| controller_drivingDynamics_sensors_sensorHub.reset `vlua` | 0 | 151 |  |
| controller_drivingDynamics_sensors_sensorHub.setDebugMode `vlua` | 1 | 177 |  |
| controller_drivingDynamics_sensors_sensorHub.shutdown `vlua` | 0 | 188 |  |
| controller_drivingDynamics_sensors_sensorHub.update `vlua` | 1 | 69 |  |
| controller_drivingDynamics_sensors_vehicleData.init `vlua` | 1 | 239 |  |
| controller_drivingDynamics_sensors_vehicleData.initSecondStage `vlua` | 1 | 242 |  |
| controller_drivingDynamics_sensors_vehicleData.registerCMU `vlua` | 1 | 340 |  |
| controller_drivingDynamics_sensors_vehicleData.reset `vlua` | 0 | 235 |  |
| controller_drivingDynamics_sensors_vehicleData.setDebugMode `vlua` | 1 | 333 |  |
| controller_drivingDynamics_sensors_vehicleData.shutdown `vlua` | 0 | 344 |  |
| controller_drivingDynamics_sensors_vehicleData.update `vlua` | 1 | 92 |  |
| controller_drivingDynamics_sensors_virtualSensors.init `vlua` | 1 | 357 |  |
| controller_drivingDynamics_sensors_virtualSensors.initLastStage `vlua` | 0 | 379 |  |
| controller_drivingDynamics_sensors_virtualSensors.registerCMU `vlua` | 1 | 394 |  |
| controller_drivingDynamics_sensors_virtualSensors.setDebugMode `vlua` | 1 | 387 |  |
| controller_drivingDynamics_sensors_virtualSensors.shutdown `vlua` | 0 | 398 |  |
| controller_drivingDynamics_sensors_virtualSensors.update `vlua` | 1 | 273 |  |
| controller_drivingDynamics_sensors_virtualSensors.updateFixedStep `vlua` | 1 | 268 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.actAsTractionControl `vlua` | 2 | 32 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.actAsYawControl `vlua` | 5 | 39 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.getConfig `vlua` | 0 | 133 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.init `vlua` | 1 | 86 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.initLastStage `vlua` | 1 | 108 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.initSecondStage `vlua` | 1 | 92 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.registerCMU `vlua` | 1 | 72 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.reset `vlua` | 0 | 79 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.sendConfigData `vlua` | 0 | 137 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.setConfig `vlua` | 1 | 128 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.setDebugMode `vlua` | 1 | 66 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.setParameters `vlua` | 1 | 120 |  |
| controller_drivingDynamics_supervisors_components_aeroControl.shutdown `vlua` | 0 | 111 |  |
| controller_drivingDynamics_supervisors_components_awdControl.actAsTractionControl `vlua` | 2 | 33 |  |
| controller_drivingDynamics_supervisors_components_awdControl.actAsYawControl `vlua` | 5 | 52 | boolean |
| controller_drivingDynamics_supervisors_components_awdControl.getConfig `vlua` | 0 | 174 |  |
| controller_drivingDynamics_supervisors_components_awdControl.init `vlua` | 1 | 112 |  |
| controller_drivingDynamics_supervisors_components_awdControl.initLastStage `vlua` | 1 | 145 |  |
| controller_drivingDynamics_supervisors_components_awdControl.initSecondStage `vlua` | 1 | 118 |  |
| controller_drivingDynamics_supervisors_components_awdControl.registerCMU `vlua` | 1 | 92 |  |
| controller_drivingDynamics_supervisors_components_awdControl.reset `vlua` | 0 | 106 |  |
| controller_drivingDynamics_supervisors_components_awdControl.sendConfigData `vlua` | 0 | 178 |  |
| controller_drivingDynamics_supervisors_components_awdControl.setConfig `vlua` | 1 | 169 |  |
| controller_drivingDynamics_supervisors_components_awdControl.setDebugMode `vlua` | 1 | 86 |  |
| controller_drivingDynamics_supervisors_components_awdControl.setParameters `vlua` | 1 | 157 |  |
| controller_drivingDynamics_supervisors_components_awdControl.shutdown `vlua` | 0 | 148 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.actAsABSControl `vlua` | 4 | 187 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.actAsTractionControl `vlua` | 2 | 66 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.actAsYawControl `vlua` | 5 | 103 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.getConfig `vlua` | 0 | 537 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.init `vlua` | 1 | 293 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.initLastStage `vlua` | 1 | 480 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.initSecondStage `vlua` | 1 | 332 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.registerCMU `vlua` | 1 | 272 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.reset `vlua` | 0 | 282 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.sendConfigData `vlua` | 0 | 541 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.setConfig `vlua` | 1 | 532 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.setDebugMode `vlua` | 1 | 266 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.setParameters `vlua` | 1 | 493 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.shutdown `vlua` | 0 | 484 |  |
| controller_drivingDynamics_supervisors_components_brakeControl.updateWheelsIntermediate `vlua` | 1 | 48 |  |
| controller_drivingDynamics_supervisors_components_diffControl.actAsTractionControl `vlua` | 2 | 50 |  |
| controller_drivingDynamics_supervisors_components_diffControl.actAsYawControl `vlua` | 5 | 124 | boolean |
| controller_drivingDynamics_supervisors_components_diffControl.getConfig `vlua` | 0 | 269 |  |
| controller_drivingDynamics_supervisors_components_diffControl.init `vlua` | 1 | 176 |  |
| controller_drivingDynamics_supervisors_components_diffControl.initLastStage `vlua` | 1 | 233 |  |
| controller_drivingDynamics_supervisors_components_diffControl.initSecondStage `vlua` | 1 | 182 |  |
| controller_drivingDynamics_supervisors_components_diffControl.registerCMU `vlua` | 1 | 163 |  |
| controller_drivingDynamics_supervisors_components_diffControl.reset `vlua` | 0 | 170 |  |
| controller_drivingDynamics_supervisors_components_diffControl.sendConfigData `vlua` | 0 | 273 |  |
| controller_drivingDynamics_supervisors_components_diffControl.setConfig `vlua` | 1 | 264 |  |
| controller_drivingDynamics_supervisors_components_diffControl.setDebugMode `vlua` | 1 | 157 |  |
| controller_drivingDynamics_supervisors_components_diffControl.setParameters `vlua` | 1 | 245 |  |
| controller_drivingDynamics_supervisors_components_diffControl.shutdown `vlua` | 0 | 236 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.actAsTractionControl `vlua` | 2 | 51 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.actAsYawControl `vlua` | 5 | 77 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.getConfig `vlua` | 0 | 321 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.init `vlua` | 1 | 158 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.initLastStage `vlua` | 1 | 281 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.initSecondStage `vlua` | 1 | 175 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.registerCMU `vlua` | 1 | 142 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.reset `vlua` | 0 | 146 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.sendConfigData `vlua` | 0 | 325 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.setConfig `vlua` | 1 | 316 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.setDebugMode `vlua` | 1 | 136 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.setParameters `vlua` | 1 | 293 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.shutdown `vlua` | 0 | 284 |  |
| controller_drivingDynamics_supervisors_components_motorTorqueControl.updateFixedStep `vlua` | 1 | 38 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.calculateSlipABSControl `vlua` | 3 | 62 | boolean |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.calculateSlipTractionControl `vlua` | 4 | 25 | boolean |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.getConfig `vlua` | 0 | 141 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.init `vlua` | 1 | 106 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.initLastStage `vlua` | 1 | 122 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.initSecondStage `vlua` | 1 | 110 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.registerCMU `vlua` | 1 | 99 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.reset `vlua` | 0 | 103 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.sendConfigData `vlua` | 0 | 145 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.setConfig `vlua` | 1 | 137 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.setDebugMode `vlua` | 1 | 93 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.setParameters `vlua` | 1 | 132 |  |
| controller_drivingDynamics_supervisors_slipProviders_virtualSpeedSlip.shutdown `vlua` | 0 | 126 |  |
| controller_drivingDynamics_supervisors_tractionControl.getConfig `vlua` | 0 | 233 |  |
| controller_drivingDynamics_supervisors_tractionControl.init `vlua` | 1 | 135 |  |
| controller_drivingDynamics_supervisors_tractionControl.initLastStage `vlua` | 1 | 188 |  |
| controller_drivingDynamics_supervisors_tractionControl.initSecondStage `vlua` | 1 | 146 |  |
| controller_drivingDynamics_supervisors_tractionControl.registerCMU `vlua` | 1 | 110 |  |
| controller_drivingDynamics_supervisors_tractionControl.registerComponent `vlua` | 1 | 114 |  |
| controller_drivingDynamics_supervisors_tractionControl.registerSlipProvider `vlua` | 1 | 119 |  |
| controller_drivingDynamics_supervisors_tractionControl.reset `vlua` | 0 | 124 |  |
| controller_drivingDynamics_supervisors_tractionControl.sendConfigData `vlua` | 0 | 237 |  |
| controller_drivingDynamics_supervisors_tractionControl.setConfig `vlua` | 1 | 228 |  |
| controller_drivingDynamics_supervisors_tractionControl.setDebugMode `vlua` | 1 | 104 |  |
| controller_drivingDynamics_supervisors_tractionControl.setParameters `vlua` | 1 | 221 |  |
| controller_drivingDynamics_supervisors_tractionControl.shutdown `vlua` | 0 | 206 |  |
| controller_drivingDynamics_supervisors_tractionControl.updateFixedStep `vlua` | 1 | 40 |  |
| controller_drivingDynamics_supervisors_yawControl.getConfig `vlua` | 0 | 179 |  |
| controller_drivingDynamics_supervisors_yawControl.init `vlua` | 1 | 118 |  |
| controller_drivingDynamics_supervisors_yawControl.initLastStage `vlua` | 1 | 135 |  |
| controller_drivingDynamics_supervisors_yawControl.initSecondStage `vlua` | 1 | 129 |  |
| controller_drivingDynamics_supervisors_yawControl.registerCMU `vlua` | 1 | 101 |  |
| controller_drivingDynamics_supervisors_yawControl.registerComponent `vlua` | 1 | 110 |  |
| controller_drivingDynamics_supervisors_yawControl.registerYawProvider `vlua` | 1 | 105 |  |
| controller_drivingDynamics_supervisors_yawControl.reset `vlua` | 0 | 115 |  |
| controller_drivingDynamics_supervisors_yawControl.sendConfigData `vlua` | 0 | 183 |  |
| controller_drivingDynamics_supervisors_yawControl.setConfig `vlua` | 1 | 174 |  |
| controller_drivingDynamics_supervisors_yawControl.setDebugMode `vlua` | 1 | 95 |  |
| controller_drivingDynamics_supervisors_yawControl.setParameters `vlua` | 1 | 168 |  |
| controller_drivingDynamics_supervisors_yawControl.shutdown `vlua` | 0 | 153 |  |
| controller_drivingDynamics_supervisors_yawControl.updateFixedStep `vlua` | 1 | 37 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.calculateExpectedYaw `vlua` | 1 | 23 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.getConfig `vlua` | 0 | 101 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.init `vlua` | 1 | 64 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.initLastStage `vlua` | 1 | 83 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.initSecondStage `vlua` | 1 | 68 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.registerCMU `vlua` | 1 | 57 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.reset `vlua` | 0 | 61 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.sendConfigData `vlua` | 0 | 105 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.setConfig `vlua` | 1 | 97 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.setDebugMode `vlua` | 1 | 51 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.setParameters `vlua` | 1 | 92 |  |
| controller_drivingDynamics_supervisors_yawProviders_STMEstimate.shutdown `vlua` | 0 | 86 |  |
| controller_esc.deserialize `vlua` | 1 | 1048 |  |
| controller_esc.getCarData `vlua` | 0 | 613 | table |
| controller_esc.getCurrentConfigData `vlua` | 0 | 632 |  |
| controller_esc.init `vlua` | 1 | 809 |  |
| controller_esc.initSecondStage `vlua` | 0 | 814 |  |
| controller_esc.nextESCMode `vlua` | 0 | 704 |  |
| controller_esc.previousESCMode `vlua` | 0 | 709 |  |
| controller_esc.serialize `vlua` | 0 | 1044 | table |
| controller_esc.setESCMode `vlua` | 1 | 676 |  |
| controller_esc.startESCCalibration `vlua` | 0 | 595 |  |
| controller_esc.stopESCCalibration `vlua` | 0 | 609 |  |
| controller_esc.toggleESCMode `vlua` | 0 | 698 |  |
| controller_esc.updateSimpleControlButtons `vlua` | 0 | 142 |  |
| controller_etkGauges.init `vlua` | 1 | 66 |  |
| controller_etkGauges.uiReady `vlua` | 0 | 94 |  |
| controller_gauges_analogOdometer.initSecondStage `vlua` | 1 | 48 |  |
| controller_gauges_analogOdometer.reset `vlua` | 0 | 44 |  |
| controller_gauges_analogOdometer.setParameters `vlua` | 1 | 93 |  |
| controller_gauges_customModules_accelerationData.init `vlua` | 1 | 35 |  |
| controller_gauges_customModules_accelerationData.reset `vlua` | 0 | 32 |  |
| controller_gauges_customModules_accelerationData.setupGaugeData `vlua` | 1 | 27 |  |
| controller_gauges_customModules_accelerationData.updateGaugeData `vlua` | 2 | 14 |  |
| controller_gauges_customModules_combustionEngineData.init `vlua` | 1 | 131 |  |
| controller_gauges_customModules_combustionEngineData.reset `vlua` | 0 | 121 |  |
| controller_gauges_customModules_combustionEngineData.setupGaugeData `vlua` | 1 | 105 |  |
| controller_gauges_customModules_combustionEngineData.updateGaugeData `vlua` | 2 | 41 |  |
| controller_gauges_customModules_dynamicRedlineData.init `vlua` | 1 | 40 |  |
| controller_gauges_customModules_dynamicRedlineData.reset `vlua` | 0 | 37 |  |
| controller_gauges_customModules_dynamicRedlineData.setupGaugeData `vlua` | 1 | 34 |  |
| controller_gauges_customModules_dynamicRedlineData.updateGaugeData `vlua` | 2 | 22 |  |
| controller_gauges_customModules_electricMotorData.init `vlua` | 1 | 107 |  |
| controller_gauges_customModules_electricMotorData.reset `vlua` | 0 | 103 |  |
| controller_gauges_customModules_electricMotorData.setupGaugeData `vlua` | 1 | 90 |  |
| controller_gauges_customModules_electricMotorData.updateGaugeData `vlua` | 2 | 34 |  |
| controller_gauges_customModules_environmentData.init `vlua` | 1 | 22 |  |
| controller_gauges_customModules_environmentData.reset `vlua` | 0 | 19 |  |
| controller_gauges_customModules_environmentData.setupGaugeData `vlua` | 1 | 16 |  |
| controller_gauges_customModules_environmentData.updateGaugeData `vlua` | 2 | 11 |  |
| controller_gauges_customModules_navigationData.init `vlua` | 1 | 35 |  |
| controller_gauges_customModules_navigationData.reset `vlua` | 0 | 32 |  |
| controller_gauges_customModules_navigationData.setupGaugeData `vlua` | 2 | 27 |  |
| controller_gauges_customModules_navigationData.updateGaugeData `vlua` | 2 | 20 |  |
| controller_gauges_customModules_tireData.init `vlua` | 1 | 44 |  |
| controller_gauges_customModules_tireData.reset `vlua` | 0 | 41 |  |
| controller_gauges_customModules_tireData.setupGaugeData `vlua` | 1 | 36 |  |
| controller_gauges_customModules_tireData.updateGaugeData `vlua` | 2 | 16 |  |
| controller_gauges_genericGauges.initSecondStage `vlua` | 1 | 129 |  |
| controller_gauges_genericGauges.reset `vlua` | 0 | 126 |  |
| controller_gauges_genericGauges.setParameters `vlua` | 1 | 192 |  |
| controller_hydraulicSuspension.init `vlua` | 1 | 162 |  |
| controller_hydraulicSuspension.initSounds `vlua` | 1 | 228 |  |
| controller_hydraulicSuspension.reset `vlua` | 0 | 149 |  |
| controller_hydraulicSuspension.resetSounds `vlua` | 0 | 244 |  |
| controller_hydraulicSuspension.setGroupsBleed `vlua` | 2 | 57 |  |
| controller_hydraulicSuspension.setGroupsMomentaryIncrease `vlua` | 3 | 73 |  |
| controller_hydraulicSuspension.setGroupsPosition `vlua` | 3 | 38 |  |
| controller_hydraulicSuspension.updateFixedStep `vlua` | 1 | 128 |  |
| controller_hydraulics_closedLoopLinearControl.init `vlua` | 1 | 45 |  |
| controller_hydraulics_closedLoopLinearControl.reset `vlua` | 1 | 39 |  |
| controller_hydraulics_closedLoopLinearControl.setCylinderTargetExtendPercent `vlua` | 1 | 18 |  |
| controller_hydraulics_closedLoopLinearControl.updateFixedStep `vlua` | 1 | 22 |  |
| controller_hydraulics_electricHydraulics.init `vlua` | 1 | 26 |  |
| controller_hydraulics_electricHydraulics.reset `vlua` | 1 | 23 |  |
| controller_hydraulics_hydraulicTrailerFeet.init `vlua` | 1 | 65 |  |
| controller_hydraulics_hydraulicTrailerFeet.moveFeet `vlua` | 1 | 19 |  |
| controller_hydraulics_hydraulicsCombustionEngineControl.init `vlua` | 1 | 69 |  |
| controller_hydraulics_hydraulicsCombustionEngineControl.reset `vlua` | 1 | 65 |  |
| controller_hydraulics_hydraulicsCombustionEngineControl.setIdleRaise `vlua` | 1 | 57 |  |
| controller_hydraulics_hydraulicsCombustionEngineControl.toggleIdleRaise `vlua` | 0 | 61 |  |
| controller_hydraulics_orbitrolSteering.init `vlua` | 1 | 36 |  |
| controller_hydraulics_orbitrolSteering.reset `vlua` | 1 | 31 |  |
| controller_hydraulics_orbitrolSteering.updateFixedStep `vlua` | 1 | 15 |  |
| controller_inputOutputDemo.init `vlua` | 0 | 125 |  |
| controller_inputOutputDemo.reset `vlua` | 0 | 119 |  |
| controller_inputOutputDemo.saveLogToCSV `vlua` | 0 | 37 |  |
| controller_inputOutputDemo.update `vlua` | 1 | 112 |  |
| controller_inputOutputDemo.updateFixedStep `vlua` | 1 | 102 |  |
| controller_jato.init `vlua` | 1 | 108 |  |
| controller_jato.inputStringCallback `vlua` | 1 | 28 |  |
| controller_jato.reset `vlua` | 0 | 94 |  |
| controller_jato.updateSimpleControlButtons `vlua` | 0 | 35 |  |
| controller_lightbar.init `vlua` | 1 | 119 |  |
| controller_lightbar.setModeIndex `vlua` | 1 | 87 |  |
| controller_lightbar.toggleMode `vlua` | 0 | 110 |  |
| controller_lineLock.init `vlua` | 1 | 59 |  |
| controller_lineLock.setLineLock `vlua` | 1 | 36 |  |
| controller_lineLock.toggleLineLock `vlua` | 0 | 54 |  |
| controller_lineLock.updateWheelsIntermediate `vlua` | 1 | 23 |  |
| controller_linearActuators_linearActuatorTrailerFeet.init `vlua` | 1 | 66 |  |
| controller_linearActuators_linearActuatorTrailerFeet.moveFeet `vlua` | 1 | 20 |  |
| controller_loggerTemplate.init `vlua` | 0 | 83 |  |
| controller_loggerTemplate.reset `vlua` | 0 | 77 |  |
| controller_loggerTemplate.saveLogToCSV `vlua` | 0 | 19 |  |
| controller_loggerTemplate.update `vlua` | 1 | 70 |  |
| controller_loggerTemplate.updateFixedStep `vlua` | 1 | 60 |  |
| controller_nitrousOxideInjection.deserialize `vlua` | 1 | 66 |  |
| controller_nitrousOxideInjection.init `vlua` | 1 | 76 |  |
| controller_nitrousOxideInjection.reset `vlua` | 1 | 72 |  |
| controller_nitrousOxideInjection.serialize `vlua` | 0 | 60 | table |
| controller_nitrousOxideInjection.setOverride `vlua` | 1 | 48 |  |
| controller_nitrousOxideInjection.toggleActive `vlua` | 0 | 52 |  |
| controller_nitrousOxideInjection.updateSimpleControlButtons `vlua` | 0 | 20 |  |
| controller_playerController.crouch `vlua` | 1 | 416 |  |
| controller_playerController.debugDraw `vlua` | 1 | 143 |  |
| controller_playerController.init `vlua` | 1 | 446 |  |
| controller_playerController.initLastStage `vlua` | 0 | 510 |  |
| controller_playerController.jump `vlua` | 1 | 405 |  |
| controller_playerController.nodeCollision `vlua` | 1 | 151 |  |
| controller_playerController.onDeserialize `vlua` | 1 | 544 |  |
| controller_playerController.onSerialize `vlua` | 0 | 547 |  |
| controller_playerController.reset `vlua` | 0 | 513 |  |
| controller_playerController.setCameraControlData `vlua` | 1 | 550 |  |
| controller_playerController.setFreeze `vlua` | 1 | 439 |  |
| controller_playerController.setSpeedCoef `vlua` | 1 | 397 |  |
| controller_playerController.settingsChanged `vlua` | 0 | 443 |  |
| controller_playerController.toggleCrouch `vlua` | 0 | 430 |  |
| controller_playerController.toggleSpeedCoef `vlua` | 0 | 401 |  |
| controller_playerController.update `vlua` | 1 | 172 |  |
| controller_playerController.updateFixedStep `vlua` | 1 | 251 |  |
| controller_playerController.vehicleActivated `vlua` | 0 | 538 |  |
| controller_playerController.walkLeftRight `vlua` | 1 | 385 |  |
| controller_playerController.walkLeftRightRaw `vlua` | 1 | 381 |  |
| controller_playerController.walkUpDown `vlua` | 1 | 393 |  |
| controller_playerController.walkUpDownRaw `vlua` | 1 | 389 |  |
| controller_pneumatics.init `vlua` | 1 | 243 |  |
| controller_pneumatics.initSounds `vlua` | 1 | 315 |  |
| controller_pneumatics.isBeamGroupAtPressureLevel `vlua` | 2 | 165 |  |
| controller_pneumatics.reset `vlua` | 0 | 233 |  |
| controller_pneumatics.resetSounds `vlua` | 0 | 342 |  |
| controller_pneumatics.setBeamDefault `vlua` | 1 | 102 |  |
| controller_pneumatics.setBeamMax `vlua` | 1 | 98 |  |
| controller_pneumatics.setBeamMin `vlua` | 1 | 94 |  |
| controller_pneumatics.setBeamMomentaryDecrease `vlua` | 2 | 145 |  |
| controller_pneumatics.setBeamMomentaryIncrease `vlua` | 2 | 125 |  |
| controller_pneumatics.setBeamPressure `vlua` | 2 | 59 |  |
| controller_pneumatics.setBeamPressureLevel `vlua` | 2 | 88 |  |
| controller_pneumatics.toggleBeamMinMax `vlua` | 1 | 106 |  |
| controller_pneumatics_actuators.getAverageFlowRate `vlua` | 1 | 198 |  |
| controller_pneumatics_actuators.getAveragePressure `vlua` | 1 | 207 |  |
| controller_pneumatics_actuators.getBeamGroupsAverageFlowRate `vlua` | 1 | 216 |  |
| controller_pneumatics_actuators.getValveState `vlua` | 1 | 189 |  |
| controller_pneumatics_actuators.init `vlua` | 1 | 503 |  |
| controller_pneumatics_actuators.initSounds `vlua` | 1 | 651 |  |
| controller_pneumatics_actuators.reset `vlua` | 0 | 474 |  |
| controller_pneumatics_actuators.resetSounds `vlua` | 0 | 685 |  |
| controller_pneumatics_actuators.setBeamGroupCrossFlowTag `vlua` | 2 | 157 |  |
| controller_pneumatics_actuators.setBeamGroupMaximumSupplyPressure `vlua` | 2 | 142 |  |
| controller_pneumatics_actuators.setBeamGroupValveState `vlua` | 2 | 110 |  |
| controller_pneumatics_actuators.setBeamGroupsMaximumSupplyPressure `vlua` | 2 | 151 |  |
| controller_pneumatics_actuators.setBeamGroupsValveState `vlua` | 2 | 119 |  |
| controller_pneumatics_actuators.toggleBeamGroupValveState `vlua` | 1 | 125 |  |
| controller_pneumatics_actuators.toggleBeamGroupsValveState `vlua` | 1 | 136 |  |
| controller_pneumatics_actuators.updateFixedStep `vlua` | 1 | 226 |  |
| controller_pneumatics_airbrakes.init `vlua` | 1 | 313 |  |
| controller_pneumatics_airbrakes.reset `vlua` | 0 | 288 |  |
| controller_pneumatics_airbrakes.updateFixedStep `vlua` | 1 | 271 |  |
| controller_pneumatics_autoLevelSuspension.getAverageFlowRate `vlua` | 1 | 107 |  |
| controller_pneumatics_autoLevelSuspension.getCurrentLength `vlua` | 1 | 98 |  |
| controller_pneumatics_autoLevelSuspension.getTargetLength `vlua` | 1 | 89 |  |
| controller_pneumatics_autoLevelSuspension.init `vlua` | 1 | 207 |  |
| controller_pneumatics_autoLevelSuspension.initSecondStage `vlua` | 1 | 270 |  |
| controller_pneumatics_autoLevelSuspension.isCalibrating `vlua` | 1 | 125 |  |
| controller_pneumatics_autoLevelSuspension.isMoving `vlua` | 1 | 116 |  |
| controller_pneumatics_autoLevelSuspension.reset `vlua` | 0 | 190 |  |
| controller_pneumatics_autoLevelSuspension.setAdjustmentRate `vlua` | 2 | 47 |  |
| controller_pneumatics_autoLevelSuspension.setMomentaryDecrease `vlua` | 2 | 70 |  |
| controller_pneumatics_autoLevelSuspension.setMomentaryIncrease `vlua` | 2 | 61 |  |
| controller_pneumatics_autoLevelSuspension.setTargetLength `vlua` | 3 | 79 |  |
| controller_pneumatics_autoLevelSuspension.setTemporarilyDisabled `vlua` | 2 | 41 |  |
| controller_pneumatics_autoLevelSuspension.stopAdjusting `vlua` | 2 | 54 |  |
| controller_pneumatics_autoLevelSuspension.updateFixedStep `vlua` | 1 | 134 |  |
| controller_pneumatics_crossFlowValve.init `vlua` | 1 | 53 |  |
| controller_pneumatics_crossFlowValve.reset `vlua` | 0 | 49 |  |
| controller_pneumatics_crossFlowValve.updateFixedStep `vlua` | 1 | 21 |  |
| controller_pneumatics_liftAxleControl.init `vlua` | 1 | 70 |  |
| controller_pneumatics_liftAxleControl.initLastStage `vlua` | 1 | 83 |  |
| controller_pneumatics_liftAxleControl.reset `vlua` | 1 | 66 |  |
| controller_pneumatics_liftAxleControl.setMaximumSupplyPressure `vlua` | 1 | 58 |  |
| controller_pneumatics_liftAxleControl.setMaximumSupplyPressureChangeRate `vlua` | 1 | 62 |  |
| controller_pneumatics_liftAxleControl.setMode `vlua` | 1 | 39 |  |
| controller_pneumatics_liftAxleControl.toggleMode `vlua` | 0 | 50 |  |
| controller_pneumatics_lowAirPressureWarning.init `vlua` | 1 | 58 |  |
| controller_pneumatics_lowAirPressureWarning.initSounds `vlua` | 1 | 45 |  |
| controller_pneumatics_lowAirPressureWarning.reset `vlua` | 1 | 41 |  |
| controller_pneumatics_lowAirPressureWarning.resetSounds `vlua` | 1 | 34 |  |
| controller_powerSteering.init `vlua` | 1 | 32 |  |
| controller_powerSteering.reset `vlua` | 0 | 28 |  |
| controller_powertrainControl_activeCenterDiff.init `vlua` | 1 | 84 |  |
| controller_powertrainControl_activeCenterDiff.reset `vlua` | 1 | 78 |  |
| controller_powertrainControl_activeCenterDiff.updateFixedStep `vlua` | 1 | 26 |  |
| controller_powertrainControl_antiLag.init `vlua` | 1 | 127 |  |
| controller_powertrainControl_antiLag.reset `vlua` | 1 | 119 |  |
| controller_powertrainControl_antiLag.setAntilagState `vlua` | 1 | 41 |  |
| controller_powertrainControl_combustionEngineGovenor.init `vlua` | 1 | 31 |  |
| controller_powertrainControl_combustionEngineGovenor.reset `vlua` | 1 | 25 |  |
| controller_powertrainControl_rimPullControl.init `vlua` | 1 | 32 |  |
| controller_powertrainControl_rimPullControl.reset `vlua` | 1 | 29 |  |
| controller_propAnimation_dualAxisLever.init `vlua` | 1 | 269 |  |
| controller_propAnimation_dualAxisLever.reset `vlua` | 1 | 247 |  |
| controller_propAnimation_googlyEyes.init `vlua` | 1 | 50 |  |
| controller_propAnimation_googlyEyes.reset `vlua` | 1 | 46 |  |
| controller_propAnimation_hPattern.init `vlua` | 1 | 157 |  |
| controller_propAnimation_hPattern.reset `vlua` | 1 | 140 |  |
| controller_propAnimation_sequentialLever.init `vlua` | 1 | 57 |  |
| controller_propAnimation_sequentialLever.reset `vlua` | 1 | 50 |  |
| controller_propAnimation_singleAxisLever.init `vlua` | 1 | 53 |  |
| controller_propAnimation_singleAxisLever.reset `vlua` | 1 | 45 |  |
| controller_pyrotechnicCharge.init `vlua` | 1 | 50 |  |
| controller_pyrotechnicCharge.reset `vlua` | 0 | 46 |  |
| controller_pyrotechnicCharge.trigger `vlua` | 0 | 17 |  |
| controller_sbrGauges.init `vlua` | 1 | 93 |  |
| controller_sbrGauges.reset `vlua` | 0 | 135 |  |
| controller_sbrGauges.setParameters `vlua` | 1 | 143 |  |
| controller_sbrGauges.setUIMode `vlua` | 2 | 139 |  |
| controller_shiftLights.init `vlua` | 1 | 57 |  |
| controller_sound_AVAS.init `vlua` | 1 | 58 |  |
| controller_sound_AVAS.initSounds `vlua` | 1 | 61 |  |
| controller_sound_AVAS.reset `vlua` | 0 | 52 |  |
| controller_sound_airbrakes.init `vlua` | 1 | 54 |  |
| controller_sound_airbrakes.reset `vlua` | 0 | 47 |  |
| controller_sound_linearMovement.init `vlua` | 1 | 233 |  |
| controller_sound_linearMovement.initSounds `vlua` | 1 | 175 |  |
| controller_sound_linearMovement.reset `vlua` | 1 | 168 |  |
| controller_sound_linearMovement.resetSounds `vlua` | 1 | 161 |  |
| controller_sound_reverseWarn.init `vlua` | 1 | 40 |  |
| controller_sound_reverseWarn.reset `vlua` | 0 | 35 |  |
| controller_tech_GPS.getLatest `vlua` | 0 | 109 |  |
| controller_tech_GPS.getSensorData `vlua` | 0 | 100 | table |
| controller_tech_GPS.incrementTimer `vlua` | 1 | 113 |  |
| controller_tech_GPS.init `vlua` | 1 | 75 |  |
| controller_tech_GPS.reset `vlua` | 0 | 94 |  |
| controller_tech_GPS.setIsVisualised `vlua` | 1 | 111 |  |
| controller_tech_GPS.update `vlua` | 1 | 43 |  |
| controller_tech_MQTToutput.init `vlua` | 1 | 64 |  |
| controller_tech_MQTToutput.reset `vlua` | 1 | 61 |  |
| controller_tech_advancedIMU.getLatest `vlua` | 0 | 35 |  |
| controller_tech_advancedIMU.getSensorData `vlua` | 0 | 47 | table |
| controller_tech_advancedIMU.incrementTimer `vlua` | 1 | 44 |  |
| controller_tech_advancedIMU.init `vlua` | 1 | 127 |  |
| controller_tech_advancedIMU.reset `vlua` | 0 | 171 |  |
| controller_tech_advancedIMU.setIsUsingGravity `vlua` | 1 | 38 |  |
| controller_tech_advancedIMU.setIsVisualised `vlua` | 1 | 41 |  |
| controller_tech_advancedIMU.update `vlua` | 1 | 177 |  |
| controller_tech_cosimulationCoupling.init `vlua` | 1 | 758 |  |
| controller_tech_cosimulationCoupling.stop `vlua` | 0 | 982 |  |
| controller_tech_cosimulationCoupling.update `vlua` | 1 | 875 |  |
| controller_tech_cosimulationCoupling.updateWheelsIntermediate `vlua` | 1 | 850 |  |
| controller_tech_idealRADARSensor.getLatest `vlua` | 0 | 83 |  |
| controller_tech_idealRADARSensor.getSensorData `vlua` | 0 | 81 |  |
| controller_tech_idealRADARSensor.incrementTimer `vlua` | 1 | 85 |  |
| controller_tech_idealRADARSensor.init `vlua` | 1 | 67 |  |
| controller_tech_idealRADARSensor.reset `vlua` | 0 | 76 |  |
| controller_tech_idealRADARSensor.update `vlua` | 1 | 88 |  |
| controller_tech_mesh.getSensorData `vlua` | 0 | 77 | table |
| controller_tech_mesh.incrementTimer `vlua` | 1 | 84 |  |
| controller_tech_mesh.init `vlua` | 1 | 61 |  |
| controller_tech_mesh.reset `vlua` | 0 | 71 |  |
| controller_tech_mesh.update `vlua` | 1 | 28 |  |
| controller_tech_powertrainSensor.getSensorData `vlua` | 0 | 78 | table |
| controller_tech_powertrainSensor.incrementTimer `vlua` | 1 | 86 |  |
| controller_tech_powertrainSensor.init `vlua` | 1 | 62 |  |
| controller_tech_powertrainSensor.reset `vlua` | 0 | 72 |  |
| controller_tech_powertrainSensor.update `vlua` | 1 | 22 |  |
| controller_tech_recorders.fetchRecordedData `vlua` | 0 | 74 |  |
| controller_tech_recorders.init `vlua` | 0 | 25 |  |
| controller_tech_recorders.isRecording `vlua` | 0 | 80 |  |
| controller_tech_recorders.startRecording `vlua` | 2 | 56 |  |
| controller_tech_recorders.stopRecording `vlua` | 0 | 65 |  |
| controller_tech_recorders.update `vlua` | 1 | 31 |  |
| controller_tech_roadsSensor.getLatest `vlua` | 0 | 295 |  |
| controller_tech_roadsSensor.getSensorData `vlua` | 0 | 288 | table |
| controller_tech_roadsSensor.incrementTimer `vlua` | 1 | 297 |  |
| controller_tech_roadsSensor.init `vlua` | 1 | 300 |  |
| controller_tech_roadsSensor.reset `vlua` | 0 | 311 |  |
| controller_tech_roadsSensor.update `vlua` | 1 | 318 |  |
| controller_tech_screens.init `vlua` | 1 | 17 |  |
| controller_tech_screens.reset `vlua` | 1 | 13 |  |
| controller_tech_tyreBarrier.init `vlua` | 1 | 35 |  |
| controller_tech_tyreBarrier.reset `vlua` | 0 | 46 |  |
| controller_tech_tyreBarrier.update `vlua` | 1 | 50 |  |
| controller_tech_vehicleSystemsCoupling.init `vlua` | 1 | 404 |  |
| controller_tech_vehicleSystemsCoupling.initialSetup `vlua` | 1 | 360 |  |
| controller_tech_vehicleSystemsCoupling.stopCoupling `vlua` | 0 | 474 |  |
| controller_tech_vehicleSystemsCoupling.update `vlua` | 1 | 426 |  |
| controller_tech_vehicleSystemsCoupling.updateWheelsIntermediate `vlua` | 1 | 415 |  |
| controller_tirePressureControl.init `vlua` | 1 | 222 |  |
| controller_tirePressureControl.initSecondStage `vlua` | 1 | 225 |  |
| controller_tirePressureControl.reset `vlua` | 1 | 207 |  |
| controller_tirePressureControl.setGroupState `vlua` | 2 | 77 |  |
| controller_tirePressureControl.startDeflateActiveGroups `vlua` | 0 | 109 |  |
| controller_tirePressureControl.startInflateActiveGroups `vlua` | 0 | 104 |  |
| controller_tirePressureControl.stopActiveGroups `vlua` | 0 | 114 |  |
| controller_tirePressureControl.toggleGroupState `vlua` | 1 | 96 |  |
| controller_trailerFeet.init `vlua` | 1 | 24 |  |
| controller_twoStepLaunch.changeTwoStepRPM `vlua` | 1 | 46 |  |
| controller_twoStepLaunch.deserialize `vlua` | 1 | 162 |  |
| controller_twoStepLaunch.init `vlua` | 1 | 81 |  |
| controller_twoStepLaunch.reset `vlua` | 0 | 72 |  |
| controller_twoStepLaunch.serialize `vlua` | 0 | 155 | table |
| controller_twoStepLaunch.setParameters `vlua` | 1 | 169 |  |
| controller_twoStepLaunch.setTwoStep `vlua` | 1 | 22 |  |
| controller_twoStepLaunch.toggleTwoStep `vlua` | 0 | 34 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.gearboxBehaviorChanged `vlua` | 1 | 152 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.getGearName `vlua` | 0 | 92 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.getGearPosition `vlua` | 0 | 102 | multiple |
| controller_vehicleController_shiftLogic_automaticGearbox.getState `vlua` | 0 | 712 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.init `vlua` | 2 | 583 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.sendTorqueData `vlua` | 0 | 577 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.setDefaultForwardMode `vlua` | 1 | 175 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.setState `vlua` | 1 | 718 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.shiftDown `vlua` | 0 | 232 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.shiftToGearIndex `vlua` | 1 | 276 |  |
| controller_vehicleController_shiftLogic_automaticGearbox.shiftUp `vlua` | 0 | 189 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.gearboxBehaviorChanged `vlua` | 1 | 124 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.getGearName `vlua` | 0 | 94 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.getGearPosition `vlua` | 0 | 98 | multiple |
| controller_vehicleController_shiftLogic_cvtGearbox.getState `vlua` | 0 | 444 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.init `vlua` | 2 | 324 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.sendTorqueData `vlua` | 0 | 318 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.setState `vlua` | 1 | 450 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.shiftDown `vlua` | 0 | 164 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.shiftToGearIndex `vlua` | 1 | 176 |  |
| controller_vehicleController_shiftLogic_cvtGearbox.shiftUp `vlua` | 0 | 152 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.gearboxBehaviorChanged `vlua` | 1 | 136 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.getGearName `vlua` | 0 | 100 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.getGearPosition `vlua` | 0 | 110 | multiple |
| controller_vehicleController_shiftLogic_cvtGearbox2.getState `vlua` | 0 | 578 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.init `vlua` | 2 | 421 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.sendTorqueData `vlua` | 0 | 415 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.setState `vlua` | 1 | 584 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.shiftDown `vlua` | 0 | 180 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.shiftToGearIndex `vlua` | 1 | 192 |  |
| controller_vehicleController_shiftLogic_cvtGearbox2.shiftUp `vlua` | 0 | 168 |  |
| controller_vehicleController_shiftLogic_dctGearbox.gearboxBehaviorChanged `vlua` | 1 | 134 |  |
| controller_vehicleController_shiftLogic_dctGearbox.getGearName `vlua` | 0 | 94 |  |
| controller_vehicleController_shiftLogic_dctGearbox.getGearPosition `vlua` | 0 | 108 | multiple |
| controller_vehicleController_shiftLogic_dctGearbox.getState `vlua` | 0 | 856 |  |
| controller_vehicleController_shiftLogic_dctGearbox.init `vlua` | 2 | 741 |  |
| controller_vehicleController_shiftLogic_dctGearbox.sendTorqueData `vlua` | 0 | 735 |  |
| controller_vehicleController_shiftLogic_dctGearbox.setDefaultForwardMode `vlua` | 1 | 188 |  |
| controller_vehicleController_shiftLogic_dctGearbox.setState `vlua` | 1 | 862 |  |
| controller_vehicleController_shiftLogic_dctGearbox.shiftDown `vlua` | 0 | 235 |  |
| controller_vehicleController_shiftLogic_dctGearbox.shiftToGearIndex `vlua` | 1 | 269 |  |
| controller_vehicleController_shiftLogic_dctGearbox.shiftUp `vlua` | 0 | 202 |  |
| controller_vehicleController_shiftLogic_dummy.getGearName `vlua` | 0 | 52 | string |
| controller_vehicleController_shiftLogic_dummy.getGearPosition `vlua` | 0 | 56 | multiple |
| controller_vehicleController_shiftLogic_dummy.init `vlua` | 2 | 87 |  |
| controller_vehicleController_shiftLogic_dummy.sendTorqueData `vlua` | 0 | 81 |  |
| controller_vehicleController_shiftLogic_dummy.updateGearboxGFX `vlua` | 1 | 60 |  |
| controller_vehicleController_shiftLogic_electricMotor.gearboxBehaviorChanged `vlua` | 1 | 110 |  |
| controller_vehicleController_shiftLogic_electricMotor.getGearName `vlua` | 0 | 102 |  |
| controller_vehicleController_shiftLogic_electricMotor.getGearPosition `vlua` | 0 | 106 | multiple |
| controller_vehicleController_shiftLogic_electricMotor.getState `vlua` | 0 | 654 |  |
| controller_vehicleController_shiftLogic_electricMotor.init `vlua` | 2 | 492 |  |
| controller_vehicleController_shiftLogic_electricMotor.onDeserialize `vlua` | 1 | 644 |  |
| controller_vehicleController_shiftLogic_electricMotor.onSerialize `vlua` | 0 | 650 | table |
| controller_vehicleController_shiftLogic_electricMotor.sendTorqueData `vlua` | 0 | 408 |  |
| controller_vehicleController_shiftLogic_electricMotor.setIgnition `vlua` | 1 | 414 |  |
| controller_vehicleController_shiftLogic_electricMotor.setState `vlua` | 1 | 660 |  |
| controller_vehicleController_shiftLogic_electricMotor.shiftDown `vlua` | 0 | 152 |  |
| controller_vehicleController_shiftLogic_electricMotor.shiftToGearIndex `vlua` | 1 | 163 |  |
| controller_vehicleController_shiftLogic_electricMotor.shiftUp `vlua` | 0 | 141 |  |
| controller_vehicleController_shiftLogic_manualGearbox.gearboxBehaviorChanged `vlua` | 1 | 87 |  |
| controller_vehicleController_shiftLogic_manualGearbox.getGearName `vlua` | 0 | 79 |  |
| controller_vehicleController_shiftLogic_manualGearbox.getGearPosition `vlua` | 0 | 83 | multiple |
| controller_vehicleController_shiftLogic_manualGearbox.getState `vlua` | 0 | 674 |  |
| controller_vehicleController_shiftLogic_manualGearbox.init `vlua` | 2 | 596 |  |
| controller_vehicleController_shiftLogic_manualGearbox.sendTorqueData `vlua` | 0 | 590 |  |
| controller_vehicleController_shiftLogic_manualGearbox.setState `vlua` | 1 | 680 |  |
| controller_vehicleController_shiftLogic_manualGearbox.shiftDownOnDown `vlua` | 0 | 145 |  |
| controller_vehicleController_shiftLogic_manualGearbox.shiftDownOnUp `vlua` | 0 | 169 |  |
| controller_vehicleController_shiftLogic_manualGearbox.shiftToGearIndex `vlua` | 1 | 178 |  |
| controller_vehicleController_shiftLogic_manualGearbox.shiftUpOnDown `vlua` | 0 | 112 |  |
| controller_vehicleController_shiftLogic_manualGearbox.shiftUpOnUp `vlua` | 0 | 136 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.gearboxBehaviorChanged `vlua` | 1 | 79 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.getGearName `vlua` | 0 | 71 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.getGearPosition `vlua` | 0 | 75 | multiple |
| controller_vehicleController_shiftLogic_sequentialGearbox.getState `vlua` | 0 | 476 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.init `vlua` | 2 | 411 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.sendTorqueData `vlua` | 0 | 405 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.setState `vlua` | 1 | 482 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.shiftDown `vlua` | 0 | 109 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.shiftToGearIndex `vlua` | 2 | 127 |  |
| controller_vehicleController_shiftLogic_sequentialGearbox.shiftUp `vlua` | 0 | 91 |  |
| controller_vehicleController_vehicleController.cycleGearboxModes `vlua` | 0 | 633 |  |
| controller_vehicleController_vehicleController.getState `vlua` | 0 | 1157 |  |
| controller_vehicleController_vehicleController.init `vlua` | 1 | 912 |  |
| controller_vehicleController_vehicleController.initLastStage `vlua` | 0 | 1124 |  |
| controller_vehicleController_vehicleController.onDeserialize `vlua` | 1 | 1136 |  |
| controller_vehicleController_vehicleController.onSerialize `vlua` | 0 | 1146 | table |
| controller_vehicleController_vehicleController.reset `vlua` | 1 | 821 |  |
| controller_vehicleController_vehicleController.resetLastStage `vlua` | 1 | 906 |  |
| controller_vehicleController_vehicleController.sendTorqueData `vlua` | 0 | 682 |  |
| controller_vehicleController_vehicleController.setAggressionOverride `vlua` | 1 | 155 |  |
| controller_vehicleController_vehicleController.setEngineIgnition `vlua` | 1 | 674 |  |
| controller_vehicleController_vehicleController.setFreeze `vlua` | 1 | 667 |  |
| controller_vehicleController_vehicleController.setGearboxMode `vlua` | 1 | 169 |  |
| controller_vehicleController_vehicleController.setStarter `vlua` | 1 | 657 |  |
| controller_vehicleController_vehicleController.setState `vlua` | 1 | 1166 |  |
| controller_vehicleController_vehicleController.settingsChanged `vlua` | 0 | 731 |  |
| controller_vehicleController_vehicleController.shiftDownOnDown `vlua` | 0 | 615 |  |
| controller_vehicleController_vehicleController.shiftDownOnUp `vlua` | 0 | 623 |  |
| controller_vehicleController_vehicleController.shiftToGearIndex `vlua` | 1 | 629 |  |
| controller_vehicleController_vehicleController.shiftUpOnDown `vlua` | 0 | 602 |  |
| controller_vehicleController_vehicleController.shiftUpOnUp `vlua` | 0 | 609 |  |
| controller_vehicleController_vehicleController.smartParkingBrake `vlua` | 3 | 404 |  |
| controller_vehicleController_vehicleController.vehicleActivated `vlua` | 0 | 1128 |  |
| controller_vivaceGauges.init `vlua` | 1 | 61 |  |
| controller_vivaceGauges.reset `vlua` | 0 | 89 |  |
| controller_vivaceGauges.setParameters `vlua` | 1 | 96 |  |
| controller_wendoverGauges.init `vlua` | 1 | 65 |  |
| controller_wendoverGauges.reset `vlua` | 0 | 92 |  |
| core_booster.boost `vlua` | 2 | 35 |  |
| core_quickAccess.addEntry `vlua` | 1 | 20 | boolean |
| core_quickAccess.onExtensionLoaded `vlua` | 0 | 289 |  |
| core_quickAccess.onInit `vlua` |0 | 171 |  |
| core_quickAccess.registerMenu `vlua` | 0 | 316 |  |
| core_quickAccess.requestItems `vlua` | 1 | 97 | boolean |
| core_quickAccess.selectItem `vlua` | 3 | 130 | boolean |
| couplings.couplingAttached `vlua` | 3 | 30 |  |
| couplings.couplingDetached `vlua` | 3 | 35 |  |
| couplings.isAutoCouplingActive `vlua` | 0 | 39 | boolean |
| couplings.isCouplerAttached `vlua` | 0 | 44 |  |
| couplings.onBeamstateActivateAutoCoupling `vlua` | 0 | 7 |  |
| couplings.onBeamstateDetachCouplers `vlua` | 0 | 23 |  |
| couplings.onBeamstateDisableAutoLatching `vlua` | 0 | 15 |  |
| cruiseControl.changeSpeed `vlua` | 1 | 81 |  |
| cruiseControl.getConfiguration `vlua` | 0 | 123 | table |
| cruiseControl.holdCurrentSpeed `vlua` | 0 | 89 |  |
| cruiseControl.requestState `vlua` | 0 | 110 |  |
| cruiseControl.setEnabled `vlua` | 1 | 97 |  |
| cruiseControl.setSpeed `vlua` | 1 | 73 |  |
| cruiseControl.setTargetAcceleration `vlua` | 1 | 106 |  |
| damageTracker.getDamage `vlua` | 2 | 77 |  |
| damageTracker.init `vlua` | 0 | 105 |  |
| damageTracker.registerDamageUpdateCallback `vlua` | 1 | 90 |  |
| damageTracker.reset `vlua` | 0 | 97 |  |
| damageTracker.sendNow `vlua` | 0 | 81 |  |
| damageTracker.setDamage `vlua` | 4 | 46 |  |
| damageTracker.setDamageTemporary `vlua` | 6 | 71 |  |
| damageTracker.updateGFX `vlua` |0 | 41 |  |
| damageTracker.willSend `vlua` | 0 | 86 |  |
| debug_advancedExternalDebug.debugPacket `vlua` | 1 | 19 |  |
| debug_advancedExternalDebug.onExtensionLoaded `vlua` | 0 | 127 |  |
| dragAi.getReady `vlua` | 0 | 10 |  |
| dragAi.go `vlua` | 0 | 14 |  |
| dragAi.reset `vlua` | 0 | 61 |  |
| dragAi.setTarget `vlua` | 1 | 19 |  |
| drivetrain.init `vlua` | 0 | 66 |  |
| drivetrain.reset `vlua` | 0 | 66 |  |
| drivetrain.setShifterMode `vlua` | 1 | 49 |  |
| drivetrain.shiftToGear `vlua` | 1 | 62 |  |
| drivetrain.updateGFX `vlua` |0 | 31 |  |
| dynamicVehicleData.getPowertrainLayout `vlua` | 0 | 465 | string |
| dynamicVehicleData.performTests `vlua` | 2 | 1037 |  |
| dynoClient.initDyno `vlua` | 2 | 16 |  |
| electrics.horn `vlua` | 1 | 1000 |  |
| electrics.init `vlua` | 0 | 795 |  |
| electrics.initLastStage `vlua` | 0 | 915 |  |
| electrics.light_flash_highbeams `vlua` | 1 | 962 |  |
| electrics.reset `vlua` | 0 | 746 |  |
| electrics.resetLastStage `vlua` | 0 | 915 |  |
| electrics.setAllowedIgnitionLevels `vlua` | 1 | 712 |  |
| electrics.setIgnitionLevel `vlua` | 1 | 320 |  |
| electrics.setLightsState `vlua` | 1 | 988 |  |
| electrics.set_fog_lights `vlua` | 1 | 996 |  |
| electrics.set_left_signal `vlua` | 2 | 172 |  |
| electrics.set_lightbar_signal `vlua` | 1 | 971 |  |
| electrics.set_right_signal `vlua` | 2 | 217 |  |
| electrics.set_warn_signal `vlua` | 1 | 922 |  |
| electrics.stop_turn_signal `vlua` | 0 | 134 |  |
| electrics.toggleIgnitionLevelOnDown `vlua` | 0 | 1020 |  |
| electrics.toggleIgnitionLevelOnUp `vlua` | 0 | 1024 |  |
| electrics.toggle_fog_lights `vlua` | 0 | 992 |  |
| electrics.toggle_highbeams `vlua` | 0 | 949 |  |
| electrics.toggle_left_signal `vlua` | 0 | 149 |  |
| electrics.toggle_lightbar_signal `vlua` | 0 | 984 |  |
| electrics.toggle_lights `vlua` | 0 | 934 |  |
| electrics.toggle_right_signal `vlua` | 0 | 194 |  |
| electrics.toggle_warn_signal `vlua` | 0 | 930 |  |
| electrics.updateGFX `vlua` |1 | 356 |  |
| electrics.updateGFXSecondStep `vlua` | 1 | 448 |  |
| electricsCustomValueParser.compileCustomValueUpdates `vlua` | 1 | 159 | string |
| electricsCustomValueParser.resetCustomValues `vlua` | 0 | 111 |  |
| energyStorage.beamBroke `vlua` | 1 | 170 |  |
| energyStorage.getPartCondition `vlua` | 1 | 258 | multiple |
| energyStorage.getStorage `vlua` | 1 | 214 |  |
| energyStorage.getStorageSafe `vlua` | 1 | 218 |  |
| energyStorage.getStorages `vlua` | 0 | 210 |  |
| energyStorage.init `vlua` | 0 | 30 |  |
| energyStorage.onCouplerAttached `vlua` |5 | 192 |  |
| energyStorage.onCouplerDetached `vlua` |4 | 201 |  |
| energyStorage.onCouplerFound `vlua` |4 | 183 |  |
| energyStorage.onDeserialize `vlua` | 1 | 278 |  |
| energyStorage.onSerialize `vlua` | 0 | 289 |  |
| energyStorage.reset `vlua` | 0 | 147 |  |
| energyStorage.setPartCondition `vlua` | 4 | 243 |  |
| energyStorage.updateGFX `vlua` |1 | 20 |  |
| energyStorage_electricBattery.new `vlua` | 1 | 52 |  |
| energyStorage_fuelTank.new `vlua` | 1 | 87 |  |
| energyStorage_n2oTank.new `vlua` | 1 | 83 |  |
| energyStorage_pressureTank.new `vlua` | 1 | 268 |  |
| escCalibration.startSkewStiffnessTest `vlua` | 0 | 191 |  |
| escCalibration.stopSkewStiffnessTest `vlua` | 0 | 209 |  |
| escMeasurement.performTests `vlua` | 2 | 507 |  |
| escMeasurement.startSkewStiffnessTest `vlua` | 0 | 457 |  |
| escMeasurement.stopSkewStiffnessTest `vlua` | 0 | 499 |  |
| escMeasurement.updateFixedStepCallback `vlua` | 1 | 390 |  |
| escMeasurement.updateGFXCallback `vlua` | 1 | 394 |  |
| extensions.hook `vlua` |1+ | 768 |  |
| extensions.onDeserialize `vlua` |0 | 41 |  |
| extensions.onDeserialized `vlua` |0 | 41 |  |
| extensions.onSerialize `vlua` |0 | 41 |  |
| fire.explodeNode `vlua` | 1 | 440 |  |
| fire.explodeVehicle `vlua` | 0 | 427 |  |
| fire.extinguishVehicle `vlua` | 0 | 453 |  |
| fire.extinguishVehicleSlowly `vlua` | 0 | 461 |  |
| fire.getClosestHotNodeTempDistance `vlua` | 1 | 43 | multiple |
| fire.igniteNode `vlua` | 2 | 375 |  |
| fire.igniteRandomNode `vlua` | 0 | 383 |  |
| fire.igniteRandomNodeMinimal `vlua` | 0 | 398 |  |
| fire.igniteVehicle `vlua` | 0 | 419 |  |
| fire.init `vlua` | 0 | 289 |  |
| fire.nodeCollision `vlua` |1 | 265 |  |
| fire.reset `vlua` | 0 | 289 |  |
| fire.updateGFX `vlua` |1 | 69 |  |
| gameplayInterface.debugCallback `vlua` | 2 | 15 |  |
| gameplayInterface.executeAction `vlua` | 3+ | 98 |  |
| gameplayInterface.getSystemData `vlua` | 3+ | 66 |  |
| gameplayInterface.onExtensionLoaded `vlua` | 0 | 191 |  |
| gameplayInterface.registerCallback `vlua` | 2 | 161 |  |
| gameplayInterface.registerModule `vlua` | 3 | 167 |  |
| gameplayInterface.registerValueChangeNotification `vlua` | 3 | 129 |  |
| gameplayInterface.triggerValueChangeNotification `vlua` | 2 | 155 |  |
| gameplayInterface.unregisterValueChangeNotification `vlua` | 2 | 137 |  |
| gameplayInterfaceModules_interactAI.onExtensionLoaded `vlua` | 0 | 69 |  |
| gameplayInterfaceModules_interactAI.requestRegistration `vlua` | 1 | 65 |  |
| gameplayInterfaceModules_interactBeamstate.onExtensionLoaded `vlua` | 0 | 36 |  |
| gameplayInterfaceModules_interactBeamstate.requestRegistration `vlua` | 1 | 32 |  |
| gameplayInterfaceModules_interactCargoContainers.onExtensionLoaded `vlua` | 0 | 306 |  |
| gameplayInterfaceModules_interactCargoContainers.requestRegistration `vlua` | 1 | 302 |  |
| gameplayInterfaceModules_interactCargoContainers.setUpdateEnabled `vlua` | 1 | 216 |  |
| gameplayInterfaceModules_interactController.onExtensionLoaded `vlua` | 0 | 60 |  |
| gameplayInterfaceModules_interactController.requestRegistration `vlua` | 1 | 56 |  |
| gameplayInterfaceModules_interactElectrics.onExtensionLoaded `vlua` | 0 | 51 |  |
| gameplayInterfaceModules_interactElectrics.requestRegistration `vlua` | 1 | 47 |  |
| gameplayInterfaceModules_interactEnergyStorage.onExtensionLoaded `vlua` | 0 | 44 |  |
| gameplayInterfaceModules_interactEnergyStorage.requestRegistration `vlua` | 1 | 40 |  |
| gameplayInterfaceModules_interactFire.onExtensionLoaded `vlua` | 0 | 26 |  |
| gameplayInterfaceModules_interactFire.requestRegistration `vlua` | 1 | 22 |  |
| gameplayInterfaceModules_interactMisc.onExtensionLoaded `vlua` | 0 | 34 |  |
| gameplayInterfaceModules_interactMisc.requestRegistration `vlua` | 1 | 30 |  |
| gameplayInterfaceModules_interactPartCondition.onExtensionLoaded `vlua` | 0 | 91 |  |
| gameplayInterfaceModules_interactPartCondition.requestRegistration `vlua` | 1 | 87 |  |
| gameplayInterfaceModules_interactPowertrain.onExtensionLoaded `vlua` | 0 | 26 |  |
| gameplayInterfaceModules_interactPowertrain.requestRegistration `vlua` | 1 | 22 |  |
| gameplayInterfaceModules_interactRecovery.onExtensionLoaded `vlua` | 0 | 26 |  |
| gameplayInterfaceModules_interactRecovery.requestRegistration `vlua` | 1 | 22 |  |
| gameplayInterfaceModules_interactVehiclePerformanceData.onExtensionLoaded `vlua` | 0 | 49 |  |
| gameplayInterfaceModules_interactVehiclePerformanceData.requestRegistration `vlua` | 1 | 45 |  |
| gameplayStatistic.addSchedule `vlua` | 1 | 31 |  |
| gameplayStatistic.metricAdd `vlua` | 3 | 14 |  |
| gameplayStatistic.metricSet `vlua` | 3 | 18 |  |
| gameplayStatistic.onExtensionLoaded `vlua` | 0 | 53 |  |
| gameplayStatistic.removeSchedule `vlua` | 1 | 38 | boolean |
| gameplayStatistic.updateGFX `vlua` |1 | 22 |  |
| gameplayStatisticModules_watchAirtime.onExtensionLoaded `vlua` | 0 | 39 |  |
| gameplayStatisticModules_watchAirtime.workload `vlua` | 0 | 11 |  |
| gameplayStatisticModules_watchBurnout.onExtensionLoaded `vlua` | 0 | 42 | boolean |
| gameplayStatisticModules_watchBurnout.workload `vlua` | 0 | 15 |  |
| gui.graph `vlua` |1+ | 133 |  |
| gui.graphWithCSV `vlua` |1+ | 149 |  |
| gui.graphWithCSVWrite `vlua` |0 | 167 |  |
| gui.message `vlua` |4 | 126 |  |
| gui.queueStream `vlua` |2 | 109 |  |
| gui.reset `vlua` |0 | 97 |  |
| gui.send `vlua` |2 | 109 |  |
| gui.sendStreams `vlua` |0 | 88 |  |
| gui.trigger `vlua` |1+ | 26 |  |
| gui.triggerClient `vlua` |2+ | 41 |  |
| gui.triggerRawJS `vlua` |2 | 54 |  |
| gui.triggerStream `vlua` |2 | 58 |  |
| guihooks.queueStream `vlua` |2 | 109 |  |
| guihooks.send `vlua` |2 | 109 |  |
| guistreams.drawGraph `vlua` | 2 | 106 |  |
| guistreams.hasActiveStreams `vlua` | 0 | 101 |  |
| guistreams.reset `vlua` | 0 | 20 |  |
| guistreams.setRequiredStreams `vlua` | 1 | 92 |  |
| guistreams.update `vlua` | 0 | 83 |  |
| guistreams.willSend `vlua` | 1 | 16 |  |
| htmlTexture.call `vlua` | 3 | 38 |  |
| htmlTexture.create `vlua` | 6 | 45 |  |
| htmlTexture.new `vlua` | 6 | 17 |  |
| hydros.debugDraw `vlua` | 0 | 245 |  |
| hydros.destroy `vlua` | 0 | 839 |  |
| hydros.enableVirtualWheel `vlua` | 3 | 102 |  |
| hydros.getFFBConfig `vlua` | 0 | 578 | table |
| hydros.init `vlua` | 0 | 703 |  |
| hydros.isPhysicsStepUsed `vlua` | 0 | 853 |  |
| hydros.onFFBConfigChanged `vlua` | 1 | 608 |  |
| hydros.reset `vlua` | 0 | 809 |  |
| hydros.sendHydroStateToGUI `vlua` | 0 | 843 |  |
| hydros.sendRPMLeds `vlua` | 3 | 847 |  |
| hydros.setExternalForce `vlua` | 1 | 119 |  |
| hydros.setFFBConfig `vlua` | 1 | 589 |  |
| hydros.setJerkForceMultiplier `vlua` | 1 | 859 |  |
| hydros.setJerkMin `vlua` | 1 | 861 |  |
| hydros.setWheelSlipForceMultiplier `vlua` | 1 | 858 |  |
| hydros.setWheelSlipMin `vlua` | 1 | 860 |  |
| hydros.update `vlua` | 1 | 510 |  |
| hydros.updateGFX `vlua` |1 | 390 |  |
| input.event `vlua` | 7 | 710 |  |
| input.init `vlua` | 0 | 87 |  |
| input.initSecondStage `vlua` | 0 | 143 |  |
| input.kbdSteer `vlua` | 3 | 746 |  |
| input.padAccelerateBrake `vlua` | 2 | 756 |  |
| input.reset `vlua` | 0 | 687 |  |
| input.setAllowedInputSource `vlua` | 3 | 817 |  |
| input.settingsChanged `vlua` | 0 | 766 |  |
| input.toggleEvent `vlua` | 1 | 731 |  |
| input.updateGFX `vlua` |1 | 574 |  |
| inputAnalyzer.registerInputString `vlua` | 2 | 91 |  |
| inputAnalyzer.unregisterInputString `vlua` | 2 | 115 |  |
| jbeam_stage2.loadVehicleStage2 `vlua` | 1 | 521 |  |
| mapmgr.clearCustomMap `vlua` | 0 | 78 |  |
| mapmgr.disableTracking `vlua` | 1 | 155 |  |
| mapmgr.enableTracking `vlua` | 1 | 150 |  |
| mapmgr.findBestRoad `vlua` | 3 | 257 | multiple |
| mapmgr.findClosestRoad `vlua` | 2 | 225 | multiple |
| mapmgr.getObjects `vlua` | 0 | 171 |  |
| mapmgr.getPointToPointPath `vlua` | 7 | 369 | table |
| mapmgr.init `vlua` | 0 | 165 |  |
| mapmgr.requestMap `vlua` | 0 | 67 |  |
| mapmgr.reset `vlua` | 0 | 161 |  |
| mapmgr.sendTracking `vlua` |0 | 104 |  |
| mapmgr.setCustomMap `vlua` | 1 | 71 |  |
| mapmgr.setMap `vlua` | 1 | 44 |  |
| mapmgr.setSignals `vlua` | 1 | 86 |  |
| mapmgr.surfaceNormalBelow `vlua` | 2 | 182 |  |
| mapmgr.updateDrivabilities `vlua` | 0 | 20 |  |
| mapmgr.updateSignals `vlua` | 1 | 90 |  |
| material.forceReset `vlua` | 0 | 123 |  |
| material.init `vlua` | 0 | 141 | string |
| material.reset `vlua` | 0 | 133 |  |
| material.switchBrokenMaterial `vlua` | 1 | 33 |  |
| material.updateGFX `vlua` |0 | 51 |  |
| mqttGrafanaDemo.onExtensionLoaded `vlua` | 0 | 142 |  |
| mqttGrafanaDemo.onExtensionUnloaded `vlua` | 0 | 155 |  |
| odometer.getRelativeRecording `vlua` | 0 | 30 |  |
| odometer.onExtensionLoaded `vlua` | 0 | 34 |  |
| odometer.onReset `vlua` |0 | 13 |  |
| odometer.startRecording `vlua` | 0 | 26 |  |
| odometer.submitStatistic `vlua` | 0 | 37 |  |
| odometer.updateGFX `vlua` |1 | 17 |  |
| partCondition.applyConditionSnapshot `vlua` | 1 | 50 |  |
| partCondition.createConditionSnapshot `vlua` | 1 | 40 |  |
| partCondition.deleteConditionSnapshots `vlua` | 0 | 65 |  |
| partCondition.ensureConditionsInit `vlua` | 3 | 558 |  |
| partCondition.getConditions `vlua` | 0 | 489 |  |
| partCondition.getRootPartOdometerValue `vlua` | 0 | 262 |  |
| partCondition.getRootPartTripValue `vlua` | 0 | 268 |  |
| partCondition.initConditions `vlua` | 5 | 515 |  |
| partCondition.reset `vlua` | 0 | 474 |  |
| partCondition.setAllPartPaints `vlua` | 2 | 356 |  |
| partCondition.setPartMeshPaints `vlua` | 2 | 273 |  |
| partCondition.setPartPaints `vlua` | 3 | 348 |  |
| partCondition.setResetSnapshotKey `vlua` | 1 | 70 |  |
| partCondition.testInit `vlua` | 0 | 564 |  |
| partCondition.testLoad `vlua` | 0 | 569 |  |
| partCondition.testSave `vlua` | 0 | 575 |  |
| particlefilter.nodeCollision `vlua` | 1 | 25 |  |
| path.dirname `vlua` |1 | 1048 |  |
| path.getCurrentPath `vlua` |0 | 1092 |  |
| path.getPathLevelInfo `vlua` |1 | 1101 |  |
| path.getPathLevelMain `vlua` |1 | 1097 |  |
| path.is_file `vlua` |1 | 1062 |  |
| path.levelFromPath `vlua` |1 | 1106 |  |
| path.split `vlua` |2 | 1072 |  |
| path.splitWithoutExt `vlua` |2 | 1086 |  |
| perfectLaunch.go `vlua` | 0 | 35 |  |
| perfectLaunch.prepare `vlua` | 1 | 40 |  |
| perfectLaunch.stop `vlua` | 0 | 50 |  |
| performanceLogger.measureAverage `vlua` | 3 | 28 |  |
| performanceLogger.startMeasurement `vlua` | 1 | 12 |  |
| performanceLogger.stopAvergage `vlua` | 1 | 22 |  |
| performanceLogger.stopMeasurement `vlua` | 1 | 41 |  |
| powertrain.beamBroke `vlua` | 1 | 793 |  |
| powertrain.breakDevice `vlua` | 1 | 779 |  |
| powertrain.calculateTreeInertia `vlua` | 0 | 312 |  |
| powertrain.dumpsDeviceData `vlua` | 1 | 128 |  |
| powertrain.getAllWheelPropulsionDevices `vlua` | 0 | 949 |  |
| powertrain.getChildWheels `vlua` | 2 | 914 | table |
| powertrain.getDevice `vlua` | 1 | 890 |  |
| powertrain.getDevices `vlua` | 0 | 882 |  |
| powertrain.getDevicesByCategory `vlua` | 1 | 904 |  |
| powertrain.getDevicesByType `vlua` | 1 | 894 |  |
| powertrain.getEngineSoundID `vlua` | 0 | 998 |  |
| powertrain.getHydraulicConsumer `vlua` | 1 | 966 |  |
| powertrain.getOrderedDevices `vlua` | 0 | 886 |  |
| powertrain.getPartCondition `vlua` | 1 | 1032 | multiple |
| powertrain.getPoweredWheelNames `vlua` | 0 | 938 |  |
| powertrain.getPropulsionDeviceForDevice `vlua` | 1 | 981 |  |
| powertrain.getPropulsionDeviceForWheel `vlua` | 1 | 934 |  |
| powertrain.getState `vlua` |0 | 41 |  |
| powertrain.getStateEvents `vlua` | 0 | 1060 |  |
| powertrain.init `vlua` | 0 | 412 |  |
| powertrain.initSounds `vlua` | 0 | 706 |  |
| powertrain.isPhysicsStepUsed `vlua` | 0 | 1054 |  |
| powertrain.onCouplerAttached `vlua` |5 | 819 |  |
| powertrain.onCouplerDetached `vlua` |4 | 828 |  |
| powertrain.onCouplerFound `vlua` |4 | 810 |  |
| powertrain.publishStateEvent `vlua` |0 | 41 |  |
| powertrain.reset `vlua` | 0 | 718 |  |
| powertrain.resetSounds `vlua` | 0 | 761 |  |
| powertrain.sendDeviceTree `vlua` | 0 | 258 |  |
| powertrain.sendTorqueData `vlua` | 0 | 294 |  |
| powertrain.serializeDevicesInfo `vlua` | 0 | 74 |  |
| powertrain.setDeviceMode `vlua` | 2 | 837 |  |
| powertrain.setPartCondition `vlua` | 4 | 1016 |  |
| powertrain.setState `vlua` |0 | 41 |  |
| powertrain.setVehiclePath `vlua` | 1 | 994 |  |
| powertrain.toggleDefaultDiffs `vlua` | 0 | 874 |  |
| powertrain.toggleDeviceMode `vlua` | 1 | 848 |  |
| powertrain.triggerStateEvent `vlua` |0 | 41 |  |
| powertrain.update `vlua` |1 | 232 |  |
| powertrain.updateGFX `vlua` |1 | 172 |  |
| powertrain.updateGFXLastStage `vlua` | 1 | 223 |  |
| powertrain.updateSimpleControlButtons `vlua` | 0 | 304 |  |
| powertrain_automaticGearbox.new `vlua` | 1 | 366 |  |
| powertrain_centrifugalClutch.new `vlua` | 1 | 232 |  |
| powertrain_combustionEngine.new `vlua` | 1 | 1671 |  |
| powertrain_combustionEngineThermals.applyDeformGroupDamageOilRadiator `vlua` | 1 | 284 |  |
| powertrain_combustionEngineThermals.applyDeformGroupDamageOilpan `vlua` | 1 | 279 |  |
| powertrain_combustionEngineThermals.applyDeformGroupDamageRadiator `vlua` | 1 | 275 |  |
| powertrain_combustionEngineThermals.beamBroke `vlua` | 1 | 1331 |  |
| powertrain_combustionEngineThermals.getPartConditionExhaust `vlua` | 0 | 387 | multiple |
| powertrain_combustionEngineThermals.getPartConditionRadiator `vlua` | 0 | 374 | multiple |
| powertrain_combustionEngineThermals.getPartConditionThermals `vlua` | 0 | 394 | multiple |
| powertrain_combustionEngineThermals.init `vlua` | 2 | 1819 |  |
| powertrain_combustionEngineThermals.initSounds `vlua` | 1 | 1763 |  |
| powertrain_combustionEngineThermals.reset `vlua` | 1 | 1391 |  |
| powertrain_combustionEngineThermals.resetSounds `vlua` | 0 | 1800 |  |
| powertrain_combustionEngineThermals.setPartConditionExhaust `vlua` | 3 | 335 |  |
| powertrain_combustionEngineThermals.setPartConditionRadiator `vlua` | 3 | 322 |  |
| powertrain_combustionEngineThermals.setPartConditionThermals `vlua` | 3 | 343 |  |
| powertrain_compressor.new `vlua` | 1 | 228 |  |
| powertrain_cvtGearbox.new `vlua` | 1 | 180 |  |
| powertrain_dctGearbox.new `vlua` | 1 | 351 |  |
| powertrain_differential.new `vlua` | 1 | 279 |  |
| powertrain_electricMotor.new `vlua` | 1 | 505 |  |
| powertrain_electricServo.new `vlua` | 1 | 147 |  |
| powertrain_electricWinch.new `vlua` | 1 | 82 |  |
| powertrain_frictionClutch.new `vlua` | 1 | 232 |  |
| powertrain_genericTorqueProvider.new `vlua` | 1 | 124 |  |
| powertrain_hydraulicAccumulator.new `vlua` | 1 | 249 |  |
| powertrain_hydraulicCylinder.new `vlua` | 2 | 455 |  |
| powertrain_hydraulicPump.new `vlua` | 1 | 275 |  |
| powertrain_linearActuator.new `vlua` | 1 | 128 |  |
| powertrain_manualGearbox.new `vlua` | 1 | 486 |  |
| powertrain_multiShaft.new `vlua` | 1 | 87 |  |
| powertrain_nitrousOxideInjection.getAddedTorque `vlua` | 0 | 262 |  |
| powertrain_nitrousOxideInjection.getTankRatio `vlua` | 0 | 53 |  |
| powertrain_nitrousOxideInjection.init `vlua` | 2 | 196 |  |
| powertrain_nitrousOxideInjection.initSounds `vlua` | 1 | 251 |  |
| powertrain_nitrousOxideInjection.purgeLines `vlua` | 1 | 49 |  |
| powertrain_nitrousOxideInjection.registerStorage `vlua` | 1 | 169 |  |
| powertrain_nitrousOxideInjection.reset `vlua` | 0 | 180 |  |
| powertrain_nitrousOxideInjection.resetSounds `vlua` | 0 | 256 |  |
| powertrain_rangeBox.new `vlua` | 1 | 114 |  |
| powertrain_sequentialGearbox.new `vlua` | 1 | 306 |  |
| powertrain_shaft.new `vlua` | 1 | 250 |  |
| powertrain_splitShaft.new `vlua` | 1 | 197 |  |
| powertrain_supercharger.applyDeformGroupDamage `vlua` | 1 | 72 |  |
| powertrain_supercharger.getPartCondition `vlua` | 0 | 91 | multiple |
| powertrain_supercharger.getTorqueCoefs `vlua` | 0 | 332 |  |
| powertrain_supercharger.init `vlua` | 2 | 221 |  |
| powertrain_supercharger.initSounds `vlua` | 1 | 195 |  |
| powertrain_supercharger.reset `vlua` | 1 | 214 |  |
| powertrain_supercharger.resetSounds `vlua` | 1 | 192 |  |
| powertrain_supercharger.setBypassPressure `vlua` | 1 | 102 |  |
| powertrain_supercharger.setPartCondition `vlua` | 3 | 77 |  |
| powertrain_supercharger.updateSounds `vlua` | 1 | 106 |  |
| powertrain_torqueConverter.new `vlua` | 1 | 136 |  |
| powertrain_torsionReactor.new `vlua` | 1 | 67 |  |
| powertrain_turbocharger.applyDeformGroupDamage `vlua` | 1 | 114 |  |
| powertrain_turbocharger.getPartCondition `vlua` | 0 | 135 | multiple |
| powertrain_turbocharger.getTorqueCoefs `vlua` | 0 | 527 |  |
| powertrain_turbocharger.init `vlua` | 2 | 345 |  |
| powertrain_turbocharger.initSounds `vlua` | 1 | 502 |  |
| powertrain_turbocharger.reset `vlua` | 1 | 311 |  |
| powertrain_turbocharger.resetSounds `vlua` | 1 | 524 |  |
| powertrain_turbocharger.setAntilagCoef `vlua` | 1 | 553 |  |
| powertrain_turbocharger.setPartCondition `vlua` | 3 | 120 |  |
| powertrain_turbocharger.setWastegateOffset `vlua` | 1 | 549 |  |
| powertrain_viscousClutch.new `vlua` | 1 | 89 |  |
| props.disablePropsInDeformGroup `vlua` | 1 | 39 |  |
| props.hidePropsInBreakGroup `vlua` | 1 | 52 |  |
| props.init `vlua` | 0 | 66 |  |
| props.reset `vlua` | 0 | 66 |  |
| props.updateGFX `vlua` |0 | 29 |  |
| protocols.destroy `vlua` | 0 | 193 |  |
| protocols.init `vlua` | 0 | 206 |  |
| protocols.isPhysicsStepUsed `vlua` | 0 | 255 |  |
| protocols.onPlayersChanged `vlua` |1 | 263 |  |
| protocols.reset `vlua` | 0 | 125 |  |
| protocols.settingsChanged `vlua` | 0 | 259 |  |
| protocols.update `vlua` |0 | 41 |  |
| protocols.updateGFX `vlua` |0 | 41 |  |
| protocols_motionSim.fillStruct `vlua` | 2 | 42 |  |
| protocols_motionSim.getAddress `vlua` | 0 | 14 |  |
| protocols_motionSim.getMaxUpdateRate `vlua` | 0 | 16 |  |
| protocols_motionSim.getPort `vlua` | 0 | 15 |  |
| protocols_motionSim.getStructDefinition `vlua` | 0 | 23 |  |
| protocols_motionSim.init `vlua` | 0 | 12 |  |
| protocols_motionSim.isPhysicsStepUsed `vlua` | 0 | 18 | boolean |
| protocols_motionSim.reset `vlua` | 0 | 13 |  |
| protocols_outgauge.fillStruct `vlua` | 2 | 84 |  |
| protocols_outgauge.getAddress `vlua` | 0 | 19 |  |
| protocols_outgauge.getMaxUpdateRate `vlua` | 0 | 21 |  |
| protocols_outgauge.getPort `vlua` | 0 | 20 |  |
| protocols_outgauge.getStructDefinition `vlua` | 0 | 28 |  |
| protocols_outgauge.init `vlua` | 0 | 13 |  |
| protocols_outgauge.isPhysicsStepUsed `vlua` | 0 | 23 | boolean |
| protocols_outgauge.reset `vlua` | 0 | 18 |  |
| recovery.clear `vlua` | 0 | 33 |  |
| recovery.getFreeCamActiveFlag `vlua` | 0 | 85 |  |
| recovery.init `vlua` | 1 | 321 |  |
| recovery.loadHome `vlua` | 1 | 149 |  |
| recovery.onDeserialized `vlua` | 1 | 38 |  |
| recovery.recoverInPlace `vlua` | 0 | 317 |  |
| recovery.saveHome `vlua` | 1 | 142 |  |
| recovery.setFreeCamActiveFlag `vlua` | 1 | 81 |  |
| recovery.startRecovering `vlua` | 1 | 305 |  |
| recovery.stopRecovering `vlua` | 0 | 182 |  |
| recovery.updateGFX `vlua` |1 | 157 |  |
| scenario.freeze `vlua` |1 | 565 |  |
| scenario_annotate.onVehicleScenarioData `vlua` | 1 | 35 |  |
| scenario_functionFreezer.onExtensionLoaded `vlua` | 0 | 38 |  |
| scenario_functionFreezer.onExtensionUnloaded `vlua` | 0 | 51 |  |
| scenario_functionFreezer.onVehicleScenarioData `vlua` | 1 | 57 |  |
| scenario_shiftBooster.listenToShift `vlua` | 0 | 27 |  |
| scenario_shiftBooster.manualBoost `vlua` | 2 | 68 |  |
| scenario_shiftBooster.onVehicleScenarioData `vlua` | 1 | 65 |  |
| scriptai.debugDraw `vlua` | 0 | 806 |  |
| scriptai.getInitialSpawnPositionOrientation `vlua` | 3 | 125 | multiple |
| scriptai.isDriving `vlua` | 0 | 831 |  |
| scriptai.scriptState `vlua` | 0 | 822 |  |
| scriptai.scriptStop `vlua` | 2 | 327 |  |
| scriptai.setLogDataToCSV `vlua` | 1 | 37 |  |
| scriptai.setSpeedDiffSmootherOutRate `vlua` | 1 | 50 |  |
| scriptai.startFollowing `vlua` | 5 | 654 |  |
| scriptai.startRecording `vlua` | 1 | 630 |  |
| scriptai.stopFollowing `vlua` | 2 | 327 |  |
| scriptai.stopRecording `vlua` | 0 | 642 | table |
| scriptai.wheelToGroundDist `vlua` | 3 | 63 |  |
| sensors.init `vlua` | 0 | 36 |  |
| sensors.reset `vlua` | 0 | 19 |  |
| sensors.updateGFX `vlua` |1 | 25 |  |
| simpleTripApp.onExtensionLoaded `vlua` | 0 | 66 |  |
| simpleTripApp.reset `vlua` | 0 | 14 |  |
| skeleton.onExtensionLoaded `vlua` | 0 | 11 | boolean |
| sounds.FMODHzToHz `vlua` | 1 | 1299 |  |
| sounds.bodyCollision `vlua` | 1 | 1016 |  |
| sounds.createSFXSource `vlua` | 4 | 195 |  |
| sounds.createSoundObj `vlua` | 4 | 209 |  |
| sounds.createSoundscapeSound `vlua` | 1 | 104 |  |
| sounds.disableOldEngineSounds `vlua` | 0 | 1278 |  |
| sounds.getBeamSounds `vlua` | 0 | 1374 |  |
| sounds.getEngineSoundData `vlua` | 0 | 1378 | multiple |
| sounds.hzToFMODHz `vlua` | 1 | 1285 |  |
| sounds.init `vlua` | 0 | 1045 |  |
| sounds.onDeserialized `vlua` | 0 | 1274 |  |
| sounds.playSoundOnceAtNode `vlua` | 6 | 162 |  |
| sounds.playSoundOnceFollowNode `vlua` | 6 | 169 |  |
| sounds.playSoundSkipAI `vlua` | 2 | 150 |  |
| sounds.reset `vlua` | 0 | 1311 |  |
| sounds.setUIDebug `vlua` | 2 | 1269 |  |
| sounds.updateCabinFilter `vlua` | 0 | 1040 |  |
| sounds.updateGFX `vlua` |1 | 219 |  |
| sounds.updateObjType `vlua` | 0 | 1350 |  |
| straightLine.setTargetDirection `vlua` | 2 | 22 |  |
| straightLine.stop `vlua` | 0 | 37 |  |
| streams.drawGraph `vlua` |2 | 106 |  |
| streams.hasActiveStreams `vlua` |0 | 101 |  |
| streams.reset `vlua` |0 | 20 |  |
| streams.setRequiredStreams `vlua` |1 | 92 |  |
| streams.update `vlua` |0 | 83 |  |
| streams.willSend `vlua` |1 | 16 |  |
| tech_ACC.changeSpeed `vlua` | 1 | 635 |  |
| tech_ACC.loadAccWithID `vlua` | 3 | 792 |  |
| tech_ACC.unloadACC `vlua` | 0 | 823 |  |
| tech_CANBus_ButtonBox.onExtensionLoaded `vlua` | 0 | 176 |  |
| tech_CANBus_ButtonBox.virtualInputCallback `vlua` | 2 | 86 |  |
| tech_CANBus_CANBusPeak.combineTwoBytes `vlua` | 2 | 730 |  |
| tech_CANBus_CANBusPeak.dumpsByte `vlua` | 1 | 763 | string |
| tech_CANBus_CANBusPeak.dumpsByteHex `vlua` | 1 | 767 |  |
| tech_CANBus_CANBusPeak.dumpsMsg `vlua` | 1 | 771 |  |
| tech_CANBus_CANBusPeak.fourBytes `vlua` | 1 | 746 | multiple |
| tech_CANBus_CANBusPeak.highByte `vlua` | 1 | 738 |  |
| tech_CANBus_CANBusPeak.initCANBus `vlua` | 5 | 840 |  |
| tech_CANBus_CANBusPeak.lowByte `vlua` | 1 | 734 |  |
| tech_CANBus_CANBusPeak.onExtensionLoaded `vlua` | 0 | 855 |  |
| tech_CANBus_CANBusPeak.receiveCANBus `vlua` | 1 | 822 | multiple |
| tech_CANBus_CANBusPeak.registerCANMessageCallback `vlua` | 2 | 832 |  |
| tech_CANBus_CANBusPeak.sendCANBusRaw `vlua` | 4 | 802 |  |
| tech_CANBus_CANBusPeak.sendCANMessage `vlua` | 3 | 794 |  |
| tech_CANBus_CANBusPeak.twoBytes `vlua` | 1 | 742 | multiple |
| tech_CANBus_CANBusPeak.unregisterCANMessageCallback `vlua` | 1 | 836 |  |
| tech_CANBus_ProjectBavariaController.onExtensionLoaded `vlua` | 0 | 400 |  |
| tech_CANBus_ProjectBavariaController.virtualInputCallback `vlua` | 2 | 209 |  |
| tech_CANBus_ProjectBavariaKombi.onExtensionLoaded `vlua` | 0 | 351 |  |
| tech_CANBus_ProjectBavariaKombi.tripComputerButtonPress `vlua` | 0 | 332 |  |
| tech_CANBus_ProjectBavariaShifter.onExtensionLoaded `vlua` | 0 | 241 |  |
| tech_CANBus_RacingDisplay.onExtensionLoaded `vlua` | 0 | 249 |  |
| tech_GPS.adHocRequest `vlua` | 2 | 76 |  |
| tech_GPS.cacheLatestReading `vlua` | 2 | 78 |  |
| tech_GPS.create `vlua` | 1 | 41 |  |
| tech_GPS.getGPSReading `vlua` | 1 | 84 |  |
| tech_GPS.getLatest `vlua` | 1 | 86 |  |
| tech_GPS.remove `vlua` | 1 | 64 |  |
| tech_GPS.setIsVisualised `vlua` | 1 | 71 |  |
| tech_GPS.setUpdateTime `vlua` | 2 | 69 |  |
| tech_LINBus_LINBusPeak.combineTwoBytes `vlua` | 2 | 1100 |  |
| tech_LINBus_LINBusPeak.dumpsByte `vlua` | 1 | 1133 | string |
| tech_LINBus_LINBusPeak.dumpsByteHex `vlua` | 1 | 1137 |  |
| tech_LINBus_LINBusPeak.dumpsMsg `vlua` | 1 | 1141 |  |
| tech_LINBus_LINBusPeak.fourBytes `vlua` | 1 | 1116 | multiple |
| tech_LINBus_LINBusPeak.highByte `vlua` | 1 | 1108 |  |
| tech_LINBus_LINBusPeak.initLINBus `vlua` | 3 | 1210 |  |
| tech_LINBus_LINBusPeak.lowByte `vlua` | 1 | 1104 |  |
| tech_LINBus_LINBusPeak.onExtensionLoaded `vlua` | 0 | 1261 |  |
| tech_LINBus_LINBusPeak.receiveLINBus `vlua` | 0 | 1193 | multiple |
| tech_LINBus_LINBusPeak.registerLINMessageCallback `vlua` | 2 | 1202 |  |
| tech_LINBus_LINBusPeak.requestLINData `vlua` | 1 | 1189 |  |
| tech_LINBus_LINBusPeak.sendLINBusRaw `vlua` | 5 | 1170 |  |
| tech_LINBus_LINBusPeak.sendLINMessage `vlua` | 3 | 1163 |  |
| tech_LINBus_LINBusPeak.twoBytes `vlua` | 1 | 1112 | multiple |
| tech_LINBus_LINBusPeak.unregisterLINMessageCallback `vlua` | 1 | 1206 |  |
| tech_OBDEmulator.onExtensionLoaded `vlua` | 0 | 128 |  |
| tech_OBDEmulator.writeSerialPort `vlua` | 1 | 38 |  |
| tech_adasInput.applyAdasInput `vlua` | 2 | 28 |  |
| tech_adasUltrasonic.applyBrakes `vlua` | 1 | 42 |  |
| tech_adasUltrasonic.initAdasUpdate `vlua` | 0 | 20 |  |
| tech_adasUltrasonic.setup `vlua` | 3 | 14 |  |
| tech_advancedIMU.adHocRequest `vlua` | 2 | 86 |  |
| tech_advancedIMU.cacheLatestReading `vlua` | 2 | 88 |  |
| tech_advancedIMU.create `vlua` | 1 | 43 |  |
| tech_advancedIMU.getAdvancedIMUReading `vlua` | 1 | 94 |  |
| tech_advancedIMU.getLatest `vlua` | 1 | 96 |  |
| tech_advancedIMU.remove `vlua` | 1 | 69 |  |
| tech_advancedIMU.setIsUsingGravity `vlua` | 1 | 76 |  |
| tech_advancedIMU.setIsVisualised `vlua` | 1 | 81 |  |
| tech_advancedIMU.setUpdateTime `vlua` | 2 | 74 |  |
| tech_dumpPlayerInput.onExtensionLoaded `vlua` | 0 | 21 |  |
| tech_dumpPlayerInput.onExtensionUnoaded `vlua` | 0 | 27 |  |
| tech_idealRADARSensor.adHocRequest `vlua` | 2 | 60 |  |
| tech_idealRADARSensor.cacheLatestReading `vlua` | 2 | 62 |  |
| tech_idealRADARSensor.create `vlua` | 1 | 38 |  |
| tech_idealRADARSensor.getIdealRADARReading `vlua` | 1 | 68 |  |
| tech_idealRADARSensor.getLatest `vlua` | 1 | 70 |  |
| tech_idealRADARSensor.remove `vlua` | 1 | 53 |  |
| tech_idealRADARSensor.setUpdateTime `vlua` | 2 | 58 |  |
| tech_impactgen_damageEvaluation.evaluateVehicleDamage `vlua` | 0 | 511 | table |
| tech_impactgen_damageEvaluation.getPartBeams `vlua` | 0 | 454 |  |
| tech_mesh.adHocRequest `vlua` | 2 | 83 |  |
| tech_mesh.create `vlua` | 1 | 62 |  |
| tech_mesh.getMeshReading `vlua` | 1 | 87 |  |
| tech_mesh.remove `vlua` | 1 | 75 |  |
| tech_mesh.setUpdateTime `vlua` | 2 | 79 |  |
| tech_platooning.changeLeader `vlua` | 1 | 1209 |  |
| tech_platooning.changeSpeed `vlua` | 1 | 666 |  |
| tech_platooning.endPlatoon `vlua` | 1 | 1229 |  |
| tech_platooning.formPlatoon `vlua` | 4 | 987 |  |
| tech_platooning.getVehicleLength `vlua` | 1 | 982 |  |
| tech_platooning.joinPlatoon `vlua` | 4 | 1043 |  |
| tech_platooning.launchPlatoon `vlua` | 3 | 1130 |  |
| tech_platooning.leaderExitPlatoon `vlua` | 1 | 1174 |  |
| tech_platooning.leavePlatoon `vlua` | 2 | 810 |  |
| tech_platooning.loadWithIDPlatoon `vlua` | 3 | 1155 |  |
| tech_platooning.reassignLeader `vlua` | 2 | 1182 |  |
| tech_platooning.reassignLeaderNFSA `vlua` | 1 | 1195 |  |
| tech_platooning.updateLeaderToFollow `vlua` | 1 | 1102 |  |
| tech_platooning.vehicleJoined `vlua` | 1 | 1150 |  |
| tech_powertrainSensor.adHocRequest `vlua` | 2 | 61 |  |
| tech_powertrainSensor.cacheLatestReading `vlua` | 2 | 65 |  |
| tech_powertrainSensor.create `vlua` | 1 | 37 |  |
| tech_powertrainSensor.getPowertrainReading `vlua` | 1 | 71 |  |
| tech_powertrainSensor.remove `vlua` | 1 | 52 |  |
| tech_powertrainSensor.setUpdateTime `vlua` | 2 | 57 |  |
| tech_roadsSensor.adHocRequest `vlua` | 2 | 62 |  |
| tech_roadsSensor.cacheLatestReading `vlua` | 2 | 64 |  |
| tech_roadsSensor.create `vlua` | 1 | 39 |  |
| tech_roadsSensor.getLatest `vlua` | 1 | 72 |  |
| tech_roadsSensor.getRoadsSensorReading `vlua` | 1 | 70 |  |
| tech_roadsSensor.remove `vlua` | 1 | 55 |  |
| tech_roadsSensor.setUpdateTime `vlua` | 2 | 60 |  |
| tech_techCore.handlUpdateLeaderToFollow `vlua` | 1 | 780 |  |
| tech_techCore.handleAddIMUNode `vlua` | 1 | 563 |  |
| tech_techCore.handleAddIMUPosition `vlua` | 1 | 549 |  |
| tech_techCore.handleApplyVSLSettingsFromJSON `vlua` | 1 | 585 |  |
| tech_techCore.handleAttachCouplers `vlua` | 1 | 804 |  |
| tech_techCore.handleControl `vlua` | 1 | 235 |  |
| tech_techCore.handleCycleESCMode `vlua` | 1 | 255 |  |
| tech_techCore.handleDeflateTire `vlua` | 1 | 728 |  |
| tech_techCore.handleDetachCouplers `vlua` | 1 | 808 |  |
| tech_techCore.handleDriveUsingPath `vlua` | 1 | 407 |  |
| tech_techCore.handleEndPlatoon `vlua` | 1 | 760 |  |
| tech_techCore.handleExecuteScript `vlua` | 1 | 360 |  |
| tech_techCore.handleFetchRecordedData `vlua` | 1 | 854 |  |
| tech_techCore.handleFormPlatoon `vlua` | 1 | 750 |  |
| tech_techCore.handleGetCenterOfGravity `vlua` | 1 | 721 |  |
| tech_techCore.handleGetESCMode `vlua` | 1 | 271 |  |
| tech_techCore.handleGetInitialSpawnPositionOrientation `vlua` | 1 | 380 |  |
| tech_techCore.handleGetMassProperties `vlua` | 1 | 816 |  |
| tech_techCore.handleGetNodeInfo `vlua` | 1 | 829 |  |
| tech_techCore.handleGetRefNodes `vlua` | 1 | 823 |  |
| tech_techCore.handleHello `vlua` | 1 | 230 |  |
| tech_techCore.handleJoinPlatoon `vlua` | 1 | 755 |  |
| tech_techCore.handleLeaderExitPlatoon `vlua` | 1 | 775 |  |
| tech_techCore.handleLeavePlatoon `vlua` | 1 | 765 |  |
| tech_techCore.handleLoadACC `vlua` | 1 | 734 |  |
| tech_techCore.handleLoadPlatoon `vlua` | 1 | 745 |  |
| tech_techCore.handlePollAdvancedImuVE `vlua` | 1 | 606 |  |
| tech_techCore.handlePollGPSVE `vlua` | 1 | 624 |  |
| tech_techCore.handlePollIdealRADARVE `vlua` | 1 | 678 |  |
| tech_techCore.handlePollMeshVE `vlua` | 1 | 660 |  |
| tech_techCore.handlePollPowertrainVE `vlua` | 1 | 642 |  |
| tech_techCore.handlePollRoadsSensorVE `vlua` | 1 | 696 |  |
| tech_techCore.handleQueueLuaCommandVE `vlua` | 1 | 527 |  |
| tech_techCore.handleReassignLeaderNFSA `vlua` | 1 | 770 |  |
| tech_techCore.handleRecover `vlua` | 1 | 714 |  |
| tech_techCore.handleRemoveIMU `vlua` | 1 | 576 |  |
| tech_techCore.handleSensorRequest `vlua` | 1 | 282 |  |
| tech_techCore.handleSetAiAggression `vlua` | 1 | 438 |  |
| tech_techCore.handleSetAiLine `vlua` | 1 | 316 |  |
| tech_techCore.handleSetAiMode `vlua` | 1 | 310 |  |
| tech_techCore.handleSetAiScript `vlua` | 1 | 344 |  |
| tech_techCore.handleSetAiSpan `vlua` | 1 | 428 |  |
| tech_techCore.handleSetAiSpeed `vlua` | 1 | 387 |  |
| tech_techCore.handleSetAiTarget `vlua` | 1 | 394 |  |
| tech_techCore.handleSetAiWaypoint `vlua` | 1 | 400 |  |
| tech_techCore.handleSetColor `vlua` | 1 | 298 |  |
| tech_techCore.handleSetDriveInLane `vlua` | 1 | 456 |  |
| tech_techCore.handleSetESCMode `vlua` | 1 | 264 |  |
| tech_techCore.handleSetLights `vlua` | 1 | 462 |  |
| tech_techCore.handleSetShiftMode `vlua` | 1 | 250 |  |
| tech_techCore.handleSetVelocity `vlua` | 1 | 305 |  |
| tech_techCore.handleStartCosimulation `vlua` | 1 | 785 |  |
| tech_techCore.handleStartRecording `vlua` | 1 | 445 |  |
| tech_techCore.handleStartRecording `vlua` | 1 | 842 |  |
| tech_techCore.handleStartVSLLogging `vlua` | 1 | 595 |  |
| tech_techCore.handleStopCosimulation `vlua` | 1 | 798 |  |
| tech_techCore.handleStopRecording `vlua` | 1 | 450 |  |
| tech_techCore.handleStopRecording `vlua` | 1 | 865 |  |
| tech_techCore.handleStopVSLLogging `vlua` | 1 | 601 |  |
| tech_techCore.handleToggleCouplers `vlua` | 1 | 812 |  |
| tech_techCore.handleUnloadACC `vlua` | 1 | 739 |  |
| tech_techCore.handleWriteVSLSettingsToJSON `vlua` | 1 | 590 |  |
| tech_techCore.onDeserialized `vlua` | 1 | 222 |  |
| tech_techCore.onSerialize `vlua` | 0 | 212 |  |
| tech_techCore.requestVehicleInfo `vlua` | 0 | 155 |  |
| tech_techCore.startConnection `vlua` | 2 | 174 |  |
| tech_techVehicleUtils.computeMassProperties `vlua` | 1 | 9 | table |
| tech_techVehicleUtils.getNodeCache `vlua` | 0 | 66 |  |
| tech_techVehicleUtils.getNodeInfo `vlua` | 2 | 83 | multiple |
| tech_techVehicleUtils.getRefNodes `vlua` | 0 | 52 |  |
| tech_trailSim.onExtensionLoaded `vlua` | 0 | 132 |  |
| tech_trailSim.startManeuver `vlua` | 6 | 33 |  |
| tech_trailSim.trailerData `vlua` | 2 | 46 |  |
| tech_tyreBarrier.appendLatestReading `vlua` | 1 | 49 |  |
| tech_tyreBarrier.create `vlua` | 1 | 16 |  |
| tech_tyreBarrier.getLatestIMUData `vlua` | 0 | 110 |  |
| tech_tyreBarrier.markTestComplete `vlua` | 0 | 114 |  |
| tech_tyreBarrier.remove `vlua` | 1 | 126 |  |
| tech_tyreBarrier.triggerWriteDataToFile `vlua` | 0 | 54 |  |
| tech_vehiclePOI.collectVehiclePOIData `vlua` | 1 | 10 |  |
| tech_vehicleSearcher.collectVehicleData `vlua` | 0 | 9 |  |
| tech_vehicleSystemsCoupling.onDeserialized `vlua` | 1 | 65 |  |
| tech_vehicleSystemsCoupling.onExtensionUnloaded `vlua` | 0 | 45 |  |
| tech_vehicleSystemsCoupling.onSerialize `vlua` | 0 | 59 | table |
| tech_vehicleSystemsCoupling.startCoupling `vlua` | 1 | 12 |  |
| tech_vehicleSystemsCoupling.stopCoupling `vlua` | 0 | 32 |  |
| tech_wheelForces.onExtensionLoaded `vlua` | 0 | 240 |  |
| tech_wheelForces.onPhysicsStep `vlua` | 1 | 18 |  |
| telemetryLogger.saveDataToDisk `vlua` | 0 | 40 |  |
| telemetryLogger.startRecording `vlua` | 0 | 64 |  |
| telemetryLogger.stopRecording `vlua` | 0 | 68 |  |
| test_csvMetrics.disable `vlua` | 0 | 95 |  |
| test_csvMetrics.enable `vlua` | 3 | 16 |  |
| test_ffbCalibration.finish `vlua` | 0 | 184 |  |
| test_ffbCalibration.onExtensionLoaded `vlua` | 0 | 263 |  |
| test_ffbCalibration.onPhysicsStep `vlua` | 1 | 173 |  |
| test_ffbCalibration.start `vlua` | 2 | 207 |  |
| thrusters.applyAccel `vlua` | 4 | 124 |  |
| thrusters.applyImpulse `vlua` | 4 | 95 |  |
| thrusters.applyImpulseBody `vlua` | 2 | 109 |  |
| thrusters.applyVelocity `vlua` | 3 | 137 |  |
| thrusters.getAccelDt `vlua` | 1 | 132 |  |
| thrusters.init `vlua` | 0 | 148 |  |
| thrusters.isPhysicsStepUsed `vlua` | 0 | 144 |  |
| thrusters.reset `vlua` | 0 | 148 |  |
| thrusters.update `vlua` |0 | 41 |  |
| thrusters.updateGFX `vlua` |0 | 41 |  |
| ui_simplePowertrainControl.onInit `vlua` |0 | 20 |  |
| ui_simplePowertrainControl.onReset `vlua` |0 | 17 |  |
| ui_simplePowertrainControl.setButton `vlua` | 7 | 7 |  |
| ui_simplePowertrainControl.updateButtons `vlua` | 0 | 12 |  |
| v.loadVehicleStage2 `vlua` |1 | 521 |  |
| vehiclePerformanceData.getRecordingData `vlua` | 1 | 262 |  |
| vehiclePerformanceData.getStaticData `vlua` | 0 | 270 | table |
| vehiclePerformanceData.onExtensionLoaded `vlua` | 0 | 281 |  |
| vehiclePerformanceData.startRecording `vlua` | 1 | 233 |  |
| vehiclePerformanceData.stopRecording `vlua` | 1 | 248 |  |
| vehicleStatsLogger.applySettingsFromJSON `vlua` | 1 | 1114 |  |
| vehicleStatsLogger.onExtensionLoaded `vlua` | 0 | 1169 |  |
| vehicleStatsLogger.startLogging `vlua` | 0 | 1175 |  |
| vehicleStatsLogger.stopLogging `vlua` | 0 | 1185 |  |
| vehicleStatsLogger.suggestOutputFilename `vlua` | 0 | 1213 |  |
| vehicleStatsLogger.writeSettingsToJSON `vlua` | 1 | 1146 |  |
| wheels.beamBroke `vlua` | 1 | 119 |  |
| wheels.init `vlua` | 0 | 1134 |  |
| wheels.initSecondStage `vlua` | 0 | 1161 |  |
| wheels.initSounds `vlua` | 0 | 826 |  |
| wheels.isPhysicsStepUsed `vlua` | 0 | 1268 |  |
| wheels.nodeCollision `vlua` | 1 | 100 |  |
| wheels.reset `vlua` | 0 | 821 |  |
| wheels.resetABSBehavior `vlua` | 0 | 695 |  |
| wheels.resetSecondStage `vlua` | 0 | 1139 |  |
| wheels.scaleBrakeTorque `vlua` | 1 | 154 |  |
| wheels.setABSBehavior `vlua` | 1 | 679 |  |
| wheels.setWheelBrakeUpdate `vlua` | 3 | 1258 |  |
| wheels.setWheelRotatorType `vlua` | 2 | 708 |  |
| wheels.settingsChanged `vlua` | 0 | 691 |  |
| wheels.toggleABSBehavior `vlua` | 0 | 699 |  |
| wheels.updateABSCoef `vlua` | 6 | 504 |  |
| wheels.updateGFX `vlua` |1 | 438 |  |
| wheels.updateThermalsGFX `vlua` |0 | 41 |  |
| wheels.updateWheelTorques `vlua` | 1 | 637 |  |
| wheels.updateWheelVelocities `vlua` | 1 | 559 |  |

## VLUA Object Methods

| Function | VM |
|---|---|
| debugDrawProxy:drawAerodynamicsCenterOfPressure | vlua |
| debugDrawProxy:drawBeam3d | vlua |
| debugDrawProxy:drawColTris | vlua |
| debugDrawProxy:drawCylinder | vlua |
| debugDrawProxy:drawLine | vlua |
| debugDrawProxy:drawNodeLine | vlua |
| debugDrawProxy:drawNodeSphere | vlua |
| debugDrawProxy:drawNodeText | vlua |
| debugDrawProxy:drawNodeTriangle | vlua |
| debugDrawProxy:drawNodeVector | vlua |
| debugDrawProxy:drawNodeVector3d | vlua |
| debugDrawProxy:drawSphere | vlua |
| debugDrawProxy:drawText | vlua |
| debugDrawProxy:drawText2D | vlua |
| obj:actuateBeam | vlua |
| obj:actuateBeamRaw | vlua |
| obj:actuateDynamicBeam | vlua |
| obj:add | vlua |
| obj:addDecal | vlua |
| obj:addDynamicBeamNode | vlua |
| obj:addDynamicBeamStaticPoint | vlua |
| obj:addFrameBlurRect | vlua |
| obj:addParticle | vlua |
| obj:addParticleByNodes | vlua |
| obj:addParticleByNodesRelative | vlua |
| obj:addParticleVelWidthTypeCount | vlua |
| obj:addRail | vlua |
| obj:addRailLink | vlua |
| obj:addSlidenode | vlua |
| obj:addWheelNode | vlua |
| obj:apply2nodeTorque | vlua |
| obj:apply3nodeTorque | vlua |
| obj:applyClusterLinearAngularAccel | vlua |
| obj:applyForce | vlua |
| obj:applyForceTime | vlua |
| obj:applyForceVector | vlua |
| obj:applyForceVectorTime | vlua |
| obj:applyMotionTracking | vlua |
| obj:applyTorqueAxisCouple | vlua |
| obj:at | vlua |
| obj:attachCoupler | vlua |
| obj:attachExternalCoupler | vlua |
| obj:attachLocalCoupler | vlua |
| obj:attachSlidenode | vlua |
| obj:autoplace | vlua |
| obj:beamIsBroken | vlua |
| obj:breakBeam | vlua |
| obj:breakCollisionTriangle | vlua |
| obj:breakMeshes | vlua |
| obj:breakRails | vlua |
| obj:calcBeamStats | vlua |
| obj:calcCenterOfGravity | vlua |
| obj:calcCenterOfGravityRel | vlua |
| obj:calcCenterOfPressureRel | vlua |
| obj:calcTotalAeroForces | vlua |
| obj:calcTotalAeroTorque | vlua |
| obj:castRayStatic | vlua |
| obj:centerTerrain | vlua |
| obj:changeGroupPressure | vlua |
| obj:changePressureGroupDrag | vlua |
| obj:closestNodeLineDistances | vlua |
| obj:commitLoad | vlua |
| obj:createMesh | vlua |
| obj:createSFXSource | vlua |
| obj:createSFXSource2 | vlua |
| obj:createTerrain | vlua |
| obj:createWebView | vlua |
| obj:cutSFX | vlua |
| obj:deflatePressureGroup | vlua |
| obj:delete | vlua |
| obj:deleteAllDynamicBeam | vlua |
| obj:deleteDynamicBeam | vlua |
| obj:deleteObject | vlua |
| obj:deleteSFXSource | vlua |
| obj:deleteSFXSources | vlua |
| obj:destroyMaterials | vlua |
| obj:detachCoupler | vlua |
| obj:detachSlidenode | vlua |
| obj:detectBeamFrequency | vlua |
| obj:disable | vlua |
| obj:disableCollision | vlua |
| obj:enable | vlua |
| obj:enableCollision | vlua |
| obj:encode | vlua |
| obj:explode | vlua |
| obj:externalCouplerCount | vlua |
| obj:findForestItems | vlua |
| obj:findSlidenodeId | vlua |
| obj:finishLoading | vlua |
| obj:get | vlua |
| obj:get3NodeDisplacement | vlua |
| obj:get3nodeAngularVelocity | vlua |
| obj:getAbsNodePosition | vlua |
| obj:getActive | vlua |
| obj:getAerodynamicsMode | vlua |
| obj:getAerodynamicsState | vlua |
| obj:getAirDensity | vlua |
| obj:getAirDensityAtSeaLevel | vlua |
| obj:getAirSpeed | vlua |
| obj:getAirflowSpeed | vlua |
| obj:getAltitude | vlua |
| obj:getAnchorNames | vlua |
| obj:getBeamCount | vlua |
| obj:getBeamCurLengthRefRatio | vlua |
| obj:getBeamDebugDeformation | vlua |
| obj:getBeamDeformation | vlua |
| obj:getBeamDeformationResidue | vlua |
| obj:getBeamForce | vlua |
| obj:getBeamFrequencyAmplitude | vlua |
| obj:getBeamLength | vlua |
| obj:getBeamLengthRefRatio | vlua |
| obj:getBeamLengthRestRatio | vlua |
| obj:getBeamPressureRel | vlua |
| obj:getBeamRefLength | vlua |
| obj:getBeamRestLength | vlua |
| obj:getBeamStress | vlua |
| obj:getBeamStressDamp | vlua |
| obj:getBeamVectorFromNode | vlua |
| obj:getBeamVelocity | vlua |
| obj:getCameraPosition | vlua |
| obj:getCenterPosition | vlua |
| obj:getClassDocString | vlua |
| obj:getClassName | vlua |
| obj:getClusterAngVelWithoutWheels | vlua |
| obj:getClusterRotationSlow | vlua |
| obj:getClusterVelocityAngVelWithoutWheels | vlua |
| obj:getClusterVelocityWithoutWheels | vlua |
| obj:getCollidableTriangleCount | vlua |
| obj:getCornerPosition | vlua |
| obj:getCount | vlua |
| obj:getData | vlua |
| obj:getDeclarationLine | vlua |
| obj:getDensityAtNode | vlua |
| obj:getDirection | vlua |
| obj:getDirectionVector | vlua |
| obj:getDirectionVectorRight | vlua |
| obj:getDirectionVectorRightXYZ | vlua |
| obj:getDirectionVectorUp | vlua |
| obj:getDirectionVectorUpXYZ | vlua |
| obj:getDirectionVectorXYZ | vlua |
| obj:getDissipatedEnergy | vlua |
| obj:getDistanceFromTerrain | vlua |
| obj:getDistanceFromTerrainPoint | vlua |
| obj:getDynDataFieldbyName | vlua |
| obj:getDynamicBeamLength | vlua |
| obj:getDynamicBeamRestLength | vlua |
| obj:getDynamicFields | vlua |
| obj:getEdgeCount | vlua |
| obj:getEdgesTable | vlua |
| obj:getEnvPressure | vlua |
| obj:getEnvTemperature | vlua |
| obj:getField | vlua |
| obj:getFieldFlags | vlua |
| obj:getFieldList | vlua |
| obj:getFieldType | vlua |
| obj:getFields | vlua |
| obj:getFieldsForEditor | vlua |
| obj:getFileName | vlua |
| obj:getFlow | vlua |
| obj:getForwardVector | vlua |
| obj:getFrontAirflowSpeed | vlua |
| obj:getFrontPosition | vlua |
| obj:getFrontPositionRelative | vlua |
| obj:getGeneratedDisplayName | vlua |
| obj:getGhostEnabled | vlua |
| obj:getGraphicsStepCount | vlua |
| obj:getGravity | vlua |
| obj:getGravityVector | vlua |
| obj:getGroundModelId | vlua |
| obj:getGroundSpeed | vlua |
| obj:getGroup | vlua |
| obj:getGroupPressure | vlua |
| obj:getHydroDisplacement | vlua |
| obj:getHydroDisplacementFrom | vlua |
| obj:getID | vlua |
| obj:getId | vlua |
| obj:getImpactDeformEnergyNode | vlua |
| obj:getInitialHeight | vlua |
| obj:getInitialLength | vlua |
| obj:getInitialNodePosition | vlua |
| obj:getInitialQuaternion | vlua |
| obj:getInitialWidth | vlua |
| obj:getInternalName | vlua |
| obj:getKey | vlua |
| obj:getLastMailbox | vlua |
| obj:getLastMailboxVersion | vlua |
| obj:getLightEnabled | vlua |
| obj:getMaterialNames | vlua |
| obj:getMeshesContainingMaterial | vlua |
| obj:getMeshsMaterials | vlua |
| obj:getModelFile | vlua |
| obj:getName | vlua |
| obj:getNodeCluster | vlua |
| obj:getNodeClusterGeneration | vlua |
| obj:getNodeCount | vlua |
| obj:getNodeForce | vlua |
| obj:getNodeForceNonInertial | vlua |
| obj:getNodeForceNonInertialZ | vlua |
| obj:getNodeForceOnBeamDir | vlua |
| obj:getNodeForceVector | vlua |
| obj:getNodeForceVectorNonInertialXYZ | vlua |
| obj:getNodeForceVectorXYZ | vlua |
| obj:getNodeFrictionCoef | vlua |
| obj:getNodeMass | vlua |
| obj:getNodePosition | vlua |
| obj:getNodePositionRelative | vlua |
| obj:getNodePositionRelativeXYZ | vlua |
| obj:getNodeReactionForce | vlua |
| obj:getNodeSlidingFrictionCoef | vlua |
| obj:getNodeTemperature | vlua |
| obj:getNodeTransform | vlua |
| obj:getNodeVelocity | vlua |
| obj:getNodeVelocityVector | vlua |
| obj:getNodeWidth | vlua |
| obj:getNodesVector | vlua |
| obj:getObjBox | vlua |
| obj:getObject | vlua |
| obj:getObjectBox | vlua |
| obj:getObjectCenterPosition | vlua |
| obj:getObjectCollisionIds | vlua |
| obj:getObjectDirectionVector | vlua |
| obj:getObjectDirectionVectorUp | vlua |
| obj:getObjectFrontPosition | vlua |
| obj:getObjectInitialHeight | vlua |
| obj:getObjectInitialLength | vlua |
| obj:getObjectInitialWidth | vlua |
| obj:getObjects | vlua |
| obj:getOriginalFrontPositionRelative | vlua |
| obj:getOriginalNodeMass | vlua |
| obj:getOriginalNodePositionRelative | vlua |
| obj:getPeakPeriod | vlua |
| obj:getPhysicsDt | vlua |
| obj:getPhysicsFPS | vlua |
| obj:getPitchAngularVelocity | vlua |
| obj:getPosition | vlua |
| obj:getPositionXYZ | vlua |
| obj:getProjectedNodePosition | vlua |
| obj:getRealdt | vlua |
| obj:getRefNodeId | vlua |
| obj:getRelativeAirDensity | vlua |
| obj:getRollAngularVelocity | vlua |
| obj:getRollPitchYaw | vlua |
| obj:getRollPitchYawAngularVelocity | vlua |
| obj:getRollPitchYawRad | vlua |
| obj:getRotation | vlua |
| obj:getSafeLocalQueueNumber | vlua |
| obj:getScale | vlua |
| obj:getSelfCollisionMode | vlua |
| obj:getSelfCollisionState | vlua |
| obj:getSensorVectorRaw | vlua |
| obj:getSensorX | vlua |
| obj:getSensorY | vlua |
| obj:getSensorZ | vlua |
| obj:getSensorZnonInertial | vlua |
| obj:getSensorsFFI | vlua |
| obj:getSimTime | vlua |
| obj:getSimulationTimeScale | vlua |
| obj:getSlipVelEnergyDownPeakForceDepthMats | vlua |
| obj:getSmoothRefVelocityXYZ | vlua |
| obj:getSpawnWorldOOBB | vlua |
| obj:getStaticDataFieldbyIndex | vlua |
| obj:getStaticFrictionCoef | vlua |
| obj:getSurfaceHeightBelow | vlua |
| obj:getSwitchableMaterial | vlua |
| obj:getTerrainDrivability | vlua |
| obj:getTerrainHeight | vlua |
| obj:getTerrainNormal | vlua |
| obj:getTorsionbarAngle | vlua |
| obj:getTorsionbarDeformation | vlua |
| obj:getTransform | vlua |
| obj:getTriangleCount | vlua |
| obj:getUid | vlua |
| obj:getUpdateUIflag | vlua |
| obj:getVelocity | vlua |
| obj:getVelocityXYZ | vlua |
| obj:getWheel | vlua |
| obj:getWheelAirTemperature | vlua |
| obj:getWheelAvgTemperature | vlua |
| obj:getWheelCoreTemperature | vlua |
| obj:getWheelFFI | vlua |
| obj:getWind | vlua |
| obj:getWorldBox | vlua |
| obj:getYawAngularVelocity | vlua |
| obj:hasIbody | vlua |
| obj:hasNodeCollidedDuring | vlua |
| obj:id | vlua |
| obj:inSameNodeCluster | vlua |
| obj:inWater | vlua |
| obj:incRefCount | vlua |
| obj:initLuaCallbacks | vlua |
| obj:inspectUpdate | vlua |
| obj:isChildOfGroup | vlua |
| obj:isCollidingWithObject | vlua |
| obj:isEditorDirty | vlua |
| obj:isGlobalBounds | vlua |
| obj:isHidden | vlua |
| obj:isLocked | vlua |
| obj:isNodeColliding | vlua |
| obj:isPlayerControlled | vlua |
| obj:isPlayingSFX | vlua |
| obj:isRotatingBrakeCouple | vlua |
| obj:isSubClassOf | vlua |
| obj:isTriangleBroken | vlua |
| obj:nodeDot | vlua |
| obj:nodeLength | vlua |
| obj:nodeLineSectionDistance | vlua |
| obj:nodeSquaredLength | vlua |
| obj:nodeVecCos | vlua |
| obj:nodeVecPlanarCos | vlua |
| obj:nodeVecPlanarCosRightForward | vlua |
| obj:nodeVecPlanarSinForward2 | vlua |
| obj:onEditorDisable | vlua |
| obj:onEditorEnable | vlua |
| obj:playRPMLeds | vlua |
| obj:playSFX | vlua |
| obj:playSFXOnce | vlua |
| obj:playSFXOnceCT | vlua |
| obj:playSFXOnceStatic | vlua |
| obj:playSFXOnceStaticCT | vlua |
| obj:postApply | vlua |
| obj:preApply | vlua |
| obj:propUpdate | vlua |
| obj:queueGameEngineLua | vlua |
| obj:queueHookJS | vlua |
| obj:queueLuaCommand | vlua |
| obj:queueMainHookJS | vlua |
| obj:queueObjectFastLuaCommand | vlua |
| obj:queueObjectLuaCommand | vlua |
| obj:queueOtherObjectsLuaCommand | vlua |
| obj:queueStreamDataJS | vlua |
| obj:queueWebViewJS | vlua |
| obj:queueWebViewStreamJS | vlua |
| obj:rayIntersectsZone | vlua |
| obj:registerObject | vlua |
| obj:reloadTextures | vlua |
| obj:requestReset | vlua |
| obj:resetBrokenFlexMesh | vlua |
| obj:resetMaterials | vlua |
| obj:respawnWithPartConfig | vlua |
| obj:screwBeam | vlua |
| obj:sendForceFeedback | vlua |
| obj:sendRPMLeds | vlua |
| obj:serialPortClose | vlua |
| obj:serialPortOpen | vlua |
| obj:serialPortRead | vlua |
| obj:serialPortWrite | vlua |
| obj:serialize | vlua |
| obj:set | vlua |
| obj:setActive | vlua |
| obj:setAerodynamicsMode | vlua |
| obj:setBeam | vlua |
| obj:setBeamAnisotropic | vlua |
| obj:setBeamBounded | vlua |
| obj:setBeamDeform | vlua |
| obj:setBeamDeformationTriggerRatio | vlua |
| obj:setBeamLbeam | vlua |
| obj:setBeamLength | vlua |
| obj:setBeamLengthRefDeformedRatio | vlua |
| obj:setBeamLengthRefRatio | vlua |
| obj:setBeamLengthRefRatioTarget | vlua |
| obj:setBeamPressureRel | vlua |
| obj:setBeamPressured | vlua |
| obj:setBeamSpringDamp | vlua |
| obj:setBeamStrength | vlua |
| obj:setBitmapFromArray | vlua |
| obj:setBoundedBeamDamp | vlua |
| obj:setBoundedBeamLongBound | vlua |
| obj:setBoundedBeamShortBound | vlua |
| obj:setBoundedBeamSpringDampLimits | vlua |
| obj:setCanSave | vlua |
| obj:setDebugString | vlua |
| obj:setDynDataFieldbyName | vlua |
| obj:setDynamicBeam | vlua |
| obj:setEditorDirty | vlua |
| obj:setEmitterDataBlock | vlua |
| obj:setEngineAxisCoupleNodes | vlua |
| obj:setEngineSound | vlua |
| obj:setField | vlua |
| obj:setGhostEnabled | vlua |
| obj:setGravity | vlua |
| obj:setGroupPressure | vlua |
| obj:setGroupPressureRel | vlua |
| obj:setHidden | vlua |
| obj:setInternalName | vlua |
| obj:setMaterial | vlua |
| obj:setMaterialEmissiveFactor | vlua |
| obj:setMeshAlpha | vlua |
| obj:setMetallicPaintData | vlua |
| obj:setName | vlua |
| obj:setNode | vlua |
| obj:setNodeFrictionSlidingCoefs | vlua |
| obj:setNodeMass | vlua |
| obj:setNodeMaterial | vlua |
| obj:setNodePair | vlua |
| obj:setNodePair2WheelId | vlua |
| obj:setNodePosition | vlua |
| obj:setNodeVolumePitchCT | vlua |
| obj:setPersistentData | vlua |
| obj:setPhysicsStepEnabled | vlua |
| obj:setPitch | vlua |
| obj:setPlanets | vlua |
| obj:setPosRot | vlua |
| obj:setPosition | vlua |
| obj:setPositionRotation | vlua |
| obj:setPrecompressionRatio | vlua |
| obj:setPropLight | vlua |
| obj:setReferenceNodes | vlua |
| obj:setSFXNode | vlua |
| obj:setSFXparameter | vlua |
| obj:setScale | vlua |
| obj:setScaleXYZ | vlua |
| obj:setSelected | vlua |
| obj:setSelfCollisionMode | vlua |
| obj:setSimulationTimeScale | vlua |
| obj:setSleepingEnabled | vlua |
| obj:setSlidenodeSpringStrength | vlua |
| obj:setSlipTireMarkThreshold | vlua |
| obj:setTerrFileLvlFolder | vlua |
| obj:setTorsionbar | vlua |
| obj:setTorsionbarAngle | vlua |
| obj:setTorsionbarPrecompressionAngle | vlua |
| obj:setTorsionbarSpringDamp | vlua |
| obj:setTransform | vlua |
| obj:setTriangle | vlua |
| obj:setVolume | vlua |
| obj:setVolumePitch | vlua |
| obj:setVolumePitchCT | vlua |
| obj:setWaterFlow | vlua |
| obj:setWheel | vlua |
| obj:setWheelTorqueAndBrakeTorque | vlua |
| obj:setWind | vlua |
| obj:size | vlua |
| obj:spawnProps | vlua |
| obj:stopLatching | vlua |
| obj:stopSFX | vlua |
| obj:switchMaterial | vlua |
| obj:torsionbarIsBroken | vlua |
| obj:unload | vlua |
| obj:updateInstanceRenderData | vlua |
| obj:wheelTurnRadius | vlua |

## Hooks

| Function | VM |
|---|---|
| dragRaceEndLineReached | ge |
| dragRaceStarted | ge |
| dragRaceVehicleStopped | ge |
| dynamicDecals_moveLayer | ge |
| dynamicDecals_onLayerAdded | ge |
| dynamicDecals_onLayerDeleted | ge |
| dynamicDecals_onLayerUpdated | ge |
| dynamicDecals_onTextureFileAdded | ge |
| dynamicDecals_onTextureFileDeleted | ge |
| liveryEditor_OnLayerAdded | ge |
| liveryEditor_OnUseMousePosChanged | ge |
| liveryEditor_editMode_onStateChanged | ge |
| liveryEditor_onLayersUpdated | ge |
| onActionFilterUpdated | ge |
| onActivityAcceptGatherData | ge |
| onActivityIndexVisible | ge |
| onAddedVehiclePartsToInventory | ge |
| onAfterDriftSpotsLoaded | ge |
| onAnyMissionChanged | ge |
| onAnyMissionWillChange | ge |
| onAnyStuntZoneAccomplished | ge |
| onAttemptCompleted | ge |
| onAttemptFailed | ge |
| onAvailableMissionsSentToUi | ge |
| onBeamDeformed | vlua |
| onBeamNGTrigger | ge |
| onBeforeBigMapActivated | ge |
| onBeforeCareerActivate | ge |
| onBeforeDragUnloadAllExtensions | ge |
| onBeforeRadialOpened | ge |
| onBeforeSetSaveSlot | ge |
| onBeforeWalkingModeToggled | ge |
| onBigMapActivated | ge |
| onBigmapHoveredPoiIdChanged | ge |
| onBranchTierReached | ge |
| onC2WebSocketHandlerMessage | ge |
| onCameraModeChanged | ge |
| onCameraPreRender | ge |
| onCameraToggled | ge |
| onCareerActive | ge |
| onCareerModulesActivated | ge |
| onCareerProgressPageGetTasklistData | ge |
| onCareerTuningStarted | ge |
| onCargoGenerated | ge |
| onCefVisibilityChanged | ge |
| onCheckPermission | ge |
| onClientCustomObjectSpawning | ge |
| onClientPostStartMission | ge |
| onClientPreStartMission | ge |
| onClientStartMission | ge |
| onCollectScreenshotMetadata | ge |
| onComputerAddFunctions | ge |
| onConsoleExecuteCommand | ge |
| onCountdownEnded | ge |
| onCouplerAttached | both |
| onCouplerDetach | ge |
| onCouplerDetached | both |
| onCouplerFound | vlua |
| onCrashCamEnded | ge |
| onCrawlPathnodeReached | ge |
| onCrawlResultsShown | ge |
| onCrawlStarted | ge |
| onCreatedRallyGroundMarkerRoute | ge |
| onCustomWaypoints | ge |
| onDeactivateBigMapCallback | ge |
| onDebugDraw | vlua |
| onDeliveryFacilityProgressStatsChanged | ge |
| onDeliveryModeStarted | ge |
| onDeliveryRewardsPopupClosed | ge |
| onDonutDriftScored | ge |
| onDragCountdownStarted | ge |
| onDrawDebug | ge |
| onDrawOnMinimap | ge |
| onDriftActiveDataFinished | ge |
| onDriftCachedScoreReset | ge |
| onDriftChainStarted | ge |
| onDriftCompleted | ge |
| onDriftCompletedScored | ge |
| onDriftContextChanged | ge |
| onDriftCrash | ge |
| onDriftDebugChanged | ge |
| onDriftNewCombo | ge |
| onDriftPlVehReset | ge |
| onDriftQuickMessageDisplay | ge |
| onDriftQuickMessageReached | ge |
| onDriftScoreWrappedUp | ge |
| onDriftSpinout | ge |
| onDriftSpotCompleted | ge |
| onDriftSpotFailed | ge |
| onDriftStatusChanged | ge |
| onDriftTransition | ge |
| onEditorActivated | ge |
| onEditorAfterOpenLevel | ge |
| onEditorAfterSaveLevel | ge |
| onEditorAxisGizmoAligmentChanged | ge |
| onEditorAxisGizmoModeChanged | ge |
| onEditorBeforeSaveLevel | ge |
| onEditorDeactivated | ge |
| onEditorDeleteSelection | ge |
| onEditorEditModeActivated | ge |
| onEditorEditModeChanged | ge |
| onEditorEditModeDeactivated | ge |
| onEditorEnabled | ge |
| onEditorExitLevel | ge |
| onEditorGui | ge |
| onEditorGuiMainMenu | ge |
| onEditorGuiToolBar | ge |
| onEditorHeadlessChange | ge |
| onEditorHeadlessMainMenuBar | ge |
| onEditorInitialized | ge |
| onEditorInspectorFieldChanged | ge |
| onEditorInspectorHeaderGui | ge |
| onEditorLoadGuiInstancerState | ge |
| onEditorLoadState | ge |
| onEditorMainMenuBar | ge |
| onEditorObjectAdded | ge |
| onEditorObjectSelectionChanged | ge |
| onEditorPrefabExploded | ge |
| onEditorPreferenceValueChanged | ge |
| onEditorRegisterApi | ge |
| onEditorSaveGuiInstancerState | ge |
| onEditorSaveState | ge |
| onEditorToolWindowGotFocus | ge |
| onEditorToolWindowHide | ge |
| onEditorToolWindowLostFocus | ge |
| onEditorToolWindowShow | ge |
| onEnterVehicleFinished | ge |
| onExit | ge |
| onFileChanged | ge |
| onFileChangedEnd | ge |
| onFilesChanged | ge |
| onFirstUpdate | ge |
| onFreeroamConfiguratorApplyOptions | ge |
| onFreeroamConfiguratorGetOptions | ge |
| onFreeroamDriftZoneNewHighscore | ge |
| onGameStateUpdate | ge |
| onGameplayFlashMessage | ge |
| onGameplayInteract | ge |
| onGameplaySelectorGetDetails | ge |
| onGameplaySelectorGetTiles | ge |
| onGeneralMilestoneClaimed | ge |
| onGeneralMilestonesCollect | ge |
| onGeneralMilestonesSetupCallbacks | ge |
| onGetMilestones | ge |
| onGetRawPoiListForLevel | ge |
| onGetUnlockFlagDefinitions | ge |
| onGlobalCameraSet | ge |
| onGuiUpdate | ge |
| onHideRadialMenu | ge |
| onHitPoleScored | ge |
| onInit | both |
| onInputBindingsChanged | ge |
| onInsuranceRepairClaim | ge |
| onInventoryPreRemoveVehicleObject | ge |
| onJobDone | ge |
| onLoadCustomPrefabs | ge |
| onLoadingScreenFadeout | ge |
| onLogbookGetEntries | ge |
| onMinimapSettingsChanged | ge |
| onMissionAttemptAggregated | ge |
| onMissionAvailabilityChanged | ge |
| onMissionInfoChangedState | ge |
| onMissionStartScreenReady | ge |
| onMissionsLoadedFromFiles | ge |
| onModActivated | ge |
| onModDeactivated | ge |
| onModManagerReady | ge |
| onModManagerStateChanged | ge |
| onMouseLocked | ge |
| onNavgraphReloaded | ge |
| onNavigateToMission | ge |
| onNearPoleScored | ge |
| onNewAttempt | ge |
| onNewDriftTierReached | ge |
| onParkingVehiclesActivated | ge |
| onPartShoppingStarted | ge |
| onPartShoppingTransactionComplete | ge |
| onPhysicsPaused | ge |
| onPhysicsUnpaused | ge |
| onPlaybookLogAfterStep | ge |
| onPlayerAttributesChanged | ge |
| onPlayerCameraReady | ge |
| onPlayersChanged | vlua |
| onPoiSelectedFromBigmap | ge |
| onPreRender | ge |
| onPreVehicleSpawned | ge |
| onPreWindowClose | ge |
| onPursuitAction | ge |
| onPursuitOffense | ge |
| onQuickAccessLoaded | ge |
| onRaceBranchChosen | ge |
| onRaceGoalsInitilised | ge |
| onRaceInit | ge |
| onRaceLap | ge |
| onRacePathnodeReached | ge |
| onRaceResult | ge |
| onRaceStart | ge |
| onRaceTick | ge |
| onRaceWaypointReached | ge |
| onRallyDataUpdated | ge |
| onRallyRegisterRace | ge |
| onRallyVehicleRecovery | ge |
| onReachedTargetPos | ge |
| onRecalculatedRoute | ge |
| onRedLightCamTriggered | ge |
| onRepairInGarage | ge |
| onReplayStateChanged | ge |
| onReset | both |
| onResetGameplay | ge |
| onSaveCampaign | ge |
| onSaveCurrentSaveSlot | ge |
| onSaveCurrentSaveSlotAsyncStart | ge |
| onSaveFinished | ge |
| onScenarioChange | ge |
| onScenarioFinished | ge |
| onScenarioLoaded | ge |
| onScenarioRestarted | ge |
| onScenarioUIReady | ge |
| onScreenFadeState | ge |
| onSensorCreated | ge |
| onSensorRemoved | ge |
| onSetBigmapNavFocus | ge |
| onSettingsChanged | ge |
| onSocketMessage | ge |
| onSpawnCCallback | ge |
| onSpeedTrapTriggered | ge |
| onTeleportedToGarage | ge |
| onTestDriveEndedAfterFade | ge |
| onTestDriveStarted | ge |
| onTightDriftScored | ge |
| onTogglePause | ge |
| onTrafficAction | ge |
| onTrafficStarted | ge |
| onTrafficStopped | ge |
| onTrafficVehicleAdded | ge |
| onTrafficVehicleRemoved | ge |
| onTrailerAttached | ge |
| onUIStartButtonClicked | ge |
| onUiReady | ge |
| onUpdate | ge |
| onVehicleAIStateChanged | ge |
| onVehicleActiveChanged | ge |
| onVehicleAdded | ge |
| onVehicleAddedToInventory | ge |
| onVehicleConnectionReady | ge |
| onVehicleCrashEnded | ge |
| onVehicleCrashStarted | ge |
| onVehicleDestroyed | both |
| onVehicleEditorRenderJBeams | ge |
| onVehicleFlippedUpright | ge |
| onVehicleGroupSpawned | ge |
| onVehicleInfoReady | ge |
| onVehicleLoaded | vlua |
| onVehicleMapmgrUpdate | ge |
| onVehicleMirrorsChanged | ge |
| onVehicleParkingStatus | ge |
| onVehicleRemoved | ge |
| onVehicleReplaced | ge |
| onVehicleResetted | ge |
| onVehicleSaveFinished | ge |
| onVehicleSpawned | ge |
| onVehicleStoppedMoving | ge |
| onVehicleSwitched | ge |
| onWindowResized | ge |
| onWinnerLightOn | ge |
| onWorldReadyState | ge |
| resetDragRaceValues | ge |
| setDisqualifiedLights | ge |
| showDisqualifiedMessage | ge |
| showMissionMarkersToggled | ge |
| startDragCountdown | ge |
| startRaceFromTree | ge |
| stoppingVehicleDrag | ge |
| teleportedFromBigmap | ge |
| trackAIAllVeh | ge |
| trackVehReset | ge |
| updateGFX | both |
