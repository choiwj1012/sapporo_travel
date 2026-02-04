/* ============================================
   일본 겨울 온천·스키 여행 가이드 - JavaScript (Ver.2)
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
  
  return `
    <article class="schedule-card">
      ${s.image ? `<div class="schedule-card__image"><img src="${s.image}" alt="${s.place}" loading="lazy"></div>` : ''}
      <div class="schedule-card__main">
        <div class="schedule-card__header">
          <div class="schedule-card__time">
            <span class="schedule-card__time-icon">⏰</span>
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
                  <span class="transport-badge__icon">${s.transport.method === 'car' ? '🚗' : s.transport.method === 'walk' ? '🚶' : '🚌'}</span>
                  <span class="transport-badge__method">${s.transport.method === 'car' ? '렌터카' : s.transport.method === 'walk' ? '도보' : '셔틀'}</span>
                  ${s.transport.duration ? `<span class="transport-badge__duration">${s.transport.duration}</span>` : ''}
                </span>
              </div>
            ` : ''}
            <p class="schedule-card__desc">${s.desc}</p>
            ${s.recommendations ? renderRecommendations(s.recommendations) : ''}
            ${s.location ? renderLocation(s.location) : ''}
            ${s.mapsUrl ? `<div class="schedule-card__actions"><a href="${s.mapsUrl}" target="_blank" class="btn btn--primary">📍 구글맵 보기</a></div>` : ''}
          </div>
        </div>
      </div>
      ${hasAlternatives ? renderAlternatives(s.alternatives) : ''}
    </article>
  `;
}

function renderRecommendations(recs) {
  return `
    <div class="recommendations">
      <h5 class="recommendations__title">⭐ 추천</h5>
      <div class="recommendations__list">
        ${recs.map(r => `
          <div class="recommendation-item">
            <span class="recommendation-item__icon">${r.icon}</span>
            <div class="recommendation-item__content">
              <div class="recommendation-item__header">
                <span class="recommendation-item__name">${r.name}</span>
                ${r.mapsUrl ? `<a href="${r.mapsUrl}" target="_blank" class="recommendation-item__link">📍 지도</a>` : ''}
              </div>
              ${r.desc ? `<p class="recommendation-item__desc">${r.desc}</p>` : ''}
              ${r.price ? `<span class="recommendation-item__price">${r.price}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLocation(loc) {
  return `
    <div class="location-details">
      ${loc.address ? `<div class="location-details__row"><span class="location-details__label">📍 주소</span><span class="location-details__value">${loc.address}</span></div>` : ''}
      ${loc.hours ? `<div class="location-details__row"><span class="location-details__label">🕐 시간</span><span class="location-details__value">${loc.hours}</span></div>` : ''}
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
