import { AxiosResponse } from "axios"
import constate from "constate"
import debounce from "debounce-promise"
import { useState } from "react"
import type { ICat } from "../types/common.types"
import {createCat as createCatService, getCats as getCatsService}  from "../api/cats.service"

const getCatsDebounced = debounce(getCatsService, 300)

const useCatsStore = ({initialValue = []}) => {
    const [cats, setCats] = useState<Array<ICat>>(initialValue)
    const createCat = async (cat: Partial<ICat>) => {
        try {
            const {data: newCat} = await createCatService(cat) as AxiosResponse<ICat>;          
            setCats([...cats, newCat])
        } catch (error) { 
            throw new Error(String(error))
        }
    }

    const getCats = async (searchText = "") => {
        try {
          const invokeFunction = searchText ? getCatsDebounced : getCatsService;
            const {data: cats} = await invokeFunction(searchText) as AxiosResponse<ICat[]>;          
            setCats(cats)
        } catch (error) { 
            throw new Error(String(error))
        }
    }

    return {
        state: {cats},
        actions: { createCat, getCats }
    }
}

export const [CatsProvider, useCatsContext] = constate(useCatsStore)

