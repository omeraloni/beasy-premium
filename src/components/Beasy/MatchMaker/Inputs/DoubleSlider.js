import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import Wrapper from "Hoc/Wrapper"
import { RangeTooltip } from "Components/SliderTooltip";
import {
    Label
} from "reactstrap";

class DoubleSlider extends Component {
    render() {
        const { data , onChangeHandler} = this.props;
        return (
            <Wrapper>
                <Label className="pt-0" for={data.saveAs}>
                    <IntlMessages id={data.title} />
                </Label>
                <RangeTooltip
                    name={data.saveAs}
                    min={data.min}
                    max={data.max}
                    className="mb-5"
                    defaultValue={[data.defaultMin, data.defaultMax]}
                    allowCross={false}
                    pushable={data.min}
                    onChange={onChangeHandler}
                    step={data.step}
                />
            </Wrapper>
        );
    }
}

export default DoubleSlider