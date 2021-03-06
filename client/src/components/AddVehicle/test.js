import React, { Component } from "react";
import "./style.css";
import { ResItem } from "../List/index";
import API from "../../utils/API";

class AddVehicle extends Component {

  componentDidMount() {

    this.testThing();
  }

  state = {
    user: "test",
    make: "test",
    model: "test",
    mileage: 0,
    carResults: []
  };

  testThing() {
    let userEmail = sessionStorage.getItem("user")
    console.log(userEmail)
    this.setState({
      user: userEmail
    })
    console.log(this.state);
  };

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  };

  handleCarSubmit = event => {
    this.testThing();
    event.preventDefault();
    API.saveCar({
      make: this.state.make,
      model: this.state.model,
      mileage: this.state.mileage,
      user: this.state.user
    })
      .then(this.getAllUserCars())
      .catch(err => console.log(err));

  };

  getAllUserCars = event => {
    // event.preventDefault();
    API.getCarsByUser(
      this.state.user
    )
    .then(res => {
      this.setState({ carResults: res });
      console.log(this.state.carResults);
    })
    .catch(err => console.log(err))
  };

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add a Vehicle!</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enter Vehicle Details Below:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleCarSubmit}>
                  <div className="form-group">
                    <label className="col-form-label">Make:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="make"
                      name="make"
                      placeholder="Toyota"
                      value={this.state.make || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Model:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      placeholder="Highlander"
                      value={this.state.model || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Mileage:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="mileage"
                      name="mileage"
                      placeholder="38,491"
                      value={this.state.mileage || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-dismiss="modal">Add Vehicle</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.carResults.data ? (
              this.state.carResults.data.map(car => (
                <ResItem key={car._id}>
                  <h6>{car._id} Call at: {car.mileage}</h6>
                </ResItem>
              ))
            ) : (
              <h6>Search results will go here..</h6>
            )}
      </div>
    );
  }
}

export default AddVehicle;