import {
	modalProduct,
	catalogList
} from "./elements.js";

import {openModal} from "./openModal.js";
import {renderListProduct} from "./renderListProduct.js";
import {navigationListController} from "./navigationListController.js";

const burger = {
	title: 'Бургер',
	price: 1000,
	weight: 500,
	calories: 1500,
	description: 'Big burger ig burger ig burger ig burger',
	image: 'img/megaburger.jpg',
	ingredients: [
		'bread',
		'meat',
		'cheese',
		'salad',
		'sauce'
	],
}

const closeModal = (event) => {
	if (event.key === 'Escape') {
		modalProduct.classList.remove('modal_open');
		document.removeEventListener('keydown', closeModal)
	}
}

catalogList.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest('.product__detail') || target.closest('.product__image')) {
		openModal(burger);
		document.addEventListener('keydown', closeModal);
	}
})

modalProduct.addEventListener('click', (event) => {
	const target = event.target;

	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
})

const init = () => {
	renderListProduct();
	navigationListController();
}

init();
