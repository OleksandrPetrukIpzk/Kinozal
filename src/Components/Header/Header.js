import './style.css'
import {Link, useNavigate} from "react-router-dom";
export const Header = () =>{
    const navigate = useNavigate();
    const login = () =>{
        navigate('/login', {replace: true})

    }
    return(<div className='header'>

    <Link to='/' className='link'><p>Home</p>  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwELji9Hr7P_jzUyjbr_MQF54_02Koca3ag&usqp=CAU'/> </Link>
        <button className='login' onClick={login}><p>{localStorage.getItem('person').length === 0 ? 'Log in' : localStorage.getItem('person')}</p> <img src='https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg'/></button>
    </div>)
}