const links = document.querySelectorAll('a');
links[0].addEventListener('click', changeLink0);
links[1].addEventListener('click', changeLink1);

function changeLink0() {
  links[0].classList.add('hover-link1');
  
}
function changeLink1() {
  links[1].classList.add('hover-link2');
}