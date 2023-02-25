// let  user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${user.name} ${user.surname}`
//     },
//     set fullName(val){
//         let arr = val.split(' ');
//         this.name = arr[0];
//         this.surname = arr[1];
//     }
// }

// console.log(user);

// user.fullName = 'Вася Пупкин';

// console.log(user);

const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        cost: 10000,
        kcall: 400,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        cost: 20500,
        kcall: 500,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        cost: 31900,
        kcall: 700,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
}


const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        cost: 500,
        kcall: 60,
    },
    lettuce: {
        name: 'Салатный лист',
        cost: 300,
        kcall: 20,
    },
    cheese: {
        name: 'Салатный лист',
        cost: 1000,
        kcall: 100,
    },
}


// product.freshCombo.amount = 5;
// console.log(product.freshCombo.sumkcall);

const btn = document.querySelectorAll('.main__product-btn');

console.log(btn);

for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    
    element.addEventListener('click', function (e) {  
        e.preventDefault()
        add(this);
    })
}

function add(button) {  
    // el.getAttribute('name') - Вернет значение атрибута
    // el.setAttribute('name', val) - Добавляет атрибут и значение для него
    // el.hasAttribute('name') - Проверяет наличие арибута
    // el.removeAttribute('name') - Удаляет арибут
    let simbl = button.getAttribute('data-symbol');
    let parent = button.closest('.main__product');
    let id = parent.getAttribute('id')
    
    if(simbl == '+'){
        product[id].amount++;
    }else if(product[id].amount > 0){
        product[id].amount--;
    }
    
    let output = parent.querySelector('.main__product-num');
    let spanPrice = parent.querySelector('.main__product-price span');
    let spanKcall = parent.querySelector('.main__product-kcall');
    
    output.innerHTML = product[id].amount;
    spanPrice.innerHTML = product[id].summ;
    spanKcall.innerHTML = product[id].sumkcall;
    
    console.log(spanPrice);
    
}

let lvl = document.querySelector('.header__timer-extra');

function level() {
    lvl.innerHTML++;

    if(lvl.innerHTML < 40) {
        setTimeout(() =>{level()},30);
    } else if(lvl.innerHTML >= 40 && lvl.innerHTML <= 60) {
        setTimeout(() =>{level()},50);
    } else if(lvl.innerHTML >= 60 && lvl.innerHTML <= 80) {
        setTimeout(() =>{level()},70);
    } else if(lvl.innerHTML >= 80 && lvl.innerHTML <= 90) {
        setTimeout(() =>{level()},90);
    } else if(lvl.innerHTML >= 90 && lvl.innerHTML <= 95) {
        setTimeout(() =>{level()},150);
    } else if(lvl.innerHTML >= 95 && lvl.innerHTML <= 99) {
        setTimeout(() =>{level()},300);
    }
    
}
level()
