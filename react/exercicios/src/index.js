import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
    <div>
        <Pai nome="Hamilton" sobrenome="Freitas" >
            <Filho nome="Ana" />
            <Filho nome="Guilherme" />
            <Filho nome="Iuri" />
        </Pai>
    </div >
    , document.getElementById('root'))