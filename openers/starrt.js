fetch("https://cdn.jsdelivr.net/gh/ltorl/dancing-bunny@main/public/v2.html")
    .then(response => response.text())
    .then(text => { 
        const newWin = window.open("about:blank", "_blank");
        if (newWin) { 
            newWin.document.open(); 
            newWin.document.write(text); 
            newWin.document.close(); 

            setTimeout(() => {
                const existingIcons = doc.querySelectorAll('link[rel~=\'icon\']');
                existingIcons.forEach(oldIcon => {
                    const newIcon = oldIcon.cloneNode(true);
                    oldIcon.remove();
                    doc.head.appendChild(newIcon);
                });
            }, 51);
        } 
    });
