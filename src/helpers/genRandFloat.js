const genRandFloat = (number, decimals) => {
    return (Math.random() * number).toFixed(decimals)
}
export default genRandFloat