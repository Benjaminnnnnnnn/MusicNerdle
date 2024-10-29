function App() {
  const tokenInfo = fetch("/", {
    method: "GET",
  });
  console.log(tokenInfo);
  return <div>{tokenInfo}</div>;
}

export default App;
