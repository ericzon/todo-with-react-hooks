
import React from 'react';

import './TodoSettings.css';

function TodoSettings(props) {
   const {onSelectAll, onDeselectAll} = props;
   return (
      <section className="todo-settings-main">
         <ul>
            <li>
               <button onClick={onSelectAll}>
                  Mark all
               </button>
            </li>
            <li>
               <button onClick={onDeselectAll}>
                  Unmark all
               </button>
            </li>
         </ul>
      </section>
   );
}
export default TodoSettings;
