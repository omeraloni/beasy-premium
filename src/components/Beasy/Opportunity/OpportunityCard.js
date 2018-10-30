
import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Card,
  CardBody,
  Button,
  Badge,
  Collapse
} from "reactstrap";
import Rating from "Components/Rating";

class OpportunityCard extends Component {
  constructor(...params) {
    super(...params);
    this.toggleCard = this.toggleCard.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }
  state = {
    isButtonActive: false,
    collapse: false
  }
  checkButton() {
    this.setState({ isButtonActive: !this.state.isButtonActive });
  };

  toggleCard() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    var iStyle = {
      fontSize: '2rem'
    };

    const { product } = this.props;
    return (
      <Card className="mb-4">
        <img
          src={product.img}
          alt="Detail"
          className="card-img-top"
        />

        <CardBody>
          <p className="text-muted text-small mb-2">
            <IntlMessages id={product.name + " "} />
            <i className="simple-icon-location-pin" />
            <IntlMessages id={" " + product.companyLocation} />
          </p>
          <p className="text-muted text-small mb-2">
            <IntlMessages id={product.companyDescription} />
          </p>
          <p className="text mb-2">
            <b> <IntlMessages id={product.title} /> </b>
          </p>
          <p className="mb-3">
              {product.notes}
            </p>
          <Collapse isOpen={this.state.collapse}>
          <p className="text-muted text-small mb-2">
            <IntlMessages id={"About " + product.name} />
          </p>
            <p className="mb-3">
              {product.description}
            </p>

            <p className="text-muted mb-2">
              <IntlMessages id="Target Audiance" />
            </p>
            <p className="mb-4" text-large>
              {product.gender.map(g => {
                if (g === "Female") {
                  return <i style={iStyle} className="iconsmind-Girl" />
                }
                if (g === "Male") {
                  return <i style={iStyle} className="iconsmind-Boy" />
                }
              })}
            </p>
            <p className="mb-3">
              <IntlMessages id="Age: " />
              {product.ageMin} - {product.ageMax}
            </p>

            <p className="mb-3">
              <i className="simple-icon-location-pin" />
              <IntlMessages id={" " + product.location} />
            </p>


            <p className="text-muted text-small mb-2">
              <IntlMessages id="Interests" />
            </p>
            <div className="mb-3">
              <p className="d-sm-inline-block mb-1">
                {product.interests.map(i => {
                  return (
                    <Badge color="outline-secondary mb-1 mr-1" pill>
                      {i}
                    </Badge>
                  )
                })}
              </p>
            </div>

            <p className="text-muted text-small mb-2">
              <IntlMessages id="Goals" />
            </p>
            <div className="mb-3">
              <p className="d-sm-inline-block mb-1">
                {product.goals.map(i => {
                  return (
                    <Badge color="outline-info mb-1 mr-1" pill>
                      {i}
                    </Badge>
                  )
                })}
              </p>
            </div>

            <p className="text-muted text-small mb-2">
              <IntlMessages id="How" />
            </p>
            <div className="mb-3">
              <p className="d-sm-inline-block mb-1">
                {product.how.map(i => {
                  return (
                    <Badge color="outline-info mb-1 mr-1" pill>
                      {i}
                    </Badge>
                  )
                })}
              </p>
            </div>
            <p className="text-muted text-small mb-2">
              <IntlMessages id="Match" />
            </p>
            <div className="mb-3">
              <Rating total={5} rating={5} interactive={false} />
            </div>

            <p className="text-muted text-small mb-2">
              <IntlMessages id="Add to Favorites" />
            </p>
            <Button
              outline
              color="secondary"
              className="mb-2"
              onClick={this.checkButton}
              active={this.state.isButtonActive}
            >
              <i className="simple-icon-heart" />

            </Button>
          </ Collapse>

            <Button
              outline
              color={"theme-3"}
              className={`icon-button ml-1 rotate-icon-click ${
                this.state.collapse ? "rotate" : ""
                }`}
              onClick={this.toggleCard}
            >
              {this.state.collapse ? <i className="simple-icon-arrow-up" /> : <i className="simple-icon-arrow-down" />}
            </Button>
        </CardBody>
      </Card>
    );
  }
}

export default OpportunityCard