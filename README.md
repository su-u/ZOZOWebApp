# ZOZOWebApp

## 概要

## 開発環境の構築手順
1. node.jsのインストール。  
    [ダウンロード | Node.js](https://nodejs.org/ja/download/)
1. pakageのインストール
    - Windows PoweShell  
      `git clone https://github.com/su-u/ZOZOWebApp.git;cd ./ZOZOWebApp;npm i;cd ./api;npm i;`
    - Windows cmd  
      `git clone https://github.com/su-u/ZOZOWebApp.git&cd ./ZOZOWebApp&npm i&cd ./api&npm i`
    - Linux  
      `git clone https://github.com/su-u/ZOZOWebApp.git && cd ./ZOZOWebApp && npm i && cd ./api && npm i`

## Webサーバー実行手順
1. `cd /ZOZOWebApp/api`
1. `node ./bin/www`

## テスト実行
1. `cd /ZOZOWebApp`
1. `npm test`

## 参考
- [Node.jsでCanvas(ImageData)を使った簡単な画像処理](https://qiita.com/redshoga/items/d5afef65081b7fdf60cc)