function solution(num) {
    // 콜라츠??? num이 1이 될 때까지 규칙에 따라 변환을 반복
    // 1이 되기까지 몇 번이 필요?
    
    // 만약에 애초에 1이면? 반복 필요 없음 0
    // 숫자가 짝수인 경우 2로 나눔, 홀수면 3을 곱하고 1을 더하기
    // 500넘어가면 -1 반환
    
    var answer = 0;
    
    if(num === 1) {
        return 0;
    }
    
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num/2;
        } else {
            num = (num * 3) + 1;
        }
        
        answer++;
        
        if(answer >= 500) {
            return -1;
        }
    }
    
    return answer;
}