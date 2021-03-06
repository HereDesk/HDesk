export const getUserFromCookie = (req) => {
    if (!req.headers.cookie) return
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
    if (!jwtCookie) return
    const jwt = jwtCookie.split('=')[1]
    return jwt
}

export const getUserFromLocalStorage = () => {
    const token = window.localStorage.token
    return token ? token : undefined
}
