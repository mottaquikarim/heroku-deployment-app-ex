const {app,} = require('./app');

app.listen(process.env.PORT || 5001, () => {
    console.log(`listening on port ${process.env.PORT || 5001}`)
})
