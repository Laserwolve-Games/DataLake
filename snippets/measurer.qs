var node = Scene.getPrimarySelection();

boundingBox = node.getWSBoundingBox();
boundingBoxSize = boundingBox.max.subtract(boundingBox.min);

print(boundingBoxSize.x + " Centimeters wide (X)");
print(boundingBoxSize.y + " Centimeters tall (Y)");
print(boundingBoxSize.z + " Centimeters deep (Z)");