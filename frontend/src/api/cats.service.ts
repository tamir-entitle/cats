import axios from "axios"
import type { ICat } from "../types/common.types";
import { BASE_API_URL } from "../constants";

const catsApi = axios.create({
    baseURL: `${BASE_API_URL}/cats`
})

export const getCat = (id: string) => catsApi(`/${id}`);

export const getCats = (signal: AbortSignal, searchText?: string) => catsApi('', { signal, params: { query: searchText } });

export const createCat = (data: Partial<ICat>) => catsApi.post('', data)

export const updateCat = (id: string, data: Partial<ICat>) => catsApi.put(`/${id}`, data)

export const deleteCat = (id: string) => catsApi.delete(`/${id}`)
