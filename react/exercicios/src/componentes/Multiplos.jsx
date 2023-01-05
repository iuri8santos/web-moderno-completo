import React from 'react'
export const BomDia = props => <h1>Bom dia, {props.nome}!</h1>
const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>
export default { BomDia, BoaTarde, BoaNoite }