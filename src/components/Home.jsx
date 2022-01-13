import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getEmployees } from "../services/employee-services";
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar'
import { connect } from "react-redux";

// export default function Home() {
//     //console.log(process.env.REACT_APP_EMPLOYEE_API_URL)
//     return <Container>
//         <Row>
//             <Col>
//                 <h2>Home</h2>
//             </Col>
//         </Row>
//     </Container>
// }

export const EmployeeContext = React.createContext();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees,
            filteredResult: props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if (newProps.employees.length != oldState.employees.length) {
            console.log("Props changed", newProps)
            return {
                employees: newProps.employees,
                filteredResult: newProps.employees
            }
        }
        return null;
    }

    async componentDidMount() {
        //    let employees = await getEmployees()
        //       .catch(err => console.log("Error in loading employee data"));
        //   this.setState({ employees, filteredResult: employees }); //equivalent to {employees : employees}
    }

    handleSearch(searchText) {
        //do search using search text and update state
        // console.log(searchText);
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let filteredResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0 || item.Location.toUpperCase().indexOf(searchText) >= 0)
            this.setState({ filteredResult })
        } else {
            this.setState({ filteredResult: this.state.employees })
        }
    }

    render() {
        //console.log(this.state)
        return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResult, doSearch: this.handleSearch }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Employee List</h2>
                        <SearchBar />
                        <EmployeeList />
                    </Col>
                </Row>
            </Container>
        </EmployeeContext.Provider>
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employeeState.employees
    }
}

// function mapDispatchToProps(dispatch){

// }

export default connect(mapStateToProps)(Home);