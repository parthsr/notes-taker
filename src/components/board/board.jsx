import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BoardContent from '../BoardContent/boardContent';
import ManyNotes from '../ManyNotes/ManyNotes';
import './Board.css';
import { saveNote, editNote, newNote, getNote, putNote } from '../../redux/actions/actions';


class Board extends React.Component {
  constructor(props) {
    super(props);
    Board.propTypes = {
      totalContent: PropTypes.instanceOf({ }),
      onNewNote: PropTypes.func.isRequired,
      onHistoryClick: PropTypes.func.isRequired,
      onSaveNote: PropTypes.func.isRequired,
      noteid: PropTypes.number.isRequired,
      saved: PropTypes.bool.isRequired,
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
    // this.setState({
    //   totalContent: totalContents,
    //   saved: true,
    //   id: this.state.totalContent.length,
    // });
    this.props.onSaveNote({
      totalContent: totalContents,
      saved: true,
      noteid: this.props.totalContent.length,
    });
  }
  onHistoryClick = (noteid) => {
    this.setState({
      title: this.props.totalContent[noteid].title,
      content: this.props.totalContent[noteid].content,
    });
    this.props.onHistoryClick({ noteid });
  }
  onClicks = () => {
    this.props.putData();
  }
  comingBack = () => {
    this.setState({
      title: '',
      content: '',
    });
    this.props.onNewNote({
      saved: false,
      noteid: this.props.totalContent.length,
    });
  };


  renderingPage = () => {
    if (this.props.saved === false) {
      return (
        <div className="Board-board">
          <Header className="Board-header" text="Start taking Notes" />
          <BoardContent
            realText={this.state.title}
            onTopicChange={event => this.onTopicChange(event)}
            onLengthChange={note => this.onLengthChange(note)}
            onSave={() => this.onSave()}
            realContent={this.state.content}
          />
          <Footer className="Board-footer"text="AboutUs" />
        </div>
      );
    }
    return (
      <div className="Board-board">
        <Header text="Saved Notes" />
        <ManyNotes
          onHistoryClick={(noteid) => { this.onHistoryClick(noteid); }}
          totalContent={this.props.totalContent}
          onClicks={() => this.onClicks()}
        />
        <Footer text="Create New Note" onClicks={() => this.comingBack()} />
      </div>
    );
  }
  render() {
    return (this.renderingPage());
  }
}
const mapStateToProps = state => ({
  totalContent: state.notes.totalContent,
  noteid: state.notes.noteid,
  saved: state.notes.saved,
});

const mapDispatchToProps = dispatch => ({
  onSaveNote: note => dispatch(saveNote(note)),
  onHistoryClick: note => dispatch(editNote(note)),
  onNewNote: note => dispatch(newNote(note)),
  getData: notes => dispatch(getNote(notes)),
  putData: () => dispatch(putNote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
