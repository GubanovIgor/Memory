const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/memory", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    surname: String,
    email: { type: String, unique: true }
})

const User = mongoose.model("User", userSchema);
module.exports = {User, userSchema}
