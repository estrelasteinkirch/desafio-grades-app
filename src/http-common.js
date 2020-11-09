import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: "https://estrela-grades-api.herokuapp.com:8081/",
  headers: {
    "Content-type": "application/json",
  },
});
