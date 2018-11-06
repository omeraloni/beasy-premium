import React, { Component, Fragment } from "react";
import {
  Row,
  CardTitle,
} from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import products from "Data/products.json";
import moreProducts from "Data/moreProducts.json";
import ResultCard from "Components/Beasy/Results/ResultCard"
import MoreResultCard from "Components/Beasy/Results/MoreResultCard"
import { withRouter } from 'react-router-dom';

class ImageListLayout extends Component {
  constructor(props) {
    super(props);
    this.intersectLabeled = this.intersectLabeled.bind(this);
    this.intersect = this.intersect.bind(this);
    this.intersectFreeText = this.intersectFreeText.bind(this);
    this.setNumberOfMatches = this.setNumberOfMatches.bind(this);
    this.getTheBestProducts = this.getTheBestProducts.bind(this);
    this.getPrecentage = this.getPrecentage.bind(this);
    
    this.state = [];
  }

  intersectLabeled = (array1, array2) => {
    array1 = array1.map(e => this.removeSpecialChars(e.label))
    array2 = array2.map(e => this.removeSpecialChars(e))

    return array1.filter(element => { 
      return (-1 !== array2.indexOf(element));
    });
  }

  intersect = (array1, array2) => {
    array1 = array1.map(e => this.removeSpecialChars(e))
    array2 = array2.map(e => this.removeSpecialChars(e))

    return array1.filter(element => { 
      return (-1 !== array2.indexOf(element));
    });
  }

  intersectFreeText = (array, text) => {
    array = array.map(e => this.removeSpecialChars(e))

    text = this.removeSpecialChars(text)

    return array.filter(element => { 
      return (text.includes(element));
    });
  }

  removeSpecialChars(str){
    return str.replace(/[^A-Z0-9]+/ig, "").toLowerCase()
  }

  setNumberOfMatches = (goal, product) => {
    var numberOfMatches = 0;
    numberOfMatches += this.intersectLabeled(goal.interestOptions, product.interests).length
    numberOfMatches += this.intersect(goal.genderOptions, product.gender).length
    numberOfMatches += this.intersectLabeled(goal.goalsOptions, product.goals).length
    numberOfMatches += this.intersectLabeled(goal.howOptions, product.how).length
    numberOfMatches += this.intersectFreeText(goal.lookingFor, product.title).length
    product.numberOfMatches = this.getPrecentage(numberOfMatches);
  }

  getPrecentage = (numberOfMatches) => {
    var precentage = 0.0;
    var i;
    for (i = 1; i<=numberOfMatches/2; i++){
        precentage += Math.pow(0.5, i);
    }
    precentage = precentage * 100
    return precentage;
  }

  getTheBestProducts = (goal, max) => {
    return products.data.sort((first, second) => {
      this.setNumberOfMatches(goal, first)
      this.setNumberOfMatches(goal, second)
      var firstMatches = first.numberOfMatches
      var secondMatches = second.numberOfMatches
      if (firstMatches < secondMatches) {
        return 1;
      }
      if (firstMatches > secondMatches) {
        return -1;
      }
      return 0;
    }).slice(0, max)
  }

  componentWillMount () {
    const goal = this.props.location.state.product
    console.log("Calculating")
    var best = this.getTheBestProducts(goal, 4)
    console.log(best)
    this.setState({bestProducts: [...best] })
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
                  1400: 2
                }}
                loop={false}
              >
                {this.state.bestProducts.map(p => {
                  return (
                    <div className="pr-3 pl-3" key={p.id} >
                      <ResultCard product={p} />
                    </div>
                  )
                })}

              </ReactSiemaCarousel>
            </Colxx>

          </Row>
          <Row>

            <Colxx xxs="12">
              <CardTitle>
                <IntlMessages id="carousel.without-controls" />
              </CardTitle>
            </Colxx>

            <Colxx xxs="12" className="pl-0 pr-0 mb-4">
              <ReactSiemaCarousel
                perPage={{
                  0: 5,
                  480: 6,
                  800: 7,
                  1200: 8
                }}
                controls={false}
                loop={false}
              >
                {moreProducts.data.map(p => {
                  return (
                    <div className="pr-3 pl-3" key={p.id}>
                      <MoreResultCard product={p} />
                    </div>
                  )
                })}
              </ReactSiemaCarousel>
            </Colxx>



          </Row>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ImageListLayout);
