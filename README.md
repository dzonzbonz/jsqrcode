JavaScript QRCode reader for HTML5 enabled browser.
2018 Nikola Ivanovic

# Add to your project

> yarn add dzonzbonz-jsqrcode

or

> npm install dzonzbonz-jsqrcode

# Usage

```javascript
var qrcode = new window.QRCodeDecoder();
    qrcode.inCanvasID = 'in-canvas';
    qrcode.outCanvasID = 'out-canvas';
```

# Properties

## inCanvasID

[set] inCanvasID: string

## outCanvasID

[set] outCanvasID: string

# Methods

## setWebcam

setWebcam(
    videoId: String
)

## decode

decode(
    src: null
)