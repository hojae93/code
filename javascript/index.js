// 문서가 완전히 로드되면 실행되는 이벤트 리스너를 추가합니다.
document.addEventListener('DOMContentLoaded', () => {
    // #works 요소 내부의 .swiper-content 클래스를 가진 요소를 Swiper로 초기화합니다.
    new Swiper("#works .swiper-content", {
        // 슬라이드 전환 속도를 500ms로 설정합니다.
        speed: 500,
        // 한 번에 보여질 슬라이드의 수를 3개로 설정합니다.
        slidesPerView: 3,
        // 슬라이드 간의 간격을 15px로 설정합니다.
        spaceBetween: 15,
        // 슬라이드 루프(순환)를 활성화합니다.
        loop: true,
        // 이전/다음 버튼을 사용하여 슬라이드를 탐색할 수 있는 내비게이션을 활성화합니다.
        navigation: {
            // 이전 버튼의 CSS 선택자를 지정합니다.
            prevEl: '.swiper-button-prev',
            // 다음 버튼의 CSS 선택자를 지정합니다.
            nextEl: '.swiper-button-next',
        }
    });
});