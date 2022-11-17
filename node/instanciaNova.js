// Uma factory retorna um no objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}