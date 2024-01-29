import { rule } from "postcss"
import CardContainer from "../components/CardContainer"




const CardSection = () => {
  return <div className=" md:inline-flex  md:flex-wrap md:flex-row md:items-start md:gap-[35px] md:mt-10 "  >
       <div  className=" w-[289px] h-[140px] bg-green-600 rounded-md text-slate-200  "> 
        <CardContainer  heading="Reduce" para="Lessen the effects of manmade processes on the ecosystem" />
       </div>
       <div  className=" w-[289px] h-[140px] bg-green-600 rounded-md text-slate-200  "> 
        <CardContainer  heading="Restore" para="Restore the damage done to the ecosystem." />
       </div>
       <div  className=" w-[289px] h-[140px] bg-green-600 rounded-md text-slate-200"> 
        <CardContainer  heading="Data driven approach" para="Developing a structured approach to utilizing scientific evidence to make decisions." />
       </div>
       <div  className=" w-[289px] h-[140px] bg-green-600 rounded-md text-slate-200  "> 
        <CardContainer  heading="Democratize Sustainability" para="Open access to information and resources on the impacts of climate change and mitigation measures." />
       </div>
       <div  className=" w-[289px] h-[140px] bg-green-600 rounded-md text-slate-200   "> 
        <CardContainer  heading="Transform ecosystems" para="Assisting communities affected by climate change in creating sustainable means of subsistence." />
       </div>
       
  </div>
}



export default CardSection;