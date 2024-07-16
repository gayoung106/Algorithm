function solution(n) {
    // 문자 3포함 || 3배수 나오면 1씩 더해주기로 하자
    // 1, 2, (3 + 1) 4, 5, (6 + 1) 7, 8 , (9 + 1) 10 ...
    
    let answer = 1;
    for(let i = 1; i < n; i++){
        answer += 1;
        while(answer % 3 === 0 || String(answer).split("").includes("3")){
            answer += 1;
        }
    }
    
    
    return answer;
}