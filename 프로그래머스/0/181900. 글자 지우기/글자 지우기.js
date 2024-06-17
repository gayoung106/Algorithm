function solution(my_string, indices) {
    var answer = '';
    
//     문자 순회 -> indices 해당하는 인덱스 확인
    for(let i = 0; i < my_string.length; i++) {
        if(!indices.includes(i)) {
            answer += my_string[i]
        }
    }
    return answer;
}