const nextbtn = document.querySelectorAll('.movefw');
const backbtn = document.querySelectorAll('.movebw');
const wrap = document.querySelectorAll('.movie-container');

let clickCounter = 0;

nextbtn.forEach((movefw,i)=>{

    const itemNumber = wrap[i].querySelectorAll('img').length;

    movefw.addEventListener('click', ()=>{
        clickCounter++;
        if(itemNumber - (5 + clickCounter) >0){
            wrap[i].style.transform = `translateX(${wrap[i].computedStyleMap().get('transform')[0].x.value-300}px)`
        }else{
            wrap[i].style.transform = 'translateX(0)'
            clickCounter = 0
        }
    })
})

/*MOVE BACKWARDS*/
backbtn.forEach((movebw,i)=>{
    const itemNumber = wrap[i].querySelectorAll('img').length

    let clickCounterbw = 0;
    movebw.addEventListener('click', ()=>{

        clickCounterbw++;

        if(clickCounter==0){
            wrap[i].style.transform = 'translateX(0)'
        }else if(itemNumber - (5 + clickCounter)>0){
            wrap[i].style.transform = 'translateX(0)'
        }
    })
})

let viewContent = document.querySelector('.view-content')
function showViewContent(){
    
    viewContent.style.opacity = '1'
}

function closeViewContent(){
    viewContent.style.opacity='0'
}

/*GREEN VIEW*/
const greenView = document.getElementById('greenViewButton');
const greenItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

greenView.addEventListener('click', () => {
    toggleClasses(greenItems, 'activegreen');
    removeClasses(['activeblue', 'activered'], greenItems);
});

/*BLUE VIEW*/
const blueView = document.getElementById('blueViewButton');
const blueItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

blueView.addEventListener('click', () => {
    toggleClasses(blueItems, 'activeblue');
    removeClasses(['activegreen', 'activered'], blueItems);
});

/*RED VIEW*/
const redView = document.getElementById('redViewButton');
const redItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

redView.addEventListener('click', () => {
    toggleClasses(redItems, 'activered');
    removeClasses(['activegreen', 'activeblue'], redItems);
});

/*VANILLA DEFAULT VIEW*/
const vanillaView = document.getElementById('vanillaViewButton');
const vanillaItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

vanillaView.addEventListener('click', () => {
    toggleClasses(vanillaItems, 'activevanilla');
    removeClasses(['activegreen', 'activeblue', 'activered'], vanillaItems);
});


function toggleClasses(elements, className) {
    elements.forEach(item => {
        item.classList.toggle(className);
    });
}

function removeClasses(classList, items) {
    items.forEach(item => {
        classList.forEach(className => {
            item.classList.remove(className);
        });
    });
}


/*GREEN VIEW
const greenView = document.getElementById('greenViewButton');
const greenItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

greenView.addEventListener('click', () => {
    greenItems.forEach(item => {
        item.classList.toggle('activegreen')
    })

})

/*BLUE VIEW
const blueView = document.getElementById('blueViewButton');
const blueItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

blueView.addEventListener('click', () => {
    blueItems.forEach(item => {
        item.classList.toggle('activeblue')
    })
})

/*RED VIEW
const redView = document.getElementById('redViewButton');
const redItems = document.querySelectorAll('.information, .body, .main-card, .navbar-container, .category, .text-mark');

redView.addEventListener('click', () => {
    redItems.forEach(item => {
        item.classList.toggle('activered')
    })
})*/