# Weekly Tasks

### __Description__  
To best represent my work, I have chosen weeks 3 (HTML Input Types), 5 (Static vs Fluid Layouts), and 7 (CSS Animations), as my
collection for the Weekly Tasks. I wanted my tasks to be an area to experiment in and override the boundaries of the concepts
taught. Instead of formalizing a professional look like that of the portfolio, I tried exploring the code by manipulating it
and using it for creative purposes. This allowed me to go beyond the set structure which we usually adopt in writing code and test my 
grasp of the topics we learned.


### __Week 3 - Input Types__ 
https://git.arts.ac.uk/21039598/Y2_WebDevStudio/tree/main/public_html/week_3_forms

NOTE: There is a p5.js sketch loaded in this task that requires a local web server to be run (if running the file locally). The easiest way to do it (which I did as well) is by installing this Web Server for Chrome: https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/. To launch it, type chrome://apps in the Chrome address bar and press [Enter] to see all the Chrome apps, then click the Web Server icon.
After launching the Web Server a new window will open. Click [CHOOSE FOLDER] and select the folder with the HTML page running the p5.js sketch (here, select the folder 'week_3_forms'). Then, click on the Web Server URL (http://127.0.0.1:8887 by default) to view the webpage.

#### <ins>__Here is my link: http://127.0.0.1:8887/FlowerStory.html__</ins> 

For more help on how to run the web server, you can visit this link: https://github.com/processing/p5.js/wiki/Local-server.

In this task, I decided to the use the select/drop-down form provided by the CSS Framework. I developed a short story
within the options, but at the same time got an idea of how to work around input types. I changed and 
created features of styling (foregrounding, margins), formatted the SASS file, and worked around its pre-made class to make the drop-down visible on top of the moving backgound sketch. I also used the range input to visualize the stem of the flowers, which
had changes in their positioning and sizing. These formattings made me better understand their properties in the code. You can also align the stems differently due to the sliding button.

Changes were also made to the p5.js sketch. It came pre-written with lots of comments which was very helpful to wrap my head around. I added a few comments for my own understanding, explaining how certain parts affected the flower's formation. I transformed the initial blob-like impression of the flower into a more vectorised-like flower. The petals made great shapes in cycles upon changing the periodicity of the sin and cos waves. Making the cos and sin negative caused slightly different bloom effects, whilst swapping their mutliplication/division operators also caused the flowers to almost produce a beyblade-like figure. As a step further, I want to work towards changing features like the clockwise rotation, and making convenient for-loops to make the flowers instead of repeating the same code (the same situation applying to the sliding buttons).

All in all, it was nice to experiment with input styles, the CSS framework, and also throw in an out of the box component - the p5.js animation. I wanted to stick to this week's content but also bring in another topic of interest (JavaScript libraries), integrating it into the sketch. This way I enjoyed some creative freedom but also understood the fundamentals of forms, frameworks, and third-party libraries.
I tried to not include too many flowers since it slowed my page down, but would've loved to have my whole site full of those pleasing colors!


### __Week 5 - Static vs Fluid Layouts__
https://git.arts.ac.uk/21039598/Y2_WebDevStudio/tree/main/public_html/week_5_layouts

I wanted to see what I could achieve differrently with a simple responsive feature. I had the idea to change colors as one resizes the window, which in turn made me think of a real life situation which had the semblance of resizing boxes and changing colors. A visual of a cityline came to mind and I built a creative premise for my task: the buildings' height could be adjusted with the resizing while they changed their window lighting or overall color under the influence of the night sky.

Most of the core functionality lies in the CSS styling of the elements. I made all buildings with a flex display and their underlying windows as div boxes. The linear gradients controlled the color changes, by detecting a change in the window size, and using that as a color stop.


### __Week 7 - CSS Animations__
https://git.arts.ac.uk/21039598/Y2_WebDevStudio/tree/main/public_html/week_7_cssanim

This sketch uses the back and forth CSS animation with all the elements. The "borgs" are supposed to be spaceships surveying in space. Coding the letters was a bit of struggle, given I wanted each letter to line up behind the other in a staggered sort of motion.
This required me to time their animation duration property down to the decimal, so they weren't too far or close. Otherwise, they made no sense as their distance was off and you couldn't think of a word they meant. The HTML code itself was simple, in that it just demanded the correct placement and structuring of all the borgs and letters.

