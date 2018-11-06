import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Progress,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  CustomInput,
  CardHeader
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import { CalendarToolbar } from "Components/Calendar/CalendarToolbar";
import { PolarShadow, LineShadow, SmallLineChart } from "Components/Charts";
import {
  visitChartConfig,
  conversionChartConfig,
  lineChartConfig,
  polarChartConfig,
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "Constants/chartConfig";

import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactTable from "react-table";
import CircularProgressbar from "react-circular-progressbar";
import { Chart } from "react-chartjs-2";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import Rating from "Components/Rating";
import DataTablePagination from "Components/DataTables/pagination";
import Sortable from "react-sortablejs";

import "chartjs-plugin-datalabels";
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-table/react-table.css";

import eventsData from "Data/events.json";
import ticketsData from "Data/tickets.json";
import logsData from "Data/logs.json";
import productsData from "Data/products.json";
import profileStatusData from "Data/dashboard.profile.status.json";
import cakeData from "Data/dashboard.cakes.json";

Chart.defaults.global.plugins.datalabels.display = false;

const selectData = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

const selectDataType = [
  { label: "Cake", value: "cake", key: 0 },
  { label: "Cupcake", value: "cupcake", key: 1 },
  { label: "Dessert", value: "dessert", key: 2 }
];

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Partner",
    accessor: "partner",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Goal",
    accessor: "goal",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];

const recentOrders = productsData.data.slice(0, 6);
const tickets = ticketsData.data;
const events = eventsData.data;
const logs = logsData.data;
const dataTableData = productsData.data.slice(0, 12);
const profileStatuses = profileStatusData.data;
const cakes = cakeData.data;

BigCalendar.momentLocalizer(moment);
export default class MyDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);

    this.state = {
      selectedOptions: [],
      selectedOptionsType: []
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChangeType = selectedOptionsType => {
    this.setState({ selectedOptionsType });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.dashboard" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx lg="12" xl="6">
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={false}
              >
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Alarm" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboard.pending-requests" />
                      </p>
                      <p className="lead text-center">8</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Basket-Coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboard.collaborations" />
                      </p>
                      <p className="lead text-center">11</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Arrow-Refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboard.projects-in-progress" />
                      </p>
                      <p className="lead text-center">4</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsmind-Mail-Read" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.new-comments" />
                      </p>
                      <p className="lead text-center">25</p>
                    </CardBody>
                  </Card>
                </div>
              </ReactSiemaCarousel>
            </div>

            <Row>
              <Colxx md="12" className="mb-4">
                <Card>
                  <div className="position-absolute card-top-buttons">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color=""
                        className="btn btn-header-light icon-button"
                      >
                        <i className="simple-icon-refresh" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <IntlMessages id="dashboards.sales" />
                        </DropdownItem>
                        <DropdownItem>
                          <IntlMessages id="dashboards.orders" />
                        </DropdownItem>
                        <DropdownItem>
                          <IntlMessages id="dashboards.refunds" />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <CardBody>
                    <CardTitle>
                      <IntlMessages id="dashboard.calender" />
                    </CardTitle>
                    <BigCalendar
                      style={{ minHeight: "500px" }}
                      events={events}
                      views={["month"]}
                      components={{
                        toolbar: CalendarToolbar
                      }}
                    />
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx lg="12" xl="6" className="mb-4">
            <Card>
              <div className="position-absolute card-top-buttons">
                <button className="btn btn-header-light icon-button">
                  <i className="simple-icon-refresh" />
                </button>
              </div>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboard.projects" />
                </CardTitle>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {recentOrders.map((order, index) => {
                      return (
                        <div key={index} className="d-flex flex-row mb-3">
                          <NavLink
                            to="/app/layouts/details"
                            className="d-block position-relative"
                          >
                            <img
                              src={order.img}
                              alt={order.name}
                              className="list-thumbnail border-0"
                            />
                            <Badge
                              key={index}
                              className="position-absolute badge-top-right"
                              color={order.statusColor}
                              pill
                            >
                              {order.status}
                            </Badge>
                          </NavLink>

                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <NavLink to="/app/layouts/details">
                              <p className="list-item-heading">{order.name}</p>
                              <div className="pr-4">
                                <p className="text-muted mb-1 text-small">
                                  {order.description}
                                </p>
                              </div>
                              <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                                {order.createDate}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.work-progress" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={75}
                    text={"75%"}
                  />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.tasks-completed" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={32}
                    text={"32%"}
                  />
                </div>
              </CardBody>
            </Card>

          </Colxx>
        </Row>

        <Row>
          <Colxx xl="6" lg="12" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboard.project-list" />
                </CardTitle>
                <ReactTable
                  defaultPageSize={6}
                  data={dataTableData}
                  columns={dataTableColumns}
                  minRows={0}
                  PaginationComponent={DataTablePagination}
                />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="6" lg="12" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.profile-status" />
                </CardTitle>
                {profileStatuses.map((s, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <p className="mb-2">
                        {s.title}
                        <span className="float-right text-muted">
                          {s.status}/{s.total}
                        </span>
                      </p>
                      <Progress value={(s.status / s.total) * 100} />
                    </div>
                  );
                })}
              </CardBody>
            </Card>

          </Colxx>
        </Row>
        <Row>
          <Colxx sm="12" md="6" className="mb-4">
            <Card className="dashboard-filled-line-chart">
              <CardBody>
                <div className="float-left float-none-xs">
                  <div className="d-inline-block">
                    <h5 className="d-inline">
                      <IntlMessages id="dashboard.goal-impression" />
                    </h5>
                    <span className="text-muted text-small d-block">
                      <IntlMessages id="dashboards.unique-visitors" />
                    </span>
                  </div>
                </div>

                <div className="btn-group float-right float-none-xs mt-2">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="primary"
                      className="btn-xs"
                      outline
                    >
                      <IntlMessages id="dashboards.this-week" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <IntlMessages id="dashboards.last-week" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="dashboards.this-month" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </CardBody>

              <div className="chart card-body pt-0">
                <LineShadow {...visitChartConfig} />
              </div>
            </Card>
          </Colxx>
          <Colxx sm="12" md="6" className="mb-4">
            <Card className="dashboard-filled-line-chart">
              <CardBody>
                <div className="float-left float-none-xs">
                  <div className="d-inline-block">
                    <h5 className="d-inline">
                      <IntlMessages id="dashboards.conversion-rates" />
                    </h5>
                    <span className="text-muted text-small d-block">
                      <IntlMessages id="dashboards.per-session" />
                    </span>
                  </div>
                </div>

                <div className="btn-group float-right float-none-xs mt-2">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      color="secondary"
                      className="btn-xs"
                      outline
                    >
                      <IntlMessages id="dashboards.this-week" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <IntlMessages id="dashboards.last-week" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="dashboards.this-month" />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </CardBody>

              <div className="chart card-body pt-0">
                <LineShadow {...conversionChartConfig} />
              </div>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
