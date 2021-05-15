import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios'
class BarDiscrlineeteChart extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [],
      options:{}


    };
  }

  componentDidMount() {

    axios.get("http://api.thingspeak.com/channels/1384560/feeds.json?api_key=FASQX5CZ2JWNOD2K&results=100000").then((response) => {
      console.log(response.data)
      // this.setState({ series:  })
      this.setState({
        series: [{
          name: 'niveau',
          type: 'column',
          data: response.data.feeds.map(e => e.field1)
        }, {
          name: 'flux',
          type: 'line',
          data: response.data.feeds.map(e => e.field2)
        }]
      })
      this.setState({ options: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: "flux et niveau"
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels:response.data.feeds.map(e => e.created_at) ,
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: "niveau d'eau",
          },

        }, {
          opposite: true,
          title: {
            text: 'flux '
          }
        }]
      } })

    })
  }

  render() {
    return (

      <Chart options={this.state.options} series={this.state.series} type="line" width={1430} height={550} />
      /*   < Chartoptions={this.state.options} series={this.state.series} type="line" width={700} height={320} />
      ) */
    )

  }
}

export default BarDiscrlineeteChart;