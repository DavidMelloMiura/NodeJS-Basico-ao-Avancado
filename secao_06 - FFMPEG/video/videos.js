const { spawn, exec } = require('child_process')

//node videos ./src
const parent = process.argv[2]

function resize(video, quality) {
    const p = new Promise((resolve, reject)=>{
        const ffmpeg = exec('./ffmpeg/bin/ffmpeg.exe', [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128',
            `${parent}/resultado/${video}-${quality}.mp4`,
        ])
    })
    return p;
}

















// const bat = exec('dir')

// stdio - Mandar informações, Ler informações e se der erro
// bat.stdout.on('data', (data)=>{
//     console.log(`stdout: ${data.toString()}`);
// })

// bat.stderr.on( 'data', (data)=>{
//     console.log(`stderr: ${data}`)
// })


// bat.on('close', (code)=>{
//     console.log(`Processo em segundo plano finalizado com sucesso ${code}`);
// })