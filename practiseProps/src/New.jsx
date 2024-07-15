
function data(props){
    const btn = document.getElementById('btn');
    const heading = document.getElementById('heading');
    const input = document.getElementById('input');

    btn.addEventListener('click', ()=>{
        heading.textContent = input.ariaValueMax;
    })
}