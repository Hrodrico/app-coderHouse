import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

function Category() {
    const { categoryId } = useParams();
    const greet = process.env.REACT_APP_GREETING; 
    console.log(":::categoryId:::",categoryId);

    return (
        <>
            {/* <ItemListContainer greeting="Bienvenid@!!!" categoryId={params.Id}/> */}
            
            <h1>{categoryId}</h1>
            <ItemListContainer categoryId={categoryId} greeting={greet}/>

        </>
    )
}

export default Category
