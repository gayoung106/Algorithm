function solution(num, total) {
    let answer = [];
    
    // 평균
    let average = total / num;
    // 연속된 정수의 1번 값 올림
    let start = Math.ceil(average - Math.floor(num / 2));
    
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
        
    }

    return answer;
}