import React, { useState } from 'react';
import axios from 'axios';

function Translator() {
  const [text, setText] = useState(''); // Kiritilgan matn
  const [translatedText, setTranslatedText] = useState(''); // Tarjima natijasi
  const [sourceLang, setSourceLang] = useState('en'); // Qaysi tildan
  const [targetLang, setTargetLang] = useState('ru'); // Qaysi tilga
  const [loading, setLoading] = useState(false);
  const [alter, setAlter]=useState('')
  const [sinonim, setSinonim] = useState('')
  const [sinonim1, setSinonim1] = useState('')
  const [sinonim2, setSinonim2] = useState('')

  
  const handleTranslate = async () => {
    if (!text) return;  
    setLoading(true);
    setTranslatedText(''); 

    try {
      // MyMemory API - GET so'rovi orqali brauzer xavfsizlik cheklovlaridan aylanib o'tadi
      // Format: langpair=ESKI_TIL|YANGI_TIL
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`
        }
      });
      // https://api.mymemory.translated.net/get?q=Hello&langpair=en|uz
      // Natija responseData.translatedText ichida keladi
      if (response.data && response.data.responseData) {
        setTranslatedText(response.data.responseData.translatedText);
        setSinonim(response.data.matches[1].translation)
        setSinonim1(response.data.matches[2].translation)
        setSinonim2(response.data.matches[3].translation)
        // setAlter(response.)
      } else {
        alert("Tarjima topilmadi.");
      }
    } catch (error) {
    //   alert("Xatolik yuz berdi. Internet aloqasini tekshiring.");
    }
    setLoading(false);
  };
  // Tillar va matnlarni o'zaro almashtirish (Swap)
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(translatedText);
    setTranslatedText(text);
  };

  return (
    <div style={{
  padding: '30px',
  maxWidth: '600px',
  margin: '50px auto',
  fontFamily: 'Arial, sans-serif',
  background: '#050816',
  borderRadius: '20px',
  boxShadow: '0 0 25px #00e5ff88',
  color: 'white',
  border: '1px solid #00e5ff44'
}}>

  <h2 style={{
    textAlign: 'center',
    marginBottom: '25px',
    color: 'white',
    fontSize: '34px',
    fontWeight: 'bold'
  }}>
    🌐 Kafolatlanmagan Tarjimon
  </h2>

  {/* Tillar */}
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '20px'
  }}>

    <select
      value={sourceLang}
      onChange={(e) => setSourceLang(e.target.value)}
      style={{
        flex: 1,
        padding: '12px',
        borderRadius: '10px',
        border: '1px solid #00e5ff55',
        background: '#0b1023',
        color: 'white',
        fontSize: '15px',
        outline: 'none'
      }}
    >
      <option value="en">Ingliz tili (EN)</option>
      <option value="ru">Rus tili (RU)</option>
      <option value="uz">O'zbek tili (UZ)</option>
      <option value="it">Italyan tili (IT)</option>
      <option value="tr">Turk tili (TR)</option>
    </select>

    <button
      onClick={handleSwap}
      type="button"
      style={{
        padding: '12px 16px',
        background: '#6c3cff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '18px',
        color: 'white',
        boxShadow: '0 0 15px #6c3cff88'
      }}
      title="Tillarni almashtirish"
    >
      🔄
    </button>

    <select
      value={targetLang}
      onChange={(e) => setTargetLang(e.target.value)}
      style={{
        flex: 1,
        padding: '12px',
        borderRadius: '10px',
        border: '1px solid #00e5ff55',
        background: '#0b1023',
        color: 'white',
        fontSize: '15px',
        outline: 'none'
      }}
    >
      <option value="uz">O'zbek tili (UZ)</option>
      <option value="en">Ingliz tili (EN)</option>
      <option value="ru">Rus tili (RU)</option>
      <option value="it">Italyan tili (IT)</option>
      <option value="tr">Turk tili (TR)</option>
    </select>
  </div>

  {/* Textarea */}
  <div style={{ marginBottom: '20px' }}>
    <textarea
      rows="5"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Matnni kiriting..."
      style={{
        width: '95%',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #00e5ff55',
        background: '#0b1023',
        color: 'white',
        fontSize: '16px',
        resize: 'none',
        outline: 'none',
        boxShadow: '0 0 10px #00e5ff22'
      }}
    />
  </div>

  {/* Button */}
  <button
    onClick={handleTranslate}
    disabled={loading || !text}
    style={{
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(90deg,#6c3cff,#9b59ff)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '17px',
      fontWeight: 'bold',
      transition: '0.3s',
      opacity: (!text || loading) ? 0.6 : 1,
      boxShadow: '0 0 20px #6c3cff66'
    }}
  >
    {loading ? "Tarjima qilinmoqda..." : "Tarjima qilish"}
  </button>

  {/* Natija */}
  {translatedText && (
    <div style={{
      marginTop: '25px',
      padding: '18px',
      background: '#0b1023',
      borderRadius: '14px',
      border: '1px solid #00e5ff44',
      boxShadow: '0 0 12px #00e5ff22'
    }}>

      <h4 style={{
        margin: '0 0 12px 0',
        color: '#00e5ff',
        fontSize: '20px'
      }}>
        Tarjimasi:
      </h4>

      <p style={{
        fontSize: '18px',
        margin: 0,
        whiteSpace: 'pre-wrap',
        lineHeight: '1.6',
        color: 'white'
      }}>
        {translatedText}
      </p>
      <div className="snonims">
        <p>{sinonim && sinonim}</p>
        <p>{sinonim1 && sinonim1}</p>
        <p>{sinonim2 && sinonim2}</p>
      </div>
    </div>
  )}
</div>
  );
}
export default Translator;

// [https://api.mymemory.translated.net/get](https://api.mymemory.translated.net/get) 
// — bu serverning asosiy manzili (Base URL).
// ? — parametrlarni boshlash belgisi.
// q=Hello World — tarjima qilinishi kerak bo‘lgan matn (q = query).
// & — parametrlarni bir-biriga bog‘lovchi belgi.
// langpair=en|uz — qaysi tildan qaysi tilga tarjima qilish kerakligi
//  (en - inglizcha, | - ajratuvchi, uz - o'zbekcha).