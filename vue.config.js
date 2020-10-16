module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '',
        port: 8085, 
        https: true,
        hotOnly: false,
    },
}