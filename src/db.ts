//create userModes and schemas here
import {model, Schema, Types} from "mongoose";
import { ref } from "node:process";
import { string } from "zod";



const UserSchema = new Schema({ 
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});


const contentTypes = ['image', 'video', 'article', 'audio']; //type of content
const ContentSchema = new Schema({ //schema for content
    link: {type: String, unique: true, required: true},
    type: {type: String, enum: contentTypes, required: true},
    title: {type: String, required: true},
    tags: {type: string, ref: 'Tag'},
    userId: {type: Types.ObjectId, ref: 'User', required: true}
})

const TagsSchema = new Schema({ //tags
    title: {type: String, required: true, unique: true}
})

const LinkSchema = new Schema({ //publically shared link
    hash:{type: String, required: true},
    userid: {type: Types.ObjectId, ref: 'User', required: true}
})

//creating models out of schema to call funcitonality on them.
const UserModel = model("users", UserSchema);
const ContentModel = model("content", ContentSchema);
const TagsModel = model("tags", TagsSchema);
const LinkModel = model("links", LinkSchema);

//exporting
export{
    UserModel, ContentModel, TagsModel, LinkModel
}