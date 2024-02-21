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
    console.log(progress);
    document.querySelector('.progress').style.width = progress + '%'; //-- 진척도 알려주기
    if(progress >= 16){
        var containerAbout = document.querySelector('.about_container');
        var titleAbout = document.querySelector('.about_title');
        var mainAbout = document.querySelector('.about_main');
        var textAbout = document.querySelector('.about_text');
        containerAbout.classList.add('show');
        setInterval(function(){
            titleAbout.classList.add('show');
        }, 500);
        setInterval(function(){
            mainAbout.classList.add('show');
        }, 1000);
        setTimeout(function() {
            textAbout.classList.add('show');
        }, 1000); // 0.5초 후에 main_left가 나타남
                
    }            
});

