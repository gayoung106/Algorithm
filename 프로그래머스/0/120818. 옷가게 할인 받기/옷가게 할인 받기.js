function solution(price) {
    let discount = 0
    
    if(500000 <= price) {
        discount = Math.max(discount, price * 0.2)
    }
    if(300000 <= price) {
        discount = Math.max(discount, price * 0.1)
    }
    if(100000 <= price) {
        discount = Math.max(discount, price * 0.05)
    }
    
    return parseInt(price - discount);
    
}