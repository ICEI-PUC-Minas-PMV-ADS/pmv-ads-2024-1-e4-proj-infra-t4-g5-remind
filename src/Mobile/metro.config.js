const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    // Adicione 'png' à lista de extensões de ativos
    config.resolver.assetExts.push('png');

    return config;
})();