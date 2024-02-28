// 메뉴 글자크기 커지게하고 밑줄 나타나게 하기
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', function() {
      this.querySelector('a').style.fontSize = "1.3em"; // 글자크기 크게
      this.classList.add('menushow'); // 밑줄 클래스 추가
    });
    item.addEventListener('mouseout', function() {
      this.querySelector('a').style.fontSize = "1em"; // 글자크기 원래대로
      this.classList.remove('menushow'); // 밑줄 클래스 제거
    });
});

// 메뉴 클릭시 스크롤 이동 스무스하게
document.addEventListener('DOMContentLoaded', function() {
    var smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 이벤트(링크 이동) 방지
            var targetId = link.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 스크롤 위치를 부드럽게 이동
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });    
});

// 모바일 햄버거 메뉴 
var hamburger = document.querySelector('.nav-hamburger');
var modal = document.querySelector('#mb-menu');
function toggleMenu() {    
    hamburger.classList.toggle('open');
    modal.classList.toggle('opening');
}
hamburger.addEventListener('click', toggleMenu);

// 모달 닫기
modal.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('opening')
    }
  };

// 모바일에서 메뉴 선택시 그 항목 메뉴로 이동
var listItems = document.querySelectorAll('#mb-menu li');

listItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    var targetId = event.target.getAttribute('href');
    modal.classList.remove('opening')
    window.location.href = targetId; // 해당 ID로 이동
  });
});

// 진척도 + 나타나기 
window.addEventListener('scroll', function(){
    var pagescroll = window.scrollY;
    var pageheight = document.querySelector('html').scrollHeight;
    var pagerealheight = document.querySelector('html').clientHeight;
    var progress = pagescroll / (pageheight - pagerealheight) * 100    
    document.querySelector('.progress').style.width = progress + '%'; //-- 진척도 알려주기
    // 모든 섹션 요소를 선택합니다.
    var sections = document.querySelectorAll('section');
    
    // 각 섹션에 대해 반복합니다.
    sections.forEach(function(section) {
        // 현재 섹션 요소의 위치 정보를 얻습니다.
        var sectionPosition = section.getBoundingClientRect();
        // 현재 브라우저 창의 높이를 얻습니다.
        var windowHeight = window.innerHeight;
        // 섹션이 뷰포트의 50% 이상 보일 때 화면에 나타나도록 설정합니다.
        var threshold = windowHeight * 0.8;
        
        // 현재 섹션이 화면에 보일 때
        if (sectionPosition.top < threshold && sectionPosition.bottom >= 0) {
            // 섹션의 하위 div 요소에 show 클래스를 추가하여 내용이 나타나도록 함
            var content = section.querySelector('.container');
            if (content) {
                content.classList.add('show');
            }
            
            // 섹션 내부 요소들에 대한 처리
            var items = section.querySelectorAll('.item');
            items.forEach(function(item, index) {
                // 각 요소를 0.5초씩 차이를 두고 나타나도록 설정
                setTimeout(function() {
                    item.classList.add('show');
                }, index * 1000);
            });
        } else {
            // 현재 섹션이 화면에 보이지 않을 때
            // 섹션의 하위 div 요소에 show 클래스를 제거하여 내용이 사라지도록 함
            var content = section.querySelector('.container');
            if (content) {
                content.classList.remove('show');
            }
            
            // 섹션 내부 요소들에 대한 처리
            var items = section.querySelectorAll('.item');
            items.forEach(function(item) {
                item.classList.remove('show');
            });
        }
    });
});

// 모바일화면에서 터치시 호버와 같은 효과
document.addEventListener("touchstart", function() {}, true);

    


