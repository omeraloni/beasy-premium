import React, { Component, Fragment } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import products from "Data/products.json";
import ResultCard from "Components/Beasy/Results/ResultCard"
export default class ImageListLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <CardTitle>
                <IntlMessages id="results.title" />
              </CardTitle>
            </Colxx>
            <Colxx xxs="12" className="pl-0 pr-0 mb-5">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  1000: 2,
                  1400: 3
                }}
                loop={false}
              >
                {products.data.map(p => {
                  return (
                    <div className="pr-3 pl-3">
                    <ResultCard product={p} />
                  </div>
                  )
                })}
                
              </ReactSiemaCarousel>
            </Colxx>

          </Row>
          <Row>
            <Colxx xxs="12">

            </Colxx>
          </Row>
        </div>
      </Fragment>
    );
  }
}
