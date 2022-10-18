
  
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import {useState} from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {

  // const name= "Parisa";

  // const handleNameChange = () => {
  //   const names = ['Manouchehr','Arsam','Anita','Parisa'];
  //   const int = Math.floor(Math.random()*3);
  //   return names[int];
  // }

  const [items, setItems] = useState([
    // {
    //     id:1,
    //     checked: false,
    //     item:'test1'
    // },
    // {
    //     id:2,
    //     checked: false,
    //     item:'test2'
    // },
    // {
    //     id:3,
    //     checked: false,
    //     item:'test3'
    // },
    JSON.parse(localStorage.getItem('shoppingList'))
  ])

  const [newItem, setNewItem] = useState('');
  const [ search, setSearch] = useState('');
  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item,
      checked : !item.checked} : item)
      setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    console.log('submitted');
    e.preventDefault();
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id +1 : 1
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems);
  } 

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <p>Hello {name}</p> */}
        {/* <p>Hello {handleNameChange()}</p>
      </header> */}

    
      <Header title='G'/>
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
      <Content items={items.filter(item => ((item?.item)?.toLowerCase())?.includes(search?.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer />
    </div>
  );
}

export default App;
