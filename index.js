function sumDigits(number) {
    let res = number.toString().replace(/-/g, '').split('').map(Number)
        .reduce((a,c) => a + c, 0)

    return res
}