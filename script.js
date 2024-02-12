// reusable functions
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setCalculationValue(pickedArea, setValue){
    const setArea = document.getElementById(pickedArea);
    setArea.innerText = setValue;
}
// =============================================
// Triangle 
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    // calculate triangle area 
    const area = 0.5 * base * height;
    // display triangle area
    setCalculationValue('triangle-area', area);
}
// Rectangle 
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    // calculate rectangle area
    const area = width * length;
    // display rectangle area
    setCalculationValue('rectangle-area', area);
}
// Parallelogram
function calculateParallelogramArea(){
    const width = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // calculate parallelogram area
    const area = width * height;
    // display parallelogram area
    setCalculationValue('parallelogram-area', area);
}
// Rhombus
function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    // calculate rhombus area
    const area = 0.5 * d1 * d2;
    // display rhombus area
    setCalculationValue('rhombus-area', area);
}
// Pentagon
function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
    // calculate pentagon area
    const area = 0.5 * p * b;
    // display pentagon area
    setCalculationValue('pentagon-area', area);
}
// Ellipse
function calculateEllipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    // calculate ellipse area
    const area = 3.1416 * a * b;
    // display ellipse area
    setCalculationValue('ellipse-area', area);
}

