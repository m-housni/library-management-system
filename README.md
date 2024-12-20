# Usage
1. Compile
```
tsc
```
2. Test
```
node dist/index.js
```
3. Output
```
ode dist/index.js
Book "1984" added successfully.
Book "Brave New World" added successfully.
User "Alice" added successfully.
User "Bob" added successfully.
Book "1984" borrowed.
[2024-12-20T19:24:42.436Z] Available books:
[
  {
    id: '1',
    title: '1984',
    author: 'George Orwell',
    isAvailable: false
  },
  {
    id: '2',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    isAvailable: true
  }
]
```
