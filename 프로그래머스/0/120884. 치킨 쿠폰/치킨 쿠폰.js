function solution(chicken) {
    // 1마리당 -> 쿠폰1장
    // 10마리 -> 한마리 서비스
    // 서비스 치킨 -> 쿠폰 1장
    // 최대 서비스 치킨 수
    let total = 0; 
    let coupon = chicken; // 처음받은 치킨 수
    
    while (coupon >= 10) {
        // 받을 수 있는 무료 치킨 수
        let free = Math.floor(coupon / 10);
        // 추가로 받은 치킨 더해줌
        total += free;
        coupon = (coupon % 10) + free; // 서비스 치킨 쿠폰 추가
    }
    
    return total;
}