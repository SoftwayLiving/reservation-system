
  function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }


  function send(action) {
    if (action == 'all') {
      Notiflix.Loading.Hourglass('讀取中....');
      ///總表
      window.location.href = '/softwayliving/checkreservation/'
    } else if (action == 'sidebar_member_list') {
      Notiflix.Loading.Hourglass('讀取中....');
      //會員管理
      window.location.href = '/softwayliving/member_list/'
    } else if (action == 'sidebar_product_list') {
      Notiflix.Loading.Hourglass('讀取中....');
      //價位管理
      window.location.href = '/softwayliving/productions/'

    } else if (action == 'sidebar_store_list') {
      Notiflix.Loading.Hourglass('讀取中....');
      //分店管理
      window.location.href = '/softwayliving/stores/'

    } else if (action == 'sidebar_admin_reservation') {
      Notiflix.Loading.Hourglass('讀取中....');
      //訂位（管理者
      window.location.href = '/softwayliving/reservation/'

    } else if (action == 'sidebar_log_out') {
      Notiflix.Loading.Hourglass('讀取中....');
      //訂位（管理者
      window.location.href = '/softwayliving/logout/'
    }


  }
