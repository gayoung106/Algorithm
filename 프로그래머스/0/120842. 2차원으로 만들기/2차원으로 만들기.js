function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    // num_list의 i번째 인덱스 ~ n개의 요소를 잘라서 배열
    let chunk = num_list.slice(i, i + n);
    // 결과 배열에 추가
    result.push(chunk);
  }
  return result;

}