import axios from 'axios';
import {updateIsLogged, updateWarnMessage} from "../model/events";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8084/lab4_back_war/users'
});

const authAPI = {
    async login() {
        updateWarnMessage("");
        let username = document.getElementById("loginInput").value.trim();
        let password = document.getElementById("passwordInput").value.trim();
        if ((username === '' || username == null) && (password === "" || password == null)) {
            updateWarnMessage("Please, write your login and password!");
        } else if (username === '' || username == null) {
            updateWarnMessage("Please, write your login!");
        } else if (password === "" || password == null) {
            updateWarnMessage("Please, write your password!");
        } else {
            return axiosInstance.post('/logging', {username, password}, {headers : { "Access-Control-Allow-Origin" : "*"}})
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem('user', response.data);
                        updateIsLogged(true);
                    } else {
                        alert("Непредвиденный ответ " + response.status + " от сервера!");
                    }
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        updateWarnMessage(error.response.data);
                    } else {
                        alert("Непредвиденный ответ " + error.response.status + " от сервера!");
                    }
                })
        }
    },

    async register() {
        updateWarnMessage("");
        let username = document.getElementById("loginInput").value.trim();
        let password = document.getElementById("passwordInput").value.trim();
        if ((username === '' || username == null) && (password === "" || password == null)) {
            updateWarnMessage("Please, write your login and password!");
        } else if (username === '' || username == null) {
            updateWarnMessage("Please, write your login!");
        } else if (password === "" || password == null) {
            updateWarnMessage("Please, write your password!");
        } else {
            return axiosInstance.post('/registration', {username, password}, {headers : { "Access-Control-Allow-Origin" : "*"}})
                .then(response => {
                    if (response.status === 200) {
                        authAPI.login();
                    } else {
                        alert("Непредвиденный ответ " + response.status + " от сервера!");
                    }
                })
                .catch((error) => {
                    if (error.response.status === 400) {
                        updateWarnMessage(error.response.data);
                    } else {
                        alert("Непредвиденный ответ " + error.response.status + " от сервера!");
                    }
                })
        }
    },
}

export default authAPI;