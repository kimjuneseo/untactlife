window.onload = function () {
    const sign  = document.querySelector('.sign');
    const signUpPopUp = document.querySelector('.popup2');
    const content = document.querySelector(".content");
    const cancelBtn = document.querySelector('.cancelBtn');
    const merberAddBtn = document.querySelector('.memberAdd')
    const ConfirmBtn = document.querySelector('.loginButton')
    content.addEventListener("click", ({ target }) => {
        if (target.tagName.toLowerCase() === "button") {
            let Boolean = confirm('삭제 하시겠습니까?')
            if (Boolean === true) {
                target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
            }

        };
    });


 //popup

function signUpPop(){
    signUpPopUp.classList.toggle('display-none');
};
merberAddBtn.addEventListener('click',signUpPop)
ConfirmBtn.addEventListener('click',signUpPop)
sign.addEventListener('click',signUpPop);
cancelBtn.addEventListener('click', signUpPop);



};
