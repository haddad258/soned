import React, { Component } from "react";
import ResponsiveContainer from "react-responsive-widget";
import { Form } from 'react-bootstrap'
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';
import axios from "axios";




class AddCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mac: '',
            chauffeur: '',
            type: '',
            carte_ip: '',
          



        };
    }



    render() {



        return (
            <div>
                <NavigationBar />
                <Sidebar />
                <div style={{ textAlign: "center" }}>   <h1  >  Add Node  </h1>
                </div>
                <ResponsiveContainer>
                    <div className="App">

                        <div className="app-row">
                            <div className="app-col-xs-12 app-col-md-1">
                            </div>
                            <div className="app-col-xs-12 app-col-md-5">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>mac</Form.Label>
                                        <Form.Control type="email" onChange={(e) => this.setState({ mac: e.target.value })} placeholder="mac" />
                                        
                                    </Form.Group>
                                    <Form.Group controlId="formBasicname">
                                        <Form.Label>type</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ type: e.target.value })} placeholder="type" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                  
                                  

                                </Form>
                            </div>
                            <div className="app-col-xs-12 app-col-md-5">
                                <Form>

                               
                                 
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label>carte_ip noeuds sensors</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ carte_ip: e.target.value })} placeholder="carte_ip" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label>numbers sensors</Form.Label>
                                        <Form.Control type="text" onChange={(e) => this.setState({ numbers: e.target.value })} placeholder="numbers sensors" />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>



                                </Form>




                                <div style={{ textAlign: "center" }}>
                                    <br />
                                    <button
                                        type="submit"
                                        onClick={() => this.handleSubmit()}
                                        className="btn btn-primary btn-lg"
                                    >
                                        Submit
								</button>

                                </div>


                            </div>
                        </div>
                    </div>

                </ResponsiveContainer>
            </div>
        );
    }








    handleSubmit(e) {
      
            this.setState({ validpassword: false })

            console.log(this.state)
            axios.post("http://localhost:5000/api/v1/Nodes", this.state).then((response) => {
                console.log(response.data)
                alert(" Add succefull")

                window.location.href= "/ListNode"


            }).catch(()=>{

                alert(" check your server")
                window.location.href= "/AddNode"


            })



    }
}

export default AddCar;
