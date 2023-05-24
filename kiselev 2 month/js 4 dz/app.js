//1 - задание
function maskCard(cardNumber, maskChar = "X") {
    const firstSix = cardNumber.slice(0, 6);
    const lastFour = cardNumber.slice(-4);
    const masked = cardNumber.slice(6, -4).replace(/./g, maskChar);
    return `${firstSix}${masked}${lastFour}`;
}

console.log(maskCard("4815154823541789")); // "481515XXXXXX1789"
console.log(maskCard("4815154823541789", "*")); // "481515******1789"
// Данный код содержит функцию maskCard, которая принимает два параметра: cardNumber -
// номер банковской карты, который нужно замаскировать, и maskChar - символ, который будет
// использоваться для замены скрытых символов. Значение по умолчанию для maskChar равно "X".
// Функция maskCard использует метод slice для получения первых 6 символов (firstSix) и
// последних 4 символов (lastFour) из cardNumber. Затем она использует метод slice и регулярное
// выражение /./g (которое соответствует любому символу в строке) для замены всех символов между
// первыми 6 и последними 4 символами на символ маскировки (maskChar). Полученная замаскированная
// строка сохраняется в переменную masked.
// Наконец, функция maskCard возвращает новую строку, которая содержит первые 6 символов (firstSix),
// замаскированные символы (masked) и последние 4 символа (lastFour), объединенные вместе при помощи
// оператора шаблонной строки.
// Первый вызов maskCard("4815154823541789") возвращает "481515XXXXXX1789", так как символ маскировки
// по умолчанию равен "X". Второй вызов maskCard("4815154823541789", "*") возвращает "481515*****1789",
// так как символ маскировки задан явно как "".

//.replace() - это метод JavaScript, который применяется к строке и позволяет заменить вхождения
// одной подстроки на другую.
// В данном случае, выражение /./g является регулярным выражением, которое соответствует
// любому символу в строке. Здесь . - это метасимвол регулярного выражения, который соответствует
// любому одиночному символу в строке, а флаг g указывает, что замена должна производиться для всех совпадений.
// Таким образом, выражение .replace(/./g, maskChar) в данном коде заменяет каждый символ между первыми 6 и
// последними 4 символами в строке на символ маскировки (maskChar).

//2-задание

function capitalizeString(stasdfhr) {
    return stasdfhr.charAt(0).toUpperCase() + stasdfhr.slice(1).toLowerCase();
}

console.log(capitalizeString("ЕВГЕНИЙ")); // "Евгений"
console.log(capitalizeString("иВАНОВ")); // "Иванов"

// Эта функция сначала преобразует первую букву строки в заглавную
// с помощью метода toUpperCase(). Затем она преобразует остальные
// буквы строки в строчные с помощью метода toLowerCase(), используя
// метод slice() для получения подстроки, начиная с первого символа
// строки (индекс 0) и до конца строки. Конкатенация заглавной первой
// буквы и строчных остальных букв возвращает капитализированную строку.


//3-задание
function depersonalize(fullName) {
    // Разбиваем полное имя на массив имени и фамилии
    const nameParts = fullName.split(' ');

    // Если в имени всего одна часть, то возвращаем её без изменений
    if (nameParts.length === 1) {
        return nameParts[0];
    }

    // Обрабатываем фамилию
    const lastName = nameParts[nameParts.length - 1];
    const processedLastName = `${lastName[0]}${'_'.repeat(lastName.length - 2)}${lastName[lastName.length - 1]}`;

    // Обрабатываем остальные части имени
    const otherNames = nameParts.slice(0, nameParts.length - 1);
    const processedOtherNames = otherNames.map((name) => `${name[0]}${'_'.repeat(name.length - 2)}${name[name.length - 1]}`);

    // Объединяем все обработанные части имени и возвращаем результат
    return [...processedOtherNames, processedLastName].join(' ');
}

console.log(depersonalize("Киселев Евгений Дмитриевич")); // "К_____в Е_____й Д________ч"
console.log(depersonalize("Сидоров Вова")); // "С_____в В__а"
// Этот код представляет собой реализацию функции depersonalize, которая принимает
// на вход строку fullName с полным именем человека и возвращает строку с обезличенным именем, в котором
// все символы, кроме первого и последнего в каждом слове, заменены на символ подчеркивания.
//
// Функция начинается с разбиения входной строки на массив, состоящий из имени и фамилии, используя метод
// split с разделителем " ". Затем она проверяет, является ли имя одночастным, и если это так, возвращает его без изменений.
//
// Далее функция обрабатывает фамилию, беря последнюю часть имени и заменяя все символы кроме первого и последнего
// на символ подчеркивания. Затем она обрабатывает все остальные части имени, применяя к каждой ту же логику замены
// символов. В конце функция объединяет все обработанные части имени в новую строку с помощью метода join и возвращает её.
//
// Примеры использования функции с разными входными данными показывают, как она работает в действии, заменяя символы в
// каждом слове, кроме первого и последнего, на символ подчеркивания.