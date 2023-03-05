import { logo } from '../../../assets';

const Footer = () => {
    return (
        <div className='flex justify-between py-8 mt-12'>
            <div >
                <img src={logo} alt='logo' className='h-8' />
            </div>
            <div className='flex flex-col justify-end '>
                <ul className='flex flex-row text-sm pb-2 '>
                    <li className='mr-5 hover:text-lightGreen transition-none'>
                        <a href='/'>About us</a>
                    </li>
                    <li className='mr-5 hover:text-lightGreen transition-none'>
                        <a href='/'>Download apps</a>
                    </li>
                    <li className='mr-5 hover:text-lightGreen transition-none'>
                        <a href='/'>Become a guide</a>
                    </li>
                    <li className='mr-5 hover:text-lightGreen transition-none'>
                        <a href='/'>Careers</a>
                    </li>
                    <li className='hover:text-lightGreen transition-none'>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <p className='text-right text-xs'>© by Lakshman Gope</p>
            </div>
        </div>
    );
};
export default Footer;
