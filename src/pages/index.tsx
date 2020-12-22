import React, { useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import MyCard from "../components/Cards";
import Navbar from "../components/Navbar";
import { useGetallpostsQuery } from "../utils/graphql";
import { gql } from "@apollo/client";

const PostDoc = gql`
   subscription POSTS {
      posts {
         id
         caption
         likes
         uniqueId
         user {
            id
            username
         }
      }
   }
`;

const index = () => {
   const { data, refetch, subscribeToMore } = useGetallpostsQuery();
   // const { data: postdata } = usePostsSubscription();
   const onClick = (e: React.MouseEvent) => {
      e.preventDefault();
      refetch();
   };
   useEffect(() => {
      subscribeToMore({
         document: PostDoc,
         // @ts-ignore
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData) return prev;
            else {
               // @ts-ignore
               return prev?.getAllPosts!.concat([subscriptionData.data.posts!]);
            }
         },
      });
   });
   return (
      <div>
         <Navbar />
         <Grid container spacing={3} justify="center" alignItems="center">
            {data?.getAllPosts?.map((post) => {
               return (
                  <Grid spacing={3} item xs={12} sm={6} lg={3} md={4}>
                     <MyCard
                        key={post?.uniqueId!}
                        image={post?.uniqueId!}
                        caption={post?.caption!}
                     ></MyCard>
                  </Grid>
               );
            })}
         </Grid>
         <Button onClick={onClick}>refetch</Button>
      </div>
   );
};

export default index;
