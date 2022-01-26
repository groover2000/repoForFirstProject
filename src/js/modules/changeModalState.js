
const changeModalState = (state) => {

    const model = document.querySelectorAll('.balcon_icons_img '),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');


    if(Object.keys(state).length < 1) {
        state['layout'] = 'Тип1';
        console.log(state);
    }
   

    function getInput(element, event, elementName) {
        
        element.forEach((item) => {
            item.addEventListener(event, () => {
                
                switch(item.nodeName) {
                    case 'SPAN' :
                        let b = item.querySelector('img');
                        state[elementName] = b.getAttribute('alt');
                        console.log(state);
                        break;
                    case 'INPUT' :
                        if(item.getAttribute('type') == 'checkbox') {
                            if(item.checked) {
                                element.forEach(item => {
                                    item.checked = false;
                                })
                                item.checked = true;
                                state[elementName] = item.parentNode.querySelector('span').id;
                                console.log(state);
                            }else {
                                delete state[elementName]
                                console.log(state);
                            }
                           
                        }else {
                            state[elementName] = item.value
                            console.log(state)
                            
                        }
                        break;
                    case 'SELECT' :
                        state[elementName] = item.value;
                        
                        console.log(state)
                }
            })
        })
       
    
    }
    getInput(model, 'click', 'layout');
    getInput(windowWidth, 'input', 'width');
    getInput(windowHeight, 'input', 'height');
    getInput(windowType, 'change', 'type');
    getInput(windowProfile, 'change', 'profile');

}

export default changeModalState;