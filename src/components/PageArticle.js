import Button from 'react-bootstrap/Button';
import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { addToCard } from '../redux/actions';



function PageArticle() {

    const product = useSelector((state) => state.productReducer.product) || [];
    const cardData = useSelector(state => state.cardReducer.card);

    let { _id } = useParams();
    const  dispatch = useDispatch();
    const qtn = 1;
    const addtocard = (input) => {
        const serachResult = cardData.find(el => el.name == input.name)
        serachResult ? alert('produit deja dans le pannier') : dispatch(addToCard(input));

    }
    return (
        <div>
            {product.length === 0 ? <p>wait</p>
            :
          
            product.filter((el)=>el.id==_id).map((ell) =><>
           
                <h1>Welcom to page product</h1> 
                <h2>product name : {ell.name}  </h2>
                <img src={ell.images[0].src} width="400" /> <span>Prix : {ell.price} euro</span>
                <div dangerouslySetInnerHTML={{ __html: ell.description }} />
                <Button onClick={()=>addtocard({"id":ell.id,"name":ell.name,"price":ell.price ,"quantit": qtn})} variant="primary" size="lg">
                    ajouter
                </Button>
                </>)

            
            }
            {console.log("test",product.filter((el)=>el.id == _id))}

        </div>
    )
}

export default PageArticle
