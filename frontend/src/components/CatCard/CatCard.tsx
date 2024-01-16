import React, { useMemo } from 'react';
import { Link } from "react-router-dom";
import useStyles from './CatCard.styles';
import type { ICat } from '../../types/common.types';

interface CatCardProps {
    cat: ICat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
    const classes = useStyles();
    const mouseName: string = useMemo(() => cat?.mice?.[0]?.name?.toLowerCase(), [cat.mice]);
    const {firstName, lastName} = cat;
    return (
        <Link to={`/cat/${cat.id}`}>
            <div className={classes.catWrapper}>
                <div style={{ backgroundImage: `url(${cat.image})`}} className={classes.catImage} />
                <div className={classes.name}>{firstName} {lastName}</div>
                <div>{cat.description}</div>
                <div>Mouse: {mouseName}</div>
            </div>
        </Link>
    );
};

export default CatCard;