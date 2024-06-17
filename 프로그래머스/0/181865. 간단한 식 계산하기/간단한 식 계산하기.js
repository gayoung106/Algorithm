function solution(binomial) {
//     binomial 이항식(a op b) -> slpit으로 나눔
// a, b는 음이 아닌 정수
//     op는 +,-,* 중 하나
    const arrBinomial = binomial.split(' ');

    if(arrBinomial[1] === "-") return Number(arrBinomial[0]) - Number(arrBinomial[2]);
    if(arrBinomial[1] === "+") return Number(arrBinomial[0]) + Number(arrBinomial[2]);
    if(arrBinomial[1] === "*") return Number(arrBinomial[0]) * Number(arrBinomial[2]);
}