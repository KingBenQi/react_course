import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angles", "Beijing", "Singapore", "London"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cites"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
