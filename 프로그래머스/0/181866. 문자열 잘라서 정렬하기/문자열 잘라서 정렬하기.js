function solution(myString) {
    const string = myString.split("x").filter((elem) => elem !== '').sort()
    return string;
}