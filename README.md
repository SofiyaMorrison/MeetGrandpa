<!-- NAME OF THE PROJECT -->
# MeetGrandpa

<!-- ABOUT THE PROJECT -->
   ## About The Project

   This project is a good example of a countdown clock with a background song/music.

   ### How to use the App.

   After you opened a MeetGrandpa website via [http://localhost:3000](http://localhost:3000), on a buttom you can see four countdown clocks which are represent:

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

   #### **Note: file - index.js.**
   

   
