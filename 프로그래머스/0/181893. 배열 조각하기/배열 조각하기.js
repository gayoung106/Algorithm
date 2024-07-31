function solution(arr, query) {
    for(let i = 0; i < query.length; i++) {
        if(i % 2) {
            // 홀수 인덱스 이전 제거
            arr.splice(0, query[i])
        } else {
            // 짝수 인덱스 이후 제거
            arr.splice(query[i] + 1)
        }
        
    }
    return arr

}