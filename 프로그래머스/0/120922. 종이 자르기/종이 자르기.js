function solution(M, N) {
    // M 2, N 2, 3
    // M 2, N 5, 9
    // M 1, N 1, 0
    // M * N , -1
    var answer = 0;
    if(M === 1 && N === 1) {
        answer = 0;
    } else {
        answer = M * N - 1;
    }
    return answer;
}