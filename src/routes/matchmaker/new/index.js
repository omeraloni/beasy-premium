import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import Select from "react-select";
import MatchMakerData from "Data/MatchMakerFormData";
import DatePicker from "react-datepicker";
import Switch from "rc-switch";
import InlineCheckboxes from "Components/Beasy/MatchMaker/Inputs/InlineCheckboxes"
import MultiSelect from "Components/Beasy/MatchMaker/Inputs/MultiSelect"
import Checkboxes from "Components/Beasy/MatchMaker/Inputs/Checkboxes"
import DoubleSlider from "Components/Beasy/MatchMaker/Inputs/DoubleSlider"
import countryList from 'country-list'
import CustomSelectInput from "Components/CustomSelectInput";
import { database } from '../../../firebase';
import axios from 'axios';

import {
  Row,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
  Form,
} from "reactstrap";

import "react-tagsinput/react-tagsinput.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-switch/assets/index.css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "react-fine-uploader/gallery/gallery.css";
import {withRouter} from 'react-router-dom';

class FormsUi extends Component {
  constructor(props) {
    super(props);
    this.handleLookingFor = this.handleLookingFor.bind(this);
    this.handleIsPublic = this.handleIsPublic.bind(this);
    this.handleGoalsChange = this.handleGoalsChange.bind(this);
    this.handleHowChange = this.handleHowChange.bind(this);
    this.handleAchieveChange = this.handleAchieveChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);

    this.state = {
      lookingFor: [],
      isPublic: true,
      goalsOptions: [],
      howOptions: [],
      achieveOptions: [],
      genderOptions: [],
      ageMin: MatchMakerData.age().defaultMin,
      ageMax: MatchMakerData.age().defaultMax,
      countriesOptions: [{value: "United States", label:"United States"}],
      interestOptions: [],
      budgetMin: MatchMakerData.budget().defaultMin,
      budgetMax: MatchMakerData.budget().defaultMax,
      startDateRange: null,
      endDateRange: null,
      notes: ""
    };
  }

  handleLookingFor = (event, id) => {
    const { lookingFor } = { ...this.state }

    if (event.target.checked) {
      lookingFor.push(id)
    } else {
      lookingFor.splice(lookingFor.indexOf(id), 1)
    }

    this.setState({ lookingFor: [...lookingFor] })
  }

  handleIsPublic = isPublic => {
    this.setState({ isPublic });
  };

  handleGoalsChange = goalsOptions => {
    this.setState({ goalsOptions });
  };

  handleHowChange = howOptions => {
    this.setState({ howOptions });
  };

  handleAchieveChange = (event, id) => {
    const { achieveOptions } = { ...this.state }

    if (event.target.checked) {
      achieveOptions.push(id)
    } else {
      achieveOptions.splice(achieveOptions.indexOf(id), 1)
    }

    this.setState({ achieveOptions: [...achieveOptions] })
  }

  handleGenderChange = (event, id) => {
    const { genderOptions } = { ...this.state }

    if (event.target.checked) {
      genderOptions.push(id)
    } else {
      genderOptions.splice(genderOptions.indexOf(id), 1)
    }

    this.setState({ genderOptions: [...genderOptions] })
  }
  handleAgeChange = value => {
    this.setState({ ageMin: value[0] });
    this.setState({ ageMax: value[1] });
  };

  handleCountriesChange = countriesOptions => {
    this.setState({ countriesOptions });
  };

  handleInterestChange = interestOptions => {
    this.setState({ interestOptions });
  };

  handleBudgetChange = value => {
    this.setState({ budgetMin: value[0] });
    this.setState({ budgetMax: value[1] });
  };

  handleChangeStart = startDateRange => {
    this.setState({ startDateRange });
  };

  handleChangeEnd = endDateRange => {
    this.setState({ endDateRange });
  };

  handleNotesChange = event => {
    this.setState({ notes: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault()
    var random = Math.floor(Math.random() * 10000000);

    database.ref('goals/' + random).set({
      isPublic: this.state.isPublic,
      lookingFor: this.state.lookingFor,
      goalsOptions: this.state.goalsOptions,
      howOptions: this.state.howOptions,
      achieveOptions: this.state.achieveOptions,
      genderOptions: this.state.genderOptions,
      ageMin: this.state.ageMin,
      ageMax: this.state.ageMax,
      countriesOptions: this.state.countriesOptions,
      interestOptions: this.state.interestOptions,
      budgetMin: this.state.budgetMin,
      budgetMax: this.state.budgetMax,
      startDateRange: this.state.startDateRange + ''.split('T', 1)[0],
      endDateRange: this.state.endDateRange + ''.split('T', 1)[0],
      notes: this.state.notes
    });
    var stateToSend = {...this.state};
    stateToSend.startDateRange = "";
    stateToSend.endDateRange = "";
    this.props.history.push({
      pathname: '/app/matchmaker/results',
      state: { product: stateToSend }
    })

      // axios.get('http://localhost:8080/nlu/analyze', {
      //   params: {
      //     text: 'Patagonia is an outdoor apparel company based in Ventura, California. A certified B-Corporation, Patagonia’s mission is to build the best product, cause no unnecessary harm and use its business to inspire and implement solutions to the environmental crisis.',
      //     features: {
      //       "sentiment": {}, "keywords": {}, "categories": {}, "concepts": {
      //         "limit": 3
      //       },
      //       "entities": {
      //         "sentiment": true,
      //         "limit": 5
      //       },
      //       "relations": {},
      //       "semantic_roles": {},


      //     }
      //   }
      // }).then(response => {
      //   console.log("sentiment");
      //   console.log(response.data.sentiment);
      //   console.log("keywords");
      //   console.log(response.data.keywords);
      //   console.log("categories");
      //   console.log(response.data.categories);
      //   console.log("concepts");
      //   console.log(response.data.concepts);
      //   console.log("entities");
      //   console.log(response.data.entities);
      //   console.log("relations");
      //   console.log(response.data.relations);
      //   console.log("semantic_roles");
      //   console.log(response.data.semantic_roles);
      // }).catch(error => console.error(error));;

  }

  render() {
    const countries = countryList().getNames().map(c => { return ({ value: c, label: c }) })
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="matchmaker.matchmaker" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Label>
          <IntlMessages id="matchmaker.tellUs" />
        </Label>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row className="mb-5">
                    <Colxx sm={10}>
                      <InlineCheckboxes
                        data={MatchMakerData.lookingFor()}
                        onChangeHandler={this.handleLookingFor} />
                    </Colxx>
                    <Colxx sm={2}>
                      <Label>
                        <IntlMessages id="matchmaker.public" />
                      </Label>
                      <Switch
                        name="public"
                        className="custom-switch custom-switch-primary"
                        checked={this.state.isPublic}
                        onChange={this.handleIsPublic}
                      />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row className="mb-5">
                    <Colxx sm={6}>
                      <FormGroup>
                        <MultiSelect
                          data={MatchMakerData.goals()}
                          values={this.state.goalsOptions}
                          onChangeHandler={this.handleGoalsChange}
                        />
                      </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                      <FormGroup>
                        <MultiSelect
                          data={MatchMakerData.how()}
                          values={this.state.howOptions}
                          onChangeHandler={this.handleHowChange}
                        />
                      </FormGroup>
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Colxx sm={6}>
                      <FormGroup >
                        <Checkboxes data={MatchMakerData.achieve()} onChangeHandler={this.handleAchieveChange} />
                      </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                      <FormGroup>
                        <Label className="pt-0" className="mb-3">
                          <IntlMessages id="matchmaker.target-audience" />
                        </Label>
                        <FormGroup row>
                        <Colxx sm={12}>
                            <FormGroup>
                              <DoubleSlider data={MatchMakerData.age()} onChangeHandler={this.handleAgeChange} />
                            </FormGroup>
                          </Colxx>
                        </FormGroup>
                        <FormGroup row>
                          <Colxx sm={6}>
                            <FormGroup>
                              <Checkboxes data={MatchMakerData.gender()} onChangeHandler={this.handleGenderChange} />
                            </FormGroup>
                          </Colxx>
                          <Colxx sm={6}>
                            <FormGroup>
                              <Label className="pt-0">
                                <IntlMessages id={"matchmaker.lAdd to Favoritesocations"} />
                              </Label>
                              <Colxx>
                                <Select
                                  components={{ Input: CustomSelectInput }}
                                  className="react-select"
                                  classNamePrefix="react-select"
                                  isMulti
                                  name={"countries"}
                                  value={this.state.countriesOptions}
                                  onChange={this.handleCountriesChange}
                                  options={countries}
                                />

                              </Colxx>
                            </FormGroup>
                          </Colxx>

                        </FormGroup>
                        <FormGroup row>
                             <Colxx sm={12}>
                            <FormGroup>
                              <MultiSelect
                                data={MatchMakerData.interest()}
                                values={this.state.interestOptions}
                                onChangeHandler={this.handleInterestChange}
                              />                            </FormGroup>
                          </Colxx>
                        </FormGroup>
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <FormGroup row className="mb-5">
                    <DoubleSlider data={MatchMakerData.budget()} onChangeHandler={this.handleBudgetChange} />
                  </FormGroup>

                  <FormGroup row className="mb-5 mt-5">
                    <Colxx sm={1}>
                      <Label>
                        <IntlMessages id="matchmaker.duration" />
                      </Label>
                    </Colxx>
                    <Colxx>
                      <Row className="mb-3">
                        <Colxx xxs="6">
                          <DatePicker
                            selected={this.state.startDateRange}
                            selectsStart
                            startDate={this.state.startDateRange}
                            endDate={this.state.endDateRange}
                            onChange={this.handleChangeStart}
                            placeholderText="Start"
                          />
                        </Colxx>
                        <Colxx xxs="6">
                          <DatePicker
                            selected={this.state.endDateRange}
                            selectsEnd
                            startDate={this.state.startDateRange}
                            endDate={this.state.endDateRange}
                            onChange={this.handleChangeEnd}
                            placeholderText="End"
                          />
                        </Colxx>
                      </Row>
                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <Label>
                      <IntlMessages id="matchmaker.notes" />
                    </Label>
                    <Input type="textarea" name="notes" id="notes" style={{ height: 150 }} onChange={this.handleNotesChange} />
                  </FormGroup>


                    <Button color="primary">
                      <IntlMessages id="matchmaker.getBeasy" />
                    </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

      </Fragment>
    );
  }
}

export default withRouter(FormsUi);
