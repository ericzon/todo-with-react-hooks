
import React from 'react';

function TodoSettings(props) {
   const {onSelectAll, onDeselectAll} = props;
   return (
      <section className="todo-settings-main">
         Settings:
         <ul>
            <li onClick={onSelectAll}>Select all</li>
            <li onClick={onDeselectAll}>Deselect all</li>
         </ul>
      </section>
   );
}
export default TodoSettings;
