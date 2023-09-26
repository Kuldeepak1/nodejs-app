// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/mydb', { useNewUrlParser: true });

// Connect to Redis
const redisClient = redis.createClient({ host: 'redis', port: 6379 });

app.get('/', (req, res) => {
  redisClient.get('counter', (err, count) => {
    if (err) throw err;
    if (!count) {
      count = 1;
    } else {
      count = parseInt(count) + 1;
    }
    redisClient.set('counter', count);
    res.send(`Hello, World! You have visited this page ${count} times.`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
