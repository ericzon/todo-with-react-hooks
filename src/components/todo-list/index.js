import React from 'react';

import TodoRow from '../todo-row';
import './TodoList.css';

function TodoList({type, items, onUpdate}) {
   return <section className={type + '-main-items'}>
            <span className="list-title">{type.toUpperCase()} items:</span>
            {items.length ? 
               <ul className={type + '-list items-list'}>
                  {items.map((item, idx) => {
                     return <TodoRow type={type} key={idx} item={item} onToggleItem={onUpdate} />;
                  })}
               </ul> : 
            <div>
               No items
            </div>}
         </section>;
}

export default TodoList;
