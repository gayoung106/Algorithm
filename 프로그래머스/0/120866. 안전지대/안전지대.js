function solution(board) {
    let safe = 0;
    // 지뢰 주변
    const danger = [
        [-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]
    ];
    const row = board.length;
    const col = board[0].length;
    // 위험 지역 표시 보드
    const dangerBoard = Array.from({ length: row }, () =>
                                  Array(col).fill(false));
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(board[i][j] === 1) {
                // 1이 포함 -> 주변 위험
                dangerBoard[i][j] = true;
                
                for(let [drow, dcol] of danger) {
                    let nrow = i + drow;
                    let ncol = j + dcol;
                    
                    if(nrow >= 0 && nrow < row && ncol >= 0 && ncol < col) {
                        dangerBoard[nrow][ncol] = true;
                    }
                }
            }
        }
    }
    // 위험표시보드가 false로 남아있으면 안전
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(!dangerBoard[i][j]) {
                safe++;
            }
        }
    }

    return safe;
}