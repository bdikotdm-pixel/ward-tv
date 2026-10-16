// ===== כמה מחלקות במערכת אחת =====
// כל מחלקה מזוהה לפי ?ward=... בכתובת, למשל index.html?ward=a
// לכל מחלקה קובץ מידע משלה: wards/a.json, ותיקיית תמונות: images/a/
// בלי ?ward= – המערכת עובדת כמו קודם עם data.json (המחלקה הראשונה).
(function () {
  const C = window.CONFIG = window.CONFIG || {};
  const id = (new URLSearchParams(location.search).get('ward') || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
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
