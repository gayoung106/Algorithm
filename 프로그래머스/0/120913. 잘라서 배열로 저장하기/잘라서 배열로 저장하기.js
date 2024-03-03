function solution(my_str, n) {
    const answer = my_str.split("")
    const newAnswer = [];
    
    for (let i = 0; i < answer.length; i += n) {
        const slice = answer.slice(i, i + n).join("")
        newAnswer.push(slice);
    }
    
    return newAnswer;
}