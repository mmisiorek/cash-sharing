import React, { useState, useEffect } from 'react'

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import {CircularProgress, makeStyles} from "@material-ui/core";

function createCode() {
    const min = 100000
    const max = 999999
    return Math.floor(Math.random() * (max - min)) + min;
}

const useClasses = makeStyles({
    progressWrapper: {
        transform: 'rotate(200deg)'
    }
})

const TransferCode = () => {
    const [code, setCode] = useState(createCode())
    const [progress, setProgress] = useState(0)
    const classes = useClasses()

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const newProgress = progress + 10
            if (newProgress < 100) {
                setProgress(newProgress)
            } else {
                setProgress(0)
                setCode(createCode())
            }
        }, 300)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <Box pt={10} display="flex" justifyContent={"center"} flexDirection={"column"}>
            <div className={classes.progressWrapper}>
                <CircularProgress variant={"determinate"}  value={progress} size={100} />
            </div>
            <Typography variant={"h2"}>
                Code: {code}
            </Typography>
        </Box>
    )
}

export default TransferCode