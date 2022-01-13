import axios from "axios";

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

export async function getEmployees() {
    return fetch(API_URL)
        .then(response => response.json());

}

export async function getEmployee(locId, ecode) {
    let url = `${API_URL}/location/${locId}/empcode/${ecode}`;
    return fetch(url).then(response => response.json());
}

export function addEmployee(employee) {
    return axios.post(API_URL, employee)
}