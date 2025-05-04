
console.log("Successfully called");
const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

//function to call the API or fetch data from server through API;
async function showWeather(){

    try{
    console.log("Successfully called");
  let city="jalgaon";
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data=await response.json();
    console.log("weather-data",data);

    let newpara=document.createElement('p');
    newpara.textContent=`${data?.main?.temp.toFixed(2)} C`;

    document.body.appendChild(newpara);
    console.log("Successfully called");
    }catch(err){

        //error
    }
}

showWeather();


//another function to display the data from API on UI

async function getcustomWeather(){

    try{
    let lat=17.6333;
    let longi=18.3333;

    let result =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${API_KEY}`);
    let data=result.json();
    console.log(data);
    }catch(err){
        console.log("error",err);
    }
}

function getLocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Not supported");
    }
}

function showPosition(position){
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
}
