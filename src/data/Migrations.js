const migrateAddressSchema = () => {
    const address = localStorage.getItem('address');
    const name = localStorage.getItem('name');
    if ( address || name ) {
        const profile = { "name": name, "addresses": [ { "address":address, "selected":true } ] };
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.removeItem( 'address' );
        localStorage.removeItem( 'name' );
    }
}

const Migrations = () => {
    migrateAddressSchema();
}

export default Migrations;