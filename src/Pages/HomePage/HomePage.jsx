import { useEffect, useState } from 'react';
import * as request from '../../utils/request';
import Tour from '../../Components/Tour/Tour';

const HomePage = () => {
    const [listTour, setListTour] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async (url) => {
            try {
                const respones = await request.get(url);
                setListTour(respones.data.listTours);
                setLoading(false);
                setError(null)
            } catch (err) {
                setError(err.message);
                setLoading(false)
            }
        };
        getData('tours', { crossdomain: true });
    }, []);
    return (
        <div className='container grid grid-cols-3 gap-8'>
            {error && <div>{error}</div>}
            {loading && <div>Loading....</div>}
            {listTour.map((tour) => {
                const startDateStr = new Date(tour.startDates[0]);
                return (
                    <Tour
                        tourTitle={tour.name}
                        img={`./tours/${tour.imageCover}`}
                        key={tour._id}
                        difficulty={tour.difficulty}
                        duration={tour.duration}
                        summary={tour.summary}
                        location={tour.startLocation.description}
                        maxGroupSize={tour.maxGroupSize}
                        stops={tour.locations.length}
                        startDate={startDateStr.toLocaleString('en-us', {
                            month: 'long',
                            year: 'numeric',
                        })}
                        ratingAverage={tour.ratingAverage}
                        ratingQuantity={tour.ratingQuantity}
                        price={`$${tour.price}`}
                    />
                );
            })}
        </div>
    );
};

export default HomePage;
