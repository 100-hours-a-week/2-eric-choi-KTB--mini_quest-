// 1번 문제
// A는 오류 발생
// B도 오류 발생
// A는 함수 내부에 let message 선언되어 있으니까 변수를 찾음. 그런데 TDZ에 있기 때문에 reference error 발생
// 실제로는 A 때문에 도달되진 않지만 된다고 가정하면 사실 Hello, ES6! 가 출력되긴 함



// 2번 문제
// green
// red
// blue
// (1) 선언되고 green
// (2) firstlevel 내부에서 실행되므로 red
// (3) 외부에서 실행되므로 blue