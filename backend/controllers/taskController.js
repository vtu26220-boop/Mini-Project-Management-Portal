const Task =
  require("../models/Task");

const getTasks = async (
  req,
  res
) => {

  try {

    const tasks =
      await Task.find()
      .sort({ createdAt: -1 });

    res.status(200)
    .json(tasks);

  } catch (error) {

    res.status(500)
    .json({
      message:
      error.message
    });

  }
};

const createTask =
async (req, res) => {

  try {

    const {
      title,
      description,
      status
    } = req.body;

    if (!title) {

      return res
      .status(400)
      .json({
        message:
        "Title Required"
      });
    }

    if (
      description.length < 20
    ) {

      return res
      .status(400)
      .json({
        message:
        "Description must be minimum 20 characters"
      });
    }

    const task =
      await Task.create({
        title,
        description,
        status
      });

    res.status(201)
    .json(task);

  } catch (error) {

    res.status(500)
    .json({
      message:
      error.message
    });

  }
};

const updateTask =
async (req, res) => {

  try {

    const task =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

    res.status(200)
    .json(task);

  } catch (error) {

    res.status(500)
    .json({
      message:
      error.message
    });

  }
};

const deleteTask =
async (req, res) => {

  try {

    await Task.findByIdAndDelete(
      req.params.id
    );

    res.status(200)
    .json({
      message:
      "Task Deleted Successfully"
    });

  } catch (error) {

    res.status(500)
    .json({
      message:
      error.message
    });

  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};