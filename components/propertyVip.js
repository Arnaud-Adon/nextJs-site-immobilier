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

const PropertyVip = ({ properties }) => {
  return (
    <>
      <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">
        Biens sponsorisés
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
                  <MDBCardTitle>{property.title}</MDBCardTitle>
                  <MDBCardText>
                    <strong>{priceFormatted(property.price)}</strong>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </>
  );
};

export default PropertyVip;
