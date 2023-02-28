
import './style.css'
import {useState} from "react";
import {listFilms} from "./listFilms";
import {useNavigate} from "react-router-dom";

export const List = () => {
    const [list, setList] =useState(listFilms);
    const [filter, setFilter] = useState('');
    const [changed, setChanged] = useState(true);
    const navigate = useNavigate();
    const choseFilter = (value) =>{
        if(filter === value || filter.length !== 0){
            setList(listFilms)
            setFilter('')
            document.getElementById("2D").style.color = 'white';
            document.getElementById('3D').style.color = 'white';
        }
        else {
            const filtered = list.filter(item => item.technology === value);
            setList(filtered)
            setFilter(value)
           const gi = document.getElementById(value);
            gi.style.color = 'red';
        }
    }
    const changePrice = (value) =>{
        const item = list;
        if(value === 'expensive'){
            item.sort((x,y) => x.price < y.price ? 1 : -1)
            setChanged(false);
        }
        else if(value === 'cheaper'){
            item.sort((x,y) => x.price > y.price ? 1 : -1)
            setChanged(true);
        }
    }
    const order = (item) =>{
        localStorage.setItem('film', JSON.stringify(item));
        navigate('/order', {replace: true});
    }
    return (
        <div>
            <div className='filtres'>
                <div className='format'><p>Оберіть фомат фільму:</p>
                    <button id='2D' onClick={()=> choseFilter("2D")}>2D</button>
                    <button id="3D" onClick={()=> choseFilter("3D")}>3D</button>
                </div>
                <div className='filterPrice'><p>Фільтрація за ціною</p>
                    <select onChange={(e) => changePrice(e.target.value)}>
                    <option value='default'>За замовчуванням</option>
                    <option value='expensive'>Дорожчі фільми</option>
                    <option value='cheaper'>Дешевші фільми</option>
                </select></div>
            </div>
            <div className='list'>
                <div className='oneElement'>{list.map(item =><div className='element'  key={item.title}><img className='img' src={item.img}/><div>
                    <p>{item.title}</p>
                    <p>Технологія: {item.technology}</p>
                    <p className='price'>{item.price} Грн</p>
                    <button onClick={() => order(item)} className='order'>Замовити білет</button>
                </div></div>)}</div>
            </div>
        </div>
    )
}