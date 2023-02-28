import {useForm} from "react-hook-form";
import './style.css'
import {useNavigate} from "react-router-dom";

export const Login = () =>{

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const logined = data =>{
        localStorage.setItem('person', data.Username)
        navigate('/', {replace: true});
    }
    return(<div className='logined'>
        <h1>Log in Kinozal</h1>
        <form onSubmit={handleSubmit(logined)}>
            <input {...register('Username')}/>
            <input type="password" {...register('Pasword')}/>
            <button type='submit'>Log in</button>
        </form>
    </div>)
}