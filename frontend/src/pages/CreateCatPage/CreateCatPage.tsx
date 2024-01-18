import axios, { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { BASE_API_URL } from '../../constants';
import { useCatsContext } from '../../store/cats.store';
import type { IMouse } from '../../types/common.types';
import { useAlertContext, AlertType } from '../../store/alert.store';
import { initialFormState, useForm } from './createCatsPage.hooks';
import useStyles from './CreateCatPage.styles';


const CreateCatPage: React.FC = () => {
    const classes = useStyles();
    const { actions: { createCat } } = useCatsContext();
    const { actions: { setNewAlert } } = useAlertContext();
    const { formState, resetForm, onFormChange } = useForm(initialFormState);
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [mice, setMice] = useState<IMouse[]>([]);

    // On mount fetch available mice list
    useEffect(() => {
        axios(`${BASE_API_URL}/mice`).then((miceRes: AxiosResponse<IMouse[]>) => {
            setMice(miceRes.data)
        })
    }, [])

    const validateForm = useCallback(() => {
        const { firstName, lastName, mouseId } = formState;
        if (!firstName || !lastName || !mouseId) {
            setNewAlert({ message: 'Please fill missing fields', type: AlertType.ERROR })
            return false
        }
        return true;
    }, [formState]);

    const formAndCreateCat = useCallback(async () => {
        if (!validateForm()) return
        setIsLoading(true)
        try {
            await createCat(formState)
            setNewAlert({ message: 'Your cat has been created!', type: AlertType.SUCCESS })
            setIsLoading(false)
            const newMice = mice.filter((mouse) => mouse.id !== formState.mouseId)
            resetForm()
            setMice(newMice)
        } catch (e) {
            setNewAlert({ message: 'Error creating cat:' + e, type: AlertType.ERROR })
            setIsLoading(false)
            return
        }
    }, [formState]);

    return (
        <div className={classes.createWrapper}>
            <div className={classes.createLabel}>
                <div>First name</div>
                <input type="text"
                    id='firstName'
                    value={formState.firstName}
                    onChange={onFormChange}
                    className={classes.createInput}
                    required
                />
            </div>
            <div className={classes.createLabel}>
                <div>Last name</div>
                <input type="text"
                    id='lastName'
                    value={formState.lastName}
                    onChange={onFormChange}
                    className={classes.createInput}
                    required
                />
            </div>
            <div className={classes.createLabel}>
                <div>Description</div>
                <input type="text"
                    id='description'
                    value={formState.description}
                    onChange={onFormChange}
                    className={classes.createInput}
                />
            </div>
            <div className={classes.createLabel}>
                <div>Image url</div>
                <input type="text"
                    id='image'
                    value={formState.image}
                    onChange={onFormChange}
                    className={classes.createInput}
                />
            </div>
            <div className={classes.createLabel}>
                <div>Mouse</div>
                <select id="mouseId"
                    className={classes.creatSelect}
                    onChange={onFormChange}
                    value={formState.mouseId}
                    required
                >
                    <option value={""} disabled> -- select an option -- </option>
                    {mice.map((mouse) => <option value={mouse.id} key={`mouse_${mouse.id}`}>{mouse.name}</option>)}
                </select>
            </div>
            <button className={classes.createButton}
                onClick={formAndCreateCat}
                disabled={isLoading}
            >{isLoading ? "Loading..." : "Create cat"}</button>
        </div>
    );
};

export default CreateCatPage;