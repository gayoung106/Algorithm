function solution(l, r) {
    let answer = [];
    let initial = ['5'];
    
    while (initial.length > 0) {
        // 1번요소
        let current = initial.shift();
        // current 문자를 10진수로 바꾼다는 의미래
        let num = parseInt(current, 10);
        
        // 범위내에 있으면 추가
        if (num >= l && num <= r) {
            answer.push(num);
        }
        
        // 0 , 5 추가해서 확장하고 r보다 크지 않을 경우에만 추가
        if (num * 10 + 5 <= r) initial.push(current + '5');
        if (num * 10 + 0 <= r) initial.push(current + '0');
    }
    // 오름차순
    answer.sort((a, b) => a - b);
    
    return answer.length ? answer : [-1];
}