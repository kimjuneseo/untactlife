window.onload = function(){
    const delBtn = document.querySelectorAll('button');
    
    const content = document.querySelector(".content");
    content.addEventListener("click", ({ target }) => {
        if(target.tagName.toLowerCase() === "button") {
           alert('삭제되었습니다')
            target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
            // console.log(target.parentNode.parentNode)
        };
    });
};