import { AIResult } from "@/data/aiResults";

export function generateResultImage(result: AIResult): Promise<string> {
  return new Promise((resolve) => {
    // Create an SVG instead of canvas for better compatibility
    const svgWidth = 800;
    const svgHeight = 1000;
    
    const svgContent = `
      <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6366F1"/>
            <stop offset="50%" style="stop-color:#8B5CF6"/>
            <stop offset="100%" style="stop-color:#A855F7"/>
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="100%" height="100%" fill="url(#bgGradient)"/>
        
        <!-- Pattern overlay -->
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="20" height="20" fill="rgba(255,255,255,0.05)"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)"/>
        
        <!-- Main content card -->
        <rect x="60" y="150" width="680" height="780" rx="30" fill="white"/>
        
        <!-- App title -->
        <text x="400" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#1F2937">내 AI 분신 찾기</text>
        
        <!-- AI Icon -->
        <text x="400" y="270" text-anchor="middle" font-family="Arial" font-size="120">${result.icon}</text>
        
        <!-- AI Name -->
        <text x="400" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#1F2937">${result.name}</text>
        
        <!-- AI Tagline -->
        <text x="400" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#6B7280">${result.tagline}</text>
        
        <!-- Description -->
        <foreignObject x="100" y="420" width="600" height="200">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, sans-serif; font-size: 24px; color: #374151; text-align: center; line-height: 1.5; padding: 20px;">
            ${result.description}
          </div>
        </foreignObject>
        
        <!-- Strengths title -->
        <text x="400" y="680" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#1F2937">주요 강점</text>
        
        <!-- Strengths list -->
        ${result.strengths.map((strength, index) => `
          <text x="400" y="${720 + (index * 35)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#059669">✓ ${strength}</text>
        `).join('')}
        
        <!-- Footer -->
        <text x="400" y="870" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#9CA3AF">나도 테스트해보기 → myai.quiz</text>
      </svg>
    `;
    
    // Convert SVG to data URL
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create an image from SVG and convert to canvas
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = svgWidth;
      canvas.height = svgHeight;
      
      ctx.drawImage(img, 0, 0);
      
      const dataUrl = canvas.toDataURL('image/png');
      URL.revokeObjectURL(svgUrl);
      resolve(dataUrl);
    };
    
    img.onerror = () => {
      // Complete fallback - create a simple HTML-based image
      URL.revokeObjectURL(svgUrl);
      const fallbackHtml = `
        <div style="
          width: 800px; 
          height: 1000px; 
          background: linear-gradient(45deg, #6366F1, #8B5CF6, #A855F7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          color: white;
          text-align: center;
          padding: 40px;
        ">
          <h1 style="font-size: 36px; margin-bottom: 20px;">내 AI 분신 찾기</h1>
          <div style="font-size: 120px; margin: 20px 0;">${result.icon}</div>
          <h2 style="font-size: 48px; margin: 20px 0;">${result.name}</h2>
          <p style="font-size: 28px; margin-bottom: 40px;">${result.tagline}</p>
          <div style="background: white; color: black; padding: 40px; border-radius: 20px; max-width: 600px;">
            <p style="font-size: 24px; margin-bottom: 30px;">${result.description}</p>
            <h3 style="font-size: 28px; margin-bottom: 20px;">주요 강점</h3>
            ${result.strengths.map(strength => `<p style="font-size: 24px; color: #059669;">✓ ${strength}</p>`).join('')}
          </div>
        </div>
      `;
      
      resolve(`data:text/html;charset=utf-8,${encodeURIComponent(fallbackHtml)}`);
    };
    
    img.src = svgUrl;
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
