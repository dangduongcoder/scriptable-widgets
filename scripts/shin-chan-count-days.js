// Link ảnh nền
const imageUrl = "https://your-image-link.com/image.jpg"; // ← Thay link ảnh thực tế vào đây

// Load ảnh từ URL
let req = new Request(imageUrl);
let image = await req.loadImage();

// Nếu đang chạy trong Widget
if (config.runsInWidget) {
  let widget = createWidget(image);
  Script.setWidget(widget);
  Script.complete();
} else {
  // Nếu chạy test trong app, xem trước widget
  let widget = createWidget(image);
  widget.presentMedium(); // hoặc .presentSmall() / .presentLarge()
}

// Hàm tạo widget
function createWidget(backgroundImage) {
  let widget = new ListWidget();
  
  // Đặt nền ảnh
  widget.backgroundImage = backgroundImage;
  
  // Ví dụ thêm Text
  let text = widget.addText("Xin chào!");
  text.textColor = Color.white();
  text.font = Font.semiboldSystemFont(24);
  text.centerAlignText();
  
  return widget;
}
