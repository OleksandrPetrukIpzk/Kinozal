import {useState} from "react";

export const ElementList = ({items, setPrice}) => {
    const [count, setCount] = useState(0);
    const addProduct = () =>{
        setCount(prev => prev + 1);
        setPrice(prev => prev + items.price)
    }
    const minusElement = () =>{
        if(count > 0){
            setCount(prev => prev - 1);
            setPrice(prev => prev - items.price)
        }
    }

    return (<div className='products'>
        <img src={items.img}/>
        <p>{items.title} <p className='price'>ціна {items.price} грн</p></p>
        <div className='buttons'>
            <button onClick={() => addProduct(items.price)}>+</button>
            <p>{count}</p>
            <button onClick={() => minusElement(items.price)}>-</button>
        </div>
    </div>)
}