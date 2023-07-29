window.addEventListener("load", function () {
  const $topBtn = document.querySelector(".moveTopBtn");
  $topBtn.addEventListener("click", scrollToTop);
  setTimeout(typing, 1500);

});
// 버튼을 클릭했을 때 상단으로 이동하는 함수
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // 부드러운 스크롤을 위해 "smooth" 속성 사용
  });
}
/* count 숫자 올라가게 만들기 */
const counter = ($counter, max) => {
    let now = max;
  
    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);
    
      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }
      
      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;
      
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 50);
  }
  
  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".count");
    
    // 목표 수치
    const max = 100;
    
    setTimeout(() => counter($counter, max), 200);
  }


//스크롤 이미지 애니메이션//
$(document).ready(function() {
    $(window).scroll( function(){
			
        $('logo1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element/2 ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });
});
