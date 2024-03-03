function solution(n) {
    const answer = []

    for(let a = 0; a < n + 1; a++) {
        if(n % a === 0) {
            answer.push(a)
        }
    }
       return answer.length;
}
