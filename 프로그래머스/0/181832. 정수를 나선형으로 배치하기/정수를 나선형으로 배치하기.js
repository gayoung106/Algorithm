function solution(n) {
    // 배열로 n x n , [0][0] 부터
    const answer = Array.from(Array(n), () => Array(n).fill(0)); 

    // 1부터
    let num = 1;
    // [0,0]
    let row = 0; 
    let col = 0;
    
    // 안쪽으로 돌 때, 바깥 쪽 보다 2씩 줄어듬
    for(let i = n; i > 0; i -= 2) {
        //오
        for(let j = 0; j < i; j++) {
            answer[row][col] = num++;
            col++;
        }
        col--;
        row++;
        
        //아
        for (let j = 0; j < i - 1; j++) {
             answer[row][col] = num++;
             row++;
            }
        row--;
        col--;
        
        //왼
        for (let j = 0; j < i - 1; j++) {
             answer[row][col] = num++;
             col--;
            }
        col++;
        row--;  
        
        //위
        for (let j = 0; j < i - 2; j++) {
             answer[row][col] = num++;
             row--;
            }
        row++;
        col++;  
        
    }
    return answer;
}