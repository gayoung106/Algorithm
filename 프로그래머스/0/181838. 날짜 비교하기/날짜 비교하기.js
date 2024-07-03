function solution(date1, date2) {
    //date1 = [year, month, day]
    //date2 = [year, month, day]
    const compareDate1 = new Date(date1[0], date1[1] - 1, date1[2]);
    const compareDate2 = new Date(date2[0], date2[1] - 1, date2[2]);
    

    if(compareDate1 < compareDate2) {
        return 1;
    } else {
        return 0;
    }

}