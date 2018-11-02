import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";
import Audience from "Components/Beasy/MatchMaker/Audience"
import DatePicker from "react-datepicker";
import Switch from "rc-switch";
import InlineCheckboxes from "Components/Beasy/MatchMaker/Inputs/InlineCheckboxes"
import MultiSelect from "Components/Beasy/MatchMaker/Inputs/MultiSelect"
import Checkboxes from "Components/Beasy/MatchMaker/Inputs/Checkboxes"
import DoubleSlider from "Components/Beasy/MatchMaker/Inputs/DoubleSlider"

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
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import "react-tagsinput/react-tagsinput.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-switch/assets/index.css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "react-fine-uploader/gallery/gallery.css";

export default class FormsUi extends Component {
  constructor(props) {
    super(props);
    this.handleLookingFor = this.handleLookingFor.bind(this);
    this.handleGoalsChange = this.handleGoalsChange.bind(this);
    this.handleHowChange = this.handleHowChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);

    this.state = {
      lookingFor: [],
      isPublic: true,
      goalsOptions: [],
      howOptions: [],
      achieveOptions: [],
      genderOptions: [],
      ageMin: MatchMakerData.age().min,
      ageMax: MatchMakerData.age().max,
      budgetMin: MatchMakerData.budget().min,
      budgetMax: MatchMakerData.budget().max,
      startDateRange: null,
      endDateRange: null,
      notes: ""
    };
  }

  handleLookingFor = (event, id) => {
    console.log("kakakak")
    console.log(id)

    const { lookingFor } = { ...this.state }
    console.log(lookingFor)
    if (event.target.checked) {
      lookingFor.push(id)
    } else {
      lookingFor.splice(lookingFor.indexOf(id), 1)
    }
    this.setState({ lookingFor: [...lookingFor] })
  }

  handleGoalsChange = goalsOptions => {
    this.setState({ goalsOptions });
  };

  handleHowChange = howOptions => {
    this.setState({ howOptions });
  };

  handleChangeStart = startDateRange => {
    this.setState({ startDateRange });
  };

  handleChangeEnd = endDateRange => {
    this.setState({ endDateRange });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, '  '));

  }

  render() {
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

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Colxx sm={9}>
                      <InlineCheckboxes
                        data={MatchMakerData.lookingFor()}
                        onChangeHandler={this.handleLookingFor} />
                    </Colxx>
                    <Colxx sm={3}>
                      <Label>
                        <IntlMessages id="matchmaker.public" />
                      </Label>
                      <Switch
                        name="public"
                        className="custom-switch custom-switch-primary"
                        checked={this.state.isPublic}
                        onChange={isPublic => {
                          this.setState({ isPublic });
                        }}
                      />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
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
                        <Checkboxes data={MatchMakerData.achieve()} />
                      </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                      <Audience />
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <DoubleSlider data={MatchMakerData.budget()} />
                  </FormGroup>
                  <FormGroup row>
                    <Label>
                      <IntlMessages id="matchmaker.duration" />
                    </Label>
                    <Row className="mb-5">
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
                  </FormGroup>
                  <FormGroup row>
                    <Label className="mt-4">
                      <IntlMessages id="matchmaker.notes" />
                    </Label>
                    <Input type="textarea" name="notes" id="notes" style={{ height: 200 }} />
                  </FormGroup>
                  <Button color="primary">
                    <IntlMessages id="Get Beasy" />
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
