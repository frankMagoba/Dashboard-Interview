import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";

import { Row, Col, Progress } from "reactstrap";

import { ResponsiveContainer, Bar, BarChart } from "recharts";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 1500 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
    { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
    { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
    { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 1500 },
];

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: "11",
        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab,
            });
        }
    }

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-subheading">
                                                        Today Expenses
                                                    </div>
                                                    <div className="widget-numbers mt-0 fsize-3 text-danger">
                                                        $ 8500
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper mt-1">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="danger"
                                                    value="90"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-subheading">
                                                        Income Detail
                                                    </div>
                                                    <div className="widget-numbers mt-0 fsize-3 text-danger">
                                                        $ 7800
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-progress-wrapper mt-1">
                                                <Progress
                                                    className="progress-bar-sm progress-bar-animated-alt"
                                                    color="danger"
                                                    value="90"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col md="6">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-chart-content">
                                        <div className="icon-wrapper rounded-circle">
                                            <div className="icon-wrapper-bg bg-danger" />
                                            <i className="lnr-laptop-phone text-danger" />
                                        </div>
                                        <div className="widget-subheading">
                                            Sales Overview
                                        </div>
                                        <div className="widget-description text-danger">
                                            <FontAwesomeIcon
                                                icon={faAngleDown}
                                            />
                                            <span className="pl-1">54.1%</span>
                                        </div>
                                    </div>
                                    <div className="widget-chart-wrapper">
                                        <ResponsiveContainer
                                            width="100%"
                                            aspect={3.0 / 1.0}
                                        >
                                            <BarChart data={data}>
                                                <Bar
                                                    dataKey="uv"
                                                    fill="#81a4ff"
                                                    stroke="#3f6ad8"
                                                    strokeWidth={2}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
