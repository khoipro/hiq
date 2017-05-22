module.exports = (ctx) => ({
    plugins: [
        require('postcss-import')(),
        require('postcss-strip-units'),
        require('postcss-cssnext')({
            features: {
                rem: {html: false},
                customProperties: {
                    preserve: ctx.env === 'production' ? false : true
                }
            }
        })
    ]
})