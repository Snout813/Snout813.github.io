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
}
window.onload = function() {
    const typingElement = document.querySelector('.typing');
    const textToType = "슬기짜기만의\n다양한 프로젝트를 탐험해보아요!"; // 출력하고 싶은 텍스트 입력
    typeEffect(typingElement, textToType, 0);
};