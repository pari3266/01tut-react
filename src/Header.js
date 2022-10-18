const Header = (props) => {
    return (
        <header style={{
            backgroundColor: 'blue',
            color: '#fff'
        }}>
           {props.title}
        </header>
    )
}
export default Header;