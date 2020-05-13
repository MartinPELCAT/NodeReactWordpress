const Level1Path = {
    ADMIN: "/mp-admin",
    LOGIN: "/mp-login",
}

const Level2Path = {
    DASHBOARD: {
        DEFAULT: `${Level1Path.ADMIN}/dashboard`,
    },
    ARTICLE: {
        DEFAULT: `${Level1Path.ADMIN}/articles`,
    },
    PAGES: {
        DEFAULT: `${Level1Path.ADMIN}/pages`,
    },
    LINKS: {
        DEFAULT: `${Level1Path.ADMIN}/links`,
    }
}

const Level3Path = {
    DASHBOARD: {
        ...Level2Path.DASHBOARD
    },
    ARTICLE: {
        ...Level2Path.ARTICLE,
        ADD: `${Level2Path.ARTICLE.DEFAULT}/new-article`,
        CATEGORIES: `${Level2Path.ARTICLE.DEFAULT}/categories`,
        TAGS: `${Level2Path.ARTICLE.DEFAULT}/tags`
    },
    PAGES: {
        ...Level2Path.PAGES,
        ADD: `${Level2Path.PAGES.DEFAULT}/new-page`,
    },
    LINKS: {
        ...Level2Path.LINKS,
        ADD: `${Level2Path.LINKS.DEFAULT}/new-link`,
        CATEGORIES: `${Level2Path.LINKS.DEFAULT}/categories`
    }
}


export const PATH = {
    ...Level1Path,
    ...Level3Path
}