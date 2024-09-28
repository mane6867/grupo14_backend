const mqtt = require('mqtt');
const axios = require('axios');

// Conexión al broker MQTT
const client = mqtt.connect({
  host: 'broker.iic2173.org',
  port: 9000,
  username: 'students',
  password: 'iic2173-2024-2-students'
});

// Suscribirse al topic
client.subscribe('fixtures/info');

// Escuchar los mensajes
client.on('message', async (topic, message) => {
  // Parsear el mensaje recibido
  const parsedMessage = JSON.parse(message.toString());

  try {
    // Hacer la solicitud POST a la API
    const response = await axios.post('http://my-api-container:3000/fixtures', parsedMessage, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('Mensaje recibido:', parsedMessage);
    console.log('Respuesta de la API:', response.data);
  } catch (error) {
    console.error('Error al enviar los datos a la API:', error);
  }
});
