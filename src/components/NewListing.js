import { useState } from "react"

function NewListing({ handleAddedItem }) {

    const [image, setImage] = useState("")
    const [item, setItem] = useState("")
    const [location, setLocation] = useState("")

    // Handles back-end new item
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    description: item,
                    image: image,
                    location: location
                }
            )
        })
            .then(res => res.json())
            .then(data => handleAddedItem(data))
        setImage("")
        setItem("")
        setLocation("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={image} onChange={e => setImage(e.target.value)} style={{ textAlign: "center" }} placeholder="image"></input>
            <input value={item} onChange={e => setItem(e.target.value)} style={{ textAlign: "center" }} placeholder="item"></input>
            <input value={location} onChange={e => setLocation(e.target.value)} style={{ textAlign: "center" }} placeholder="location"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewListing