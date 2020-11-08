import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date:new Date()
    };
  }

  onChange = (date)=> {
    this.setState({date:date});
  }

  render(){
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}


export default App;