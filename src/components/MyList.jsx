import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);

  // const { user } = useAuth() || {};
  const [item, setItem] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-list/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log("deleted");
              const remainingSpots = item.filter((spot) => spot._id !== id);
              setItem(remainingSpots);
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });
            }
          });
        
      }
    });
  };

  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/my-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div className="pt-10 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Tourist Spot Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {item.map((spot) => (
              <tr key={spot._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spot?.imageURL} alt="Image" />
                    </div>
                  </div>
                </td>
                <td>{spot?.spotName}</td>
                <td>{spot?.averageCost} $</td>
                <td>
                  <Link to={`/update-spot/${spot?._id}`}>
                    <button className="btn mr-2 bg-green-600">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(spot?._id)}
                    className="btn bg-red-700"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
