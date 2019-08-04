import * as Config from '../constants/config';
import axios from 'axios';

export default function ApiCall(endpoint, method = 'GET', data) {
    return axios({
        method: method,
        url: `${Config.ApiUrl}/${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    });
}