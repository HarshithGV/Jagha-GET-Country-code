import { useEffect, useState } from "react";

function App() {
   
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com/getCountries`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  return (
    <div className="App">
    <h1>Get API Call </h1>
    <table border="1">
    <tbody>
      <tr>
          
          <th>Country Name</th>
          <th>Country Code</th>
          
      </tr>
      {data.map((item, index) => (
        <tr key={index}>
       
        <td>{item.country_name}</td>
            <td>{item.country_code}</td>
           
       </tr>
      ))}
      </tbody>
      </table>
      </div>
  );
}

  
export default App;