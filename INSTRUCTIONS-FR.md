# Instructions pour le candidat

## 🎯 Objectif

Vous devez refactoriser le code dans `src/library.ts` pour le rendre plus lisible, maintenable et testable, sans changer son comportement fonctionnel.

## 📋 Liste de contrôle

### ✅ Avant de commencer

- [ ] Lire attentivement le code existant
- [ ] Identifier les problèmes
- [ ] Exécuter le programme original : `npm start`
- [ ] Vérifier que les tests passent : `npm test`

### 🔄 Pendant le refactoring

- [ ] Créer des interfaces TypeScript appropriées
- [ ] Découper la fonction `doEverything()` en plus petites fonctions
- [ ] Éliminer la duplication de code
- [ ] Améliorer le nommage des variables et fonctions
- [ ] Organiser le code en modules/classes logiques
- [ ] Remplacer les `any` par des types appropriés

### ✅ Après le refactoring

- [ ] Vérifier que le programme fonctionne toujours : `npm start`
- [ ] Compiler sans erreurs : `npm run build`
- [ ] Tests passent : `npm test`
- [ ] Pas d'erreurs de linting : `npm run lint`

## 💡 Conseils

1. **Commencez petit** : Refactorisez étape par étape
2. **Gardez les tests verts** : Vérifiez régulièrement que le programme fonctionne
3. **Types first** : Commencez par définir les interfaces
4. **Une responsabilité par fonction** : Chaque fonction doit avoir un seul but
5. **Noms explicites** : Les noms doivent être clairs et descriptifs

## 📁 Structure suggérée

```
src/
├── types/
│   ├── Book.ts
│   ├── User.ts
│   └── Borrow.ts
├── services/
│   ├── LibraryService.ts
│   └── BorrowService.ts
├── utils/
│   └── helpers.ts
└── library.ts (point d'entrée)
```

## ⏰ Temps recommandé

- **Analyse** : 30 minutes
- **Refactoring** : 2 heures
- **Tests et validation** : 30 minutes

**Total : 3 heures maximum**

## 📝 Livrable

Envoyez le code refactorisé avec une brève explication de vos choix de refactoring.
