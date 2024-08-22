function solution(before, after) {
    // before의 순서를 바꿔서 -> after와 일치하면 1 아니면 0
    
    let answer = 0;
    // 그냥 다 펼쳐서 정렬한 다음에 일치하는지 비교해야징
    before = before.split('').sort().join();
    after = after.split('').sort().join();
    
    answer = before === after ? 1 : 0;
    return answer;
}