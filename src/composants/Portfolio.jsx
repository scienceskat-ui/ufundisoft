import { useState } from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    ShoppingCart,
    School
} from "lucide-react";


const projets = [

{
    titre:"Ufundisoft Wallet Suite",
    categorie:"fintech",
    icon:<Wallet size={35}/>,
    description:
    "Passerelle unifiée de paiement Mobile Money multi-opérateurs avec tableau de bord analytique."
},


{
    titre:"E-Commerce Interconnecté",
    categorie:"web",
    icon:<ShoppingCart size={35}/>,
    description:
    "Boutique en ligne connectée aux stocks et aux systèmes de paiement locaux."
},


{
    titre:"EduSmart Hub",
    categorie:"web",
    icon:<School size={35}/>,
    description:
    "Solution de gestion scolaire avec paiement en ligne et notifications automatiques."
}

];



export default function Portfolio(){


const [filtre,setFiltre]=useState("all");



const projetsFiltres = projets.filter(

(projet)=>

filtre==="all" || projet.categorie===filtre

);



return (

<section id="portfolio">


<h2 className="title">

Nos Réalisations

</h2>


<p className="subtitle">

Découvrez nos solutions digitales et infrastructures
déployées pour nos partenaires.

</p>



<div className="filter-buttons">


<button

className={filtre==="all"?"filter-btn active":"filter-btn"}

onClick={()=>setFiltre("all")}

>

Tout

</button>



<button

className={filtre==="fintech"?"filter-btn active":"filter-btn"}

onClick={()=>setFiltre("fintech")}

>

FinTech & Pay

</button>



<button

className={filtre==="web"?"filter-btn active":"filter-btn"}

onClick={()=>setFiltre("web")}

>

Plateformes Web

</button>


</div>




<div className="portfolio-grid">


{

projetsFiltres.map((projet,index)=>(


<motion.div

key={index}

className="card portfolio-item"

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.4
}}

>


<div className="card-icon">

{projet.icon}

</div>


<h3>

{projet.titre}

</h3>


<p>

{projet.description}

</p>


</motion.div>


))

}


</div>


</section>

)

}