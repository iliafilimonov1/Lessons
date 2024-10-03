// import Card from "./components/Card/Card";
// import Counter from "./components/Counter/Counter";
// import { data } from "../data";

// const App = () => {

//   /**
//    * Обработчик получения id карточки
//    * @param {string} id - id карточки.
//    */
//   const handleClick = (id) => {
//     console.log(id);
//   };

//   return (
//     <main id="app" className="py-8">
//       <Counter/>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {data?.length > 0 &&
//             data?.map((productInfo) => {
//               return (
//                 <Card
//                   onCardClick={() => handleClick(productInfo?.id)}
//                   key={productInfo?.id}
//                   details={productInfo}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default App;

import { useState } from "react";
import AddTodo from "./components/Todo/AddTodo/AddTodo";
import TaskList from "./components/Todo/TaskList/TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
};

export default App;
