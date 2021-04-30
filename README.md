# Understand basic website functionality by learning to scrape

## HTML - CSS Demo
Explain what going to a website does and what is displayed. What elements are and a little bit about structure.
Along with HTML file comes a set of styles - CSS
Styles manipulate the HTML by selecting the tag, class, id

1. https://en.wikipedia.org/wiki/Main_Page
2. Click `Random Article`
3. Play revisionist History
    - Change the text to your liking
    - Delete elements that you don't like
4. Find Heading text elements
5. Change Heading CSS in the right panel according to the class name
    - Class `firstHeading`

### HTML - CSS Activity

1. Navigate to https://thehivetaipei.com
2. Right click on some text. Pick `Inspect` or `Inspect Element`
3. In the `Elements` tab double click on the text for the element (usually it's `<h1/> <p/> <span/> <a/>`) and say whatever you'd like
4. On the righthand side you can change the style of the text you added by adding a style to the `element.style` box.
    - Try using a word for the color (eg `orange green blueviolet`)
    - Try using a Hex value (eg `#213B33 #0399F9`)
    - https://htmlcolorcodes.com/color-picker/
5. Manipulate the `font-size` attribute to make the text larger/smaller
6. Right click on an any element in the `Elements` tab and select `Delete Element`

## Javascript
`<script>` tags in HTML
Interactivity while website is running
Attach listeners, timers, request more data

### Demo

1. https://www.pokemon.com/us/pokedex/
2. Right click. Pick `Inspect` or `Inspect Element`
3. In the `Console` tab enter `imageSection = document.getElementsByClassName("pokedex-results")[0];`
    - These elements will come back as an "array" type. Arrays are like lists. Counting starts at zero for arrays. And since there's just one, we'll select the first one.
4. Next you can get all the images by entering `pokeImages = imageSection.getElementsByTagName("img")`
    - Now we have an array (list) of images.
5. Now you can pick any of the images and give them a new width. Try `pokeImages[2].style.width = "15px"`

### JavaScript Activity
1. Navigate to https://www.taiwannews.com.tw/en/index
2. Scroll down to `Hot News` section - using `scrollTo`
3. Right click one of the thumbnails. Pick `Inspect` or `Inspect Element`
4. Notice the class of the thumbnails has `entry-image` and `has-image`
    - You might have to dig down opening arrows on the left side to get down to the image to see it.
5. Select all the thumbnails and set them to a variable `images = document.getElementsByClassName("entry-image")`
6. Try increasing and decreasing the sizes of the various images by selecting them in the array and changing `width` and `height`
    - `images[1].style.width = "15px"`
    - `images[2].style.height = "1200px"`
7. Try on any website
    - Some images are harder to figure out how to manipulate due to more complexity in the site's css
    - Try different elements and different attributes - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

### Last Activity

https://try-puppeteer.appspot.com/