import React, { Component } from 'react';
import '../styles/nameForm.css';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import ProgressBar from './progressBar.js';
import '../styles/reactDatePicker.css';

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state ={
      startDate: moment(),
      endDate: moment(),
      name: '',
      value: '',
      tabstate: false
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.back = this.back.bind(this);
  }

  handleStartDateChange(date){
    this.setState({
      startDate: date,
    });
  }

  handleEndDateChange(date){
    this.setState({
      endDate: date,
    });
  }



  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleValueChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    if(this.state.name && this.state.value && this.state.startDate && this.state.endDate){
      if(moment(this.state.startDate) > moment(this.state.endDate)){
        window.alert('startDate cannot be greater than the end time');
      }
      else{
        this.setState({
          tabstate: true
        });
      }
    }
    else{
      if(typeof(window) !== undefined){
        var error = [];
        if(moment(this.state.startDate) > moment(this.state.endDate)){
          window.alert('startDate cannot be greater than the end time');
        }
        if(!this.state.name){
          error.push(' name');
        }
        if(!this.state.value){
          error.push(' value');
        }
         if(!this.state.startDate){
          error.push(' startDate');
        }
        if(!this.state.endDate){
          error.push(' endDate');
        }
        if(error.length === 1){
          window.alert(' Please enter'+ `${error[0]}`);
        }
        else{
          var errorString = '';
          for(var i in error) {
            errorString = error[i] + ' , ';
          }
          window.alert(' Please enter' + `${errorString}`);
        }
      }
    }
    event.preventDefault();
  }

  back(){
    this.setState({
      tabstate : false
    });
  }

  render() {
    return (
        this.state.tabstate === false ?
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <label className="label">
                <span className="label-name">Name</span>
                <div className="name-wrapper">
                    <table style={{width:'100%'}}>
                        <tr>
                            <td style={{width:'100%'}}>
                              <input type="text" className="name" placeholder="Campaign" value={this.state.name} onChange={this.handleNameChange} />
                            </td>
                        </tr>
                    </table>

                </div>
              </label>
              <label className="label">
                <span className="label-name">Value</span>
                <div className="value-wrapper">
                <table style={{width:'100%'}}>
                    <tr>
                        <td style={{width:'100%'}}>
                          <input type="number" className="value" min='0' max='100' placeholder="0" value={this.state.value} onChange={this.handleValueChange} />
                        </td>
                    </tr>
                </table>

                </div>
              </label>
              <label className="label">
                <span className="label-name">Date</span>
                    <div className="datepickerfromwrapper">
                      <table style={{width:'100%'}}>
                          <tr>
                              <td style={{width:'100%'}}>
                                <DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleStartDateChange}
                                  minDate={moment()}
                                  />
                              </td>
                          </tr>
                      </table>

                    </div>
                    <div className="datepickertowrapper">
                      <table style={{width:'100%'}}>
                          <tr>
                              <td style={{width:'100%'}}>
                                <DatePicker
                                  selected={this.state.endDate}
                                  onChange={this.handleEndDateChange}
                                  minDate={this.state.startDate}
                                  />
                              </td>
                          </tr>
                      </table>

                    </div>
              </label>
              <button  className="submit" type="submit" value="submit">Get Report</button>
            </form>
          </div>
            :
          <div className="report-tab">
            <div className="report">
              <div className="back" onClick={this.back}></div>
                <div className="selected-name-wrapper">
                  <div className="selected-name">
                    {this.state.name}
                  </div>
                </div>
                <ProgressBar {...this.state}/>
                <div className="date-wrapper">
                  <div className="between"></div>
                  <div className="selected-start-date-wrapper">
                    <div className="selected-start-date">
                      {moment(this.state.startDate).format('Do MMMM YYYY')}
                    </div>
                  </div>
                  <div className="selected-end-date-wrapper">
                    <div className="selected-end-date">
                      {moment(this.state.endDate).format('Do MMMM YYYY')}
                    </div>
                  </div>
                </div>
            </div>
          </div>
    );
  }
}

export default NameForm;
