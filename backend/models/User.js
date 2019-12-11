const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        fullname: { type: String, required: true },
        mail: { type: String, required: true },
        password: { type: String, required: true },
        timezone: { type: String, required: true },
        registration_date: { type: String, required: true},
        number_scan: { type: Number, required: true },
        history: { type: [{}], required: true }
    },
    { collection: 'user' }
);

module.exports = mongoose.model('User', userSchema);