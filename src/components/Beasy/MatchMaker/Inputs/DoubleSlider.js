import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import Wrapper from "Hoc/Wrapper"
import { RangeTooltip } from "Components/SliderTooltip";
import {
    Label,
    CustomInput
} from "reactstrap";

class DoubleSlider extends Component {
    render() {
        const { data, isDollar } = this.props;
        return (
            <Wrapper>
                <Label className="pt-0" for={data.saveAs}>
                    <IntlMessages id={data.title} />
                </Label>
                <RangeTooltip
                    min={data.min}
                    max={data.max}
                    className="mb-5"
                    defaultValue={[data.defaultMin, data.defaultMax]}
                    allowCross={false}
                    pushable={data.min}
                    isDollar= {data.isDollar}
                />
            </Wrapper>
        );
    }
}

export default DoubleSlider