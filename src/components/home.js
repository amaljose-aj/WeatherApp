import React, { useState } from 'react';
import axios from 'axios';
import './col.css';

function Home() {
  const [details, setdetails] = useState("");
  const[city,setcity]=useState("");
  const[url,seturl]=useState("");
  const[distemp,settemp]=useState("?");
  const[discloud,setcloud]=useState("?");
  //const url='https://api.weatherbit.io/v2.0/current?city=${City}&key=27b364494180481d98c53db023906c9c&include=minutely';
  
  function TempCity(e) {
    
    setcity(e.target.value);
    const url='https://api.weatherbit.io/v2.0/current?city=' +city+ '&key=27b364494180481d98c53db023906c9c&include=minutely';
    seturl(url);
  }

  const values=async()=>{
    console.log(city)
    //const url='https://api.weatherbit.io/v2.0/current?city='+city+'&key=27b364494180481d98c53db023906c9c&include=minutely';
   const resp = await axios.get(url);
    
    setdetails(resp.data.data[0]);
    //console.log(details);
    settemp(details["temp"]);
    setcloud(details.weather["description"]);
    
    }
    
  
  return (
    
    <div className="god">
      <div>  <h1 classname="heading-yes">NOAA WEATHER</h1></div>
     
      <div className="text">
      <input className="search-bar" name="City" type="text" placeholder='Enter the city name' value={city} onChange={TempCity}/>
      <input className="submit-button" type="submit" onClick={values}/>
      
         <div classNamee="contain">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           <h1 className="img">City:{city}</h1>
           <h1 className="img">Temparature:{distemp}°C</h1>
           <h1 className="img">Clouds:{discloud}</h1>
          </div>
      
      </div>
    </div>
  )
}

export default Home