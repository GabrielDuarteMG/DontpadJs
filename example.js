getText('jsapi').then(response => {
    console.log(response)
});
postText('jsapi', 'newApi')

//Encrypt

postText('path', 'Hello World' , true, 'password')

getText('path',true,true,'password').then(response => {
     console.log(response)
});
