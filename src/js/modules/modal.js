
const modal = ()=> {
    let inter;

    function showModal(openBtn, popup, closeBtn ) {


        const open = document.querySelectorAll(openBtn),
            modal = document.querySelector(popup),
            close = modal.querySelector(closeBtn);
           

            open.forEach(i => {
                i.addEventListener("click", (e) => {
                    e.preventDefault();
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden"; 
                });
            })
            

            close.addEventListener("click", ()=> {
                modal.style.display = "none";
                document.body.style.overflow = "";
                clearTimeout(inter);
            })
            modal.addEventListener("click", (e) => {
                if(e.target === modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = ""; 
                }
            })
    }


    function showIntervalModal(popup, closeBtn) {


        const modalWin = document.querySelector(popup),
            closeB = document.querySelector(closeBtn);
            


        inter = setTimeout(function tick(){
            modalWin.style.display = "block";
            document.body.style.overflow = "hidden";
            return inter = setTimeout(tick, 60000)
        }, 60000 );
       
       
        // closeB.addEventListener("click", () => {
        //     console.log(1);
        //     clearTimeout(inter);  
           
        // })
        
    }
    showModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    showModal('.phone_link', '.popup', ' .popup .popup_close');
    showIntervalModal('.popup_engineer', '.popup_engineer .popup_close' );
}

export default modal