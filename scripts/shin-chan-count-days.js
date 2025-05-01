
const WIDGET_WIDTH = 440;
const WIDGET_HEIGHT = 440;


// const BASE_URL = "https://raw.githubusercontent.com/dangduongcoder/scriptable-widgets/refs/heads/main/156b1902-6d66-44e9-a3e8-1cf30f1e0695/";
// const bgImageUrl    = `${BASE_URL}widget_2x2~/bz.jpg`;
// const dogImageUrl   = `${BASE_URL}widget_2x2~/assets/Atl1dpYQ.png`;
// const starImageUrl  = `${BASE_URL}widget_2x2~/assets/jxCHEoWS.png`;
// const frameImageUrl = `${BASE_URL}widget_2x2%7E/assets/frame-bg.png`;
// const heartImageUrl = `${BASE_URL}widget_2x2%7E/assets/vwDu4eic.png`;
// const daysImageUrl = `${BASE_URL}widget_2x2%7E/assets/Days.png`;
// const titleImageUrl = `${BASE_URL}widget_2x2%7E/assets/Love%20you.png`;

// const numberImageUrls = [
//   `${BASE_URL}widget_2x2%7E/assets/num_0.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_1.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_2.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_3.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_4.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_5.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_6.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_7.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_8.png`,
//   `${BASE_URL}widget_2x2%7E/assets/num_9.png`,
// ];

const BASE_URL = "https://raw.githubusercontent.com/dangduongcoder/scriptable-widgets/refs/heads/main/156b1902-6d66-44e9-a3e8-1cf30f1e0695/";
const bgImageUrl    = `https://i.ibb.co/C30WnsxZ/bz.jpg`;
const dogImageUrl   = `https://i.ibb.co/KQgV4bp/Atl1dpYQ.png`;
const starImageUrl  = `https://i.ibb.co/PZTgt7gD/jxCHEoWS.png`;
const frameImageUrl = `https://i.ibb.co/9kpKhdVB/frame-bg.png`;
const heartImageUrl = `https://i.ibb.co/hFSRHhXr/vwDu4eic.png`;
const daysImageUrl = `https://i.ibb.co/MyFzZffh/Days.png`;
const titleImageUrl = `https://i.ibb.co/WWxk9HSf/Love-you.png`;

const numberImageUrls = [
  `https://i.ibb.co/4wHwjCxm/num-0.png`,
  `https://i.ibb.co/sdW56qyn/num-1.png`,
  `https://i.ibb.co/nqcqkQy5/num-2.png`,
  `https://i.ibb.co/bM6hjP7h/num-3.png`,
  `https://i.ibb.co/3yf8xLmd/num-4.png`,
  `https://i.ibb.co/kscvGd4c/num-5.png`,
  `https://i.ibb.co/4ZSVTVDq/num-6.png`,
  `https://i.ibb.co/HLm45Z0b/num-7.png`,
  `https://i.ibb.co/YF6th9Fk/num-8.png`,
  `https://i.ibb.co/n8gBM66T/num-9.png`,
];


const numberImages = [
  await loadImageFromUrl(numberImageUrls[0]),
  await loadImageFromUrl(numberImageUrls[1]),
  await loadImageFromUrl(numberImageUrls[2]),
  await loadImageFromUrl(numberImageUrls[3]),
  await loadImageFromUrl(numberImageUrls[4]),
  await loadImageFromUrl(numberImageUrls[5]),
  await loadImageFromUrl(numberImageUrls[6]),
  await loadImageFromUrl(numberImageUrls[7]),
  await loadImageFromUrl(numberImageUrls[8]),
  await loadImageFromUrl(numberImageUrls[9]),
];  

let bgImage = await loadImageFromUrl(bgImageUrl);
let dogImage = await loadImageFromUrl(dogImageUrl);
let starImage = await loadImageFromUrl(starImageUrl);
let frameImage = await loadImageFromUrl(frameImageUrl);
let heartImage = await loadImageFromUrl(heartImageUrl);
let daysImage = await loadImageFromUrl(daysImageUrl);
let titleImage = await loadImageFromUrl(titleImageUrl);
// let days = 1000;

const refreshHours = 1; 
const nextRefresh = new Date(Date.now() + refreshHours * 60 * 60 * 1000);
const startDate = new Date("2023-12-24T00:00:00");
const now = new Date();

const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));



if (config.runsInWidget) {
  let widget = createWidget();
  Script.setWidget(widget);
  widget.refreshAfterDate = nextRefresh;
  Script.complete();
} else {
  let widget = createWidget();
  widget.presentSmall(); // .presentSmall() / .presentLarge()
}



function createWidget() {
  let widget = new ListWidget();
  widget.setPadding(0, 0, 0, 0);
  widget.backgroundColor = Color.white();

  const context = new DrawContext();
  context.size = new Size(WIDGET_WIDTH, WIDGET_HEIGHT); 
  context.opaque = false;
  context.respectScreenScale = true;

  context.drawImageInRect(bgImage, new Rect(0, 0, context.size.width, context.size.height));


  drawImageAt(context, frameImage, 34, 34, 372, 204);


  const dayStr = days.toString();
  const xPositions = [63, 105, 147, 189];
  for (let i = 0; i < dayStr.length; i++) {
    const digit = parseInt(dayStr[i], 10);
    drawImageAt(context, numberImages[digit], xPositions[i], 107, 42, 58);
  }


  drawImageAt(context, heartImage, 300, 18, 106, 95);
  drawImageAt(context, daysImage, 73, 178, 64, 27);
  drawImageAt(context, titleImage, 75, 63, 125, 34);
  drawImageAt(context, dogImage, 112, 113, 328, 327);
  drawImageAt(context, starImage, 30, 343, 65, 72);
  drawImageAt(context, starImage, 47, 271, 65, 72);

  let finalImage = context.getImage();
  widget.backgroundImage = finalImage;

  

  return widget;
}

async function loadImageFromUrl(url) {
  const req = new Request(url);
  return await req.loadImage();
}


function drawImageAt(context, image, x, y, w, h) {
  context.drawImageInRect(image, new Rect(x, y, w, h));
}

