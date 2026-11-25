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
  name: '바삭 모둠 튀김',
  price: 10500,
  tag: '#바삭사이드',
  desc: '김말이, 야채튀김, 오징어튀김, 고구마튀김까지 주문 즉시 바삭하게 튀겨낸 입덕볶이 인기 모둠 튀김입니다. 떡볶이 국물에 찍어 먹으면 더욱 맛있습니다.',
  img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
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

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const overlay = document.getElementById('menuOverlay');
  const drawer = document.getElementById('slideDrawer');

  if (openBtn && drawer && overlay) {
    const openMenu = () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
    };
    const closeMenu = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    };
    openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }

  updateCartBadge();
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

submitPayBtn.addEventListener('click', (e) => {
  e.preventDefault();
  try {
    const finalAmount = updatePaySummary();
    const method = document.querySelector('input[name="payMethod"]:checked')?.value || '토스페이';
    localStorage.setItem('ipdeok_last_order', JSON.stringify({
      menuTitle: titleText,
      totalPrice: finalAmount,
      method: method
    }));
  } catch (err) {
    console.error(err);
  }
  window.location.href = '../payment_finish/payment_finish.html';
});

const payMethods = document.querySelectorAll('#payMethodGrid .pay-method');

function syncPayMethodUI() {
  payMethods.forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');
    const isChecked = Boolean(radio && radio.checked);
    label.classList.toggle('active', isChecked);
  });
}

payMethods.forEach((label) => {
  const radio = label.querySelector('input[type="radio"]');
  label.addEventListener('click', () => {
    if (radio) {
      radio.checked = true;
    }
    syncPayMethodUI();
  });
  if (radio) {
    radio.addEventListener('change', syncPayMethodUI);
  }
});

syncPayMethodUI();