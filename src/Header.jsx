function Header() {
    const items = ['Home', 'About', 'Contact', 'Login'];

    return (
        <>
            <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', margin: 0, padding: 0 }}>
                    {items.map((item, index) => (
                        <li key={index} style={{ margin: '0 15px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </header>
        </>
    );
}

export default Header;
