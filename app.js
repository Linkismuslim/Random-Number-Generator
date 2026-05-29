const generateBtn = document.getElementById('generate-btn')
const resultText = document.getElementById('result')

generateBtn.addEventListener("click", function(){

    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min>=max) {
        resultText.textContent = "Error!";
        resultText.style.fontSize = "2ren";
        return
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    resultText.style.fontSize = "4rem"
    resultText.textContent = randomNumber

});