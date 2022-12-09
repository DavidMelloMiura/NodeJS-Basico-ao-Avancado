const path = require('path')

console.log('basename', path.basename('c:\\temp\\arquivo.html'));
console.log('normalize', path.normalize('c:\\temp/dir//subdir/dir/..'));
// .. subiu o nivel do diretorio - então o dir não aparece

// Junta o caminho
console.log('join path:', path.join('/teste', 'teste2', 'teste3', 'dir2', '..'));

// Mostra caminho absoluto do arquivo
console.log('resolve:', path.resolve('03-S4A32-API-Path.js'));

console.log('extension:', path.extname('03-S4A32-API-Path.js'));