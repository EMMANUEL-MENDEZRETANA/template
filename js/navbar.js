$ = id => document.getElementById(id);
$$ = selectors => document.querySelectorAll(selectors);

const observeActiveClass = element => {
	const callback = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				$$(`#menuNavbar .nav-item .nav-link`).forEach(link => {
					if (link.getAttribute('href') == `#${element}`) {
						link.classList.add('active');
					} else {
						link.classList.remove('active');
					}
				});
			}
		});
	};
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2,
	};

	return new IntersectionObserver(callback, options).observe($(element));
};

const updateActiveClass = id => {
	$(id).addEventListener('click', event => {
		if (event.target.classList.contains('nav-link')) {
			$$(`#${id} .nav-item .nav-link`).forEach(link =>
				link.classList.remove('active'),
			);
			event.target.classList.add('active');
		}
	});
};

observeActiveClass('home');
observeActiveClass('services');
observeActiveClass('portfolio');

updateActiveClass('portfolioNavbar');
