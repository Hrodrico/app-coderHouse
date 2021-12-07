import React from 'react'
import './ItemDetail.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';

function ItemDetailContainer({product}) {
    // console.log("product::",product);
    const { strDrink, strInstructions, dateModified, idDrink, strDrinkThumb } = product;

    return (
        <div className='item'>
            <Card>
                <Image src={strDrinkThumb} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{strDrink}</Card.Header>
                    <Card.Meta>{dateModified}</Card.Meta>
                    <Card.Description>{strInstructions}</Card.Description>
                </Card.Content>
                <Card.Content extra><a href="/"><Icon name='dollar' /><NumberFormat value= {idDrink} displayType={'text'} thousandSeparator={true}/></a>
                </Card.Content>
            </Card>
	    </div>        
    )
}

export default ItemDetailContainer