function solution(clothes) {
    const types = {};
    for(const [style, type] of clothes){
        if(type in types) types[type] +=1;
        else types[type] = 1;
    }
    let sum = 1;
    for(const type in types) sum *= (types[type] + 1)
    return sum -1;
}