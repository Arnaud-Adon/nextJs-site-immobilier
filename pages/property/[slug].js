import React from "react";
import Layout from "../../components/layout";
import api from "../../services/axios";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";
import { CardCarrousel } from "../../components/cardCarrousel";
import { Slug } from "../../components/slug";
import { CardVip } from "../../components/cardVip";
import { CardRelated } from "../../components/cardRelated";

const Property = ({ property, properties, propertiesRelated }) => {
  const styles = {
    contact: {
      fontSize: 15,
    },
  };
  return (
    <>
      {property && (
        <Layout>
          <MDBContainer>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="9" lg="9">
                    <CardCarrousel property={property} />
                    <Slug property={property} />
                  </MDBCol>
                  <MDBCol md="3" lg="3">
                    <h4 className="mt-5">Contactez-nous</h4>
                    <div style={styles.contact} className="mt-2">
                      <MDBIcon icon="calculator" className="mr-1" />
                      10 rue du Lion
                    </div>
                    <div style={styles.contact} className="mt-2">
                      <MDBIcon icon="phone-alt" className="mr-1" />
                      +253 58-85-556
                    </div>
                    <div style={styles.contact} className="mt-2">
                      <MDBIcon icon="mobile-alt" className="mr-1" />
                      +253 58-85-557
                    </div>
                    <div style={styles.contact} className="mt-2">
                      <MDBIcon icon="envelope" className="mr-1" />
                      mobilier@immoweb.fr
                    </div>
                    <h3 className="mt-4 mb-3">Liens sponsorisées</h3>
                    <CardVip properties={properties} />
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  {propertiesRelated && propertiesRelated.length !== 0 && (
                    <MDBCol>
                      <h2>Biens Similaires</h2>
                      <CardRelated properties={propertiesRelated} />
                    </MDBCol>
                  )}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Layout>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await api.get("/api/properties?limit=100");
  const properties = data.data;
  const paths = properties.map((property) => ({
    params: {
      slug: property.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data: property } = await api.get(`/api/property/${slug}`);
  const { data: properties } = await api.get("/api/properties/vip");
  const { data: propertiesRelated } = await api.get(
    `/api/properties/related/${property._id}`
  );

  return {
    props: {
      property,
      properties,
      propertiesRelated,
    },
  };
};

export default Property;
