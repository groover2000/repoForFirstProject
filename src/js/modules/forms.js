const forms = (state) => {

    const form = document.querySelectorAll("form"),
            input = document.querySelectorAll('input');

    const message = {
        loading: 'Loading...',
        succes: 'Good',
        failure: 'Fail',
    }
    
    const clearInputs = () => {
        input.forEach((item) => {
            item.value = ''
        })
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });
        const text = await response.text();
        return text;
    }

    form.forEach((item) => {

        item.addEventListener('submit', (e) => {

            e.preventDefault();
            let status = document.createElement('div');
            status.classList.add('status');
            item.appendChild(status);
            const formData = new FormData(item);
            for (let key in state) {
                formData.append(key, state[key]);
            }
            
            postData('assets/server.php', formData)
            .then(res => {
                
                status.textContent = message.succes
                console.log(res)
                clearInputs();
            })
            .catch((e) => {
                status.textContent = `${message.failure}${e}`;
            })
            .finally(() => {
                setTimeout(() => {
                    status.remove()
                },3000)
            })
            
        })
    });
}

export default forms