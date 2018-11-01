import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import Wrapper from "Hoc/Wrapper"
import {
    Label,
    CustomInput
} from "reactstrap";

class Checkboxes extends Component {
    render() {
        const { data } = this.props;
        return (
            <Wrapper>
                <Label className="pt-0" for={data.title}>
                    <IntlMessages id={data.title} />
                </Label>
                <div>
                    {data.ranges.map(r => {
                        return (
                            <CustomInput
                                key={r.value}
                                type="checkbox"
                                id={r.value}
                                label={r.label}
                                name={r.value}
                            />
                        )
                    })}
                </div>

            </Wrapper>
        );
    }
}

export default Checkboxes