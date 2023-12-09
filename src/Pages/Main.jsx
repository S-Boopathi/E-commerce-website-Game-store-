import React, { useEffect, useState } from 'react'
import './main.css';
import SideMenu from '../Components/SideMenu';
import Header from './Header';
import Home from './Home'; 
function Main() {
  const [active ,setActive]= useState(false);
  const [games,setGames]=useState([])
  const handelToggleAcive=()=>{
    setActive(!active);
  };
  const fetchData =()=>{
    fetch('http://localhost:3000/api/gamesData.json')
    .then(res=>res.json())
    .then(data=>{
      setGames(data)
      
    })
    .catch(e=>console.log(e.message));
  };
  useEffect (()=>{
    fetchData();
  },[])
  return (
    <main>
        <SideMenu active={active}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
          <Header toggleActive ={handelToggleAcive}/>
          <div className="container-fliud">
            <Home games={games}/>
          </div>
        </div>
    </main>
  )
}

export default Main