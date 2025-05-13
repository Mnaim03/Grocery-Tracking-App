import SQLite from 'react-native-sqlite-storage';


// Abilita il debug se vuoi vedere log
SQLite.DEBUG(true);
SQLite.enablePromise(true);

// Apri il database
const getDBConnection = async () => {
  try {
    const db = await SQLite.openDatabase({
      name: 'grocery.db',
      location: 'default',
    });
    return db;
  } catch (error) {
    console.error('Errore apertura DB:', error);
    throw Error('Failed to open database');
  }
};

// Crea la tabella se non esiste
export const createTableItems = async () => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL,
      category TEXT NOT NULL,
      inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      list_id INTEGER,
      FOREIGN KEY (list_id) REFERENCES lists(id),
      FOREIGN KEY (category) REFERENCES categories(name)
    );
  `);

  console.log('✅ Tabella "items" creata o già esistente'); //Debug 
};

// Crea la tabella se non esiste
export const createTableLists = async () => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS lists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    );
  `);

  console.log('✅ Tabella "lists" creata o già esistente'); //Debug 
};

// Crea la tabella se non esiste
export const createTableCategories = async () => {
  const db = await getDBConnection();
  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS categories (
    name TEXT PRIMARY KEY
    );
  `);

  console.log('✅ Tabella "categories" creata o già esistente'); //Debug 
};

//Inserimento categorie
export const insertCategory = async () => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT OR IGNORE INTO categories (name) VALUES
    ('Fruits'),
    ('Vegetables'),
    ('Dairy'),
    ('Meat'),
    ('Snacks'),
    ('Beverages'),
    ('Other');`
  );
};

// Inserisci un nuovo elemento
export const insertItem = async (name, quantity, price, category, listId) => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO items (name, quantity, price, category, inserted_at, list_id) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, quantity, price, category, new Date().toISOString(), listId]
  );
};

// Recupera tutti gli elementi
export const getItems = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM items;`);
  const items = [];

  results.forEach(result => {
    for (let i = 0; i < result.rows.length; i++) {
      items.push(result.rows.item(i));
    }
  });

  return items;
};

// Crea una nuova lista
export const createList = async (name) => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO lists (name) VALUES (?);`,
    [name]
  );
};

// Recupera tutte le liste
export const getLists = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM lists;`);
  const lists = [];

  results.forEach(result => {
    for (let i = 0; i < result.rows.length; i++) {
      lists.push(result.rows.item(i));
    }
  });

  return lists;
};