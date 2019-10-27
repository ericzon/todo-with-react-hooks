const itemListGenerator = quantity => {
   const items = [];

   for(let i = 0; i < quantity; i++) {
      const id = i+1;
      items.push({
         id,
         text: `todo item ${id}`,
         value: id
      });
   }
   return items;
};

const itemList = itemListGenerator(3);

export default itemList;
