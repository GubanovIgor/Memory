const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/memory", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    secondName: String,
    email: { type: String }
})

const User = mongoose.model("User", userSchema);
module.exports = {User, userSchema}
