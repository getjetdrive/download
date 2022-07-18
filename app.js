if ("ServiceWorker" in navigator){
  navigator.serviceWorker.register("/serviceWorker.js");
}
let installPromptEvent;
		window.addEventListener('beforeinstallprompt', (event) => {
		  installPromptEvent = event;
		});
