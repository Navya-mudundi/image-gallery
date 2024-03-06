import React, { useState } from 'react'

const App = () => {
  const [city,setCity]=useState("");
  const[result,setResult]=useState("");
  const changeHandler= e =>{
    setCity(e.target.value)
  }
  const submitHandler= e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then
    (response=>response.json())
    .then (data=>{
      const kelvin=data.main.temp;
      const celcius=kelvin-273.5;
      setResult("Temperature at "+city+ " is"+"\n"+Math.round(celcius)+"°C");
      
    }
    ).catch(error=>console.log("error"))
    setCity("")
      
    };
   
    return (
    <div>
      <center>
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>
        <h1>weather Application</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange={changeHandler}/> &nbsp;&nbsp;
          <input type="submit" value="search"/>
        </form>
        </div>
         <h1>{result}</h1>
      </div>
      
    </div>
    </center>
    </div>
  )
}

export default App


