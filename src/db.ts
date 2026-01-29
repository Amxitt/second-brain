//create userModes and schemas here
import mongoose, {Schema, Types} from "mongoose";



const userSchema = new mongoose.Schema({ 
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});


const contentTypes = ['image', 'video', 'article', 'audio']; //type of content
const contentSchema = new mongoose.Schema({ //schema for content
    link: {type: String, unique: true, required: true},
    type: {type: String, enum: contentTypes, required: true},
    title: {type: String, required: true},
    tags: {type: Types.ObjectId, ref: 'Tag'},
    userId: {type: Types.ObjectId, ref: 'User', required: true}
})

const tagsSchema = new mongoose.Schema({ //tags
    title: {type: String, required: true, unique: true}
})

const linkSchema = new mongoose.Schema({ //publically shared link
    hash:{type: String, required: true},
    userid: {type: Types.ObjectId, required: true}
})

//creating models out of schema to call funcitonality on them.
const userModel = mongoose.model("users", userSchema);
const contentModel = mongoose.model("content", contentSchema);
const tagsModel = mongoose.model("tags", tagsSchema);
const linkModel = mongoose.model("links", linkSchema);

//exporting
export{
    userModel, contentModel, tagsModel, linkModel
}