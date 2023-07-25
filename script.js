let adviceText = document.querySelector("#adviceText");

function addAdvice() {
    fetch("https://api.adviceslip.com/advice").then(
        response => response.json()
    ).then(
        responseJson => {
            let advice = responseJson.advice
            adviceText.innerHTML = advice;
        }
    )
}