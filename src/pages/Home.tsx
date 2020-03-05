import React from 'react';

import { Typography } from '@material-ui/core';
import BookingCalendar from '../components/BookingCalendar';

const Home = () => {
    return (
        <div>
            <Typography variant="h4">Booking calendar</Typography>
            <BookingCalendar />
        </div>
    );
};

export default Home;
