import React, { Component } from "react";
import ResponsiveContainer from "react-responsive-widget";
import { Card ,Button} from 'react-bootstrap';

import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';
import axios from "axios";
import BarDiscreteChart from './Charts1'
import ChartsRadar from './Charts'
import BarDiscretepolarArea from './Charts2'
import BarDiscretescatter from './Charts3'
import BarDiscreteChartbar from './Charts4'
import BarDiscrlineeteChart from './Charts5'




class AddCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matricule: '',
            chauffeur: '',
            capacity: '',
            carte_ip: '',




        };
    }
    refrech(){
    window.location.reload()
}


    render() {



        return (
            <div>
                <NavigationBar />
                <Sidebar />
                <div style={{ textAlign: "center" }}>   <h1  > <Button onClick={()=>this.refrech()}> refresh</Button>  </h1>
                </div>
                <ResponsiveContainer>
                    <div className="App">




                        <div className="app-row">
                            <div className="app-col-xs-12 app-col-md-1">
                            </div>
                            <div className="app-col-xs-12 app-col-md-10">
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5"> Chart des measures</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <BarDiscrlineeteChart />
                                    </Card.Body>
                                </Card>
                            </div>
                            </div>
                        <div className="app-row">

                            <div className="app-col-xs-12 app-col-md-2">
                            </div>
                            <div className="app-col-xs-12 app-col-md-8">
                              {/*   <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Discrete Bar Chart</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <BarDiscretescatter />
                                    </Card.Body>
                                </Card> */}
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
        axios.post("http://localhost:5000/api/v1/Cars", this.state).then((response) => {
            console.log(response.data)
            alert(" Add succefull")

            window.location.href = "/ListCars"


        }).catch(() => {

            alert(" check your server")
            window.location.href = "/AddCars"


        })



    }
}

export default AddCar;


