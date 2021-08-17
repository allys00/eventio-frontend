export const StorageKeys = {
    USER_LOGGED: `@user_logged`
}

const Storage = {
    save: async (key: string, value: any) => {
        try {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            await localStorage.setItem(key, value)
        } catch (e) {
            console.error(`Error to save the value ${key}:${value} `)
        }
    },
    get: async (key: string) => {
        try {
            return await localStorage.getItem(key)
        } catch (e) {
            console.error(`error to get the value from ${key}`)
        }
    },
    remove: async (key: string) => {
        try {
            await localStorage.removeItem(key)
        } catch (e) {
            console.log(`Error to remove ${key} from storage`)
        }
    }
}

export default Storage;