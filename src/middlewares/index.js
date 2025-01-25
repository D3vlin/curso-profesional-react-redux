export const logger = (store) => (next) => (action) => {
    console.log(action)
    return next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'devlin' }, ...actionInfo.action.payload]
    const updatedActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: featured } }
    return next(updatedActionInfo)
}