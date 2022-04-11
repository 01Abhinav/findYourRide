export default function Home() {
  return (
    <div className="flex-row d-flex justify-content-between bg-black text-light p-3">
      <div>
        <h2>Edvora</h2>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div>Dhruv Singh</div>
        <div>
          <img
            className="rounded-circle mx-2"
            src="https://i.stack.imgur.com/f5eeF.png"
            width="50px"
          ></img>
        </div>
      </div>
    </div>
  );
}
