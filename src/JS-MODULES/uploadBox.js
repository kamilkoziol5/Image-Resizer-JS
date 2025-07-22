import loadFile from './loadFile';
import changeSize from './changeSize';
import downloadImage from './downloadImage';

export default function uploadBox() {
	let ogImageRatio;
	const box = document.querySelector('.upload-box');
	const fileInput = box.querySelector('input');
	const widthInput = document.querySelector('#width-input');
	const heightInput = document.querySelector('#height-input');
	const downloadBtn = document.querySelector('.download-btn');
	const qualityInput = document.querySelector('#quality-input');

	box.addEventListener('click', () => {
		fileInput.click();
	});

	fileInput.addEventListener('change', async e => {
		ogImageRatio = await loadFile(e, box, widthInput, heightInput);
	});

	widthInput.addEventListener('keyup', () => {
		if (!ogImageRatio) return;
		changeSize(ogImageRatio, 'height');
	});

	heightInput.addEventListener('keyup', () => {
		if (!ogImageRatio) return;
		changeSize(ogImageRatio, 'width');
	});

	downloadBtn.addEventListener('click', () => {
		downloadImage(widthInput.value, heightInput.value, qualityInput);
	});
}
