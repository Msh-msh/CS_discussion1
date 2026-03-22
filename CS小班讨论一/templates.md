# 幻灯片模板参考

## CSS基础模板

```css
/* 幻灯片样式模板 */

:root {
  --primary: #17408B;
  --primary-dark: #0d2654;
  --secondary: #C9082A;
  --accent: #FDB927;
  --accent-light: #ffe066;
  --white: #ffffff;
  --dark: #1a1a1a;
  --shadow: rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
}

/* 幻灯片容器 - 16:9 */
.slide {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 3vh 4vw;
}

/* 标题样式 */
.slide-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2vh;
}

.slide-title.gold {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-subtitle {
  font-size: clamp(16px, 2vw, 28px);
  color: var(--accent);
  text-align: center;
  margin-bottom: 3vh;
}

/* 内容区域 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* 卡片 */
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2vh 2vw;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-title {
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1vh;
}

/* 网格布局 */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2vw; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2vw; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5vw; }

/* 表格 */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: clamp(12px, 1.3vw, 18px);
}

.data-table th {
  background: var(--accent);
  color: var(--primary-dark);
  padding: 1vh 1vw;
  text-align: left;
}

.data-table td {
  padding: 0.8vh 1vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.data-table tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

/* 金句 */
.quote {
  font-size: clamp(18px, 2.2vw, 32px);
  font-style: italic;
  text-align: center;
  padding: 2vh 3vw;
  background: linear-gradient(90deg, transparent, rgba(253, 185, 39, 0.2), transparent);
  border-left: 4px solid var(--accent);
  color: var(--accent-light);
}

/* 高亮 */
.highlight { color: var(--accent); font-weight: 600; }

/* 图片样式 */
.slide-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: var(--white);
  padding: 8px 16px;
  font-size: clamp(10px, 1vw, 14px);
  border-radius: 0 0 8px 8px;
}

/* 图片位置布局 */
.with-image-left {
  display: flex;
  gap: 3vw;
  align-items: center;
}

.with-image-left .image-panel {
  flex: 0 0 45%;
}

.with-image-left .text-panel {
  flex: 1;
}

.with-image-right {
  display: flex;
  gap: 3vw;
  align-items: center;
}

.with-image-right .text-panel {
  flex: 1;
}

.with-image-right .image-panel {
  flex: 0 0 45%;
}

.with-image-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
}

.with-image-center .image-panel {
  max-width: 80%;
}

/* 背景图片 */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
  z-index: -1;
}

/* 图片占位符 */
.image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border: 2px dashed rgba(255,255,255,0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.5);
  font-size: clamp(12px, 1.5vw, 18px);
}

/* 页码指示器 - 左下角，避免与导航按钮重合 */
.page-indicator {
  position: absolute;
  bottom: 2vh;
  left: 3vw;
  font-size: clamp(12px, 1vw, 16px);
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 12px;
  border-radius: 4px;
}

/* 动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-fade { animation: fadeIn 0.8s ease forwards; }
.animate-slide-left { animation: slideInLeft 0.6s ease forwards; }
.animate-slide-right { animation: slideInRight 0.6s ease forwards; }
.animate-slide-up { animation: slideInUp 0.6s ease forwards; }
.animate-scale { animation: scaleIn 0.5s ease forwards; }

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }
.delay-6 { animation-delay: 0.6s; }
.delay-7 { animation-delay: 0.7s; }
.delay-8 { animation-delay: 0.8s; }
```

---

## JS控制脚本模板

```javascript
class SlideController {
  constructor() {
    this.totalSlides = 16; // 替换为实际页数
    this.currentSlide = 1;
    this.isAnimating = false;
    this.init();
  }

  init() {
    this.bindKeyboard();
    this.bindNavigation();
    this.updateIndicator();
  }

  bindKeyboard() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
      }
    });
  }

  bindNavigation() {
    document.getElementById('prevBtn')?.addEventListener('click', () => this.prevSlide());
    document.getElementById('nextBtn')?.addEventListener('click', () => this.nextSlide());
    document.getElementById('fullscreenBtn')?.addEventListener('click', () => this.toggleFullscreen());

    // 触摸支持
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    document.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.nextSlide() : this.prevSlide();
      }
    });
  }

  nextSlide() {
    if (!this.isAnimating && this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (!this.isAnimating && this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  goToSlide(num) {
    if (num < 1 || num > this.totalSlides || num === this.currentSlide) return;
    this.isAnimating = true;

    const iframe = document.getElementById('slideFrame');
    const slideNames = [
      '', // 占位
      '01-cover',
      '02-xxx',
      // ... 填充所有页面名称
    ];

    iframe.style.opacity = '0';
    setTimeout(() => {
      iframe.src = `slides/${slideNames[num]}.html`;
      this.currentSlide = num;
      this.updateIndicator();
      setTimeout(() => {
        iframe.style.opacity = '1';
        this.isAnimating = false;
      }, 100);
    }, 200);
  }

  updateIndicator() {
    const indicator = document.getElementById('pageIndicator');
    if (indicator) indicator.textContent = `${this.currentSlide} / ${this.totalSlides}`;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.opacity = this.currentSlide === 1 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = this.currentSlide === this.totalSlides ? '0.3' : '1';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.slideController = new SlideController();
});
```

---

## index.html 主入口模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>演示文稿标题</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #0a1628; }
    .presentation-container { width: 100%; height: 100%; display: flex; flex-direction: column; }
    .slide-wrapper { flex: 1; position: relative; background: #000; }
    #slideFrame { width: 100%; height: 100%; border: none; transition: opacity 0.2s ease; }
    .nav-controls { position: fixed; bottom: 20px; right: 20px; display: flex; gap: 10px; z-index: 1000; }
    .nav-btn {
      width: 40px; height: 40px; border: none; border-radius: 8px;
      background: rgba(23, 64, 139, 0.8); color: #FDB927;
      font-size: 18px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease; backdrop-filter: blur(5px);
    }
    .nav-btn:hover { background: rgba(253, 185, 39, 0.9); color: #17408B; transform: scale(1.1); }
    .page-info {
      position: fixed; bottom: 20px; left: 20px;
      background: rgba(23, 64, 139, 0.8); color: #FDB927;
      padding: 8px 16px; border-radius: 8px;
      font-size: 14px; font-weight: 500;
      backdrop-filter: blur(5px); z-index: 1000;
    }
    .shortcuts-hint {
      position: fixed; top: 20px; right: 20px;
      background: rgba(0, 0, 0, 0.6); color: rgba(255, 255, 255, 0.7);
      padding: 8px 12px; border-radius: 6px;
      font-size: 11px; z-index: 1000;
      opacity: 0; transition: opacity 0.3s ease;
    }
    .presentation-container:hover .shortcuts-hint { opacity: 1; }
  </style>
</head>
<body>
  <div class="presentation-container">
    <div class="slide-wrapper">
      <iframe id="slideFrame" src="slides/01-cover.html"></iframe>
    </div>
    <div class="page-info"><span id="pageIndicator">1 / 16</span></div>
    <div class="nav-controls">
      <button class="nav-btn" id="prevBtn" title="上一页 (←)">◀</button>
      <button class="nav-btn" id="nextBtn" title="下一页 (→)">▶</button>
      <button class="nav-btn" id="fullscreenBtn" title="全屏 (F)">⛶</button>
    </div>
    <div class="shortcuts-hint">← → 翻页 | F 全屏 | Home/End 首末页</div>
  </div>
  <script src="js/main.js"></script>
</body>
</html>
```

---

## 子页面HTML模板

### 封面页

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>封面</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .cover-slide {
      background: radial-gradient(ellipse at center, var(--primary) 0%, var(--primary-dark) 100%);
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .cover-title {
      font-size: clamp(48px, 7vw, 84px);
      font-weight: 800;
      background: linear-gradient(135deg, var(--accent), #fff, var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 2vh;
      animation: scaleIn 0.8s ease forwards;
    }
    .cover-subtitle {
      font-size: clamp(24px, 3vw, 42px);
      color: var(--white);
      margin-bottom: 4vh;
      opacity: 0;
      animation: fadeIn 0.8s ease 0.3s forwards;
    }
    .cover-info {
      font-size: clamp(16px, 2vw, 28px);
      color: rgba(255, 255, 255, 0.8);
      opacity: 0;
      animation: slideInUp 0.8s ease 0.6s forwards;
    }
  </style>
</head>
<body>
  <div class="slide cover-slide">
    <h1 class="cover-title">演示文稿标题</h1>
    <h2 class="cover-subtitle">副标题</h2>
    <p class="cover-info">日期 · 地点 · 作者</p>
  </div>
</body>
</html>
```

### 内容页（左右分栏）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>内容页</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .split-layout {
      display: flex;
      gap: 3vw;
      flex: 1;
    }
    .left-panel, .right-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .left-panel {
      opacity: 0;
      animation: slideInLeft 0.6s ease 0.2s forwards;
    }
    .right-panel {
      opacity: 0;
      animation: slideInRight 0.6s ease 0.2s forwards;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">页面标题</h1>
    <div class="content">
      <div class="split-layout">
        <div class="left-panel">
          <!-- 左侧内容 -->
        </div>
        <div class="right-panel">
          <!-- 右侧内容 -->
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

### 数据表格页

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>数据页</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">数据展示</h1>
    <div class="content">
      <table class="data-table">
        <thead>
          <tr>
            <th>列1</th>
            <th>列2</th>
            <th>列3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>数据1</td>
            <td>数据2</td>
            <td>数据3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>
```

### 引言页

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>引言</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .quote-slide {
      justify-content: center;
      align-items: center;
    }
    .big-quote {
      font-size: clamp(28px, 4vw, 48px);
      font-style: italic;
      color: var(--accent);
      text-align: center;
      max-width: 80%;
      line-height: 1.5;
      opacity: 0;
      animation: fadeIn 1s ease 0.3s forwards;
    }
    .quote-author {
      font-size: clamp(16px, 2vw, 24px);
      color: rgba(255, 255, 255, 0.7);
      margin-top: 3vh;
      opacity: 0;
      animation: fadeIn 0.8s ease 0.8s forwards;
    }
  </style>
</head>
<body>
  <div class="slide quote-slide">
    <p class="big-quote">"引言内容"</p>
    <p class="quote-author">— 作者</p>
  </div>
</body>
</html>
```

---

## 配色方案详细参考

### Sport（体育）
```css
--primary: #17408B;      /* NBA蓝 */
--primary-dark: #0d2654;
--secondary: #C9082A;    /* NBA红 */
--accent: #FDB927;       /* 冠军金 */
--accent-light: #ffe066;
```

### Tech（科技）
```css
--primary: #0f172a;      /* 深夜蓝 */
--primary-dark: #020617;
--secondary: #06b6d4;    /* 青色 */
--accent: #ffffff;       /* 白色 */
--accent-light: #e2e8f0;
```

### Business（商务）
```css
--primary: #1e3a5f;      /* 藏青 */
--primary-dark: #0f1f33;
--secondary: #6b7280;    /* 中灰 */
--accent: #d4af37;       /* 金色 */
--accent-light: #f5e6a3;
```

### Edu（教育）
```css
--primary: #166534;      /* 深绿 */
--primary-dark: #0a3d1f;
--secondary: #fef3c7;    /* 米色 */
--accent: #ea580c;       /* 橙色 */
--accent-light: #fed7aa;
```

### Medical（医疗）
```css
--primary: #0d9488;      /* 青绿 */
--primary-dark: #065f55;
--secondary: #ffffff;    /* 白色 */
--accent: #22c55e;       /* 绿色 */
--accent-light: #86efac;
```

### Creative（创意）
```css
--primary: #7c3aed;      /* 紫色 */
--primary-dark: #4c1d95;
--secondary: #ec4899;    /* 粉色 */
--accent: #facc15;       /* 黄色 */
--accent-light: #fef08a;
```

### Nature（自然）
```css
--primary: #15803d;      /* 森林绿 */
--primary-dark: #0a4a22;
--secondary: #78350f;    /* 棕色 */
--accent: #0ea5e9;       /* 天蓝 */
--accent-light: #7dd3fc;
```

### Gov（政府）
```css
--primary: #dc2626;      /* 红色 */
--primary-dark: #991b1b;
--secondary: #fbbf24;    /* 金色 */
--accent: #ffffff;       /* 白色 */
--accent-light: #fef3c7;
```

---

## 图片页面模板

### 图片在左侧（图文左右布局）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>图文页</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .image-left-layout {
      display: flex;
      gap: 3vw;
      flex: 1;
      align-items: center;
    }
    .image-panel {
      flex: 0 0 45%;
      opacity: 0;
      animation: slideInLeft 0.6s ease 0.2s forwards;
    }
    .text-panel {
      flex: 1;
      opacity: 0;
      animation: slideInRight 0.6s ease 0.4s forwards;
    }
    .text-panel h3 {
      font-size: clamp(20px, 2.5vw, 32px);
      color: var(--accent);
      margin-bottom: 1.5vh;
    }
    .text-panel p {
      font-size: clamp(14px, 1.5vw, 22px);
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">页面标题</h1>
    <div class="content">
      <div class="image-left-layout">
        <div class="image-panel">
          <div class="image-container">
            <img src="../pictures/your-image.jpg" alt="图片描述" class="slide-image">
            <div class="image-caption">图片说明文字</div>
          </div>
        </div>
        <div class="text-panel">
          <h3>小标题</h3>
          <p>这里是文字内容，可以包含多个段落或列表。</p>
          <ul>
            <li>要点一</li>
            <li>要点二</li>
            <li>要点三</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

### 图片在右侧（图文左右布局）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>图文页</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .image-right-layout {
      display: flex;
      gap: 3vw;
      flex: 1;
      align-items: center;
    }
    .text-panel {
      flex: 1;
      opacity: 0;
      animation: slideInLeft 0.6s ease 0.2s forwards;
    }
    .image-panel {
      flex: 0 0 45%;
      opacity: 0;
      animation: slideInRight 0.6s ease 0.4s forwards;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">页面标题</h1>
    <div class="content">
      <div class="image-right-layout">
        <div class="text-panel">
          <h3>小标题</h3>
          <p>文字内容在这里...</p>
        </div>
        <div class="image-panel">
          <img src="../pictures/your-image.jpg" alt="图片描述" class="slide-image">
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

### 图片居中展示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>图片展示</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .center-image-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 2vh;
    }
    .center-image {
      max-width: 70%;
      max-height: 60vh;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      opacity: 0;
      animation: scaleIn 0.8s ease 0.3s forwards;
    }
    .image-title {
      font-size: clamp(18px, 2vw, 28px);
      color: var(--accent);
      text-align: center;
      opacity: 0;
      animation: fadeIn 0.6s ease 0.6s forwards;
    }
  </style>
</head>
<body>
  <div class="slide">
    <h1 class="slide-title">页面标题</h1>
    <div class="content">
      <div class="center-image-layout">
        <img src="../pictures/your-image.jpg" alt="图片描述" class="center-image">
        <p class="image-title">图片标题或说明</p>
      </div>
    </div>
  </div>
</body>
</html>
```

### 背景图片页（带遮罩）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>背景图页面</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .bg-image-slide {
      position: relative;
    }
    .bg-image-slide .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
    }
    .bg-image-slide .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
      z-index: -1;
    }
    .bg-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
    }
    .bg-title {
      font-size: clamp(36px, 5vw, 64px);
      font-weight: 700;
      color: var(--white);
      margin-bottom: 2vh;
      opacity: 0;
      animation: fadeIn 0.8s ease 0.3s forwards;
    }
    .bg-subtitle {
      font-size: clamp(18px, 2.5vw, 32px);
      color: var(--accent);
      opacity: 0;
      animation: fadeIn 0.8s ease 0.6s forwards;
    }
  </style>
</head>
<body>
  <div class="slide bg-image-slide">
    <img src="../pictures/background.jpg" alt="" class="bg-image">
    <div class="bg-overlay"></div>
    <div class="bg-content">
      <h1 class="bg-title">大标题</h1>
      <p class="bg-subtitle">副标题或说明文字</p>
    </div>
  </div>
</body>
</html>
```

### 封面页带背景图

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>封面</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    .cover-bg-slide {
      position: relative;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .cover-bg-slide .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
      filter: brightness(0.7);
    }
    .cover-bg-slide .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
      z-index: -1;
    }
    .cover-content {
      position: relative;
      z-index: 1;
    }
    .cover-title {
      font-size: clamp(48px, 7vw, 84px);
      font-weight: 800;
      color: var(--white);
      text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.5);
      margin-bottom: 2vh;
      animation: scaleIn 0.8s ease forwards;
    }
    .cover-subtitle {
      font-size: clamp(24px, 3vw, 42px);
      color: var(--accent);
      text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
      margin-bottom: 4vh;
      opacity: 0;
      animation: fadeIn 0.8s ease 0.3s forwards;
    }
    .cover-info {
      font-size: clamp(16px, 2vw, 28px);
      color: rgba(255, 255, 255, 0.9);
      opacity: 0;
      animation: slideInUp 0.8s ease 0.6s forwards;
    }
  </style>
</head>
<body>
  <div class="slide cover-bg-slide">
    <img src="../pictures/cover-bg.jpg" alt="" class="bg-image">
    <div class="bg-overlay"></div>
    <div class="cover-content">
      <h1 class="cover-title">演示文稿标题</h1>
      <h2 class="cover-subtitle">副标题</h2>
      <p class="cover-info">日期 · 地点 · 作者</p>
    </div>
  </div>
</body>
</html>
```

### 图片占位符（用于开发/测试）

```html
<div class="image-placeholder">
  📷 图片加载中...
</div>
```
