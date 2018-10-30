
import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Card,
  CardBody,
  Button,
  Badge
} from "reactstrap";
import Rating from "Components/Rating";

class OpportunityCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Card className="mb-4">
        <div className="position-absolute card-top-buttons">
          <Button outline color={"white"} className="icon-button">
            <i className="simple-icon-pencil" />
          </Button>
        </div>
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
            {product.description}
          </p>

          <p className="text-muted mb-2">
            <IntlMessages id="Target Audiance" />
          </p>
          <p className="mb-3">
            <IntlMessages id="Gender: " />
            {product.gender.map(g => {
              if (g === "Female") {
                return <i className="iconsmind-Business-Woman" />
              }
              if (g === "Male") {
                return <i className="iconsmind-Business-Man" />
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
            <IntlMessages id="Extra Notes" />
          </p>
          <p className="mb-3">
            {product.notes}
          </p>
          <p className="text-muted text-small mb-2">
            <IntlMessages id="Match" />
          </p>
          <div className="mb-3">
            <Rating total={5} rating={5} interactive={false} />
          </div>

        </CardBody>
      </Card>
    );
  }
}

export default OpportunityCard