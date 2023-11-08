<!-- NAME OF THE PROJECT -->
# MeetGrandpa

<!-- ABOUT THE PROJECT -->
   ## About The Project

   This project is a good example of a countdown clock with a background song/music.

   ### How to use the App.

   After you opened a MeetGrandpa website using *Copy Path* method, on a buttom you can see four countdown clocks which are represent:

   -Days

   -Hours

   -Minutes

   -Seconds

   We were using Method **Math.floor** to countdown time properly:
   
   #### 
**```
    const displayDay = Math.floor(diff/msInDay);
       ```**

   **```
     document.querySelector(".days").textContent = displayDay;
    ```**


   **```
    const displayHour = Math.floor((diff%msInDay)/msInHour);
    ```**

 **```
    document.querySelector(".hours").textContent = displayHour;
    ```**


   **```
    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    ```**

 **```
    document.querySelector(".minutes").textContent = displayMinute;
     ```**


  **```
    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
     ```**

**```
    document.querySelector(".seconds").textContent = displaySecond;
     ```**

   ##### **Note: file - index.js.**

   Above countdown clocks you can see *Play Button*, if you press on a button you can hear song related to the project Meeting Grandpa.

   We were using Methods **addEventListener** and **querySelector** to make music to play after pressing the button:
   ####
 **```
       const button = document.querySelector("#myButton");
        ```**

   **```
       button.addEventListener("click", function(){
       ```**
     
   **```
       document.querySelector("#myAudio").play();
         ```**
         
   ##### **Note: file - index.js.**

   ### Built With

 #### * [React](https://react.dev/)
   

   
