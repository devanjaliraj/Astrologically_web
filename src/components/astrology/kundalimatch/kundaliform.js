import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Input, Form, Button } from "reactstrap";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import MatchSearch from "../MatchSearch";
import axiosConfig from "../../../axiosConfig";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";

import swal from "sweetalert";
import Axios from "axios";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
class KundaliForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            m_day: "",
            m_month: "",
            m_year: "",
            m_hour: "",
            m_min: "",
            m_lat: "",
            m_lon: "",
            m_tzone: "",
            f_day: "",
            f_month: "",
            f_year: "",
            f_hour: "",
            f_min: "",
            f_lat: "",
            f_lon: "",
            f_tzone: "",
            matchmakingreport: {},
            data: {},
            place: "",
            searchQuery: "",
            state: [],
            city: [],
            country: [],
            selectedCountry: null,
            selectedState: null,
            selectedCity: null

        };
    }
    handleInputChanged(event) {
        this.setState({
            searchQuery: event.target.value
        });
        axiosConfig.post(`/user/geo_detail`, {
            "place": this.state.searchQuery
        }).then(response => { console.log(response.data) }).catch(error => { console.log(error) })
        console.log(this.state.searchQuery)

    }
    submitPlaceHandler = (e) => {
        e.preventDefault();

        let payload = {
            // data: this.state.data
            place: this.state.place,


        };
        console.log("shgdjhg", payload)
        axiosConfig.post(`/user/geo_detail`, payload)
            .then((response) => {

                this.setState({ data: response.data });
                console.log("place", response.data.geonames?.place_name);


                swal("Success!", "Submitted SuccessFull!", "success");
            })

            .catch((error) => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        this.setState({ m_day: id })
        let obj = {
            m_day: id
        };
        axiosConfig
            .post(`/user/match_making_report`, obj)
            .then((response) => {
                console.log("matchmakingreport", response.data.data.ashtakoota);
                this.setState({ matchmakingreport: response.data.data });
            })

            .catch((error) => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        let obj = {
            m_day: this.state.m_day,
            m_month: this.state.m_month,
            m_year: this.state.m_year,
            m_hour: this.state.m_hour,
            m_min: this.state.m_min,
            m_lat: this.state.m_lat,
            m_lon: this.state.m_lon,
            m_tzone: this.state.m_tzone,
            f_day: this.state.f_day,
            f_month: this.state.f_month,
            f_year: this.state.f_year,
            f_hour: this.state.f_hour,
            f_min: this.state.f_min,
            f_lat: this.state.f_lat,
            f_lon: this.state.f_lon,
            f_tzone: this.state.f_tzone
        };
        console.log(obj)
        axiosConfig.post(`/user/match_making_report`, obj)
            .then((response) => {
                console.log("matchmakingreport", response.data.data.ashtakoota);
                // this.setState({ matchmakingreport: response.data.data });
                console.log("matchmakingreport", response.data);
                swal("Success!", "Submitted SuccessFull!", "success");
                //window.location.reload('/askQuestion')
                this.props.history.push("/kundalimatchlist");
            })

            .catch((error) => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };
    // handleChange = (e) => {
    // this.setState({
    // question: e.target.value,
    // });
    // };
    render() {
        const { matchmakingreport } = this.state;

        return (
            <LayoutOne headerTop="visible">
                <section className="pt-0 pb-0">
                    <div
                        className=""
                        style={{
                            // backgroundColor: "#FFD59E",
                            // width: "100%",
                            // padding: "70px 0px",
                            // backgroundSize: "cover",
                            float: "left",
                            width: "100%",
                            backgroundColor: "#272727",
                            position: "relative",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            color: "#ffffff",
                            padding: " 50px 0px 50px 0px",
                            backgroundImage: `url(${astrologinbg})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: " no-repeat",
                            textAlign: "center",
                        }}>
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="leftcont text-left">
                                        <h1>Kundli Matching</h1>
                                        <h3>Find your right one, through matchmaking</h3>
                                        <h3>{matchmakingreport?.ashtakoota?.received_points}</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <Container>
                    <Row>
                        <Col md="12">
                            <Card className="mb-50 pt-d">
                                <h3>Free Match Making - Kundli Milan & Gun Milan to Check Possibilities of Marriage</h3>
                                <p>Kundli milan or kundali matching is an important consideration to make when you decide to   get married. Kundli matching, also called Gun matching or Horoscope matching is the first step
                                    towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible.The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so. So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself.</p>
                                <div className="match-bx">
                                    <form onSubmit={this.submitHandler}>
                                        <Row>
                                            <Col md="8">
                                                <h3>Fill Up Partner's Detail</h3>
                                                <Row>
                                                    <Col md="6">
                                                        <div className="form-m">
                                                            <Row>
                                                                <Col md="12">
                                                                    <label>Name</label>
                                                                    <input
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Name"
                                                                    />
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Day</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="m_day"
                                                                        type="select"
                                                                        value={this.state.m_day}
                                                                        onChange={this.changeHandler}>
                                                                        <option>--Select--</option>
                                                                        <option>0</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Month</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="m_month"
                                                                        type="select"
                                                                        value={this.state.m_month}
                                                                        onChange={this.changeHandler}>
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Year</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="m_year"
                                                                        type="select"
                                                                        value={this.state.m_year}
                                                                        onChange={this.changeHandler}>
                                                                        <option>--Select--</option>
                                                                        <option value="1942">1942</option>
                                                                        <option value="1943">1943</option>
                                                                        <option value="1944">1944</option>
                                                                        <option value="1945">1945</option>
                                                                        <option value="1946">1946</option>
                                                                        <option value="1947">1947</option>
                                                                        <option value="1948">1948</option>
                                                                        <option value="1949">1949</option>
                                                                        <option value="1950">1950</option>
                                                                        <option value="1951">1951</option>
                                                                        <option value="1952">1952</option>
                                                                        <option value="1953">1953</option>
                                                                        <option value="1954">1954</option>
                                                                        <option value="1955">1955</option>
                                                                        <option value="1956">1956</option>
                                                                        <option value="1957">1957</option>
                                                                        <option value="1958">1958</option>
                                                                        <option value="1959">1959</option>
                                                                        <option value="1960">1960</option>
                                                                        <option value="1961">1961</option>
                                                                        <option value="1962">1962</option>
                                                                        <option value="1963">1963</option>
                                                                        <option value="1964">1964</option>
                                                                        <option value="1965">1965</option>
                                                                        <option value="1966">1966</option>
                                                                        <option value="1967">1967</option>
                                                                        <option value="1968">1968</option>
                                                                        <option value="1969">1969</option>
                                                                        <option value="1970">1970</option>
                                                                        <option value="1971">1971</option>
                                                                        <option value="1972">1972</option>
                                                                        <option value="1973">1973</option>
                                                                        <option value="1974">1974</option>
                                                                        <option value="1975">1975</option>
                                                                        <option value="1976">1976</option>
                                                                        <option value="1977">1977</option>
                                                                        <option value="1978">1978</option>
                                                                        <option value="1979">1979</option>
                                                                        <option value="1980">1980</option>
                                                                        <option value="1981">1981</option>
                                                                        <option value="1982">1983</option>
                                                                        <option value="1983">1983</option>
                                                                        <option value="1984">1984</option>
                                                                        <option value="1985">1985</option>
                                                                        <option value="1986">1986</option>
                                                                        <option value="1987">1987</option>
                                                                        <option value="1988">1988</option>
                                                                        <option value="1989">1989</option>
                                                                        <option value="1990">1990</option>
                                                                        <option value="1991">1991</option>
                                                                        <option value="1992">1992</option>
                                                                        <option value="1993">1993</option>
                                                                        <option value="1994">1994</option>
                                                                        <option value="1995">1995</option>
                                                                        <option value="1996">1996</option>
                                                                        <option value="1997">1997</option>
                                                                        <option value="1998">1998</option>
                                                                        <option value="1999">1999</option>
                                                                        <option value="2000">2000</option>
                                                                        <option value="2001">2001</option>
                                                                        <option value="2002">2002</option>
                                                                        <option value="2003">2003</option>
                                                                        <option value="2004">2004</option>
                                                                        <option value="2005">2005</option>
                                                                        <option value="2006">2006</option>
                                                                        <option value="2007">2007</option>
                                                                        <option value="2008">2008</option>
                                                                        <option value="2009">2009</option>
                                                                        <option value="2010">2010</option>
                                                                        <option value="2011">2011</option>
                                                                        <option value="2012">2012</option>
                                                                        <option value="2013">2013</option>
                                                                        <option value="2011">2014</option>
                                                                        <option value="2011">2015</option>
                                                                        <option value="2011">2016</option>
                                                                        <option value="2011">2017</option>
                                                                        <option value="2011">2018</option>
                                                                        <option value="2011">2019</option>
                                                                        <option value="2011">2020</option>
                                                                        <option value="2011">2021</option>
                                                                        <option value="2011">2022</option>
                                                                        <option value="2011">2023</option>
                                                                        <option value="2011">2024</option>
                                                                        <option value="2011">2025</option>
                                                                        <option value="2011">2026</option>
                                                                        <option value="2011">2021</option>
                                                                        <option value="2011">2027</option>
                                                                        <option value="2011">2028</option>
                                                                        <option value="2011">2029</option>
                                                                        <option value="2011">2030</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Hour</label>
                                                                    <select
                                                                        className="form-control"
                                                                        name="m_hour"
                                                                        type="select"
                                                                        value={this.state.m_hour}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                    </select>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Minute</label>
                                                                    <select
                                                                        className="form-control"
                                                                        name="m_min"
                                                                        value={this.state.m_min}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                        <option>32</option>
                                                                        <option>33</option>
                                                                        <option>34</option>
                                                                        <option>35</option>
                                                                        <option>36</option>
                                                                        <option>37</option>
                                                                        <option>38</option>
                                                                        <option>39</option>
                                                                        <option>40</option>
                                                                        <option>41</option>
                                                                        <option>42</option>
                                                                        <option>43</option>
                                                                        <option>44</option>
                                                                        <option>45</option>
                                                                        <option>46</option>
                                                                        <option>47</option>
                                                                        <option>48</option>
                                                                        <option>49</option>
                                                                        <option>50</option>
                                                                        <option>51</option>
                                                                        <option>52</option>
                                                                        <option>53</option>
                                                                        <option>54</option>
                                                                        <option>55</option>
                                                                        <option>56</option>
                                                                        <option>57</option>
                                                                        <option>58</option>
                                                                        <option>59</option>
                                                                        <option>60</option>
                                                                    </select>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Country</label>
                                                                    <Select
                                                                        options={Country.getAllCountries()}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedCountry}
                                                                        onChange={(item) => {
                                                                            //setSelectedCountry(item);
                                                                            this.setState({ selectedCountry: item })
                                                                        }}
                                                                    />
                                                                </Col>

                                                                <Col md="4">
                                                                    <label>State</label>
                                                                    <Select
                                                                        options={State?.getStatesOfCountry(this.state.selectedCountry?.isoCode)}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedState}
                                                                        onChange={(item) => {
                                                                            //setSelectedState(item);
                                                                            this.setState({ selectedState: item })
                                                                        }}
                                                                    />
                                                                </Col>

                                                                <Col md="4">
                                                                    <label>state</label>
                                                                    <Select
                                                                        options={City.getCitiesOfState(
                                                                            this.state.selectedState?.countryCode,
                                                                            this.state.selectedState?.isoCode
                                                                        )}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedCity}
                                                                        onChange={(item) => {
                                                                            //setSelectedCity(item);
                                                                            this.setState({ selectedCity: item })
                                                                        }}
                                                                    />
                                                                </Col>

                                                                <Col md="12">
                                                                    <label>Birth Place Latitude</label>
                                                                    <Input
                                                                        type="tel"
                                                                        maxLength={8}
                                                                        name="m_lat"
                                                                        placeholder="00.00"
                                                                        value={this.state.m_lat}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                                <Col md="12">
                                                                    <label>Birth Place Longitude</label>
                                                                    <input
                                                                        name="m_lon"
                                                                        placeholder="00.000"
                                                                        maxLength={8}
                                                                        value={this.state.m_lon}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                                <Col md="12">
                                                                    <label>Birth Place Time Zone</label>
                                                                    <input
                                                                        // type="time"
                                                                        name="m_tzone"
                                                                        placeholder="00.00"
                                                                        maxLength={8}
                                                                        value={this.state.m_tzone}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    <Col md="6">
                                                        <div className="form-m">
                                                            <Row>
                                                                <Col md="12">
                                                                    <label>Name</label>
                                                                    <input
                                                                        type="text"
                                                                        name=""
                                                                        placeholder="Name"
                                                                    />
                                                                </Col>

                                                                <Col md="4">
                                                                    <label>Birth Day</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="f_day"
                                                                        type="select"
                                                                        value={this.state.f_day}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>0</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Month</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="f_month"
                                                                        type="select"
                                                                        value={this.state.f_month}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Year</label>
                                                                    <Input
                                                                        className="form-control"
                                                                        name="f_year"
                                                                        type="select"
                                                                        value={this.state.f_year}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option value="1942">1942</option>
                                                                        <option value="1943">1943</option>
                                                                        <option value="1944">1944</option>
                                                                        <option value="1945">1945</option>
                                                                        <option value="1946">1946</option>
                                                                        <option value="1947">1947</option>
                                                                        <option value="1948">1948</option>
                                                                        <option value="1949">1949</option>
                                                                        <option value="1950">1950</option>
                                                                        <option value="1951">1951</option>
                                                                        <option value="1952">1952</option>
                                                                        <option value="1953">1953</option>
                                                                        <option value="1954">1954</option>
                                                                        <option value="1955">1955</option>
                                                                        <option value="1956">1956</option>
                                                                        <option value="1957">1957</option>
                                                                        <option value="1958">1958</option>
                                                                        <option value="1959">1959</option>
                                                                        <option value="1960">1960</option>
                                                                        <option value="1961">1961</option>
                                                                        <option value="1962">1962</option>
                                                                        <option value="1963">1963</option>
                                                                        <option value="1964">1964</option>
                                                                        <option value="1965">1965</option>
                                                                        <option value="1966">1966</option>
                                                                        <option value="1967">1967</option>
                                                                        <option value="1968">1968</option>
                                                                        <option value="1969">1969</option>
                                                                        <option value="1970">1970</option>
                                                                        <option value="1971">1971</option>
                                                                        <option value="1972">1972</option>
                                                                        <option value="1973">1973</option>
                                                                        <option value="1974">1974</option>
                                                                        <option value="1975">1975</option>
                                                                        <option value="1976">1976</option>
                                                                        <option value="1977">1977</option>
                                                                        <option value="1978">1978</option>
                                                                        <option value="1979">1979</option>
                                                                        <option value="1980">1980</option>
                                                                        <option value="1981">1981</option>
                                                                        <option value="1982">1983</option>
                                                                        <option value="1983">1983</option>
                                                                        <option value="1984">1984</option>
                                                                        <option value="1985">1985</option>
                                                                        <option value="1986">1986</option>
                                                                        <option value="1987">1987</option>
                                                                        <option value="1988">1988</option>
                                                                        <option value="1989">1989</option>
                                                                        <option value="1990">1990</option>
                                                                        <option value="1991">1991</option>
                                                                        <option value="1992">1992</option>
                                                                        <option value="1993">1993</option>
                                                                        <option value="1994">1994</option>
                                                                        <option value="1995">1995</option>
                                                                        <option value="1996">1996</option>
                                                                        <option value="1997">1997</option>
                                                                        <option value="1998">1998</option>
                                                                        <option value="1999">1999</option>
                                                                        <option value="2000">2000</option>
                                                                        <option value="2001">2001</option>
                                                                        <option value="2002">2002</option>
                                                                        <option value="2003">2003</option>
                                                                        <option value="2004">2004</option>
                                                                        <option value="2005">2005</option>
                                                                        <option value="2006">2006</option>
                                                                        <option value="2007">2007</option>
                                                                        <option value="2008">2008</option>
                                                                        <option value="2009">2009</option>
                                                                        <option value="2010">2010</option>
                                                                        <option value="2011">2011</option>
                                                                        <option value="2012">2012</option>
                                                                        <option value="2013">2013</option>
                                                                        <option value="2011">2014</option>
                                                                        <option value="2011">2015</option>
                                                                        <option value="2011">2016</option>
                                                                        <option value="2011">2017</option>
                                                                        <option value="2011">2018</option>
                                                                        <option value="2011">2019</option>
                                                                        <option value="2011">2020</option>
                                                                        <option value="2011">2021</option>
                                                                        <option value="2011">2022</option>
                                                                        <option value="2011">2023</option>
                                                                        <option value="2011">2024</option>
                                                                        <option value="2011">2025</option>
                                                                        <option value="2011">2026</option>
                                                                        <option value="2011">2021</option>
                                                                        <option value="2011">2027</option>
                                                                        <option value="2011">2028</option>
                                                                        <option value="2011">2029</option>
                                                                        <option value="2011">2030</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Hour</label>
                                                                    <select
                                                                        className="form-control"
                                                                        name="f_hour"
                                                                        type="select"
                                                                        value={this.state.f_hour}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                    </select>
                                                                </Col>
                                                                <Col md="4">
                                                                    <label>Birth Minute</label>
                                                                    <select
                                                                        className="form-control"
                                                                        name="f_min"
                                                                        value={this.state.f_min}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                        <option>32</option>
                                                                        <option>33</option>
                                                                        <option>34</option>
                                                                        <option>35</option>
                                                                        <option>36</option>
                                                                        <option>37</option>
                                                                        <option>38</option>
                                                                        <option>39</option>
                                                                        <option>40</option>
                                                                        <option>41</option>
                                                                        <option>42</option>
                                                                        <option>43</option>
                                                                        <option>44</option>
                                                                        <option>45</option>
                                                                        <option>46</option>
                                                                        <option>47</option>
                                                                        <option>48</option>
                                                                        <option>49</option>
                                                                        <option>50</option>
                                                                        <option>51</option>
                                                                        <option>52</option>
                                                                        <option>53</option>
                                                                        <option>54</option>
                                                                        <option>55</option>
                                                                        <option>56</option>
                                                                        <option>57</option>
                                                                        <option>58</option>
                                                                        <option>59</option>
                                                                        <option>60</option>
                                                                    </select>
                                                                </Col>
                                                                {/* <Col md="4">
                                                                    <label>Birth Second</label>
                                                                    <select
                                                                        className="form-control"
                                                                        name="f_day"
                                                                        type="select"
                                                                        value={this.state.f_day}
                                                                        onChange={this.changeHandler}
                                                                    >
                                                                        <option>--Select--</option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                        <option>6</option>
                                                                        <option>7</option>
                                                                        <option>8</option>
                                                                        <option>9</option>
                                                                        <option>10</option>
                                                                        <option>11</option>
                                                                        <option>12</option>
                                                                        <option>13</option>
                                                                        <option>14</option>
                                                                        <option>15</option>
                                                                        <option>16</option>
                                                                        <option>17</option>
                                                                        <option>18</option>
                                                                        <option>19</option>
                                                                        <option>20</option>
                                                                        <option>21</option>
                                                                        <option>22</option>
                                                                        <option>23</option>
                                                                        <option>24</option>
                                                                        <option>25</option>
                                                                        <option>26</option>
                                                                        <option>27</option>
                                                                        <option>28</option>
                                                                        <option>29</option>
                                                                        <option>30</option>
                                                                        <option>31</option>
                                                                        <option>32</option>
                                                                        <option>33</option>
                                                                        <option>34</option>
                                                                        <option>35</option>
                                                                        <option>36</option>
                                                                        <option>37</option>
                                                                        <option>38</option>
                                                                        <option>39</option>
                                                                        <option>40</option>
                                                                        <option>41</option>
                                                                        <option>42</option>
                                                                        <option>43</option>
                                                                        <option>44</option>
                                                                        <option>45</option>
                                                                        <option>46</option>
                                                                        <option>47</option>
                                                                        <option>48</option>
                                                                        <option>49</option>
                                                                        <option>50</option>
                                                                        <option>51</option>
                                                                        <option>52</option>
                                                                        <option>53</option>
                                                                        <option>54</option>
                                                                        <option>55</option>
                                                                        <option>56</option>
                                                                        <option>57</option>
                                                                        <option>58</option>
                                                                        <option>59</option>
                                                                        <option>60</option>
                                                                    </select>
                                                                </Col> */}

                                                                <Col md="4">
                                                                    <label>Country</label>
                                                                    <Select
                                                                        options={Country.getAllCountries()}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedCountry}
                                                                        onChange={(item) => {
                                                                            //setSelectedCountry(item);
                                                                            this.setState({ selectedCountry: item })
                                                                        }}
                                                                    />
                                                                </Col>

                                                                <Col md="4">
                                                                    <label>State</label>
                                                                    <Select
                                                                        options={State?.getStatesOfCountry(this.state.selectedCountry?.isoCode)}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedState}
                                                                        onChange={(item) => {
                                                                            //setSelectedState(item);
                                                                            this.setState({ selectedState: item })
                                                                        }}
                                                                    />
                                                                </Col>

                                                                <Col md="4">
                                                                    <label>state</label>
                                                                    <Select
                                                                        options={City.getCitiesOfState(
                                                                            this.state.selectedState?.countryCode,
                                                                            this.state.selectedState?.isoCode
                                                                        )}
                                                                        getOptionLabel={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        getOptionValue={(options) => {
                                                                            return options["name"];
                                                                        }}
                                                                        value={this.state.selectedCity}
                                                                        onChange={(item) => {
                                                                            //setSelectedCity(item);
                                                                            this.setState({ selectedCity: item })
                                                                        }}
                                                                    />
                                                                </Col>                                              <Col md="12">
                                                                    <label>Birth Place Latitude</label>
                                                                    <input
                                                                        name="f_lat"
                                                                        placeholder="00.00"
                                                                        maxLength={8}
                                                                        value={this.state.f_lat}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                                <Col md="12">
                                                                    <label>Birth Place Longitude</label>
                                                                    <input
                                                                        name="f_lon"
                                                                        placeholder="00.000"
                                                                        maxLength={8}
                                                                        value={this.state.f_lon}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                                <Col md="12">
                                                                    <label>Birth Place Time Zone</label>
                                                                    <input
                                                                        // type="time"
                                                                        name="f_tzone"
                                                                        placeholder="00.00"
                                                                        maxLength={8}
                                                                        value={this.state.f_tzone}
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>

                                                    {/* <Link to="/kundalimatchlist"> */}

                                                    {/* <Button className="mt-25 btn btn-secondary">
                                                            Match Horoscope
                                                        </Button> */}
                                                    {/* </Link> */}

                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <h3>Saved Matches</h3>
                                                <div className="form-m">
                                                    <Row>
                                                        <Col>
                                                            <MatchSearch />
                                                            <h4 className="mt-3">Recent Views</h4>
                                                            <hr></hr>
                                                            <div className="mtkun-box">
                                                                <Link>
                                                                    <div className="k-bx">
                                                                        <p>R</p>
                                                                    </div>
                                                                    <div className="k-bxx">
                                                                        <h5>lorem</h5>
                                                                        <p>21/09/2022</p>
                                                                        <p>Indore</p>
                                                                    </div>
                                                                    <div className="k-dlt">
                                                                        <Link className="Tansdel">
                                                                            <i
                                                                                class="fa fa-trash-o"
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                        </Link>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="mtkun-box">
                                                                <Link>
                                                                    <div className="k-bx">
                                                                        <p>S</p>
                                                                    </div>
                                                                    <div className="k-bxx">
                                                                        <h5>lorem</h5>
                                                                        <p>21/09/2022</p>
                                                                        <p>Indore</p>
                                                                    </div>
                                                                    <div className="k-dlt">
                                                                        <Link className="Tansdel">
                                                                            <i
                                                                                class="fa fa-trash-o"
                                                                                aria-hidden="true"
                                                                            ></i>
                                                                        </Link>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Button className="btn btn-warning">Match Horoscope</Button>

                                        <Row> </Row>

                                    </form>



                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </LayoutOne>
        );
    }
}

export default KundaliForm;
