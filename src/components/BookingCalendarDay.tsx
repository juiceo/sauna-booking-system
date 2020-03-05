import React from 'react';

import { Typography, Grid, Box, createStyles, WithStyles, Theme, withStyles } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';

interface OwnProps {
    day: number;
}

type Props = OwnProps & WithStyles<typeof styles>;

type Day = {
    label: string;
};

const DAYS: Array<Day> = [
    {
        label: 'Monday'
    },
    {
        label: 'Tuesday'
    },
    {
        label: 'Wednesday'
    },
    {
        label: 'Thursday'
    },
    {
        label: 'Friday'
    },
    {
        label: 'Saturday'
    },
    {
        label: 'Sunday'
    }
];

const BookingCalendarDay = (props: Props) => {
    const { classes } = props;
    return (
        <Box>
            <Box className={classes.header}>
                <Typography className={classes.headerLabel}>{DAYS[props.day].label}</Typography>
            </Box>
            <Box className={classes.slots}>
                {Array.apply('', Array(24)).map((value: any, index: number) => {
                    return <Box key={index} className={classes.slot}></Box>;
                })}
            </Box>
        </Box>
    );
};

const styles = (theme: Theme) =>
    createStyles({
        header: {
            padding: theme.spacing(2),
            background: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        headerLabel: {},
        slots: {},
        slot: {
            marginTop: '1px',
            height: '50px',
            background: theme.palette.background.paper,
            cursor: 'pointer',
            '&:hover': {
                background: darken(theme.palette.background.paper, 0.1)
            }
        }
    });

export default withStyles(styles)(BookingCalendarDay);
