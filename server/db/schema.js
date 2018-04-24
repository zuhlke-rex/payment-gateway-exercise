const mongoose = require('mongoose'),
      Schema = mongoose.Schema,

      customerSchema = new Schema({
        name:        String,
        phoneNumber: String,
        payments: [{
          refCode: Number,
          currency: String,
          price: Number,
          cardHolderName: String,
          cardNumber: Number,
          // Expiration & Security Code should be hashes
          cardExpiration: { month: Number, year: Number },
          cvv: Number
        }]
      });
