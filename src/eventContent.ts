// ============================================
// 💝 VALENTINE'S WEEK EVENT CONTENT CONFIGURATION
// ============================================
// 
// Edit this file to customize the content for each event day!
// 
// For each event, you can change:
// - titlePreReveal: The title shown before clicking "Reveal"
// - titlePostReveal: The title shown after clicking "Reveal"
// - mainMessage1 & mainMessage2: The intro messages on the first page
// - subMessage: The small text encouraging to click reveal
// - coupleImage: Path to the Hello Kitty couple image (place in /public folder)
// - videoSrc: Path to your video file (place in /public folder)
// - videoPoster: Path to video thumbnail image (place in /public folder)
// - letterGreeting: The "Dear..." opening of the love letter
// - letterPoem: Array of poem lines (each line is a separate string)
// - letterClosing: The sign-off of the love letter
//
// ============================================

export type EventPageData = {
    name: string;
    titlePreReveal: string;
    titlePostReveal: string;
    mainMessage1: string;
    mainMessage2: string;
    subMessage: string;
    coupleImage: string;
    videoSrc: string;
    videoPoster: string;
    letterGreeting: string;
    letterPoem: string[];
    letterClosing: string;
    layout?: 'standard' | 'envelopes'; // Default is 'standard'
}

export const eventPagesData: Record<string, EventPageData> = {

    // ============================================
    // 🌹 ROSE DAY (February 7)
    // ============================================
    'Rose Day': {
        name: 'Rose Day',
        titlePreReveal: 'Rose Day: Unlocking Our Love Story',
        titlePostReveal: 'Rose Day: A Special Message',
        mainMessage1: 'Roses speak a thousand words of love.',
        mainMessage2: "Here's to the start of our beautiful week together!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/rosecouple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/rd.JPG',
        videoPoster: '/rose-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Dearest,',
        letterPoem: [
            'Roses are red, my love is true.',
            'This special day is just for you.',
            'Every petal speaks my heart, to',
            'you, my valentine, from the start.'
        ],
        letterClosing: 'Love always.'
    },

    // ============================================
    // 💍 PROPOSE DAY (February 8)
    // ============================================
    'Propose Day': {
        name: 'Propose Day',
        titlePreReveal: 'Propose Day: A Question of the Heart',
        titlePostReveal: 'Propose Day: A Special Message',
        mainMessage1: 'Every great love story begins with a question.',
        mainMessage2: "Today, I propose we write ours together!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/propose day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/propose-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Love,',
        letterPoem: [
            'With this ring of words I speak,',
            'A future together is what I seek.',
            'Will you be mine, through thick and thin?',
            'Let our forever love story begin.'
        ],
        letterClosing: 'Forever yours.'
    },

    // ============================================
    // 🍫 CHOCOLATE DAY (February 9)
    // ============================================
    'Chocolate Day': {
        name: 'Chocolate Day',
        titlePreReveal: 'Chocolate Day: Sweet Moments Await',
        titlePostReveal: 'Chocolate Day: A Special Message',
        mainMessage1: 'Life is sweeter with you by my side.',
        mainMessage2: "Like chocolate, you make everything better!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/chocolate day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/chocolate-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'Sweetest One,',
        letterPoem: [
            'Chocolate melts but love stays true,',
            'Nothing tastes as sweet as you.',
            'Rich and warm like cocoa dreams,',
            'Our love is sweeter than it seems.'
        ],
        letterClosing: 'Sweet kisses.'
    },

    // ============================================
    // 🧸 TEDDY DAY (February 10)
    // ============================================
    'Teddy Day': {
        name: 'Teddy Day',
        titlePreReveal: 'Teddy Day: Cuddly Love Awaits',
        titlePostReveal: 'Teddy Day: A Special Message',
        mainMessage1: 'Soft hugs and warm cuddles define today.',
        mainMessage2: "You're the teddy bear I want to hold forever!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/teddy day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/teddy-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Cuddle Bug,',
        letterPoem: [
            'Soft and warm like a teddy bear,',
            "You show me love beyond compare.",
            'In your arms I find my peace,',
            'A love that will never cease.'
        ],
        letterClosing: 'Warm hugs.'
    },

    // ============================================
    // 🤝 PROMISE DAY (February 11)
    // ============================================
    'Promise Day': {
        name: 'Promise Day',
        titlePreReveal: 'Promise Day: Vows of Love',
        titlePostReveal: 'Promise Day: A Special Message',
        mainMessage1: 'Promises are the threads that bind hearts.',
        mainMessage2: "Today, I promise to love you more each day!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/promise day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/promise-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Promise,',
        letterPoem: [
            'I promise to love you every day,',
            'To hold your hand along the way.',
            "Through storms and sunshine, side by side,",
            "In you, my heart will always confide."
        ],
        letterClosing: 'I promise.'
    },

    // ============================================
    // 🤗 HUG DAY (February 12)
    // ============================================
    'Hug Day': {
        name: 'Hug Day',
        titlePreReveal: 'Hug Day: Embrace the Love',
        titlePostReveal: 'Hug Day: A Special Message',
        mainMessage1: 'A hug says what words cannot express.',
        mainMessage2: "Here's a warm embrace for you today!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/hug day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/hug-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Warm Embrace,',
        letterPoem: [
            'In my arms you will always find,',
            'A love so pure, a heart so kind.',
            'Every hug brings us closer still,',
            'With warmth and love our hearts do fill.'
        ],
        letterClosing: 'Wrapped in love.'
    },

    // ============================================
    // 💋 KISS DAY (February 13)
    // ============================================
    'Kiss Day': {
        name: 'Kiss Day',
        titlePreReveal: 'Kiss Day: Sealed with Love',
        titlePostReveal: 'Kiss Day: A Special Message',
        mainMessage1: 'Every kiss is a story of love untold.',
        mainMessage2: "Today, each kiss speaks my heart for you!",
        subMessage: 'Tap to reveal your special message.',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/kiss day couple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/reasons-video.mp4',
        videoPoster: '/kiss-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Sweetheart,',
        letterPoem: [
            'A gentle kiss upon your cheek,',
            'Says all the words I cannot speak.',
            'Our lips meet soft like petals do,',
            'Each kiss reminds me I love you.'
        ],
        letterClosing: 'Sealed with a kiss.'
    },

    // ============================================
    // 💖 VALENTINE'S DAY (February 14)
    // ============================================
    "Valentine's Day": {
        name: "Valentine's Day",
        titlePreReveal: "Valentine's Day: My Forever Love",
        titlePostReveal: "Valentine's Day: A Promise Forever",
        mainMessage1: 'Today is about celebrating US.',
        mainMessage2: "You are my heart, my soul, and my forever Valentine!",
        subMessage: 'Tap to reveal my heart to you.',
        layout: 'envelopes',

        // 📷 Image: Place your image in /public folder
        coupleImage: '/valentinescouple.png',

        // 🎬 Video: Place your video in /public folder
        videoSrc: '/valentines-day-video.mp4',
        videoPoster: '/valentines-video-poster.jpg',

        // 💌 Love Letter Content
        letterGreeting: 'My Forever Valentine,',
        letterPoem: [
            'From the moment our paths first crossed,',
            'My heart was found, no longer lost.',
            'With you, every day feels brand new,',
            'I love you more than words can do.',
            'Happy Valentine\'s Day, my love!'
        ],
        letterClosing: 'Yours Eternally.'
    }
};

// ============================================
// 💕 VALENTINE'S DAY - 14 REASONS WHY I LOVE YOU
// ============================================
// 
// Edit these reasons to personalize them!
// 

export type ReasonsData = {
    reasons: string[];
    videoSrc: string;
}

export const valentinesReasons: ReasonsData = {
    reasons: [
        // Page 1 (Reasons 1-7)
        "You notice the details no one else do",
        "You love me for who I am",
        "You are my safe space",
        "Your humour is unmatched",
        "Your actions are louder than words",
        "You believe me and give me confidence",
        "You brighten my days",
        // Page 2 (Reasons 8-14)
        "You make every moment special",
        "Your smile lights up my world",
        "You understand me like no one else",
        "You support all my dreams",
        "You make me a better person",
        "You are my best friend",
        "You are my forever and always"
    ],
    videoSrc: '/reasons-video.mp4'
};

// ============================================
// 💕 VALENTINE'S DAY - 14 PROMISES I CAN MAKE
// ============================================
// 
// Edit these promises to personalize them!
// 

export const valentinesPromises: ReasonsData = {
    reasons: [
        // Page 1 (Promises 1-7)
        "I promise to always be there for you",
        "I promise to love you unconditionally",
        "I promise to support your dreams",
        "I promise to make you laugh every day",
        "I promise to hold your hand through storms",
        "I promise to be your biggest cheerleader",
        "I promise to cherish every moment with you",
        // Page 2 (Promises 8-14)
        "I promise to listen with my whole heart",
        "I promise to grow old with you",
        "I promise to never stop surprising you",
        "I promise to be honest and true",
        "I promise to build our future together",
        "I promise to love you more each day",
        "I promise to be yours forever and always"
    ],
    videoSrc: '/promises-video.mp4'
};


// ============================================
// 💌 VALENTINE'S DAY - THE LETTER (ENVELOPE 3)
// ============================================

export const valentinesLetter = `My Dearest Love,

As I sit down to write this, I find myself overwhelmed by just how much you mean to me. It’s funny how life works—how one person can walk into your world and suddenly become the center of it. Before you, I thought I understood what love was, but you have redefined it in the most beautiful way possible.

Do you remember how we started? The little moments, the shy glances, the conversations that flowed so effortlessly? Looking back, I realize that every single one of those moments was a stepping stone leading me to this profound realization: you are my person. You are the one my soul has been searching for, even before I knew I was looking.

There are so many things I adore about you. I love the way your eyes light up when you talk about something you’re passionate about. I love your kindness, the way you treat others with such grace and empathy. I love your laugh—it is, without a doubt, my favorite sound in the entire world. It has the power to turn my darkest days into bright, sunny mornings.

But more than just the things I see, I love who you make me when I am with you. You challenge me to be better, to dream bigger, and to love harder. You are my safe haven, my quiet place in a chaotic world. When I am with you, I feel a sense of peace that I can’t find anywhere else. You have seen me at my best and my worst, and yet, you love me all the same. That kind of unconditional acceptance is a gift I will treasure forever.

I want you to know that I am committed to us. I promise to stand by your side through every high and every low. I promise to be your biggest cheerleader when you succeed and your soft place to land when you fall. I promise to keep dating you, to keep trying, to never let the spark that ignited us fade away. I want to build a life with you—a life filled with adventure, laughter, and an abundance of love.

As we celebrate this Valentine’s Day, I want you to look at how far we’ve come and know that this is just the beginning. I see a future with you that is so bright it exhilarates me. I see us growing old together, our hands still intertwined, our hearts still beating in rhythm.

Thank you for choosing me, for loving me, and for being the incredible person that you are. You are my heart, my soul, and my forever Valentine.

With all my love, forever and always,

Your Love`;
