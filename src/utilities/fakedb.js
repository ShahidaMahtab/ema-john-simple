const addToDb = id =>{
  const savedDb = getDb();
  if(id in savedDb){
    savedDb[id] = savedDb[id] + 1;
  }else{
    savedDb[id] = 1;
  }
  savedToDb(savedDb);
}
const savedToDb = (db) =>{
  localStorage.setItem('shopping-cart',JSON.stringify(db));
}
const getDb = () =>{
 const savedDb = localStorage.getItem('shopping-cart');
 return savedDb ? JSON.parse(savedDb) : {};
}
export {addToDb,savedToDb,getDb}
