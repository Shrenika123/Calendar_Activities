import React, { Component } from 'react'
import axios from 'axios'
import Calender from './Calender'

class Display extends Component {
    state = {
        view: false,
        results: [],
        activity_period: "You were not active",
        tz: ""

    }

    async componentDidMount() {
        await axios.get('http://localhost:4000/members/' + this.props.id).then((res) => this.setState({ results: res.data.activity_periods, tz: res.data.tz }))
        this.showDate()
    }

    toggleHandler = () => {
        this.setState({
            view: true
        })
    }

    showDate() {
        const a = new Date()
        a.setHours(0, 0, 0, 0)

        for (var i = 0; i < this.state.results.length; i++) {
            let b = this.state.results[i].start_time.split(" ")
            let d = b[0] + " " + b[1] + " " + b[2]
            let f = new Date(d)
            if (f.toString() === a.toString()) {
                console.log(this.state.results[i].start_time)
                this.setState({
                    activity_period: this.state.results[i].start_time.toString() + " " + "to" + " " + this.state.results[i].end_time.toString()
                })
            }
        }
    }

    render() {
        console.log(this.state.tz)
        if (this.state.view) {
            return (<div>
                <Calender data={this.state.results} tz={this.state.tz} />
            </div>)
        }
        return (
            <div>
                <p style={{ fontFamily: "Rufina", fontSize: "20px" }}>Your Activity for today:</p>
                <p>{this.state.activity_period}</p>
                <button onClick={this.toggleHandler}>Show All my activities</button>

            </div>
        )
    }


}

export default Display