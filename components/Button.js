export default function Button({ text }) {
  return (
    <button className="bg-blue-500 btn px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      {text}
    </button>
  );
}
