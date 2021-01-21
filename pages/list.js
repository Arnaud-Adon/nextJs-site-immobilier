import React from "react";
import Layout from "../components/layout";
import useSWR from "swr";
import api from "../services/axios";
import { MDBContainer, MDBDataTableV5 } from "mdbreact";
import { adminRoutes } from "../services/adminRoutes";

const fetcher = (url) => api.get(url).then((res) => res.data);

const PropertyList = () => {
  const { data } = useSWR("/api/properties?limit=50", fetcher);
  const properties = data && data.data;

  const datatable = {
    columns: [
      {
        label: "Titre",
        field: "title",
        sort: "asc",
      },
      {
        label: "Decripeion",
        field: "description",
        sort: "asc",
      },
    ],
    rows:
      properties &&
      properties.map((property) => {
        return {
          title: property.title,
          description: property.description.slice(0, 100),
        };
      }),
  };

  return (
    <Layout>
      <MDBContainer>
        <MDBDataTableV5 data={datatable} />
      </MDBContainer>
    </Layout>
  );
};

export default adminRoutes(PropertyList);
