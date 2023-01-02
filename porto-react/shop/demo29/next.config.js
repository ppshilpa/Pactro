const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: '/react/porto/demo29',
    trailingSlash: isProduction
} 