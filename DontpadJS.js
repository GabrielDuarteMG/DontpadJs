// Post       
var postText = async (key, text) => {
    const urlRequest = location.protocol;
    let url;
    if (urlRequest == 'https:')
        url = 'https://cors-anywhere.herokuapp.com/http://dontpad.com/' + key;
    else
        url = 'http://dontpad.com/' + key;
    const rawResponse = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: `text=${text}`,
    });
    await rawResponse
};
// Get
var getText = (key) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/http://dontpad.com/';
    let url = proxy + key + '.txt';
    return fetch(url,
        {
            method: "GET",
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        })
        .then((response) => response.text())
        .then((responseData) => responseData)
        .catch(error => console.error(error));
}
document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(console.log.bind(console, "%cinfo%c DontpadJS is loaded! https://github.com/GabrielDuarteMG/DontpadJs", "background: #00b84c;color:#FFF;padding:5px;border-radius: 3px;line-height: 5px;user-select: none;", ""));
});
