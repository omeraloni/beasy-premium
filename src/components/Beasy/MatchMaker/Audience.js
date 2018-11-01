import React, { Component } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";
import Checkboxes from "./Inputs/Checkboxes";
import DoubleSlider from "./Inputs/DoubleSlider"

import {
    FormGroup,
    Label,
    CustomInput
} from "reactstrap";

class Audiance extends Component {
    render() {
        return (
            <FormGroup>
                <Label className="pt-0">
                    <IntlMessages id="Target Audience" />
                </Label>
                <FormGroup row>
                    <Colxx sm={6}>
                    <FormGroup>
                        <Checkboxes data={MatchMakerData.gender()} />
                    </FormGroup>
                    </Colxx>
                    <Colxx sm={6}>
                    <FormGroup>
                        <DoubleSlider data={MatchMakerData.age()} />
                    </FormGroup>
                    </Colxx>
                </FormGroup>
            </FormGroup>
        );
    }
}

export default Audiance