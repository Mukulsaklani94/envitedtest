import React from "react";
import "../styles/Create.css";
import { Link } from "react-router-dom";
function Create() {
  return (
    <div className="create">
      <div className="card">
        <form>
          <fieldset>
            <label>
              <p>Event name</p>
              <input name="name" />
            </label>
            <label>
              <p>Host name</p>
              <input name="name" />
            </label>
            <label>
              <p>Start time</p>
              <input type="time" name="name" />
            </label>
            <label>
              <p>End time</p>
              <input type="time" name="name" />
            </label>
            <label>
              <p>Location</p>
              <input type="text" name="name" />
            </label>
            <label>
              <p>Upload Photo</p>
              <input type="file" name="name" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/event">
        <button className="creat">Next</button>
      </Link>
    </div>
  );
}

export default Create;
