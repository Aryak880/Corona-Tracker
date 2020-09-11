import React from 'react';
import Countup from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import style from './cards.module.css';
import cx from 'classnames';


const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate} } ) => {

    if(!confirmed)
    {
        return 'Loading...'
    }
    
    return(
        <div className={style.container}>
            <Grid container spacing={3} justify="center">

                {/* this is for the infected */}
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* This is for recoverd */}
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary"gutterBottom>Recoverd</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                {/* This is for deaths */}
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary"gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cause by COVID-19</Typography>
                    </CardContent>
                </Grid> 
            </Grid>
        </div>
    )
}


export default Cards;