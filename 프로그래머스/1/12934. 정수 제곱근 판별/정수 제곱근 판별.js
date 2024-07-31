function solution(n) {
    var answer = 0;
    
    // n 제곱근 반환 Math.sqrt(n)
    // 나머지 있으면 정수가 아님
    if (Math.sqrt(n) % 1 !==0) {
        return -1;
    } else {
        return (Math.sqrt(n)+1) * (Math.sqrt(n)+1);
    }
    return answer;
}