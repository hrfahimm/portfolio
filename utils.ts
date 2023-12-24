 export const validateString = (value: unknown, maxLenght: number) => {
    
    if (!value || typeof value !== 'string' || value.length>maxLenght) {
        return  false
    }
    return true
}