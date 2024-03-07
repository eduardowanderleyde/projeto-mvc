const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

// Adicione esta linha para importar o Bootstrap
environment.plugins.append('Provide', new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', Popper: ['popper.js', 'default'] }));

module.exports = environment;
