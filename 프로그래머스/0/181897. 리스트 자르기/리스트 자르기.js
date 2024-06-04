function solution(n, slicer, num_list) {
// slicer [a, b, c]
    let [a, b, c] = slicer;
    
    if(n === 1) {
//         0부터 b인덱스 까지
        return num_list.slice(0, b + 1);
    } else if (n === 2) {
//         a 인덱스 부터
        return num_list.slice(a);
    } else if (n === 3) {
//         a번 인덱스 부터 b번까지(b를 포함하려면 +1 해야함)
        return num_list.slice(a, b + 1);
    } else if (n === 4) {
        const sliced = [];
//         a ~ b인덱스 인데, c마다
        for (let i = a; i <= b; i+= c) {
            sliced.push(num_list[i])
        }
        return sliced;
    }

}