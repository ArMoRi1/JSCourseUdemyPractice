import {modalClose, openModal} from './modals';
import {postData} from '../services/services';
function forms(formSelector, modalTimerId){
    //Forms
    const forms = document.querySelectorAll(formSelector);
    const messages = {
        loading: 'img/spinner.svg',
        success: 'Дякую. Ваше повідомлення прийнято!',
        fail: 'Сук, шота нє то:(',
    }
    forms.forEach(item => {
        bindPostData(item);
    });

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
                    console.log(data)
                    showThanksModal(messages.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(messages.fail);
            }).finally(() => {
                form.reset();
            });
        });
    }
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');

        thanksModal.innerHTML = `
				<div class="modal__content">
					<div data-close class="modal__close">
						&times;
					</div>
					<div class="modal__title">
						${message}
					</div>
				</div>
			`;
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            modalClose('.modal');
        }, 4000)
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json());
}
export default forms;