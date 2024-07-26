function solution(A, B) {
    // 문자열 A를 오른쪽으로 이동, 문자열 B로 만들 수 있는지 확인
    if (A.length !== B.length) {
        // 길이가 다르면 문자열을 만들 수 없음 -1 반환
        return -1;
    }
    
    // A 회전시켜서 B랑 비교
    let rotate = A;
    for (let i = 0; i < A.length; i++) {
        //회전된 문자A가 B와 일치하면 회전횟수 나와랏
        if(rotate === B) {
            return i;
        }
        // 오른쪽으로 이동
        rotate = rotate[rotate.length - 1] + rotate.slice(0, rotate.length -1);
    }
    // 문자끝까지 회전했는데 일치하는게 없다?
    return -1;
}