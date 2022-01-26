import { Axios } from "axios";

const RestClient = new Axios({
    baseURL: "http://localhost:6060"
})

export default RestClient;