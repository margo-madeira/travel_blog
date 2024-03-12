const form = document.querySelector(".popup-form");
const btnSendForm = document.querySelector(".popup-button");
const area = document.querySelector(".fild-area");
const textArea = document.createElement("p");
const closePopup = document.querySelector(".popup-close");
const modal = document.querySelector('.popup');
const body = document.querySelector(".body");
const select = document.querySelector(".select");
const search = document.querySelector(".search-button");
const field = document.querySelector('.field');
const radio = document.querySelector('.checkbox-group');
let times;
let folow = 'Да';
let areaText;
const heading = document.querySelectorAll('.article-title');
const article = document.querySelectorAll('.text');
const tags = Array.from(document.querySelectorAll('.tags-list-item'));
const category = document.querySelectorAll('.post');
const categoryArr = Array.from(category);
const tagsList = document.querySelector('.tags-list');
const index = Array.from(document.querySelectorAll('.index'));
const teamsLinks = Array.from(document.querySelectorAll('.teams-link'));

closePopup.addEventListener("click", () => {
    modal.classList.remove("popup_active");
    body.classList.remove('hidden');
    //localStorage.setItem('isClose', 'true');
})

modal.classList.add("popup_active");
body.classList.add('hidden');//убирает прокрутку осн страницы

select.addEventListener('change', (e) => {
    times = e.target.options[e.target.selectedIndex].text;
})

radio.addEventListener('click', (e) => {
    if(e.target.classList.contains('radio-label')) {
        folow = e.target.lastElementChild.textContent;  
    } else if(e.target.classList.contains('radio-text')) {
        folow = e.target.textContent;
    } else if(e.target.classList.contains('checkbox')) {
        folow = e.target.nextElementSibling.textContent;
    } else {
        folow = e.target.closest('.radio-text').textContent;
    }
})

area.addEventListener('change', (e) => {
    areaText = area.value;
})



//основная страница

search.addEventListener('click', (e) => {
    e.preventDefault();
    for(let i = 0; i < category.length; i++) {
        if(category[i].style.color = '#0f0d0e') {
            category[i].style.color = '#b59f5b'
        }
    }
    if(field.value.trim()) {
        for(let i = 0; i < heading.length; i++){
            if(heading[i].textContent.toLowerCase().includes(field.value.toLowerCase())){
                heading[i].scrollIntoView();//прокрутит стр на найденный заголовок
                return;
            }
        }
        for(let i = 0; i < article.length; i++){
            if(article[i].textContent.toLowerCase().includes(field.value.toLowerCase())){
                article[i].scrollIntoView();
                return;
            }
        }
    }
})

    tagsList.addEventListener('click', (e) => {
        for(let i = 0; i < category.length; i++) {
            if(category[i].style.color = '#0f0d0e') {
                category[i].style.color = '#b59f5b'
            }
        }

        for(let i = 0; i < category.length; i++) {
            if(category[i].textContent.toLowerCase().includes(e.target.textContent.toLowerCase())) {
                category[i].scrollIntoView();
                break;
            }
        }
        for(let i = 0; i < category.length; i++) {
            if(category[i].textContent.toLowerCase().includes(e.target.textContent.toLowerCase())) {
                category[i].style.color = '#0f0d0e';
            }
        }
        return;
    })

    let count = 0;
    for(let i = 0; i < teamsLinks.length; i++){
        for(let j = 0; j < categoryArr.length; j++){
            if(teamsLinks[i].dataset.id === categoryArr[j].textContent) {
                count++; 
                
            }
            if(j === (categoryArr.length - 1)) {
                teamsLinks[i].nextElementSibling.textContent = count;
                count = 0; 
                break;
            }
           
        }
        
    }

    for(let i = 0; i < teamsLinks.length; i++){
        teamsLinks[i].addEventListener('click', () => {
            for(let j = 0; j < category.length; j++) {
                if(category[j].style.color = '#0f0d0e') {
                    category[j].style.color = '#b59f5b'
                }
            }
        }) 
    }
   

