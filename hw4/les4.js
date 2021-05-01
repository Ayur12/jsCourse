/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на
    выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245
    мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
    необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function numberToObject() {

    let number = prompt('Введите число от 0 до 999');
    while (!(number > 0 && number <= 999)) {
        number = prompt('Введите число от 0 до 999')
    };
    
    let arrNumber = [];
    while (number > 0) {
        arrNumber.push(number % 10);
        number = parseInt(number / 10);
    }

    let objNumber = {
        'единицы': arrNumber[0],
        'десятки': arrNumber[1],
        'сотни': arrNumber[2]
    }
    return objNumber;

}
numberToObject();


/* 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)*/
const config = {
    rowsCount: 10,
    colsCount: 10,
};

const player = {
    x: 0,
    y: 0,
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};

let renderer = {
    map: "",
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    clear() {
        console.clear();
        this.map = "";
    }
};

let mover = {
    getDirection() {
        const availableDirections = ['w', 'a', 's', 'd']; // сюда добавить n

        while (true) {
            let direction = prompt('Введите букву (w, a, s или d), куда вы хотите переместиться, "Отмена" для выхода.'); // n - для просмотра номера хода
            if (!direction) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одну из букв w, a, s или d.');
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 's':
                nextPosition.y++;
                break;
            case 'a':
                nextPosition.x--;
                break;
            case 'd':
                nextPosition.x++;
                break;
            case 'w':
                nextPosition.y--;
                break;
        }

        return nextPosition;
    },
};

let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();

        }
    },

    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};
game.init();

/* На базе игры, созданной на уроке, реализовать игру "Кто хочет стать миллионером".*/

function startGame() {
    alert("Добро пожаловать в игру «Кто хочет стать миллионером?»");

    const questions = [
        '1. Какое насекомое вызвало короткое замыкание в ранней версии вычислительной машины, тем самым породив термин «компьютерный баг» («баг» в переводе с англ. «насекомое»)?',
        '2. Из каких плодов можно получить копру?',
        '3. Что у болтливого человека без костей, если верить поговорке?',
        '4. Под каким названием известна единица с последующими ста нулями?',
        '5. Какой химический элемент составляет более половины массы тела человека?',
        '6. Что означает гавайское слово «вики», которое дало название интернет-энциклопедии «Википедия»?',
        '7. С помощью какого оружия библейский Давид поразил Голиафа?',
        '8. Какой газ не является инертным?',
        '9. Кто, как считается, подсказал Николаю Васильевичу Гоголю идею «Ревизора»?',
        '10. Сколько кубиков в кубике Рубика?'];

    const score = [1000, 3000, 5000, 'первую несгораемую сумму 10000', 20000, 60000, 80000,
        'вторую несгораемую сумму 100000', 500000, 1000000];

    const answers = [['A: Мотылек B: Таракан C: Муха  D: Пчела '], ['A: Ананас B: Кокос C: Вишня D: Абрикос '], ['A: ухо B: язык C: нос D: руки'],
    ['A: Гугол B: Мегатрон C: Гигабит D: Наномоль'], ['A: Углерод B: Кальций C: Кислород D: Железо'],
    ['A:  Простой B: Быстрый  C: Изученный D: Маленький'], ['A: лук B: копье C: топор D: праща'],
    ['A: криптон B: радон C: пропан D: гелий'], ['A: Александр Сергеевич Пушкин B: Владимир Иванович Даль C: Иван Андреевич Крылов D: Александр Сергеевич Грибоедов'],
    ['A: 22 B: 24 C: 26 D: 28']];

    const correct = ['A', 'B', 'B', 'A', 'C', 'B', 'D', 'C', 'A', 'C'];

    let a = 0;
    let b = 1;
    for (let i = 0; i < 10; i++) {
        let answer = prompt('Вопрос ' + b + ': ' + questions[i] + '\r\n' + 'Варианты ответа: \r\n' + answers[0] + '\r\n' + 'Ваш ответ?');
        if (answer.toUpperCase() == correct[0]) {
            alert('Поздравляю вы выиграли ' + score[a] + ' рублей');
            a++;
            b++;
            answers.shift(0);
            correct.shift(0);
        } else if (score[a] >= 100000) {
            alert('Ответ неверный. Вы выиграли ' + score[7] + ' рублей');
            break;
        } else if (score[a] >= 10000) {
            alert('Ответ неверный. Вы выиграли ' + score[3] + ' рублей');
            break;
        } else {
            alert('Ответ неверный');
            break;
        }
    }
};
startGame();