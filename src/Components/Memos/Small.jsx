import React from "react"

export const Small = React.memo(({  value }) => {

    console.log('Me volvi a Llamar :(')

    return (
        <small> { value } </small>
    )
}
)