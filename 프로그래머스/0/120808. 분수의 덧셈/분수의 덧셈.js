function solution(numer1, denom1, numer2, denom2) {
    // 기약분수? 계산된 분자와 분모를 최대공약수로 나눠라
    // 분수 더하려면? 공통 분모 필요 = 분모의 곱
    
    // 새 분자
    const numerator = (numer1 * denom2) + (numer2 * denom1);
    // 새 분모
    const denominator = denom2 * denom1;
    
    // 최대공약수 -> 기약분수
    const gcdValue = gcd(numerator, denominator);
    
    // 기약분수 -> 분자 분모 반환
    return [numerator / gcdValue, denominator / gcdValue];
}

// 유클리드 호제법...?
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}