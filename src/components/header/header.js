import React from 'react'
import {Box } from '@material-ui/core'
import styleHeader from './styleHeader'
export default function header() {

    const classes = styleHeader()
    return (
        <Box className={classes.header}>
            <Box className={classes.headerContainer}>
                <Box className={classes.headerTitle}>Mộc Tâm Trà</Box>
                <Box className={classes.headerDescription}>Trà thảo mộc hỗ trợ ổn định đường huyết</Box>
            </Box>
        </Box>
    )
}
