
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
        const { image, name, clickHandler } = this.props;
        return (
            <Card className="mb-4">
            <div className="position-absolute card-top-buttons">
              <Button outline color={"white"} className="icon-button">
                <i className="simple-icon-pencil" />
              </Button>
            </div>
            <img
              src={image}
              alt="Detail"
              className="card-img-top"
            />

            <CardBody>
              <p className="text-muted text-small mb-2">
                <IntlMessages id={name} />
              </p>
              <p className="mb-3">
                It’s all about simplicity…Less is more. Chocolate Cake
                exclusively brings you the classic chocolate cake.
                This cake is the one you always dream of-moist cake
                and creamy chocolate frosting.
                <br />
                <br /> This cake proudly serves itself for a family
                gathering, a dinner party, a birthday celebration, a
                baby christening, and a gift to someone special or
                simply to have on hand on the cake stand at home
                served with an ice cold glass of milk!
              </p>

              <p className="text-muted text-small mb-2">
              <IntlMessages id="layouts.rating" />
              </p>
              <div className="mb-3">
                <Rating total={5} rating={5} interactive={false} />
              </div>

              <p className="text-muted text-small mb-2">
              <IntlMessages id="layouts.price" />
              </p>
              <p className="mb-3">$8,14</p>
              <p className="text-muted text-small mb-2">
                <IntlMessages id="layouts.ingredients" />
              </p>
              <div className="mb-3">
                <p className="d-sm-inline-block mb-1">
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Flour
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Chocolate
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Caster Sugar
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Baking Powder
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Milk
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Eggs
                  </Badge>
                  <Badge color="outline-secondary mb-1 mr-1" pill>
                    Vegetable Oil
                  </Badge>
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