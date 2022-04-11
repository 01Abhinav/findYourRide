export default function Home() {
  return (
    <div className="flex-row d-flex justify-content-between bg-dark text-light p-3">
      <div className="d-flex flex-row justify-content-between w-25">
        <div>
          <h6>Nearest Rides</h6>
        </div>
        <div>
          <h6>upcoming Rides</h6>
        </div>
        <div>
          <h6>Past Rides</h6>
        </div>
      </div>

      <div>
        <h6>Filter</h6>
      </div>
    </div>
  );
}
