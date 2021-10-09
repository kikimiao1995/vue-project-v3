module.exports = {
    // lintOnSave:false, --> what's this?
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-project-v3/' :
        '/'
}