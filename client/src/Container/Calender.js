import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./Calender.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// const g=moment.locale(this.props.tz)
// const localizer = momentLocalizer(g);

class Calender extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(0, "days")
          .toDate(),
        title: "Some "
      }
    ]
  };

  convertString(str2){
      let str3
    if(str2.includes("PM"))
    {
       str3=str2.replace(/PM/g," PM")
        
    }
    else
    {
        str3=str2.replace(/AM/g," AM")
    }

return str3

  }

  showEventHandler(){
    // var arr1=[]
    var arr2=[]


      for(var i=0;i<this.props.data.length;i++)
      {
        var str1=this.props.data[i].end_time
        var str=this.props.data[i].start_time
      
        const a=this.convertString(str)
         const b=this.convertString(str1)
       
        var person={
            start:new Date(a),
            end:new Date(b),
            title:"activity period"
        }
        arr2.push(person)
      }

    return arr2
  }

 

  render() {
      console.log(this.props.tz)

      moment.locale(this.props.tz)
const localizer = momentLocalizer(moment);

     const r= this.showEventHandler()
     console.log(r)
    return (
      <div className="Calender">
        <Calendar
          localizer={localizer}
          
          defaultDate={new Date()}
          defaultView="month"
          events={r}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default Calender;