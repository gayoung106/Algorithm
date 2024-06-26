function solution(spell, dic) {
    //spell에 있는 문자가 dic 단어를 포함하면 1, 없으면 2
    const match = Array.from(spell)
    return dic.filter(t => {
        return match.every(k => t.includes(k))
    }).length > 0 ? 1 : 2;
}