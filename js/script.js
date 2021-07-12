function moneyConventer(valNum) {
    document.getElementById('output').innerHTML=valNum*74;
}
let reg1=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inp1=document.querySelector('#email');
document.querySelector('#valid-button').onclick=function () {
    if (!validate(reg1, inp1.value)) {
        notValid(inp1);
    } else {
        valid(inp1);
        error=0;
    }

}
function validate(regex1, inp1) {
    return regex1.test(inp1);
}

function notValid(inp1) {
    inp1.classList.add('is-invalid');
}

function valid(inp1) {
    inp1.value="";
    inp1.classList.remove('is-invalid');
}