# mclock

It is stylish clock of Web Components. Use Svelte.  
動画や配信のときに便利な、時刻表示コンポーネントです。

## 使い方 Usage

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
      date-color="#111827"
      zone-color="#111827"
      time-color="#111827"
    ></m-clock>

    <script src="https://unpkg.com/mclock/dist/m-clock.umd.js"></script>
  </body>
</html>
```
