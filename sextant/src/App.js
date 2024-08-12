
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
  const [ip4, setIp4]= useState(null);
  const [ip6, setIp6]= useState(null);
  const[err, setErr]=useState("");
  const getData=async()=>{
    const url4 = "https://api.ipify.org?format=json";
    try {
      const response = await fetch(url4);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json4 = await response.json();
      console.log(json4);
      setIp4(json4.ip)
    } catch (error) {
      console.error(error.message);
      
  }
  }
   
    
    
   useEffect(()=>{
    getData();

     },[]);

  const getDataIp6=async()=>{
    const url6= "https://api6.ipify.org?format=json";
  
    try {
      const res = await fetch(url6);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
        
      }
  
      const json6 = await res.json();
      console.log(json6);
      setIp6(json6.ip)
    } catch (error) {
      console.error(error.message);
      setErr( "You don't have an IPv6 address")
    }

  }
    
    
    
    
  
  useEffect(()=>{
    getDataIp6();
  },[])
  
  
  return (
    <>
    <Banner/>
    <Card>

      <h4> Your IP Address</h4>
      
      <div className='info'>
      <p className='lead'> <strong>IPV4:</strong>{ip4}</p>
      <p className='lead'><strong>IPV6:</strong>{ip6? ip6:err}</p>
      </div>
      
    </Card>
    </>
      
  );
}

export default App;
