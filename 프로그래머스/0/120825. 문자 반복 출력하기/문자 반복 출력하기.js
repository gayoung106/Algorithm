function solution(my_string, n) {
    const stringSplit = my_string.split("");
    const mapString = stringSplit.map((elem) => 
        elem.repeat(n)
    ).join('')
    return mapString;
}