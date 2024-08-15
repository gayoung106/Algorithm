function solution(quiz) {
    // 수식을 공백 기준으로 X, 연산자, Y, =, Z로 나누기
    // X, Y, 연산자를 이용해서 계산하고 Z와 비교
    // 같으면 0, 다르면 X반환
    
    var answer = [];
    quiz.forEach(formula => {
        const parts = formula.split(' ');
        const X = parseInt(parts[0]);
        const operator = parts[1];
        const Y = parseInt(parts[2]);
        const Z = parseInt(parts[4]);
        
        let calculatedResult;
        if (operator === '+') {
            calculatedResult = X + Y;
        } else if (operator === '-') {
            calculatedResult = X - Y;
        }
        
        if(calculatedResult === Z) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    })
    return answer;
}