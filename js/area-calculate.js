function parallelogramCalculator (id){
    const paraInputValue = document.getElementById(id);
    const paraInputValueString = paraInputValue.value;
    const inputValue = parseFloat(paraInputValueString);
    return inputValue;
};
function calculateParallelogramArea(){
    const paraWidth = parallelogramCalculator('para-width');
    const paraHeight = parallelogramCalculator('para-height');

    const area = paraWidth * paraHeight;
};

function setElementInnerText(){
    const element = document.getElementById('para-area');
    element.innerText = area;
    console.log(element)
}