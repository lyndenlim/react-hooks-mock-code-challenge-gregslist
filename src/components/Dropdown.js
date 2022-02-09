
function Dropdown({ setSorting }) {
    // Sets dropdown value in state declared in app
    function handleChange(e) {
        setSorting(e.target.value)
    }

    return (
        <select onChange={handleChange}>
            <option style={{ textAlign: "center" }} value="unsorted">Unsorted</option>
            <option style={{ textAlign: "center" }} value="location">Alphabetically by Location</option>
            <option style={{ textAlign: "center" }} value="description">Alphabetically by Description</option>
        </select>
    )
}

export default Dropdown