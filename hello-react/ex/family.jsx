import React from 'react'
import {setPropertiesOnChildren} from '../public/utils.js'

export default props => (
    <div>
        {setPropertiesOnChildren(props)}
    </div>
)