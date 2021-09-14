import React from 'react'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'

import { Grid, Box, Typography } from '@material-ui/core'
import stylePolicy from './stylePolicy'
export default function target() {
    const classes = stylePolicy()
    return (
        <Box className={classes.policy}>
            <Box className={classes.policyImg}>
            <img src={img3} alt=""/>
            </Box>
            <Box className={classes.policyContent}>

                <Typography variant="h4" className={classes.policyContentHeading}>
                    Cam kết và chính sách bán hàng
                </Typography>
                <Box>
                    <Box className={classes.policyContentCard}>
                        <img src={img4} alt=""/>
                        <Typography component="p" className={classes.policyContentCardDescri}>
                            Miễn phí vận chuyển toàn quốc
                        </Typography>
                    </Box>

                    <Box className={classes.policyContentCard}>
                        <img src={img5} width={55} alt="" />
                        <Typography component="p" className={classes.policyContentCardDescri}>
                            Được kiểm tra trước khi thanh toán
                        </Typography>
                    </Box>

                    <Box className={classes.policyContentCard}>
                        <img src={img6} alt="" />
                        <Typography component="p" className={classes.policyContentCardDescri}>
                            Tặng cẩm nang dinh dưỡng cho người tiều đường
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.policyInfo}>
                    <Box className={classes.policyInfoImg}>
                    <Box style={{textAlign:"center"}}>
                        <img src={img1} width={"100%"} alt="" />
                    </Box>
                    <Box style={{textAlign:"center"}}>
                        <img src={img2} alt="" />
                    </Box>
                    </Box>


                    <Box className={classes.policyInfoDescri}>
                        <p>
                            - Người mắc các chứng về đường huyết đang phải sử dụng thuốc mỗi ngày
                        </p>

                        <p>
                            - Người bệnh đái tháo đường: Thành phần dinh dưỡng trong kiều mạch và lúa mạch của Mì Old Henry có tác dụng giúp làm giảm cholesterol và ổn định đường huyết. Tình trạng đường huyết sẽ được cải thiện, có thể cắt giảm thuốc dần sau 3 tháng sử dụng.
                        </p>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}