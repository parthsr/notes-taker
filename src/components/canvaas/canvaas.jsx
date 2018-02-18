import React from 'react';
import PropTypes from 'prop-types';
import './Canvaas.css';

class Canvaas extends React.Component {
  constructor(props) {
    super(props);
    Canvaas.propTypes = {
      realText: PropTypes.string.isRequired,
      limit: PropTypes.bool,
      onLengthChange: PropTypes.func,
      onClick: PropTypes.func,
    };

    Canvaas.defaultProps = {
      limit: false,
      onLengthChange: () => {
      },
      onClick: () => {},
    };
  }
  render() {
    return (
      <textarea
        className={this.props.limit ? 'warning' : 'noWarning'}
        onChange={(event) => {
          this.props.onLengthChange(event);
        }
      }
        onClick={() => { this.props.onClick(); }}
      >{this.props.realText}
      </textarea>
    );
  }
}
export default Canvaas;

