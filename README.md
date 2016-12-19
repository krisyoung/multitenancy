This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
npm install

npm start -- --app foo (uses bar modules, falls back to common)
npm start -- --app bar (uses bar modules, falls back to common)
npm start -- --app baz (doesn't exist, falls back to common)
npm start (no app provided, falls back to common)
```
