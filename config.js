var config = {
    sourceFolder: './src',
    distributionFolder: './dist',
    fileSuffix: '.min',
    demoFolder: './demo',
    jsDemoFolder: function(){
        return this.demoFolder + '/js'
    },
    jsSourceFiles: function(){
        return [this.sourceFolder + '/jquery.gcountry.js'];
    },
    jsLibFile: 'gcountry.js'
};

module.exports = config;