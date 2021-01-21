import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import { SearchFilter } from "../../components/searchFilter";
import api from "../../services/axios";

const Search = () => {
  const router = useRouter();
  const [properties, setProperties] = useState("");

  useEffect(() => {
    async function getProperty() {
      const { data } = await api.post("/api/property/list/search", {
        filters: {
          title: router.query.title,
          category:
            router.query.category != "selected" ? router.query.category : "",
        },
      });
      console.log("data", data);
      if (data) setProperties(data);
    }

    getProperty();
  }, [router.query.title, router.query.category]);

  console.log("router title", router.query.title);
  console.log("router category", router.query.category);
  console.log("data", properties);

  return (
    <Layout>
      <div className="container">
        <SearchFilter />
        {router.query.title || router.query.category ? (
          <>
            <div className="my-4 text-center globalColor font-weight-bolder">
              {properties.size > 0 &&
                (properties.size > 1
                  ? `${properties.size} Biens trouvés`
                  : `${properties.size} Bien trouvé`)}
              {properties.size == 0 && <span>Aucun résultat</span>}
            </div>
            <Card properties={properties.data} />
          </>
        ) : null}
      </div>
    </Layout>
  );
};

export default Search;
