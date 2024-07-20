import {listFilms} from "./listFilms";
import './style.css'
import {FilmElement} from "./FilmElement";
export const Films = () =>{

    return(<div className='oneElement'>{listFilms.map(item =>
   <FilmElement item={item}/>
    )}</div>)
}