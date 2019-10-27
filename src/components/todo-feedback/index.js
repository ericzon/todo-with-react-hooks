import React from 'react';

function TodoFeedback({ todoItems }) {
   return <section className="todo-main-feedback">
            {todoItems.length ? 
               `You have ${todoItems.length} tasks to do!`:
               `Hooray! You don't have any pending task!`}
         </section>;
}

export default TodoFeedback;
