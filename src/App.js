import React, { Component } from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        1213
      </ConfigProvider>
    );
  }
}

export default App;
