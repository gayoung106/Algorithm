function solution(id_pw, db) {
    // 아이디, 패스워드가 담긴 2차원 배열
    //[["id", "pw"], ["id", "pw"], ...]
    // 아이디와 비밀번호가 모두 일치: return 'login'
    // 아이디가 일치하는 회원 없으면: return 'fail'
    // 비밀번호가 일치하는 회원 없으면: return 'wrong pw'
    
    // id_pw를 구조분해할당
    const [enteredId, enteredPw] = id_pw;
    
    // db반복
    for (let i = 0; i < db.length; i++) {
        const [dbId, dbPw] = db[i];
        
        if(dbId === enteredId) {
            if(dbPw === enteredPw) {
                return "login";
            } else {
                return "wrong pw"
            }
        }
    }
    return "fail"
}