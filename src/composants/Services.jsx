import { 
    Wallet,
    Laptop,
    Smartphone
} from "lucide-react";

import { motion } from "framer-motion";


const services = [

{
    icon:<Wallet size={35}/>,
    title:"Intégration FinTech / Mobile Money",
    description:
    "Automatisation de vos encaissements et décaissements via M-Pesa, Airtel Money et Orange Money. Solutions adaptées aux e-commerces et ERP."
},


{
    icon:<Laptop size={35}/>,
    title:"Applications Web & Métiers",
    description:
    "Développement de plateformes SaaS, logiciels métiers, ERP et architectures cloud performantes et évolutives."
},


{
    icon:<Smartphone size={35}/>,
    title:"Développement Mobile",
    description:
    "Création d'applications Android/iOS modernes avec intégration Wallet, notifications et services numériques."
}

];



export default function Services(){


return (

<section id="services">


<h2 className="title">
Nos Expertises Business
</h2>


<p className="subtitle">

Des solutions technologiques conçues pour automatiser,
sécuriser vos opérations et accélérer votre croissance.

</p>



<div className="services">


{
services.map((service,index)=>(


<motion.div

className="card"

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.2
}}

>


<div className="card-icon">

{service.icon}

</div>


<h3>

{service.title}

</h3>


<p>

{service.description}

</p>


</motion.div>


))

}


</div>


</section>

)


}