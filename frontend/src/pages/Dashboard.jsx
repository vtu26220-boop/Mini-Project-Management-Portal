import { useEffect, useState } from "react";
import "./Dashboard.css";

import EmptyState from "../components/EmptyState";
import TaskCard from "../components/TaskCard";

import {
  getTasks,
  updateTask,
  deleteTask
} from "../services/taskService";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const tasksPerPage = 5;

  const fetchTasks = async () => {

    try {

      const res = await getTasks();

      if (Array.isArray(res.data)) {

        setTasks(res.data);

      } else {

        setTasks([]);

      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      setTasks([]);

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  const completeTask = async (id) => {

    try {

      await updateTask(id, {
        status: "Completed"
      });

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const removeTask = async (id) => {

    try {

      await deleteTask(id);

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const totalTasks = tasks.length;

  const pendingTasks =
    tasks.filter(
      task =>
      task.status === "Pending"
    ).length;

  const completedTasks =
    tasks.filter(
      task =>
      task.status === "Completed"
    ).length;

  const filteredTasks =
    tasks
      .filter(task =>
        task.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      .sort((a, b) => {

        if (sortOrder === "latest") {

          return new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          );

        }

        return new Date(
          a.createdAt
        ) -
        new Date(
          b.createdAt
        );

      });

  const lastIndex =
    currentPage * tasksPerPage;

  const firstIndex =
    lastIndex - tasksPerPage;

  const currentTasks =
    filteredTasks.slice(
      firstIndex,
      lastIndex
    );

  const totalPages =
    Math.ceil(
      filteredTasks.length /
      tasksPerPage
    );

  if (loading)
    return <h1>Loading...</h1>;

  return (

    <div className="dashboard-container">

      <div className="container">

        <h1 className="dashboard-title">
          Project Management Dashboard
        </h1>

        <div className="row mb-4">

          <div className="col-md-4">
            <div className="stat-card">
              <h4>Total Tasks</h4>
              <h2>{totalTasks}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-card">
              <h4>Pending Tasks</h4>
              <h2>{pendingTasks}</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="stat-card">
              <h4>Completed Tasks</h4>
              <h2>{completedTasks}</h2>
            </div>
          </div>

        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Tasks"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="form-control mb-4"
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(
              e.target.value
            )
          }
        >
          <option value="latest">
            Latest First
          </option>

          <option value="oldest">
            Oldest First
          </option>
        </select>

        {

          currentTasks.length === 0

            ?

            <EmptyState />

            :

            currentTasks.map(task => (

              <TaskCard
                key={task._id}
                task={task}
                onComplete={completeTask}
                onDelete={removeTask}
              />

            ))

        }

        <div className="pagination-box">

          <button
            onClick={() =>
              setCurrentPage(
                currentPage - 1
              )
            }
            disabled={
              currentPage === 1
            }
          >
            Previous
          </button>

          <span>
            Page {currentPage}
            {" "}of{" "}
            {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage(
                currentPage + 1
              )
            }
            disabled={
              currentPage ===
              totalPages
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;