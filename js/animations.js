const INCREASE_NUMBER_ANIMATION_SPEED = 50 // скорость анимации

// счетчик анимации, от 0 до 5000
// -------start------
function increaseNumberAnimationStep(i, element, endNumber){
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        
        i+=100;

        // вызов анимации с задержкой

        setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber);
          }, INCREASE_NUMBER_ANIMATION_SPEED);        
    }
} 
// --------end--------

// инициализирует и запускает анимацию
// -----start---------
function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0, element, 5000)
}
// --------end--------

// необходимо изменить форму, а именно: селект с выбором примерного бюджета в ней.
//  при выборе нового варианта должно появляться дополнительное текстовое поле для ввода. 
// При этом, если выбирают иной вариант, это поле должно исчезать//

// -------start--------
let budget = document.querySelector('#budget')

budget.addEventListener('change', function handleSelectChange(event) {
    const formContainer = document.createElement('div')
    const input = document.createElement('input')
    const otherInput = document.querySelector('.form__other-input')
    
    if(event.target.value !== 'other' && Boolean(otherInput)){
        document.querySelector('.form form').removeChild(otherInput)
    } else {

        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        input.placeholder = 'Введите ваш вариант'
        input.type = 'text'
        
        formContainer.appendChild(input)
        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
    }
    
})
// ------end---------

// отменить запуск анимации при каждом новом скролле
let animationInited = false;

//-------start----------
function updateScroll() {

    // Если позиция скролла больше 0, добавьте класс header__scrolled, иначе — удалите

    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('header__scrolled');
    } else {
      document.querySelector('header').classList.remove('header__scrolled');
    }
// --------end-----------

// Запуск анимации увеличения числа счастливых клиентов

    let windowBottomPosition = window.scrollY + window.innerHeight;

    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    
    // если текущая нижняя позиция окна (windowBottomPosition) больше или равна позиции элемента с цифрами (countElementPosition),
    // запустите анимацию вызовом функции initIncreaseNumberAnimation()

    if (windowBottomPosition >= countElementPosition && !animationInited) {
      animationInited = true;
      initIncreaseNumberAnimation();
    }
}
window.addEventListener('scroll', updateScroll);

// плавный скролл при нажатии на разделы Контакты

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {

        //предотвратите поведение ссылки по умолчанию, чтобы она не сместила экран к элементу
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));
addSmoothScroll(document.querySelector('.order-button'));
addSmoothScroll(document.querySelector('.order-button2'));
