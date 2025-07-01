// UserManagement.jsx
import React, { useEffect, useState } from "react";
import "./User_Management.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios"
import Modal from "react-modal"
import BASE_URL from '../../../Config/config.js';

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [newRole, setNewRole] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/users/all`)
        setUsers(res.data)
      } catch (error) {
        console.error("Error fetching users", error)
      }
    }
    fetchUsers();
  }, []);

  // role changed
  const handleRoleChange = async (id, newRole) => {
    try {
      await axios.put(`${BASE_URL}/api/users/role/${id}`, { role: newRole })
      setUsers(users.map((user) => (
        user._id === id ? { ...user, role: newRole } : user
      )))
    } catch (error) {
      console.error('Failed to update role', error)
    }
  }

  // delete user
  const handleDeleteUser = async (id) => {
    console.log('id of user', id)
    try {
      await axios.delete(`${BASE_URL}/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id))
    } catch (error) {
      console.error("Failed to delete user", error)
    }
  }

  const filteredUsers = users.filter((user) => (
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <>
      <div
        className="my-3 mx-3 py-3 px-3 rounded user-management"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-center mb-4 user-managemet-headline" style={{ fontFamily: '"Poppins", sans-serif', fontSize: "25px", color: "#3D3D3D" }}>User Management</h1>

        <div className="admin-searchusers-bar mb-3">
          <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="" placeholder="Search users..." />
        </div>

        <div className="table-responsive user-management-container-table">
          <table className="w-100 text-center mb-0">
            <thead className="" style={{ fontFamily: '"Poppins", sans-serif', }}>
              <tr className="table-header-user-management">
                <th className="" >Name</th>
                <th className="">Email</th>
                <th className="">Role</th>
                <th className="">Registration Date</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody >
              {filteredUsers.map((user) => (
                <tr className="table-data-user-management" key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td >
                    <button style={{ background: 'none' }} className={`role-btn user-management-role-data ${user.role === 'Admin' ? 'admin' : 'general'}`} onClick={() => { setSelectedUser(user); setNewRole(user.role || 'User'); }}>{user.role === 'Admin' ? 'Admin' : 'General'}</button>
                  </td>
                  <td>{new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit', month: 'long', year: 'numeric'
                  }).format(new Date(user.createdAt))
                  }</td>
                  < td >
                    <button
                      className="btn btn-sm  me-2"
                      style={{ color: "#FF8272", fontSize: "22px" }}
                      onClick={() => { setSelectedUser(user); setNewRole(user.role); setIsModalOpen(true) }}>
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-sm "
                      style={{ color: "#ff8272", fontSize: "22px" }}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          {/* Edit Modal */}
          <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
            style={{ content: { background: 'transparent', border: 'none', padding: 0 } }}
          >
            <div className="edit-modal-container">
              <h2 className="edit-modal-title">Edit Role</h2>
              {selectedUser && (
                <div className="edit-modal-body">
                  <p><strong>Name:</strong>{selectedUser.name}</p>
                  <p><strong>Email:</strong>{selectedUser.email}</p>
                  {/* <button value={newRole} onChange={(e) => setNewRole(e.target.value)}></button> */}
                  <label htmlFor="role">Select Role:</label>
                  <select name="" id="role" className="edit-modal-select" value={newRole || 'User'} onChange={(e) => setNewRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="User">General</option>
                  </select>
                  <div className="edit-modal-buttons" style={{ marginTop: '50px' }}>
                    <button className="edit-modal-update-btn" onClick={() => { handleRoleChange(selectedUser._id, newRole); setIsModalOpen(false) }}>
                      Update
                    </button>
                    <button className="edit-modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

          </Modal>
        </div>
      </div >
    </>
  );
};

export default UserManagement;
