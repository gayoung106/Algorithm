function solution(n) {
    let answer = [];
    
    for(let divide = 2; n > 1; divide++) {
        while (n % divide === 0) {
            answer.push(divide);
            n /= divide;
        }
    }
    
    let deleteAnswer = [answer[0]];
    for (let i = 1; i < answer.length; i++) {
        if(answer[i] !== answer[i-1]) {
            deleteAnswer.push(answer[i])
        }
    }
    
    return deleteAnswer;
    
}