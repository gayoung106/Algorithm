function solution(polynomial) {
    // 입력 다항식을 '+' 기준으로 분리하여 배열로 변환
    let arr = polynomial.split(' + ');
    
    // x 항의 계수와 상수항을 저장할 변수 초기화
    let variable = 0;
    let constant = 0;

    // 배열의 각 항목을 분석
    arr.map((i) => {
        // 항목이 'x'를 포함하면 x 항으로 처리
        if (i.includes("x")) {
            // 'x'를 기준으로 분리
            const tmp = i.split("x");
            // 분리된 첫 부분이 비어있지 않으면 계수를 정수로 변환하여 xTerm에 추가
            // 비어있으면 계수가 1로 간주
            tmp[0] ? variable += parseInt(tmp[0]) : variable++;
        } else if (i !== "+") {
            // 항목이 '+'가 아니면 상수항으로 처리
            constant += parseInt(i);
        }
    });

    // x 항과 상수항의 값을 기반으로 결과 문자열을 생성
    if (variable !== 0 && constant !== 0) {
        // x 항과 상수항이 모두 있을 경우
        if (variable === 1) {
            // x 항의 계수가 1일 경우
            return `x + ${constant}`;
        }
        // x 항의 계수가 1이 아닐 경우
        return `${variable}x + ${constant}`;
    }
    if (variable === 0 && constant !== 0) {
        // x 항이 없고 상수항만 있을 경우
        return `${constant}`;
    }
    if (variable !== 0 && constant === 0) {
        // x 항만 있고 상수항이 없을 경우
        if (variable === 1) {
            // x 항의 계수가 1일 경우
            return "x";
        }
        // x 항의 계수가 1이 아닐 경우
        return `${variable}x`;
    }
    if (variable === 0 && constant === 0) {
        // x 항과 상수항 모두 없을 경우
        return "0";
    }
}