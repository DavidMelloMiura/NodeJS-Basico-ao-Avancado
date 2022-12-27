const { spawn, exec } = require('child_process')

function resize(video, quality) {
    const p = new Promise((resolve, reject)=>{
        const ffmpeg = exec('./ffmpeg/bin/ffmpeg.exe', [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v'
        ])
    })
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