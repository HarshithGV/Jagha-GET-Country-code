import React,{useEffect,useState} from 'react'
function App() {
  const [Datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com/getPlaces").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setDatas(resp)
      })
    })
  },[])
  console.warn(Datas)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
       <td>Place ID</td>
       <td>Place Name</td>
         <td>Taluk ID</td>    
         <td>District ID</td>
         <td>State ID</td>
         <td>Country ID</td>
         
        </tr>
        {
          Datas.map((item,index)=>
            <tr>
           <td>{item.place_id}</td>
           <td>{item.place_name}</td>
          <td>{item.taluk_id}</td>   
          <td>{item.district_id}</td> 
          <td>{item.state_id}</td>         
          <td>{item.country_id}</td>
          
          
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;