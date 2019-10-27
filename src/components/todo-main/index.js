import React, {useState} from 'react';

import itemList from '../../settings';
import TodoSettings from '../todo-main-settings';
import TodoFeedback from '../todo-feedback';
import TodoList from '../todo-list';

const findItemById = (list, item) => list.findIndex(listItem => listItem.id === item.id);

function TodoMain(props) {
   const [todoItems, setTodoItems] = useState(itemList);
   const [doneItems, setDoneItems] = useState([]);

   const onSelectAllFn = () => {
      console.log('onSelectAll');
      setDoneItems([...doneItems, ...todoItems]);
      setTodoItems([]);
   };

   const onDeselectAllFn = () => {
      console.log('onDeselectAll');
      setTodoItems([...doneItems, ...todoItems]);
      setDoneItems([]);
   };

   const addNewItem = () => {
      const elem = document.getElementById('new-item');

      if (elem && elem.value !== '') {
         setTodoItems([{
            id: todoItems.length,
            text: elem.value,
            value: todoItems.length
         }, ...todoItems]);

         elem.value = '';
      }
   };

   const updateLists = itemChanged => {
      if (itemChanged.state) {
         moveFromPendingToDone(itemChanged);
      } else {
         moveFromDoneToPending(itemChanged);
      }
      console.log('todoItems -> ', todoItems);
      console.log('doneItems -> ', doneItems);

      setTodoItems([...todoItems]);
      setDoneItems([...doneItems]);
   };

   const moveFromPendingToDone = item => {
      const itemIdx = findItemById(todoItems, item);
      // const {0: first, length, [length - 1]: last} = todoItems;
      // console.log('Destructuring array internals: first', first, ' length', length,' last: ',last);
      todoItems.splice(itemIdx, 1);
      doneItems.unshift(item);
   };

   const moveFromDoneToPending = item => {
      const itemIdx = findItemById(doneItems, item);

      doneItems.splice(itemIdx, 1);
      todoItems.push(item);
   };

   return (
      <div>
         <h1>My ToDo List</h1>

         <TodoFeedback todoItems={todoItems} />
         <TodoSettings onSelectAll={onSelectAllFn} onDeselectAll={onDeselectAllFn} />

         <div>
            <input id="new-item" type="text" placeholder="New item..." />
            <button onClick={addNewItem}>Add</button>
         </div>

         {<TodoList type={'todo'} items={todoItems} onUpdate={updateLists} />}
         <div>------------------------</div>
         {<TodoList type={'done'} items={doneItems} onUpdate={updateLists} />}

      </div>
   );
}
export default TodoMain;
