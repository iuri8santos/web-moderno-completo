import React from 'react'
import './Button.css'
export default function Button(props) {
    return <button className="button">{props.label}
        ${...props.operation ? 'operation' : ''}
        ${...props.double ? 'double' : ''}
        ${...props.triple ? 'triple' : ''}
        {...props.label}
    </button>
}