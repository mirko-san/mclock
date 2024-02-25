# mclock

It is stylish clock of Web Components. Use Lit.  
動画や配信のときに便利な、時刻表示コンポーネントです。

## 使い方

OBS Studio のソースに https://mclock.vercel.app/ を指定。

もしくは、以下のように Web Components として利用。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock</title>
  </head>
  <body>
    <m-clock
      id="m-clock"
      time-format="HH:mm:ss"
      zone-string="Asia/Tokyo"
      date-format="MM/dd E"
      bg-color="#000000"
      bg-opacity="0.2"
      date-color="#ffffff"
      zone-color="#ffffff"
      time-color="#ffffff"
    ></m-clock>

    <script src="https://unpkg.com/mclock@2.0.0/dist/m-clock.umd.js"></script>
  </body>
</html>
```
