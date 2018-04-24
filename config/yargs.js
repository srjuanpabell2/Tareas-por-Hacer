const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar la tarea por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}