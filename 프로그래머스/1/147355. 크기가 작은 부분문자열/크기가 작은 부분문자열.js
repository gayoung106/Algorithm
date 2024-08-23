function solution(t, p) {
    let answer = 0;
    
    // t길이 만큼 반복
    for (let i = 0; i < t.length; i++) {
        // t를 p만큼 못자르면 answer 리턴
        if(t.length - i < p.length) return answer;
        // 
        if(t.substring(i, p.length + i) <= p) answer++;
        
    }
    return answer;
}