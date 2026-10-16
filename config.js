// ===== הגדרות המערכת =====
// 1) פתחו את setup.html, הדביקו את הטוקן, והעתיקו לכאן את 4 השורות שמתקבלות
//    (OWNER, REPO, BRANCH, TOKEN_ENC) במקום השורות הריקות למטה.
// 2) מחלקות נוספות (לא חובה): הריצו שוב את setup.html עם "קוד מחלקה"
//    והדביקו כל שורה שמתקבלת בתוך WARDS.
window.CONFIG = {
  OWNER: "bdikotdm-pixel",              // שם המשתמש ב-GitHub
  REPO: "ward-tv",               // שם ה-repo
  BRANCH: "main",
  TOKEN_ENC: {"s":"ihWbXleck1Czvnk3HrBWYA==","i":"RMrXoamV47udIt58","c":"oO/GK0uORZMqT4+u3An5/LPk7HBwop7eJrDjiYVVvd9jJp0Ev1h8P7aLorsD8jd/IL1ms5Bd/2nm0f9ZquK/U1tLHFe2Q+YxNhDjhhZviqiLqywFjh1BZvHk2yKnMBjWN/CY82KZTfazrF5QQQ==","n":310000},,          // מתקבל מ-setup.html (לא מדביקים כאן את הטוקן עצמו!)

  MAIN_WARD_NAME: "המחלקה הראשית",
  WARDS: {
    // "a": { name: "מחלקה א", TOKEN_ENC: {...} },
  },

  DATA_PATH: "data.json",
  REFRESH_SECONDS: 60,    // כל כמה שניות הטלוויזיה בודקת עדכונים
  PAGE_SECONDS: 20,       // כל כמה שניות מתחלף עמוד במסך
  FLASH_EVERY: 50,        // כל כמה שניות מופיעה הודעה/תמונות על כל המסך
  FLASH_SECONDS: 9,       // כמה שניות הודעה נשארת
  PHOTO_SECONDS: 9,       // כמה שניות כל תמונה
  PHOTOS_PER_ROUND: 3,    // כמה תמונות בכל פעם
  GEONAME_ID: 281184,     // ירושלים – זמני שבת
  LAT: 31.7683, LON: 35.2137
};
