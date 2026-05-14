import "./Task.css";

const Task = ({ title, description }) => {
  return (
    <div className="task">
      <textarea defaultValue={title}></textarea>
      <textarea defaultValue={description}></textarea>
    </div>
  );
};

export default Task;
