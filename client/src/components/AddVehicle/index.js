import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { ResItem } from "../List/index";

class AddVehicle extends Component {

  componentDidMount() {

    this.testThing();
  }

  state = {
    user: "",
    carName: "",
    make: "",
    model: "",
    mileage: 0,
    lastOilChange: 0,
    lastTireRotation: 0,
    lastNewBrake: 0,
    carResults: []
  };

  testThing() {
    let userEmail = sessionStorage.getItem("user")
    this.setState({
      user: userEmail
    })
    console.log(this.state);
    this.getAllUserCars();
  };

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  };

  handleCarSubmit = event => {
    this.testThing();
    event.preventDefault();
    API.saveCar({
      carName: this.state.carName,
      make: this.state.make,
      model: this.state.model,
      mileage: this.state.mileage,
      lastOilChange: this.state.mileage,
      lastTireRotation: this.state.mileage,
      lastNewBrake: this.state.mileage,
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
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add a Vehicle!</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Enter Vehicle Details Below:</h5>
                <button type="button" class="close" dataDismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleCarSubmit}>
                <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="carName"
                      name="carName"
                      placeholder="Give your car a name!"
                      value={this.state.carName || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Make:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="make"
                      name="make"
                      placeholder="Make"
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
                      placeholder="Model"
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
                      placeholder="Total Mileage"
                      value={this.state.mileage || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Last Oil Change:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="lastOilChange"
                      name="lastOilChange"
                      placeholder="Last Oil Change (mileage)"
                      value={this.state.lastOilChange || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Last Tire Rotation:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="lastTireRotation"
                      name="lastTireRotation"
                      placeholder="Last Tire Rotation (mileage)"
                      value={this.state.lastTireRotation || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Last Brake Replacement:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="lastNewBrake"
                      name="lastNewBrake"
                      placeholder="Last Brake Replacement (mileage)"
                      value={this.state.lastNewBrake || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" dataDismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" dataDismiss="modal">Add Vehicle</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.carResults.data ? (
              this.state.carResults.data.map(car => (
                <ResItem key={car._id}>
                  <h5>Name: {car.carName}</h5>
                  <h6>Make: {car.make}</h6>
                  <h6>Model: {car.model}</h6>
                  <h6>Mileage: {car.mileage}</h6>
                  <h6>Last Oil Change: {car.lastOilChange}</h6>
                  <h6>Last Tire Rotation: {car.lastTireRotation}</h6>
                  <h6>Last New Brake: {car.lastNewBrake}</h6>
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