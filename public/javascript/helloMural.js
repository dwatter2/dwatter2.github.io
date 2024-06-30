const helloWords = ["Hallo", "Përshëndetje", "እው ሰላም ነው", "مرحبًا", "Barev", "Kamisaki", "Salam", "Kaixo", "Вітаю", "হ্যালো", "Zdravo",
    "Здравейте", "ဟယ်လို", "你好", "Hola", "Kamusta", "Moni", "Bonghjornu", "Zdravo", "Ahoj", "Hej", "Hallo", "Hello", "Tere", "Hello",
    "سلام", "Bula", "Kumusta", "Hei", "Bonjour", "Dia dhuit", "Ola", "გამარჯობა", "Guten tag", "γεια", "Mba'éichapa", "Bonjou", "Aloha",
    "שלום", "Namaste", "नमस्ते", "Nyob zoo", "Szia", "Halló", "Ndewo", "Hello", "Halo", "Ciao", "こんにちは", "Сәлеметсіз бе", "សួស្តី",
    "Mwaramutse", "안녕하세요", "Slav", "ສະບາຍດີ", "Salve", "Sveika", "Sveiks", "Sveiki", "Moien", "Salama", "Selamat pagi", "Bongu",
    "你好", "Kia ora", "नमस्कार", "сайн уу", "Niltze Tialli Pialli", "Ya’at’eeh", "नमस्कार", "Hei", "سلام", "Cześć", "Olá", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    "Akkam", "Allianchu", "Bunâ", "Привет", "Talofa", "Thobela", "Здраво", "Dumela", "Ahoj", "Zdravo", "Hello", "Hola", "Jambo",
    "Hallå", "Kamusta", "Ia Orana", "Li-hó", "வணக்கம்", "สวัสดี", "Tashi delek", "Mālō e lelei", "Avuxeni", "Merhaba", "привіт",
    "السلام عليكم", "Salom", "Xin chào", "Helo", "Molo", 
    "Iwi selami newi", "Marhaba", "Vitaju", "Hyālō", "Zdraveĭte", "Haallo",
    "Nǐ hǎo", "Salām", "Gamarjoba", "Geia", "Shalom", "Konnichiwa", "Sälemetsiz be", "Suostei", "Anyeong haseyo", "Sabaidi",
    "Nǐ hǎo", "Namaskāra", "Sain uu", "Namaskāra", "Salam", "Sata srī akāla", "Privet", "Zdravo", "Vanakkam", "S̄wạs̄dī", "Privit",
    "Assalāmu Alaykum", "Hi", "Howdy", "Hey"
];

const helloWordsShort = ["Hello", "Bonjour", "Hola", "Privet", "Nǐ hǎo", "Ciao", "Konnichiwa",
    "Guten Tag", "Oi", "Anyoung haseyo", "Asalaam alaikum", "Hej", "Habari", "Hallo",
    "Yassou", "Cześć", "Halo", "Namaste", "Namaskar", "Hei", "Merhaba", "Shalom"];

//randomNum start
let randomNum = (Math.random() * 135).toFixed(0);
let count = 1;

//find context
const mainPage = document.getElementById("main-index");

function SpawnWord() {
    let word = document.createElement("p");
    word.setAttribute("class", "hello-word");
    word.setAttribute("id", `hello_${count}`);
    count += 1;
    word.innerHTML = helloWords[(Math.random() * 135).toFixed(0)];
    
    let x = ((Math.random() * 80) + 10);
    let y = ((Math.random() * 85) + 5);

    word.setAttribute("style", `top: ${x}vh; left: ${y}vw`);
    mainPage.appendChild(word);
}

function KillWord() {
    for(let i = 0; i < count; i++)
        {
            let temp = document.getElementById(`hello_${i}`);
            if(temp != null)
                {
                    if(temp.style.opacity == 0)
                        temp.style.opacity = 1;
                    else if(temp.style.opacity == 0.02)
                        temp.remove();
                    else
                        temp.style.opacity = temp.style.opacity - 0.02;
                }
        }
}

timerInterval = setInterval(SpawnWord, 1000);
timerInterval = setInterval(KillWord, 200);

//TODO 2 things
// 1. Add typewriter effect to words (either with js or css)
// 2. Add stricter location rules to word spawn
// 3. (optional) fix timing to get more words on screen at one time (add decay delay?)