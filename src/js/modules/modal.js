
const modal = ()=> {
    let inter;

    function showModal(openBtn, popup, closeBtn, closeOverlay = true ) {


        const open = document.querySelectorAll(openBtn),
            modal = document.querySelector(popup),
            close = modal.querySelector(closeBtn),
            windows = document.querySelectorAll('[data-modal]')
            
           

            open.forEach(i => {
                i.addEventListener("click", (e) => {
                    e.preventDefault();

                    windows.forEach((i) => {
                        i.style.display = "none";
                    })

                    modal.style.display = "block";
                    document.body.style.overflow = "hidden"; 
                  
                });
            })
            

            close.addEventListener("click", ()=> {
               
                windows.forEach((i) => {
                    i.style.display = "none";
                })

                modal.style.display = "none";
                document.body.style.overflow = "";
                clearTimeout(inter);
               
            })
            modal.addEventListener("click", (e) => {
                if(e.target === modal && closeOverlay ) {
                    windows.forEach((i) => {
                        i.style.display = "none";
                    })
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
    // showIntervalModal('.popup_engineer', '.popup_engineer .popup_close' );
    showModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    showModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    showModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modal