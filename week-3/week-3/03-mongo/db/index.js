const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('Connection-Url').then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define schemas
const AdminSchema = new mongoose.Schema({
    usrename: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    usrename: String,
    password: String,
    purchasedCourses: [{type:mongoose.Schema.Types.ObjectId,ref:'Course'}]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imagelink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}