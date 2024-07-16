function solution(x) {
    // 주어진 숫자가 % 해당 숫자의 합으로 나눠져야 함 === 0
    let sumNumber = 0;
    let number = x;
    
    //각각 자릿수로 나눠서
    while (number > 0) {
        // 
        sumNumber += number % 10; // 마지막 자릿수 뻬내고 더하기
        number = Math.floor(number / 10); // 마지막 자릿수 제거하고 나머지 앞자리
        
    }
    return x % sumNumber === 0;
}