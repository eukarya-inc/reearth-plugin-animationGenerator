# アニメーション ジェネレーター プラグイン

## 概要
任意のポイントや画像および3Dモデルが、指定した地点間を移動するアニメーションを作成することができます。動かすルートはパスで描画します。

## （準備）編集ページで動かしたい任意のオブジェクトを設定する

- 左パネルのウィジェットから「Animation Generator」を選択した状態で、右パネルの「シンボルリスト」からオブジェクトのデータ追加ができます。
- 追加できるデータは「Icon（画像）」「Model（3D）」の2種類です。「Name」は必ず設定をしてください。また、「Scale」で任意のサイズに拡大・縮小ができます。
- データ追加が完了したら、一度左パネル「ウィジェット」からプラグインを無効化し、再度有効化すると反映がされます。

    ![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img1.png)
  

## **（準備）編集ページでタイムラインの有効化**

- 本プラグインを使用する際には、左パネル「シーン」を選択し、右パネルの設定からあらかじめ「タイムライン」を有効にしてください。
  
  ![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img2.png)


## 使用方法

![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/Animation1.png)
- 地図上左上のアイコン（上図での赤枠部分）をクリックして、アニメーションの作成画面を開きます。
- 「アニメーションリスト」の「＋」をクリックし、アニメーションの作成を開始します。不要なアニメーションは削除ボタンで消すことができます。

![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img6.png)

- 「シンボル」で動かしたいオブジェクトを選択します。初期状態ではPointが設定されており、データ追加した場合は選択ができるようになります。

![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img7.png)

- シンボルを決定したら、「編集を開始する」をクリックします。シンボルを動かしたい地点をクリックしていくと、地点と線が描画され、地点リストに地点が登録されます。
- 地点1の移動時間はデフォルトで0に設定されています。各地点を選択すると、地点の高さと、前の地点からの移動時間が設定できます。
    - `高さ`：地点の地表面からの高さを指定します。
    - `移動時間`：前の地点からの移動時間を指定します。
- すべての地点の設定が完了したら、「編集を終了する」をクリックします。
- 点・線の大きさ・色や線の表示は編集の終了後に変更することができます。

![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img8.png)
- Re:Earthの画面下部に表示されているタイムラインバーの「一時停止」をクリックすると、作成したアニメーションが動きます。
  
  ![](https://eukarya-inc.github.io/reearth-plugin-animationGenerator/src/img3.png)

- 描画結果を保存したい場合は、「エクスポート」ボタンを押してGeoJsonファイルを作成します。作成したGeoJsonファイルはRe:Earthのファイルインポート機能でインポートすることができます。
※ブラウザの更新などをするとエクスポートしていないパスは消えてしまうので注意してください。

## 備考

このプラグインは、以下のOS,ブラウザで動作確認をしています。

- OS
  - Mac OS

- ブラウザ
  - Chrome: 107.0.5304.110
  - Safari: 16.0 (17614.1.25.9.10, 17614)
  - FireFox: 107.0
  - Edge: 107.0.1418.56

## 開発者欄

このプラグインは、Re:Earth公式プラグインです。

 ![](https://eukarya-inc.github.io/reearth-plugin-shinsuiNavi/src/logo-3.png)

ソースコードはこちら(https://github.com/eukarya-inc/reearth-plugin-animationGenerator)

- コミュニティ

  - このプラグインを利用したプロジェクトをユーザーコミュニティでシェアしましょう。

  - このプラグインについての不明点がある場合にもここからRe:Earthチームや他の開発者に質問することができます。

  - Discordへのリンクはこちら(https://discord.gg/BXcQhvwqqM)
