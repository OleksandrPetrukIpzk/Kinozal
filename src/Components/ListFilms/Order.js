import {useNavigate} from "react-router-dom";

export const Order = () =>{
    const item = JSON.parse(localStorage.getItem('film'));
    const navigator = useNavigate()
    const date = localStorage.getItem('date');
    const human = localStorage.getItem('person').length > 0 ? localStorage.getItem('person') : 'Nevidomo';
    const price = localStorage.getItem('price');
    const back = () =>{
        navigator('/', {replace:true})
    }
    return(<div className='zakaz'>
        <p>Order number {558}</p>
        <p>Film name: {item.title}</p>
        <p>Technology film: {item.technology}</p>
        <p>Price for film: {item.price}</p>
        <p>Date when film run: {date}</p>
        <p>Human how order film: {human}</p>
        <p>Price for all: {price}</p>
        <button className='orders' onClick={() => back()}>Go to main page</button>
    </div>)
}