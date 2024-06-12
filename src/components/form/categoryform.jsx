function CategoryForm({ handleSubmit, value, setValue }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ border: "2px solid #ccc" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#008CBA", border: "none", color: "white", padding: "10px 25px", textAlign: "center", display: "inline-block", fontSize: "10px", borderRadius: "14px" }}>
          Submit
        </button>
      </form>

    </>
  )
}
export default CategoryForm;