import React from 'react'


import SliderShow from '../customize/newSlider'
import { Grid, Box, Typography, Input, Button } from '@material-ui/core'
import styleFooter from './styleFooter'
export default function target() {
    console.log(SliderShow)
    const classes = styleFooter()
    return (
        <Grid className={classes.footer}>
            <Grid container className={classes.footerContent}>
                <Grid item md={6} sm={6} className={classes.footerContentImg}>
                    <Box className={classes.footerImg1} >
                    </Box>
                    <Box className={classes.footerContentImgBelow}>
                    <Box className={classes.footerImg2} >
                    </Box>
                    <Box className={classes.footerImg2Clone} >
                    </Box>
                    </Box>
                </Grid>
                <Grid item md={5} sm={5} className={classes.infomationBox}>
                    <Typography variant="h5" className={classes.infomationBoxTitle}>
                    Nhận Ưu Đãi
                    </Typography>
                    <Box>
                        <Input placeholder="Ho ten" type="text" className={classes.infomationBoxInput} />
                    </Box>
                    <Box>
                        <Input placeholder="So dien thoai" type="text" className={classes.infomationBoxInput} />
                    </Box>
                    <Box >
                        <Input placeholder="Email" type="text" className={classes.infomationBoxInput} />
                    </Box>
                    <Box className={classes.infomationBoxSubmit}>
                        <Button className={classes.infomationBoxSubmitButton} >
                            Đặt ngay
                        </Button>
                    </Box>
                </Grid>
               
            </Grid>
           
        </Grid>
    )}
