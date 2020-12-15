import { gql, useQuery } from "@apollo/client";
import React from "react";

const QUERY = gql`
   query HAI {
      hello
   }
`;

const index = () => {
   const { data } = useQuery(QUERY);
   return (
      <div>
         About Page
         {data && data.hello}
      </div>
   );
};

export default index;
