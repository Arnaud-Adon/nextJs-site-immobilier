import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

export const Carrousel = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1 carrouselMain"
      slide
    >
      <MDBCarouselInner>
        <MDBCarouselItem className="carrouselItem" itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/beloved/image/upload/v1596930513/Udemy/bjwercdg7b0jyzxvwaxs.jpg"
              alt="First slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem className="carrouselItem" itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/beloved/image/upload/v1596930516/Udemy/ylqtaobtxdr3rezunbzw.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem className="carrouselItem" itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/beloved/image/upload/v1596930810/Udemy/xej6jdktwbohbpdsmkzo.jpg"
              alt="Third slide"
            />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
