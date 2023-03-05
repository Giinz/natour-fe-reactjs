import Input from '../../Components/Input/Input';
import { useRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import request from '../../utils/request';
import { Link } from 'react-router-dom';

const SIGNUP_URL = 'users/signup';

const Signup = () => {
    const errRef = useRef();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await request.post(SIGNUP_URL, formValues);
            setSuccess(true);
            console.log(res);
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg(err.response.data.message);
            } else {
                setErrMsg('Registration failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className='m-auto w-3/4 rounded bg-white px-24 py-12 shadow-md'>
                    <h1 className='text-center mb-8 bg-gradient-to-br from-lightGreen to-heavyGreen bg-clip-text text-2xl font-bold text-transparent'>Success!</h1>
                    <div className='row-span-2 cursor-pointer self-center rounded-full bg-lightGreen py-4 text-center font-poppins text-xs  text-white hover:-translate-y-1 lg:px-5 lg:text-sm lg:leading-10'>
                        <Link to='/login' className='w-full h-full block'>LOG IN</Link>
                    </div>
                </section>
            ) : (
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
                    <form action='submit' onSubmit={handleSubmit}>
                        <Input
                            label='Your name'
                            type='text'
                            id='name'
                            value={formValues.name}
                            handleChange={handleChange}
                            errorMessage='Please tell us your name!'
                            required
                        />
                        <Input
                            label='Email address'
                            type='email'
                            id='email'
                            value={formValues.email}
                            handleChange={handleChange}
                            errorMessage='It should be a valid email'
                            required
                        />
                        <Input
                            label='Password'
                            type='password'
                            id='password'
                            value={formValues.password}
                            handleChange={handleChange}
                            required
                            pattern='^[A-Za-z0-9]{8,16}$'
                            errorMessage='Password must be at least 8 characters!'
                        />
                        <Input
                            label='Confirm password'
                            type='password'
                            id='passwordConfirm'
                            value={formValues.passwordConfirm}
                            handleChange={handleChange}
                            required
                            errorMessage="Passwords don't match!"
                            pattern={formValues.password}
                        />
                        <Button type='submit' value='Sign Up' />
                    </form>
                </div>
            )}
        </>
    );
};

export default Signup;
