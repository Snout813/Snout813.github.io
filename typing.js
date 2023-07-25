// 타이핑 효과
function typeEffect(element, text, i) {
    if (i < text.length) {
        // 현재 글자가 줄바꿈 문자인 경우 <br> 태그로 대체
        if (text.charAt(i) === '\n') {
          element.innerHTML += '<br>';
        } else {
          element.innerHTML += text.charAt(i);
        }
    
        i++;
        setTimeout(function() {
          typeEffect(element, text, i);
        }, 70); // 한 글자씩 출력되는 속도 조절을 위해 100ms로 설정
    }
    else {
        // 타이핑 효과가 끝난 후 콜백 함수 호출
        if (typeof callback === 'function') {
          callback();
        }
    }
}
window.onload = function() {
    const typingElement1 = document.querySelector('.typing1');
    const textToType1 = "슬기짜기만의"; // 출력하고 싶은 텍스트 입력


    typeEffect(typingElement1, textToType1, 0, function() {
        const typingElement2 = document.querySelector('.typing2');
        const textToType2 = "다양한 프로젝트를 탐험해보아요!"; // 출력하고 싶은 텍스트 입력
        // 첫 번째 타이핑 효과가 끝난 후에 두 번째 타이핑 효과 실행
        setTimeout(function() {
            typeEffect(typingElement2, textToType2, 0);
          }, 1000); // 첫 번째 타이핑 효과가 끝난 후 1초(1000ms) 대기 후 두 번째 효과 실행
    });

};