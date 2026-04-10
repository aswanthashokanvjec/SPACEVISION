/* ============================================
   PLANET EXPLORER — MAIN SCRIPT
   ============================================ */

// ==========================================
// PLANET DATA
// ==========================================
const PLANETS = [
    {
        name: "Mercury",
        tagline: "The Swift Messenger",
        type: "Terrestrial Planet",
        color1: "#9e9e9e", color2: "#616161", color3: "#424242",
        gradient: "radial-gradient(circle at 35% 35%, #bdbdbd 0%, #9e9e9e 25%, #757575 50%, #424242 80%, #212121 100%)",
        size: 8, orbitRadius: 55, orbitSpeed: 18, hasRing: false,
        gravity: "3.7 m/s²",
        temperature: "167°C avg",
        moons: "0",
        diameter: "4,879 km",
        dayLength: "59 Earth days",
        yearLength: "88 Earth days",
        overview: "Mercury is the smallest planet in our solar system and the closest to the Sun. It's only slightly larger than Earth's Moon. Despite being nearest to the Sun, Mercury is not the hottest planet — that title goes to Venus. Mercury has a very thin atmosphere called an exosphere, made up of atoms blasted off its surface by solar wind and meteoroids.",
        atmosphere: "Mercury has virtually no atmosphere. Its thin exosphere is composed of oxygen, sodium, hydrogen, helium, and potassium. The atoms are continuously lost to space and replenished from the solar wind and meteoroid impacts. The lack of atmosphere means Mercury cannot retain heat, leading to extreme temperature variations.",
        exploration: "NASA's MESSENGER spacecraft orbited Mercury from 2011 to 2015, mapping the entire surface. BepiColombo, a joint European-Japanese mission launched in 2018, is currently on its way to Mercury. Mariner 10 was the first spacecraft to visit Mercury in 1974-1975, completing three flybys.",
        funFacts: [
            "A year on Mercury is just 88 Earth days, but a day lasts 59 Earth days!",
            "Mercury has ice in permanently shadowed craters at its poles.",
            "Mercury shrinks! It has contracted by more than 14 km in diameter as its core cooled.",
            "Mercury has no moons and no rings.",
            "Despite being closest to the Sun, Mercury is NOT the hottest planet."
        ],
        surface: null,
        hotspots: []
    },
    {
        name: "Venus",
        tagline: "Earth's Evil Twin",
        type: "Terrestrial Planet",
        color1: "#ffb74d", color2: "#e09040", color3: "#b06020",
        gradient: "radial-gradient(circle at 35% 35%, #ffe0b2 0%, #ffb74d 25%, #e09040 50%, #b06020 80%, #7a4020 100%)",
        size: 14, orbitRadius: 85, orbitSpeed: 26, hasRing: false,
        gravity: "8.87 m/s²",
        temperature: "464°C avg",
        moons: "0",
        diameter: "12,104 km",
        dayLength: "243 Earth days",
        yearLength: "225 Earth days",
        overview: "Venus is the second planet from the Sun and Earth's closest neighbor. Often called Earth's 'twin' because of similar size, Venus is a hellish world with surface temperatures hot enough to melt lead. It spins backward compared to most planets, and its thick atmosphere traps heat in a runaway greenhouse effect. Venus is the brightest natural object in our night sky after the Moon.",
        atmosphere: "Venus has an incredibly dense atmosphere, about 90 times the pressure of Earth's surface. It's composed of 96.5% carbon dioxide and 3.5% nitrogen, with clouds of sulfuric acid. This creates an extreme greenhouse effect, making Venus the hottest planet in our solar system despite being farther from the Sun than Mercury.",
        exploration: "The Soviet Venera program landed multiple spacecraft on Venus between 1970-1985, providing the only surface photos ever taken. NASA's Magellan orbiter mapped 98% of Venus's surface using radar in the early 1990s. NASA announced two new Venus missions — VERITAS and DAVINCI — planned for the late 2020s.",
        funFacts: [
            "Venus rotates backwards — the Sun rises in the west and sets in the east!",
            "A day on Venus is longer than its year.",
            "Venus is the hottest planet at 464°C, even hotter than Mercury.",
            "It rains sulfuric acid on Venus, but the drops evaporate before reaching the ground.",
            "Venus has over 1,600 volcanoes, more than any other planet."
        ],
        surface: null,
        hotspots: []
    },
    {
        name: "Earth",
        tagline: "The Blue Marble",
        type: "Terrestrial Planet",
        color1: "#4fc3f7", color2: "#2e7d32", color3: "#1565c0",
        gradient: "radial-gradient(circle at 35% 35%, #81d4fa 0%, #4fc3f7 20%, #2e7d32 45%, #1565c0 70%, #0d47a1 100%)",
        size: 15, orbitRadius: 120, orbitSpeed: 35, hasRing: false,
        gravity: "9.81 m/s²",
        temperature: "15°C avg",
        moons: "1",
        diameter: "12,742 km",
        dayLength: "24 hours",
        yearLength: "365.25 days",
        overview: "Earth is the third planet from the Sun and the only known world to harbor life. Our planet's perfect distance from the Sun, liquid water, and protective atmosphere create the ideal conditions for life to thrive. About 71% of Earth's surface is covered in water, giving it the iconic blue appearance visible from space. Earth's magnetic field shields us from harmful solar radiation.",
        atmosphere: "Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and 1% other gases including argon and carbon dioxide. The atmosphere is divided into five layers: troposphere, stratosphere, mesosphere, thermosphere, and exosphere. The ozone layer in the stratosphere protects life from harmful ultraviolet radiation.",
        exploration: "Earth is the most studied planet in our solar system. Thousands of satellites orbit Earth, studying weather, climate, oceans, and land surfaces. The International Space Station has been continuously occupied since November 2000. NASA's Earth Observing System provides comprehensive data about our planet's systems.",
        funFacts: [
            "Earth is the only planet not named after a Greek or Roman god.",
            "Earth's rotation is gradually slowing — days were once about 22 hours long.",
            "The deepest point on Earth is the Mariana Trench at 11,034 meters below sea level.",
            "Earth is the densest planet in the solar system.",
            "Lightning strikes Earth about 8 million times per day."
        ],
        surface: "assets/earth_surface.png",
        hotspots: [
            { x: 25, y: 40, name: "Mariana Trench", desc: "The deepest point on Earth at 11,034m below sea level. The water pressure is over 1,000 times atmospheric pressure." },
            { x: 60, y: 30, name: "Himalayan Range", desc: "Home to Mount Everest (8,849m), the tallest mountain on Earth. Still growing by about 1cm per year." },
            { x: 75, y: 55, name: "Great Barrier Reef", desc: "The world's largest coral reef system, visible from space. It stretches over 2,300 km and hosts incredible biodiversity." }
        ]
    },
    {
        name: "Mars",
        tagline: "The Red Planet",
        type: "Terrestrial Planet",
        color1: "#e64a19", color2: "#bf360c", color3: "#8b2500",
        gradient: "radial-gradient(circle at 35% 35%, #ff8a65 0%, #e64a19 25%, #bf360c 50%, #8b2500 80%, #4e1400 100%)",
        size: 12, orbitRadius: 160, orbitSpeed: 45, hasRing: false,
        gravity: "3.72 m/s²",
        temperature: "-65°C avg",
        moons: "2",
        diameter: "6,779 km",
        dayLength: "24.6 hours",
        yearLength: "687 Earth days",
        overview: "Mars is the fourth planet from the Sun and the second-smallest in our solar system. Known as the Red Planet due to iron oxide (rust) on its surface, Mars has long captured human imagination as a potential second home. It has seasons, polar ice caps, canyons, and extinct volcanoes, including Olympus Mons — the tallest volcano and mountain in the solar system.",
        atmosphere: "Mars has a thin atmosphere composed of 95.3% carbon dioxide, 2.7% nitrogen, and 1.6% argon. Surface pressure is less than 1% of Earth's. The thin atmosphere cannot support liquid water on the surface and provides little protection from solar radiation. Dust storms on Mars can engulf the entire planet.",
        exploration: "Mars is the most explored planet besides Earth. NASA's Perseverance rover and Ingenuity helicopter are currently active on the surface. The Curiosity rover has been exploring since 2012. Multiple orbiters including MAVEN, Mars Odyssey, and the Mars Reconnaissance Orbiter study the planet from above. SpaceX aims to send humans to Mars in the coming decade.",
        funFacts: [
            "Olympus Mons on Mars is the tallest volcano in the solar system — 3x taller than Everest!",
            "Mars has the largest canyon system: Valles Marineris stretches 4,000 km.",
            "A Martian day (sol) is only 37 minutes longer than an Earth day.",
            "Mars has two tiny moons: Phobos and Deimos, likely captured asteroids.",
            "Mars sunsets appear blue due to the way fine dust particles scatter light."
        ],
        surface: "assets/mars_surface.png",
        hotspots: [
            { x: 20, y: 35, name: "Olympus Mons", desc: "The largest volcano in the solar system, rising 21.9 km above the surface. It's nearly 3x the height of Mount Everest." },
            { x: 55, y: 50, name: "Valles Marineris", desc: "A canyon system stretching 4,000 km — long enough to span the contiguous United States. Up to 7 km deep." },
            { x: 80, y: 30, name: "Jezero Crater", desc: "An ancient lake bed where NASA's Perseverance rover is searching for signs of ancient microbial life." }
        ]
    },
    {
        name: "Jupiter",
        tagline: "The King of Planets",
        type: "Gas Giant",
        color1: "#d4a574", color2: "#a67c52", color3: "#8d6e63",
        gradient: "repeating-linear-gradient(170deg, #e8c9a0 0%, #d4a574 8%, #a67c52 15%, #c4956a 20%, #e8c080 25%, #b8845c 32%, #d4a574 40%, #8d6e63 48%, #c4956a 55%, #d4aa78 62%, #e8c9a0 70%)",
        size: 28, orbitRadius: 220, orbitSpeed: 60, hasRing: false,
        gravity: "24.79 m/s²",
        temperature: "-110°C avg",
        moons: "95",
        diameter: "139,820 km",
        dayLength: "9.9 hours",
        yearLength: "11.86 years",
        overview: "Jupiter is the largest planet in our solar system — more than twice as massive as all other planets combined. This gas giant has no solid surface; beneath its swirling clouds of ammonia and water lies a deep ocean of liquid metallic hydrogen. Jupiter's Great Red Spot is a storm larger than Earth that has raged for over 350 years. It acts as a cosmic vacuum cleaner, protecting inner planets from asteroid impacts.",
        atmosphere: "Jupiter's atmosphere is composed of about 90% hydrogen and 10% helium, with traces of ammonia, methane, and water vapor. Wind speeds can reach 620 km/h. The atmosphere features distinct colored bands and zones created by powerful jet streams. The Great Red Spot is an anticyclonic storm larger than Earth.",
        exploration: "NASA's Juno spacecraft has been orbiting Jupiter since 2016, studying its composition, gravity, and magnetic field. The Galileo spacecraft orbited Jupiter from 1995-2003 and deployed a probe into its atmosphere. The upcoming Europa Clipper mission will study Jupiter's moon Europa for signs of habitablity.",
        funFacts: [
            "Jupiter is so massive it doesn't orbit the Sun — they orbit a shared center of mass!",
            "Jupiter's Great Red Spot could fit 2-3 Earths inside it.",
            "Jupiter has the shortest day of any planet: only 9 hours 55 minutes.",
            "Jupiter has 95 known moons, including the four large Galilean moons.",
            "Jupiter's magnetic field is 20,000 times stronger than Earth's."
        ],
        surface: "assets/jupiter_clouds.png",
        hotspots: [
            { x: 40, y: 45, name: "Great Red Spot", desc: "A persistent anticyclonic storm, the largest in the solar system. It's been raging for at least 350 years and is larger than Earth." },
            { x: 70, y: 25, name: "Cloud Bands", desc: "Jupiter's visible bands are created by powerful jet streams that separate regions of rising and sinking gas at different temperatures." },
            { x: 25, y: 70, name: "South Polar Cyclones", desc: "A geometric pattern of multiple cyclones near Jupiter's south pole, discovered by the Juno spacecraft." }
        ]
    },
    {
        name: "Saturn",
        tagline: "The Ringed Wonder",
        type: "Gas Giant",
        color1: "#f0d890", color2: "#c8a860", color3: "#a08040",
        gradient: "repeating-linear-gradient(175deg, #f5e6b8 0%, #f0d890 10%, #c8a860 20%, #d4b878 30%, #f0d890 40%, #c0a050 50%, #d8c088 60%, #f0d890 70%)",
        size: 24, orbitRadius: 280, orbitSpeed: 80, hasRing: true,
        gravity: "10.44 m/s²",
        temperature: "-140°C avg",
        moons: "146",
        diameter: "116,460 km",
        dayLength: "10.7 hours",
        yearLength: "29.46 years",
        overview: "Saturn is the sixth planet from the Sun and the second-largest in our solar system. It's best known for its spectacular ring system, made of billions of chunks of ice and rock. Saturn is a gas giant, composed mostly of hydrogen and helium. It's so light that it would float in water if you could find a bathtub big enough! Saturn has 146 known moons, including Titan — the only moon with a thick atmosphere.",
        atmosphere: "Saturn's atmosphere is composed of approximately 96% hydrogen and 3% helium. Wind speeds near the equator can reach 1,800 km/h — among the fastest in the solar system. Saturn features hexagonal-shaped jet stream patterns at its north pole, a unique phenomenon in our solar system. The atmosphere features bands similar to Jupiter but more muted in color.",
        exploration: "NASA's Cassini spacecraft orbited Saturn from 2004-2017, providing incredible data and images. The Huygens probe landed on Titan in 2005 — the most distant landing ever achieved. Pioneer 11 was the first spacecraft to visit Saturn in 1979, followed by Voyager 1 and 2. NASA's Dragonfly mission will send a rotorcraft to Titan in the 2030s.",
        funFacts: [
            "Saturn's density is so low it would float in water!",
            "Saturn's rings are mostly ice particles, ranging from tiny grains to house-sized chunks.",
            "Saturn has a mysterious hexagonal storm at its north pole.",
            "Saturn has 146 known moons — the most of any planet in our solar system.",
            "Saturn's moon Titan has rivers and lakes of liquid methane and ethane."
        ],
        surface: null,
        hotspots: []
    },
    {
        name: "Uranus",
        tagline: "The Sideways Planet",
        type: "Ice Giant",
        color1: "#80deea", color2: "#4dd0e1", color3: "#00acc1",
        gradient: "radial-gradient(circle at 35% 35%, #b2ebf2 0%, #80deea 25%, #4dd0e1 50%, #00acc1 80%, #00838f 100%)",
        size: 20, orbitRadius: 330, orbitSpeed: 100, hasRing: true,
        gravity: "8.87 m/s²",
        temperature: "-195°C avg",
        moons: "28",
        diameter: "50,724 km",
        dayLength: "17.2 hours",
        yearLength: "84 years",
        overview: "Uranus is the seventh planet from the Sun and the third-largest in our solar system. This ice giant is unique because it rotates on its side — its axis is tilted 98 degrees! This means Uranus essentially rolls around the Sun. Uranus has a blue-green color due to methane in its atmosphere. It has faint rings and 28 known moons, all named after characters from Shakespeare and Alexander Pope.",
        atmosphere: "Uranus's atmosphere is composed of 83% hydrogen, 15% helium, and 2% methane. The methane absorbs red light, giving Uranus its distinctive blue-green color. Wind speeds can reach up to 900 km/h. The atmosphere is the coldest of any planet, with a minimum temperature of -224°C. Uranus has cloud layers of different compositions at various altitudes.",
        exploration: "Voyager 2 is the only spacecraft to have visited Uranus, flying past in January 1986. It discovered 10 new moons and two new rings. Scientists have proposed the Uranus Orbiter and Probe mission as a high priority for the coming decades. Uranus remains one of the least explored planets in our solar system.",
        funFacts: [
            "Uranus rotates on its side — it was likely knocked over by a massive collision!",
            "Uranus was the first planet discovered using a telescope, in 1781.",
            "It takes Uranus 84 Earth years to complete one orbit around the Sun.",
            "Uranus has 13 known rings, discovered in 1977.",
            "Uranus's moons are named after Shakespeare characters: Titania, Oberon, Ariel, Miranda, and more."
        ],
        surface: null,
        hotspots: []
    },
    {
        name: "Neptune",
        tagline: "The Windiest World",
        type: "Ice Giant",
        color1: "#5c6bc0", color2: "#3949ab", color3: "#283593",
        gradient: "radial-gradient(circle at 35% 35%, #7986cb 0%, #5c6bc0 25%, #3949ab 50%, #283593 80%, #1a237e 100%)",
        size: 19, orbitRadius: 370, orbitSpeed: 120, hasRing: false,
        gravity: "11.15 m/s²",
        temperature: "-200°C avg",
        moons: "16",
        diameter: "49,528 km",
        dayLength: "16.1 hours",
        yearLength: "165 years",
        overview: "Neptune is the eighth and farthest planet from the Sun. This deep blue ice giant is known for its supersonic winds — the fastest in the solar system — reaching speeds of over 2,000 km/h. Neptune has a dynamic atmosphere with visible weather patterns including the Great Dark Spot, similar to Jupiter's Great Red Spot. Its largest moon, Triton, orbits in the opposite direction to Neptune's rotation.",
        atmosphere: "Neptune's atmosphere is composed of 80% hydrogen, 19% helium, and trace amounts of methane. The methane gives Neptune its brilliant blue color. Neptune has the strongest winds of any planet, with speeds exceeding 2,000 km/h. The atmosphere features distinct cloud bands, bright cloud streaks of methane ice, and massive storm systems that can appear and disappear over years.",
        exploration: "Voyager 2 is the only spacecraft to visit Neptune, flying past in August 1989. It discovered Neptune's rings, six new moons, and the Great Dark Spot. Some scientists hope to send an orbiter to Neptune, but no missions are currently approved. Neptune is so distant that Voyager 2's signal took over 4 hours to reach Earth.",
        funFacts: [
            "Neptune has the strongest winds in the solar system — over 2,000 km/h!",
            "Neptune was the first planet found by mathematical prediction rather than observation.",
            "It takes 165 Earth years for Neptune to orbit the Sun — it completed its first orbit since discovery in 2011.",
            "Neptune's moon Triton orbits backward and may be a captured Kuiper Belt object.",
            "Neptune radiates more than twice as much energy as it receives from the Sun."
        ],
        surface: null,
        hotspots: []
    }
];

// ==========================================
// QUIZ DATA
// ==========================================
const QUIZ_QUESTIONS = [
    { q: "Which planet is the largest in our solar system?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: 1, explanation: "Jupiter is the largest planet, with a diameter of about 139,820 km — more than 11 times Earth's diameter!" },
    { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mercury", "Mars", "Jupiter"], answer: 2, explanation: "Mars gets its red color from iron oxide (rust) on its surface." },
    { q: "How many moons does Earth have?", options: ["0", "1", "2", "3"], answer: 1, explanation: "Earth has one natural satellite — the Moon, which is the fifth largest moon in the solar system." },
    { q: "Which planet rotates on its side?", options: ["Neptune", "Saturn", "Uranus", "Pluto"], answer: 2, explanation: "Uranus's axis is tilted 98 degrees, likely caused by a massive collision long ago." },
    { q: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1, explanation: "Saturn holds the record with 146 known moons, surpassing Jupiter's 95." },
    { q: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: 1, explanation: "Venus is the hottest at 464°C due to its extreme greenhouse effect, despite Mercury being closer to the Sun." },
    { q: "Which planet has a Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Venus"], answer: 1, explanation: "Jupiter's Great Red Spot is a storm larger than Earth, raging for over 350 years." },
    { q: "Which planet would float in water?", options: ["Jupiter", "Neptune", "Uranus", "Saturn"], answer: 3, explanation: "Saturn's density is only 0.687 g/cm³ — less than water! It would float in a large enough body of water." },
    { q: "What is the tallest mountain in the solar system?", options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Maxwell Montes"], answer: 1, explanation: "Olympus Mons on Mars stands 21.9 km tall — nearly 3 times the height of Mount Everest!" },
    { q: "Which planet has the strongest winds?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 3, explanation: "Neptune has the fastest winds in the solar system, exceeding 2,000 km/h!" },
    { q: "How long is a day on Venus?", options: ["12 hours", "24 hours", "100 Earth days", "243 Earth days"], answer: 3, explanation: "A Venusian day is 243 Earth days — longer than its year of 225 Earth days!" },
    { q: "Which was the first planet discovered by telescope?", options: ["Neptune", "Uranus", "Pluto", "Saturn"], answer: 1, explanation: "Uranus was discovered by William Herschel in 1781, making it the first planet found with a telescope." },
    { q: "Which planet is closest in size to Earth?", options: ["Mars", "Venus", "Mercury", "Neptune"], answer: 1, explanation: "Venus is nearly identical in size to Earth, with a diameter of 12,104 km vs Earth's 12,742 km." },
    { q: "What makes Neptune blue?", options: ["Water", "Methane", "Nitrogen", "Oxygen"], answer: 1, explanation: "Methane in Neptune's atmosphere absorbs red light and reflects blue light, giving it its deep blue color." },
    { q: "How many planets in our solar system have rings?", options: ["1", "2", "3", "4"], answer: 3, explanation: "Four planets have rings: Jupiter, Saturn, Uranus, and Neptune. Saturn's are the most spectacular!" }
];

// ==========================================
// DID YOU KNOW FACTS
// ==========================================
const DYK_FACTS = [
    "If you could drive a car at 100 km/h non-stop, it would take over 170 years to reach the Sun!",
    "One million Earths could fit inside the Sun.",
    "Space is completely silent — there's no medium for sound waves to travel through.",
    "The footprints on the Moon will be there for 100 million years because there's no wind.",
    "Neutron stars are so dense that a teaspoon would weigh about 6 billion tons.",
    "There are more stars in the universe than grains of sand on all of Earth's beaches.",
    "A day on Venus is longer than a year on Venus!",
    "The Voyager 1 spacecraft is the most distant human-made object, over 24 billion km from Earth.",
    "Saturn's rings are only about 10 meters thick, despite spanning 282,000 km.",
    "If two pieces of the same metal touch in space, they permanently bond — it's called cold welding.",
    "The Sun makes up 99.86% of all mass in our solar system.",
    "Mars has the largest dust storms in the solar system, lasting months and covering the entire planet.",
    "Jupiter's moon Europa may have more water than all of Earth's oceans combined.",
    "The Great Wall of China is NOT visible from space with the naked eye, but city lights are.",
    "Our solar system travels through the Milky Way at about 828,000 km/h."
];

// ==========================================
// APP STATE
// ==========================================
let currentPlanet = null;
let soundEnabled = false;
let audioCtx = null;
let quizState = { current: 0, score: 0, questions: [], answered: false };
let dykTimeout = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
});

function initLoadingScreen() {
    const progress = document.getElementById('loading-progress');
    const particles = document.querySelectorAll('.rocket-particles span');

    // Randomize particle directions
    particles.forEach(span => {
        span.style.setProperty('--dx', `${(Math.random() - 0.5) * 30}px`);
    });

    let pct = 0;
    const interval = setInterval(() => {
        pct += Math.random() * 15 + 5;
        if (pct >= 100) {
            pct = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('fade-out');
                document.getElementById('app').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = 'none';
                    initApp();
                }, 800);
            }, 400);
        }
        progress.style.width = pct + '%';
    }, 200);
}

function initApp() {
    initStarField();
    buildSolarSystem();
    initNavigation();
    initCompare();
    initQuiz();
    initDYK();

    // Show "Did You Know" after 8 seconds
    dykTimeout = setTimeout(showRandomDYK, 8000);
}

// ==========================================
// STAR FIELD
// ==========================================
function initStarField() {
    const canvas = document.getElementById('star-field');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let mouseX = 0, mouseY = 0;
    const STAR_COUNT = 300;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.3 + 0.05,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                parallax: Math.random() * 0.5 + 0.1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const dx = (mouseX - cx) / cx;
        const dy = (mouseY - cy) / cy;

        stars.forEach(star => {
            star.twinkle += star.twinkleSpeed;
            const alpha = 0.4 + 0.6 * Math.abs(Math.sin(star.twinkle));
            const px = star.x + dx * star.parallax * 15;
            const py = star.y + dy * star.parallax * 15;

            ctx.beginPath();
            ctx.arc(px, py, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();

            // Subtle glow for larger stars
            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(px, py, star.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180, 210, 255, ${alpha * 0.15})`;
                ctx.fill();
            }
        });

        requestAnimationFrame(draw);
    }

    resize();
    createStars();
    draw();

    window.addEventListener('resize', () => { resize(); createStars(); });
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
}

// ==========================================
// SOLAR SYSTEM
// ==========================================
function buildSolarSystem() {
    const container = document.getElementById('solar-system-container');
    const containerSize = container.offsetWidth || 800;
    const scaleFactor = containerSize / 800;

    PLANETS.forEach((planet, index) => {
        const orbitR = planet.orbitRadius * scaleFactor;

        // Orbit path
        const orbitPath = document.createElement('div');
        orbitPath.className = 'orbit-path';
        orbitPath.style.width = orbitR * 2 + 'px';
        orbitPath.style.height = orbitR * 2 + 'px';
        container.appendChild(orbitPath);

        // Planet orbit container (animated)
        const orbit = document.createElement('div');
        orbit.className = 'planet-orbit';
        orbit.style.width = orbitR * 2 + 'px';
        orbit.style.height = orbitR * 2 + 'px';
        orbit.style.animation = `orbitSpin ${planet.orbitSpeed}s linear infinite`;
        orbit.style.animationDelay = `${-index * 3}s`;

        // Planet element
        const planetEl = document.createElement('div');
        planetEl.className = 'planet';
        planetEl.dataset.index = index;

        const body = document.createElement('div');
        body.className = 'planet-body';
        const pSize = Math.max(planet.size * scaleFactor, 8);
        body.style.width = pSize + 'px';
        body.style.height = pSize + 'px';
        body.style.background = planet.gradient;
        body.style.boxShadow = `inset -${pSize/4}px -${pSize/6}px ${pSize/3}px rgba(0,0,0,0.5), 0 0 ${pSize/2}px rgba(${hexToRgb(planet.color1)}, 0.3)`;

        // Counter-rotate planet body so it appears static
        body.style.animation = `orbitSpin ${planet.orbitSpeed}s linear infinite reverse`;
        body.style.animationDelay = `${-index * 3}s`;

        const label = document.createElement('span');
        label.className = 'planet-label';
        label.textContent = planet.name;

        planetEl.appendChild(body);
        planetEl.appendChild(label);
        orbit.appendChild(planetEl);
        container.appendChild(orbit);

        // Events
        planetEl.addEventListener('click', (e) => {
            e.stopPropagation();
            openPlanetDetail(index);
            playSound('click');
        });

        planetEl.addEventListener('mouseenter', (e) => {
            showPreview(e, planet);
        });

        planetEl.addEventListener('mouseleave', () => {
            hidePreview();
        });

        planetEl.addEventListener('mousemove', (e) => {
            movePreview(e);
        });
    });

    // Add orbit animation keyframes
    if (!document.getElementById('orbit-keyframes')) {
        const style = document.createElement('style');
        style.id = 'orbit-keyframes';
        style.textContent = `@keyframes orbitSpin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }`;
        document.head.appendChild(style);
    }
}

// ==========================================
// PLANET PREVIEW (HOVER)
// ==========================================
function showPreview(e, planet) {
    const el = document.getElementById('planet-preview');
    const dot = el.querySelector('.preview-dot');
    document.getElementById('preview-name').textContent = planet.name;
    document.getElementById('preview-type').textContent = planet.type;
    dot.style.background = planet.color1;
    dot.style.boxShadow = `0 0 8px ${planet.color1}`;
    el.classList.remove('hidden');
    movePreview(e);
}

function movePreview(e) {
    const el = document.getElementById('planet-preview');
    el.style.left = (e.clientX + 16) + 'px';
    el.style.top = (e.clientY - 20) + 'px';
}

function hidePreview() {
    document.getElementById('planet-preview').classList.add('hidden');
}

// ==========================================
// PLANET DETAIL
// ==========================================
function openPlanetDetail(index) {
    currentPlanet = PLANETS[index];
    const detail = document.getElementById('planet-detail');

    // Planet 3D visual
    const p3d = document.getElementById('planet-3d');
    p3d.style.background = currentPlanet.gradient;
    p3d.style.backgroundSize = '480px 240px';

    // Ring
    const ring = document.getElementById('planet-ring');
    if (currentPlanet.hasRing) {
        ring.classList.remove('hidden');
    } else {
        ring.classList.add('hidden');
    }

    // Name & tagline
    document.getElementById('detail-planet-name').textContent = currentPlanet.name;
    document.getElementById('detail-planet-tagline').textContent = currentPlanet.tagline;

    // Facts
    document.querySelector('#fact-gravity .fact-value').textContent = currentPlanet.gravity;
    document.querySelector('#fact-temp .fact-value').textContent = currentPlanet.temperature;
    document.querySelector('#fact-moons .fact-value').textContent = currentPlanet.moons;
    document.querySelector('#fact-diameter .fact-value').textContent = currentPlanet.diameter;
    document.querySelector('#fact-day .fact-value').textContent = currentPlanet.dayLength;
    document.querySelector('#fact-year .fact-value').textContent = currentPlanet.yearLength;

    // Tabs
    document.getElementById('tab-overview').innerHTML = `<p>${currentPlanet.overview}</p>`;
    document.getElementById('tab-atmosphere').innerHTML = `<p>${currentPlanet.atmosphere}</p>`;
    document.getElementById('tab-exploration').innerHTML = `<p>${currentPlanet.exploration}</p>`;

    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="overview"]').classList.add('active');
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.add('hidden'));
    document.getElementById('tab-overview').classList.remove('hidden');

    // Explore surface button
    const exploreBtn = document.getElementById('btn-explore-surface');
    if (currentPlanet.surface) {
        exploreBtn.classList.remove('hidden');
    } else {
        exploreBtn.classList.add('hidden');
    }

    // Reset chat
    resetChat();

    // Show detail
    detail.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePlanetDetail() {
    document.getElementById('planet-detail').classList.add('hidden');
    document.body.style.overflow = '';
    currentPlanet = null;
}

// Tab switching
document.addEventListener('click', (e) => {
    if (e.target.closest('.tab-btn')) {
        const btn = e.target.closest('.tab-btn');
        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
        btn.classList.add('active');
        document.getElementById('tab-' + tab).classList.remove('hidden');
        playSound('click');
    }
});

// Close button
document.getElementById('detail-close').addEventListener('click', () => {
    closePlanetDetail();
    playSound('click');
});

// Explore surface button
document.getElementById('btn-explore-surface').addEventListener('click', () => {
    openExploreSurface();
    playSound('click');
});

// ==========================================
// EXPLORE SURFACE MODE
// ==========================================
function openExploreSurface() {
    if (!currentPlanet || !currentPlanet.surface) return;

    const overlay = document.getElementById('explore-surface');
    const viewport = document.getElementById('surface-viewport');
    const img = document.getElementById('surface-image');
    const title = document.getElementById('explore-title');

    title.textContent = `${currentPlanet.name} — Surface Explorer`;
    img.src = currentPlanet.surface;

    // Clear old hotspots
    viewport.querySelectorAll('.hotspot').forEach(h => h.remove());

    // Add hotspots
    currentPlanet.hotspots.forEach(hs => {
        const hotspot = document.createElement('div');
        hotspot.className = 'hotspot';
        hotspot.style.left = hs.x + '%';
        hotspot.style.top = hs.y + '%';

        hotspot.innerHTML = `
            <div class="hotspot-dot"></div>
            <div class="hotspot-pulse"></div>
            <div class="hotspot-info">
                <h4>${hs.name}</h4>
                <p>${hs.desc}</p>
            </div>
        `;

        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle active state for mobile
            viewport.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
            hotspot.classList.toggle('active');
            playSound('click');
        });

        viewport.appendChild(hotspot);
    });

    overlay.classList.remove('hidden');
}

document.getElementById('explore-close').addEventListener('click', () => {
    document.getElementById('explore-surface').classList.add('hidden');
    playSound('click');
});

// ==========================================
// AI CHAT
// ==========================================
const chatToggle = document.getElementById('chat-toggle');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

chatToggle.addEventListener('click', () => {
    chatBody.classList.toggle('hidden');
    chatToggle.classList.toggle('open');
    if (!chatBody.classList.contains('hidden')) {
        chatInput.focus();
    }
    playSound('click');
});

chatSend.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
});

function resetChat() {
    chatMessages.innerHTML = `
        <div class="chat-msg ai">
            <span class="msg-avatar">🤖</span>
            <p>Hello! Ask me anything about ${currentPlanet ? currentPlanet.name : 'this planet'}. I'm here to help you explore!</p>
        </div>
    `;
    chatBody.classList.add('hidden');
    chatToggle.classList.remove('open');
}

function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text || !currentPlanet) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span class="msg-avatar">👤</span><p>${escapeHtml(text)}</p>`;
    chatMessages.appendChild(userMsg);
    chatInput.value = '';

    // Generate AI response
    setTimeout(() => {
        const response = generateAIResponse(text, currentPlanet);
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-msg ai';
        aiMsg.innerHTML = `<span class="msg-avatar">🤖</span><p>${response}</p>`;
        chatMessages.appendChild(aiMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        playSound('message');
    }, 600 + Math.random() * 800);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(query, planet) {
    const q = query.toLowerCase();

    // Temperature related
    if (q.includes('hot') || q.includes('cold') || q.includes('temperature') || q.includes('warm') || q.includes('heat')) {
        return `${planet.name}'s average temperature is ${planet.temperature}. ${planet.name === 'Venus' ? "That's hot enough to melt lead! Venus is the hottest planet due to its extreme greenhouse effect." : planet.name === 'Mercury' ? "Despite being closest to the Sun, Mercury isn't the hottest planet. Its temperature swings from -180°C at night to 430°C during the day!" : planet.name === 'Mars' ? "Mars is quite cold! Temperatures can drop to -125°C in winter at the poles." : "Temperature varies depending on the altitude and location within the atmosphere."}`;
    }

    // Gravity related
    if (q.includes('gravity') || q.includes('weight') || q.includes('heavy') || q.includes('light')) {
        const earthWeight = 70;
        const gravityNum = parseFloat(planet.gravity);
        const weight = Math.round(earthWeight * (gravityNum / 9.81));
        return `The surface gravity on ${planet.name} is ${planet.gravity}. If you weigh 70 kg on Earth, you'd weigh about ${weight} kg on ${planet.name}! ${gravityNum < 5 ? "You could jump much higher there!" : gravityNum > 15 ? "You'd feel much heavier and it would be hard to move!" : "Pretty similar to Earth in feel."}`;
    }

    // Moons related
    if (q.includes('moon') || q.includes('satellite')) {
        return `${planet.name} has ${planet.moons} known moon${planet.moons === '1' ? '' : 's'}. ${planet.moons === '0' ? "No moons at all! Scientists believe it's because " + planet.name + " is too close to the Sun for moons to maintain a stable orbit." : planet.name === 'Jupiter' ? "The four largest — Io, Europa, Ganymede, and Callisto — were discovered by Galileo in 1610. Europa might harbor a subsurface ocean with potential for life!" : planet.name === 'Saturn' ? "Titan, Saturn's largest moon, has a thick atmosphere and lakes of liquid methane. It's the only moon in the solar system with a substantial atmosphere!" : planet.name === 'Earth' ? "Our Moon is the fifth largest in the solar system and stabilizes Earth's axial tilt, helping maintain our seasons." : "These moons come in all shapes and sizes!"}`;
    }

    // Size related
    if (q.includes('big') || q.includes('size') || q.includes('large') || q.includes('diameter') || q.includes('small')) {
        return `${planet.name}'s diameter is ${planet.diameter}. ${planet.name === 'Jupiter' ? "That's about 11 times wider than Earth! You could fit about 1,300 Earths inside Jupiter." : planet.name === 'Mercury' ? "Mercury is the smallest planet — only slightly larger than Earth's Moon!" : planet.name === 'Saturn' ? "Saturn is the second largest planet — about 9.5 times wider than Earth." : `For comparison, Earth's diameter is 12,742 km.`}`;
    }

    // Day/rotation related
    if (q.includes('day') || q.includes('rotat') || q.includes('spin') || q.includes('long')) {
        return `A day on ${planet.name} lasts ${planet.dayLength}. ${planet.name === 'Venus' ? "Venus rotates so slowly that its day is longer than its year! Plus, it spins backward!" : planet.name === 'Jupiter' ? "Despite being massive, Jupiter has the shortest day of any planet, spinning incredibly fast!" : planet.name === 'Mars' ? "A Martian day (called a 'sol') is very similar to an Earth day — only 37 minutes longer." : "Interesting, right?"}`;
    }

    // Year/orbit related
    if (q.includes('year') || q.includes('orbit') || q.includes('around the sun')) {
        return `${planet.name} takes ${planet.yearLength} to orbit the Sun. ${planet.name === 'Neptune' ? "That means Neptune has only completed about one orbit since it was discovered in 1846!" : planet.name === 'Mercury' ? "Mercury zips around the Sun faster than any other planet!" : "The farther a planet is from the Sun, the longer its year."}`;
    }

    // Atmosphere related
    if (q.includes('atmosphere') || q.includes('air') || q.includes('breathe') || q.includes('gas') || q.includes('wind')) {
        return planet.atmosphere.substring(0, 250) + "...";
    }

    // Life related
    if (q.includes('life') || q.includes('live') || q.includes('alien') || q.includes('habitable')) {
        return `${planet.name === 'Earth' ? "Earth is the only known planet to harbor life! Our perfect distance from the Sun, liquid water, and protective atmosphere make it ideal." : planet.name === 'Mars' ? "Mars is the top candidate for past microbial life! The Perseverance rover is actively searching for biosignatures in Jezero Crater, an ancient lake bed." : planet.name === 'Venus' ? "In 2020, scientists detected phosphine in Venus's atmosphere, which could be a sign of microbial life in the clouds — but this is still debated!" : `As far as we know, ${planet.name} doesn't host life. But who knows what future discoveries might reveal? 🤔`}`;
    }

    // Water related
    if (q.includes('water') || q.includes('ocean') || q.includes('ice') || q.includes('liquid')) {
        return `${planet.name === 'Earth' ? "Earth is 71% covered in water — about 1.335 billion cubic km! That's what makes our planet so special." : planet.name === 'Mars' ? "Mars once had flowing water! Today, water exists as ice at its polar caps and possibly underground. Ancient river channels and lake beds are visible on the surface." : planet.name === 'Mercury' ? "Surprisingly, Mercury has ice in permanently shadowed craters at its poles!" : `Water on ${planet.name} mostly exists in frozen or gaseous form. Jupiter's moon Europa and Saturn's moon Enceladus are thought to have subsurface oceans!`}`;
    }

    // Color related
    if (q.includes('color') || q.includes('look') || q.includes('appear') || q.includes('blue') || q.includes('red')) {
        return `${planet.name === 'Mars' ? "Mars appears red due to iron oxide (rust) on its surface. But up close, the terrain also has browns, golds, and tans!" : planet.name === 'Neptune' ? "Neptune's striking blue color comes from methane in its atmosphere, which absorbs red light." : planet.name === 'Venus' ? "Venus appears yellowish-white from space due to its thick clouds of sulfuric acid." : planet.name === 'Jupiter' ? "Jupiter's beautiful bands of red, orange, brown, and white are created by different chemical compounds in its atmosphere." : `${planet.name}'s appearance is created by its unique atmospheric composition and surface materials. Pretty fascinating!`}`;
    }

    // Fun fact request
    if (q.includes('fun') || q.includes('fact') || q.includes('interesting') || q.includes('cool') || q.includes('wow') || q.includes('amazing')) {
        const fact = planet.funFacts[Math.floor(Math.random() * planet.funFacts.length)];
        return `Here's a fun fact: ${fact}`;
    }

    // Ring related
    if (q.includes('ring')) {
        return `${planet.hasRing ? `Yes, ${planet.name} has rings! ${planet.name === 'Saturn' ? "Saturn's rings are the most spectacular, made of billions of particles of ice and rock, ranging from tiny grains to house-sized boulders. They span 282,000 km but are only about 10 meters thick!" : `${planet.name}'s rings are much fainter than Saturn's but still fascinating.`}` : `${planet.name} doesn't have visible rings. Only Jupiter, Saturn, Uranus, and Neptune have ring systems.`}`;
    }

    // Exploration related
    if (q.includes('mission') || q.includes('spacecraft') || q.includes('explore') || q.includes('visit') || q.includes('nasa') || q.includes('rover')) {
        return planet.exploration.substring(0, 280) + "...";
    }

    // Name origin
    if (q.includes('name') || q.includes('called') || q.includes('why')) {
        const origins = {
            Mercury: "Mercury is named after the Roman messenger god, known for speed — fitting for the fastest-orbiting planet!",
            Venus: "Venus is named after the Roman goddess of love and beauty, likely because it's the brightest planet visible from Earth.",
            Earth: "Earth comes from Germanic/Old English words meaning 'ground.' It's the only planet NOT named after a Roman god!",
            Mars: "Mars is named after the Roman god of war, probably because its red color reminded ancient people of blood.",
            Jupiter: "Jupiter is named after the king of the Roman gods — fitting for the king of planets!",
            Saturn: "Saturn is named after the Roman god of agriculture and time, Jupiter's father in mythology.",
            Uranus: "Uranus is named after the ancient Greek god of the sky, the grandfather of Zeus (Jupiter).",
            Neptune: "Neptune is named after the Roman god of the sea, fitting for its deep blue color."
        };
        return origins[planet.name] || `${planet.name} has an interesting name origin!`;
    }

    // Default response with a fun fact
    const fact = planet.funFacts[Math.floor(Math.random() * planet.funFacts.length)];
    return `Great question about ${planet.name}! Here's something interesting: ${fact} Feel free to ask about temperature, gravity, moons, atmosphere, or anything else!`;
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    document.getElementById('btn-home').addEventListener('click', () => {
        closeAllModals();
        setActiveNav('btn-home');
        playSound('click');
    });

    document.getElementById('btn-compare').addEventListener('click', () => {
        closeAllModals();
        document.getElementById('compare-modal').classList.remove('hidden');
        setActiveNav('btn-compare');
        playSound('click');
    });

    document.getElementById('btn-quiz').addEventListener('click', () => {
        closeAllModals();
        document.getElementById('quiz-modal').classList.remove('hidden');
        setActiveNav('btn-quiz');
        startQuiz();
        playSound('click');
    });

    document.getElementById('btn-sound').addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        document.getElementById('sound-icon').textContent = soundEnabled ? '🔊' : '🔇';
        if (soundEnabled) {
            initAudio();
            startAmbience();
        } else {
            stopAmbience();
        }
    });

    // Close buttons for modals
    document.getElementById('compare-close').addEventListener('click', () => {
        document.getElementById('compare-modal').classList.add('hidden');
        setActiveNav('btn-home');
        playSound('click');
    });

    document.getElementById('quiz-close').addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.add('hidden');
        setActiveNav('btn-home');
        playSound('click');
    });
}

function setActiveNav(id) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function closeAllModals() {
    document.getElementById('compare-modal').classList.add('hidden');
    document.getElementById('quiz-modal').classList.add('hidden');
    closePlanetDetail();
}

// ==========================================
// COMPARE PLANETS
// ==========================================
function initCompare() {
    const sel1 = document.getElementById('compare-select-1');
    const sel2 = document.getElementById('compare-select-2');

    PLANETS.forEach((p, i) => {
        sel1.innerHTML += `<option value="${i}" ${i === 2 ? 'selected' : ''}>${p.name}</option>`;
        sel2.innerHTML += `<option value="${i}" ${i === 3 ? 'selected' : ''}>${p.name}</option>`;
    });

    sel1.addEventListener('change', updateCompare);
    sel2.addEventListener('change', updateCompare);

    updateCompare();
}

function updateCompare() {
    const i1 = parseInt(document.getElementById('compare-select-1').value);
    const i2 = parseInt(document.getElementById('compare-select-2').value);
    const p1 = PLANETS[i1];
    const p2 = PLANETS[i2];
    const container = document.getElementById('compare-results');

    const metrics = [
        { label: "Gravity", val1: parseFloat(p1.gravity), val2: parseFloat(p2.gravity), unit: " m/s²" },
        { label: "Diameter", val1: parseFloat(p1.diameter.replace(/,/g, '')), val2: parseFloat(p2.diameter.replace(/,/g, '')), unit: " km" },
        { label: "Moons", val1: parseInt(p1.moons), val2: parseInt(p2.moons), unit: "" },
        { label: "Day Length", val1: parseDayLength(p1.dayLength), val2: parseDayLength(p2.dayLength), unit: " hrs" },
    ];

    let html = '';
    metrics.forEach(m => {
        const max = Math.max(m.val1, m.val2, 1);
        const pct1 = (m.val1 / max * 100);
        const pct2 = (m.val2 / max * 100);
        const displayVal1 = m.label === 'Diameter' ? formatNumber(m.val1) + m.unit : m.val1.toFixed(m.val1 % 1 === 0 ? 0 : 1) + m.unit;
        const displayVal2 = m.label === 'Diameter' ? formatNumber(m.val2) + m.unit : m.val2.toFixed(m.val2 % 1 === 0 ? 0 : 1) + m.unit;

        html += `
            <div class="compare-row">
                <div class="compare-bar-container left">
                    <div class="compare-bar bar-1" style="width: ${pct1}%">${displayVal1}</div>
                    <span class="compare-label">${p1.name}</span>
                </div>
                <div class="compare-metric">${m.label}</div>
                <div class="compare-bar-container right">
                    <div class="compare-bar bar-2" style="width: ${pct2}%">${displayVal2}</div>
                    <span class="compare-label">${p2.name}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Animate bars
    requestAnimationFrame(() => {
        container.querySelectorAll('.compare-bar').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            requestAnimationFrame(() => { bar.style.width = w; });
        });
    });
}

function parseDayLength(str) {
    if (str.includes('hours')) return parseFloat(str);
    if (str.includes('Earth days')) return parseFloat(str) * 24;
    if (str.includes('years')) return parseFloat(str) * 365.25 * 24;
    return parseFloat(str);
}

function formatNumber(n) {
    return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

// ==========================================
// QUIZ
// ==========================================
function initQuiz() {
    document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);
    document.getElementById('quiz-restart').addEventListener('click', startQuiz);
}

function startQuiz() {
    // Shuffle and pick 10 questions
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    quizState = {
        current: 0,
        score: 0,
        questions: shuffled.slice(0, 10),
        answered: false
    };

    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');

    displayQuizQuestion();
}

function displayQuizQuestion() {
    const q = quizState.questions[quizState.current];
    const total = quizState.questions.length;

    document.getElementById('quiz-progress-bar').style.width = ((quizState.current / total) * 100) + '%';
    document.getElementById('quiz-question-num').textContent = `QUESTION ${quizState.current + 1} OF ${total}`;
    document.getElementById('quiz-question').textContent = q.q;

    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => answerQuiz(i));
        optionsEl.appendChild(btn);
    });

    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next').classList.add('hidden');
    quizState.answered = false;
}

function answerQuiz(selected) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.current];
    const correct = selected === q.answer;
    if (correct) quizState.score++;

    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        if (i === q.answer) opt.classList.add('correct');
        if (i === selected && !correct) opt.classList.add('wrong');
        opt.classList.add('disabled');
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden', 'correct-fb', 'wrong-fb');
    feedback.classList.add(correct ? 'correct-fb' : 'wrong-fb');
    feedback.textContent = correct ? `✅ Correct! ${q.explanation}` : `❌ Not quite. ${q.explanation}`;

    document.getElementById('quiz-next').classList.remove('hidden');
    document.getElementById('quiz-next').textContent =
        quizState.current < quizState.questions.length - 1 ? 'Next Question →' : 'See Results →';

    playSound(correct ? 'correct' : 'wrong');
}

function nextQuizQuestion() {
    quizState.current++;
    if (quizState.current >= quizState.questions.length) {
        showQuizResults();
    } else {
        displayQuizQuestion();
    }
    playSound('click');
}

function showQuizResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');

    const score = quizState.score;
    const total = quizState.questions.length;
    document.getElementById('results-score').textContent = score;

    let title, message;
    if (score >= 9) {
        title = "🌟 Space Genius!";
        message = "Outstanding! You know the solar system like the back of your hand!";
    } else if (score >= 7) {
        title = "🚀 Space Explorer!";
        message = "Great job! You've got solid space knowledge. Keep exploring!";
    } else if (score >= 5) {
        title = "🌍 Earth Dweller";
        message = "Not bad! There's still more to discover in our solar system.";
    } else {
        title = "🔭 Stargazer Beginner";
        message = "Keep exploring! The universe has so much to teach you.";
    }

    document.getElementById('results-title').textContent = title;
    document.getElementById('results-message').textContent = message;

    document.getElementById('quiz-progress-bar').style.width = '100%';
}

// ==========================================
// DID YOU KNOW
// ==========================================
function initDYK() {
    document.getElementById('dyk-close').addEventListener('click', () => {
        document.getElementById('did-you-know').classList.add('hidden');
        playSound('click');
        // Schedule next DYK
        dykTimeout = setTimeout(showRandomDYK, 30000 + Math.random() * 30000);
    });
}

function showRandomDYK() {
    const fact = DYK_FACTS[Math.floor(Math.random() * DYK_FACTS.length)];
    document.getElementById('dyk-text').textContent = fact;
    document.getElementById('did-you-know').classList.remove('hidden');
}

// ==========================================
// SOUND EFFECTS
// ==========================================
let ambienceOsc = null;
let ambienceLfo = null;
let ambienceGain = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (!soundEnabled || !audioCtx) return;

    const now = audioCtx.currentTime;

    if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
    }

    if (type === 'correct') {
        [523, 659, 784].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.06, now + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);
            osc.connect(gain).connect(audioCtx.destination);
            osc.start(now + i * 0.12);
            osc.stop(now + i * 0.12 + 0.3);
        });
    }

    if (type === 'wrong') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    }

    if (type === 'message') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
    }
}

function startAmbience() {
    if (!audioCtx) return;

    // Deep space drone
    ambienceOsc = audioCtx.createOscillator();
    ambienceLfo = audioCtx.createOscillator();
    ambienceGain = audioCtx.createGain();
    const lfoGain = audioCtx.createGain();

    ambienceOsc.type = 'sine';
    ambienceOsc.frequency.value = 60;
    ambienceLfo.type = 'sine';
    ambienceLfo.frequency.value = 0.1;
    lfoGain.gain.value = 15;
    ambienceGain.gain.value = 0.03;

    ambienceLfo.connect(lfoGain).connect(ambienceOsc.frequency);
    ambienceOsc.connect(ambienceGain).connect(audioCtx.destination);

    ambienceOsc.start();
    ambienceLfo.start();
}

function stopAmbience() {
    if (ambienceOsc) { ambienceOsc.stop(); ambienceOsc = null; }
    if (ambienceLfo) { ambienceLfo.stop(); ambienceLfo = null; }
}

// ==========================================
// UTILITY
// ==========================================
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
