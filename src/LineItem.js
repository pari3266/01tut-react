const LineItem = ({item, handleCheck, handleDelete}) => {
    return(
        <div>
            <li key={item.id}>
                <input
                type='checkbox'
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}
                />
                <label>{item.item}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                {/* <FaTrashAlt 
                    role="button" 
                    tabIndex='0'
                /> */}
            </li>
        </div>
    )
}
export default LineItem;