import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  Form,
  Button,
} from "reactstrap";
import "../../assets/scss/astropooja.css";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
// import MatchSearch from "../MatchSearch";
import swal from "sweetalert";

class PitraDosh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
      hour: "",
      min: "",
      lat: "",
      lon: "",
      tzone: "",
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
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
    axiosConfig.post(`/user/geo_detail`, {
      "place": this.state.searchQuery
    }).then(response => { console.log(response.data) }).catch(error => { console.log(error) })
    console.log(this.state.searchQuery)

  }
  componentDidMount() {
    // let { id } = this.props.match.params;
    // this.setState({ day: id })
    // let payload = {
    //   day: id
    // };
    // axiosConfig
    //   .post(`/user/PitriDosh`)
    //   .then((response) => {
    //     console.log("PitriDosh", response.data.data);
    //     this.setState({ PitriDosh: response.data.what_is_pitri_dosha });
    //   })

    //   .catch((error) => {
    //     // swal("Error!", "You clicked the button!", "error");
    //     console.log(error);
    //   });
  }
  submitHandler = (e) => {
    e.preventDefault();

    let payload = {
      // data: this.state.data
      day: this.state.day,
      month: this.state.month,
      year: this.state.year,
      hour: this.state.hour,
      min: this.state.min,
      lat: this.state.lat,
      lon: this.state.lon,
      tzone: this.state.tzone,
      place: this.state.place,

    };
    console.log("shgdjhg", payload)
    axiosConfig.post(`user/PitriDosh`, payload)
      .then((response) => {
        // console.log("data1", response.data.what_is_pitri_dosha);
        this.setState({ data: response.data.what_is_pitri_dosha });
        console.log("data11", response.data);


        swal("Success!", "Submitted SuccessFull!", "success");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  changeHandler1 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // submitPlaceHandler = (e) => {
  //   e.preventDefault();

  //   let payload = {
  //     // data: this.state.data
  //     place: this.state.place,


  //   };
  //   console.log("shgdjhg", payload)
  //   axiosConfig.post(`/user/geo_detail`, payload)
  //     .then((response) => {

  //       this.setState({ data: response.data });
  //       console.log("place", response.data.geonames?.place_name);


  //       swal("Success!", "Submitted SuccessFull!", "success");
  //     })

  //     .catch((error) => {
  //       swal("Error!", "You clicked the button!", "error");
  //       console.log(error);
  //     });
  // };

  render() {
    // const { PitriDosh } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>PITRA DOSH</h1>
                    <h3>Get instant & accurate, Janam Kundli</h3>
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
                <h3>
                  PITRA DOSH Online - Get Your Detailed Birth Chart with
                  Predictions
                </h3>
                {/* <h3>{PitriDosh?.what_is_pitri_dosha}</h3> */}
                <p>
                  Looking for your free Kundli from expert astrologers? Then you
                  have come to the right place. The online free kundali
                  available on Astrotalk is a 100% free and authentic free
                  Kundli that has been prepared after consulting more than 50
                  expert astrologers on board. The free kundli is such that it
                  can give you a glimpse into various aspects of your life such
                  as your career, love life, marriage, business and much more.
                  The online kundli prepared by the free Kundali software here
                  is no less than any traditional Kundli and can also be used
                  for purposes like matching making, kundali matching for
                  marriage or simply making future predictions.
                </p>

                <p>
                  Talking about future predictions, the kundali catered by
                  Astrotalk to you is such that it considers the movement of all
                  the planets in the native's life from the beginning of his or
                  her life till as far as 100 years. Doing so helps you
                  understand the reasons behind not only the ongoing
                  circumstances but also what's to come for you in the future.
                  So if in any way you are confused about life, the online
                  kundli can be your saviour. Having said that, make sure you
                  try the fre online kunldi, and let us know what you feel about
                  it.
                </p>

                <div className="match-bx">
                  <Row>
                    <Col md="8">
                      <h3> PITRA DOSH</h3>
                      <Form onSubmit={this.submitHandler} >
                        <div className="form-m">
                          <Row>
                            {/* <Col md="12">
                              <label>Name</label>
                              <input type="text" name="" placeholder="Name" />
                            </Col>
                            <Col md="12">
                              <label>Gender</label>
                              <select className="form-control">
                                <option>--Select--</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </Col> */}
                            <Col md="4">
                              <label>Birth Day</label>
                              <Input className="form-control"
                                type="select"
                                name="day"
                                value={this.state.day}
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
                              <Input className="form-control"
                                type="select"
                                name="month"
                                value={this.state.month}
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
                              <Input className="form-control"
                                type="select"
                                name="year"
                                value={this.state.year}
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
                                <option value="1982">1982</option>
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
                                <option value="2011">2012</option>
                                <option value="2011">2013</option>
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
                              <Input className="form-control"
                                type="select"
                                name="hour"
                                value={this.state.hour}
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
                              </Input>
                            </Col>
                            <Col md="4">
                              <label>Birth Minute</label>
                              <Input className="form-control"
                                type="select"
                                name="min"
                                value={this.state.min}
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
                                <option>59</option> <option>60</option>
                              </Input>
                            </Col>
                            {/* <Col md="4">
                              <label>Birth Second</label>
                              <Input className="form-control" type="select"
                                name="year"
                                value={this.state.s}
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
                                <option>59</option> <option>60</option>
                              </Input>
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
                                onChange={(handleInputChanged) => {
                                  //setSelectedCity(item);
                                  this.setState({ selectedCity: handleInputChanged })
                                }}
                              />
                            </Col>
                            <Col md="4">
                              <label>Birth Place Latitude</label>
                              <Input
                                // name="f_lat"
                                placeholder="00.00"
                                maxLength={7}
                                type="text"
                                name="lat"
                                value={this.state.lat}
                                onChange={this.changeHandler}
                              />
                            </Col>
                            <Col md="4">
                              <label>Birth Place Longitude</label>
                              <Input
                                // name="f_lon"
                                placeholder="00.000"
                                maxLength={7}
                                type="text"
                                name="lon"
                                value={this.state.lon}
                                onChange={this.changeHandler}
                              />
                            </Col>
                            <Col md="4">
                              <label>Birth Place Time Zone</label>
                              <input
                                type="text"
                                // name="f_tzone"
                                placeholder="00.00"
                                maxLength={5}
                                // type="select"
                                name="tzone"
                                value={this.state.tzone}
                                onChange={this.changeHandler}
                              />
                            </Col>
                          </Row>
                          <Button className="btn btn-warning">submit</Button>
                        </div>
                      </Form>
                      {/* <Link to="/kundalimatchlist"> */}
                      {/* <Button className="mt-25">Submit</Button> */}
                      {/* </Link> */}
                    </Col>
                    <Col md="4">
                      <h3>Saved Pitra Dosh </h3>
                      <div className="form-m">
                        <Row>
                          <Col>
                            {/* <MatchSearch /> */}
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
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

export default PitraDosh;
