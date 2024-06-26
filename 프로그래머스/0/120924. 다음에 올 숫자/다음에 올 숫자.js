function solution(common) {
    var answer = 0;
    // 수열의 길이
    let n = common.length;
    // 등차수열? 같으면 등차 / 등비수열?
    if(common[1] - common[0] === common[2] - common[1]) {
        let diff = common[1] - common[0]
        answer = common[n-1] + diff;
    } else if (common[1] / common[0] === common[2] / common[1]) {
        let ratio = common[1] / common[0];
        answer = common[n - 1] * ratio;
    }
    


    return answer;
}