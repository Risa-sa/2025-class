// This file is intentionally left blank.
document.getElementById('draw').addEventListener('click', function(){
    const omikujiResults = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
    const resultElement = document.getElementById('result');
    if(result == '大吉'){
        resultElement.style.color = 'red';
    }else if (result == '吉'){
        resultElement.style.color = 'orange';
    }else if (result == '中吉'){
        resultElement.style.color = 'yellow';
    }else if (result == '小吉'){
        resultElement.style.color = 'green';
    }else if (result == '末吉'){
        resultElement.style.color = 'light green';
    }else if (result == '凶'){
        resultElement.style.color = 'blue';
    }else if (result == '大凶'){
        resultElement.style.color = 'black';
    }                   
    document.getElementById('result').textContent =
        `あなたの運勢は... ${result}!`;
})