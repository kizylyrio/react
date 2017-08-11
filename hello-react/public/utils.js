import React from 'react'

function setPropertiesOnChildren(parentProps)
{
        // ------> For Child
        //React.cloneElement(parentProps.children, {...parentProps}) 

        //-------> For Children
        return React.Children.map( parentProps.children, child => React.cloneElement(child, {...parentProps}))
}

export { setPropertiesOnChildren }