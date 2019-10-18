import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
  <tr>
    <th>Name</th>
    <th>Job</th>
  </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button type="button" onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

/* class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
} */
class Table extends Component {
  state = {
    time: '',
  }

  componentDidMount() {
    const data = new Date();
    setTimeout(() => {
      this.setState({ time: data.toLocaleString() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <div>
        <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
        <div>{this.state.time}</div>
      </div>
    );
  }
}

export default Table;
