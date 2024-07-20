import {TimeBlocks} from "./TimeBlocks";
import {ListOrder} from "./ListOrder";
import {dateKey, emptyString, filmKey, priceKey} from "../../constants";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const OrderedFilmInformation = () =>{
    const item = JSON.parse(localStorage.getItem(filmKey))
    const [price, setPrice] = useState(item.price)
    const [date, setDate] = useState(emptyString);
    const navigator = useNavigate()
    const changeDate = (value) =>{
        setDate(value);
        localStorage.setItem(dateKey, value);

    }
    const check = () =>{
        localStorage.setItem(priceKey, JSON.stringify(price));
        navigator('/zakaz', {replace:true})
    }
    return (<div className="ordered">
        <div className='film'>
            <img src={item.img}/>
            <p>{item.title}</p>
            <p>Технологія: {item.technology}</p>
            <p className='price'>Ціна за білет: {item.price} Грн</p>
            <p>Загальна ціна {price} Грн</p>
            <p>Оберіть дату замовлення</p>
            <TimeBlocks activeTime={date} changeDate={changeDate}/>
            <button onClick={() => check()}>Оформити замовлення</button>
        </div>
        <ListOrder setPrice={setPrice}/>
    </div>)
}