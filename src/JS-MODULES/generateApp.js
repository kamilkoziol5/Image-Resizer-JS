export default function generateApp() {
	const app = document.querySelector('#app');
	const div = document.createElement('div');
	div.classList.add('container');
	div.innerHTML = `
    	<div class="upload-box">
				<input type="file" accept="image/*" hidden />
					<img src="images/upload.png" alt="" />
					<p>Browse Files to Upload</p>
				</div>
				<div class="content">
					<div class="row-sizes">
						<div class="column width">
							<label for="width-input">Width</label>
							<input type="number" id="width-input" />
						</div>
						<div class="column height">
							<label for="height-input">Height</label>
							<input type="number" id="height-input" />
						</div>
					</div>
					<div class="row-checkboxes">
						<div class="column ratio">
							<label>
								<input id="ratio-input" type="checkbox" checked/>
								<span class="checkmark"></span>
								Look aspect ratio
							</label>
						</div>
						<div class="column quality">
							<label>
								<input id="quality-input" type="checkbox" />
								<span class="checkmark"></span>
								Reduce quality
							</label>
						</div>
					</div>

					<button class="download-btn">Download Image</button>
				</div>
    `;

	app.append(div);
}
