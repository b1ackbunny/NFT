import React from "react";
import PropTypes from 'prop-types'
import s from './Logo.module.css'

export default function Logo({title}){
    return (
        <>
        <h1 className={s.h1}>{title}</h1>
        </>
    )
}

Logo.propTypes = {
    title: PropTypes.string.isRequired,
}