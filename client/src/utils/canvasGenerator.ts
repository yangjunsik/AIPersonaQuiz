import { AIResult } from "@/data/aiResults";

function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export function generateResultImage(result: AIResult): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    // Set canvas dimensions for mobile-friendly sharing
    canvas.width = 800;
    canvas.height = 1000;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#6366F1');
    gradient.addColorStop(0.5, '#8B5CF6');
    gradient.addColorStop(1, '#A855F7');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle pattern overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < canvas.width; x += 40) {
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.fillRect(x, y, 20, 20);
      }
    }
    
    // Main content background
    const contentX = 60;
    const contentY = 150;
    const contentWidth = canvas.width - 120;
    const contentHeight = 780;
    const borderRadius = 30;
    
    // Draw rounded rectangle for content area
    ctx.fillStyle = 'white';
    drawRoundedRect(ctx, contentX, contentY, contentWidth, contentHeight, borderRadius);
    ctx.fill();
    
    // App title at top
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('내 AI 분신 찾기', canvas.width / 2, 100);
    
    // AI Icon (large emoji)
    ctx.font = '120px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(result.icon, canvas.width / 2, contentY + 150);
    
    // AI Name
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.name, canvas.width / 2, contentY + 220);
    
    // AI Tagline
    ctx.fillStyle = '#6B7280';
    ctx.font = '28px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.tagline, canvas.width / 2, contentY + 270);
    
    // Description (wrapped text)
    const maxWidth = contentWidth - 80;
    const lineHeight = 36;
    const words = result.description.split(' ');
    let line = '';
    let y = contentY + 340;
    
    ctx.fillStyle = '#374151';
    ctx.font = '24px Arial, sans-serif';
    ctx.textAlign = 'center';
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line.trim(), canvas.width / 2, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line.trim()) {
      ctx.fillText(line.trim(), canvas.width / 2, y);
    }
    
    // Strengths section
    y += 80;
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('주요 강점', canvas.width / 2, y);
    
    y += 50;
    ctx.fillStyle = '#059669';
    ctx.font = '24px Arial, sans-serif';
    
    result.strengths.forEach((strength, index) => {
      ctx.fillText(`✓ ${strength}`, canvas.width / 2, y + (index * 35));
    });
    
    // Footer
    y = contentY + contentHeight - 60;
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '20px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('나도 테스트해보기 → myai.quiz', canvas.width / 2, y);
    
    // Convert to data URL directly
    try {
      const dataUrl = canvas.toDataURL('image/png');
      resolve(dataUrl);
    } catch (error) {
      console.error('Canvas toDataURL failed:', error);
      // Fallback: create a simple colored rectangle
      ctx.fillStyle = result.color || '#6366F1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(result.name, canvas.width / 2, canvas.height / 2);
      const fallbackDataUrl = canvas.toDataURL('image/png');
      resolve(fallbackDataUrl);
    }
  });
}

export function downloadImage(imageUrl: string, filename: string) {
  // Check if running on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Since we're now using data URLs directly, we can handle both mobile and desktop the same way
  const htmlContent = `
    <html>
      <head>
        <title>AI 분신 결과 이미지</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            margin: 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            text-align: center; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .container {
            background: white;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            max-width: 90%;
          }
          img { 
            max-width: 100%; 
            height: auto; 
            border-radius: 15px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            display: block;
            margin: 0 auto;
          }
          .instructions { 
            margin-top: 20px; 
            color: #555; 
            font-size: 16px; 
            line-height: 1.5;
            font-weight: 500;
          }
          .sub-text {
            margin-top: 10px;
            color: #888;
            font-size: 14px;
          }
          .download-btn {
            margin-top: 15px;
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
          }
          .download-btn:hover {
            background: #5a67d8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="${imageUrl}" alt="AI 분신 결과" id="resultImage">
          <div class="instructions">
            ${isMobile ? '📱 이미지를 길게 눌러서 저장하세요' : '🖱️ 우클릭하여 이미지를 저장하세요'}
          </div>
          <div class="sub-text">
            갤러리에 저장 후 SNS에 공유해보세요!
          </div>
          ${!isMobile ? `
            <button class="download-btn" onclick="downloadDirectly()">
              💾 다운로드
            </button>
          ` : ''}
        </div>
        
        <script>
          function downloadDirectly() {
            const link = document.createElement('a');
            link.href = '${imageUrl}';
            link.download = '${filename}';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        </script>
      </body>
    </html>
  `;
  
  // Open new window with the HTML content
  const newWindow = window.open('', '_blank');
  if (newWindow) {
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  }
}
