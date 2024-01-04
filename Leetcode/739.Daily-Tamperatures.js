/*
📝 문제 & 설명 : 일일온도

정수 배열 temperatures가 일일 기온을 나타내는 경우, 더 따뜻한 기온을 얻기 위해 그 날 이후 기다려야 하는 일수를 배열 answer로 반환합니다 . 
이후에 더 따듯한 기온이 날이 없다면 대신 0을 추가하세요.

-> 배열 temperature가 주어질 때, 해당 인덱스의 온도 보다 높은 온도가 나올 날짜를 닮은 배열을 출력한다. 단, 이후 더 높은 온도가 없을 경우 0을 출력한다.
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

🔗 문제 링크 : https://leetcode.com/problems/daily-temperatures/description/

💆🏻‍♀️ 문제 풀이 :
오늘 스택을 학습했다. 그래서 스택을 써보기로 한다. 
스택을 만들어 놓고 스택이 없을 땐 index에 넣어두고 stack이 있을 땐 맨 위와 현재 값을 비교하는 방식으로 진행한다. 
현재 값이 더 크면 stack에서 빼내고 해당 idx의 정답을 인덱스의 차이(기다려야 하는 일수) 로 바꾼다.
while 문을 돌면서 진행해 준다. 

🛠 코드 :
*/
function dailyTemperatures(temperatures) {
    const stack = []; //현재까지 인덱스를 저장하기 위한 스택, 아직 다음으로 따듯한 날을 찾지 못한 날짜의 인덱스 저장
    const result = new Array(temperatures.length).fill(0); //입력값의 길이 만큼 0으로 채워진 배열 생성, 최후 결과 배열

    for (let i = 0; i < temperatures.length; i++) {
      // while문을 돌면서 stack의 길이가 0 이 아니고, 온도배열의 현재기온이 스택의 가장 위에 있는 온도보다 높을 때 까지.
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
          // 다음 따듯한 날씨와의 온도차를 찾았으므로 stack에서 
            const idx = stack.pop();
            result[idx] = i - idx; // 현재 날짜에서 팝한 인덱스까지 몇일이 걸리는지
        }
        stack.push(i);// 반복이 끝나면 현재 날짜의 인덱스를 스택에 추가
    }

    return result;
}