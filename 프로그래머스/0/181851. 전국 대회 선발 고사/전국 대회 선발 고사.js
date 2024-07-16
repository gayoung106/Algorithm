function solution(rank, attendance) {
    
    let students = [];
    // 순위 배열에 있는 학생 돌려
    for (let i = 0; i < rank.length; i++) {
        // 대회 참석 가능한 애들만 뽑아내서 담아
        if (attendance[i]) {
            students.push(i);
        }
    }
    students.sort((a, b) => rank[a] - rank[b]);
    // 3명 나와
    const [a, b, c] = students.slice(0, 3); 
    
    const answer = 10000 * a + 100 * b + c;
    
    return answer;
}