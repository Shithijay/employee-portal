import * as ActionTypes from "../actions/action-types";

const initialState = {
    employees: [
        // { LocationID: 'MUM', Name: 'ABC', Age: '30', Department: 'DEPT1', Designation: 'DESIG1', Location: 'Mumbai', EmpCode: 'E101' },
        // { LocationID: 'MUM', Name: 'XYZ', Age: '30', Department: 'DEPT2', Designation: 'DESIG2', Location: 'Mumbai', EmpCode: 'E102' }
    ],
    employee: undefined
}

function employeeReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.GET_EMPLOYEES:
            return state = { ...state, employees: payload }
        case ActionTypes.GET_EMPLOYEE:
            return { ...state, employee: payload };
        case ActionTypes.ADD_EMPLOYEE:
            return { ...state, employees: [...state.employees, payload] }
        case ActionTypes.DELETE_EMPLOYEE:
            let dItem = state.employees.find(item => item.LocationID === payload.locationId && item.EmpCode === payload.empCode)
            return { ...state, employees: state.employees.filter((item) => dItem != item) }
        default:
            return state;
    }

}

export default employeeReducer;