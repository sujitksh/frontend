import React,{ useState,useEffect } from 'react'
import axios from "axios"


function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{
    try{
      const fetData = async()=>{
        const testData = await axios.get(`http://43.205.232.204:8000/api/test`)
        setCount(testData.data)
        console.log(testData)
     }
     fetData()
    }catch(err){
       console.log(err)
    } 
  },[])

  return (
   <React.Fragment>
    <h3 style={{"marginLeft":"500px"}}>Employee Details</h3>
    <table class="table" style={{"width":"700px","marginLeft":"250px"}}>
      <thead>
        <tr>
          <th scope="col">Sno.</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {
          count.length>0?count.map((res,index)=>
          <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{res.name}</td>
              <td>{res.age}</td>
              <td>{res.city}</td>
          </tr>
          ):""
        }
        

      </tbody>
    </table>
   </React.Fragment>
   
  )
}

export default App
