// Post       
var postText = async (key, text, encrypt = false, keyEncrypt = 'dontpadJs') => {
    const urlRequest = location.protocol;
    let url;
    if (encrypt == true) {
        text = encryptString({
            "data": EncryptAES(text,keyEncrypt)
        }, keyEncrypt)
    }
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
var getText = (key, encrypt = false, validate = false, keyValidate = 'dontpadJs') => {
    const proxy = 'https://cors-anywhere.herokuapp.com/http://dontpad.com/';
    let url = proxy + key + '.txt';
    let signature = false;
    return fetch(url,
        {
            method: "GET",
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        })
        .then((response) => response.text())
        .then((responseData) => {
            try {
                if (validate == true) {
                    if (validateJwt(responseData, keyValidate))
                        signature = true;
                    else
                        signature = false;
                    let dataReturn = (encrypt == true ? DecryptAES(decryptString(responseData).data,keyValidate) : responseData);
                    return {
                        "Signature": signature,
                        "data": dataReturn
                    }
                } else {
                    if (encrypt == true)
                        return DecryptAES(decryptString(responseData).data,keyValidate)
                    else
                        return responseData
                }

            } catch (e) {
                console.log('Error: ' + e);
                signature = false;
                return null;
            }
        })
        .catch(error => console.error(error));
}
//Get SubPaths from Key
var getSubPath = (key) =>{
    const proxy = 'https://cors-anywhere.herokuapp.com/http://dontpad.com/';
    let url = proxy + key + '.menu.json';
    return fetch(url,
        {
            method: "GET",
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        }).then((response) => response.text()).then((responseData) => JSON.parse(responseData));
}
//Clear Path
var clearPath = (key) => postText(key, '')
//Doc load and start
document.addEventListener("DOMContentLoaded",  (event) => {
    try {
       encryptString({"Load": "Load"}, 'Load');
    } catch (e) {
        if (e instanceof ReferenceError) 
            setTimeout(console.log.bind(console, "%cwarn%c Error to load Encryptation Lib, Follow Link to use references > https://pastebin.com/PJpYmNXw", "background: #e3ce10;color:#FFF;padding:5px;border-radius: 3px;line-height: 5px;user-select: none;", ""));
    }
    setTimeout(console.log.bind(console, "%cinfo%c DontpadJS is loaded! https://github.com/GabrielDuarteMG/DontpadJs", "background: #00b84c;color:#FFF;padding:5px;border-radius: 3px;line-height: 5px;user-select: none;", ""));
});
/*  
    JWT - Encrypt method Using Alg HS256 - Type: DPJs
    Default password: dontpadJs
*/
var validateJwt = (token, pass) => {
    let defaultHeader = {
        "alg": "HS256",
        "typ": "DPJs"
    };
    let header = JSON.parse(atob(token.split('.')[0]))
    let tokenSignature = token.split('.')[2];
    if (defaultHeader.alg != header.alg || defaultHeader.typ != header.typ)
        return false;
    else {
        let signature = token.split('.')[0] + "." + token.split('.')[1];
        signature = CryptoJS.HmacSHA256(signature, pass);
        signature = base64url(signature);
        if (signature != tokenSignature)
            return false;
        else
            return true;
    }
}

var encryptString = (content, secretKey) => {
    let header = {
        "alg": "HS256",
        "typ": "DPJs"
    };
    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = base64url(stringifiedHeader);

    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(content));
    let encodedData = base64url(stringifiedData);

    let signature = encodedHeader + "." + encodedData;
    signature = CryptoJS.HmacSHA256(signature, secretKey);
    signature = base64url(signature);

    return encodedHeader + '.' + encodedData + '.' + signature;
}
var decryptString = (token) => {
    let playload = JSON.parse(atob(token.split('.')[1]));
    return playload;
};
const base64url = (source) => {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_')
    return encodedSource;
}

var EncryptAES = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
}

var DecryptAES = (text, key) => {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
}
