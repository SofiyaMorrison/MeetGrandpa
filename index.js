function meetingCountdown(){
    const meetingDay = new Date("August 5, 2021 20:00");
    const now = new Date();
    const diff = meetingDay - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if(diff<=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;

        clearInterval(timerID)
        met();
    }
}

let timerID = setInterval(meetingCountdown,1000);

function met(){
    const heading = document.querySelector("h1");
    heading.textContent = "Nice to finally meet You, Grandpa Bob!!! 💜";
    heading.classList.add("purple");
}
const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})
