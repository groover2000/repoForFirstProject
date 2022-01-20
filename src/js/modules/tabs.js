

const tabs = (mainSelector, tabSelector, contentSelector, activeSelector, display = 'block') => {
    const main = document.querySelector(mainSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
        
        function hideContent() {
            content.forEach((i => {
                i.style.display = "none";
            }))

            tab.forEach(i => {
                i.classList.remove(activeSelector)
            })
        };

        function showContent(index = 0) {
            content[index].style.display = display;
            tab[index].classList.add(activeSelector)
        }
        
        
        main.addEventListener("click", (e) => {
            const target = e.target;

            if(target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")) ) {
                tab.forEach((item, i) => {
                    if(target == item || target.parentNode == item) {
                        hideContent();
                        showContent(i);
                    }
                })
            }

        })
        hideContent();
        showContent();
       
};

export default tabs;