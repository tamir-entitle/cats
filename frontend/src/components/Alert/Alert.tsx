import React, { useMemo } from 'react';
import { AlertType, useAlertContext } from '../../store/alert.store';
import useStyles from './Alert.styles';

const Cat: React.FC = () => {
    const { state } = useAlertContext();
    const classes = useStyles();
    const { message, type } = state.alert;

    // Controlling alert styles with classes to allow css file full control over the styles
    const alertTypeStyle = useMemo(() => {
        switch (type) {
            case AlertType.SUCCESS:
                return classes.success;
            case AlertType.ERROR:
                return classes.error;
            case AlertType.WARNING:
                return classes.warning;
            default:
                return classes.info;
        }
    }, [type]);

    return (
        <div className={classes.alertWrapper + ` ${!message ? classes.hideAlert : ""} ${message ? alertTypeStyle : null}`}>
            {message}
        </div>
    );
};

export default Cat;