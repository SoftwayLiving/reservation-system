;function send(){Notiflix.Loading.Hourglass('讀取中....')
document.getElementById("checklogin_form").action="/softwayliving/StaffAuth/";document.getElementById("checklogin_form").submit();}
$(function(){document.getElementById("top_block").style.display='none'});$(function(){$('#checklogin_form_submit').click(function(e){var status=true;var email=$('#email').val();var password=$('#password').val();if(email==''){status=false;}else if(password==''){status=false;}
if(status){send()}});});$(function(){if(getCookie('name')){$('#email').val(getCookie('name'));$('#memory').prop('checked','checked');}else{$('#email').val('');}});$('#checklogin_form_submit').click(function(){if($('#memory').prop('checked')){var email=$('#email').val();setCookie("name",email);}else{delCookie('name');}});function setCookie(name,value)
{var Days=30;var exp=new Date();exp.setTime(exp.getTime()+Days*24*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();}
function getCookie(name)
{var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
return unescape(arr[2]);else
return null;}
function delCookie(name)
{var exp=new Date();exp.setTime(exp.getTime()-1);var cval=getCookie(name);if(cval!=null)
document.cookie=name+"="+cval+";expires="+exp.toGMTString();}