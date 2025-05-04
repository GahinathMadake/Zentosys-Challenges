const usertab=document.querySelector('[data-user-weather]');
const searchtab=document.querySelector('[data-search-weather]');
const grantcontainerlocation=document.querySelector('.grant-container-location');
const searchPlaceholder=document.querySelector('[dataSearchForm]');
const weatherInfo=document.querySelector('.weather-info');
const loadingContainer=document.querySelector('.loading-container');

const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

let currenttab=usertab;
currenttab.classList.add("current-tab");
getFromSessionStorage();//these continuosly resoposible for displaying weather-info
//for atleast one in the starting searchweather/userweather


//check if cordinates are already present in session storage 


function getFromSessionStorage(){
    console.log("getsessionstorage");
   const localCoordinates=sessionStorage.getItem("user-coordinates");
   if(!localCoordinates){
     grantcontainerlocation.classList.add("active");

   }

   else{
    const coordinates=JSON.parse(localCoordinates);
    console.log(coordinates);
    fetchUserInfo(coordinates);
   }
}

async function fetchUserInfo(coordinates){ //as api is called ->async
    
    const{lat,lon}=coordinates;
    //make grantcontainer invisible 
    grantcontainerlocation.classList.remove("active");
    loadingContainer.classList.add("active");

    //API CALL

    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const data=await response.json();

        loadingContainer.classList.remove("active");
        weatherInfo.classList.add("active");
        console.log("data going to render");
        renderWeatherInfo(data);
        
    }catch(err){
        console.error(err);
    }
    
}


usertab.addEventListener("click",()=>{

    switchTab(usertab);
   
});
   
   
searchtab.addEventListener("click",()=>{
   
       switchTab(searchtab);
      
   });

function switchTab(clickedTab){

    if(clickedTab!=currenttab){
        //remove background color
        currenttab.classList.remove("current-tab");
        currenttab=clickedTab;
        currenttab.classList.add("current-tab");

    }
  
     if(!searchPlaceholder.classList.contains("active")){ //while clicking on search weather there is only search option
        grantcontainerlocation.classList.remove("active");
        weatherInfo.classList.remove("active");
        searchPlaceholder.classList.add("active");

     }
     else{  //i am already on search tab,now enable your weather tab(not conatining search tab it is for user)

        searchPlaceholder.classList.remove("active");
        weatherInfo.classList.add("active");
        
        //require live co-ordeinates
        getFromSessionStorage();  //get coordinates as local storage 
     }
    
}







function renderWeatherInfo(data){
    console.log("enter into renderinfo");
    const cityName=document.querySelector('[city-name]');
    const countryicon=document.querySelector('[data-country-icon]');
    const weatherStatus=document.querySelector('[weather-status]');
    const weatherstatusicon=document.querySelector('[weather-status-icon]');
    const temperatureoutput=document.querySelector('[temperature-output]');
    const windspeedoutput=document.querySelector('[wind-speed-output]');
    const humidityoutput=document.querySelector('[humidity-output]');
    const cloudoutput=document.querySelector('[cloud-output]');
    // const temperatureoutput=document.querySelector('[temperature-output]');
    // const temperatureoutput=document.querySelector('[temperature-output]');
    // const temperatureoutput=document.querySelector('[temperature-output]');


    cityName.innerText=data?.name;
    countryicon.src=`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`
    weatherStatus.innerText=data?.weather?.[0]?.description; //as weather is array

    weatherstatusicon.src=`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`

    temperatureoutput.innerText=`${data?.main?.temp}°C`;                    //data?.main?.temp
    windspeedoutput.innerText=`${data?.wind?.speed}m/s`;
    humidityoutput.innerText=`${data?.main?.humidity}%`;
    cloudoutput.innerText=`${data?.clouds?.all}%`;

    /**
     * 
     * json OBJECT TO STRING ->>JSON.stringify()
     * json string to object->>JSON.parse()
     * 
     * json object == real data object
     * json string == only difference is it is in string format adheres to JSON format
     * 
     * json object has multiple json object
     * 
     * if we have to access particular property in JSON object
     * -->optional chaining parameter (return the value)
     * if that property does not present in json object 
     * it no show error it gives output as undefined
     */



}


function getLocationfunc(){
    console.log("getlocation");
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Geolocation is not supported by this browser."); 
    }
}

function showPosition(position){
    const usercordinates={
        lat:position.coords.latitude,
        lon:position.coords.longitude
    }

    sessionStorage.setItem("user-coordinates",JSON.stringify(usercordinates));
    fetchUserInfo(usercordinates); 
}

document.querySelector('[data-grant-access]').addEventListener('click',getLocationfunc);


const dataSearchInput=document.querySelector('[data-search-input]');



document.querySelector('[dataSearchForm]').addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityname=dataSearchInput.value;
    console.log("searchForm");
    if(cityname==="")return;
    else{
        fetchSearchDetails(cityname);
    }

   
})

async function fetchSearchDetails(cityname){

     loadingContainer.classList.add("active");
     weatherInfo.classList.remove("active");
     grantcontainerlocation.classList.remove("active");
    try{

    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`);
    const data=await response.json();

    loadingContainer.classList.remove("active");
    weatherInfo.classList.add("active");
    renderWeatherInfo(data);

    }catch(e){
      console.error(e);
    }
    console.log("i am in fetchdetails without connection");
}

