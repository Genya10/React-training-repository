import { IUser } from './../models/IUser';
import $api from "../http/indexHttp";
import {AxiosResponse} from 'axios';
import { AuthResponse } from "../models/AuthResponse";

export default class UserService {
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }
}