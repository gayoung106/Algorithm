function solution(n) {
//     x가 짝수일 때 / 2
//     x가 홀수일 떼 3*x+1 
//     언젠가 x = 1
    
    var answer = [];
    while (n !== 1) {
        answer.push(n);
        if(n % 2 === 0) {
           n = n / 2
        } else {
            n = 3 * n + 1
        }   
    }
    answer.push(1);
    return answer;
    
}