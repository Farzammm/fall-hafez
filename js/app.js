const apiKey = "188589:626bd5fc7c4f54.58860129";

const fall = document.querySelector("#fall");
const title = document.getElementById('title')
const rhum = document.getElementById('rhum')
const meaning = document.getElementById('meaning')

fall.addEventListener('click' , getResult)
fall.addEventListener('click' , function(){
        title.classList.add('bgcolor')
})

function getResult(){
    loadJSON("GET", `https://one-api.ir/hafez/?token=${apiKey}` , displayResult)
}

function loadJSON(method , url , callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method , url);
    xhr.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4){
            callback(JSON.parse(this.response));
        }
    }
    xhr.send();
}

function displayResult(response) {
    console.log(response)
    title.innerHTML = `${response.result.TITLE}`;
    rhum.innerHTML = `${response.result.RHYME}`;
    meaning.innerHTML = `${response.result.MEANING}`;
}

