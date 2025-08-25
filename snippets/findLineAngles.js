const angle = Math.atan2(
    (adjustedMasterHeight + adjustedI) - adjustedI,
    (PlainsOfShinar.layoutWidth - i) - (PlainsOfShinar.layoutHeight - i)
);
console.log(`Angle of vertical line: ${angle} radians`);

const horizontalAngle = Math.atan2(
    (adjustedMasterHeight + adjustedI) - adjustedI,
    i - (PlainsOfShinar.layoutHeight + i)
);
console.log(`Angle of horizontal line: ${horizontalAngle} radians`);