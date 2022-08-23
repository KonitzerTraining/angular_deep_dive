## RxJS

https://rxjs.dev/
https://www.learnrxjs.io/

- tap
- map
  https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
- concatMap
  https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmap
- mergeMap
  https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
- switchMap

ofType ist von ngrx

## Security

https://html5sec.org/
https://wiki.owasp.org/index.php/OWASP_Guide_Project

- Up-to-date bleiben (wöchentlich)
  https://update.angular.io/

- Rollenkonzepte (am Client und am Server)
  Rolle im User -> Guards
- Authentifizierung OAuth

Verifizieren 
- durch Pentests

## Code Quality

### Lint

ESLint

    ng lint

Auswahl bestätigen

## Documentation

https://jsdoc.app/about-getting-started.html

### Compodoc

- https://compodoc.app/guides/getting-started.html
- https://compodoc.app/guides/installation.html

    ng add @compodoc/compodoc

package.json

    "scripts": {
        "compodoc": "compodoc -p tsconfig.doc.json"
    } 

Documentation:

- https://compodoc.app/guides/comments.html
- https://compodoc.app/guides/jsdoc-tags.html

## Performance

### Lazy Loading

- Preloading Strategies
  https://medium.com/geekculture/preloading-strategy-in-angularsave-loading-time-ca791074fe28
