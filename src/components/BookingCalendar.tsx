import React from 'react';
import { Typography, Grid, Box, createStyles, WithStyles, Theme, withStyles } from '@material-ui/core';
import BookingCalendarDay from './BookingCalendarDay';

interface OwnProps {}

type Props = OwnProps & WithStyles<typeof styles>;

const BookingCalendar = (props: Props) => {
    return (
        <Box display="flex" flexDirection="row">
            {Array.apply('', Array(7)).map((value: any, index: number) => (
                <Box key={index} flex="1" m={1}>
                    <BookingCalendarDay day={index} />
                </Box>
            ))}
        </Box>
    );
};

const styles = (theme: Theme) => createStyles({});

export default withStyles(styles)(BookingCalendar);
