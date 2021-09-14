import React from 'react'

import { Grid, Box, Typography } from '@material-ui/core'
import styleReview from './styleReview'
export default function Review() {
    const classes = styleReview()
    return (
        <Box className={classes.review}>
            <Grid container className={classes.reviewContent}>
                <Grid item md={3} sm={3} xs={12} className={classes.reviewContentVideo}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B41_AOCC9To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
                <Grid item md={5} sm={5} xs={12} className={classes.reviewContentVideo}>
                <iframe width="100%" height="100%" className={classes.bigVideo} src="https://www.youtube.com/embed/B41_AOCC9To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
                <Grid item md={3} sm={3} xs={12}  className={classes.reviewContentVideo}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B41_AOCC9To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
        </Box>
    )}