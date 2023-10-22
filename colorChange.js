//Add event listener is required here at first. because it gives extra benifits of event propogation


// let x = document.getElementsByClassName('button')
// console.log(x);
const buttons = document.querySelectorAll('.button')
// alert(buttons);

buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
        console.log(event.type+"  "+event.target+" "+event.eventPhase);
        document.body.style.backgroundColor = event.target.id
    });
});