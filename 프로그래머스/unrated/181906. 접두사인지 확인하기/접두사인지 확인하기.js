function solution(my_string, is_prefix) {
    var answer = [];
    for (let i = 0; i < my_string.length; i++){
        answer.push(my_string.slice(0,i+1))
    }
    return answer.includes(is_prefix)? 1 : 0;
}