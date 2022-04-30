$ = id => document.getElementById(id);
$$ = selectors => document.querySelectorAll(selectors);

const observeActiveClass = element => {
	return new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					$$(`#menuNavbar .nav-item .nav-link`).forEach(link => {
						link.classList.toggle('active', link.getAttribute('href') == `#${element}`);
					});
				}
			});
		},
		{ threshold: window.innerWidth > 768 ? 0.35 : 0.15 },
	).observe($(element));
};

const updateActiveClass = id => {
	$(id).addEventListener('click', event => {
		if (event.target.classList.contains('nav-link')) {
			$$(`#${id} .nav-item .nav-link`).forEach(link => link.classList.remove('active'));
			event.target.classList.add('active');
		}
	});
};

observeActiveClass('home');
observeActiveClass('services');
observeActiveClass('portfolio');

updateActiveClass('portfolioNavbar');
