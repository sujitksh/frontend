import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { API_URL } from './config/api'


function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{
    try{
      const fetData = async()=>{
        const testData = await axios.get(`${API_URL}/api/test`)
        setCount(testData.data)
     }
     fetData()
    }catch(err){
       console.log(err)
    } 
  },[])

  return (
   <React.Fragment>
    <h3 style={{"marginLeft":"500px"}}>Employee Details</h3>
    <table className="table" style={{"width":"700px","marginLeft":"250px"}}>
      <thead>
        <tr>
          <th scope="col">Sno.</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
         
        </tr>
      </thead>
      <tbody>
        {
          count.length>0?count.map((res,index)=>
          <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{res.name}</td>
              <td>{res.email}</td>
          </tr>
          ):""
        }
      </tbody>
    </table>
   </React.Fragment>
   
  )
}

export default App
