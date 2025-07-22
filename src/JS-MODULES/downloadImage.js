import { getPreviewImg } from './loadFile.js';

export default function downloadImage(width, height, qualityInput) {
	const previewImage = getPreviewImg();
	const canvas = document.createElement('canvas');
	const a = document.createElement('a');
	const ctx = canvas.getContext('2d');

	const imgQuality = qualityInput.checked ? 0.7 : 1.0;

	if (!previewImage) return;

	canvas.width = width;
	canvas.height = height;

	ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height);
	a.href = canvas.toDataURL('image/jpeg', imgQuality);
	a.download = new Date().getTime();
	a.click();
}
