import './Backend.css'
import { FaRegClock } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";


export default function Backend ({cours}){ 
    const {title, Discription,time,date,type} = cours
    
    return(<>
            <section className="introdction-container">
                <div className="intrudction-title">
                    <h3>{title}</h3>
                    <p><span>Prereauistites: </span>{Discription}</p>
               </div>
               <div className="intrudction-time">
                    <h5><FaRegClock className='icone'/>{time}</h5>
                    <h5><IoCalendarOutline className='icone'/>{date}</h5>
                    <h5><FiMapPin className='icone'/>{type}</h5>
               </div>
            </section>
        </>)
}