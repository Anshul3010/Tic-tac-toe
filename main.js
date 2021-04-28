gameOver = false;
let count = 0;
const ids = ['cm1','cm2','cm3','cm4','cm5','cm6','cm7','cm8','cm9'];
const winningDiv = [['cm1','cm2','cm3'],['cm4','cm5','cm6'],['cm7','cm8','cm9'], ['cm1','cm4','cm7'],['cm2','cm5','cm8'],['cm3','cm6','cm9'],['cm1','cm5','cm9'],['cm3','cm5','cm7']];
function increaseCount(id) {
    let ele = document.getElementById(id);
    if(!ele.innerHTML && !gameOver) {
        if(count%2==0) {
            ele.innerHTML = 'X';
            ele.classList.add('cm-aqua');
        } else {
            ele.innerHTML = 'O';
            ele.classList.add('cm-lightblue');
        }
        checkWinner()
        count++
    }else {
        return;
    }
}

function reset() {
    count=0
    gameOver = false;
    ids.forEach((el)=> {
        document.getElementById(el).innerHTML = '';
        document.getElementById(el).classList = [];
    })
}

function checkWinner() {
    winningDiv.forEach((el)=> {
        if((getElement(el[0])==getElement(el[1]) && getElement(el[1])==getElement(el[2]) && getElement(el[2])=='X') || (getElement(el[0])==getElement(el[1]) && getElement(el[1])==getElement(el[2]) && getElement(el[2])=='O') ){
            if(getElement(el[0]) == 'X'){
                el.forEach((elq)=> {
                    document.getElementById(elq).classList.remove('cm-aqua')
                    document.getElementById(elq).classList.add('cm-win')
                })
                
            }
            if(getElement(el[0]) == 'O'){
                el.forEach((elq)=> {
                    document.getElementById(elq).classList.remove('cm-lightblue')
                    document.getElementById(elq).classList.add('cm-win')

                })
            }
            gameOver =true;
            return;
        }
    })
}

function getElement(id) {
    return document.getElementById(id).innerHTML;
}