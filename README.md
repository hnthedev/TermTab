# TermTab
 Chromium Extension for customizing new tab page.

Another random things that `HN the Dev` made for fun. I really hope you enjoy this... none master piece... .Ye ty <3

### Some randoms things that i use

- The `manifest.json` that i borrow from some random website idk :D it should look something like this:
```json
{
  "name": "TermTab",
  "version": "1.0",
  "description": "Changes the new tab page",
  "manifest_version": 3,
  "chrome_url_overrides" : {
	"newtab": "newtab.html"
  }
}
```
i know it okay for beginners but damn i did it so good, no?
- Next is the big text that i got from [patorjk.com](https://patorjk.com/software/taag/#p=display&f=Big&t=Hoang%20Nguyen) and it super awesome and customizable :D:
```
  _    _                           _   _                              
 | |  | |                         | \ | |                             
 | |__| | ___   __ _ _ __   __ _  |  \| | __ _ _   _ _   _  ___ _ __  
 |  __  |/ _ \ / _` | '_ \ / _` | | . ` |/ _` | | | | | | |/ _ \ '_ \ 
 | |  | | (_) | (_| | | | | (_| | | |\  | (_| | |_| | |_| |  __/ | | |
 |_|  |_|\___/ \__,_|_| |_|\__, | |_| \_|\__, |\__,_|\__, |\___|_| |_|
                            __/ |         __/ |       __/ |           
                           |___/         |___/       |___/            
```

- in the Javascript things, i created a **DAMN GOOD** function:
```javascript
function createFade(name, time_wait, speed) {
  var MainObj = document.getElementById(name);
  setTimeout(function() {
    var Inter = setInterval(function() {
      currentOpacity = Number(window.getComputedStyle(MainObj).getPropertyValue("opacity"));
      if (currentOpacity < 1) {
        currentOpacity += speed;
        MainObj.style.opacity = currentOpacity;
      } else {
        clearInterval(Inter);
      }
    },50)
  },time_wait)
}

```
that would carry me for the whole newtab page ngl 

- and then a timer function that i got somewhere on the youtube:
```javascript
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('timing').innerHTML = h + ":" + m;
    t = setTimeout(function() {
      startTime()
    }, 5000);
  }
startTime();
```
- `style.css` file is the the file that i self-created. I have to make a lot of changes based on this and also the Colors that i take from the `COLOR.txt` file:
```
{
  "name": "Apple Classic",
  "black": "#000000",
  "red": "#c91b00",
  "green": "#00c200",
  "yellow": "#c7c400",
  "blue": "#0225c7",
  "purple": "#ca30c7",
  "cyan": "#00c5c7",
  "white": "#c7c7c7",
  "brightBlack": "#686868",
  "brightRed": "#ff6e67",
  "brightGreen": "#5ffa68",
  "brightYellow": "#fffc67",
  "brightBlue": "#6871ff",
  "brightPurple": "#ff77ff",
  "brightCyan": "#60fdff",
  "brightWhite": "#ffffff",
  "background": "#2c2b2b",
  "foreground": "#d5a200",
  "selectionBackground": "#6b5b02",
  "cursorColor": "#c7c7c7"
}
```
it based on some website that i found on internet so idk the source :< ctto anyways :D.
- now about this `README.md` file that u reading right now... i make it from [Make a README](https://www.makeareadme.com/) website. It basically tells me anything :D.
### Screenshots


---
