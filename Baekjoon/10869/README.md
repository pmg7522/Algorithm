# 문제

두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

## 입력

두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

## 출력

첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

---

### 풀이 방법

parseInt() 함수를 사용하여 A와 B를 String에서 정수로 변환하여 계산한다.  
넷째 줄의 나눗셈의 몫을 구하는 경우는 소수점을 없애야 하기 때문에 parseInt()를 한번 더 사용한다.

---

[문제 출처]https://www.acmicpc.net/problem/10869
