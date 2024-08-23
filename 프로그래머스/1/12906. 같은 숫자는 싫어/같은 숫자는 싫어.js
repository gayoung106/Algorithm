function solution(arr)
{
    var answer = [];

    for(let i = 0; i < arr.length; i++) {
        // 연속이 아닌 경우만 넣어서 배열 재정비
        if(arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}