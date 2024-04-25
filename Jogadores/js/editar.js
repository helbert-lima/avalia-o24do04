function inc_gol(titulo){
    const golsElement = document.getElementById("gols");
    let gols = parseInt(golsElement.textContent);
    gols++;
    golsElement.textContent = gols;
    
    atualizar()
}

function dec_gol(titulo){
    const golsElement = document.getElementById("gols");
    let gols = parseInt(golsElement.textContent);
    if (gols > 0) {
        gols--;
        golsElement.textContent = gols;
    }

    atualizar()
}