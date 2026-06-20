function TaskCard({
  task,
  onComplete,
  onDelete
}) {

  return (

    <div className="card mb-3 shadow">

      <div className="card-body">

        <h4>{task.title}</h4>

        <p>{task.description}</p>

        <h6>

          Status:

          <span className="ms-2">
            {task.status}
          </span>

        </h6>

        <small>

          Created:

          {" "}

          {task.createdAt
            ? new Date(
                task.createdAt
              ).toLocaleDateString()
            : "N/A"}

        </small>

        <div className="mt-3">

          {

            task.status !==
            "Completed" && (

              <button
                className="btn btn-success me-2"
                onClick={() =>
                  onComplete(
                    task._id
                  )
                }
              >
                Complete
              </button>

            )

          }

          <button
            className="btn btn-danger"
            onClick={() =>
              onDelete(
                task._id
              )
            }
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default TaskCard;