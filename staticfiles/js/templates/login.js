function send() {
    document.getElementById("checklogin_form").action = "/booking/member/";
    document.getElementById("checklogin_form").submit();

}

function initializeLiff(MyLiffId) {
    liff
        .init({
            liffId: MyLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            // document.getElementById("liffAppContent").classList.add('hidden');
            // document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}

function displayLiffData(){
    liff.getProfile()
        .then(profile => {
            const name = profile.displayName
            // document.getElementById('displayName').value = name
            $('#img').attr('src', profile.pictureUrl);
            $('#social_id').val(userId); //data.context.userId
            $('#social_app').val('Line');
            $('#social_name').val(name)

            send()
        })
}
//LineLIFF V1
// function initializeApp(data) {
//     liff.getProfile().then(profile => {
//         var disname = {
//             'name': profile.displayName
//         };
//         disname_json = JSON.parse(JSON.stringify(disname.name))
//         $('#img').attr('src', profile.pictureUrl);
//         $('#social_id').val(data.context.userId); //data.context.userId
//         $('#social_app').val('Line');
//         $('#social_name').val(disname_json)

//         send()
//     })
// }
//ready
$(function () {
    Notiflix.Loading.Hourglass('讀取中....');
    //init LIFF
    // liff.init(function (data) {
    //     initializeApp(data);
    // });



    //xxxxxx remember to edit it to Line Liff  xxxxxxxx
    // $('#social_id').val('9644ff56-e78b-11e9-a2b8-0ec425232523'); //data.context.userId//9636ff56-e78b-11e9-a2b8-0ec425232520
    // $('#social_app').val('Line');//Line
    // $('#social_name').val('James')//James
    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //send data 
    // send()
    // if($('#social_id').val() == '' || $('#social_app').val() == ''){
    //     window.location.replace('/booking/error/');
    // }else{
    //     send()
    // }


    //Line LIFF V2
    initializeLiff('1653788675-gE0L04We')
    displayLiffData()
    
});