function solution(numlist, n) {
    var answer = [];
    
    answer = numlist.sort((a, b) => {
        // 절대값 차이
        const absA = Math.abs(a - n);
        const absB = Math.abs(b - n);
        
        // 내림차순 > 큰 숫자가 먼저 오도록, 차이에 따라 오름차순
        if (absA === absB) {
            return b - a;
        } else {
            return absA - absB;
        }
    })
    return answer;
}