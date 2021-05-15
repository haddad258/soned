import React from 'react';
import Sidebar from '../components/Sidebar';
import ResponsiveContainer from "react-responsive-widget";

import { NavigationBar } from '../components/NavigationBar';
import { Table, Button } from 'react-bootstrap'
import { confirmAlert } from "react-confirm-alert";
import axios from 'axios';
import moment from "moment"
import "react-confirm-alert/src/react-confirm-alert.css"; // Import
import { object } from 'yup';


class Measures extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Listmeasures: [],
            Measurestype: {}



        };
    }
    componentDidMount() {
        axios.get("http://api.thingspeak.com/channels/1384560/feeds.json?api_key=FASQX5CZ2JWNOD2K&results=100000").then((response) => {
            console.log(response.data)
            this.setState({ Listmeasures: response.data.feeds.sort((a, b) => b.entry_id - a.entry_id) })
            this.setState({ Measurestype: response.data.channel })

        })



    }

    Delette(measures) {
        console.log("hellodelet", measures.id);
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure to do Delete?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios
                            .delete("http://localhost:5000/api/v1/measures/" + measures.id)
                            .then(() => {
                                var array = [...this.state.Listmeasures];
                                var index = array.indexOf(measures);
                                if (index !== -1) {
                                    array.splice(index, 1);
                                    this.setState({ Listmeasures: array });
                                }
                            });
                    },
                },
                {
                    label: "No",
                    onClick: null,
                },
            ],
        });
    }

    updatemeasure(e) {
        window.location.href = "/updatemeasure/" + e.id

    }

    render() {
        return (<div>
            <NavigationBar />
            <Sidebar />
            <div style={{ textAlign: "center" }}>   <h1  > List all Measures </h1>
                <h2  >{this.state.Measurestype.name}</h2>
                <h2  >{this.state.Measurestype.created_at}</h2>
            </div>
            <ResponsiveContainer>
                <div className="App">

                    <div className="app-row">
                        <div className="app-col-xs-12 app-col-md-1">
                        </div>
                        <div className="app-col-xs-12 app-col-md-5">
                            <h1>niveau d'eau</h1>
                            <Table striped responsive bordered hover size="lg">
                                <thead >
                                    <tr >
                                        <th>entry_id</th>
                                        <th>valeur</th>
                                        <th>date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Listmeasures.map((e, index) => (

                                        <tr key={index}>
                                            <td>{e.entry_id} </td>
                                            <td>{e.field1} </td>
                                            <td>{e.created_at} </td>

                                        </tr>
                                    ))}



                                </tbody>
                            </Table>
                        </div>
                        <div className="app-col-xs-12 app-col-md-5">
                        <h1>flux d'eau</h1>

                            <Table striped responsive bordered hover size="lg">
                                <thead >
                                    <tr >
                                        <th>entry_id</th>
                                        <th>valeur</th>
                                        <th>date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Listmeasures.map((e, index) => (

                                        <tr key={index}>
                                            <td>{e.entry_id} </td>
                                            <td>{e.field2} </td>
                                            <td>{e.created_at} </td>

                                        </tr>
                                    ))}



                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

            </ResponsiveContainer>

        </div>
        )
    }


}
export default Measures