import React from "react";
import "./style.css";

function AddVehicle() {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enter Vehicle Details Below:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="col-form-label">Make:</label>
                <input type="text" className="form-control" id="make" placeholder="Toyota"/>
              </div>
              <div className="form-group">
                <label className="col-form-label">Model:</label>
                <input type="text" className="form-control" id="model" placeholder="Highlander"/>
              </div>
              <div className="form-group">
                <label class="col-form-label">Mileage:</label>
                <input type="text" class="form-control" id="model" placeholder="38,491"/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Add Vehicle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;
