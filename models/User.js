const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/memory", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: String,
    secondname: String,
    email: { type: String, unique: true }
})

const User = mongoose.model("User", userSchema);
module.exports = {User, userSchema}
// module.exports = User;
