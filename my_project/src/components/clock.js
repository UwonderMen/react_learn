import React from "react"
export default function Cock() {
    return <div>
        <h3>北京时间:</h3>
        <span>{new Date().toLocaleString()}</span>
    </div>
}