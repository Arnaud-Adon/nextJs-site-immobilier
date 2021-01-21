import {
  MDBCard,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBRow,
} from "mdbreact";
import React from "react";
import { priceFormatted } from "../helpers/helper";

export const CardRelated = ({ properties }) => {
  return (
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol key={property._id} className="mb-3" md="4" lg="4">
            <MDBCard>
              <MDBCardHeader>{property.title}</MDBCardHeader>
              <MDBCardImage
                src={property.pictures[0]}
                className="globalImg"
                hover
                waves
              />
              <MDBCardFooter className="m-2">
                <div className="globalColor">
                  {priceFormatted(property.price)}
                </div>
                <p>
                  <small>{property.city}, Monde</small>
                </p>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  );
};
