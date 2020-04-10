# Poker Hand Calculator

Este proyecto muestra una calculadora de manos generadas aleatoriamente desde un mazo de cartas.
Internamente, esta preparado para implementar nuevos jugadores y comparar sus puntuaciones para determinar el ganador en cada mano. También, se adjunta una tabla de las manos ganadoras posibles junto con la puntuación que aportan y la probabilidad que hay de que se genere esa mano.

<img src="./src/assets/img/screen1.png"
alt="Poker hand Calculator" width="540" height="280" border="3" /><br/>

<hr>

## Scripts

```
$ npm run start
```

Start webpack-server to develop project on development mode.

```
$ npm run build
```

Build the project on production mode

```
$ npm run watch
```

```
$ npm run test
```

<hr>

## Webpack configuration

### Devtools

[webpack-dev-server](https://webpack.js.org/configuration/dev-server)

### Plugins

[clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin)

### Loaders

[css-loader](https://github.com/webpack-contrib/css-loader)
<br>

[style-loader](https://github.com/webpack-contrib/style-loader)
<br>

[file-loader](https://github.com/webpack-contrib/file-loader)
<br>

[csv-loader](https://www.npmjs.com/package/csv-loader)
<br>

[xml-loader](https://www.npmjs.com/package/xml-loader)
