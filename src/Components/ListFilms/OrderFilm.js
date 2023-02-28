import {useState} from "react";
import {Header} from "../Header/Header";
import {ListOrder} from "./ListOrder";
import {useNavigate} from "react-router-dom";

export const OrderFilm = () => {
    const item = JSON.parse(localStorage.getItem('film'))
    const navigator = useNavigate()
    const [price, setPrice] = useState(item.price)
    const [date, setDate] = useState('');
    const changeDate = (value) =>{
        if(date === ''){
            setDate(value);
            document.getElementById(value).style.color = 'red';
            document.getElementById(value).style.background = 'white';
            localStorage.setItem('date', date);
        }
        else{
            setDate(date);
            document.getElementById('8:00').style.color = 'white';
            document.getElementById('8:00').style.background = '#221F1F';
            document.getElementById('15:00').style.color = 'white';
            document.getElementById('15:00').style.background = '#221F1F';
            document.getElementById('18:30').style.color = 'white';
            document.getElementById('18:30').style.background = '#221F1F';
            document.getElementById(value).style.color = 'red';
            document.getElementById(value).style.background = 'white';
            localStorage.setItem('date', date);
        }
    }
    const check = () =>{
        localStorage.setItem('price', JSON.stringify(price));
        navigator('/zakaz', {replace:true})
    }
    return (
        <div>
            <Header/>
            <div className="ordered">
                <div className='film'>
                    <img src={item.img}/>
                    <p>{item.title}</p>
                    <p>Технологія: {item.technology}</p>
                    <p className='price'>Ціна за білет: {item.price} Грн</p>
                    <p>Загальна ціна {price} Грн</p>
                    <p>Оберіть дату замовлення</p>
                    <div className='date'>
                        <button id='8:00' onClick={() => changeDate('8:00')}>8:00</button>
                        <button id='15:00' onClick={() => changeDate('15:00')}>15:00</button>
                        <button id='18:30' onClick={() => changeDate('18:30')}>18:30</button>
                    </div>
                    <button onClick={() => check()}>Оформити замовлення</button>
                </div>
                <ListOrder setPrice={setPrice}/>
            </div>
        </div>
    )
}