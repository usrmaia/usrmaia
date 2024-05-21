# Consultas com Fuse.js 🔎

Dica de biblioteca para seus projetos! ✨ Consultas com Fuse.js vão facilitar sua forma de buscar dados! 🚀 Esta biblioteca de pesquisa para JavaScript e TypeScript é leve, poderosa e não possui dependências. 

Imagine encontrar strings aproximadamente iguais a um padrão, sem a necessidade de um back-end dedicado. Com o Fuse.js, você simplifica as suas pesquisas. 

Ideal para conjuntos de dados pequenos a moderadamente grandes, economizando recursos sem sacrificar a eficácia. Instale, importe e explore uma nova maneira de buscar dados em seus projetos.

Primeiramente instale e importe o Fuse para seu projeto:

```
// npm install fuse.js
// yarn add fuse.js
```

Depois defina a lista de dados para pesquisar:

```
const list = [
  {
    "title": "Old Man's War",
    "author": {
      "firstName": "John",
      "lastName": "Scalzi"
    }
  },
  {
    "title": "The Lock Artist",
    "author": {
      "firstName": "Steve",
      "lastName": "Hamilton"
    }
  },
  {
    "title": "HTML5",
    "author": {
      "firstName": "Remy",
      "lastName": "Sharp"
    }
  },
  // ...
];
```

E também defina as configurações de busca:

```
const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"author.firstName"
	]
};
```

Instancie o Fuse passando a lista de dados e as configurações de busca:

```
const fuse = new Fuse(list, fuseOptions);
```

Pronto! Agora basta realizar sua busca e obter uma lista de resultados!

```
const searchPattern = "";
return fuse.search(searchPattern);
```