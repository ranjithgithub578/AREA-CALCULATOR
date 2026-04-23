function displayArea(){
    const radiusInput = parseFloat(document.getElementById('radius').value);

const Area=calculateArea(radiusInput);
     document.getElementById('result')
    .innerText=`The Area of circle is ${Area.toFixed(2)}`;

}

document.getElementById('calculate')
.addEventListener('click',displayArea);
