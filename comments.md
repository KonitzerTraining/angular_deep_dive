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

Hooks verwenden:

https://typicode.github.io/husky/#/

## Testing

### Unit Test
Jasmine / Jest (nx.dev)

- https://jasmine.github.io/
- https://github.com/karma-runner
- https://www.npmjs.com/package/karma-mocha-reporter
- https://www.npmjs.com/package/@chiragrupani/karma-chromium-edge-launcher

1. Grundgerüst
2. Test wird rudimentär erstellt
3. Test und Code werden gleichzeitig aufgebaut
4. Tests und Code müssen linten vor der Testausführung

#### Mock-Tool
https://www.npmjs.com/package/ng-mocks
https://ng-mocks.sudo.eu/api/MockProvider

#### Regeln
- Test immer parallel zum Code entwerfen
- Units werden unabhängig getestet
- Testdaten dürfen nicht im Testen
- Tests sind unabhängig von der Umgebung


### FE-Tests
Werkzeuge:
- Cypress
- TestCafe

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
