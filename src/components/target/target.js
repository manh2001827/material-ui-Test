import React from 'react'
import img0 from './img/0.png'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import { Grid, Box, Typography } from '@material-ui/core'
import styleTarget from './styleTager'
export default function target() {
    const classes = styleTarget()
    return (
        <Box className={classes.target}>
            <Box className={classes.targetImg}>
                <img src={img0} />
            </Box>
            <Box className={classes.targetContent}>
                <Typography variant="h4" className={classes.targetContentHeading}>
                    Mộc tâm trà dành cho ai ?
                </Typography>
                <Box>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Người mắc các chứng về đường huyết đang phải sử dụng thuốc mỗi ngày
                    </Typography>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Người bệnh đái tháo đường: Thành phần dinh dưỡng trong kiều mạch và lúa mạch của Mì Old Henry có tác dụng giúp làm giảm cholesterol và ổn định đường huyết. Tình trạng đường huyết sẽ được cải thiện, có thể cắt giảm thuốc dần sau 3 tháng sử dụng.
                    </Typography>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Người Huyết áp cao: Mì kiều mạch chứa nhiều chất xơ, giúp giảm nồng độ Cholesterol xấu ong máu giúp điều hào huyết áp.                </Typography>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Những người giảm cân: Mì kiều mạch được làm từ bột kiều mạch Tartary chứa Vitamin E, qualene, Epicatechin… là những dưỡng chất quan trọng giúp giảm cân hiệu quả                </Typography>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Người bệnh tim mạch: Mì Kiều mạch chứa nhiều Protein dinh dưỡng cao, chất xơ vitamin và oáng chất giúp phòng ngừa các tai biến mạch máu và các rối loạn tim mạch.                </Typography>
                    <Typography component="p" className={classes.targetContentBody}>
                        - Bệnh về tiêu hóa: Chất xơ trong kiều mạch là thành phần có lợi đối với hệ tiêu hóa, nhất đại tràng.
                    </Typography>
                </Box>
                <Box>
                    <Grid container className={classes.targetCard}>
                        <Grid item md={4} sm={4} >
                            <img src={img1} className={classes.targetCardImg} alt="" />
                        </Grid>
                        <Grid item md={7} sm={7}>
                            <Box className={classes.targetCardBody}>
                                <Typography variant="h5" className={classes.targetCardTitle}>
                                    Cô Hương Thủy (67 tuổi - Thủ Đức)
                                </Typography>
                                <Typography variant="p" className={classes.targetCardDescri}>
                                    "Cô dùng sau 2 tuần, đường huyết giảm từ 322 mol xuống còn 170 mol"
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.targetCard}>
                        
                        <Grid item md={7} sm={7}>
                            <Box className={classes.targetCardBody}>
                                <Typography variant="h5" className={classes.targetCardTitle}>
                                Cô Mai (68 tuổi - Quận 10)
                                </Typography>
                                <Typography variant="p" className={classes.targetCardDescri}>
                                “ Cô đã cắt giảm khá nhiều thuốc sau thời gian sử dụng mì Old Henry. Việc cắt giảm thuốc giúp giảm các tác dụng phụ không mong muốn đến sức khỏe “
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={4} >
                            <img src={img2} className={classes.targetCardImg} alt=""/>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.targetCard}>
                        <Grid item md={4} sm={4} >
                            <img src={img3} className={classes.targetCardImg} alt="" />
                        </Grid>
                        <Grid item md={7} sm={7}>
                            <Box className={classes.targetCardBody}>
                                <Typography variant="h5" className={classes.targetCardTitle}>
                                Cô Hiền (67 tuổi - TP.HCM)
                                </Typography>
                                <Typography variant="p" className={classes.targetCardDescri}>
                                “ Cô đã giảm đường huyết từ 184 mol xuống còn 140 mol sau 2 tuần dùng đó con “
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
