var oSceneHelper = new DzSceneHelper();
var oSubject = Scene.findNodeByLabel('subject');
var oCustomPropertyGroup = oSubject.getPropertyGroups().findChild('Custom');
var aChildPropertyControllers;
if (oCustomPropertyGroup) aChildPropertyControllers = oCustomPropertyGroup.getAllProperties();

if (aChildPropertyControllers) for (var i = 0; i != aChildPropertyControllers.length; i++)
{
  /* 
  Use the name of the property in the "Custom" category to find the property to which to link it.
  e.g.,
  BowOnnaStick-StikkbowDrawn
  Default Bolt-Opacity Strength-shaft
  The the first value is the node label. The second value is the property label. The third value is the material name, and is optional.
  The owner of a property usually is a DzNode, but it might be a DzMorph.
  The DzNode method "findPropertyByLabel" won't work for properties owned by a DzMorph.
  The "findPropertyOnNodeByLabel" method in the DzSceneHelper convenience object must be used to accommodate this scenario.
  */
  var oChildPropertyController = aChildPropertyControllers[i];
  var aTargetPropertyParameters = oChildPropertyController.name.split('-');
  var oTargetNode = Scene.findNodeByLabel(aTargetPropertyParameters[0]);
  var sTargetPropertyName = aTargetPropertyParameters[1];
  var sTargetMaterial = aTargetPropertyParameters[2];
  var oTarget;
  if (sTargetMaterial) oTarget = oSceneHelper.findPropertyOnMaterialByLabel(sTargetPropertyName, oTargetNode.getObject().getCurrentShape().findMaterial(sTargetMaterial));
  else oTarget = oSceneHelper.findPropertyOnNodeByLabel(sTargetPropertyName, oTargetNode);

  oTarget.linkTo(oChildPropertyController);
}
// Custom parameter keys don't always exist. They have to be manually cleared after each animation
if (aChildPropertyControllers) for (var i = 0; i != aChildPropertyControllers.length; i++) aChildPropertyControllers[i].deleteAllKeys();