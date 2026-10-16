// ===== כמה מחלקות במערכת אחת =====
// כל מחלקה מזוהה לפי ?ward=... בכתובת, למשל index.html?ward=a
// לכל מחלקה קובץ מידע משלה: wards/a.json, ותיקיית תמונות: images/a/
// בלי ?ward= – המערכת עובדת כמו קודם עם data.json (המחלקה הראשונה).
(function () {
  const C = window.CONFIG = window.CONFIG || {};
  const P = new URLSearchParams(location.search);
  // רשימת כל המחלקות: 'main' = המחלקה הראשית (בלי ?ward=)
  C.WARD_LIST = [['main', C.MAIN_WARD_NAME || 'המחלקה הראשית']].concat(Object.entries(C.WARDS || {}).map(([k, w]) => [k, w.name || k]));
  // ניהול כללי: admin.html?central=1 – מה שנכתב שם מופיע בכל המחלקות שנבחרו
  if (P.get('central') === '1') {
    C.CENTRAL = true; C.WARD = ''; C.KEY = '-central'; C.WARD_NAME = 'ניהול כללי';
    C.DATA_PATH = 'shared.json'; C.IMG_DIR = 'images/shared';
    if (C.CENTRAL_TOKEN_ENC) C.TOKEN_ENC = C.CENTRAL_TOKEN_ENC;
    C.withWard = u => u;
    return;
  }
  const id = (P.get('ward') || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  const w = (C.WARDS || {})[id] || {};
  C.WARD = id;
  C.KEY = id ? '-' + id : '';            // מפתח נפרד לכל מחלקה בזיכרון הדפדפן
  C.WARD_NAME = w.name || '';
  if (id) {
    C.DATA_PATH = 'wards/' + id + '.json';
    C.IMG_DIR = 'images/' + id;
    if (w.TOKEN_ENC) C.TOKEN_ENC = w.TOKEN_ENC; // קוד צוות נפרד למחלקה (לא חובה)
  } else {
    C.IMG_DIR = 'images';
  }
  // מוסיף את המחלקה לכל קישור פנימי
  C.withWard = u => id ? u + (u.includes('?') ? '&' : '?') + 'ward=' + encodeURIComponent(id) : u;
})();
