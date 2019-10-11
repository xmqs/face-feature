import React, { Component } from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Table from './components/User/Table/Table';
import Form from './components/User/Form/Form';

class App extends Component {
  state = {
    characters: [{
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }],
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => i !== index),
    });
  }

  handleSubmit = (character) => {
    this.setState((prevState) => ({
      // not use setState({value: this.state.value + 1}) // 2
      //         setState({value: this.state.value + 1}) // 2, not 3
      // TODO focus https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
      characters: [...prevState.characters, character],
    }));
  }

  render() {
    return (
      <ConfigProvider locale={zhCN}>
        1213
        <Form handleSubmit={this.handleSubmit} />
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </ConfigProvider>
    );
  }
}


export default App;
