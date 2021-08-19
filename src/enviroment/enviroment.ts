console.log(process.env)
export const ENV = {
    IS_PRODUCTION: false,
    API_KEY: process.env.REACT_APP_API_KEY,
    API_BASE: process.env.REACT_APP_API_BASE
}