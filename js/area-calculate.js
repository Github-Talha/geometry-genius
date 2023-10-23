function areaCalculator() {
    //get triangle base value
    const baseInput = document.getElementById('base-input');
    const baseInputValue = parseFloat(baseInput.value);

    //get triangle height value
    const baseHeight = document.getElementById('triangle-height');
    const baseHeightValue = parseFloat(baseHeight.value);

    // triangle calculation 
    const area = 0.5 * baseInputValue * baseHeightValue;
    console.log(area)
}

function rectangleCalculator(){
    //rectangle width
    const rectangleWidth = document.getElementById('rectangle-witdh');
    const rectangleWidthValue = parseFloat(rectangleWidth.value);
    //rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = parseFloat(rectangleLength.value);

    //calc
    const area = rectangleWidthValue * rectangleLengthValue;

    //area 
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}