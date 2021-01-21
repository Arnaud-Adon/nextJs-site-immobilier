import React from "react";
import api from "../services/axios";
import Layout from "../components/layout";
import Card from "../components/card";
import { MDBContainer } from "mdbreact";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { SearchFilter } from "../components/searchFilter";

const Properties = ({ properties, currentPage, pageCount }) => {
  const router = useRouter();

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <Layout>
      <MDBContainer>
        <SearchFilter />
        <Card properties={properties} />
        <div className="paginateCenter">
          <ReactPaginate
            onPageChange={paginationHandler}
            initialPage={currentPage - 1}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel="Précédent"
            nextLabel="Suivant"
            activeClassName="activated"
            breakLabel="..."
            pageClassName="paginate"
            containerClassName="custom-paginate"
          />
        </div>
      </MDBContainer>
    </Layout>
  );
};
export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const {
    data: { data: properties, currentPage: currentPage, totalPages: pageCount },
  } = await api.get(`/api/properties?page=${page}`);

  return {
    props: {
      properties,
      currentPage,
      pageCount,
    },
  };
};

export default Properties;
