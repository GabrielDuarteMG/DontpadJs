# DontpadJs
Dontpad unofficial API for Js Vanilla

![](https://img.shields.io/github/stars/GabrielDuarteMG/DontpadJs.svg) ![](https://img.shields.io/github/forks/GabrielDuarteMG/DontpadJs.svg) ![](https://img.shields.io/github/issues/GabrielDuarteMG/DontpadJs.svg) 
### Features
- Using Dontpad in Javascript without backend server to request.
- Free proxy to get Dontpad Data by [cors-anywhere]( https://cors-anywhere.herokuapp.com/).
- Using [crypto-js](https://github.com/brix/crypto-js) to simple encrypt and assign post data.
### Using
- After import DontpadJS.min.js 

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
#### Safe Data

###### Post
```javascript
  postText(urlPath, textPost, true, passwordSignature)

```
> If someone access your path will see like this.

![](https://i.snipboard.io/3OiMFH.jpg)

*If you dont insert Pass this default password will: dontpadJs *
###### Get only text
```javascript
getText(urlPath,true).then(response => {
        console.log(response)
});

```
###### Get  text and verify signature
```javascript
getText(urlPath,true,true,passwordSignature).then(response => {
        console.log(response)
 });

```
> Output 

![](https://i.snipboard.io/bdK0Vr.jpg)
##### HTML
###### [jsDelivr](https://cdn.jsdelivr.net/gh/GabrielDuarteMG/DontpadJs/)   
```html
   <script src="https://cdn.jsdelivr.net/gh/GabrielDuarteMG/DontpadJs@latest/DontpadJS.min.js">
   </script>
```
###### Local Import
```html
   <script src="DontpadJS.min.js">
   </script>
```

###### For use Encrypt

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha256.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"></script>
```
### Contact

###### Email
`gabriel160499@gmail.com`
###### [Facebook](https://www.facebook.com/Gabriields18) 
###### [Issues](https://github.com/GabrielDuarteMG/DontpadJs/issues) 

