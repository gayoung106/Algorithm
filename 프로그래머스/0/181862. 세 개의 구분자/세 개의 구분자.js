function solution(myStr) {
    // 'a', 'b', 'c' 중 하나 이상이 연속 = [abc]+ 
    // 포함된 부분을 기준으로 구분
    const answer = myStr.split(/[abc]+/).filter((str) => str !=='');
  return answer.length === 0 ? ['EMPTY'] : answer;
}