import React from "react"

const Headers = React.memo(function head({ title }) {
    return (
        <>
            <div>{title}</div>
        </>
    )
})

export default Headers