function solution(array) {
    // 최빈값: 가장 자주 나오는 값
    // array = 정수배열 -> 최빈값 리턴 / 여러개면 -1 리턴
    
    // 빈도 = Map 객체 
    const frequency = new Map();
    
    // array 돌면서 확인
    for(const num of array) {
        // 요소가 존재하면 1 더하고, 없으면 1로 설정
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }
    
    // 가장 높은 빈도수
    let max = 0;
    // 최빈값 저장
    let mode = -1;
    // 최빈값 갯수
    let modeCount = 0;
    
    for(const [num, freq] of frequency) {
        // 현재가 max보다 크면?
        if(freq > max) {
            max = freq;
            mode = num;
            modeCount = 1;
        } else if (freq === max) {
            modeCount++;
        }
    }
    
    // 최빈값이 여러개야? 그럼 -1
    return modeCount > 1 ? -1 : mode;
}