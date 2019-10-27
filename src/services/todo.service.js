import itemList from '../settings';

class TodoService {
   getMockItems() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(itemList);
         }, 3000);
      });
   }

   async getItems() {
      const items = await this.getBooks('nodejs', 3);

      return items.map(item => {
         return {
            id: item.id,
            text: item.volumeInfo.title,
            value: item.id
         }
      });
   }

   async getBooks(query, limit) {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const parsedResult = await response.json();

      return parsedResult.items.slice(0, limit);
   }
}

export default TodoService;
