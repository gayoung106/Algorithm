function solution(num_list) {
//     짝수면 1/2, 홀수면 -1 and 1/2
    let answer = 0;
    for (let num of num_list) {
        while(num !== 1) {
//             1이 될 때까지 반복
            if(num % 2 === 0){
                //짝수
                num = num /2;
            } else {
                num = (num - 1) /2;
            }
            answer++;
        }
    }
    
    return answer;
}