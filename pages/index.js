import Layout from "../components/layout";
import PropertyVip from "../components/propertyVip";
import { MDBContainer } from "mdbreact";
import api from "../services/axios";
import { Carrousel } from "../components/carrousel";
import PropertySection from "../components/propertySection";

function Home({ propertiesVip, properties }) {
  return (
    <Layout>
      <Carrousel />
      <MDBContainer>
        <PropertyVip properties={propertiesVip} />
        <PropertySection properties={properties} />
      </MDBContainer>
    </Layout>
  );
}

export const getStaticProps = async (content) => {
  const { data: propertiesVip } = await api.get("/api/properties/vip?limit=3");
  const {
    data: { data: properties },
  } = await api.get("/api/properties?limit=6");

  return {
    props: {
      propertiesVip,
      properties,
    },
  };
};

export default Home;
