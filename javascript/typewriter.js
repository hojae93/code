// Intro 글자 한글자씩 나타나게 하기
var lines = [
    { elementId: "typewriter1", text: "WEB-DEVELOPER", speed: 100 },
    { elementId: "typewriter2", text: "PORTFOLIO", speed: 150 }
];

function typeWriter(lineIndex) {
    if (lineIndex < lines.length) {
        let line = lines[lineIndex];
        let text = line.text;
        let i = 0;
        function typing() {
            if (i < text.length) {
                document.getElementById(line.elementId).innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, line.speed);
            } else {                            
                if (lineIndex + 1 < lines.length) {
                    typeWriter(lineIndex + 1); // 다음 줄로 이동
                }
            }
        }
        typing();
    }
}

window.onload = function() {
    typeWriter(0); // 첫 번째 줄부터 시작
};