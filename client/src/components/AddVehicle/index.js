import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class AddVehicle extends Component {

  componentDidMount() {
    
    this.testThing();
  }

  // constructor(props) {
  //   super(props);
  //   this.textInput = React.createRef();

  //   this.onChangeMake = this.onChangeMake.bind(this);
  //   this.onChangeModel = this.onChangeModel.bind(this);
  //   this.onChangeMileage = this.onChangeMileage.bind(this);
  //   this.handleCarSubmit = this.handleCarSubmit.bind(this);

  //   this.state = {
  //     // user: "",
  //     make: "test",
  //     model: "test",
  //     mileage: 0,
  //   };
  // }

  state = {
    user: "test",
    make: "test",
    model: "test",
    mileage: 0,
  };

  testThing() {
    let userEmail = sessionStorage.getItem("user")
    this.setState({
      user: userEmail
    })
    console.log(this.state);
  }

  onChangeMake = (event) =>  {
    this.setState({
      make: event.target.value
    });
  }

  onChangeModel = (event) =>  {
    this.setState({
      model: event.target.value
    });
  }

  onChangeMileage = (event) =>  {
    this.setState({
      mileage: event.target.value
    });
  }

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
      API.getCarsByUser({
        user: this.state.user
      })
      .then(req => console.log(req))
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
                    <label className="col-form-label">Make:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="make" 
                      placeholder="Toyota"
                      value={this.state.make || ''}
                      onChange={this.onChangeMake}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Model:</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="model" 
                      placeholder="Highlander"
                      value={this.state.model || ''}
                      onChange={this.onChangeModel}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Mileage:</label>
                    <input 
                      type="number"
                      className="form-control" 
                      id="mileage" 
                      placeholder="38,491"
                      value={this.state.mileage || ''}
                      onChange={this.onChangeMileage}
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
      </div>
    );
  }
}

export default AddVehicle;
