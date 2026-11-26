const MENU_DATA = {
  original: {
    id: 'original',
    name: '입덕 오리지널 떡볶이',
    price: 8500,
    tag: '#매콤달콤',
    desc: '매일 아침 뽑은 쫄깃한 쌀떡에 72시간 숙성한 특제 고추장 양념이 깊게 배어든 입덕볶이 시그니처 메뉴입니다. 어묵과 대파가 어우러져 중독성 강한 감칠맛을 자랑합니다.',
    img: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=800&q=80'
  },
  cheese: {
    id: 'cheese',
    name: '눈꽃치즈 매운 떡볶이',
    price: 10500,
    tag: '#치즈폭탄',
    desc: '화끈하게 매운 특제 양념 위로 100% 자연산 모짜렐라 눈꽃치즈를 아낌없이 올렸습니다. 매콤함과 고소한 치즈의 완벽한 단짠·맵느 조합을 경험해 보세요.',
    img: 'Imgs/tteokbokki-main.png'
  },
  rose: {
    id: 'rose',
    name: '베이컨 로제 떡볶이',
    price: 11500,
    tag: '#로제크림',
    desc: '부드러운 생크림과 매콤한 특제 소스의 황금 비율 로제 떡볶이입니다. 훈연 향 가득한 두툼한 베이컨과 쫀득한 떡이 어우러져 부드럽고 진한 맛을 냅니다.',
    img: 'Imgs/tteokbokki-rose.png'
  },
  buldak: {
    id: 'buldak',
    name: '화끈 불닭맛 폭탄 떡볶이',
    price: 9500,
    tag: '#스트레스해소',
    desc: '청양고추와 특제 불닭 소스로 깔끔하고 강렬한 매운맛을 살린 불닭 떡볶이입니다. 스트레스 날리는 화끈한 매운맛 마니아를 위한 입덕볶이 강력 추천 메뉴입니다.',
    img: 'Imgs/tteokbokki-buldak.png'
  },
  side: {
    id: 'side',
    category: 'side',
    name: '바삭 모둠 튀김',
    price: 4500,
    tag: '#바삭사이드',
    desc: '김말이, 야채튀김, 오징어튀김, 고구마튀김까지 주문 즉시 바삭하게 튀겨낸 입덕볶이 인기 모둠 튀김입니다. 떡볶이 국물에 찍어 먹으면 더욱 맛있습니다.',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    comboTip: '입덕 오리지널 떡볶이 국물에 찍어 먹으면 바삭함과 감칠맛이 살아납니다!',
    sauces: [
      { name: '기본 간장소스', price: 0 },
      { name: '매콤달콤 양념소스', price: 500 },
      { name: '허니머스타드 소스', price: 500 },
      { name: '체다 치즈 디핑소스', price: 1000 }
    ],
    extraOptions: [
      { name: '눈꽃 모짜렐라 치즈 추가', price: 1500 },
      { name: '단무지 추가', price: 500 }
    ]
  },
  'fried-combo': {
    id: 'fried-combo',
    category: 'side',
    name: '바삭 모둠 튀김',
    price: 4500,
    tag: '#바삭사이드',
    desc: '김말이, 야채튀김, 오징어튀김, 고구마튀김까지 주문 즉시 바삭하게 튀겨낸 입덕볶이 인기 모둠 튀김입니다. 떡볶이 국물에 찍어 먹으면 더욱 맛있습니다.',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    comboTip: '입덕 오리지널 떡볶이 국물에 찍어 먹으면 바삭함과 감칠맛이 살아납니다!',
    sauces: [
      { name: '기본 간장소스', price: 0 },
      { name: '매콤달콤 양념소스', price: 500 },
      { name: '허니머스타드 소스', price: 500 },
      { name: '체다 치즈 디핑소스', price: 1000 }
    ],
    extraOptions: [
      { name: '눈꽃 모짜렐라 치즈 추가', price: 1500 },
      { name: '단무지 추가', price: 500 }
    ]
  },
  'cheese-ball': {
    id: 'cheese-ball',
    category: 'side',
    name: '쫀득 치즈볼',
    price: 4000,
    tag: '#치즈쭉쭉',
    desc: '겉은 바삭하고 찹쌀 반죽 속은 쫄깃하면서 고소한 모짜렐라 치즈가 가득 찬 인기 디저트·사이드 메뉴입니다. (1인분 4알 제공)',
    img: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=80',
    comboTip: '화끈 불닭맛 폭탄 떡볶이와 함께 먹으면 매운맛을 부드럽게 감싸줘요!',
    sauces: [
      { name: '연유 디핑소스', price: 500 },
      { name: '허니머스타드 소스', price: 500 },
      { name: '체다 치즈 디핑소스', price: 1000 }
    ],
    extraOptions: [
      { name: '눈꽃 치즈 시즈닝 추가', price: 1000 },
      { name: '단무지 추가', price: 500 }
    ]
  },
  gimmari: {
    id: 'gimmari',
    category: 'side',
    name: '바삭 김말이 튀김',
    price: 3500,
    tag: '#국물찍먹',
    desc: '쫄깃한 당면을 김으로 돌돌 말아 바삭하게 튀겨낸 분식 필수 사이드! 매콤달콤한 떡볶이 국물에 푹 찍어 드시면 환상의 궁합을 자랑합니다. (1인분 4개 제공)',
    img: 'Imgs/kimmalee.png',
    comboTip: '화끈 불닭맛 떡볶이 국물에 3초 푹 담가 드시면 가장 맛있어요!',
    sauces: [
      { name: '기본 간장소스', price: 0 },
      { name: '매콤달콤 양념소스', price: 500 },
      { name: '체다 치즈 디핑소스', price: 1000 }
    ],
    extraOptions: [
      { name: '눈꽃 모짜렐라 치즈 추가', price: 1500 },
      { name: '단무지 추가', price: 500 }
    ]
  },
  'fried-chicken-side': {
    id: 'fried-chicken-side',
    category: 'side',
    name: '치킨 가라아게',
    price: 5000,
    tag: '#육즙가득',
    desc: '겉은 바삭하고 속은 촉촉한 육즙이 가득한 한입 크기 순살 치킨 가라아게입니다. 매운 떡볶이와 함께 곁들이기 좋은 든든한 인기 사이드 메뉴입니다.',
    img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80',
    comboTip: '베이컨 로제 떡볶이의 꾸덕한 크림소스와 찰떡궁합인 바삭 사이드입니다.',
    sauces: [
      { name: '허니머스타드 소스', price: 500 },
      { name: '스위트 칠리 소스', price: 500 },
      { name: '갈릭 디핑 소스', price: 700 },
      { name: '체다 치즈 디핑소스', price: 1000 }
    ],
    extraOptions: [
      { name: '눈꽃 모짜렐라 치즈 추가', price: 1500 },
      { name: '단무지 추가', price: 500 }
    ]
  },
  cola: {
    id: 'cola',
    category: 'drink',
    name: '콜라',
    price: 2000,
    tag: '#시원한탄산',
    desc: '톡 쏘는 탄산과 청량감으로 매콤달콤한 떡볶이·튀김과 함께 즐기기 좋은 클래식 탄산음료입니다.',
    img: 'Imgs/cola-can.png',
    comboTip: '바삭 김말이 튀김이나 치킨 가라아게와 함께 마시면 깔끔하게 마무리돼요!',
    drinkOptions: ['시원하게 (기본)', '얼음 가득'],
    drinkExtras: [
      { name: '얼음컵 추가', price: 500 },
      { name: '빨대 포함', price: 0 }
    ]
  },
  cider: {
    id: 'cider',
    category: 'drink',
    name: '사이다',
    price: 2000,
    tag: '#청량사이다',
    desc: '맑고 깔끔한 단맛과 강한 탄산감이 매력적인 청량 사이다입니다. 기름진 사이드 메뉴와 잘 어울립니다.',
    img: 'Imgs/cider-can.png',
    comboTip: '치킨 가라아게의 바삭함을 살려주는 깔끔한 콤보입니다.',
    drinkOptions: ['시원하게 (기본)', '얼음 가득'],
    drinkExtras: [
      { name: '얼음컵 추가', price: 500 },
      { name: '빨대 포함', price: 0 }
    ]
  },
  fanta: {
    id: 'fanta',
    category: 'drink',
    name: '환타 오렌지',
    price: 2000,
    tag: '#상큼오렌지',
    desc: '상큼한 오렌지 향과 달콤한 탄산이 어우러진 오렌지 탄산음료입니다.',
    img: 'Imgs/fanta-orange-can.png',
    comboTip: '베이컨 로제 떡볶이나 눈꽃치즈 매운 떡볶이와 함께 즐기면 상큼함이 더해집니다.',
    drinkOptions: ['시원하게 (기본)', '얼음 가득'],
    drinkExtras: [
      { name: '얼음컵 추가', price: 500 },
      { name: '빨대 포함', price: 0 }
    ]
  },
  coolpis: {
    id: 'coolpis',
    category: 'drink',
    name: '쿨피스',
    price: 2000,
    tag: '#매운맛진화',
    desc: '달콤하고 부드러운 복숭아 맛 음료로, 매운 떡볶이를 먹을 때 입안을 진정시켜 주는 분식 단짝 음료입니다.',
    img: 'Imgs/coolpis-peach-carton.png',
    comboTip: '화끈 불닭맛 폭탄 떡볶이 먹을 때 매운맛 진정용으로 가장 추천해요!',
    drinkOptions: ['시원하게 (기본)', '얼음 가득'],
    drinkExtras: [
      { name: '얼음컵 추가', price: 500 },
      { name: '빨대 포함', price: 0 }
    ]
  }
};

function getAssetPrefix() {
  const path = location.pathname.replace(/\\/g, '/');
  if (path.includes('/sub/')) {
    return '../../';
  }
  return '';
}

function resolveAsset(relPath) {
  if (!relPath) return '';
  if (/^(https?:\/\/|data:|\/)/.test(relPath)) return relPath;
  return getAssetPrefix() + relPath;
}

function getLoginPageHref() {
  return getAssetPrefix() + 'sub/login/login.html';
}

function getMyPageHref() {
  return getAssetPrefix() + 'sub/mypage/mypage.html';
}

function getCartPageHref() {
  return getAssetPrefix() + 'sub/cart/cart.html';
}

function getAboutPageHref() {
  return getAssetPrefix() + 'sub/about/about.html';
}

function getCommunityPageHref() {
  return getAssetPrefix() + 'sub/community/community.html';
}

function getUserDestinationHref(isLoggedIn) {
  return isLoggedIn ? getMyPageHref() : getLoginPageHref();
}

/* ===== 로컬스토리지 회원 인증 및 공통 헤더/드로어 동기화 ===== */
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('ipdeok_users')) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem('ipdeok_users', JSON.stringify(users));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('ipdeok_current_user')) || null;
  } catch (e) {
    return null;
  }
}

function setCurrentUser(userObj) {
  if (userObj) {
    localStorage.setItem('ipdeok_current_user', JSON.stringify(userObj));
  } else {
    localStorage.removeItem('ipdeok_current_user');
  }
  syncAuthUI();
}

function logoutUser() {
  setCurrentUser(null);
}

function getDefaultAddress() {
  try {
    return JSON.parse(localStorage.getItem('ipdeok_default_address')) || {
      main: '인천광역시 연수구 송도동 123-45',
      detail: '입덕아파트 101동 1204호 · 문 앞에 두고 벨 눌러주세요'
    };
  } catch (e) {
    return {
      main: '인천광역시 연수구 송도동 123-45',
      detail: '입덕아파트 101동 1204호 · 문 앞에 두고 벨 눌러주세요'
    };
  }
}

function saveDefaultAddress(addrObj) {
  localStorage.setItem('ipdeok_default_address', JSON.stringify(addrObj));
}

function renderLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function syncAuthUI() {
  const user = getCurrentUser();
  const isLoggedIn = Boolean(user && user.id);
  const displayName = isLoggedIn ? (user.nickname || user.id) : '';
  const userTargetHref = getUserDestinationHref(isLoggedIn);
  const cartHref = getCartPageHref();

  // 모든 페이지 헤더 우측을 [로그인 아이콘] -> [장바구니 아이콘] -> [햄버거 버튼]으로 통일
  const headerActions = document.querySelector('.site-header .header-actions');
  if (headerActions) {
    const isLoginPage = location.pathname.replace(/\\/g, '/').includes('/sub/login/');
    const isMyPage = location.pathname.replace(/\\/g, '/').includes('/sub/mypage/');
    const activeUserClass = (isLoggedIn || isLoginPage || isMyPage) ? ' is-logged-in' : '';

    headerActions.innerHTML = `
      <a href="${userTargetHref}" class="user-icon-btn${activeUserClass}" id="headerUserBtn" aria-label="${isLoggedIn ? '마이페이지' : '로그인'}">
        <i data-lucide="${isLoggedIn ? 'user-check' : 'user'}"></i>
      </a>
      <a href="${cartHref}" class="cart-icon-btn" aria-label="장바구니">
        <i data-lucide="shopping-cart"></i>
        <span class="cart-badge">0</span>
      </a>
      <button type="button" class="hamburger-btn" id="openMenuBtn" aria-label="전체 메뉴">
        <span></span><span></span><span></span>
      </button>
    `;

    // 헤더 재렌더링 후 햄버거 버튼 이벤트 재연결
    const openBtn = document.getElementById('openMenuBtn');
    const drawer = document.getElementById('slideDrawer');
    const overlay = document.getElementById('menuOverlay');
    if (openBtn && drawer && overlay) {
      openBtn.addEventListener('click', () => {
        drawer.classList.add('active');
        overlay.classList.add('active');
      });
    }
  }

  // 드로어 상단: 로그인한 사용자에게만 '000님' 표시
  const drawerUserName = document.getElementById('drawerUserName');
  if (drawerUserName) {
    drawerUserName.textContent = isLoggedIn ? `${displayName}님` : '';
    drawerUserName.hidden = !isLoggedIn;
  }

  // 드로어 내비게이션: 모든 페이지에서 메뉴, 소개, 커뮤니티, 로그인, 마이페이지로 통일
  const drawerNav = document.querySelector('#slideDrawer .drawer-nav');
  if (drawerNav) {
    const prefix = getAssetPrefix();
    drawerNav.innerHTML = `
      <a href="${prefix}sub/lists/lists.html"><span>메뉴</span><span>›</span></a>
      <a href="${prefix}sub/about/about.html"><span>소개</span><span>›</span></a>
      <a href="${prefix}sub/community/community.html"><span>커뮤니티</span><span>›</span></a>
      <a href="${prefix}sub/login/login.html"><span>로그인</span><span>›</span></a>
      <a href="${prefix}sub/mypage/mypage.html"><span>마이페이지</span><span>›</span></a>
    `;
  }

  updateCartBadge();
  renderLucideIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeMenuBtn');
  const overlay = document.getElementById('menuOverlay');
  const drawer = document.getElementById('slideDrawer');

  if (drawer && overlay) {
    const closeMenu = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    };
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }

  syncAuthUI();
});

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('ipdeok_cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('ipdeok_cart', JSON.stringify(cart));
  updateCartBadge();
}

function clearCart() {
  localStorage.removeItem('ipdeok_cart');
  updateCartBadge();
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  badges.forEach((b) => {
    b.textContent = totalQty;
    b.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

function formatPrice(num) {
  return Number(num).toLocaleString('ko-KR') + '원';
}