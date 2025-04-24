const lines = 6;
let result = '';

for (let i = 0; i < lines; i++) {
    result += ' '.repeat(lines - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(result);
