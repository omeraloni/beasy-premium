import React, { Component, Fragment } from "react";
import OpportunityCard from 'Components/Beasy/Opportunity/OpportunityCard'
import {
  Row,
  Card,
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonDropdown,
  UncontrolledDropdown,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import products from "Data/products.json";
import Pagination from "Components/List/Pagination";
export default class ImageListLayout extends Component {
  constructor(props) {
    super(props);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.dataListRender = this.dataListRender.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.toggleDisplayOptions = this.toggleDisplayOptions.bind(this);

    const pageSizes = [8, 12, 16, 24, 50, 100];
    const orderOptions = [
      {
        column: "name",
        label: "Product Name"
      },
      {
        column: "category",
        label: "Category"
      },
      {
        column: "status",
        label: "Status"
      }
    ];

    this.state = {
      dropdownSplitOpen: false,
      modalOpen: false,
      displayMode: "imagelist",
      pageSizes: pageSizes,
      selectedPageSize: pageSizes[0],
      orderOptions,
      selectedOrderOption: orderOptions[0],
      currentPage: 1,
      totalItemCount: 0,
      startIndex: 0,
      endIndex: 10,
      totalPage: 1,
      items: products.data,
      search: "",
      selectedItems: [],
      categories: [],
      lastChecked: null,
      displayOptionsIsOpen: false
    };
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
  toggleDisplayOptions() {
    this.setState({ displayOptionsIsOpen: !this.state.displayOptionsIsOpen });
  }
  toggleSplit() {
    this.setState(prevState => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen
    }));
  }
  changeOrderBy(column) {
    this.setState(
      {
        selectedOrderOption: this.state.orderOptions.find(
          x => x.column === column
        )
      },
      () => this.dataListRender()
    );
  }
  changePageSize(size) {
    this.setState(
      {
        selectedPageSize: size,
        currentPage: 1
      },
      () => this.dataListRender()
    );
  }
  changeDisplayMode(mode) {
    this.setState({
      displayMode: mode
    });
    return false;
  }
  onChangePage(page) {
    this.setState(
      {
        currentPage: page
      },
      () => this.dataListRender()
    );
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.setState(
        {
          search: e.target.value.toLowerCase()
        },
        () => this.dataListRender()
      );
    }
  }

  handleCheckChange(id) {
    if (this.state.lastChecked == null) {
      this.setState({
        lastChecked: id
      });
    }

    let selectedItems = this.state.selectedItems;
    if (selectedItems.includes(id)) {
      selectedItems = selectedItems.filter(x => x !== id);
    } else {
      selectedItems.push(id);
    }
    this.setState({
      selectedItems
    });

    if (event.shiftKey) {
      var items = this.state.items;
      var start = this.getIndex(id, items, "id");
      var end = this.getIndex(this.state.lastChecked, items, "id");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems.push(
        ...items.map(item => {
          return item.id;
        })
      );
      selectedItems = Array.from(new Set(selectedItems));
      this.setState({
        selectedItems
      });
    }
  }

  isSelected(product) {
    return this.state.selectedItems.includes(product.id)
  }
  getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }

  handleChangeSelectAll() {
    if (this.state.selectedItems.length >= this.state.items.length) {
      this.setState({
        selectedItems: []
      });
    } else {
      this.setState({
        selectedItems: this.state.items.map(x => x.id)
      });
    }
  }
  componentDidMount() {
    this.setState(
      {
        categories: [...new Set(this.state.items.map(x => x.category))].map(
          x => {
            return { label: x, value: x, key: x };
          }
        )
      },
      () => {
        this.dataListRender();
      }
    );
  }

  dataListRender() {
    let items =
      this.state.search.length > 0
        ? products.data.filter(p => {
          return (
            p.category.toLowerCase().indexOf(this.state.search) > -1 ||
            p.name.toLowerCase().indexOf(this.state.search) > -1
          );
        })
        : products.data;

    const totalItemCount = items.length;
    let totalPage = parseInt(totalItemCount / this.state.selectedPageSize, 10);
    totalPage =
      totalItemCount % this.state.selectedPageSize > 0
        ? totalPage + 1
        : totalPage;
    const startIndex =
      (this.state.currentPage - 1) * this.state.selectedPageSize;
    const endIndex =
      startIndex + this.state.selectedPageSize <= totalItemCount
        ? startIndex + this.state.selectedPageSize
        : totalItemCount;
    items = items
      .sort((a, b) => {
        if (
          a[this.state.selectedOrderOption.column] <
          b[this.state.selectedOrderOption.column]
        )
          return -1;
        else if (
          a[this.state.selectedOrderOption.column] >
          b[this.state.selectedOrderOption.column]
        )
          return 1;
        return 0;
      })
      .slice(startIndex, endIndex);
    this.setState({
      startIndex,
      endIndex,
      totalPage,
      items,
      selectedItems: [],
      totalItemCount
    });
  }
  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1><IntlMessages id="menu.image-list" /></h1>

                <div className="float-sm-right">
                  <Button
                    color="primary"
                    size="lg"
                    className="top-right-button"
                    onClick={this.toggleModal}
                  >
                    <IntlMessages id="layouts.add-new" />
                  </Button>{" "}
                  <Modal
                    isOpen={this.state.modalOpen}
                    toggle={this.toggleModal}
                    wrapClassName="modal-right"
                    backdrop="static"
                  >
                    <ModalHeader toggle={this.toggleModal}>
                      <IntlMessages id="layouts.add-new-modal-title" />
                    </ModalHeader>
                    <ModalBody>
                      <Label>
                        <IntlMessages id="layouts.product-name" />
                      </Label>
                      <Input />
                      <Label className="mt-4">
                        <IntlMessages id="layouts.category" />
                      </Label>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        options={this.state.categories}
                        placeholder={""}
                      />
                      <Label className="mt-4">
                        <IntlMessages id="layouts.description" />
                      </Label>
                      <Input type="textarea" name="text" id="exampleText" />
                      <Label className="mt-4">
                        <IntlMessages id="layouts.status" />
                      </Label>
                      <CustomInput
                        type="radio"
                        id="exCustomRadio"
                        name="customRadio"
                        label="ON HOLD"
                      />
                      <CustomInput
                        type="radio"
                        id="exCustomRadio2"
                        name="customRadio"
                        label="PROCESSED"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" outline onClick={this.toggleModal}>
                        <IntlMessages id="layouts.cancel" />
                      </Button>
                      <Button color="primary" onClick={this.toggleModal}>
                        <IntlMessages id="layouts.submit" />
                      </Button>{" "}
                    </ModalFooter>
                  </Modal>
                  <ButtonDropdown
                    isOpen={this.state.dropdownSplitOpen}
                    toggle={this.toggleSplit}
                  >
                    <div className="btn btn-primary pl-4 pr-0 check-button">
                      <Label
                        for="checkAll"
                        className="custom-control custom-checkbox mb-0 d-inline-block"
                      >
                        <Input
                          className="custom-control-input"
                          type="checkbox"
                          id="checkAll"
                          checked={
                            this.state.selectedItems.length >=
                            this.state.items.length
                          }
                          onClick={() => this.handleChangeSelectAll()}
                        />
                        <span
                          className={`custom-control-label ${
                            this.state.selectedItems.length > 0 &&
                              this.state.selectedItems.length <
                              this.state.items.length
                              ? "indeterminate"
                              : ""
                            }`}
                        />
                      </Label>
                    </div>
                    <DropdownToggle
                      caret
                      color="primary"
                      className="dropdown-toggle-split pl-2 pr-2"
                    />
                    <DropdownMenu right>
                      <DropdownItem>
                        <IntlMessages id="layouts.delete" />
                      </DropdownItem>
                      <DropdownItem>
                        <IntlMessages id="layouts.another-action" />
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>


                <BreadcrumbItems match={this.props.match} />

              </div>

              <div className="mb-2">
                <Button
                  color="empty"
                  id="displayOptions"
                  className="pt-0 pl-0 d-inline-block d-md-none"
                  onClick={this.toggleDisplayOptions}
                >
                  <IntlMessages id="layouts.display-options" />{" "}
                  <i className="simple-icon-arrow-down align-middle" />
                </Button>
                <Collapse isOpen={this.state.displayOptionsIsOpen} className="d-md-block">
                  <span className="mr-3 mb-2 d-inline-block float-md-left">
                    <a
                      className={`mr-2 ${
                        this.state.displayMode === "list" ? "active" : ""
                        }`}
                      onClick={() => this.changeDisplayMode("list")}
                    >
                      <i className="simple-icon-menu view-icon s" />
                    </a>
                    <a
                      className={`mr-2 ${
                        this.state.displayMode === "thumblist" ? "active" : ""
                        }`}
                      onClick={() => this.changeDisplayMode("thumblist")}
                    >
                      <i className="simple-icon-list view-icon" />
                    </a>
                    <a
                      className={`mr-2 ${
                        this.state.displayMode === "imagelist" ? "active" : ""
                        }`}
                      onClick={() => this.changeDisplayMode("imagelist")}
                    >
                      <i className="simple-icon-grid view-icon s" />
                    </a>
                  </span>

                  <div className="d-block d-md-inline-block">
                    <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                      <DropdownToggle caret color="outline-dark" size="xs">
                        <IntlMessages id="layouts.orderby" />
                        {this.state.selectedOrderOption.label}
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.orderOptions.map((order, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              onClick={() => this.changeOrderBy(order.column)}
                            >
                              {order.label}
                            </DropdownItem>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                      <input
                        type="text"
                        name="keyword"
                        id="search"
                        placeholder="Search..."
                        onKeyPress={e => this.handleKeyPress(e)}
                      />
                    </div>
                  </div>
                  <div className="float-md-right">
                    <span className="text-muted text-small mr-1">{`${this
                      .state.startIndex + 1}-${this.state.endIndex} of ${
                      this.state.totalItemCount
                      } `}</span>
                    <UncontrolledDropdown className="d-inline-block">
                      <DropdownToggle caret color="outline-dark" size="xs">
                        {this.state.selectedPageSize}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {this.state.pageSizes.map((size, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              onClick={() => this.changePageSize(size)}
                            >
                              {size}
                            </DropdownItem>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </Collapse>
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            {this.state.items.map(product => {
              if (this.state.displayMode === "imagelist") {
                return (
                  <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
                    <OpportunityCard product={product}/>
                  </Colxx>
                );
              } else if (this.state.displayMode === "thumblist") {
                return (
                  <Colxx xxs="12" key={product.id} className="mb-3">
                    <Card className="d-flex flex-row">
                      <NavLink
                        to={`/app/layouts/data-list?p=${product.id}`}
                        className="d-flex"
                      >
                        <img
                          alt={product.name}
                          src={product.img}
                          className="list-thumbnail responsive border-0"
                        />
                      </NavLink>
                      <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                        <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                          <NavLink
                            to={`/app/layouts/data-list?p=${product.id}`}
                            className="w-40 w-sm-100"
                          >
                            <p className="list-item-heading mb-1 truncate">
                              {product.name}
                            </p>
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            {product.category}
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            {product.createDate}
                          </p>
                          <div className="w-15 w-sm-100">
                            <Badge
                              color={product.statusColor}
                              pill
                            >
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                          <CustomInput
                            className="itemCheck mb-0"
                            type="checkbox"
                            id={`check_${product.id}`}
                            checked={this.state.selectedItems.includes(
                              product.id
                            )}
                            onClick={event =>
                              this.handleCheckChange(event, product.id)
                            }
                            label=""
                          />
                        </div>
                      </div>
                    </Card>
                  </Colxx>
                );
              } else {
                return (
                  <Colxx xxs="12" key={product.id} className="mb-3">
                    <Card className="d-flex flex-row">
                      <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                        <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                          <NavLink
                            to={`/app/layouts/data-list?p=${product.id}`}
                            className="w-40 w-sm-100"
                          >
                            <p className="list-item-heading mb-1 truncate">
                              {product.name}
                            </p>
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            {product.category}
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            {product.createDate}
                          </p>
                          <div className="w-15 w-sm-100">
                            <Badge
                              color={product.statusColor}
                              pill
                            >
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                          <CustomInput
                            className="itemCheck mb-0"
                            type="checkbox"
                            id={`check_${product.id}`}
                            checked={this.state.selectedItems.includes(
                              product.id
                            )}
                            onClick={event =>
                              this.handleCheckChange(event, product.id)
                            }
                            label=""
                          />
                        </div>
                      </div>
                    </Card>
                  </Colxx>
                );
              }
            })}
            <Pagination
              currentPage={this.state.currentPage}
              totalPage={this.state.totalPage}
              onChangePage={i => this.onChangePage(i)}
            />
          </Row>
        </div>
      </Fragment>
    );
  }
}
