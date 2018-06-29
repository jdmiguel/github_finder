import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './styles.css';

const FloatBtn = ({clickHandler}) => {
    return(
        <Button variant="fab" 
                color="secondary"
                className='floatBtn'
                onClick={clickHandler}>
            <Icon>arrow_back_icon</Icon>
        </Button>
    )
};

export default FloatBtn;