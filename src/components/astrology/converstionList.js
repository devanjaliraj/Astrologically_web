import React from "react"
import { Table } from 'reactstrap';
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig"
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg"
class ConversationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ConversationList: [],
        }
    }
    componentDidMount = () => {
        let userId = JSON.parse(localStorage.getItem('user_id'))
        axiosConfig.get(`/user/getOne_Conversation_Wallet/${userId}`)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === true) {
                    this.setState({ ConversationList: response.data.data });
                }
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response);
            });
    };
    render() {
        const { ConversationList } = this.state
        return (
            <LayoutOne headerTop="visible">
                <section className="pt-0 pb-0" >
                    <div className="" style={{
                        // backgroundColor: "#FFD59E", width: "100%", padding: "70px 0px", backgroundSize: "cover"
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
                                        <h1>Wallet Transactions</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="">
                                    <Table striped className="">
                                        <thead>
                                            <tr>
                                                <th># T/C ID.</th>
                                                <th>Amount Before</th>
                                                <th>Transaction Amount</th>
                                                <th>Amount After</th>
                                                <th>Date/Time</th>
                                                <th>Transaction Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ConversationList.length ? ConversationList.map((Conversation, index) => {
                                                return (
                                                    <tr>
                                                        {/* <th scope="row">{WalletTransac.transaction_id}</th> */}
                                                        <th>{Conversation.transaction_id}{Conversation.conversationId}</th>
                                                        <td>{Conversation.beforeAmt}</td>
                                                        <td>{Conversation.deductedAmt} {Conversation.creditedAmt}</td>
                                                        <td>{Conversation.finalAmt}</td>
                                                        <td>{Conversation.createdAt}</td><td>{Conversation.tran_Type}</td></tr>
                                                )
                                            })
                                                : null}
                                            {/* <tr>
                                                <th scope="row">2</th>
                                                <td>Chat With Monish For 2 Minutes</td>
                                                <td>doc</td>
                                                <td>30.00</td>
                                                <td>sept 05, 2022 11:32AM</td>
                                                <td>
                                                    <Link className="Tansdel">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Chat With Monish For 2 Minutes</td>
                                                <td>doc</td>
                                                <td>30.00</td>
                                                <td>sept 05, 2022 11:32AM</td>
                                                <td>
                                                    <Link className="Tansdel">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Chat With Monish For 2 Minutes</td>
                                                <td>doc</td>
                                                <td>30.00</td>
                                                <td>sept 05, 2022 11:32AM</td>
                                                <td>
                                                    <Link className="Tansdel">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Chat With Monish For 2 Minutes</td>
                                                <td>doc</td>
                                                <td>30.00</td>
                                                <td>sept 05, 2022 11:32AM</td>
                                                <td>
                                                    <Link className="Tansdel">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default ConversationList;