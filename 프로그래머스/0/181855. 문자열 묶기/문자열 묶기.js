function solution(strArr) {
    
    let strElem = {};
    
    // strElem에 문자열 길이로 key / value 구분해서 담기
    strArr.forEach((str) => {
        const strLen = str.length;
        strElem[strLen] = strElem[strLen] ?? [];
        strElem[strLen].push(str);
    })
    console.log(strElem);
    
    const strValue = Object.values(strElem).map(elem => elem.length);
    return Math.max(...strValue)
    
}