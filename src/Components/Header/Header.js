import './style.css'
import {Link, useNavigate} from "react-router-dom";
import {IconUser} from "../Images/IconUser";

export const Header = () =>{
    const navigate = useNavigate();
    const login = () =>{
        navigate('/login', {replace: true})
    }

    return(<div className='header'>
    <Link to='/' className='link'>
        <p>Home</p>
    </Link>
        <button className='login' onClick={login}>
            <p>{localStorage.getItem('person') ? localStorage.getItem('person') :  'Log in'}</p>
            <IconUser/>
        </button>
    </div>)
}