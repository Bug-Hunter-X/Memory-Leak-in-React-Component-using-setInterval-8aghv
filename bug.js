```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback is not
    // properly cleaned up, leading to memory leaks and potential
    // unexpected behavior.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function
    // return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```