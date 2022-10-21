const overlay = document.querySelector(".overlay");

/* ------------------- */
/* Support Modal       */
/* ------------------- */

const modalSupport = document.querySelector(".modal-support");

const modalBtn_101 = document.querySelector(".btn-open-101");
const modalBox_101 = document.querySelector(".support-box-101");
const modalType_101 = document.querySelector(".set-support-101");

const modalBtn_64 = document.querySelector(".btn-open-64");
const modalBox_64 = document.querySelector(".support-box-64");
const modalType_64 = document.querySelector(".set-support-64");

const closeModalBtn = document.querySelector(".btn-close");

const supportRadio_101 = document.getElementById("support-box-101");
const supportRadio_64 = document.getElementById("support-box-64");

// close modal function
const closeModal = function () {
  modalSupport.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close Support Modal when the Esc key is pressed or clicks outside de modal
document.addEventListener("keydown", function (e) {
  if ((e.key === "Escape" && !modalSupport.classList.contains("hidden")) || (!e.target.closest(".modal-support") && !modalSupport.classList.contains("hidden"))) {
    closeModal(); 
  }
});

// open Support Modal functions
const openModal_101 = function () {
  modalSupport.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalType_101.classList.remove("hidden");
  modalType_64.classList.add("hidden");
  modalBox_101.classList.add("checked-style");
  modalBox_64.classList.remove("checked-style");
  supportRadio_101.checked = true;
  supportRadio_64.checked = false;
};

const openModal_64 = function () {
  modalSupport.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalType_64.classList.remove("hidden");
  modalType_101.classList.add("hidden");
  modalBox_64.classList.add("checked-style");
  modalBox_101.classList.remove("checked-style");
  supportRadio_101.checked = false;
  supportRadio_64.checked = true;
};


// Open Support modal event
modalBtn_101.addEventListener("click", openModal_101);
modalBtn_64.addEventListener("click", openModal_64);



//Checked type of support
function supportType() {
  if(supportRadio_101.checked == true){
    supportRadio_101.checked == false;
    modalType_101.classList.remove("hidden");
    modalType_64.classList.add("hidden");
    supportRadio_64.checked == true;

  }else{
    supportRadio_101.checked == true;
    modalType_64.classList.remove("hidden");
    modalType_101.classList.add("hidden");
    supportRadio_64.checked == false;

  }
}

/* ------------------- */
/* Thanks Modal       */
/* ------------------- */

const modalThanks = document.querySelector(".modal-thanks");
const modalBtnThanks =  document.querySelectorAll('.set-support-continue');

 for (let i = 0; i < modalBtnThanks.length; i++) {
  modalBtnThanks[i].addEventListener("click", function() {
    modalSupport.classList.add("hidden");
    modalThanks.classList.remove("hidden");
  });
 }



 // close Support Modal when the Esc key is pressed or clicks outside de modal
document.addEventListener("keydown", function (e) {
  if ((e.key === "Escape" && !modalThanks.classList.contains("hidden")) || (!e.target.closest(".modal-thanks") && !modalThanks.classList.contains("hidden"))) {
    modalThanks.classList.add("hidden");
    overlay.classList.add("hidden"); 
  }
});






