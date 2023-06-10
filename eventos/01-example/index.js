let left = document.querySelector('.btn');

let rigth = document.querySelector('.box-container');

const hiddenText = () => {
	if (rigth.classList.contains('hiddenBox')) {
		rigth.classList.remove('hiddenBox');
	} else {
		rigth.classList.add('hiddenBox');
	}
};

// rigth.classList.add('showBox');
left.addEventListener('click', hiddenText);
