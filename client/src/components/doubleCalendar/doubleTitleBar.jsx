import React from 'react';

import rightArrow from '../images/right-arrow.js';
import leftArrow from '../images/left-arrow.js';

class TitleBar extends React.Component {
  // diplays only a left arrow for the left month
  // and only a right arrow for the right month

  constructor (props) {
    super(props);
    this.state = {
      disabled: true
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
  }

  getMonth() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
    return months[this.props.month];
  }

  handleForward(e) {
    e.preventDefault();
    this.props.changeMonth('forward');
    this.setState({
      disabled: false
    });
  }

  handleBack (e) {
    e.preventDefault();
    this.props.changeMonth('back');
  }

  setLeftArrowDisabled () {
    var today = new Date;
    if (today.getMonth() === this.props.month && today.getFullYear() === this.props.year) {
      this.state.disabled = true;
    } else {
      this.state.disabled = false;
    }
  }

  render () {
    this.setLeftArrowDisabled();

    if (this.props.side === 'left') {
      if (this.state.disabled) {
        return(
          <div style={{justifyContent:"flex-start"}} className="title-bar-container">
            <button id="back" disabled={this.state.disabled} className="arrow-button" onClick={this.handleBack}>{leftArrow.disabledArrow}</button>
            {this.getMonth()} {this.props.year}
          </div>
        );

      } else {
        return(
          <div style={{justifyContent:"flex-start"}} className="title-bar-container">
            <button id="back" disabled={this.state.disabled} className="arrow-button" onClick={this.handleBack}>{leftArrow.arrow}</button>
            {this.getMonth()} {this.props.year}
          </div>
        );
      }
    } else {
      return (
        <div style={{justifyContent:"flex-end"}} className="title-bar-container">
          {this.getMonth()} {this.props.year}
          <button id="forward" className="arrow-button" onClick={this.handleForward}>{rightArrow.arrow}</button>
        </div>

      )
    }
  }
}



export default TitleBar;