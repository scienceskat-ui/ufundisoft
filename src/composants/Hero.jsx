import { motion } from "framer-motion";
import { Calculator, CalendarCheck } from "lucide-react";


export default function Hero(){

    return (

<section className="hero">


<motion.div

className="left"

initial={{opacity:0,x:-80}}

animate={{opacity:1,x:0}}

transition={{duration:0.8}}

>


<h3>
Ingénierie Logicielle FinTech & Cloud
</h3>


<h1>
Propulsez votre Business avec des Solutions Digitales Robustes.
</h1>


<h2>
Des architectures évolutives pour booster votre croissance numérique.
</h2>


<p>

Nous concevons des applications Web/Mobiles sur-mesure,
des API d'intégration Mobile Money
(M-Pesa, Orange Money, Airtel Money)
et assurons votre transformation Cloud.

</p>



<div>


<a href="#devis" className="btn">

<Calculator size={20}/>

Calculer mon Devis

</a>



<a href="#rdv" className="btn btn2">

<CalendarCheck size={20}/>

Réserver un Audit Gratuit

</a>


</div>



</motion.div>





<motion.div

className="right"

initial={{opacity:0,scale:0.5}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

>


<div className="circle">


<img 

src="/logo.png"

alt="Logo Ufundisoft"

/>


</div>


</motion.div>


</section>

    );

}