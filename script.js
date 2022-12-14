function validate() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Silahkan Isi Nama dengan Benar";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "Silahkan isi Subject dengan Benar";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Silahkan isi Nomor Telepon dengan Benar";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Silahkan Isi Email dengan Benar";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 20) {
    text = "Silahkan Masukkan Lebih dari 20 Karakter";
    error_message.innerHTML = text;
    return false;
  }
  alert("Data Berhasil Dibuat");
  return true;
}
