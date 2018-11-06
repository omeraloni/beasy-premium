import React, { Component } from "react";

import {
    Card,
    CardBody,
} from "reactstrap";

class MoreResultCard extends Component {
    render() {
        const cardBodyStyle = {
            flexDirection: 'row'
          };
    
        const {product} = this.props
        return (
            <Card>
            <div className="position-relative">
              <img
                className="card-img-top"
                src={product.img}
                alt="Card"
              />
            </div>

            <CardBody style={cardBodyStyle}>
              <h6 className="mb-">
                {product.companyDescription}  
              </h6>

            </CardBody>
          </Card>
        );
    }
}

export default MoreResultCard