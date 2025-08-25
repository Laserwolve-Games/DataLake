var oActionMgr = MainWindow.getActionMgr();
var oClearKeysSelectedItemsAction = oActionMgr.findAction('DzClearKeysSelectedItemsAction');

// select all the subject's children, recursively
for (var nSubjectChildrenCounter = 0; nSubjectChildrenCounter != aSubjectChildren.length; nSubjectChildrenCounter++) {
  var oSubjectChild = aSubjectChildren[nSubjectChildrenCounter];
  oSubjectChild.select(true);
}

// clear the keys off the subject (which was already selected) and its children (this includes animated props and gear)
oClearKeysSelectedItemsAction.trigger();

// deselect all the subject's children, recursively
for (var nSubjectChildrenCounter = 0; nSubjectChildrenCounter != aSubjectChildren.length; nSubjectChildrenCounter++) {
  var oSubjectChild = aSubjectChildren[nSubjectChildrenCounter];
  oSubjectChild.select(false);
}

Scene.setAnimRange(DzTimeRange(0, 0));