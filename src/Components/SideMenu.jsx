import React ,{useState}from 'react'
import './sidemenu.css';
import navListData from '../data/NavListData';
import NavListitem from './NavListitem';
import ClassData from '../data/ClassData';
function SideMenu({active}) {
    const [navData,setNavData]=useState(navListData)
    const [classlistdata,setClasslistdata]=useState(ClassData)
  return (
    <div className={`sideMenu ${active? 'active ':undefined}`}>
        <a href="#" className='logo'>
        <i className="bi bi-controller"></i>
            <span className='brand'>Play </span>
        </a>
        <ul className='nav'>
            {navData.map(item => (
                    <NavListitem key={item._id} item={item}/>
                ))}
                <ul className='social'>{
                  ClassData.map(item => (
                    <li><a href="#" className={`${item.class}`}></a></li>
                    
                  ))
                  
                  };
                 
                  </ul>

                  
            
        </ul>
    </div>
  );
}

export default SideMenu