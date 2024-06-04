function solution(arr) {
//     조건 0 <= i
    for( let i = 0 ; i < arr.length; i++) {
        for (let j = 0 ; j < arr.length; j++) {
//             arr[i][j]와 arr[j][i]가 다르면 0으로 리턴
            if(arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    return 1;

}