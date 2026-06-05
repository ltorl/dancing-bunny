fetch("https://raw.githubusercontent.com/ltorl/dancing-bunny/refs/heads/main/v2.html")
    .then(response => response.text())
    .then(text => { 
        const newWin = window.open("about:blank", "_blank");
        if (newWin) { 
            newWin.document.open(); 
            newWin.document.write(text); 
            newWin.document.close(); 
        } 
    });
