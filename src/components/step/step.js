import React from 'react'
import { Grid, Box, Typography} from '@material-ui/core'
import styleStep from './styleStep'
import img1 from './img/1.png'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'

export default function step() {
    const classes = styleStep()
    return (
        <Grid className={classes.step}>
            <Box className={classes.stepContainerHeader}>
                <img src={img1} width={"100%"} alt="" />
            </Box>
            <Grid container className={classes.stepContainer}>
                <Grid md="3.5" className={classes.stepContainerItem}>
                    <img src={img2} className={classes.stepContainerItemImg} alt=""/>
                    <Box>
                        <Typography variant="h4" className={classes.stepContainerItemTitle}>
                            1. Tráng ấm
                        </Typography>
                        <Typography component="p" className={classes.stepContainerItemDescri}>
                            Trước khi pha trà, bạn hãy tráng sạch ấm và chén bằng nước nóng
                        </Typography>
                    </Box>
                </Grid>
                <Grid md="3.5" className={classes.stepContainerItem}>
                    <img src={img3} className={classes.stepContainerItemImg} alt="" />
                    <Box >
                        <Typography variant="h4" className={classes.stepContainerItemTitle}>
                            2. Lấy trà
                        </Typography>
                        <Typography component="p" className={classes.stepContainerItemDescri}>
                            Sau khi đã tráng ấm, lấy một lượng trà vừa đủ cho vào ấm
                        </Typography>
                    </Box>
                </Grid>

                <Grid md="3.5" className={classes.stepContainerItem}>
                    <img src={img4} className={classes.stepContainerItemImg} alt=""/>
                    <Box>
                        <Typography variant="h4" className={classes.stepContainerItemTitle}>
                            3. Tráng trà
                        </Typography>
                        <Typography component="p" className={classes.stepContainerItemDescri}>
                            Dùng khoảng 50ml nước nóng 80* sau đó đổ ra chuyên
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box className={classes.stepVideo}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/B41_AOCC9To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
        </Grid>
    )
}
