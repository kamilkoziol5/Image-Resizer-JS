(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(){const i=document.querySelector("#app"),n=document.createElement("div");n.classList.add("container"),n.innerHTML=`
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
    `,i.append(n)}let a;function s(){return a}function p(i,n,r,o){return new Promise(e=>{a=n.querySelector("img");const t=i.target.files[0];t&&(a.src=URL.createObjectURL(t),a.addEventListener("load",()=>{r.value=a.naturalWidth,o.value=a.naturalHeight;const c=a.naturalWidth/a.naturalHeight;document.querySelector(".container").classList.add("active"),e(c)}))})}function l(i,n){const r=document.querySelector("#width-input"),o=document.querySelector("#height-input");if(document.querySelector("#ratio-input").checked){if(n==="height"){const t=parseFloat(r.value);if(isNaN(t))return;const c=t/i;o.value=Math.round(c)}else if(n==="width"){const t=parseFloat(o.value);if(isNaN(t))return;const c=t*i;r.value=Math.round(c)}}}function h(i,n,r){const o=s(),e=document.createElement("canvas"),t=document.createElement("a"),c=e.getContext("2d"),u=r.checked?.7:1;o&&(e.width=i,e.height=n,c.drawImage(o,0,0,e.width,e.height),t.href=e.toDataURL("image/jpeg",u),t.download=new Date().getTime(),t.click())}function m(){let i;const n=document.querySelector(".upload-box"),r=n.querySelector("input"),o=document.querySelector("#width-input"),e=document.querySelector("#height-input"),t=document.querySelector(".download-btn"),c=document.querySelector("#quality-input");n.addEventListener("click",()=>{r.click()}),r.addEventListener("change",async u=>{i=await p(u,n,o,e)}),o.addEventListener("keyup",()=>{i&&l(i,"height")}),e.addEventListener("keyup",()=>{i&&l(i,"width")}),t.addEventListener("click",()=>{h(o.value,e.value,c)})}d();m();
