// define your model schema

import mongoose from 'mongoose';

//todo document structure
const todoSchema = mongoose.Schema({
    todo: { type: String, required: true, unique: true }
})
//creating collections with name called todos with todoSchema
const todoCollection = mongoose.model("todos", todoSchema)

export default todoCollection;