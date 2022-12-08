import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './buttonBack.css';
const ButtonBack = () => {
    return (
        <div className='btn-back'>
            <Link className='link link-back' to='/'>
                <KeyboardBackspaceIcon /><span>Back</span>
            </Link>
        </div>
    );
};

export default ButtonBack;