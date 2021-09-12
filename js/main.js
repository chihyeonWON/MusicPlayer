const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 뺌
let i = 0;

//article의 개수만큼 반복
for(let el of lists){
    let pic = el.querySelector(".pic");
    //각 article 요소를 45씩 회전하고 아래로 배치
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`; /* 배경 이미지 추가 */
    i++

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //play 버튼 클릭 시
    play.addEventListener("click", e=>{
        //play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        //play 버튼부터 audio 요소까지 탐색한 뒤 음악 재생
        e.currentTarget.closest("article").querySelector("audio").play();
    });
    
    //pause 버튼 클릭 시
    pause.addEventListener("click",e=>{
        //pause 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on을 제거하여 비활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
        //pause 버튼부터 audio 요소까지 탐색한 뒤 음악 정지
        e.currentTarget.closest("article").querySelector("audio").pause();
    });

    //load 버튼 클릭 시
    load.addEventListener("click",e=>{
        //load 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        //load 버튼부터 audio 요소까지 탐색한 뒤 음악 다시 로드하고 재생
        e.currentTarget.closest("article").querySelector("audio").load();
        e.currentTarget.closest("article").querySelector("audio").play();
    });

    /* 버튼 제어 구문 */
    const prev = document.querySelector(".btnPrev");
    const next = document.querySelector(".btnNext");
    
    let num=0;

    prev.addEventListener("click", ()=>{
        num++;
        frame.style.transform = `rotate(${deg * num}deg)`;   
    });

    next.addEventListener("click", ()=>{
        num--;
        frame.style.transform = `rotate(${deg * num}deg)`;  
    })
}