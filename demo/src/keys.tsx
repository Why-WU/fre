import { h, render, useEffect, useState } from '../../src/index'

// function App() {
//   const [key, setKey] = useState(['a', 'b', 'c'])
//   return [
//     <button onClick={() => setKey(['a', 'c', 'b','d'])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState(['a', 'b', 'c'])
//   return [
//     <button onClick={() => setKey(['b', 'c', 'a'])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState(['a', 'b', 'c'])
//   return [
//     <button onClick={() => setKey(['c', 'b','a'])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

function App() {
  const [key, setKey] = useState([1, 2, 3])
  return <div>
    <button onClick={() => setKey([3, 1, 2])}>x</button>,
    <ul>
      {key.map((i) => (
        // <Li i={i} key={i} />
        <Li key={i} i={i} />
      ))}
    </ul>
  </div>
}

// function App() {
//   const [key, setKey] = useState([1, 2, 3])
//   return <div>
//     <button onClick={() => setKey([3, 2, 1])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         // <Li i={i} key={i} />
//         <li key={i} >{i}</li>
//       ))}
//     </ul>
//   </div>
// }

function Li(props) {
  return [<li>{props.i}</li>, <li>{props.i}</li>]
}

render(<App />, document.getElementById('root'))
