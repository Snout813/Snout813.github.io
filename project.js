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
