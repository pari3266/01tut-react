import { useState } from "react";
// import { FaTrashAlt} from 'react-icons/fa';
import ItemList from "./ItemList";
const Content = ({items, handleCheck, handleDelete}) => {
    const handleNameChange = () => {
        const names = ['Manouchehr','Arsam','Anita','Parisa'];
        const int = Math.floor(Math.random()*3);
        // return names[int];
        setName(names[int])
    }
    const handleClick = () => {
        console.log('You CLicked it');
    }
    const handleClick2 = (name) => {
        console.log(name);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    const [name, setName] = useState('Parisa')
    // const [items, setItems] = useState([
    //     {
    //         id:1,
    //         checked: false,
    //         item:'test1'
    //     },
    //     {
    //         id:2,
    //         checked: false,
    //         item:'test2'
    //     },
    //     {
    //         id:3,
    //         checked: false,
    //         item:'test3'
    //     },
    // ])

    // const handleCheck = (id) => {
    //     const listItems = items.map((item) => item.id == id ? {...item,
    //     checked : !item.checked} : item)
    //     setItems(listItems)
    //     localStorage.setItem('s',JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id);
    //     setItems(listItems);
    //     localStorage.setItem('s', JSON.stringify(listItems));
    // }
    return( 
        <main>
            {/* <p>Hello {handleNameChange()}</p> */}
            <p>{name}</p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it</button>
            {/* Ananymous function */}
            <button onClick={() => handleClick2('Parisa')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>

            <ItemList items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        </main>
    )
}
export default Content;