# React setInterval Memory Leak
This example demonstrates a common error in React applications: improper use of `setInterval` within the `useEffect` hook, leading to memory leaks. The component continuously increments a counter, but fails to clear the interval when the component unmounts. This causes the interval to continue running, consuming resources and potentially leading to unexpected behavior.

## Solution
The solution involves using a cleanup function within the `useEffect` hook. This function is responsible for clearing the interval when the component unmounts or updates.