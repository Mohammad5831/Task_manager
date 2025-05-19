const redis = require('redis');

const client = redis.createClient({
    url: 'redis://localhost:6379'
});

client.connect()
.then(() => {
    console.log('connected to redis');
}).catch(console.error
)

module.exports = client;