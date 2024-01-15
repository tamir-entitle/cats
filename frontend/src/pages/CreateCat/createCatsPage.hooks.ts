import { useCallback, useState } from "react";
import type { ICat } from "../../types/common.types";

export const initialFormState: Partial<ICat> = {
    firstName: 'Roger',
    lastName: 'jojo',
    description: 'Very funny cat',
    image: '',
    mouseId: -1
};

export const useForm = (initialState: Partial<ICat>) => {
    const [formState, setFormState] = useState<Partial<ICat>>(initialState);

    const resetForm = useCallback(() => {
        setFormState({
            firstName: '',
            lastName: '',
            description: '',
            image: '',
            mouseId: -1
        })
    }, []);

    const onFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const valueModified = id === "mouseId" ? Number(value) : e.target.value;
        setFormState({
            ...formState,
            [id]: valueModified
        })
    }, [formState])

    return {
        formState,
        onFormChange,
        resetForm
    }
}