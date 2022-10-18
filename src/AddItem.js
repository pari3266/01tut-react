import { useRef } from "react";
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">addItem</label>
            <input
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e)=> setNewItem(e.target.value)}/>
            <button type="submit"
            aria-label="Add-Item"
            onClick={() => inputRef.current.focus()}>
                add
            </button>
        </form>
    )
}
export default AddItem;