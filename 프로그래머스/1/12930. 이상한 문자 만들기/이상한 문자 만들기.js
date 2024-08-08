function solution(s) {
    var answer = '';
    
    let word = s.split(' ');
    
    for (let i = 0; i<word.length; i++) {
        for(let j = 0; j<word[i].length; j++) {
            if (j % 2 === 0) {
                answer += word[i][j].toUpperCase();
            } else {
                answer += word[i][j].toLowerCase();
            }
        }
        answer += ' ';
    }

    // 마지막에 추가된 공백 제거
    return answer.slice(0, -1);
}