function forms(){
    //Forms
    const forms = document.querySelectorAll('form');
    const messages = {
        loading: 'img/spinner.svg',
        success: 'Дякую. Ваше повідомлення прийнято!',
        fail: 'Сук, шота нє то:(',
    }
    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type' : 'application/json',
            },
            // body : formData,
            body: data,
        });

        return await res.json();
    };
    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = messages.loading;
            statusMessage.style.cssText = `
					display: block;
					margin: 0 auto;
				`;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            // const object = {};
            // formData.forEach(function(value, key){
            // 	object[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            postData('http://localhost:3000/requests', json)
                .then(data => {
                    // console.log(data)
                    showThanksModal(messages.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(messages.fail);
            }).finally(() => {
                form.reset();
            });
        });
    }


    fetch('http://localhost:3000/menu')
        .then(data => data.json());
}

module.exports = forms;