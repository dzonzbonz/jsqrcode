const webpack = require('webpack')

module.exports = (cfg) => {
    const outputDir = cfg.destination ? cfg.destination : '/public/dist';
    const outputFile = cfg.output ? cfg.output : 'app';
    const externals = cfg.externals ? cfg.externals : {};
    const library =  cfg.library ? cfg.library : {};

    const plugins = [
    ];

    return {
        entry: (cfg.entry ? cfg.entry : './index') + ".js",
        output: {
            filename: outputFile + (cfg.isMinimized ? '.min' : '') + '.js',
            path: __dirname + outputDir,
            library: library.name,
            libraryTarget: library.target,
            // libraryExport: 'umd'
        },
        devtool: (cfg.isMinimized ? false : 'source-map'),
        module: {
            rules: []
        },
        plugins: plugins,
        externals: externals
    };
};