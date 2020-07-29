const mongoose = require('mongoose')

mongoose.connect('mongodb://POS:12345@ds127443.mlab.com:27443/pos',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })