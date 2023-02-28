import {listFilms} from "./listFilms";
import './style.css'
export const Films = () =>{

    return(<div className='oneElement'>{listFilms.map(item =><div className='element'  key={item.title}><img className='img' src={item.img}/><div>
        <p>{item.title}</p>
        <p>{item.price} Грн</p>
        <button className='order'>Замовити білет</button>
    </div></div>)}</div>)
}