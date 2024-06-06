function solution(number) {
//     정수%9 = 정수의 나머지 
//     각자리의 수의 합을 % 9  = 각자리 수의 나머지
//     ex: number=77  77%9 = 5  14%9 = 5
    let sum = 0;
    const sumNum = Array.from(number).map(Number);
    
    sumNum.forEach(num => {
        sum += num;
    });
    
    console.log(sum);
    
    answer = sum % 9;
    
    return answer;
}