/* ============================================
   도야 코한테이 3N4D 여행 가이드 v3 - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  renderAllSchedules();
  initDayNavigation();
  initScrollSpy();
});

// 스케줄 카드 렌더링
function renderAllSchedules() {
  ['day1', 'day2', 'day3', 'day4'].forEach(day => {
    const container = document.getElementById(`${day}-schedules`);
    if (container && travelData[day]) {
      container.innerHTML = travelData[day].map(schedule => renderScheduleCard(schedule)).join('');
    }
  });
}

function renderScheduleCard(s) {
  const hasAlternatives = s.alternatives && s.alternatives.length > 0;
  const hasTips = s.tips && s.tips.length > 0;
  const hasRecommendations = s.recommendations && s.recommendations.length > 0;
  const hasLocation = s.location;
  
  // 불꽃놀이 강조 여부
  const isFireworks = s.place && s.place.includes('불꽃놀이');
  
  return `
    <article class="schedule-card ${isFireworks ? 'schedule-card--highlight' : ''}">
      ${s.image ? `
        <div class="schedule-card__image">
          <img src="${s.image}" alt="${s.place}" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      ` : ''}
      <div class="schedule-card__main">
        <div class="schedule-card__header">
          <div class="schedule-card__time">
            <span class="schedule-card__time-icon">${isFireworks ? '🎆' : '⏰'}</span>
            ${s.time}
          </div>
          <div class="schedule-card__info">
            <h3 class="schedule-card__place">
              <span class="schedule-card__place-icon">${s.icon}</span>
              ${s.place}
            </h3>
            <span class="schedule-card__category schedule-card__category--${s.category}">${s.categoryLabel}</span>
            ${s.transport ? `
              <div class="schedule-card__transport">
                <span class="transport-badge transport-badge--${s.transport.method}">
                  <span class="transport-badge__icon">${getTransportIcon(s.transport.method)}</span>
                  <span class="transport-badge__method">${getTransportLabel(s.transport.method)}</span>
                  ${s.transport.duration ? `<span class="transport-badge__duration">${s.transport.duration}</span>` : ''}
                </span>
              </div>
            ` : ''}
            <p class="schedule-card__desc">${s.desc}</p>
            ${hasRecommendations ? renderRecommendations(s.recommendations) : ''}
            ${hasLocation ? renderLocation(s.location) : ''}
            ${hasTips ? renderTips(s.tips, isFireworks) : ''}
            ${s.mapsUrl ? `
              <div class="schedule-card__actions">
                <a href="${s.mapsUrl}" target="_blank" class="btn btn--primary">📍 구글맵 보기</a>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
      ${hasAlternatives ? renderAlternatives(s.alternatives) : ''}
    </article>
  `;
}

function getTransportIcon(method) {
  const icons = {
    'car': '🚗',
    'walk': '🚶',
    'shuttle': '🚌',
    'ski': '🎿'
  };
  return icons[method] || '🚗';
}

function getTransportLabel(method) {
  const labels = {
    'car': '렌터카',
    'walk': '도보',
    'shuttle': '셔틀',
    'ski': '스키'
  };
  return labels[method] || '이동';
}

function renderRecommendations(recs) {
  return `
    <div class="recommendations">
      <h5 class="recommendations__title">⭐ 추천</h5>
      <div class="recommendations__list">
        ${recs.map(r => `
          <div class="recommendation-item">
            <span class="recommendation-item__icon">${r.icon || '📍'}</span>
            <div class="recommendation-item__content">
              <div class="recommendation-item__header">
                <span class="recommendation-item__name">${r.name}</span>
                ${r.mapsUrl ? `<a href="${r.mapsUrl}" target="_blank" class="recommendation-item__link">📍 지도</a>` : ''}
              </div>
              ${r.desc ? `<p class="recommendation-item__desc">${r.desc}</p>` : ''}
              ${r.note ? `<p class="recommendation-item__desc" style="color: var(--color-fireworks);">⚠️ ${r.note}</p>` : ''}
              ${r.price ? `<span class="recommendation-item__price">${r.price}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLocation(loc) {
  const fields = [];
  
  if (loc.address) fields.push({ label: '📍 주소', value: loc.address });
  if (loc.addressJp) fields.push({ label: '🇯🇵 일본어', value: loc.addressJp });
  if (loc.addressKr) fields.push({ label: '🇰🇷 한글', value: loc.addressKr });
  if (loc.phone) fields.push({ label: '📞 전화', value: loc.phone });
  if (loc.mapCode) fields.push({ label: '🗺️ MapCode', value: `<strong>${loc.mapCode}</strong>` });
  if (loc.hours) fields.push({ label: '🕐 시간', value: loc.hours });
  if (loc.admission) fields.push({ label: '💰 입장료', value: loc.admission });
  if (loc.parking) fields.push({ label: '🅿️ 주차', value: loc.parking });
  if (loc.closed) fields.push({ label: '🚫 휴무', value: `<strong style="color: var(--color-onsen);">${loc.closed}</strong>` });
  if (loc.period) fields.push({ label: '📅 기간', value: loc.period });
  if (loc.distance) fields.push({ label: '📏 거리', value: loc.distance });
  if (loc.liftPass) fields.push({ label: '🎿 리프트', value: loc.liftPass });
  if (loc.note) fields.push({ label: '💡 참고', value: loc.note });
  
  if (fields.length === 0) return '';
  
  return `
    <div class="location-details">
      ${fields.map(f => `
        <div class="location-details__row">
          <span class="location-details__label">${f.label}</span>
          <span class="location-details__value">${f.value}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTips(tips, isHighlight = false) {
  return `
    <div class="tips-box">
      <h5 class="tips-box__title">💡 팁</h5>
      <ul class="tips-box__list">
        ${tips.map(tip => {
          const isImportant = tip.startsWith('★') || tip.startsWith('⚠️');
          return `<li class="tips-box__item ${isImportant || isHighlight ? 'tips-box__item--highlight' : ''}">${tip}</li>`;
        }).join('')}
      </ul>
    </div>
  `;
}

function renderAlternatives(alts) {
  return `
    <button class="alt-toggle" onclick="toggleAlternatives(this)">
      <span>대안 일정 보기</span>
      <span class="alt-toggle__icon">▼</span>
    </button>
    <div class="alternatives">
      <div class="alternatives__content">
        <h4 class="alternatives__title">🔄 대안 옵션</h4>
        <div class="alternatives__list">
          ${alts.map((alt, i) => `
            <div class="alt-card">
              <span class="alt-card__number">${i + 1}</span>
              <div class="alt-card__info">
                <p class="alt-card__name">${alt.name}</p>
                <p class="alt-card__desc">${alt.desc}</p>
                ${alt.price ? `<span class="recommendation-item__price">${alt.price}</span>` : ''}
                ${alt.note ? `<p class="alt-card__desc" style="color: var(--color-ski); margin-top: 0.25rem;">💡 ${alt.note}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 대안 일정 토글
window.toggleAlternatives = function(button) {
  const card = button.closest('.schedule-card');
  const alternatives = card.querySelector('.alternatives');
  if (alternatives) {
    alternatives.classList.toggle('open');
    button.classList.toggle('open');
    const span = button.querySelector('span:first-child');
    if (span) {
      span.textContent = alternatives.classList.contains('open') ? '대안 일정 닫기' : '대안 일정 보기';
    }
  }
};

// Day Navigation
function initDayNavigation() {
  const navButtons = document.querySelectorAll('.day-nav__btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const dayNumber = this.getAttribute('data-day');
      const targetSection = document.getElementById(`day${dayNumber}`);
      if (targetSection) {
        navButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Scroll Spy
function initScrollSpy() {
  const sections = document.querySelectorAll('.day-section');
  const navButtons = document.querySelectorAll('.day-nav__btn');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const dayNumber = entry.target.id.replace('day', '');
        navButtons.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-day') === dayNumber);
        });
      }
    });
  }, { rootMargin: '-100px 0px -50% 0px', threshold: 0 });
  
  sections.forEach(section => observer.observe(section));
}

// 날씨 정보 표시 (선택적)
function renderWeatherInfo() {
  if (!travelData.weatherInfo) return;
  
  const w = travelData.weatherInfo;
  console.log('Weather Info:', w.temperature, w.clothing);
}

// 쇼핑 가이드 표시 (선택적)
function renderShoppingGuide() {
  if (!travelData.shoppingGuide) return;
  
  console.log('Shopping Guide loaded:', travelData.shoppingGuide.length, 'items');
}
