function solution(intStrs, k, s, l) {
//     
    var answer = [];
    for (let i = 0; i < intStrs.length; i++) {
        let intSlice = Number(intStrs[i].slice(s, s + l));
        // console.log(intSlice)
        if(intSlice > k) {
            answer.push(intSlice);
        }
        
    }
    return answer;
}