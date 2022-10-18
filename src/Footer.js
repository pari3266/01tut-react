const Footer = () => {
    const today = new Date();
    return (
        <footer>{today.getFullYear()}</footer>
    )
}
export default Footer; 