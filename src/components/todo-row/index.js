import React from 'react';

import './ItemRow.css';

function TodoRow({item, onToggleItem, type}) {
   const {text, id, value} = item;
   const checkId = 'check-' + id;

   const toggleState = () => {
      const elem = document.getElementById(checkId);
      console.log('toggleState -> ',elem.value, '-',elem.checked);
      onToggleItem({
         ...item,
         state: elem.checked
      });
   };

   return <li className={type + '-item'}>
            <input type="checkbox" 
                  onChange={toggleState} 
                  checked={type === 'done'}
                  id={checkId} /> {text}
         </li>;
}
export default TodoRow;
