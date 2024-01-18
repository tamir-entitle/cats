import axios, { AxiosResponse } from "axios"
import constate from "constate"
import debounce from "debounce-promise"
import { useCallback, useRef, useState } from "react"
import type { ICat } from "../types/common.types"
import { createCat as createCatService, getCats as getCatsService } from "../api/cats.service"

const useCatsStore = ({ initialValue = [] }) => {
    const [cats, setCats] = useState<Array<ICat>>(initialValue)
    const controllerRef = useRef<AbortController | null>();

    const getCatsDebounced = useCallback(debounce((searchText: string) => {
        if (controllerRef.current) {
            controllerRef.current.abort();
            controllerRef.current = null;
        }
        controllerRef.current = new AbortController();
        return getCatsService(controllerRef.current.signal, searchText)
    }, 300), [])

    const getCats = useCallback(async (searchText = "") => {
        try {
            const { data: cats } = await getCatsDebounced(searchText) as AxiosResponse<ICat[]>;
            controllerRef.current = null;
            setCats(cats)
        } catch (error) {
            if (axios.isCancel(error)) {
                return
            }
            throw new Error(String(error))
        }
    }, [])

    const createCat = useCallback(async (cat: Partial<ICat>) => {
        try {
            const { data: newCat } = await createCatService(cat) as AxiosResponse<ICat>;
            setCats([...cats, newCat])
        } catch (error) {
            throw new Error(String(error))
        }
    }, [cats])

    return {
        state: { cats },
        actions: { createCat, getCats }
    }
}

export const [CatsProvider, useCatsContext] = constate(useCatsStore)

