export default function Header({ user }) {
  return (
    <div className="flex-row d-flex justify-content-between header-back bg-black text-light p-3">
      <div>
        <h2 style={{ paddingLeft: "43px" }}>Edvora</h2>
      </div>
      <div
        className="d-flex flex-row align-items-center"
        style={{ paddingRight: "40px" }}
      >
        <div>{user.name}</div>
        <div>
          <img
            className="rounded-circle mx-2"
            src={user.url}
            width="44px"
          ></img>
        </div>
      </div>
    </div>
  );
}
