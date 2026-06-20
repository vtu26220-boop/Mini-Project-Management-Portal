import axios from "axios";

const API = "https://mini-project-management-portal.onrender.com/tasks";

export const getTasks = () =>
  axios.get(API);

export const addTask = (task) =>
  axios.post(API, task);

export const updateTask = (
  id,
  data
) =>
  axios.put(`${API}/${id}`, data);

export const deleteTask = (id) =>
  axios.delete(`${API}/${id}`);