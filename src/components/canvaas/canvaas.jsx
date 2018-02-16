import React from 'react';
import PropTypes from 'prop-types';
import './Canvaas.css';

class Canvaas extends React.Component {
  constructor(props) {
    super(props);
    Canvaas.propTypes = {
      realText: PropTypes.string.isRequired,
      limit: PropTypes.number,
      onLengthChange: PropTypes.func,
    };

    Canvaas.defaultProps = {
      limit: false,
      onLengthChange: () => {
      },
    };
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

