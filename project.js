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

// 카테고리 필터용
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

const categoryBtn = document.querySelector(".menu");
const projects = document.querySelectorAll(".card");

categoryBtn.onclick("click",(e)=> {
    const filter = e.target.dataset.filter;
    if (filter == null){
        return;
    }
    projects.forEach((project)=> {
        if(filter==="*" || filter===project.dataset.type){
            project.classList.remove("invisible");
        }
        else{
            project.classList.add("invisible");
        }
    })
})

