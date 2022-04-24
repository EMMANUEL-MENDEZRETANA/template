$ = id => document.getElementById(id);
$$ = selectors => document.querySelectorAll(selectors);

const updateActiveClass = id => {
    $(id).addEventListener('click', event => {
        if (event.target.classList.contains('nav-link')) {
            $$(`#${id} .nav-item .nav-link`).forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        }
    });
}

updateActiveClass('menuNavbar');
