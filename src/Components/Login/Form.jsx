import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {personKey} from "../../constants";

export const Form = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const logined = data =>{
        localStorage.setItem(personKey, data.Username)
        navigate('/', {replace: true});
    }
    return <form onSubmit={handleSubmit(logined)}>
        <input {...register('Username')}/>
        <input type="password" {...register('Pasword')}/>
        <button type='submit'>Log in</button>
    </form>
}