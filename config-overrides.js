const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    // 配置主题 https://ant.design/docs/react/use-with-create-react-app-cn
    javascriptEnabled: true,
    // modifyVars: {'@primary-color': '#1DA57A'},
  }),
);
