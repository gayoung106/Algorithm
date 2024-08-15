function solution(number) {
    // number에서 3명 선택 -> 숫자 합 0이 되는 경우의 수
    // 1. 배열에서 3명을 선택하는 경우의 수 구하기 number C 3
    // 2. 합이 0인가?
    // 3. 0이면 증가
    var answer = 0;
    // const n = number.length;
    
    // for(let i = 0; i < n - 2; i++) {
    //     for(let j = i + 1; j < n - 1; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             if (number[i] + number[j] + number[k] === 0) {
    //                 answer++;
    //             }
    //         }
    //     }
    // }
    function combination(start, selected) {
        if(selected.length === 3) {
            // 합이 0인지 확인
            const sum = selected.reduce((acc, val) => acc + val, 0);
            if(sum === 0) {
                answer++;
            }
            return;
        }
        for (let i = start; i < number.length; i++) {
            // 다음요소 선택 -> 재귀
            combination(i + 1, [...selected, number[i]]);
        }
    }
    
    combination(0, []);
    
    return answer;
}