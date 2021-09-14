import React from 'react'
import {Box ,Typography , Grid} from "@material-ui/core"
import styleSection from './styleSection'
import img0 from './img/0.png'
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'

export default function section() {
    const classes = styleSection()
    return (
        <Box className={classes.section}>
            <Box className={classes.sectionImg}>
                <img src={img0} alt=""/>
            </Box>
            <Box className={classes.sectionContent}>
                <Box >
                <Typography  component="h4" className={classes.ContentHeading}>Sự kết hợp hoàn hảo của <span className={classes.ContentHeadingSpan} > 5 vị thảo mộc thiên nhiên </span></Typography>
                </Box>
                <Box className={classes.Content}>
                    <Grid container className={classes.ContentBody}>
                        <Grid item md={5} sm={5}>
                        <img src={img1} className={classes.ContentBodyImg} alt=""/>
                        </Grid>
                        <Grid item md={7} sm={7} className={classes.ContentBodyTitle}>
                            <Typography variant="h4" className={classes.ContentBodyTitleHeading}>
                            Mướp đắng rừng
                            </Typography>
                            <Box className={classes.ContentBodyTitleImg}>
                                <Box className={classes.ContentBodyTitleImg1}>
                                </Box>
                            </Box>
                            <Typography component="p" className={classes.ContentBodyTitleDescri}>
                            Mướp đắng rừng là vị thuốc thảo dược có tính hàn, vị đắng, không độc, giúp cơ thể thanh nhiệt, giải độc, ổn định lượng đường huyết trong máu, rất tốt cho cơ thể và người bị tiểu đường.
                            </Typography>
                        </Grid>

                        <Grid item md={7} sm={7} className={classes.ContentBodyTitle}>
                            <Typography variant="h4" className={classes.ContentBodyTitleHeading}>
                            Dây thìa canh
                            </Typography>
                            <Box className={classes.ContentBodyTitleImg2}>
                            </Box>
                            <Typography component="p" className={classes.ContentBodyTitleDescri}>
                            Dây thìa canh giúp hãm vị ngọt và điều chỉnh lượng đường trong máu bằng cách ngăn sự hấp thụ đường ở ruột và kích thích tuyến tụy tiết ra insulin. Hỗ trợ người bệnh tiểu đường kiểm soát lượng đường huyết.
                            </Typography>
                        </Grid>
                        <Grid item md={5} sm={5}>
                        <img src={img2} className={classes.ContentBodyImg} alt=""/>
                        </Grid>

                        <Grid item md={5} sm={5}>
                        <img src={img3} className={classes.ContentBodyImg} alt=""/>
                        </Grid>
                        <Grid item md={7} sm={7} className={classes.ContentBodyTitle}>
                            <Typography variant="h4" className={classes.ContentBodyTitleHeading}>
                            Nụ hoa tam thất
                            </Typography>
                            <Box className={classes.ContentBodyTitleImg3}>
                            </Box>
                            <Typography component="p" className={classes.ContentBodyTitleDescri}>
                            Nụ hoa tam thất từ lâu đã được sử dụng như một bài thuốc hỗ trợ trị mất ngủ, huyết áp cao, mỡ máu… Nụ hoa tam thất có vị ngọt tính mát, chứa hoạt chất nhân sâm rb1 rb2 nên có tính chất tương đồng với nhân sâm.
                            </Typography>
                        </Grid>

                        <Grid item md={7} sm={7} className={classes.ContentBodyTitle}>
                            <Typography variant="h4" className={classes.ContentBodyTitleHeading}>
                            Giảo cổ lam
                            </Typography>
                            <Box className={classes.ContentBodyTitleImg4}>
                            </Box>
                            <Typography component="p" className={classes.ContentBodyTitleDescri}>
                            Giảo cổ lam kích thích cơ thể sản xuất ra hoạt chất oxit nitric giúp giãn mạch, giảm nguy cơ hình thành xơ vữa mạch máu. Từ đó giúp hạ được chỉ số huyết áp và duy trì huyết áp ở mức ổn định
                            </Typography>
                        </Grid>
                        <Grid item md={5} sm={5}>
                        <img src={img4} className={classes.ContentBodyImg} alt=""/>
                        </Grid>

                        <Grid item md={5} sm={5}>
                        <img src={img5} className={classes.ContentBodyImg} alt=""/>
                        </Grid>
                        <Grid item md={7} sm={7} className={classes.ContentBodyTitle}>
                            <Typography variant="h4" className={classes.ContentBodyTitleHeading}>
                            Hoài sơn
                            </Typography>
                            <Box className={classes.ContentBodyTitleImg5}>
                            </Box>
                            <Typography component="p" className={classes.ContentBodyTitleDescri}>
                            Dược liệu này có tác dụng bổ tỳ, dưỡng vị, sinh tân, ích phế, bổ thận, chỉ khát. Trong y học cổ truyền, hoài sơn được coilà một vị thuốc bổ, chữa tỳ vị hư nhược, ăn uống kém tiêu, viêm ruột kinh niên, tiêu chảy lâu ngày, phế hư gây ho hen, bệnh đái tháo đường
                            </Typography>
                        </Grid>

                        
                    </Grid>
                    
                </Box>
            </Box>
        </Box>
    )
}
