import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEmployee } from "../actions/action-creators";
import { bindActionCreators } from "redux";

function EmployeeDetail({ getEmployee, employee }) {

    const { locId, ecode } = useParams();
    //    const [employee, setEmployee] = useState();

    useEffect(() => {
        async function fetchEmployee() {
            //let result = await getEmployee(locId, ecode).catch(err => console.log("Error in fetching details"));
            getEmployee(locId, ecode);
            //setEmployee(result);
        }
        fetchEmployee();
    }, [locId, ecode]);

    // console.log(employee);

    return (<React.Fragment> {employee && createTable()} </React.Fragment>)

    function createTable() {
        return (<Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Employee Details</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{employee.Name}</td>
                            </tr>
                            <tr>
                                <th>Employee Code</th>
                                <td>{employee.EmpCode}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{employee.Age}</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>{employee.Department}</td>
                            </tr>
                            <tr>
                                <th>Designation</th>
                                <td>{employee.Designation}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{employee.Location}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>)
    }

    // <div>
    //     <h2>Employee Details</h2>
    //     {employee && <p>Name : {employee.Name}</p>}
    // </div>

}

function mapStateToProps(state) {
    return { employee: state.employeeState.employee }
}

function mapDispatchToProps(dispatch) {
    let actionMap = {
        getEmployee
    }
    return bindActionCreators(actionMap, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);