import React from 'react';

import TodoRow from '../todo-row';

function TodoList({type, items, onUpdate}) {
   return <section className={type + '-main-items'}>
            {type.toUpperCase()} items:
            {items.length ? 
               <ul className={type + '-list'}>
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
