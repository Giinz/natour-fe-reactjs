import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { useRef, useState } from 'react';
import request from '../../utils/request';
import {useAuth} from '../../utils/auth'
import {useNavigate} from 'react-router-dom';

const LOGIN_URL = 'users/login'

const Login = () => {
    const errRef = useRef()
    const [errMsg,setErrMsg] = useState();
    const [formLogin, setFormLogin] = useState({email:'',password:''})
    
    const auth = useAuth()
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const {value,name} = e.target;
        setFormLogin({...formLogin,[name]:value})
    }
    const handleLogin = async(e)=>{
        e.preventDefault()
        try{
            const res = await request.post(LOGIN_URL, formLogin,{
                headers:{
                    "Content-Type":"application/json",
                },
                withCredentials:true
            }
            )
            // navigate('/')
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='m-auto w-3/4 rounded bg-white px-24 py-12 shadow-md'>
            <h1
                ref={errRef}
                className={`${
                    errMsg ? 'block' : 'hidden'
                } mb-4 text-2xl uppercase text-red-600`}
            >
                {errMsg}ascascascasc
            </h1>
            <h2 className='mb-8 bg-gradient-to-br from-lightGreen to-heavyGreen bg-clip-text text-2xl font-bold text-transparent'>
                CREATE YOUR ACCOUNT!
            </h2>
            <form action='submit' onSubmit={handleLogin}>
                <Input
                    label='Email address'
                    type='email'
                    id='email'
                    value={formLogin.email}
                    handleChange={handleChange}
                    errorMessage='It should be a valid email'
                    required
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    value={formLogin.password}
                    handleChange={handleChange}
                    required
                    pattern='^[A-Za-z0-9]{8,16}$'
                    errorMessage='Password must be at least 8 characters!'
                />
                <Button type='submit' value='Sign Up' />
            </form>
        </div>
    );
};

export default Login;
