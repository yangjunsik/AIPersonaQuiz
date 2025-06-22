import { AIResult } from "@/data/aiResults";

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
    const contentY = 150;
    const contentHeight = 780;
    const borderRadius = 30;
    
    // Draw rounded rectangle for content area
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(80, contentY, canvas.width - 160, contentHeight, borderRadius);
    ctx.fill();
    
    // App title at top
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('내 AI 분신 찾기', canvas.width / 2, 100);
    
    // AI Icon (large emoji)
    ctx.font = '120px serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.icon, canvas.width / 2, contentY + 150);
    
    // AI Name
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 48px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.name, canvas.width / 2, contentY + 220);
    
    // AI Tagline
    ctx.fillStyle = '#6B7280';
    ctx.font = '28px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.tagline, canvas.width / 2, contentY + 260);
    
    // Description (wrapped text)
    const maxWidth = canvas.width - 200;
    const lineHeight = 36;
    const words = result.description.split(' ');
    let line = '';
    let y = contentY + 340;
    
    ctx.fillStyle = '#374151';
    ctx.font = '24px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);
    
    // Strengths section
    y += 80;
    ctx.fillStyle = '#1F2937';
    ctx.font = 'bold 28px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('주요 강점', canvas.width / 2, y);
    
    y += 50;
    ctx.fillStyle = '#059669';
    ctx.font = '24px Inter, sans-serif';
    
    result.strengths.forEach((strength, index) => {
      ctx.fillText(`✓ ${strength}`, canvas.width / 2, y + (index * 35));
    });
    
    // Footer
    y = contentY + contentHeight - 60;
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '20px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('나도 테스트해보기 → myai.quiz', canvas.width / 2, y);
    
    // Convert to blob and create URL
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        resolve(url);
      }
    }, 'image/png');
  });
}

export function downloadImage(imageUrl: string, filename: string) {
  // Check if running on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile devices, open the image in a new tab so users can save it
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>AI 분신 결과</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { margin: 0; padding: 20px; background: #f5f5f5; text-align: center; font-family: sans-serif; }
              img { max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
              .instructions { margin-top: 20px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <img src="${imageUrl}" alt="AI 분신 결과">
            <div class="instructions">
              이미지를 길게 눌러서 저장하세요
            </div>
          </body>
        </html>
      `);
    }
  } else {
    // For desktop, use the original download method
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Clean up the blob URL
  setTimeout(() => {
    URL.revokeObjectURL(imageUrl);
  }, 100);
}
