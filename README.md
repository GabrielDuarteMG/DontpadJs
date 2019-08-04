# DontpadJs
Dontpad unofficial API for Js Vanilla
![](https://img.shields.io/github/stars/GabrielDuarteMG/DontpadJs.svg) ![](https://img.shields.io/github/forks/GabrielDuarteMG/DontpadJs.svg) ![](https://img.shields.io/github/issues/GabrielDuarteMG/DontpadJs.svg) 
### Features
-- Using Dontpad in Javascript without backend server to request
-- Free proxy to get Dontpad Data by [cors-anywhere]( https://cors-anywhere.herokuapp.com/)
### Using
-- After import DontpadJS.min.js 
##### Post

```javascript
  
postText(urlPath, textPost)

```

##### Get

```javascript
  
getText(urlPath).then(response => {
    console.log(response)
});

```
