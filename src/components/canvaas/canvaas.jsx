import React from 'react';
import PropTypes from 'prop-types';
import './canvaas.css';


class Canvaas extends React.Component {
  constructor(props) {
    Canvaas.propTypes = {
      onLengthChange: PropTypes.func.isRequired,
    };
    super(props);
  }
  render() {
    return (
      <textarea
        value={this.props.realText}
        className={this.props.limit ? 'warning' : 'noWarning'}
        onChange={(event) => {
          this.props.onLengthChange(event);
        }
      }
      />
    );
  }
}
export default Canvaas;

Canvaas.propTypes = {
  realText: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,

};

