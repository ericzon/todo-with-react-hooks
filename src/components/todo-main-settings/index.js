
import React from 'react';

import './TodoSettings.css';

function TodoSettings(props) {
   const {onSelectAll, onDeselectAll} = props;
   return (
      <section className="todo-settings-main">
         Settings:
         <ul>
            <li>
               <button onClick={onSelectAll}>
                  Select all
               </button>
            </li>
            <li>
               <button onClick={onDeselectAll}>
                  Deselect all
               </button>
            </li>
         </ul>
      </section>
   );
}
export default TodoSettings;
