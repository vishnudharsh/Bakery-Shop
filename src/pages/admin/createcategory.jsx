import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMenu from "./adminmenu";
import CategoryForm from "../../components/form/categoryform";
import { Modal } from "antd";

function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/api/v1/category/create-category";
    try {
      const { data } = await axios.post(url, {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };


  //get all cat
  const getAllCategory = async () => {
    const url = "http://localhost:9000/api/v1/category/get-category";
    try {
      const { data } = await axios.get(url);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = `http://localhost:9000/api/v1/category/update-category/${selected._id}`;
    try {
      const { data } = await axios.put(url, { name: updatedName });
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    const url = `http://localhost:9000/api/v1/category/delete-category/${pId}`;
    try {
      const { data } = await axios.delete(url);
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h4>Manage Category</h4>
            <div className="p-3 w-50">
              <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
            </div>
            <div className="w-75 mt-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => {
                    return (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <button onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c); }} style={{ backgroundColor: "#008CBA", border: "none", color: "white", padding: "10px 24px", textAlign: "center", display: "inline-block", fontSize: "10px", borderRadius: "10px", marginRight: "25px" }}>Edit</button>
                            <button onClick={() => { handleDelete(c._id); }} style={{ backgroundColor: "#f44336", border: "none", color: "white", padding: "10px 24px", textAlign: "center", display: "inline-block", fontSize: "10px", borderRadius: "10px", marginRight: "25px" }}>Delete</button>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
            <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
          </Modal>
        </div>
      </div>
    </>
  )
}
export default CreateCategory;