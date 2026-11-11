{\rtf1\ansi\ansicpg1252\cocoartf2907
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 1. Live Brussels / CET Clock\
function updateClock() \{\
  const clockEl = document.getElementById('local-time');\
  const now = new Date();\
  const options = \{\
    timeZone: 'Europe/Brussels',\
    hour: '2-digit',\
    minute: '2-digit',\
    second: '2-digit',\
    hour12: false\
  \};\
  clockEl.textContent = `$\{new Intl.DateTimeFormat('en-GB', options).format(now)\} CET`;\
\}\
setInterval(updateClock, 1000);\
updateClock();\
\
// 2. Sector Filtering\
const filterButtons = document.querySelectorAll('.filter-btn');\
const projectRows = document.querySelectorAll('.project-row');\
\
filterButtons.forEach(btn => \{\
  btn.addEventListener('click', () => \{\
    // Update active button state\
    filterButtons.forEach(b => b.classList.remove('active'));\
    btn.classList.add('active');\
\
    const selected = btn.getAttribute('data-filter');\
\
    projectRows.forEach(row => \{\
      const categories = row.getAttribute('data-category');\
      if (selected === 'all' || categories.includes(selected)) \{\
        row.classList.remove('hidden');\
      \} else \{\
        row.classList.add('hidden');\
      \}\
    \});\
  \});\
\});\
\
// 3. Light / Dark Mode Toggle with LocalStorage persistence\
const themeToggle = document.getElementById('theme-toggle');\
const savedTheme = localStorage.getItem('theme');\
\
if (savedTheme) \{\
  document.documentElement.setAttribute('data-theme', savedTheme);\
\}\
\
themeToggle.addEventListener('click', () => \{\
  const current = document.documentElement.getAttribute('data-theme');\
  const next = current === 'dark' ? 'light' : 'dark';\
  document.documentElement.setAttribute('data-theme', next);\
  localStorage.setItem('theme', next);\
\});}