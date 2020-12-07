
const   v = document.querySelector('#v'),
        s = document.querySelector('#s'),
        c = document.querySelector('#c'),
        vBlock = document.querySelector('#v-block'),
        sBlock = document.querySelector('#s-block'),
        cBlock = document.querySelector('#c-block'),
        switchBtn = document.querySelectorAll('.switch-btn'),
        leasing = document.querySelectorAll('.leasing'),
        credit = document.querySelectorAll('.credit'),
        creditTable = document.querySelectorAll('#credit-table'),
        leasingTable = document.querySelectorAll('#leasing-table'),
        buttonOffer = document.querySelectorAll('#offer'),
        modalOffer = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close'),
        phone = document.querySelector('#phone')


	


modalClose.addEventListener('click', () => {
    modalOffer.classList.add('hide')
})

console.log(document);

buttonOffer.forEach(buttonOffer => {
    buttonOffer.addEventListener('click', () => {
        modalOffer.classList.remove('hide')
    })
})


switchBtn.forEach(switchBtns => {
    switchBtns.addEventListener('click', () => {
        switchBtns.classList.toggle('switch-on');
        credit.forEach(credit => {
            if(credit.classList.contains('active')) {
                credit.classList.remove('active')
            } else {
                credit.classList.add('active')
            }
        })
        leasing.forEach(leasing => {
            if(leasing.classList.contains('active')) {
                leasing.classList.remove('active')
            } else {
                leasing.classList.add('active')
            }
        })
        creditTable.forEach(creditTable => {
            if(creditTable.classList.contains('active-2')) {
                creditTable.classList.remove('active-2')
            } else {
                creditTable.classList.add('active-2')
            }
        })
        leasingTable.forEach(leasingTable => {
            if(leasingTable.classList.contains('active-2')) {
                leasingTable.classList.remove('active-2')
            } else {
                leasingTable.classList.add('active-2')
            }
        })
    })
})

v.addEventListener('click', () => {
    v.classList.add('active')
    vBlock.classList.add('active')
    if(v.classList.contains('active')) {
        s.classList.remove('active')
        c.classList.remove('active')
    }
    if(vBlock.classList.contains('active')) {
        sBlock.classList.remove('active')
        cBlock.classList.remove('active')
    }
})

s.addEventListener('click', () => {
    s.classList.add('active')
    sBlock.classList.add('active')
    if(sBlock.classList.contains('active')) {
        vBlock.classList.remove('active')
        cBlock.classList.remove('active')
    }
    if(s.classList.contains('active')) {
        v.classList.remove('active')
        c.classList.remove('active')
    }
})

c.addEventListener('click', () => {
    c.classList.add('active')
    cBlock.classList.add('active')
    if(cBlock.classList.contains('active')) {
        vBlock.classList.remove('active')
        sBlock.classList.remove('active')
    }
    if(c.classList.contains('active')) {
        v.classList.remove('active')
        s.classList.remove('active')
    }
})

$(document).ready(function(){
    $(".slide-one").owlCarousel({
            loop: true, 
            margin: 15,
            dots: false,
            autoWidth: true,
            autoplay: true, 
            smartSpeed: 5000, 
            autoplayTimeout: 4000,
            items: 3
    });
    $(".slide-two").owlCarousel({
            loop: true, 
            margin: 10,
            dots: false,
            autoplay: true, 
            smartSpeed: 5000, 
            autoplayTimeout: 5000, 
            items: 1
    });
});