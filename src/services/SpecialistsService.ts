import axios, { AxiosResponse } from 'axios'
import { ISpecialist } from '../models/ISpecialist'

export default class SpecialistsService {
	static async getSpecialists(): Promise<AxiosResponse<ISpecialist[]>> {
		return axios.get<ISpecialist[]>('/specialists.json')
	}
}
