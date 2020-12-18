var sortCharacters = function (text) {
    return text.split('').sort().join('');
}

console.log(sortCharacters('hello')); // 'ehllo'
console.log(sortCharacters('truncate')); // 'acenrttu'
console.log(sortCharacters('developer')); // 'deeeloprv'