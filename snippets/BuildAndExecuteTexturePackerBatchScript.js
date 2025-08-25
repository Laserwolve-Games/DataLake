var sSpritesheetOutputDirectory = oScriptArgs['spritesheet_output_dir'];

// Only one Daz instance needs to execute this
if (nInstanceNumber == 1) {

	// TODO: https://github.com/Laserwolve-Games/Overlord/issues/7

	// Execute a PowerShell script with arguments: https://github.com/Laserwolve-Games/Overlord/discussions/6
	var sTempPath = App.getTempPath();
	var oSpritesheetExecutor = new DzFile(sTempPath + '/spriteSheetExecutor.cmd');
	var sSpritesheetExecutorCode = 'powershell -NoProfile -ExecutionPolicy Bypass -File '
	+ sScriptPath + '/makeSpritesheets.ps1 -sourceDirectory "' + sOutputDirectory + '" -outputDirectory "' + sSpritesheetOutputDirectory + '"';

	oSpritesheetExecutor.open(DzFile.WriteOnly);
	oSpritesheetExecutor.write(sSpritesheetExecutorCode);
	oSpritesheetExecutor.close();

	App.showURL('file:///' + sTempPath + '/spriteSheetExecutor.cmd');
}