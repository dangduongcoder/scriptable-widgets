
const WIDGET_WIDTH = 440;
const WIDGET_HEIGHT = 440;


const bgImageUrl = "https://raw.githubusercontent.com/dangduongcoder/scriptable-widgets/refs/heads/main/156b1902-6d66-44e9-a3e8-1cf30f1e0695/widget_2x2~/bz.jpg";
const dogImageUrl = "https://raw.githubusercontent.com/dangduongcoder/scriptable-widgets/refs/heads/main/156b1902-6d66-44e9-a3e8-1cf30f1e0695/widget_2x2~/assets/Atl1dpYQ.png";
const starImageUrl = "https://raw.githubusercontent.com/dangduongcoder/scriptable-widgets/refs/heads/main/156b1902-6d66-44e9-a3e8-1cf30f1e0695/widget_2x2~/assets/jxCHEoWS.png"


let bgImage = await loadImageFromUrl(bgImageUrl);
let dogImage = await loadImageFromUrl(dogImageUrl);
let starImage = await loadImageFromUrl(starImageUrl);


if (config.runsInWidget) {
  let widget = createWidget(bgImage, dogImage);
  Script.setWidget(widget);
  Script.complete();
} else {
  let widget = createWidget(bgImage, dogImage);
  widget.presentSmall(); // .presentSmall() / .presentLarge()
}



function createWidget(bgImage, dogImage) {
  let widget = new ListWidget();
  widget.setPadding(0, 0, 0, 0);

  const context = new DrawContext();
  context.size = new Size(WIDGET_WIDTH, WIDGET_HEIGHT); 
  context.opaque = false;
  context.respectScreenScale = true;

  // Vẽ ảnh nền
  context.drawImageInRect(bgImage, new Rect(0, 0, context.size.width, context.size.height));



  drawImageAt(context, dogImage, 112, 113, 328, 327);
  drawImageAt(context, starImage, 30, 343, 65, 72);
  drawImageAt(context, starImage, 47, 271, 65, 72);

  // Kết xuất ảnh nền
  let finalImage = context.getImage();
  widget.backgroundImage = finalImage;

  // Thêm Text
  let text = widget.addText("Xin chào!");
  text.textColor = Color.black();
  text.font = Font.semiboldSystemFont(24);
  text.centerAlignText();

  return widget;
}

async function loadImageFromUrl(url) {
  const req = new Request(url);
  return await req.loadImage();
}


function drawImageAt(context, image, x, y, w, h) {
  context.drawImageInRect(image, new Rect(x, y, w, h));
}
