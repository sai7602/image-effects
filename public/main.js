async function init() {
	let rustApp = null;
	try {
		rustApp = await import('../pkg');
	} catch (error) {
		console.log(error);
		return;
	}
	console.log(rustApp);
	const input = document.querySelector('#upload');
	const fileReader = new FileReader();
	fileReader.onloadend = () => {
		const base64 = fileReader.result;
		console.log(input.files[0]);
		console.log(base64);
		let img_data_url = rustApp.grayscale(
			base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, '')
		);
		document.querySelector('#new-img').setAttribute('src', base64);
		document
			.querySelector('#new-img-mod')
			.setAttribute('src', img_data_url);
	};
	input.addEventListener('change', () => {
		fileReader.readAsDataURL(input.files[0]);
	});
}

init();
