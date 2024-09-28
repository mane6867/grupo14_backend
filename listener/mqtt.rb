require 'mqtt'
require 'json'
require 'httparty' 

client = MQTT::Client.connect(
  :host => "broker.iic2173.org",
  :port => 9000,
  :username => "students",
  :password => "iic2173-2024-2-students"
)

client.subscribe('fixtures/info')

client.get do |topic,message|
    # Block is executed for every message received
    parsed_message = JSON.parse(message)

    response = HTTParty.post(
    'http://api-container:3000/fixtures', # Reemplaza 'api_endpoint' con tu ruta
    body: parsed_message,            
    headers: { 'Content-Type' => 'application/json' } # Indicamos que estamos enviando JSON
  )
  puts parsed_message
    
  end