import "./List.css";

const List = ({ lists, checked, deleted, edited }) => {
  const handleCheck = (id) => {
    checked(id);
  };

  const handleDelete = (id) => {
    deleted(id);
  };

  const handleEdit = (id) => {
    edited(id);
  };

  return (
    <>
      {lists.map((list) => (
        <div id={list.id} className="listContainer" key={list.id}>
          <div className="textContainer">
            <input
              type="checkbox"
              checked={list.isDone}
              onChange={handleCheck.bind(null, list.id)}
            />
            <p>{list.text}</p>
          </div>
          <div className="btnContainer">
            <button className="edit" onClick={handleEdit.bind(null, list.id)}>
              Edit
            </button>
            <button
              className="delete"
              onClick={handleDelete.bind(null, list.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
