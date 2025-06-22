import { AIResult } from "@/data/aiResults";

export function generateResultImage(result: AIResult): Promise<string> {
  return new Promise((resolve) => {
    // Create a simple Canvas-based image directly without SVG
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    canvas.width = 800;
    canvas.height = 1000;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#6366F1');
    gradient.addColorStop(0.5, '#8B5CF6');
    gradient.addColorStop(1, '#A855F7');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // White content area
    ctx.fillStyle = 'white';
    ctx.fillRect(60, 150, 680, 780);
    
    // Title
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('내 AI 분신 찾기', canvas.width / 2, 120);
    
    // AI Icon
    ctx.font = '120px Arial';
    ctx.fillText(result.icon, canvas.width / 2, 300);
    
    // AI Name
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.fillText(result.name, canvas.width / 2, 380);
    
    // AI Tagline
    ctx.fillStyle = '#6B7280';
    ctx.font = '28px Arial, sans-serif';
    ctx.fillText(result.tagline, canvas.width / 2, 420);
    
    // Description (simple text wrapping)
    ctx.fillStyle = '#374151';
    ctx.font = '24px Arial, sans-serif';
    const words = result.description.split(' ');
    let line = '';
    let y = 480;
    const maxWidth = 600;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), canvas.width / 2, y);
        line = words[n] + ' ';
        y += 30;
      } else {
        line = testLine;
      }
    }
    if (line.trim()) {
      ctx.fillText(line.trim(), canvas.width / 2, y);
    }
    
    // Strengths
    y += 80;
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.fillText('주요 강점', canvas.width / 2, y);
    
    y += 50;
    ctx.fillStyle = '#059669';
    ctx.font = '24px Arial, sans-serif';
    
    result.strengths.forEach((strength, index) => {
      ctx.fillText(`✓ ${strength}`, canvas.width / 2, y + (index * 35));
    });
    
    // Footer
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('나도 테스트해보기 → myai.quiz', canvas.width / 2, 900);
    
    // Convert directly to data URL
    try {
      const dataUrl = canvas.toDataURL('image/png');
      resolve(dataUrl);
    } catch (error) {
      console.error('Canvas export failed:', error);
      // Return SVG as fallback
      const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#6366F1"/>
          <rect x="60" y="150" width="680" height="780" fill="white"/>
          <text x="400" y="120" text-anchor="middle" font-family="Arial" font-size="36" fill="white">내 AI 분신 찾기</text>
          <text x="400" y="300" text-anchor="middle" font-family="Arial" font-size="120">${result.icon}</text>
          <text x="400" y="380" text-anchor="middle" font-family="Arial" font-size="48" fill="#1F2937">${result.name}</text>
          <text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="28" fill="#6B7280">${result.tagline}</text>
          <text x="400" y="680" text-anchor="middle" font-family="Arial" font-size="28" fill="#1F2937">주요 강점</text>
          ${result.strengths.map((strength, index) => `
            <text x="400" y="${730 + (index * 35)}" text-anchor="middle" font-family="Arial" font-size="24" fill="#059669">✓ ${strength}</text>
          `).join('')}
        </svg>
      `)}`;
      resolve(svgDataUrl);
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
