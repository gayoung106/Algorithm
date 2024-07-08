function solution(lines) {
    // 선분 3개 평행
    // [[1, 3],[2, 4],[3, 5] ]
    // 두개 이상의 선분이 겹치는 길이를 return
    let endpoints = [];
    // endpoints = [[1, start], [3, end] ...]
    
    // start점, end점
    for (let line of lines) {
        let [start, end] = line;
        endpoints.push([start, 'start']);
        endpoints.push([end, 'end']);
    }
    
    // endpoint 겹치는 부분
    // 오름차순
    endpoints.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] === 'start' ? -1 : 1; // a가 b보다 앞에 오도록 -1 아니면 1
        }
    });
    
    let overlapLength = 0; // 겹치는 총 길이
    let active = 0; // 겹치는 구간 구하려고

    for (let i = 0; i < endpoints.length; i++) {
        let [point, type] = endpoints[i];
        // active가 2이상 overlap 업데이트 -> 2개이상 겹치면 업데이트
        if (active >= 2) {
            overlapLength += (point - endpoints[i - 1][0]);
        }
        
        if (type === 'start') {
            active++;
        } else if (type === 'end') {
            active--;
        }
    }
    
    return overlapLength;
}