
  $('#admin_member_submit').click(function (e) {
    if ((/[0]{1}[9]{1}[0-9]{8}/).test($('#member_phone').val())) {
      Notiflix.Loading.Hourglass('處理中....');
      document.getElementById('admin_member_form').action = '/softwayliving/admin_reservation/'
      document.getElementById('admin_member_form').submit()
    } 
  })
