import { Document, Schema, model } from 'mongoose';
import { IArticleCategorie } from './ArticleCategorie';

export interface IArticle extends Document {
    title: string,
    author: string,
    categories?: Array<IArticleCategorie>,
    tags?: any,
    created_at: Date,
    updated_at: Date
}

const ArticleSchema: Schema = new Schema({
    title: {
        type: String,
        required: false,
        unique: true,
    },
    author: {
        type: String,
        required: true
    },
    categories: [{ type: Schema.Types.ObjectId, ref: 'ArticleCategorie', required: false }],
    tags: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    },
    updated_at: {
        type: Date,
        required: true,
        default: new Date()
    },
}, {
    versionKey: false
});

export const Article = model<IArticle>('Article', ArticleSchema);