export const withAsync = async(callback, ...args) => {
    try {
        const response = await callback(...args);
        return {
            response: response?.data,
            error: null,
        };
    } catch (error) {
        return {
            response: null,
            error: error?.response,
        };
    }
};
