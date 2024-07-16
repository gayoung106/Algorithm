function solution(score) {
    //score 배열 안에 1개는 영어 점수, 1개는 수학 점수 각각 들어있음
    let averageScore = score.map((scores, idx) => ({
        idx: idx,
        average: (scores[0] + scores[1]) / 2
    }));

    // 내림차순
    averageScore.sort((a, b) => b.average - a.average);
    
    let ranks = new Array(score.length);
    
    let currentRank = 1;

    for (let i = 0; i < averageScore.length; i++) {
        // 평균 같음? 같은 순위
        if (i > 0 && averageScore[i].average == averageScore[i - 1].average) {
            ranks[averageScore[i].idx] = ranks[averageScore[i - 1].idx];
        } else {
            ranks[averageScore[i].idx] = currentRank;
        }
        currentRank++;
    }
    
    return ranks;


}