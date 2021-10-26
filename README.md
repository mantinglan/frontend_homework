# frontend_homework

## Fibonacci number
using recursive to implement fibonacci number

## Stack
Using linked list to implement stack

## Debounce & Throttle

The following link is debounce & throttle example in codepen 
https://codepen.io/mantinglan/pen/QWMKXOZ

### Purpose
瀏覽器實作時，為了確保滑鼠移動、滾動、改變視窗大小 (mousemove, scroll, resize) 等事件能夠及時回應維持使用者體驗，觸發的頻率會比較高。也就是說，使用者在一個正常的操作中，有可能在短時間內觸發非常多次事件處理器 (event handler)。
如果為這些短時間內觸發非常多次的事件處理器綁定一些 DOM 節點操作，就會引發大量消耗效能的 DOM 計算，不斷重新計算 DOM 元素的絕對位置，造成頁面緩慢，甚至瀏覽器直接崩潰。
所以可以利用Debounce & Throttle來優化DOM效能

### Debounce （去抖動）
使用者在觸發相同事件（如卷軸）的情境下，停止觸發綁定事件的效果，直到使用者停止觸發相同事件。
也就是從最後一次觸發開始，在 t秒後執行函數。因為是最後一次觸發，所以會把中間的觸發蓋掉。
debounce跟 throttle相比之下，少了控制閥門 — 因為 debounce只承認最後一次觸發。

### Throttle (節閥)
Throttle 是另一種減緩事件觸發方法，它與Debounce的差異是，為使用者觸發相同事件時提供間隔，控制特定時間內事件觸發的次數。
也就是最初一次觸發開始，在 t秒後執行函數。中間無論觸發多少次都不會執行。

### Reference 
[Mousemove event](http://demo.nimius.net/debounce_throttle/)
[網頁 DOM 事件的效能優化：Debounce 和 Throttle](https://mropengate.blogspot.com/2017/12/dom-debounce-throttle.html)
