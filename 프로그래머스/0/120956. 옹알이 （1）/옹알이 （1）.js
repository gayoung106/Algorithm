function solution(babbling) {
    // 조카 발음 할 수 있는 소리
    const validSounds = ["aya", "ye", "woo", "ma"];
    
    // 주어진 단어가 발음 가능한지 확인하는 함수
    function canPronounce(word) {
        let remaining = word;  // 남은 문자열
        let usedSounds = new Set();  // 사용한 소리의 집합

        // 남은 문자열 반복
        while (remaining.length > 0) {
            let found = false;

            // 유효한 소리들을 순회, 문자열 시작이랑 비교
            for (let sound of validSounds) {
                // 현재 문자열이 유효한 소리로 시작하고, 아직 사용하지 않은 경우
                if (remaining.startsWith(sound) && !usedSounds.has(sound)) {
                    usedSounds.add(sound);  // 소리 사용 표시
                    remaining = remaining.slice(sound.length);  // 소리 부분을 문자열에서 제거
                    found = true;
                    break;
                }
            }

            // 유효한 소리를 찾지 못했을 경우 발음 불가능
            if (!found) {
                return false;
            }
        }

        // 모든 부분이 매칭되고 소리가 중복 사용되지 않았을 경우 발음 가능
        return true;
    }

    // 발음 가능한 단어의 개수를 세기 위해 필터링 후 개수 반환
    return babbling.filter(canPronounce).length;
  }
