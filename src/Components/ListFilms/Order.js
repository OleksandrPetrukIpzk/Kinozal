import {useNavigate} from "react-router-dom";
import {dateKey, filmKey, personKey, priceKey} from "../../constants";

export const Order = () =>{
    const item = JSON.parse(localStorage.getItem(filmKey));
    const navigator = useNavigate()
    const date = localStorage.getItem(dateKey);
    const human = localStorage.getItem(personKey) ? localStorage.getItem(personKey) : 'Non found';
    const price = localStorage.getItem(priceKey);
    const back = () =>{
        navigator('/', {replace:true})
    }
    return(<div className='zakaz'>
        <p>Order number {Math.random() * 1000}</p>
        <p>Film name: {item.title}</p>
        <p>Technology film: {item.technology}</p>
        <p>Price for film: {item.price}</p>
        <p>Date when film run: {date}</p>
        <p>Human how order film: {human}</p>
        <p>Price for all: {price}</p>
        <button className='orders' onClick={() => back()}>Go to main page</button>
    </div>)
}