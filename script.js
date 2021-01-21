let patern = "abcdefghijklmnopqrstuvwxyz";
//чтобы он мог создавать уникальные строки по заданой длине
//от 1 до 4 включительно

// let start_letter = a
// нужно будет удалить a

function combo(array, arr = [], text = ''){
    for (let i = 0; i < array.length; i++){
        let str = text;
        str += array[i];
        let massive = array.slice();
        massive.splice(i, 1);
        if (!massive.length && !arr.includes(str)){
            arr.push(str);
            return arr;
        } else {
            arr = combo(massive, arr, str);
        }
    }
    return arr;
}

let form = document.querySelector('form');
let input = document.querySelector('input');
let result = document.querySelector('#result');
form.addEventListener('submit', function (e){
    e.preventDefault();

    result.innerHTML = combo(input.value.split('')).join('<br>');
});