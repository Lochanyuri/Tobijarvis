const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Ensure voices are loaded
    const voices = synth.getVoices();
    const desiredVoice = voices.find(voice => voice.name.includes('Google UK English Male')) || voices[0];
    utterance.voice = desiredVoice;

    utterance.rate = 0.9;  // slightly faster speech
    utterance.volume = 1;  // maximum volume
    utterance.pitch = 0.9;  // slightly higher pitch

    synth.speak(utterance);
}

function wishMe() {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning, Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon, Master...");
    } else {
        speak("Good Evening, Sir...");
    }
}

window.addEventListener('load', () => {
    // Wait for voices to be loaded
    window.speechSynthesis.onvoiceschanged = () => {
        speak("Initializing Jarvis...");
        wishMe();
    };
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes('how are you') || message.includes('are you fine')) {
        speak("Yes, I'm fine.");
    } else if (message.includes('advance system start') || message.includes('advanced system start')) {
        speak("advance mode on");
        document.querySelector(".cotained").style.height = "30%";
        document.querySelector("#audiobx2").play();
        
    } else if (message.includes('advance system close') || message.includes('advanced system close')) {
        speak("advance mode off");
        document.querySelector(".cotained").style.height = "0%";
        document.querySelector("#audiobx2").pause();
        
    } else if (message.includes('change background') || message.includes('change this background')) {
        speak("Changing background");
        document.getElementById("audiobx").play();
        document.getElementById("uiback").src = "giphy.gif";
    } else if (message.includes('how can I help you') || message.includes('what can you do')) {
        speak("You can ask me anything you need assistance with.");
    } else if (message.includes('what time is it') || message.includes('what the time')) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        speak("The current time is " + time);
    } else if (message.includes('are you sure') || message.includes('you sure')) {
        speak("Yes, I am.");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('calculator')) {
        window.open('Calculator://');
        speak("Opening Calculator...");
    } else if (message.includes('open pdf')) {
        window.open('sample.pdf', '_blank');
        speak("Opening PDF...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('do you know')) {
        const query = message.replace(/what is|who is|do you know/i, '').trim();
        if (query === '') {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
            speak("I found some information on Google for " + message);
        } else {
            switch (query.toLowerCase()) {
                case 'naruto':
                    speak("Naruto is a popular Japanese anime and manga series written and illustrated by Masashi Kishimoto. It follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, the Hokage.");
                    break;
                case 'sasuke':
                    speak("Sasuke Uchiha is one of Naruto's teammates and a skilled ninja from the Uchiha clan. He is driven by a desire for vengeance and redemption throughout the series.");
                    break;
                case 'sakura':
                    speak("Sakura Haruno is another of Naruto's teammates, known for her intelligence and medical ninjutsu skills. She has a complex relationship with Naruto and Sasuke.");
                    break;
                case 'kakashi':
                    speak("Kakashi Hatake is Naruto's mentor and a highly respected ninja known for his expertise in combat and the Sharingan eye technique.");
                    break;
                case 'hinata':
                    speak("Hinata Hyuga is a member of the Hyuga clan and Naruto's love interest. She is known for her gentle personality and powerful Byakugan eye technique.");
                    break;
                case 'monster':
                    speak("Monster is a psychological thriller anime that follows Dr. Kenzo Tenma, a neurosurgeon who becomes entangled in a series of murders after saving the life of a young boy who grows up to be a sociopathic killer. The series explores themes of morality, identity, and the nature of evil.");
                    break;
                case 'free fire':
                    speak("Free Fire is a popular battle royale game developed by 111 Dots Studio and published by Garena. In the game, players are dropped onto a deserted island where they must compete to be the last person or team standing. The game features fast-paced 10-minute matches with up to 50 players, a variety of weapons, and a shrinking play zone that forces players into closer encounters. Free Fire is known for its accessible gameplay, diverse character abilities, and frequent updates, making it a favorite among mobile gamers.");
                    break;
                case 'pubg':
                    speak("PUBG (PlayerUnknown's Battlegrounds) is a widely acclaimed battle royale game developed by PUBG Corporation. In PUBG, up to 100 players parachute onto an island and compete to be the last person or team standing. The game features large maps, a variety of weapons and equipment, and a shrinking play zone that intensifies the action as the match progresses. Known for its realistic graphics and tactical gameplay, PUBG has become a major title in the battle royale genre and has influenced many other games in the genre.");
                    break;
                case 'mobile legends':
                    speak("Mobile Legends: Bang Bang is a popular multiplayer online battle arena (MOBA) game developed by Moonton. In the game, players form teams of five and compete to destroy the enemy's base while defending their own. Each player controls a unique hero with distinct abilities and roles, such as tanks, damage dealers, and support. The game features a variety of maps and modes, including classic 5v5 battles, and is known for its fast-paced gameplay, strategic depth, and accessibility on mobile devices.");
                    break;
                case 'coc':
                    speak("Clash of Clans (COC) is a popular mobile strategy game developed by Supercell. In Clash of Clans, players build and upgrade their own village, train armies, and raid other players to gather resources. The game features a variety of units and defenses, as well as clan-based gameplay where players can join or create clans, participate in clan wars, and collaborate with others. Known for its strategic depth and frequent updates, Clash of Clans has become a staple in mobile gaming with its engaging base-building and combat mechanics.");
                    break;
                case 'clash royale':
                    speak("Clash Royale is a popular real-time strategy game developed by Supercell. In Clash Royale, players collect and upgrade cards featuring characters, spells, and buildings from the Clash of Clans universe. Players build decks and engage in strategic battles against opponents, aiming to destroy enemy towers while defending their own. The game features a variety of game modes, including ladder matches and special events, and emphasizes quick decision-making and tactical play. Known for its engaging gameplay and frequent updates, Clash Royale has maintained a strong presence in the mobile gaming scene.");
                    break;
                case 'microsoft':
                    speak("Microsoft Corporation is a multinational technology company founded by Bill Gates and Paul Allen in 1975. It is known for its software products, including the Windows operating system and Microsoft Office suite. Microsoft also develops hardware like the Surface tablets and Xbox gaming consoles. Additionally, the company provides cloud services through Azure and has a significant presence in various technology sectors, including artificial intelligence, gaming, and enterprise solutions. Microsoft is one of the largest and most influential tech companies in the world.");
                    break;
                case 'spacex':
                    speak("SpaceX, or Space Exploration Technologies Corp., is an American aerospace manufacturer and space transport services company founded by Elon Musk in 2002. SpaceX is known for its ambitious goal of reducing space transportation costs and making space exploration more accessible. The company has achieved significant milestones, including the development of the Falcon and Starship rockets, the Dragon spacecraft, and the successful reuse of rockets. SpaceX has also been pivotal in launching satellites, resupplying the International Space Station, and working toward human missions to Mars.");
                    break;
                case 'elon musk':
                    speak("Elon Musk is an influential entrepreneur, engineer, and inventor known for founding and leading several high-profile technology companies. He is the CEO and lead designer of SpaceX, a company focused on space exploration and reducing space travel costs. Musk is also the CEO and product architect of Tesla, Inc., which produces electric vehicles and renewable energy solutions. Additionally, he has been involved in ventures such as Neuralink, aimed at developing brain-computer interfaces, and The Boring Company, which focuses on tunnel construction and infrastructure. Musk is known for his visionary approach to technology and his efforts to address global challenges.");
                    break;
                case 'love':
                    speak("Love is a complex and multifaceted emotion characterized by affection, care, and attachment towards others. It can manifest in various forms, including romantic love between partners, familial love among family members, and platonic love between friends. Love often involves deep emotional connection, commitment, and the desire for the well-being of others. It plays a significant role in human relationships and can influence behavior, happiness, and overall well-being. Philosophers, poets, and scientists have explored love from many perspectives, recognizing it as a fundamental aspect of the human experience.");
                    break;
                case 'ai':
                case 'artificial_intelligence':
                    speak("Artificial Intelligence (AI) refers to the field of computer science dedicated to creating systems that can perform tasks typically requiring human intelligence. These tasks include problem-solving, learning, understanding natural language, and recognizing patterns. AI encompasses various techniques such as machine learning, where systems improve their performance based on data, and neural networks, which are designed to mimic the human brain's structure. AI applications are widespread, including in virtual assistants, autonomous vehicles, and data analysis, and continue to advance rapidly, impacting many aspects of technology and society.");
                    break;
                case 'shikamaru':
                    speak("Shikamaru Nara is a strategic genius and one of Naruto's close friends. He often prefers to avoid troublesome situations but is fiercely loyal.");
                    break;
                case 'rock lee':
                    speak("Rock Lee is a ninja who relies solely on taijutsu (hand-to-hand combat). He is known for his perseverance and determination to become a strong ninja despite lacking ninjutsu and genjutsu skills.");
                    break;
                case 'neji':
                    speak("Neji Hyuga is a skilled member of the Hyuga clan known for his Byakugan eye technique and exceptional talent in taijutsu. He has a complex relationship with Naruto and Hinata.");
                    break;
                case 'gaara':
                    speak("Gaara is the Kazekage of the Hidden Sand Village and a former antagonist turned ally. He possesses the ability to control sand and has a troubled past.");
                    break;
                case 'orochimaru':
                    speak("Orochimaru is a rogue ninja and former member of the Hidden Leaf Village known for his experiments with forbidden techniques and pursuit of immortality.");
                    break;
                case 'jiraiya':
                    speak("Jiraiya is one of the legendary Sannin and Naruto's mentor. He is known for his pervy nature, powerful ninjutsu, and dedication to protecting the Hidden Leaf Village.");
                    break;
                case 'tsunade':
                    speak("Tsunade is one of the legendary Sannin, a skilled medical ninja, and the Fifth Hokage of the Hidden Leaf Village. She is known for her immense strength and gambling habits.");
                    break;
                case 'itachi':
                    speak("Itachi Uchiha is Sasuke's older brother and a former member of the Uchiha clan. He is a highly skilled ninja known for his intelligence and mastery of the Sharingan.");
                    break;
                case 'madara':
                    speak("Madara Uchiha is a legendary shinobi and the founder of the Uchiha clan. He is known for his immense power and influence throughout history.");
                    break;
                case 'minato':
                    speak("Minato Namikaze, also known as the Fourth Hokage, is Naruto's father. He is revered as a hero for his bravery and exceptional skills as a ninja.");
                    break;
                case 'kiba':
                    speak("Kiba Inuzuka is a member of the Inuzuka clan known for his strong bond with his ninja dog, Akamaru. He specializes in taijutsu and beast-like techniques.");
                    break;
                case 'choji':
                    speak("Choji Akimichi is a member of the Akimichi clan known for his large build and love for food. He has the ability to increase his body size and strength using secret clan techniques.");
                    break;
                case 'ino':
                    speak("Ino Yamanaka is a member of the Yamanaka clan known for her skills in mind-altering techniques and friendship with Sakura. She later becomes a medical ninja.");
                    break;
                case 'kurenai':
                    speak("Kurenai Yuhi is a jonin-level kunoichi known for her genjutsu skills and role as Team 8's leader. She has a close relationship with Asuma Sarutobi.");
                    break;
                case 'asuma':
                    speak("Asuma Sarutobi is a jonin-level ninja known for his use of trench knives and his role as Team 10's leader. He is the son of the Third Hokage.");
                    break;
                case 'tenten':
                    speak("Tenten is a member of Team Guy known for her expertise in weaponry and ninja tools. She aims to become a legendary kunoichi.");
                    break;
                case 'guy':
                    speak("Might Guy, also known as Guy Sensei, is the leader of Team Guy and a taijutsu master. He is known for his unwavering dedication and belief in hard work.");
                    break;
                case 'kisame':
                    speak("Kisame Hoshigaki is a former member of the Seven Ninja Swordsmen of the Mist and a partner of Itachi Uchiha. He possesses immense chakra and is known for his shark-like appearance.");
                    break;
                case 'jugo':
                    speak("Jugo is a member of Sasuke's team and a descendant of the Sage of Six Paths. He has the ability to absorb natural energy and transform into a berserk state.");
                    break;
                case 'suigetsu':
                    speak("Suigetsu Hozuki is a member of Sasuke's team and a descendant of the Hozuki clan. He has the ability to liquefy his body at will.");
                    break;
                case 'karui':
                    speak("Karui is a kunoichi from the Hidden Cloud Village and a member of Team Samui. She has a fiery personality and wields the Lightning Release.");
                    break;
                case 'obito':
                    speak("Obito Uchiha, also known as Tobi, is a former member of Team Minato and later becomes the masked leader of the Akatsuki. He plays a pivotal role in the series.");
                    break;
                default:
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
                    speak("I found some information for " + message + " on Google.");
                    break;
            }
        }
    }
}