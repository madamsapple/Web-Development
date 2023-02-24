# My website (Portfolio)
See it live: https://cci.arts.ac.uk/~itgupta/index.html

### __Introduction__  
The homepage is the file "Index.html". The weekly tasks include my attempts at experimenting with HTML/CSS/JS.

I personally wanted to give a simple, rudimentary approach to my website's look and feel.
I didn't involve any pre-made frameworks since I wanted to build everything from scratch.
I focused on a few important projects to displaye and my links to social media, alongside
lab work (weekly tasks). 

The animations were put as a way to introduce some activity in the site apart from having 
a clear layout. I wanted to give it a friendly appeal and stick to the content (showcasing work in projects) more than
getting distracted entirely by interactive animations. Hence the conventionally pretty/simplistic
animations of waves and flowers. 

### __Process & Evaluations__


#### Accessibility

##### Responsive Layout
Adjusting my pages to fit mobile displays has been a significant issue with my website currently.
Only the Projects page remains fully responsive; the rest still have ill-fitted layouts and/or
missing/misaligned elements. 

I wanted to create flexboxes for resizable design, but trying to get every element's margin and placement right created conflicts that were confusing to resolve. Sometimes, a mix of element types (block display of embedded links, fixed positions such as that of the top navigation bar) would disrupt the otherwise originally responsive layout. Different position types (fixed, absolute) would also interfere.

Both the pages of weekly tasks and about/socials have all the content cornered into a small area of the
entire mobile display. I used different techniques, for example, setting 0% for the bottom margin or
even a negative value trying to align containers of images or shapes to any window's bottom edge. Yet, 
these elements were constantly getting influenced by others' positioning.

One way I was able to overcome some major issues was by using the Developer Tools function in the live
webpage. The real-time changes I could see by manipulating my css code was immensely helpful in
finding out what styling affected what part of the layout. For example, earlier the grass background
on my main page (as well as associated positioning of other elements) didn't lay out properly in the
mobile display. I then proceeded to check the exact issue but closing in on the grass container and 
changing its attributes. Soon enough I figured out the correct code which allowed for a smooth layout
on both the mobile and laptop. Although, there was still a trade-off: my flower animation didn't seem
to work on any mobile devices (despite trying to use a dynamic property "window.innerHeight"). As of now,
I still need to experiment more with the code to figure the issue out.

##### Color, Fonts
I wanted to make sure that I always used enough contrast between colors in all the pages to avoid 
issues like eye strain, poor visibility, etc. One tool I extensively used was 
https://webaim.org/resources/contrastchecker/ while creating buttons, links, writing paragraphs on
the body's specific background color. I tried to create a common theme of amber-yellow backgrounds
and black text but always checked if any other color-combination passed the test.

The font I used is sans-serif, the recommended accessible font type, meaning it is designed without confusing curves at the tips of the letters. I also tried to not make any of the font sizes too small:
the smallest size used in the website is 20px. This is above the 16px minimum limit, set for good contrast,
by this website guide https://medium.com/envoy-design/how-to-design-an-accessible-color-scheme-4a13ca12c92b.

Alt tags were used for all images in the website, and titles were given to iframe</> tags for embedded links.

##### Site Navigation
I made a simple top navigation bar to make sure anyone could skip to anypage they wanted when not on the 
homepage. I wanted to make sure it was at the top, separate, and didn't stick around like a sticky element. 
This was because I didn't want the bar to interfere with images or text elsewhere and disrupt the flow.


#### Homepage details
Implementing the JavaScript animation of moving flowers was the most challenging part. At first,
I couldn't get mutliple flower elements to move until I realized I could put them under a common 
class. This would allow JS to apply the animation to multiple declarations of the same object.
Ideally, I would've wanted them to create a bouncing-motion, but I was running into more problems 
whilst trying to do so. I experimented with Math.random() to randomize the vertical speeds of the
flowers yet the event would take place rapidly, causing chaos in the background. Slowing down
setInterval() values instead made the movement look jittery/choppy. Ultimately, I stuck with
the original sweeping back-and-forth motion.
