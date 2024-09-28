
const app = require('./app')
const db = require('./models')

// para usar variables de entorno importamos dotenv

const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la Base de Datos ha sido exitosa.')
    app.listen(PORT, (err) => {
      if (err) {
        console.error('Ocurrió un error: ', err)
      }
      console.log(`Escuchando en el puerto ${PORT}`)
      return app // empezamos a correr la aplicación con sus middlewares
    })
  })
  .catch((err) => {
    console.error('No se pudo conectar a la Base de Datos: ', err)
  })
