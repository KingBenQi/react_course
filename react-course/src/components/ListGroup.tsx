import { Fragment, useState } from "react";
function ListGroup() {
  let items = ["New York", "Los Angles", "Beijing", "Singapore", "London"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //if (items.length == 0) return <p>No item found</p>;

  //const message = items.length == 0 ? <p>No items</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items</p> : null;
  //   };

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
