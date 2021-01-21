import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
  MDBCardImage,
} from "mdbreact";
import { priceFormatted } from "../helpers/helper";
import { Features } from "./features";

const PropertySection = ({ properties }) => {
  return (
    <>
      <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">
        Notre Catalogue
      </h2>
      <MDBRow>
        {properties &&
          properties.map((property) => (
            <MDBCol md="4" lg="4" key={property._id}>
              <MDBCard>
                <MDBCardImage
                  className="globalImg"
                  src={property.pictures[0]}
                  alt={property.title}
                  waves
                  zoom
                />
                <MDBView>
                  <img />
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="card-title">
                    {property.title}
                  </MDBCardTitle>
                  <MDBCardText>
                    <strong>{priceFormatted(property.price)}</strong>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
      <div className="text-center my-5 text-dark">
        <button className="globalButton">Afficher plus</button>
      </div>
      <hr />
      <Features />
    </>
  );
};

export default PropertySection;
