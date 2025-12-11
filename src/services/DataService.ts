import { books, users, borrows } from '../data';
import * as fs from 'fs';

export const saveData = (): void => {
  const dataToSave = {
    books: books,
    users: users,
    borrows: borrows,
    timestamp: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(
      'library_data.json',
      JSON.stringify(dataToSave, null, 2),
      'utf-8',
    );
    console.log('✅ Data saved to library_data.json');
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`❌ Error saving data: ${e.message}`);
    } else {
      console.error('❌ Unknown error saving data:', e);
    }
  }
};
