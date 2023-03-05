import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const DefaultLayout = () => {
    return (
        <div className='flex w-full justify-center overflow-hidden p-8'>
            <div className='container w-full bg-grey '>
                <Header />
                <div className='content p-8'>
                    <Outlet/>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
