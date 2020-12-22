import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useProfileQuery } from "../utils/graphql";
import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

interface Props {
   image: string;
   caption: string;
}

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
   avatar: {
      backgroundColor: red[500],
   },
});

function MyCard({ image, caption }: Props) {
   const classes = useStyles();
   const { data } = useProfileQuery();
   return (
      <Card className={classes.root}>
         <CardHeader>
            <Avatar>{data?.profile?.username?.slice(0, 2)}</Avatar>
         </CardHeader>
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image={`/posts/${image}`}
               title={data?.profile?.username!}
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {data?.profile?.username}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  {caption}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}

export default MyCard;
