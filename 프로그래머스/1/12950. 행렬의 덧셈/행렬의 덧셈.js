function solution(arr1, arr2) {
    // 2차원 배열 -> 2개의 배열을 같은 idx끼리 더해주기
    var answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        // 더한 값 넣어주기
        let sum = [];

        for (let j = 0; j < arr1[i].length; j++) {
            //
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}