const Level1Path = {
    ADMIN: "/mp-admin",
    LOGIN: "/mp-login",
}

const Level2Path = {
    ARTICLE: {
        DEFAULT: `${Level1Path.ADMIN}/articles`,
    }
}

const Level3Path = {
    ARTICLE: {
        ...Level2Path.ARTICLE,
        ADD: `${Level2Path.ARTICLE.DEFAULT}/new-article`,
        CATEGORIES: `${Level2Path.ARTICLE.DEFAULT}/categories`,
        TAGS: `${Level2Path.ARTICLE.DEFAULT}/tags`
    }
}


export const PATH = {
    ...Level1Path,
    ...Level3Path
}