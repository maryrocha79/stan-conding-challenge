import React, { Component } from 'react';
import Title from './Title';
import data from './feed/sample.json';
import genericImage from './assets/placeholder.png';
import formatData from './formatData';
import { Link } from 'react-router-dom';

class TitleList extends Component {
  state = {
    loaddingMessage: '....Loadding'
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loadding: false }), 1500);
  }
  render() {
    let menu = ['Popular Series', 'Popular Movies'];
    if (this.props.type === 'menu') {
      let URL = genericImage;
      return (
        <div className="row justify-content-md-center">
          <Link to="./movie">
            <Title title={menu[0]} image={URL} />
          </Link>
          <Link to="./series">
            <Title title={menu[1]} image={URL} />
          </Link>
        </div>
      );
    } else {
      let flicks = formatData(data, this.props.type);
      flicks = flicks.map(t => (
        <Title title={t.title} image={t.images['Poster Art'].url} />
      ));
      return <div className="row justify-content-md-center">{flicks}</div>;
    }
  }
}
export default TitleList;
