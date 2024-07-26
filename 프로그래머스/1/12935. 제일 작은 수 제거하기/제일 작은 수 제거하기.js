function solution(arr) {
    // 최소값 찾고 -> 최소값 제거하고 -> 배열이 빈 배열인 경우 -1 넣어서 리턴하고
    
    // 배열이 비어있는 경우, 빈 배열을 반환
    if (arr.length === 0) return [-1];

    // 배열에서 가장 작은 값을 찾기
    const minValue = Math.min(...arr);

    // 가장 작은 값을 제외하고 새로운 배열을 생성
    const result = arr.filter(num => num !== minValue);

    // 결과 배열이 비어있으면 -1을 포함한 배열을 반환
    if (result.length === 0) {
        return [-1];
    }

    // 그렇지 않으면 결과 배열을 반환
    return result;
}