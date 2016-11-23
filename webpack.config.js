module.exports = {
    entry: './main.js', // this is the path to your main JS file
    module: { loaders: [
        // { test: /\.jpg$/, loader: "file-loader" },
        { test: /\.html$/, loader: 'html-loader?attrs=false' }
        // { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]},
    output: {
        path: './bin', // path to where you want the built file
        filename: 'bundle.js', // name you want of built file
    }
};
