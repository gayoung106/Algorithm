function solution(board, k) {
//     board는 배열 / k는 정수
//     
    var answer = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if( i + j <= k) {
                answer += board[i][j]
            }
        }
    }
    return answer;
}