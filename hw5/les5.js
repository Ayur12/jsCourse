function createBoard() {
    const container = document.getElementById('container');
    let table = document.createElement('table');
    let changeColor = true;
    let figureB = ['<img src="img/rb.svg" alt="">', '<img src="img/horseB.svg" alt="">', '<img src="img/slonB.svg" alt="">', '<img src="img/qb.svg" alt="">', '<img src="img/kingB.svg" alt="">', '<img src="img/slonB.svg" alt="">', '<img src="img/horseB.svg" alt="">', '<img src="img/rb.svg" alt="">']
    let pewkaB = '<img src="img/pewkaB.svg">';
    let figureW = ['<img src="img/rw.svg" alt="">', '<img src="img/horseW.svg" alt="">', '<img src="img/slonW.svg" alt="">', '<img src="img/qw.svg" alt="">', '<img src="img/kingW.svg" alt="">', '<img src="img/slonW.svg" alt="">', '<img src="img/horseW.svg" alt="">', '<img src="img/rw.svg" alt="">'];
    let pewkaW = '<img src="img/pewkaW.svg">';
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let th = document.createElement('th')
        th.innerHTML = 8 - i;
        tr.appendChild(th);
        for (let j = 0; j < 8; j++) {
            if (j == 0) {
                changeColor = !changeColor;
            }
            let td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '50px';
            if (i == 0) {
                td.innerHTML = figureB[j]
            }
            else if (i == 1) {
                td.innerHTML = pewkaB;
            }
            else if (i == 6) {
                td.innerHTML = pewkaW;
            }
            else if (i == 7) {
                td.innerHTML = figureW[j]
            };

            tr.appendChild(td);
            if (changeColor) {
                td.style.background = 'grey';
            } else {
                td.style.background = 'white';
            }
            changeColor = !changeColor;
        };
        table.appendChild(tr);
    };
    let arrWords = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let words = document.createElement('tr')
    for (let k = 0; k < 9; k++) {
        let th = document.createElement('th');
        th.innerHTML = arrWords[k];
        words.appendChild(th);
    }
    table.appendChild(words);
    container.appendChild(table);
};




