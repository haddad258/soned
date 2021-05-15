import React from 'react';
import Sidebar from '../components/Sidebar';
import ResponsiveContainer from "react-responsive-widget";

import { NavigationBar } from '../components/NavigationBar';
import { Table, Button } from 'react-bootstrap'
import { confirmAlert } from "react-confirm-alert";
import axios from 'axios';
import moment from'moment'
import "react-confirm-alert/src/react-confirm-alert.css"; // Import


class ListNode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ListNode: []



        };
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/v1/Nodes").then((response) => {
            console.log(response.data)
            this.setState({ ListNode: response.data })

        })
    }

    Delette(Node) {
        console.log("hellodelet", Node.id);
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure to do Delete?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios
                            .delete("http://localhost:5000/api/v1/Nodes/" + Node.id)
                            .then(() => {
                                var array = [...this.state.ListNode];
                                var index = array.indexOf(Node);
                                if (index !== -1) {
                                    array.splice(index, 1);
                                    this.setState({ ListNode: array });
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

    updateCar(e) {
        window.location.href = "/Measuresid/" + e.id

    }

    render() {
        return (<div>
            <NavigationBar />
            <Sidebar />
            <div style={{ textAlign: "center" }}>   <h1  > List Node   <Button
                variant="info"
                onClick={() => window.location.href = "/AddNode"}
            >
                {" "}
                <span className="fa fa-plus"></span>
            </Button></h1>

            </div>
            <ResponsiveContainer>
                <div className="App">

                    <div className="app-row">
                        <div className="app-col-xs-12 app-col-md-2">
                        </div>
                        <div className="app-col-xs-12 app-col-md-9">
                            <Table striped responsive bordered hover size="lg">
                                <thead >
                                    <tr >
                                        <th style={{ "width": "100px" }} >#id</th>
                                        <th>@mac</th>
                                        <th>type</th>
                                        <th>carte_ip</th>
                                        <th>create at</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.ListNode.map((e, index) => (

                                        <tr key={index}>
                                            <td>{e.id} </td>
                                            <td>{e.mac}</td>
                                            <td>{e.type} </td>
                                            <td>{e.carte_ip} </td>
                                            <td>{moment(e.created_at).format("YYYY-MM-DD [at] HH:MM")} </td>

                                            <td>

                                                <Button
                                                    variant="danger"
                                                    onClick={() => this.Delette(e)}
                                                >
                                                    {" "}
                                                    <span className="fa fa-trash"></span>
                                                </Button>
                                                <Button
                                                    variant="info"
                                                    onClick={() => console.log(e)}
                                                >
                                                    {" "}
                                                    <span className="fa fa-pen"></span>
                                                </Button>
                                            </td>
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
export default ListNode