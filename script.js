/* TEEN2TEEN Practice Hub - Main Script */

const unitsData = {
  5: [
    { q: "What's your name? Do you have a nickname?", a: "My name is Ehsan. My nickname is Esi.", qFa: "اسمت چیه؟ آیا اسم مستعار داری؟", aFa: "اسم من احسان است. اسم مستعارم اِسی است." },
    { q: "Who's your favorite actor? What's he/she like?", a: "My favorite actor is Tom Cruise. He is handsome and talented.", qFa: "بازیگر مورد علاقت کیه؟ اون چطوره؟", aFa: "بازیگر مورد علاقه‌ام تام کروز است. او خوش‌تیپ و بااستعداد است." },
    { q: "Do you have any sisters? Is your younger/older sister short?", a: "Yes, I have two sisters. They are short.", qFa: "خواهر داری؟ خواهرت کوچیک‌تر/بزرگ‌تر کوتاهه؟", aFa: "بله، دو تا خواهر دارم. اونا کوتاه هستن." },
    { q: "Who's pretty/handsome in your class?", a: "My friend is handsome.", qFa: "تو کلاست کی خوشگله / خوش‌تیپه؟", aFa: "دوست من خوش‌تیپه." },
    { q: "Are your parents tall? How about your grandparents?", a: "Yes, my parents are tall. My grandparents are short.", qFa: "والدینت قدبلند هستن؟ پدربزرگ و مادربزرگت چطور؟", aFa: "بله، والدینم قدبلند هستن. پدربزرگ و مادربزرگم کوتاه هستن." },
    { q: "Where do you live?", a: "I live in Iran.", qFa: "کجا زندگی می‌کنی؟", aFa: "من تو ایران زندگی می‌کنم." },
    { q: "Who do you think is a famous actor? A pretty singer?", a: "I think Tom Cruise is a famous actor. Taylor Swift is a pretty singer.", qFa: "فکر می‌کنی کدوم بازیگر معروفه؟ کدوم خواننده خوشگله؟", aFa: "فکر می‌کنم تام کروز بازیگر معروفیه. تیلور سوئیفت خواننده خوشگلیه." },
    { q: "What color are your father's eyes?", a: "My father's eyes are brown.", qFa: "چشم‌های پدرت چه رنگیه؟", aFa: "چشم‌های پدرم قهوه‌ای هستن." },
    { q: "What does your new classmate look like?", a: "He is tall and handsome. He has black hair.", qFa: "همکلاسی جدیدت چه شکلیه؟", aFa: "اون قدبلند و خوش‌تیپه. موهای مشکی داره." },
    { q: "What's your hairstyle like?", a: "I have short, black, straight hair.", qFa: "مدل موهات چطوره؟", aFa: "من موهای کوتاه، مشکی و صاف دارم." },
    { q: "Who's a very important person to you in your life? Why?", a: "My mother is very important to me because I love her very much.", qFa: "کدوم شخص تو زندگیت خیلی مهمه؟ چرا؟", aFa: "مادرم برای من خیلی مهمه چون خیلی دوستش دارم." }
  ],
  6: [
    { q: "How old is your English teacher? Can you guess?", a: "I think she is about thirty years old.", qFa: "معلم انگلیسی‌ات چند سالشه؟ می‌تونی حدس بزنی؟", aFa: "فکر می‌کنم حدود سی سالشه." },
    { q: "When's your mother's birthday?", a: "My mother's birthday is in May.", qFa: "تولد مادرت کیه؟", aFa: "تولد مادرم تو ماه مِی (اردیبهشت/خرداد) هست." },
    { q: "What's your favorite song?", a: "My favorite song is a pop song.", qFa: "آهنگ مورد علاقت چیه؟", aFa: "آهنگ مورد علاقه‌ام یک آهنگ پاپ هست." },
    { q: "Name the seasons of the year.", a: "Spring, summer, fall, and winter.", qFa: "فصل‌های سال رو نام ببر.", aFa: "بهار، تابستان، پاییز و زمستان." },
    { q: "What month comes after March?", a: "April comes after March.", qFa: "ماه بعد از مارچ چیه؟", aFa: "آپریل بعد از مارچ میاد." },
    { q: "Name the months having 31/30/29 days.", a: "31 days: January, March, May, July, August, October, and December. 30 days: April, June, September, and November. 29 days: February in a leap year.", qFa: "ماه‌هایی که ۳۱ / ۳۰ / ۲۹ روز دارن رو نام ببر.", aFa: "۳۱ روزه: ژانویه، مارچ، مِی، جولای، آگوست، اکتبر و دسامبر. ۳۰ روزه: آپریل، ژوئن، سپتامبر و نوامبر. ۲۹ روزه: فوریه در سال کبیسه." },
    { q: "What months are in spring/summer/fall/winter?", a: "Spring: March, April, and May. Summer: June, July, and August. Fall: September, October, and November. Winter: December, January, and February.", qFa: "کدوم ماه‌ها تو بهار/تابستان/پاییز/زمستان هستن؟", aFa: "بهار: مارچ، آپریل و مِی. تابستان: ژوئن، جولای و آگوست. پاییز: سپتامبر، اکتبر و نوامبر. زمستان: دسامبر، ژانویه و فوریه." },
    { q: "What day is your next exam?", a: "My next exam is on Monday.", qFa: "امتحان بعدی‌ات چه روزیه؟", aFa: "امتحان بعدی‌ام دوشنبه‌ست." },
    { q: "What time does your math class start?", a: "My math class starts at eight o'clock.", qFa: "کلاس ریاضی‌ات ساعت چند شروع می‌شه؟", aFa: "کلاس ریاضی‌ام ساعت هشت شروع می‌شه." },
    { q: "Who's your favorite player?", a: "My favorite player is Cristiano Ronaldo. He is a great football player.", qFa: "بازیکن مورد علاقت کیه؟", aFa: "بازیکن مورد علاقه‌ام کریستیانو رونالدو است. اون یک بازیکن فوتبال عالی هست." }
  ],
  7: [
    { q: "What's your home like?", a: "My home is beautiful and comfortable. It has three bedrooms.", qFa: "خونه‌ات چطوره؟", aFa: "خونه‌ام قشنگ و راحته. سه تا اتاق خواب داره." },
    { q: "How many bathrooms are there in your house?", a: "There are two bathrooms in my house.", qFa: "تو خونه‌ات چند تا حموم هست؟", aFa: "تو خونه‌ام دو تا حموم هست." },
    { q: "Can you name two pieces of furniture in your kitchen/bedroom?", a: "There is a table and a refrigerator in the kitchen.", qFa: "می‌تونی دو تا وسیله تو آشپزخونه/اتاق خوابت نام ببری؟", aFa: "تو آشپزخونه میز و یخچال هست." },
    { q: "What are different rooms in a house?", a: "Living room, bedroom, kitchen, bathroom, and dining room.", qFa: "اتاق‌های مختلف یه خونه چیا هستن؟", aFa: "اتاق نشیمن، اتاق خواب، آشپزخونه، حموم و اتاق ناهارخوری." },
    { q: "Is your pencil in your backpack? Where's my tablet?", a: "Yes, it is. Your tablet is on the desk.", qFa: "مدادتو تو کوله‌پشتی‌اته؟ تبلت من کجاست؟", aFa: "بله هست. تبلتت روی میزه." },
    { q: "What can you see on the door? Under the desk?", a: "I can see a picture on the door. I can see a bag under the desk.", qFa: "روی در چی می‌بینی؟ زیر میز چی؟", aFa: "روی در یه عکس می‌بینم. زیر میز یه کیف می‌بینم." },
    { q: "Can you tell me where my book is?", a: "It's on the table.", qFa: "می‌تونی بگی کتابم کجاست؟", aFa: "روی میزه." },
    { q: "Where are your grandparents now?", a: "They are at home.", qFa: "پدربزرگ و مادربزرگت الان کجان؟", aFa: "اونا خونه هستن." },
    { q: "What are bad rules for a classroom?", a: "Talking loudly, run, and using cellphones.", qFa: "قوانین بد برای کلاس چیا هستن؟", aFa: "بلند حرف زدن، دویدن و استفاده از موبایل." },
    { q: "What do you say to a classmate who is very quiet?", a: "Come on! Speak louder, please.", qFa: "به همکلاسی که خیلی ساکته چی می‌گی؟", aFa: "بیا دیگه! لطفاً بلندتر حرف بزن." },
    { q: "What should we say to a classmate who speaks English in the class?", a: "Great job! Keep speaking English.", qFa: "به همکلاسی که تو کلاس انگلیسی حرف می‌زنه باید چی بگیم؟", aFa: "عالی بود! به حرف زدن انگلیسی ادامه بده." },
    { q: "If a person is using his/her cellphone in the class, you say ...", a: "Please don't use your cellphone in class.", qFa: "اگه کسی تو کلاس موبایلش رو استفاده می‌کنه، می‌گی ...", aFa: "لطفاً تو کلاس از موبایلت استفاده نکن." },
    { q: "What does your teacher say when you do your homework early?", a: "Very good! Well done!", qFa: "وقتی مشقت رو زود انجام می‌دی معلمت چی می‌گه؟", aFa: "خیلی خوب! آفرین!" }
  ],
  8: [
    { q: "What's the weather like this week?", a: "It's sunny and a little cold this week.", qFa: "هوا این هفته چطوره؟", aFa: "این هفته آفتابی و کمی سرده." },
    { q: "What can you do on a rainy/snowy day? In a hot summer?", a: "I can read a book on a rainy day. I can make a snowman on a snowy day. In a hot summer, I can go swimming.", qFa: "تو روز بارونی/برفی چیکار می‌تونی بکنی؟ تو تابستون داغ چطور؟", aFa: "تو روز بارونی می‌تونم کتاب بخونم. تو روز برفی می‌تونم آدم برفی درست کنم. تو تابستون داغ می‌تونم برم شنا." },
    { q: "What's your favorite season? Why?", a: "My favorite season is spring because the weather is beautiful.", qFa: "فصل مورد علاقت چیه؟ چرا؟", aFa: "فصل مورد علاقه‌ام بهار هست چون هوا قشنگه." },
    { q: "What's the weather usually like in Tehran?", a: "It's usually hot in summer and cold in winter.", qFa: "هوا معمولاً تو تهران چطوره؟", aFa: "معمولاً تو تابستون داغ و تو زمستون سرده." },
    { q: "What do you usually do in your free time?", a: "I usually watch movies, listen to music, and play football.", qFa: "معمولاً تو وقت آزادت چیکار می‌کنی؟", aFa: "معمولاً فیلم می‌بینم، موسیقی گوش می‌دم و فوتبال بازی می‌کنم." },
    { q: "What activities will you suggest if the weather is cold and rainy?", a: "I suggest watching movies, reading books, and playing board games.", qFa: "اگه هوا سرد و بارونی باشه چه فعالیت‌هایی پیشنهاد می‌کنی؟", aFa: "پیشنهاد می‌کنم فیلم دیدن، کتاب خوندن و بازی‌های رومیزی." },
    { q: "What activities won't you suggest if the weather is sunny?", a: "I won't suggest staying at home or watching TV all day.", qFa: "اگه هوا آفتابی باشه چه فعالیت‌هایی پیشنهاد نمی‌کنی؟", aFa: "پیشنهاد نمی‌کنم خونه موندن یا تمام روز تلویزیون دیدن." },
    { q: "How do you ask your friend to play board games with you?", a: "Would you like to play board games with me?", qFa: "چطور از دوستت می‌خوای که باهات بازی رومیزی بازی کنه؟", aFa: "دوست داری با من بازی رومیزی بازی کنی؟" },
    { q: "What kind of food do you like?", a: "I like pizza and traditional food.", qFa: "چه نوع غذایی دوست داری؟", aFa: "پیتزا و غذای سنتی دوست دارم." },
    { q: "What do you do when you're tired?", a: "I usually take a rest and listen to music.", qFa: "وقتی خسته‌ای چیکار می‌کنی؟", aFa: "معمولاً استراحت می‌کنم و موسیقی گوش می‌دم." },
    { q: '"Let\'s stay outside." Make it negative.', a: "Let's not stay outside.", qFa: "«بیا بیرون بمونیم.» رو منفی کن.", aFa: "بیا بیرون نمونیم. (Let's not stay outside.)" }
  ]
};

let currentUnit = null;
let currentQuestion = null;
let score = { correct: 0, total: 0 };
let preferredVoice = null;

// Find a good male English voice
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  // Prefer male English voices
  preferredVoice = voices.find(v => 
    v.lang.startsWith('en') && 
    (v.name.toLowerCase().includes('male') || 
     v.name.toLowerCase().includes('david') || 
     v.name.toLowerCase().includes('mark') || 
     v.name.toLowerCase().includes('james') ||
     v.name.toLowerCase().includes('daniel') ||
     v.name.toLowerCase().includes('google us english') ||
     v.name.toLowerCase().includes('microsoft david') ||
     v.name.toLowerCase().includes('alex'))
  ) || voices.find(v => v.lang.startsWith('en-US')) 
    || voices.find(v => v.lang.startsWith('en')) 
    || voices[0];
}

if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

// Speak question + answer with male voice
function speakText(question, answer, btn) {
  if (!window.speechSynthesis) {
    alert('مرورگر شما از خواندن صدا پشتیبانی نمی‌کند.');
    return;
  }
  
  // Stop any ongoing speech
  speechSynthesis.cancel();
  
  // Remove speaking class from all listen buttons
  document.querySelectorAll('.listen-btn').forEach(b => b.classList.remove('speaking'));
  
  if (btn) btn.classList.add('speaking');
  
  const text = `Question: ${question}. Answer: ${answer}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 0.95;
  utterance.volume = 1;
  
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }
  
  utterance.onend = () => {
    if (btn) btn.classList.remove('speaking');
  };
  
  utterance.onerror = () => {
    if (btn) btn.classList.remove('speaking');
  };
  
  speechSynthesis.speak(utterance);
}

// Toggle Persian for a single card
function toggleCardPersian(btn) {
  const card = btn.closest('.qa-card');
  const persian = card.querySelector('.persian');
  const isShow = persian.classList.toggle('show');
  btn.classList.toggle('active', isShow);
  btn.innerHTML = isShow 
    ? 'Hide Persian' 
    : 'Show Persian';
}

// Create floating letters
function createFloatingLetters() {
  const container = document.querySelector('.bg-animation');
  if (!container) return;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (let i = 0; i < 24; i++) {
    const span = document.createElement('span');
    span.className = 'floating-letter';
    span.textContent = letters[Math.floor(Math.random() * letters.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.top = Math.random() * 100 + '%';
    span.style.animationDuration = (12 + Math.random() * 14) + 's';
    span.style.animationDelay = (Math.random() * 5) + 's';
    span.style.fontSize = (1.4 + Math.random() * 2.2) + 'rem';
    container.appendChild(span);
  }
}

function normalize(str) {
  return str.toLowerCase().replace(/[.,!?'"]/g, '').replace(/\s+/g, ' ').trim();
}

function isAnswerCorrect(userAns, correctAns) {
  const u = normalize(userAns);
  const c = normalize(correctAns);
  if (!u) return false;
  if (u === c) return true;
  const correctWords = c.split(' ').filter(w => w.length > 2);
  let matches = 0;
  correctWords.forEach(w => { if (u.includes(w)) matches++; });
  return matches >= Math.ceil(correctWords.length * 0.55);
}

function nextQuizQuestion() {
  if (!currentUnit || !unitsData[currentUnit]) return;
  const data = unitsData[currentUnit];
  const idx = Math.floor(Math.random() * data.length);
  currentQuestion = data[idx];
  document.getElementById('quizQuestion').textContent = currentQuestion.q;
  document.getElementById('quizInput').value = '';
  const fb = document.getElementById('quizFeedback');
  fb.style.display = 'none';
  fb.className = 'quiz-feedback';
}

function checkAnswer() {
  const input = document.getElementById('quizInput');
  const feedback = document.getElementById('quizFeedback');
  const userAns = input.value.trim();
  if (!userAns) {
    feedback.textContent = 'Please write an answer!';
    feedback.className = 'quiz-feedback wrong';
    feedback.style.display = 'block';
    return;
  }
  score.total++;
  const correct = isAnswerCorrect(userAns, currentQuestion.a);
  if (correct) {
    score.correct++;
    feedback.innerHTML = `✅ Great job! Correct!<br><small>Answer: ${currentQuestion.a}</small>`;
    feedback.className = 'quiz-feedback correct';
    launchConfetti();
  } else {
    feedback.innerHTML = `❌ Not quite. The correct answer is:<br><strong>${currentQuestion.a}</strong>`;
    feedback.className = 'quiz-feedback wrong';
  }
  feedback.style.display = 'block';
  updateScore();
}

function updateScore() {
  const el = document.getElementById('scoreDisplay');
  if (el) {
    el.innerHTML = `
      <span class="score-item">Correct: <strong>${score.correct}</strong></span>
      <span class="score-item">Total: <strong>${score.total}</strong></span>
      <span class="score-item">Score: <strong>${score.total ? Math.round((score.correct / score.total) * 100) : 0}%</strong></span>
    `;
  }
}

function launchConfetti() {
  const canvas = document.getElementById('confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#6366f1', '#22d3ee', '#f472b6', '#34d399', '#fbbf24', '#a5b4fc'];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 5 + Math.random() * 7,
      h: 5 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.y += p.speed;
      p.rot += p.rotSpeed;
      p.x += Math.sin(frame / 20) * 0.5;
      if (p.y < canvas.height + 20) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });
    frame++;
    if (alive && frame < 110) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

function initUnitPage(unitNum) {
  currentUnit = unitNum;
  score = { correct: 0, total: 0 };
  updateScore();
  nextQuizQuestion();
  const input = document.getElementById('quizInput');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkAnswer();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Always start at the top of the page
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  createFloatingLetters();
  loadVoices();
  const unitEl = document.body.dataset.unit;
  if (unitEl) initUnitPage(parseInt(unitEl));
});

// Also force top when navigating via links (some browsers keep scroll)
window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});
