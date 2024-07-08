function solution(code) {
    let ret = '';
    let mode = 0; 
    
    // 문자가 1인지?
    // idx에 따라서 code에서 ret까지 문자 추가
    // 문자열에서 1 발견? mode가 0이면, 1 / mode가 1이면, 0 전환
    for (let idx = 0; idx < code.length; idx++) {
        if (mode === 0) {
            if (code[idx] === '1') {
                mode = 1;
            } else {
                if (idx % 2 === 0) {
                    ret += code[idx];
                }
            }
        } else if (mode === 1) {
            if (code[idx] === '1') {
                mode = 0;
            } else {
                if (idx % 2 === 1) {
                    ret += code[idx];
                }
            }
        }
    }
    
    // ret 비어 있으면? return "EMPTY"
    if (ret === '') {
        return "EMPTY";
    } else {
        return ret;
    }

}