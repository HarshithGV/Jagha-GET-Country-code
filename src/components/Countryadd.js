import React, {useEffect, useState} from 'react'
function App() {
    const [countryname,setCountryname]=useState("");
    const [countrycode,setCountrycode]=useState("");

    function SaveCountry(){
    console.warn({countryname,countrycode});
    let data={countryname,countrycode}
    fetch("http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com/addCountry", 
    {
      method:'POST',
        headers:{
           'Accept':'application/json',
          'Content-Type':'application/json' 
        },
        body:JSON.stringify(data)
   }).then((result)=>{
    console.warn("result",result);
   })
    }

return(
    <div>
        <h1>Add Country</h1>
        <input type="text" value={countryname} onChange={(e) => (setCountryname(e.target.value))} name="company_name" /><br/>
        <input type="text" value={countrycode} onChange={(e) => (setCountrycode(e.target.value))} name="company_code" /><br/>
        <button type="button" onClick={SaveCountry} >Save Country</button>
    </div>
);
}

export default App;