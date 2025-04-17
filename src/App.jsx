import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './components/Lab1.jsx'
import Lab2 from './Components/Lab2.jsx'
import Lab3 from './components/Lab3.jsx'
import Lab4 from './Components/Lab4.jsx'
import Lab5 from'./components/Lab5.jsx'
import Lab6 from'./components/Lab6.jsx'
import Lab8 from'./Components/Lab8.jsx'
import LabMyApiCRUD from './Components/MyApiCRUD.jsx'
import Lab12 from './Components/Lab12.jsx'



import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Lab Experiments</h1>
      <table border="2" width="80%">
        <tr>
          <td>S.No</td>
          <td>Lab</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>1</td>
          <td><Link to="/lab2">Lab1</Link></td>
          <td>alignment and cse</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link to="/lab1">Lab2</Link></td>
          <td>cse</td>
        </tr>
        <tr>
          <td>3</td>
          <td><Link to="/lab3">Lab3</Link></td>
          <td>btech</td>
        </tr>
        <tr>
          <td>4</td>
          <td><Link to="/lab4">Lab4</Link></td>
          <td>hgjygv</td>
        </tr>
        
        
        <tr>
          <td>5</td>
          <td><Link to="/lab5">Lab5</Link></td>
          <td>hii</td>
        </tr>
        <tr>
          <td>6</td>
          <td><Link to="/lab6">Lab6</Link></td>
          <td>axios</td>
        </tr>
        <tr>
          <td>7</td>
          <td><Link to="/lab7">Lab7</Link></td>
          <td>axios</td>
        </tr>
        <tr>
          <td>8</td>
          <td><Link to="/lab8">Lab8</Link></td>
          <td>Spring Boot with Rest API and CRUD Operations</td>
        </tr>
        <tr>
          <td>9</td>
          <td><Link to="/LabMyApiCrud">Lab9</Link></td>
          <td>MyAPICRUD</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="/Lab12">Lab12</Link></td>
          <td>Lab12</td>
        </tr>
        
        



      
      </table>
    </>
  )
}

export default App