function solution(i, j, k) {
//     1-13 에서 1은 1, 10, 11, 12, 13 -> 11까지 6번 이라고 하는듯
    let str = '';
//     i 부터 j까지 k가 몇 번 등장?
    for(i; i <= j; i++){
        str += i;
    }
    console.log(str.split(k).length)
    return str.split(k).length - 1;
}