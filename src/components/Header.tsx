const user = {
  name: 'Tiemi',
  lastName: 'Faustino',
};

function Header() {
  return (
    <h1>
      { `Olá ${user.name} ${user.lastName}` }
    </h1>
  );
}

export default Header;
