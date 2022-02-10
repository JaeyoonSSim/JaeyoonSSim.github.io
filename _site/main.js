// Header 메뉴에서 마우스 오버시
const toggleBtn = document.querySelector('.navbar_header_toggleBtn');
const menu = document.querySelector('.navbar_header_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// 마우스 오버시 이미지 확대 축소
function zoomIn(event) {
    event.target.style.transform = "scale(1.2)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}


// 아코디언 메뉴
$(".activity_content_title").click(function() {
    $(this).next(".activity_content_description").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".activity_content_description").siblings(".activity_content_description").slideUp(300); // 1개씩 펼치기
});

$(".project_content_title").click(function() {
    $(this).next(".project_content_description").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".project_content_description").siblings(".project_content_description").slideUp(300); // 1개씩 펼치기
});