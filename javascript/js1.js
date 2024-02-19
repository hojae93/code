// 메뉴 글자크기 커지게하기
document.querySelectorAll('.nav_item').forEach(item => {
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
            document.getElementById('typo_1').appendChild(span);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            document.getElementById('typo_1').innerHTML += "<br>";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeWriter, 1000);
        }
    }
}

window.onload = function() {
    typeWriter();
};

window.addEventListener('scroll', function(){
    var pagescroll = window.scrollY;
    var pageheight = document.querySelector('html').scrollHeight;
    var pagerealheight = document.querySelector('html').clientHeight;
    var progress = pagescroll / (pageheight - pagerealheight) * 100
    document.querySelector('.progress').style.width = progress + '%'; //-- 진척도 알려주기
    if(progress >= 10){
        var menucount = 0;
        var 메뉴밑줄 = document.querySelectorAll('.nav_item')[menucount].classList.add('menushow');
        var 메뉴밑줄제거 = document.querySelectorAll('.nav_item')[menucount].classList.remove('menushow');  
        setTimeout(function() {
            메뉴밑줄제거
        }, 500);
        menucount++;        
        setTimeout(function(){
            메뉴밑줄
        }, 1000)
        var containerAbout = document.querySelector('.About_container');
        var titleAbout = document.querySelector('.About_title');
        var mainAbout = document.querySelector('.About_main');
        var leftAbout = document.querySelector('.About_left');
        var rightAbout = document.querySelector('.About_right');
        containerAbout.classList.add('show');
        setInterval(function(){
            titleAbout.classList.add('show');
        }, 500);
            setInterval(function(){
            mainAbout.classList.add('show');
             }, 1000);
                setTimeout(function() {
            leftAbout.classList.add('show');
                 }, 1000); // 0.5초 후에 main_left가 나타남
                setTimeout(function() {
                rightAbout.classList.add('show');
                        }, 1500); // 1초 후에 main_right가 나타남
    }            
});

// WORk에 들어오면 항목 띄우기
// Contact에 들어오면 항목 띄우기
var containerStack = document.querySelector('.Stacks_container');
// top_main 요소 가져오기
var topStack = document.querySelector('#Stacks');
// main_1 요소 가져오기
var mainStack = document.querySelector('.Stacks_main');
// main_left 요소 가져오기
var FirstStack = document.querySelector('.stack_wrap1');
// main_right 요소 가져오기
var SecondStack = document.querySelector('.stack_wrap2');

var containerContact = document.querySelector('.Contact_container');
// top_main 요소 가져오기
var topContact = document.querySelector('#Contact');
// main_1 요소 가져오기
var mainContact = document.querySelector('.Contact_main');
// main_left 요소 가져오기
var FirstContact = document.querySelector('.Contact_wrap');
// main_right 요소 가져오기
var SecondContact = document.querySelector('.social_wrap');
var ThirdContact = document.querySelector('.copyright');


// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function() {
    // top_main 요소가 화면에 나타나는지 확인
    var topStackRect = topStack.getBoundingClientRect();
    var topContactRect = topContact.getBoundingClientRect();
    // top_main 요소가 화면에 보이면 main_1에 show 클래스 추가
    if (topStackRect.top < window.innerHeight) {
        mainStack.classList.add('show');
        // 순차적으로 main_left와 main_right가 나타나도록 함
        setTimeout(function() {
            FirstStack.classList.add('show');
        }, 1000); // 0.5초 후에 main_left가 나타남
        setTimeout(function() {
            SecondStack.classList.add('show');
        }, 1500); // 1초 후에 main_right가 나타남
    }
    if (topContactRect.top < window.innerHeight) {
        mainContact.classList.add('show');
        // 순차적으로 main_left와 main_right가 나타나도록 함
        setTimeout(function() {
            FirstContact.classList.add('show');
        }, 500); // 0.5초 후에 main_left가 나타남
        setTimeout(function() {
            SecondContact.classList.add('show');
        }, 1000); // 1초 후에 main_right가 나타남
        setTimeout(function() {
            ThirdContact.classList.add('show');
        }, 1500); // 1.5초 후에 third가 나타남
    }
});