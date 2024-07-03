function solution(arr, flag) {
    // flag가 참 = arr[i]값을 answer배열에 2번 추가
    // flag가 거짓 = arr[i]만큼 answer배열에서 제거
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        // 참이면
        if(flag[i]) {
            // 2번추가
            for(let j = 0; j < arr[i] * 2; j++) {
                answer.push(arr[i])
            }
        } else {
            answer.splice(-arr[i], arr[i])
        }
    }
    return answer;
}