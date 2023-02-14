import React,{useEffect,useState} from 'react';
import {Outlet, Link} from "react-router-dom";
function App() {
  const [Datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/getCountries").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setDatas(resp)
      })
    })
  },[])
  console.warn(Datas)
  return (
    <div className="App">
      <h1>Country Details </h1>
<button type="button"><Link to="/Countryadd">Add Country</Link></button>
      <table border="1">
       <tbody>
       <tr>
       
          <td>CountryName</td>
          <td>CountryCode</td>
         
        </tr>
        {
          Datas.map((item,index)=>
            <tr>
          
          <td>{item.country_name}</td>
          <td>{item.country_code}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;