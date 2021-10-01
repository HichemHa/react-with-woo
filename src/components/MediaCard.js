import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { addToCard } from "../redux/actions";
import {useDispatch,useSelector} from "react-redux"

export default function MediaCard({ data, key }) {
  let xx = data.description.replace("<p>", "");
  xx = xx.replace("</p>", "");
  const dispatch = useDispatch();
  let qtn = 1;
    const cardData = useSelector(state => state.cardReducer.card);

    const addtocard = (input) => {
        const serachResult = cardData.find(el => el.name == input.name)
        serachResult ? alert('produit deja dans le pannier') : dispatch(addToCard(input));

    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={data.images[0].src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {xx}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/article/${data.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
      <p>Prix : {data.price}</p>
      <Button onClick={()=>addtocard({"id":data.id,"name":data.name,"price":data.price ,"quantit": qtn})} variant="raised" color="primary">add to card</Button>
    </Card>
  );
}
