import { useState } from "react"

export function AskDOB({ onReturn }) {
    const [age, setAge] = useState("");

    const onSubmit = () => {
        localStorage.setItem("dob", age)
        onReturn()
    }

    return <>
        <h2>Enter your Date of Birth</h2>
        <input
            type="date"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onKeyPress={(e) => {
                if (e.key === "Enter")
                    onSubmit()
            }} />
    </>
}