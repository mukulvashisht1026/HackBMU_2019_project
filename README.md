# Hackathon HackBMU 2.0
A 24 hours Hackathon organised by BML Munjal university.

### Team: MukulSaysHi
- Jasbir Singh
- Ashish Lakhani
- Ankit Verma
- Mukul Vashisht

## THEME : Transportation, Security

>Problem :- 
As we all know, ***finding a stolen vehicle*** is a difficult job, specially in metro cities and using manual labour is inefficient. 

>Solution :-
An Android App through which user can upload the details of the stolen car (like model, color, license ID, any special feature).
And using machine learning models we will detect the location at which the vehicle was last spotted. For this, we will take pictures from respective CCTV footages, and ML model will find the matches in % with the car. 

This Single Page Website is used for the sake of presentation.

### Name :- ***Find Your Vehicle***.

### Abstract working procedure of our Solution:-
>App
1. User will upload all the information of the stolen vehicle with its picture(if available).
2. Police can also upload these information from the registered FIRs.

<br/>

<img src="https://github.com/HackBMU/HackBMU2019_MukulSaysHi/blob/master/Screenshots/screencapture-file-C-Users-Ankit-Desktop-BMU-mukk-Web-index-html-2019-03-24-08_10_49.png"/>

<br/>

>ML models
1. Using image recognition (OpenCV), we will determine the features of the vehicle in respective frames & find its %age of match with the stolen vehicle.
2. User will be notified with the top matches with their last location.
