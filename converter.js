function temperatureConverterCF(valNum){
    valNum = parseFloat(valNum); 
    document.getElementById("outputFahrenheit").innerHTML=((valNum-32)/1.8).toFixed(2) + " " + "&deg;F";
}

function temperatureConverterFC(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=((valNum*1.8)+32).toFixed(2) + " " + "&deg;C";
}

function clean(){
    window.location.reload();
}