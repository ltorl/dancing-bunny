const newWin = window.open('about:blank', '_blank');
if (newWin) {
	fetch('https://cdn.jsdelivr.net/gh/ltorl/dancing-bunny@latest/public/v2.html')
		.then(response => response.text())
		.then(text => {
			const doc = newWin.document;
			doc.open();
			doc.write(text);
			doc.close();
			setTimeout(() => {
				const existingIcons = doc.querySelectorAll('link[rel=\'icon\']');
				existingIcons.forEach(oldIcon => {
					const newIcon = oldIcon.cloneNode(true);
					oldIcon.remove();
					doc.head.appendChild(newIcon);
				});
			}, 51);
		})
}
