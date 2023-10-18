import { useState } from 'react'
import React from 'react'
import Data from './Dummydata'

const ProductListing = () => {

    const[product, setProduct] = useState(Data)

    const displayProduct = () => {
        return product.map((obj) => (
            <div className="col-md-4 col-6 mt-5 mb-4">
                <div className="card shadow">
                    <img src={obj.image} alt="loading"  />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {obj.Brand}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{obj.model}</h6>
                    <p>Price : {obj.price}</p>
                </div>
            </div>
        ));
    };

    const searchProduct = (e) => {
        const search = e.target.value 
        let filteredProduct = Data.filter((product) =>{
                 return product.Brand.toLowerCase().includes(search.toLowerCase());
        });
        setProduct(filteredProduct)
    };
    return (
        <>
            <header className="bgimg text-white mt-3">
                <div className="container py-3">
                    <h1 className="text-center"><strong>Browse Product</strong></h1>

                    <hr />
                    <input onChange={searchProduct} type="text" className="form-control m-auto w-75" placeholder='Search Product' />
                </div>
            </header>
            <div className="container">
                <div className="row">
                    {displayProduct()}
                </div>
            </div>

        </>


    )
}

export default ProductListing