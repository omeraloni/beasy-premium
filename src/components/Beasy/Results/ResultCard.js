import React, { Component } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";
import Rating from "Components/Rating";

import {
    Card,
    CardBody,
    Button,
    Badge
} from "reactstrap";

class ResultCard extends Component {
    state = {
        isButtonActive: false,
        buttonColor: "secondary",
        buttonText: "matchmaker.getBeasy"
    }
    checkButton = () =>{
        this.setState({ isButtonActive: !this.state.isButtonActive });
      };

    connect = () => {
        this.setState({ buttonColor: "primary" })
        this.setState({ buttonText: "card.connected" })
    }
    render() {
        const { product } = this.props
        return (
            <Card className="flex-row">
                <div className="w-50 position-relative">
                    <img
                        className="card-img-left"
                        src={product.img}
                        alt="Card cap"
                    />
                    <span className="badge badge-pill badge-theme-2 position-absolute badge-top-left">
                        {product.numberOfMatches}%
              </span>
                </div>

                <div className="w-50">
                    <CardBody>
                        <h6 className="mb-2">
                            {product.title}
                        </h6>
                        <div className="mb-2">
                            {product.goals.map(i => {
                                return (
                                    <Badge color="outline-info mb-1 mr-1" pill key={i}>
                                        {i}
                                    </Badge>
                                )
                            })}
                        </div>
                        <footer>
                            <p className="text-muted text-small mb-2">
                                <IntlMessages id="Add to Favorites" />
                            </p>
                            <Button
                                outline
                                color="secondary"
                                onClick={this.checkButton}
                                active={this.state.isButtonActive}
                            >
                                <i className="simple-icon-heart" />

                            </Button>
                            <div className="float-md-right">

                                <Button color={this.state.buttonColor} onClick={this.connect}>
                                    <IntlMessages id={this.state.buttonText} />
                                </Button>
                            </div>
                        </footer>
                    </CardBody>
                </div>
            </Card>
        );
    }
}

export default ResultCard