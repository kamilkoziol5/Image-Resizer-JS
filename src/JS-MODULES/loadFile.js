let previewImg;

export function getPreviewImg() {
	return previewImg;
}

export default function loadFile(e, box, widthInput, heightInput) {
	return new Promise(resolve => {
		previewImg = box.querySelector('img');
		const file = e.target.files[0];
		if (!file) return;

		previewImg.src = URL.createObjectURL(file);
		previewImg.addEventListener('load', () => {
			widthInput.value = previewImg.naturalWidth;
			heightInput.value = previewImg.naturalHeight;
			const ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
			document.querySelector('.container').classList.add('active');

			resolve(ogImageRatio);
		});
	});
}
