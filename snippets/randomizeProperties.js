var sSubject = 'Bolts';
var oSubject = Scene.findNodeByLabel(sSubject);
var nFrameRate = 30;
var nDAZ_TICKS = 4800;
var nTicksPerFrame = nDAZ_TICKS / nFrameRate;
var nFramesTotal = Scene.getPlayRange().end / nTicksPerFrame + 1;

var oYRotControl = oSubject.getYRotControl();
var oXRotControl = oSubject.getXRotControl();   
var oZRotControl = oSubject.getZRotControl();

var nYRotControlMax = oYRotControl.getMax();
var nYRotControlMin = oYRotControl.getMin();
var nXRotControlMax = oXRotControl.getMax();
var nXRotControlMin = oXRotControl.getMin();
var nZRotControlMax = oZRotControl.getMax();
var nZRotControlMin = oZRotControl.getMin();

for (var nFrame = 0; nFrame <= nFramesTotal; nFrame++)
{
    oYRotControl.setValue(Math.random() * (nYRotControlMax - nYRotControlMin) + nYRotControlMin);
    oXRotControl.setValue(Math.random() * (nXRotControlMax - nXRotControlMin) + nXRotControlMin);
    oZRotControl.setValue(Math.random() * (nZRotControlMax - nZRotControlMin) + nZRotControlMin);

    Scene.setFrame(nFrame);
}

Scene.setFrame(0);