# Weather-Web-App

First API Project and I had a blast!
Weather Web APP built using openweather API

-I created this weather app as a way to have my own quick way in finding the weather rather than going on 
weather.com. I also used this project to get a better understanding of API's by using the fetch() method. 

JS problems: 
 -Writing the fetch() code took a few tries to get the data logged on to my console. 
 The solution was to put the data inside the .then() method. 

 -Taking in the Input and using the input as a parameter for the API using ${} to replace the value
 with a variable and the input kept getting ignored. 
Solution: I found that I needed to move my declared 'const=zipCode' into the checkweather() function. This
allowed my code to be read and utilized in the function, as well as the API's. 

-Using the icon given to me by the API by using .src. My function kept assigning null to my <img> when using 
element.setAttribute() in JS, so I opted to use .src, .src is just quicker too. It also took awhile to correctly deconstruct the .png url in order to change the source of the image.

Solution: in order to work through this problem I used consol.log() logged the url that the function 
would output and follow the url in order to check for accuracy. (console.log(img.src)

I used console.log() throughout this entire project to test in order to avoid calling the API too much, just
in case I reached a limit.

HTML/CSS Problems: None I had tons of fun designing this one!
