import axios from "axios";
import { React, useState, useEffect } from "react";

const Customers = () => {
  const [customers, setcustomers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setcustomers(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);



  if(loading===true)
  return <h1>loading...</h1>

if(customers.length===0)
return <h1>there is no customers</h1>

  return <div>{customers.map(item=>{
      return <h3>{item.title}</h3>
  })}</div>;
};

export default Customers;
