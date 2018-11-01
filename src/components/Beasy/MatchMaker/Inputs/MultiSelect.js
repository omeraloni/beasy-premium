import React, { Component } from "react";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import Wrapper from "Hoc/Wrapper"

import {
  Label,
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

class MultiSelect extends Component {
    render() {
        const { data, values, onChangeHandler } = this.props;
        return (
            <Wrapper>
                <Label className="pt-0">
                    <IntlMessages id={data.title} />
                </Label>
                <Colxx>
                    <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        isMulti
                        name={data.saveAs}
                        value={values}
                        onChange={onChangeHandler}
                        options={data.ranges}
                    />

                </Colxx>
            </Wrapper>
        );
    }
}

export default MultiSelect