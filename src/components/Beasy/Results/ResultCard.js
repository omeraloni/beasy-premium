import React, { Component } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";

import {
    Card,
    CardBody,
    CustomInput
} from "reactstrap";

class ResultCard extends Component {
    render() {
        const {product} = this.props
        return (
            <Card className="flex-row">
                <div className="w-50 position-relative">
                    <img
                        className="card-img-left"
                        src={product.img}
                        alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
                        NEW
              </span>
                </div>

                <div className="w-50">
                    <CardBody>
                        <h6 className="mb-4">
                            {product.notes[0].substring(0,100)}
                </h6>

                        <footer>
                            <p className="text-muted text-small mb-0 font-weight-light">
                                10.12.2018
                  </p>
                        </footer>
                    </CardBody>
                </div>
            </Card>
        );
    }
}

export default ResultCard