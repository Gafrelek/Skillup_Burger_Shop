import Popup from "reactjs-popup";
import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Email address"
        />
        <MDBInput
          wrapperClass="mb-4"
          textarea
          id="form4Example3"
          rows={20}
          label="Message"
        />
        <Popup
          trigger={
            <MDBBtn type="submit" className="mb-4" block>
              Send
            </MDBBtn>
          }></Popup>
      </form>
    </div>
  );
}
