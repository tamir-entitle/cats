import axios from "axios"
import type { ICat } from "../types/common.types";

const catsApi = axios.create({
    baseURL: "http://localhost:3000/api/v1/cats"
})

export const getCat = (id: string) => catsApi(`/${id}`);

export const getCats = (searchText?: string) => catsApi('', { params: { query: searchText } });

export const createCat = (data: Partial<ICat>) => catsApi.post('', data)

export const updateCat = (id: string, data: Partial<ICat>) => catsApi.put(`/${id}`, data)

export const deleteCat = (id: string) => catsApi.delete(`/${id}`)
