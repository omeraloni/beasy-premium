import React, { Component, Fragment } from "react";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import { RangeTooltip } from "Components/SliderTooltip";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";
import Audience from "Components/Beasy/MatchMaker/Audience"
import DatePicker from "react-datepicker";
import Switch from "rc-switch";

import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button,
  Form,
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import moment from "moment";

import "react-tagsinput/react-tagsinput.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-switch/assets/index.css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "react-fine-uploader/gallery/gallery.css";

export default class FormsUi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageOptions: [],
      goalsOptions: [],
      howOptions: [],
      isPublic: true,
      startDate: null,
      startDateRange: null,
      endDateRange: null,
    };
  }

  handleAgeChange = ageOptions => {
    this.setState({ ageOptions });
  };

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
                <Form>
                  <FormGroup row>
                    <Colxx sm={9}>
                      <Label for="exCustomInline">
                        <IntlMessages id={MatchMakerData.lookingFor().title} />
                      </Label>
                      <div>
                        {MatchMakerData.lookingFor().ranges.map(r => {
                          return (
                            <CustomInput
                              type="checkbox"
                              id={r.value}
                              label={r.label}
                              inline
                            />)
                        })}
                      </div>
                    </Colxx>
                    <Colxx sm={3}>
                      <label>
                        <IntlMessages id="matchmaker.public" />
                      </label>
                      <Switch
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
                        <Label className="pt-0">
                          <IntlMessages id={MatchMakerData.mainGoals().title} />
                        </Label>
                        <Colxx>
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            isMulti
                            name="goals"
                            value={this.state.goalsOptions}
                            onChange={this.handleGoalsChange}
                            options={MatchMakerData.mainGoals().ranges}
                          />

                        </Colxx>
                      </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                      <FormGroup>
                        <Label className="pt-0">
                          <IntlMessages id={MatchMakerData.how().title} />
                        </Label>
                        <Colxx>
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            isMulti
                            name="how"
                            value={this.state.howOptions}
                            onChange={this.handleHowChange}
                            options={MatchMakerData.how().ranges}
                          />

                        </Colxx>
                      </FormGroup>
                    </Colxx>
                  </FormGroup>

                  <FormGroup row>
                    <Colxx sm={6}>
                      <FormGroup >
                        <Label className="pt-0">
                          <IntlMessages id={MatchMakerData.achieve().title} />
                        </Label>
                        <Colxx>
                          {MatchMakerData.achieve().ranges.map(r => {
                            return (
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" key={r.value} name={r.value} />
                                  <IntlMessages id={r.label} />
                                </Label>
                              </FormGroup>
                            )
                          })}

                        </Colxx>
                      </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                      <Audience />
                    </Colxx>
                  </FormGroup>
                  <FormGroup>
                    <Label className="pt-0">
                      <IntlMessages id="matchmaker.age" />
                    </Label>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        isMulti
                        name="age"
                        value={this.state.ageOptions}
                        onChange={this.handleAgeChange}
                        options={MatchMakerData.age().ranges}
                      />

                    </Colxx>
                  </FormGroup>
                  <FormGroup row>
                    <label>
                      <IntlMessages id="matchmaker.budget" />
                    </label>
                    <RangeTooltip
                      min={100}
                      max={10000}
                      className="mb-5"
                      defaultValue={[1000, 5000]}
                      allowCross={false}
                      pushable={100}
                    />
                  </FormGroup>
                  <FormGroup row>
                    <label>
                      <IntlMessages id="matchmaker.duration" />
                    </label>
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
