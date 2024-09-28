const Koa = require('koa')
const KoaLogger = require('koa-logger')
const { koaBody } = require('koa-body')
const cors = require('@koa/cors')
const router = require('./routes.js')
const orm = require('./models')


const app = new Koa()

// Abrimos acceso al ORM
app.context.orm = orm


app.use(cors())

// Agregamos el logger que hace un log de cada request
app.use(KoaLogger())

// Agregamos el middleware para parsear el body de las request
app.use(koaBody())

// Koa router (enrutador que posee todas las rutas)
app.use(router.routes())

// lo que next hace es pasar al siguiente middleware
app.use((ctx, next) => {
  ctx.body = 'Body del middleware (request)'
  next()
})

// Empezamos a escuchar en el puerto 3000
// app.listen(3000, () => {
//   console.log('Iniciando app. Escuchando en puerto 3000')
// });

// export default app;
module.exports = app