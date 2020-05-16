import { Document, Schema, model } from 'mongoose';

export interface IArticleCategorie extends Document {
    name: string,
    parentCategorie?: IArticleCategorie,
    description?: string,
    inUse: number
}

const ArticleCategorieSchema: Schema = new Schema({
    name: {
        type: String,
        required: false,
        unique: true,
    },
    parentCategorie: {
        type: Schema.Types.ObjectId,
        ref: 'ArticleCategorie',
        required: false,
        default: null
    },
    description: {
        type: String,
        required: false
    },
    inUse: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    versionKey: false
});

ArticleCategorieSchema.pre('remove', () => {
    // TODO: Delete this categories in articles that use it
})

export const ArticleCategorie = model<IArticleCategorie>('ArticleCategorie', ArticleCategorieSchema);