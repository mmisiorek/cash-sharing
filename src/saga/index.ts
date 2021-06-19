const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* mainSaga() {
    yield delay(1000)

    console.log("Something else")
}