import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png";


export default function Navbar(){

const [open,setOpen]=useState(false);
const [dark,setDark]=useState(true);


return (

<header>

<div className="logo">

<img src={logo} alt="Ufundisoft"/>

</div>


<button onClick={()=>setOpen(!open)}>
<Menu/>
</button>


<nav className={open ? "active":""}>

<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#devis">Simulateur</a>
<a href="#rdv">Rendez-vous</a>

</nav>


<button onClick={()=>setDark(!dark)}>
{
dark ? <Moon/> : <Sun/>
}
</button>


</header>

)

}