import {ElementList} from "./ElementList";
import {snacksList} from "../../constants";

export const ListOrder = ({setPrice}) =>{

    return(<div  className='wrap'>
        {snacksList.map(items => <ElementList items={items} setPrice={setPrice}/>)}
    </div>)
}