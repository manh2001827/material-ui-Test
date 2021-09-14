import React from 'react'
import SliderShow from '../customize/newSlider'

import { Grid, Box, Typography } from '@material-ui/core'
import styleGallery from './styleGallery'
export default function target() {
    const classes = styleGallery()
    return (
        <Box className={classes.gallery}>
            <Box className={classes.galleryBody}>
                <Box className={classes.galleryContent}>
                    <Box className={classes.galleryContentSmallImg}>
                        <Box className={classes.galleryContentImg1}>
                        </Box>
                    </Box>
                    <Box className={classes.galleryContentBigImg}>
                        <Box className={classes.galleryContentImg2}>
                        </Box>
                    </Box>
                    <Box className={classes.galleryContentBigImg}>
                        <Box className={classes.galleryContentImg3}>
                        </Box>
                    </Box>
                    <Box className={classes.galleryContentSmallImg}>
                        <Box className={classes.galleryContentImg4}>
                        </Box>
                    </Box>
                    <Box className={classes.galleryContentSmallImg}>
                        <Box className={classes.galleryContentImg5}>
                        </Box>
                    </Box>
                    <Box className={classes.galleryContentBigImg}>
                        <Box className={classes.galleryContentImg6}>
                        </Box>
                    </Box>
                </Box>
                <Box >
                    {SliderShow}
                </Box>
            </Box>
        </Box>
    )
}