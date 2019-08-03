// Post       

 (async () => {
            const rawResponse = await fetch('http://dontpad.com/jsapi', {
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
                    //'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Usuário:Senha')))
                },
                //  Metodo JSON \\
                // body: JSON.stringify({
                //     'text': 'Valor'
                // })
                // Metodo application/x-www-form-urlencoded
                 body: `text=${'Teste'}`,
            });
            let content = await rawResponse;
        })();