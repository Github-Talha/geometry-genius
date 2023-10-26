function triangleCalculateArea(fieldId) {
    const baseInputField = document.getElementById(fieldId);
    const baseInputFieldValueString = baseInputField.value;
    const baseInputFieldValue = parseFloat(baseInputFieldValueString);
}


function calculateRectangleArea() {
    //get reactangle width value
    const rectangleWidthField = document.getElementById('rectangle-width');
    const widthValueText = rectangleWidthField.value;
    const widthValue = parseFloat(widthValueText);
    console.log(widthValue);

    //get rectangle length value 
    const reactangleLengthField = document.getElementById('rectangle-length');
    const lengthValueText = reactangleLengthField.value;
    const lengthValue = parseFloat(lengthValueText);
    console.log(lengthValue);

    //get area 
    const area = widthValue * lengthValue;
    console.log(area);

    // get area display 
    const areaDisplay = document.getElementById('rectangle-area');
    areaDisplay.innerText = area;

}


//reusable function --> reduse duplicate code 
function calculateParallelogramArea() {
    const paraBaseValue = getInputFields('parallelogram-base');
    const paraHeightValue = getInputFields('parallelogram-height');

    //calculate area
    const area = paraBaseValue * paraHeightValue;
    if (isNaN(area)) {
        alert('Please input a number');
        return
    }
    //set area element 
    setElementInnerText('parallelogram-area', area);

    //set total element
    setTheResultOnTheAreaSector('Parallelogram', area);
}
//add to calculation area
function setTheResultOnTheAreaSector(areaType, area) {
    const entryTotal = document.getElementById('AreaCalculation');
    const p = document.createElement('p');
    p.innerText = (areaType + ' ' + area);
    entryTotal.appendChild(p);
}
// ellipse 
function calculateEllipseArea() {
    const majorRadius = getInputFields('major-radius');
    const minorRadius = getInputFields('minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}
// get input fields 
function getInputFields(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
//set p,span,div inner text 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

