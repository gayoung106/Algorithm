function solution(numLog) {
    var answer = '';
    for(i=0 ; i < numLog.length; i++) {
        let subLog = numLog[i+1]-numLog[i]
        if(subLog === 1) {
            answer += "w"
        } else if (subLog === -1) {
            answer += "s"
        } else if (subLog === 10) {
            answer += "d"
        } else if (subLog === -10) {
            answer += "a"
        }
    }
    return answer;
}