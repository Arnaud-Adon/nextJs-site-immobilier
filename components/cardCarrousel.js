import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

export const CardCarrousel = ({ property }) => {
  return (
    <div className="myCarrousel">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            {property && property.pictures[0] ? (
              <MDBView>
                <img
                  className="d-block w-100 carrouselImg"
                  src={property.pictures[0]}
                  alt={property.title}
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            {property && property.pictures[1] ? (
              <MDBView>
                <img
                  className="d-block w-100 carrouselImg"
                  src={property.pictures[1]}
                  alt={property.title}
                />
              </MDBView>
            ) : null}
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <style jsx>
        {`
          @media screen and (min-width: 768px) {
            .myCarrousel {
              width: 100%;
            }

            .carrouselImg {
              width: 100%;
              height: 400px;
              display: block;
            }
          }

          @media screen and (max-width: 768px) {
            .myCarrousel {
              width: 100%;
            }

            .carrouselImg {
              width: 100%;
              height: 300px;
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};
