import React, { Component } from "react";
import IntlMessages from "Util/IntlMessages";
import { Badge } from 'reactstrap';

class ComingSoonBadge extends Component {
    render() {
        return (

            <Badge color="outline-dark" pill className="mb-1">
                <IntlMessages id="Coming Soon" />
            </Badge>
        );
    }
}

export default ComingSoonBadge