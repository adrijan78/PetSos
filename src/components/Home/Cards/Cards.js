import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="mt-5 text-center">Welcome to our page</h2>
            <div className="row mt-5 mb-5">
  
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div class="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div class="card text-white bg-success mb-3" style={{maxWidth: "18rem"}}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Cards;