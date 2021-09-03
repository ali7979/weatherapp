
const cityName=document.getElementById('cityName')
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById("temp");
const datahide=document.getElementsByClassName('middle_layer')
const day=document.getElementById('day');
const todaydate=document.getElementById('todaydate');



//day
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

        let currentTime =new Date();
        let dayy=weekday[currentTime.getDay()];  

day.innerText=dayy;


//MONTH and Date
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
     "November",
     "December",
];



var month=months[currentTime.getMonth() +1];
var date =currentTime.getDate();
todaydate.innerText=date+" "+month







const getinfo=async(e)=>{
    e.preventDefault();

console.log(datahide[0])
let cityVal =cityName.value;
    if(cityVal===""){
        city_name.innerText="Please enter City name in search bar"
        datahide[0].classList.add('data_hide');
    
    }

    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bc019cd25888c5c39a813405a6cec4e0&units=metric`;
        const response = await fetch(url);
        
         const data =await response.json();
      
       const arrData=[data];
       
        
       city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp+" ℃";
        temp_status.innerText=arrData[0].weather[0].main;

const t=arrData[0].weather[0].main;

        if(t == "Sunny"){
            temp_status.innerHTML="<i class='fas fa-sunny' style='color: #eccc68'></i>"
        }
        else if(t == "Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color: blue'></i>"
        }
        else if(t == "Rainy"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
        }
        else if (t=="Haze"){
            temp_status.innerHTML="<i class='fas fa-wind' style='color: #fff'></i>"
        }
        else if (t=="Thunderstorm"){
            temp_status.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color: blue'  ></i>"
        }
        
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'></i>"
        }

datahide[0].classList.remove('data_hide');
    }
    catch{
        city_name.innerText="Please enter a valid City"
        datahide[0].classList.add('data_hide');
    }

    }

}




submitbtn.addEventListener('click',getinfo);