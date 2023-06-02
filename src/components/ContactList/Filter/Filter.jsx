import { Component } from 'react';
import { Label } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  filterdList = () => {};

  render() {
    return (
      <>
        <Label>
          Find contacts by name
          <input
            type="text"
            value={this.props.filter}
            onChange={e => {
              this.props.changeFilter(e);
            }}
          />
        </Label>
      </>
    );
  }
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
