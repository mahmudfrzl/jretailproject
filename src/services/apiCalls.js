import axios from "axios";
export default class ApiCalls{



 sendFeedback = (body)=>{
    return  axios.post('https://192.168.25.55:8080/feedback/send',body)
 }
}