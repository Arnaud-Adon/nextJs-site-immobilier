import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
} from "mdbreact";
import { priceFormatted } from "../helpers/helper";
import Link from "next/link";

const Card = ({ properties }) => {
  return (
    <>
      {properties &&
        properties.map((property) => (
          <MDBCard key={property._id}>
            <MDBCardBody>
              <MDBRow className="my-5">
                <MDBCol lg="5">
                  <Link
                    href="/property/[slug]"
                    as={`/property/${property.slug}`}
                  >
                    <a>
                      <MDBView
                        className="rounded z-depth-2 mb-lg-0 mb-4"
                        hover
                        waves
                      >
                        <img
                          className="globalImg"
                          src={property.pictures[0]}
                          alt={property.title}
                        />
                      </MDBView>
                    </a>
                  </Link>
                </MDBCol>
                <MDBCol lg="7">
                  <span href="#!" className="globalColor">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="university" className="pr-2" />
                      {property.category.name}
                    </h6>
                  </span>
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>{property.title}</strong>
                  </h3>
                  <p>{property.description.slice(0, 200)}</p>
                  <p className="globalColor">
                    <strong>{priceFormatted(property.price)}</strong>
                  </p>
                  <p className="globalColor">
                    <MDBIcon className="mr-1" icon="city" />
                    <strong>{property.city}</strong>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        ))}
      <hr />
    </>
  );
};

export default Card;
