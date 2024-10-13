const api = 'https://api.tomorrow.io/v4/weather/forecast?location=pune&apikey=3v8LUxjXQg4kFKX225LwaerWqbUVp6dD';

let ip = function(){
  return document.querySelector("input").value;
}

let searchBtn = document.querySelector("#btn");

searchBtn.addEventListener("click",()=>{
  let apiUpdate = `https://api.tomorrow.io/v4/weather/forecast?location=${ip()}&apikey=3v8LUxjXQg4kFKX225LwaerWqbUVp6dD`;
  let promise = fetch(apiUpdate);
  promise.then((res)=>{
    
    return res.json()})
  .then((obj)=>{
    
    console.log(obj);
    
   
      document.querySelector("#location").textContent = obj.location.name;
      document.querySelector("#temp").textContent = obj.timelines.daily[0].values.temperatureAvg;
      document.querySelector("#hd").textContent = obj.timelines.daily[0].values.humidityAvg;
      document.querySelector("#ws").textContent = obj.timelines.daily[0].values.windSpeedAvg;
      document.querySelector("#ri").textContent = obj.timelines.daily[0].values.rainIntensityAvg;
    
        let t = Number(obj.timelines.daily[0].values.temperatureAvg);
          
          if(t<10){
            document.querySelector("#img").src = 'https://img.freepik.com/premium-photo/penguin-snow_942736-63.jpg';
          }
        
           else if(t>=10 && t<20){
            document.querySelector("#img").src = "https://img.freepik.com/free-vector/illustration-person-with-cold_23-2148402714.jpg";
          }
          else if(t>=20 && t<=30){
            document.querySelector("#img").src = "https://store-images.s-microsoft.com/image/apps.60423.13664108468657913.8218191b-9e2a-49f4-8455-3c027b985a5d.30a38556-a2f8-4e20-835b-d8d914491b8b";
          }
          else if(t>=31 && t<=40){
            document.querySelector("#img").src = "https://img.freepik.com/premium-vector/hot-weather-sunny-day_29937-11157.jpg";
          }
          else if(t>40){
            document.querySelector("#img").src = "https://i.pinimg.com/736x/b4/7e/a1/b47ea1848a4c3d640d1271eea9fb3d81.jpg";
          }
  //document.querySelector("#img").style.src = ""
  
    // obj.timelines
    //temperatureAvg
  }) 
  
})


 
