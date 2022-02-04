module.exports = {
    sum: (a,b) => {
        return a+b
    },

    year: () => {
        const y = new Date()
        return y.getFullYear()
    }
}