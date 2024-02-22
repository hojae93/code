// 메뉴 글자크기 커지게하기
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', function() {
      this.querySelector('a').style.fontSize = "1.3em"; /* hover 시 폰트 크기 증가 */
      this.classList.add('menushow');
    });
    item.addEventListener('mouseout', function() {
      this.querySelector('a').style.fontSize = "1em"; /* hover 끝나면 폰트 크기 원래대로 */
      this.classList.remove('menushow'); 
    });
});

// 한글자씩 표시되도록 타이핑 효과 주기

var lines = [
    { text: "WEB-DEVELOPER", fontSize: "8.0rem", fontWeight: "900", color: '#ffffff' }, // 첫 번째 줄에는 letter-spacing을 적용하지 않음
    { text: "PORTFOLIO", fontSize: "2.2rem", fontWeight: "900", color: '#ffffff', letterSpacing: "1.6rem" } // 두 번째 줄에만 letter-spacing을 적용
];

var lineIndex = 0;
var charIndex = 0;

function typeWriter() {
    if (lineIndex < lines.length) {
        var line = lines[lineIndex];
        var text = line.text;
        var fontSize = line.fontSize;
        var fontWeight = line.fontWeight;
        var color = line.color;
        var letterSpacing = line.letterSpacing || "normal"; // letter-spacing 값을 가져오고, 값이 없으면 "normal"을 사용합니다.

        if (charIndex < text.length) {
            var char = text.charAt(charIndex);
            var span = document.createElement('span');
            span.style.fontSize = fontSize;
            span.style.fontWeight = fontWeight;
            span.style.color = color;            
            span.style.letterSpacing = letterSpacing; // letter-spacing을 적용합니다.
            span.textContent = char;
            document.getElementById('typo-1').appendChild(span);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            document.getElementById('typo-1').innerHTML += "<br>";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeWriter, 1000);
        }
    }
}

window.onload = function() {
    typeWriter();
};

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
                }, index * 500);
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


    


