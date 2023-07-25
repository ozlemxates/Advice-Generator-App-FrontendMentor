let adviceText = document.querySelector("#adviceText");
let adviceId = document.querySelector("#adviceId")

function addAdvice() {
    fetch("https://api.adviceslip.com/advice").then(
        response => response.json()
    ).then(
        responseJson => {
            let advice = responseJson.slip.advice
            adviceText.innerHTML = advice

            let id = responseJson.slip.id
            adviceId.innerHTML = id
        }
    ) 
}




