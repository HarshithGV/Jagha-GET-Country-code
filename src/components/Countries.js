import React from "react";

function Countries() {
 
  var url="";
  var info1="";
  var info3="";
   url=('http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com/getCountries', {mode: 'no-cors'})
   info1=fetch(url)
  info3=info1.json()
  console.log(info3)

  
  return (
    <div className="App">
      <header className="App-header">
       
        
       <p>This is my country</p>
      
       
      </header>
    </div>
  );
}

export default Countries;
