import React, { useState } from 'react'

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {CircularProgress} from "@material-ui/core";

function createCode() {
    const min = 100000
    const max = 999999
    return Math.floor(Math.random() * (max - min)) + min;
}


const TransferCode = () => {
    const [code, setCode] = useState(createCode())
    const [progress, setProgress] = useState(0)

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const newProgress = progress + 1
            if (newProgress < 100) {
                setProgress(newProgress)
            } else {
                setProgress(-1)
                setCode(createCode())
            }
        }, 300)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <Box pt={10} display="flex" style={{width: '100%'}} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
            <CircularProgress variant={"determinate"}  value={progress} size={300} />
            <Box pt={2}>
                <Typography variant={"h2"}>
                    Code: {code}
                </Typography>
            </Box>
        </Box>
    )
}

export default TransferCode