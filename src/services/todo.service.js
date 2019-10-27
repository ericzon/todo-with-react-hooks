import itemList from '../settings';

class TodoService {
   getItems() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(itemList);
         }, 3000);
      });
   }
}

export default TodoService;
