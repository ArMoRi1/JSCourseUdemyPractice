/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки 
"Подтвердить" - новый фильм добавляется в список. Страница не должна 
перезагружаться. Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как 
input.value; 
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, 
но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить 
три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка 
(сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести 
сообщение: "Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const submitButton = document.querySelector("form.add button"),
    adv = document.querySelectorAll('.promo__adv'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'), 
    
    moviesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = document.querySelector('form.add [type="checkbox"]');

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let NewMovie = document.querySelector("input.adding__input").value;
    const favorite = checkbox.checked;

    if(NewMovie){
        if(NewMovie.length > 21){
            NewMovie = NewMovie.slice(0,21) + '...';
        }
        if(favorite){
            console.log('Добавляємо улюблений фільм');
        }
        movieDB.movies.push(NewMovie);
        addForm.reset();
        updateMovieList(movieDB.movies, moviesList);
    }
    // e.target.reset();
});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
    arr.sort();
};

function updateMovieList(movies, moviesList){
    moviesList.innerHTML = '';
    sortArr(movies);

    movies.forEach((movie, i)=>{
        moviesList.innerHTML += `
        <li class="promo__interactive-item">${i+1}.${movie}
            <div class="delete"></div>
        </li>
        `
    });
    
    document.querySelectorAll(".delete").forEach((btn, i)=>{
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
            updateMovieList(movies, moviesList);
        })
    });
}


deleteAdv(adv);
makeChanges();
updateMovieList(movieDB.movies, moviesList);

