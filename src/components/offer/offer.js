import React from 'react'
import {Box , Typography , Input ,Button} from '@material-ui/core'
import styleOffer from './styleOffer'
export default function offer() {
    const classes = styleOffer()
    return (
        <Box className={classes.offer}>
            <Box boxShadow={3} className={classes.infomationBox}>
                <Typography variant="h5" className={classes.infomationBoxTitle}>
                NHẬN ƯU ĐÃI
                </Typography>
                <Box>
                <Input placeholder="Ho ten" type="text" className={classes.infomationBoxInput} />
                </Box>
                <Box>
                <Input placeholder="So dien thoai" type="text" className={classes.infomationBoxInput}/>
                </Box>
                <Box >
                <Input placeholder="Email" type="text" className={classes.infomationBoxInput} />
                </Box>
                <Box className={classes.infomationBoxSubmit}>
                    <Button className={classes.infomationBoxSubmitButton} >
                    Đặt ngay
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
