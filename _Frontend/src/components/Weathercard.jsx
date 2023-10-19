import React from 'react'
import Data from './Dummydata2'

const Weathercard = () => {
    const displayCard = () => {
        return Data.map((obj) => {
            <div className="col-md-4 mb-3">
                <div className="card shadow">
                    <img src={obj.image} className='card-img-top img' alt="loading" />
                    <div className="card-body">
                        <h3 className="card-title text-light">{obj.location}</h3>
                        <h4 className="card-subtitle mb-2 text-muted">Temperature: {obj.Temperature}</h4>
                        <h4 className="card-text">Humditiy: {obj.Humidity}</h4>
                    </div>
                </div>
            </div>
        })

    }
    return (
        <div>
            <section className='py-5'>
                <h1 className="text-center">Today&apos;s Sky Story</h1>
                <div className="container">
                    <div className="row mt-5">
                         {displayCard()}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Weathercard