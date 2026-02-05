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
        videoSrc: '/rose-day-video.mp4',
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
        videoSrc: '/propose-day-video.mp4',
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
        videoSrc: '/chocolate-day-video.mp4',
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
        videoSrc: '/teddy-day-video.mp4',
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
        videoSrc: '/promise-day-video.mp4',
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
        videoSrc: '/hug-day-video.mp4',
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
        videoSrc: '/kiss-day-video.mp4',
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
    }
};
