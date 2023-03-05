import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../../../assets';
import { useAuth } from '../../../utils/auth';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const auth = useAuth()

    return (
        <header className='navbar flex w-full items-center justify-between bg-primary p-5'>
            <Link to='/'>
                <img
                    src='https://www.natours.dev/img/logo-white.png'
                    alt='logo'
                    className='h-[32px] w-[50px]'
                />
            </Link>
            <ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
                <li className='mr-5 cursor-pointer py-2 px-5 font-poppins text-[16px] font-normal text-white hover:-translate-y-1'>
                    <Link to='/login'>LOG IN</Link>
                </li>
                <li className='cursor-pointer rounded-full border border-white py-2 px-5 font-poppins text-[16px] font-normal text-white hover:-translate-y-1 hover:bg-white hover:text-primary'>
                    <Link to='/signup'>SIGN UP</Link>
                </li>
            </ul>
            <div className='flex flex-1 cursor-pointer items-center justify-end sm:hidden z-index-20'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='h-[28px] w-[28px] object-contain'
                    onClick={() => setToggle((prev) => setToggle(!prev))}
                />
                <div
                    className={`${
                        toggle ? 'flex animate-fadeIn' : 'hidden'
                    } rig-0 sidebar absolute top-20 -mx-5 -my-1 min-w-[140px] rounded-b-xl bg-primary p-6`}
                >
                    <ul className='flex flex-1 list-none flex-col items-center justify-end'>
                        <li className='mb-4 cursor-pointer py-2 px-5 font-poppins text-[16px] font-normal text-white hover:-translate-y-1'>
                            <Link to='/login'>LOG IN</Link>
                        </li>
                        <li className='cursor-pointer rounded-full border border-white py-2 px-5 font-poppins text-[16px] font-normal text-white hover:-translate-y-1 hover:bg-white hover:text-primary'>
                            <Link to='/signup'>SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
