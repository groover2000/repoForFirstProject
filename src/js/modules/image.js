
const images = () => {

    const bigImg = document.createElement('img'),
        popup = document.createElement('div'),
        workSpace = document.querySelector('.works');

        popup.classList.add('popup');

        popup.style.display = 'none';
        workSpace.appendChild(popup);
        popup.appendChild(bigImg);

        workSpace.addEventListener('click' , (e) => {
            if(e.target.classList.contains('preview')) {
                e.preventDefault();

                popup.style.display = 'block'
                const path = e.target.parentNode.getAttribute('href');
                bigImg.setAttribute('src', path)
            }
            if(e.target.matches('.popup')) {
                popup.style.display = 'none'
            }
        })

       

}

export default images;