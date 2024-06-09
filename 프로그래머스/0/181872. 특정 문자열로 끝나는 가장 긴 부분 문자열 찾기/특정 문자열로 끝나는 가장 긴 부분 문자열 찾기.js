function solution(myString, pat) {
    var answer = '';
    for(let i = 0; i < myString.length; i++) {
        if(myString[i].includes(pat)) {
            
            answer = myString[i]
            
        }
        console.log(myString[i]);
    }
    return answer;
}