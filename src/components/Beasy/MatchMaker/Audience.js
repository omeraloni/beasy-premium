import React, { Component } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import MatchMakerData from "Data/MatchMakerFormData";
import Checkboxes from "./Inputs/Checkboxes";

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
                    <FormGroup>
                        <Checkboxes data={MatchMakerData.gender()} />   
                    </FormGroup>

                    <FormGroup>
                        <Label className="pt-0" for="genderRadio">
                            <IntlMessages id="Gender" />
                        </Label>
                        <Colxx sm={6}>

                            <div>
                                <CustomInput
                                    type="checkbox"
                                    id="male"
                                    label="Male"
                                    name="male"
                                />
                                <CustomInput
                                    type="checkbox"
                                    id="female"
                                    label="Female"
                                    name="female"
                                />
                            </div>

                        </Colxx>
                    </FormGroup>
                </FormGroup>
            </FormGroup>
        );
    }
}

export default Audiance