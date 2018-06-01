const common = require('./webpack.common')({
    isMinimized: true,
    entry: './index',
    output: 'jsqrcode',
    
    destination: "/dist",
    provide: {
        
    },
    externals: {
        
    },
    // library: {
    //     name: "QRCodeDecoder",
    //     target: "var"
    // }
});

module.exports = common;