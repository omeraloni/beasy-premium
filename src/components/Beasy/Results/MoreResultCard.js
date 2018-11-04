import React, { Component } from "react";

import {
    Card,
    CardBody,
} from "reactstrap";

class MoreResultCard extends Component {
    render() {
        const {product} = this.props
        return (
            <Card>
            <div className="position-relative">
              <img
                className="card-img-top"
                src={product.img}
                alt="Card"
              />
              <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                NEW
              </span>
              <span className="badge badge-pill badge-secondary position-absolute badge-top-left-2">
                TRENDING
              </span>
            </div>

            <CardBody>
              <h6 className="mb-4">
                {product.name}
              </h6>

              <footer>
                <p className="text-muted text-small mb-0 font-weight-light">
                  09.04.2018
                </p>
              </footer>
            </CardBody>
          </Card>
        );
    }
}

export default MoreResultCard