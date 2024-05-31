export default function Stats({ groceries }) {
  const numItems = groceries.length;
  const numPacked = groceries.filter((item) => item.packed).length;
  const percPacked = Math.round((numPacked / numItems) * 100);

  let totalCost = 0;
  groceries.forEach((item) => {
    totalCost += item.packed ? item.price * item.quantity : 0;
  });

  return (
    <footer className="footer">
      {" "}
      {numItems === 0 && "You don't need any groceries 🧐"}
      {percPacked === 100 && "You have packed all the groceries! 🙌"}
      {numItems > 0 &&
        percPacked < 100 &&
        `You have packed ${numPacked} of ${numItems} items. (%${percPacked}) ⌛`}
      {`  Total: R${totalCost}`}
    </footer>
  );
}
