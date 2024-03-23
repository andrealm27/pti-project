const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);

  return mergeConfig(await getDefaultConfig(__dirname), {
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'web.js', 'js', 'json'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  });
})();