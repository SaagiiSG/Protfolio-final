let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .navbarbtn a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar .navbarbtn a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
window.onload = function(){
    const menu_btn = document.querySelector('.hamburgermenubtn');

    mube_btn.addEventlistener('click' , function () {
        menu_btn.ClassList.toggle('is-active');
    });
    
}