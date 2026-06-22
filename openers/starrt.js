fetch("https://cdn.jsdelivr.net/gh/ltorl/dancing-bunny@main/public/v2.html")
    .then(response => response.text())
    .then(text => { 
        const newWin = window.open("about:blank", "_blank");
        if (newWin) { 
            newWin.document.open(); 
            newWin.document.write(text); 
            newWin.document.close(); 
        } 
    });
