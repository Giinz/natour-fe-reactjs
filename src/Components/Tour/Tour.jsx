import React from 'react';

const Tour = ({
    img,
    tourTitle,
    difficulty,
    duration,
    summary,
    location,
    startDate,
    stops,
    maxGroupSize,
    price,
    ratingQuantity,
    ratingAverage,
}) => {
    const subHeading = `${difficulty} ${duration}-DAY TOUR`;
    return (
        <div className='flex flex-col overflow-hidden rounded-sm shadow-md'>
            <div className='relative'>
                <div className='tour-picture relative  h-72'>
                    <div className='absolute h-full w-full bg-gradient-to-br from-lightGreen to-heavyGreen opacity-70'></div>
                    <img
                        src={img}
                        alt='tourImage'
                        className='h-full w-full object-cover'
                    />
                </div>
                <h3 className='absolute bottom-2 right-4 z-10 w-9/12 text-right text-lg font-light md:text-3xl'>
                    <span className='bg-gradient-to-br from-lightGreen to-heavyGreen box-decoration-clone px-3 py-2 uppercase text-white lg:px-4 lg:py-3'>
                        {tourTitle}
                    </span>
                </h3>
            </div>
            <div className='grid grid-cols-2 gap-x-3 gap-y-6 px-5 py-4 text-xs h-full'>
                <h4 className='col-span-2 font-bold uppercase'>{subHeading}</h4>
                <p className='col-span-2 text-sm italic'>{summary}</p>
                <div className='flex align-middle'>
                    <i className='fa-solid fa-location-dot mr-4 text-sm text-lightGreen'></i>
                    <span>{location}</span>
                </div>
                <div className='flex '>
                    <i className='fa-regular fa-calendar mr-4 text-sm text-lightGreen'></i>
                    <span>{startDate}</span>
                </div>
                <div className='flex '>
                    <i className='fa-regular fa-flag mr-4 text-sm text-lightGreen'></i>
                    <span>{stops} stops</span>
                </div>
                <div className='flex '>
                    <i className='fa-regular fa-user mr-4 text-sm text-lightGreen'></i>
                    <span>{maxGroupSize} peoples</span>
                </div>
            </div>
            <div className='grid grid-cols-2 bg-grey px-5 py-6'>
                <p className='text-sm'>
                    <span className='font-semibold'>{price}</span> per person
                </p>
                <a
                    href='/'
                    className='row-span-2 text-center cursor-pointer text-xs self-center lg:text-sm rounded-full bg-lightGreen py-2  lg:px-5 font-poppins lg:leading-10 text-white hover:-translate-y-1 '
                >
                    DETAILS
                </a>
                <p className='text-sm'>
                    <span className='font-semibold'>{ratingAverage}</span>{' '}
                    rating ({ratingQuantity})
                </p>
            </div>
        </div>
    );
};

export default Tour;
