let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");

btnDOM.addEventListener("click", elemanEkle);

function elemanEkle() {
  let task = taskDOM.value; // taskın içindeki değeri al
  if (task.trim() == "") {
    //taskın içindeki boşlukları kaldır geriye bir şey kalmazsa
    $(document).ready(function () {
      // toast(pop up gibi fırlayan hata mesajı) kullanımı bu şekilde
      $(".error").toast("show");
    });
  } else {
    // task içinde öğe var  ise
    let liDOM = document.createElement("li"); // li oluştur
    liDOM.innerHTML = taskDOM.value; // task in içindeki değeri liDOM un innerHTMl ine ekle
    listDOM.append(liDOM); // listeye lidom(task'tan alınan değer) u ekle
    taskDOM.value = ""; // taskı temizle
    $(document).ready(function () {
      $(".success").toast("show"); //toast kullanımı araştırıldı eklendi.
    });
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; //çarpı işaretinin text hali
    closeButton.classList.add("close");
    liDOM.append(closeButton); // closebutton u lidom a eklendi - lidom li elementidir.
    closeButton.onclick = removeItem; // removeItem fonksiyonunu çalıştırır.
  }
}

function removeItem() {
  this.parentElement.remove(); // çarpıya basınca li elementinin silinmesi
}

listDOM.addEventListener(
  "click",
  function (ev) {
    // li elementlerine tıklandığında classlist olarak checked classının eklenmesi ve silinmesi
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked"); // toggle fonksiyonu...çalıştırıldı yani eğer checked varsa çıkart yoksa ekle ....
    }
  },
  false
);
