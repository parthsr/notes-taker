import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Board.css';
import { saveNote, editNote, newNote, getNote, putNote } from '../../redux/actions/actions';
import SaveComponent from '../SaveComponent/SaveComponents';
import CanvaasComponent from '../CanvaasComponent/CanvaasComponent';
import FirstComponent from '../FirstComponent/FirstComponent';

class Board extends React.Component {
  constructor(props) {
    super(props);
    Board.propTypes = {
      totalContent: PropTypes.instanceOf({ }),
      onNewNote: PropTypes.func.isRequired,
      onHistoryClick: PropTypes.func.isRequired,
      onSaveNote: PropTypes.func.isRequired,
      noteid: PropTypes.number.isRequired,
    };
    Board.defaultProps = {
      totalContent: [],
    };
  }
  state = {
    title: '',
    content: '',
  }
  componentDidMount = () => {
    axios.get('/notes').then((notes) => {
      this.props.getData(notes.data);
      console.log(notes.data);
    }).catch(console.log);
  }
  onTopicChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  onLengthChange = (note) => {
    this.setState({
      content: note,
    });
  }

  onSave = () => {
    const totalContents = this.props.totalContent;
    totalContents[this.props.noteid] = {
      title: this.state.title,
      content: this.state.content,
      noteid: this.props.noteid,
    };
    this.props.history.push('/save');
    this.props.onSaveNote({
      totalContent: totalContents,
      noteid: this.props.totalContent.length,
    });
  }
  onHistoryClick = (noteid) => {
    console.log('history click');
    this.props.history.push('/new');
    this.setState({
      title: this.props.totalContent[noteid].title,
      content: this.props.totalContent[noteid].content,
    });
    this.props.onHistoryClick({ noteid });
  }
  onClicks = () => {
    console.log('sync clicked');
    this.props.putData();
  }
  comingBack = () => {
    this.props.history.push('/new');
    this.setState({
      title: '',
      content: '',
    });
    this.props.onNewNote({
      noteid: this.props.totalContent.length,
    });
  };

  saveComponent=() => (
    <SaveComponent
      onHistoryClick={noteid => this.onHistoryClick(noteid)}
      onClicks={() => this.onClicks()}
      totalContent={this.props.totalContent}
      comingBack={() => this.comingBack()}
    />
  )

  canvaasComponent=() => (
    <CanvaasComponent
      onTopicChange={event => this.onTopicChange(event)}
      title={this.state.title}
      onLengthChange={note => this.onLengthChange(note)}
      onSave={() => this.onSave()}
      content={this.state.content}
    />
  )
  renderingPage = () => (
    <Switch>
      <Route exact path="/" component={FirstComponent} />
      <Route exact path="/save" render={this.saveComponent} />
      <Route exact path="/new" render={this.canvaasComponent} />
    </Switch>
  )
  render() {
    return (this.renderingPage());
  }
}
const mapStateToProps = state => ({
  totalContent: state.notes.totalContent,
  noteid: state.notes.noteid,
});

const mapDispatchToProps = dispatch => ({
  onSaveNote: note => dispatch(saveNote(note)),
  onHistoryClick: note => dispatch(editNote(note)),
  onNewNote: note => dispatch(newNote(note)),
  getData: notes => dispatch(getNote(notes)),
  putData: () => dispatch(putNote()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
