import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";


export default function Navbar(){

    const [open,setOpen]=useState(false);
    const [dark,setDark]=useState(true);


    const changeTheme=()=>{

        setDark(!dark);

        document.body.classList.toggle("light");

    }


    return (

<header>

<div className="logo">

<img src="/logo.png" alt="Ufundisoft"/>

</div>


<button 
id="menuBtn"
onClick={()=>setOpen(!open)}
>

<Menu/>

</button>



<nav className={open ? "active":""}>

<a href="#services">Services</a>

<a href="#portfolio">Portfolio</a>

<a href="#devis">Simulateur</a>

<a href="#rdv">Rendez-vous</a>


</nav>


<button 
className="theme"
onClick={changeTheme}
>

{
dark ? <Moon/> : <Sun/>
}

</button>


</header>


    )
}