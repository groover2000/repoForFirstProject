
const changeModalState = (state) => {

    const model = document.querySelectorAll('.balcon_icons_img '),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#height');
    
    if(Object.keys(state).length < 1) {
        state['layout'] = 'Тип1';
        console.log(state);
    }
   
    model.forEach((item, i) => {
        
        item.addEventListener('click', () => {
            let b = item.querySelector('img').alt
            state['layout'] = b
            console.log('state', state);
        })
    })

    windowWidth.addEventListener('input' , (e) => {
        state['width'] = e.target.value
        console.log(state);
    })
    
}

export default changeModalState;