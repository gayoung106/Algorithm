function solution(myString, pat) {
    let arrString = myString.split("");

    for(let i = myString.length-1; i >= 0; i--) {
        if(arrString[arrString.length-1] !== pat[pat.length-1]) {
            
            arrString.pop();
            
        }

    }
    return arrString.join('');
}