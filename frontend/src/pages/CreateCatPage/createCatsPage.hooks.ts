import { useCallback, useState } from "react";
import type { ICat } from "../../types/common.types";

export const initialFormState: Partial<ICat> = {
    firstName: 'Roger',
    lastName: 'jojo',
    description: 'Very funny cat',
    image: 'https://cataas.com/cat',
    mouseId: ''
};

export const useForm = (initialState: Partial<ICat>) => {
    const [formState, setFormState] = useState<Partial<ICat>>(initialState);

    const resetForm = useCallback(() => {
        setFormState({
            firstName: '',
            lastName: '',
            description: '',
            image: '',
            mouseId: ""
        })
    }, []);

    const onFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormState({
            ...formState,
            [id]: value
        })
    }, [formState])

    return {
        formState,
        onFormChange,
        resetForm
    }
}