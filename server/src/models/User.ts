import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    photoPath?: string;
    token?: string;
}

const UserSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photoPath: { type: String, required: false },
    token: { type: String, required: false },
}, {
    versionKey: false
});

export const User = model<IUser>('User', UserSchema);


