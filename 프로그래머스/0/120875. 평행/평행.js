function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    //평행하면 1 아니면 0 
    // 평행인지 아닌지 -> 기울기
    // 1 - 2 연결 vs 3 - 4 연결
    if((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
    // 1 - 3 vs 2 - 4
    if((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
    
    // 1 - 4 vs 2 - 3
    if((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;
    
    return 0;
}