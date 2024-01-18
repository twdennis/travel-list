export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 🕶️</em>
      </footer>
    );

  const numItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentagePacked =
    numberOfPacked > 0 ? Math.round((numberOfPacked / numItems) * 100) : "0";

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go! ✈️"
          : `🧳 You have ${numItems} items on your list, and you have packed
          ${numberOfPacked} (${percentagePacked}% packed)`}
      </em>
    </footer>
  );
}
