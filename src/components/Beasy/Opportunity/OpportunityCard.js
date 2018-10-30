
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
        const { product} = this.props;
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
                <IntlMessages id={product.name} />
              </p>
              <p className="text mb-2">
                <IntlMessages id={product.title} />
              </p>
              <p className="mb-3">
                {product.description}
              </p>

              <p className="text-muted text-small mb-2">
              <IntlMessages id="layouts.rating" />
              </p>
              <div className="mb-3">
                <Rating total={5} rating={5} interactive={false} />
              </div>

              <p className="text-muted text-medium mb-2">
              <IntlMessages id="Target Audiance" />
              </p>
              <p className="mb-3">              
                 <IntlMessages id="Gender: " /> 
                  {product.gender.map(g => {
                    return g + "  "
                  })}
              </p>
              <p className="mb-3">              
                 <IntlMessages id="Age: " /> 
                  {product.ageMax}
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
              <IntlMessages id="layouts.is-vegan" />
              </p>
              <p>No</p>
            </CardBody>
          </Card>
        );
    }
}

export default OpportunityCard