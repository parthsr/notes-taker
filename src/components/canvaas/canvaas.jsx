import React from 'react';
import PropTypes from 'prop-types';
import './canvaas.css';


class Canvaas extends React.Component {
  constructor(props) {
    Canvaas.propTypes = {
      onLengthChange: PropTypes.func.isRequired,
    };
    super(props);
    this.state = {
      limit: false,
    };
  }

  onChangeDisplay(event) {
    this.note = event.target.value;
    if (this.note.length > 119) {
      this.note = this.note.slice(0, 119);
      this.setState({ limit: true });
    } else {
      this.setState({ limit: false });
    }
  }
  render() {
    return (
      <textarea
        value={this.note}
        className={this.state.limit ? 'warning' : ''}
        onChange={(event) => {
          this.onChangeDisplay(event);
          this.props.onLengthChange(event);
        }
      }
      />
    );
  }
}
export default Canvaas;

