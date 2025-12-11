import * as fs from 'fs';

const bks: any[] = [];
const usr: any[] = [];
const brws: any[] = [];

function doEverything(): void {
  bks.push(
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      isbn: '978-2-07-040024-4',
      available: true,
      category: 'Fiction',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0-452-28423-4',
      available: true,
      category: 'Dystopie',
    },
    {
      id: 3,
      title: "Harry Potter à l'école des sorciers",
      author: 'J.K. Rowling',
      isbn: '978-2-07-054174-9',
      available: false,
      category: 'Fantasy',
    },
    {
      id: 4,
      title: "L'Étranger",
      author: 'Albert Camus',
      isbn: '978-2-07-036002-1',
      available: true,
      category: 'Philosophie',
    },
    {
      id: 5,
      title: 'Dune',
      author: 'Frank Herbert',
      isbn: '978-2-266-11235-3',
      available: true,
      category: 'Science-Fiction',
    },
  );

  usr.push(
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      registrationDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie.martin@email.com',
      registrationDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Pierre Durand',
      email: 'pierre.durand@email.com',
      registrationDate: '2023-03-10',
    },
  );

  console.log('=== SYSTÈME DE GESTION DE BIBLIOTHÈQUE ===');
  console.log();

  console.log('📚 LIVRES DISPONIBLES:');
  for (const b of bks) {
    if (b.available) {
      console.log(
        `- ${b.title} par ${b.author} (ID: ${b.id}) - Catégorie: ${b.category}`,
      );
    }
  }
  console.log();

  console.log("📋 SIMULATION D'EMPRUNTS:");

  const bookId = 1;
  const userId = 1;
  let foundBook: any = null;
  let foundUser: any = null;

  for (const b of bks) {
    if (b.id === bookId) {
      foundBook = b;
      break;
    }
  }

  for (const u of usr) {
    if (u.id === userId) {
      foundUser = u;
      break;
    }
  }

  if (foundBook && foundUser && foundBook.available) {
    foundBook.available = false;
    const borrowDate =
      `${new Date().toISOString().split('T')[0]
      } ${
      new Date().toTimeString().split(' ')[0]}`;
    const returnDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    brws.push({
      id: brws.length + 1,
      bookId: bookId,
      userId: userId,
      borrowDate: borrowDate,
      returnDate: returnDate,
      returned: false,
    });
    console.log(`✅ ${foundUser.name} a emprunté '${foundBook.title}'`);
  } else {
    console.log(`❌ Impossible d'emprunter le livre ID ${bookId}`);
  }

  const bid = 5;
  const uid = 2;
  let fb: any = null;
  let fu: any = null;

  for (const book of bks) {
    if (book.id === bid) {
      fb = book;
      break;
    }
  }

  for (const user of usr) {
    if (user.id === uid) {
      fu = user;
      break;
    }
  }

  if (fb && fu && fb.available) {
    fb.available = false;
    const bd =
      `${new Date().toISOString().split('T')[0]
      } ${
      new Date().toTimeString().split(' ')[0]}`;
    const rd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    brws.push({
      id: brws.length + 1,
      bookId: bid,
      userId: uid,
      borrowDate: bd,
      returnDate: rd,
      returned: false,
    });
    console.log(`✅ ${fu.name} a emprunté '${fb.title}'`);
  } else {
    console.log(`❌ Impossible d'emprunter le livre ID ${bid}`);
  }

  console.log();

  console.log('📋 EMPRUNTS EN COURS:');
  for (const borrow of brws) {
    if (!borrow.returned) {
      let bookTitle = 'Livre introuvable';
      for (const b of bks) {
        if (b.id === borrow.bookId) {
          bookTitle = b.title;
          break;
        }
      }

      let userName = 'Utilisateur introuvable';
      for (const u of usr) {
        if (u.id === borrow.userId) {
          userName = u.name;
          break;
        }
      }
      const returnDate = new Date(borrow.returnDate);
      const today = new Date();
      if (returnDate < today) {
        const daysLate = Math.floor(
          (today.getTime() - returnDate.getTime()) / (1000 * 60 * 60 * 24),
        );
        console.log(
          `- ${userName} : '${bookTitle}' (⚠️ RETARD de ${daysLate} jours)`,
        );
      } else {
        const daysRemaining = Math.floor(
          (returnDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
        );
        console.log(
          `- ${userName} : '${bookTitle}' (📅 à rendre dans ${daysRemaining} jours)`,
        );
      }
    }
  }

  console.log();

  console.log('📤 SIMULATION DE RETOUR:');
  const returnBorrowId = 1;

  for (const borrow of brws) {
    if (borrow.id === returnBorrowId && !borrow.returned) {
      borrow.returned = true;
      borrow.actualReturnDate =
        `${new Date().toISOString().split('T')[0]
        } ${
        new Date().toTimeString().split(' ')[0]}`;

      let bookTitle = '';
      for (const b of bks) {
        if (b.id === borrow.bookId) {
          b.available = true;
          bookTitle = b.title;
          break;
        }
      }

      let userName = '';
      for (const u of usr) {
        if (u.id === borrow.userId) {
          userName = u.name;
          break;
        }
      }

      console.log(`✅ ${userName} a rendu '${bookTitle}'`);
      break;
    }
  }

  console.log();

  console.log('📊 STATISTIQUES:');

  const totalBooks = bks.length;
  let availableBooks = 0;
  let borrowedBooks = 0;

  for (const b of bks) {
    if (b.available) {
      availableBooks++;
    } else {
      borrowedBooks++;
    }
  }

  const totalUsers = usr.length;
  const activeBorrowers: number[] = [];

  for (const borrow of brws) {
    if (!borrow.returned) {
      if (!activeBorrowers.includes(borrow.userId)) {
        activeBorrowers.push(borrow.userId);
      }
    }
  }

  const categories: { [key: string]: number } = {};
  for (const b of bks) {
    const cat = b.category;
    if (categories[cat]) {
      categories[cat]++;
    } else {
      categories[cat] = 1;
    }
  }

  console.log(`Total de livres: ${totalBooks}`);
  console.log(`Livres disponibles: ${availableBooks}`);
  console.log(`Livres empruntés: ${borrowedBooks}`);
  console.log(`Total d'utilisateurs: ${totalUsers}`);
  console.log(`Emprunteurs actifs: ${activeBorrowers.length}`);
  console.log('Répartition par catégories:');
  for (const cat in categories) {
    console.log(`  - ${cat}: ${categories[cat]} livre(s)`);
  }

  console.log();

  console.log('🔍 RECHERCHE DE LIVRES:');
  const searchTerm = 'Harry';
  console.log(`Recherche pour: '${searchTerm}'`);

  const results: any[] = [];
  for (const b of bks) {
    if (
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      results.push(b);
    }
  }

  if (results.length > 0) {
    console.log('Résultats trouvés:');
    for (const r of results) {
      const status = r.available ? '✅ Disponible' : '❌ Emprunté';
      console.log(`- ${r.title} par ${r.author} (${status})`);
    }
  } else {
    console.log('Aucun résultat trouvé.');
  }

  console.log();

  console.log('💾 SAUVEGARDE DES DONNÉES:');

  const dataToSave = {
    books: bks,
    users: usr,
    borrows: brws,
    timestamp: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(
      'library_data.json',
      JSON.stringify(dataToSave, null, 2),
      'utf-8',
    );
    console.log('✅ Données sauvegardées dans library_data.json');
  } catch (error) {
    console.log(`❌ Erreur lors de la sauvegarde: ${error}`);
  }

  console.log();
  console.log('=== FIN DU PROGRAMME ===');
}

if (require.main === module) {
  doEverything();
}
