// ==========================================
// RIDHIMA SRIVASTAVA PORTFOLIO LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initParticleBackground();
  initThemeToggle();
  initTypingEffect();
  initSkillsFilter();
  initDsaVisualizer();
  initResumeModal();
  initContactForm();
  initMobileMenu();
});

/* ------------------------------------------
   1. AMBIENT PARTICLE BACKGROUND
   ------------------------------------------ */
function initParticleBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 20), 65);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(56, 189, 248, ${this.alpha})`
        : `rgba(2, 132, 199, ${this.alpha * 0.7})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const lineColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(2, 132, 199, ';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `${lineColor}${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ------------------------------------------
   2. THEME ENGINE (DARK / LIGHT TOGGLE)
   ------------------------------------------ */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme.toUpperCase()} theme`);
  });

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.style.color = '#f59e0b';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.style.color = '#38bdf8';
    }
  }
}

/* ------------------------------------------
   3. HERO TYPING EFFECT
   ------------------------------------------ */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const phrases = [
    'Cybersecurity Analyst',
    'Threat & Vulnerability Analyst',
    'Deloitte & Tata Cyber Simulation Graduate',
    'InfoSec & Security Engineer'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ------------------------------------------
   4. SKILLS MATRIX TAB FILTER
   ------------------------------------------ */
function initSkillsFilter() {
  const tabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-tab');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ------------------------------------------
   5. INTERACTIVE C++ DSA VISUALIZER
   ------------------------------------------ */
function initDsaVisualizer() {
  const container = document.getElementById('bars-container');
  const algoSelect = document.getElementById('algo-select');
  const startBtn = document.getElementById('btn-viz-start');
  const resetBtn = document.getElementById('btn-viz-reset');
  const speedInput = document.getElementById('viz-speed');

  const statusEl = document.getElementById('viz-status');
  const compEl = document.getElementById('viz-comparisons');
  const swapEl = document.getElementById('viz-swaps');
  const timeCompEl = document.getElementById('viz-time-comp');
  const spaceCompEl = document.getElementById('viz-space-comp');
  const snippetEl = document.getElementById('code-snippet');

  if (!container || !startBtn) return;

  let array = [];
  let isRunning = false;
  const numBars = 12;

  const codeSnippets = {
    bubble: `// C++ Bubble Sort Logic
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
        }
    }
}`,
    selection: `// C++ Selection Sort Logic
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(arr[min_idx], arr[i]);
    }
}`,
    binary: `// C++ Binary Search Logic (Sorted Array)
int binarySearch(int arr[], int l, int r, int x) {
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (arr[m] == x) return m;
        if (arr[m] < x) l = m + 1;
        else r = m - 1;
    }
    return -1;
}`
  };

  const complexities = {
    bubble: { time: 'O(N²) Worst', space: 'O(1) Auxiliary' },
    selection: { time: 'O(N²) Worst', space: 'O(1) Auxiliary' },
    binary: { time: 'O(log N) Worst', space: 'O(1) Auxiliary' }
  };

  function generateArray(sorted = false) {
    array = [];
    container.innerHTML = '';
    for (let i = 0; i < numBars; i++) {
      const val = sorted ? (i + 1) * 8 + 10 : Math.floor(Math.random() * 75) + 15;
      array.push(val);

      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${(val / 90) * 100}%`;
      bar.textContent = val;
      bar.id = `bar-${i}`;
      container.appendChild(bar);
    }
  }

  function getDelay() {
    return 1100 - parseInt(speedInput.value);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function updateAlgoDetails() {
    const algo = algoSelect.value;
    snippetEl.textContent = codeSnippets[algo];
    timeCompEl.textContent = complexities[algo].time;
    spaceCompEl.textContent = complexities[algo].space;

    if (algo === 'binary') {
      generateArray(true);
    } else {
      generateArray(false);
    }
  }

  algoSelect.addEventListener('change', updateAlgoDetails);
  resetBtn.addEventListener('click', () => {
    if (isRunning) return;
    updateAlgoDetails();
    compEl.textContent = '0';
    swapEl.textContent = '0';
    statusEl.textContent = 'Ready';
  });

  startBtn.addEventListener('click', async () => {
    if (isRunning) return;
    isRunning = true;
    startBtn.disabled = true;
    algoSelect.disabled = true;
    statusEl.textContent = 'Executing...';
    compEl.textContent = '0';
    swapEl.textContent = '0';

    const algo = algoSelect.value;
    if (algo === 'bubble') await runBubbleSort();
    else if (algo === 'selection') await runSelectionSort();
    else if (algo === 'binary') await runBinarySearch();

    statusEl.textContent = 'Completed!';
    isRunning = false;
    startBtn.disabled = false;
    algoSelect.disabled = false;
  });

  async function runBubbleSort() {
    let comps = 0;
    let swaps = 0;
    const bars = container.children;

    for (let i = 0; i < numBars - 1; i++) {
      for (let j = 0; j < numBars - i - 1; j++) {
        bars[j].classList.add('comparing');
        bars[j + 1].classList.add('comparing');
        comps++;
        compEl.textContent = comps;

        await sleep(getDelay());

        if (array[j] > array[j + 1]) {
          bars[j].classList.remove('comparing');
          bars[j + 1].classList.remove('comparing');
          bars[j].classList.add('swapping');
          bars[j + 1].classList.add('swapping');

          // Swap logic
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          bars[j].style.height = `${(array[j] / 90) * 100}%`;
          bars[j].textContent = array[j];
          bars[j + 1].style.height = `${(array[j + 1] / 90) * 100}%`;
          bars[j + 1].textContent = array[j + 1];

          swaps++;
          swapEl.textContent = swaps;
          await sleep(getDelay());
        }

        bars[j].className = 'bar';
        bars[j + 1].className = 'bar';
      }
      bars[numBars - i - 1].classList.add('sorted');
    }
    bars[0].classList.add('sorted');
  }

  async function runSelectionSort() {
    let comps = 0;
    let swaps = 0;
    const bars = container.children;

    for (let i = 0; i < numBars - 1; i++) {
      let minIdx = i;
      bars[i].classList.add('target');

      for (let j = i + 1; j < numBars; j++) {
        bars[j].classList.add('comparing');
        comps++;
        compEl.textContent = comps;

        await sleep(getDelay());

        if (array[j] < array[minIdx]) {
          if (minIdx !== i) bars[minIdx].className = 'bar';
          minIdx = j;
          bars[minIdx].classList.add('target');
        } else {
          bars[j].className = 'bar';
        }
      }

      if (minIdx !== i) {
        swaps++;
        swapEl.textContent = swaps;

        let temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;

        bars[i].style.height = `${(array[i] / 90) * 100}%`;
        bars[i].textContent = array[i];
        bars[minIdx].style.height = `${(array[minIdx] / 90) * 100}%`;
        bars[minIdx].textContent = array[minIdx];
      }

      bars[minIdx].className = 'bar';
      bars[i].className = 'bar sorted';
    }
    bars[numBars - 1].classList.add('sorted');
  }

  async function runBinarySearch() {
    const bars = container.children;
    const targetVal = array[Math.floor(Math.random() * numBars)];
    showToast(`Binary Search Target Value: ${targetVal}`);

    let l = 0;
    let r = numBars - 1;
    let comps = 0;

    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      bars[m].classList.add('target');
      comps++;
      compEl.textContent = comps;

      await sleep(getDelay());

      if (array[m] === targetVal) {
        bars[m].className = 'bar sorted';
        showToast(`Target ${targetVal} Found at Index ${m}!`);
        return;
      }

      if (array[m] < targetVal) {
        for (let i = l; i <= m; i++) bars[i].style.opacity = '0.3';
        l = m + 1;
      } else {
        for (let i = m; i <= r; i++) bars[i].style.opacity = '0.3';
        r = m - 1;
      }
      bars[m].className = 'bar';
    }
  }

  generateArray();
}

/* ------------------------------------------
   6. RESUME PREVIEW & PRINT MODAL
   ------------------------------------------ */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openBtn = document.getElementById('btn-open-resume');
  const closeBtn = document.getElementById('btn-close-modal');
  const printBtn = document.getElementById('btn-print-resume');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', openModal);
  document.querySelectorAll('a[href="#resume"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  printBtn?.addEventListener('click', () => {
    window.print();
  });

  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
      showToast('Downloading Ridhima_Srivastava_Resume.pdf...');
    });
  });
}

/* ------------------------------------------
   7. CONTACT FORM & COPY TO CLIPBOARD
   ------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtns = document.querySelectorAll('.btn-copy');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    showToast(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
}

/* ------------------------------------------
   8. MOBILE MENU TOGGLE
   ------------------------------------------ */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  btn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
    });
  });
}

/* ------------------------------------------
   UTILITY: TOAST NOTIFICATION
   ------------------------------------------ */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-cyan"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
