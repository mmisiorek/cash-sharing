import React, { useState } from 'react'

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {CircularProgress} from "@material-ui/core";


const TransferCode = () => {
    const [progress, setProgress] = useState(50)

    setInterval(() => {
        if (progress <= 100) {
            setProgress(progress + 10)
        } else {
            setProgress(0)
        }
    }, 5000)

    return (
        <Box pt={10} display="flex" justifyContent={"center"}>
            <div>
                <CircularProgress variant={"determinate"} value={progress} />
            </div>
            <Typography variant={"h2"}>
                Code: 49483
            </Typography>
        </Box>
    )
}

export default TransferCode