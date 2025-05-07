import { model, Schema, Types } from "mongoose";
import { EChannelStatus, IChannel } from "./channel.interface";
import { z } from "zod";

const ChannelCountSchema =  new Schema (
    {
        videos:{
            type:Number,
            min:0,
            default:0
        },
        subscribers: {
            type:Number,
            min:0,
            default:0
        },
        views: {
            type:Number,
            min:0,
            default:0
        }
      }
)

const ChannelModelSchema  =  new Schema<IChannel>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        unique:true
    },
    name:{
        type:String,
        trim:true,
        minlength:1,
        maxlength:20
    },
    uniqueName:{
        type:String,
        trim:true,
        minlength:1,
        unique:true,
        required:true
    },
    profilePhotoUrl:{
        type:String,
        trim:true,
        minlength:1,
        default:null
    },
    profileCoverPhotoUrl:{
        type:String,
        trim:true,
        minlength:1,
        default:null
    },
    about:{
        type:String,
        trim:true,
        min:1,
        maxlength:2000,
        default:null
    },
    count:ChannelCountSchema,
    status:{
        type:String,
        enum:Object.values(EChannelStatus)
    }
},{
    timestamps:true
})


const Channel =  model<IChannel>("Channel",ChannelModelSchema)


export default Channel