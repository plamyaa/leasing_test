export function formatNumber (number) {
    return parseInt(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}