// Post       
var postText = async (key,text) => {
    const rawResponse = await fetch('http://dontpad.com/'+ key, {
        method: 'POST', // -- Post, Get ...
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Custom': 'chrome-extension://',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
            //'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Usu�rio:Senha')))
        },
        //  Metodo JSON \\
        // body: JSON.stringify({
        //     'text': 'Valor'
        // })
        // Metodo application/x-www-form-urlencoded
        body: `text=${text}`,
    });
    let content = await rawResponse;
    content;
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
        .catch(error => console.warn(error));
}

