function solution(s) {
  // 문자열을 한 글자씩 나눔
  let splitString = s.split("");

  // 각 문자의 빈도를 계산
  let charCount = {};
  splitString.forEach(char => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  // 빈도가 1인 문자만 남김
  let uniqueChars = splitString.filter(char => charCount[char] === 1);

  // 알파벳 순으로 정렬
  uniqueChars.sort();

  // 배열을 다시 문자열로 결합
  let joinedString = uniqueChars.join("");
  return joinedString;
}
