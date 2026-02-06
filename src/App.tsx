import { useState, useRef, useCallback, useEffect } from 'react'
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react'
import { eventPagesData, EventPageData, valentinesReasons, valentinesPromises, valentinesLetter } from './eventContent'

// ============================================
// DEV MODE TOGGLE
// Set to true to unlock all cards for development
// Set to false for production (time-based locks)
// ============================================
const DEV_MODE = true

// Valentine's Week days data with images and unlock dates
const valentineDays = [
    { date: 'Feb 7', name: 'Rose Day', image: '/rose day.png', unlockDay: 7 },
    { date: 'Feb 8', name: 'Propose Day', image: '/proposeday.png', unlockDay: 8 },
    { date: 'Feb 9', name: 'Chocolate Day', image: '/chocolate day.png', unlockDay: 9 },
    { date: 'Feb 10', name: 'Teddy Day', image: '/teddy day.png', unlockDay: 10 },
    { date: 'Feb 11', name: 'Promise Day', image: '/promise day.png', unlockDay: 11 },
    { date: 'Feb 12', name: 'Hug Day', image: '/hug day.png', unlockDay: 12 },
    { date: 'Feb 13', name: 'Kiss Day', image: '/kiss day.png', unlockDay: 13 },
]

// Helper function to check if a day is unlocked
const isDayUnlocked = (unlockDay: number): boolean => {
    // DEV MODE: All days unlocked for development
    if (DEV_MODE) return true

    const now = new Date()
    const currentMonth = now.getMonth() + 1 // 0-indexed
    const currentDay = now.getDate()

    // Unlocked if we're in February and past or on the unlock day
    // Or if we're past February
    if (currentMonth > 2) return true
    if (currentMonth === 2 && currentDay >= unlockDay) return true
    return false
}

// Helper function to get days until unlock
const getDaysUntilUnlock = (unlockDay: number): number => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const unlockDate = new Date(currentYear, 1, unlockDay) // February is month 1 (0-indexed)

    const diffTime = unlockDate.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.max(0, diffDays)
}

// Day Card Component - Image with text overlay, lock state, and reveal button
const DayCard = ({ date, image, name, unlockDay, onReveal }: {
    date: string;
    image: string;
    name: string;
    unlockDay: number;
    onReveal: () => void;
}) => {
    const isUnlocked = isDayUnlocked(unlockDay)
    const daysUntil = getDaysUntilUnlock(unlockDay)

    return (
        <div className={`day-card ${isUnlocked ? 'day-card-unlocked' : ''}`}>
            <img
                src={image}
                alt={name}
                className={`day-card-image ${!isUnlocked ? 'day-card-image-locked' : ''}`}
            />
            {/* Text overlay at top */}
            <div className="day-card-overlay">
                <span className="day-card-text">{date}:</span>
                <span className="day-card-text">{name}</span>
            </div>

            {/* Lock overlay for locked cards */}
            {!isUnlocked && (
                <div className="day-card-lock-overlay">
                    <img src="/lock.png" alt="Locked" className="day-card-lock-icon" />
                </div>
            )}

            {/* Bottom overlay: Reveal button or countdown */}
            <div className="day-card-bottom-overlay">
                {isUnlocked ? (
                    <button className="day-card-reveal-btn" onClick={onReveal}>
                        Reveal
                    </button>
                ) : (
                    <span className="day-card-countdown">Opens in {daysUntil} day{daysUntil !== 1 ? 's' : ''}</span>
                )}
            </div>
        </div>
    )
}

// Valentine's Day Special Card
const ValentinesDayCard = ({ onReveal }: { onReveal: () => void }) => {
    const isUnlocked = isDayUnlocked(14)
    const daysUntil = getDaysUntilUnlock(14)

    return (
        <div className={`valentines-day-card ${isUnlocked ? 'valentines-day-card-unlocked' : ''}`}>
            <img
                src="/valentines day.png"
                alt="Valentine's Day"
                className={`valentines-card-image ${!isUnlocked ? 'valentines-card-image-locked' : ''}`}
            />
            {/* Text overlay at top */}
            <div className="valentines-card-overlay">
                <span className="valentines-card-text">Feb 14:</span>
                <span className="valentines-card-text">Valentine's Day</span>
            </div>

            {/* Lock overlay for locked card */}
            {!isUnlocked && (
                <div className="valentines-card-lock-overlay">
                    <img src="/lock.png" alt="Locked" className="valentines-card-lock-icon" />
                </div>
            )}

            {/* Bottom overlay: Reveal button or countdown */}
            <div className="valentines-card-bottom-overlay">
                {isUnlocked ? (
                    <button className="valentines-card-reveal-btn" onClick={onReveal}>
                        Reveal
                    </button>
                ) : (
                    <span className="valentines-card-countdown">Opens in {daysUntil} day{daysUntil !== 1 ? 's' : ''}</span>
                )}
            </div>
        </div>
    )
}

// Hello Kitty Corner Decoration
const HelloKittyDecoration = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
    const positionClasses = {
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
    }

    return (
        <div className={`fixed ${positionClasses[position]} w-24 h-24 pointer-events-none z-20 opacity-80`}>
            <img
                src="/hello-kitty.png"
                alt="Hello Kitty"
                className="w-full h-full object-contain"
            />
        </div>
    )
}

// Flower Decoration
const FlowerDecoration = ({ className }: { className?: string }) => (
    <div className={`flower-decoration ${className || ''}`}>
        🌸
    </div>
)

// Progress Bar Component
const ProgressBar = ({ currentDay }: { currentDay: number }) => {
    // Calculate progress: Day 1 (Feb 7) = 0%, Day 8 (Feb 14) = 100%
    const totalDays = 8 // Feb 7 to Feb 14
    const progress = Math.min(((currentDay) / (totalDays - 1)) * 100, 100)

    return (
        <div className="progress-bar-container">
            <span className="progress-bow">🎀</span>
            <div className="progress-bar-track">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                />
                <div className="progress-day-label">
                    Day {currentDay} of 7
                </div>
            </div>
            <span className="progress-bow">🎀</span>
        </div>
    )
}


// ============================================
// 💕 14 REASONS WHY I LOVE YOU - Page Component
// ============================================
const ReasonsPage = ({ onBack }: { onBack: () => void }) => {
    const [currentPage, setCurrentPage] = useState(0) // 0 = reasons 1-7, 1 = reasons 8-14

    const reasons = valentinesReasons.reasons
    const currentReasons = currentPage === 0
        ? reasons.slice(0, 7)
        : reasons.slice(7, 14)

    const reasonNumbers = currentPage === 0
        ? ['01', '02', '03', '04', '05', '06', '07']
        : ['08', '09', '10', '11', '12', '13', '14']

    const handleNextPage = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0)
    }

    return (
        <div className="reasons-page">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="reasons-back-btn"
            >
                ← Back
            </button>

            {/* Title */}
            <div className="reasons-title">
                <h1><span className="reasons-sparkle">✦</span> 14 reasons why I Love You</h1>
                <p className="reasons-subtitle">& still not enough</p>
            </div>

            {/* Main Content - 3 Column Grid Layout */}
            <div className="reasons-grid">
                {/* Row 1: 02, 01, 03 */}
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[1]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[1]}</span>
                    </div>
                </div>
                <div className="reason-cell reason-cell-wide">
                    <span className="reason-number">{reasonNumbers[0]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[0]}</span>
                    </div>
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[2]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[2]}</span>
                    </div>
                </div>

                {/* Row 2: 04, Video, 05 */}
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[3]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[3]}</span>
                    </div>
                </div>
                <div className="reason-cell reason-cell-video">
                    <img
                        src="/Aspect-ratio-16x9.svg.png"
                        alt="Love Illustration"
                        className="reasons-media"
                    />
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[4]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[4]}</span>
                    </div>
                </div>

                {/* Row 3: 06, 07 */}
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[5]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[5]}</span>
                    </div>
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{reasonNumbers[6]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentReasons[6]}</span>
                    </div>
                </div>
            </div>

            {/* Next/Prev Button */}
            <button className="reasons-nav-btn" onClick={handleNextPage}>
                {currentPage === 0 ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>
        </div>
    )
}


// ============================================
// 💕 14 PROMISES I CAN MAKE - Page Component
// ============================================
const PromisesPage = ({ onBack }: { onBack: () => void }) => {
    const [currentPage, setCurrentPage] = useState(0) // 0 = promises 1-7, 1 = promises 8-14

    const promises = valentinesPromises.reasons
    const currentPromises = currentPage === 0
        ? promises.slice(0, 7)
        : promises.slice(7, 14)

    const promiseNumbers = currentPage === 0
        ? ['01', '02', '03', '04', '05', '06', '07']
        : ['08', '09', '10', '11', '12', '13', '14']

    const handleNextPage = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0)
    }

    return (
        <div className="reasons-page">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="reasons-back-btn"
            >
                ← Back
            </button>

            {/* Title */}
            <div className="reasons-title">
                <h1><span className="reasons-sparkle">✦</span> 14 promises I can make</h1>
                <p className="reasons-subtitle">& I'll keep them all</p>
            </div>

            {/* Main Content - 3 Column Grid Layout */}
            <div className="reasons-grid">
                {/* Row 1: 02, 01, 03 */}
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[1]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[1]}</span>
                    </div>
                </div>
                <div className="reason-cell reason-cell-wide">
                    <span className="reason-number">{promiseNumbers[0]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[0]}</span>
                    </div>
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[2]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[2]}</span>
                    </div>
                </div>

                {/* Row 2: 04, Video, 05 */}
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[3]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[3]}</span>
                    </div>
                </div>
                <div className="reason-cell reason-cell-video">
                    <img
                        src="/Aspect-ratio-16x9.svg.png"
                        alt="Promise Illustration"
                        className="reasons-media"
                    />
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[4]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[4]}</span>
                    </div>
                </div>

                {/* Row 3: 06, 07 */}
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[5]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[5]}</span>
                    </div>
                </div>
                <div className="reason-cell">
                    <span className="reason-number">{promiseNumbers[6]}</span>
                    <div className="reason-bar">
                        <span className="reason-text">{currentPromises[6]}</span>
                    </div>
                </div>
            </div>

            {/* Next/Prev Button */}
            <button className="reasons-nav-btn" onClick={handleNextPage}>
                {currentPage === 0 ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>
        </div>
    )
}



// ============================================
// 💌 THE LETTER - Page Component
// ============================================
const LetterPage = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="letter-page-container">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="reasons-back-btn"
            >
                ← Back
            </button>

            <div className="letter-wrapper">
                <div className="letter-content">
                    {valentinesLetter.split('\n').map((paragraph, index) => (
                        <p key={index} className="letter-paragraph">
                            {paragraph}
                            <br />
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}


// ============================================
// 💍 MARRY ME - Page Component
// ============================================
const MarryMePage = ({ onBack }: { onBack: () => void }) => {
    const [interactionStage, setInteractionStage] = useState(0)

    const headings = [
        "Choose an option",
        "Do it properly",
        "Do it with a little more LOVE baby"
    ]

    const handleClick = () => {
        if (interactionStage < 3) {
            setInteractionStage(interactionStage + 1)
        }
    }

    if (interactionStage === 3) {
        return (
            <div className="marry-me-video-overlay">
                <video
                    src="/reasons-video.mp4"
                    className="marry-me-video"
                    autoPlay
                    controls
                    playsInline
                />
                <button
                    onClick={onBack}
                    className="marry-me-video-close-btn"
                >
                    ×
                </button>
            </div>
        )
    }

    return (
        <div className="marry-me-page-container">
            {/* Back Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onBack()
                }}
                className="reasons-back-btn"
            >
                ← Back
            </button>

            <div className="marry-me-content" onClick={handleClick}>
                <h1 className="marry-me-heading" key={interactionStage}>{headings[interactionStage]}</h1>
                <div className="marry-me-image-wrapper">
                    <img
                        src="/marry_me.png"
                        alt="Marry Me"
                        className="marry-me-image"
                    />
                </div>
            </div>
        </div>
    )
}

// Generic Event Day Reveal Page Component
const EventDayPage = ({ eventData, onBack }: { eventData: EventPageData, onBack: () => void }) => {
    const [messageRevealed, setMessageRevealed] = useState(false)
    const [activeEnvelope, setActiveEnvelope] = useState<number | null>(null)

    const handleRevealMessage = () => {
        setMessageRevealed(true)
    }

    const handleEnvelopeClick = (envelopeNumber: number) => {
        setActiveEnvelope(envelopeNumber)
    }

    const handleBackFromEnvelope = () => {
        setActiveEnvelope(null)
    }

    // If envelope 1 is active, show the ReasonsPage
    if (activeEnvelope === 1) {
        return <ReasonsPage onBack={handleBackFromEnvelope} />
    }

    // If envelope 2 is active, show the PromisesPage
    if (activeEnvelope === 2) {
        return <PromisesPage onBack={handleBackFromEnvelope} />
    }

    // If envelope 3 is active, show the LetterPage
    if (activeEnvelope === 3) {
        return <LetterPage onBack={handleBackFromEnvelope} />
    }

    // If envelope 4 is active, show the MarryMePage
    if (activeEnvelope === 4) {
        return <MarryMePage onBack={handleBackFromEnvelope} />
    }

    return (
        <div className="min-h-screen valentine-gradient flex flex-col items-center py-6 px-4 relative overflow-hidden">
            {/* Header - changes when revealed */}
            <div className={`text-center mb-4 z-10 transition-all duration-700 ${messageRevealed ? 'rose-revealed-header' : ''}`}>
                <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg">🎀</span>
                    <span className="text-pink-600 text-xs font-medium tracking-wide">Valentine's Week 2025</span>
                    <span className="text-lg">🎀</span>
                </div>
                <h1 className="valentine-title text-2xl md:text-3xl lg:text-4xl font-bold text-rose-600">
                    {messageRevealed ? eventData.titlePostReveal : eventData.titlePreReveal}
                </h1>
            </div>

            {/* Pre-Reveal Content */}
            {!messageRevealed && (
                <div className="flex-1 flex items-center justify-center w-full max-w-4xl px-4">
                    <div className="rose-day-card">
                        <div className="rose-day-card-content">
                            <p className="rose-day-text-main">
                                {eventData.mainMessage1}
                            </p>
                            <p className="rose-day-text-main">
                                {eventData.mainMessage2}
                            </p>
                            <p className="rose-day-text-sub">
                                {eventData.subMessage}
                            </p>
                        </div>

                        {/* Couple Image */}
                        <div className="rose-couple-container">
                            <img
                                src={eventData.coupleImage}
                                alt={`${eventData.name} Couple`}
                                className="rose-couple-image"
                            />
                        </div>

                        {/* Reveal Button */}
                        <button
                            className="rose-day-reveal-btn"
                            onClick={handleRevealMessage}
                        >
                            Reveal
                        </button>
                    </div>
                </div>
            )}

            {/* Post-Reveal Content */}
            {messageRevealed && (
                eventData.layout === 'envelopes' ? (
                    // 💌 Envelope Grid Layout (Valentine's Day Special)
                    <div className="flex items-center justify-center w-full min-h-[70vh] z-10 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 w-full max-w-6xl place-items-center">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="flex justify-center items-center w-full relative group cursor-pointer transition-transform hover:scale-105 duration-300"
                                    onClick={() => handleEnvelopeClick(i)}
                                >
                                    <img
                                        src="/envelope.png"
                                        alt={`Envelope ${i}`}
                                        className="w-full max-w-[350px] h-auto object-contain drop-shadow-2xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Standard Three Column Layout
                    <div className="rose-revealed-layout">
                        {/* Left - Hello Kitty Couple */}
                        <div className="rose-revealed-left">
                            <img
                                src={eventData.coupleImage}
                                alt={`${eventData.name} Couple`}
                                className="rose-couple-image-revealed"
                            />
                        </div>

                        {/* Center - Love Letter */}
                        <div className="rose-revealed-center">
                            <div className="love-letter-card">
                                <div className="love-letter-inner">
                                    <p className="love-letter-greeting">{eventData.letterGreeting}</p>
                                    <p className="love-letter-poem">
                                        {eventData.letterPoem.map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                {index < eventData.letterPoem.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="love-letter-closing">{eventData.letterClosing}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right - Video Player */}
                        <div className="rose-revealed-right">
                            <div className="video-container">
                                <video
                                    className="rose-day-video"
                                    autoPlay
                                    loop
                                    playsInline
                                    poster={eventData.videoPoster}
                                >
                                    <source src={eventData.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                )
            )}

            {/* Back Button */}
            <button
                onClick={onBack}
                className="fixed top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-pink-600 font-medium shadow-lg hover:bg-white transition-all opacity-100"
            >
                ← Back
            </button>
        </div>
    )
}


const ValentineWeekPage = ({ onRevealDay }: { onRevealDay: (dayName: string) => void }) => {
    return (
        <div className="min-h-screen valentine-gradient flex flex-col items-center py-6 px-4 relative overflow-hidden">
            {/* Header */}
            <div className="text-center mb-6 z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-pink-500 text-2xl">🎀</span>
                    <span className="text-pink-600 text-sm font-medium tracking-wide">Valentine's Week 2025</span>
                    <span className="text-pink-500 text-2xl">🎀</span>
                </div>
                <h1 className="valentine-title text-2xl md:text-3xl lg:text-4xl font-bold text-pink-700 mb-4">
                    Valentine's Week: Unlock Our Love Story
                </h1>

                {/* Progress Bar */}
                <ProgressBar currentDay={1} />
            </div>

            {/* Day Cards Grid */}
            <div className="day-cards-container z-10">
                {valentineDays.map((day) => (
                    <DayCard
                        key={day.date}
                        {...day}
                        onReveal={() => onRevealDay(day.name)}
                    />
                ))}
            </div>

            {/* Valentine's Day Special Card */}
            <div className="mt-6 z-10 w-full flex justify-center px-4">
                <ValentinesDayCard onReveal={() => onRevealDay("Valentine's Day")} />
            </div>
        </div>
    )
}

// Hello Kitty character component
const CuteCharacter = ({ isHappy }: { isHappy: boolean }) => (
    <div className={`relative transition-all duration-500 ${isHappy ? 'animate-bounce' : 'animate-float'}`}>
        <div className="relative w-60 h-60 mx-auto">
            <img
                src="/hello-kitty.png"
                alt="Hello Kitty"
                className="w-full h-full object-contain"
            />
        </div>
    </div>
)

// Confetti component
const Confetti = () => {
    const colors = ['#ec4899', '#f472b6', '#f9a8d4', '#fcd34d', '#60a5fa', '#a78bfa']
    const shapes = ['circle', 'square', 'triangle']

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 50 }).map((_, i) => {
                const color = colors[Math.floor(Math.random() * colors.length)]
                const shape = shapes[Math.floor(Math.random() * shapes.length)]
                const left = Math.random() * 100
                const delay = Math.random() * 2
                const duration = 2 + Math.random() * 2

                return (
                    <div
                        key={i}
                        className="absolute animate-confetti"
                        style={{
                            left: `${left}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                        }}
                    >
                        {shape === 'circle' && (
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                        )}
                        {shape === 'square' && (
                            <div className="w-3 h-3" style={{ backgroundColor: color }} />
                        )}
                        {shape === 'triangle' && (
                            <div
                                className="w-0 h-0"
                                style={{
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: `12px solid ${color}`
                                }}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

// Floating hearts background
const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {Array.from({ length: 8 }).map((_, i) => (
            <span
                key={i}
                className="absolute floating-heart"
                style={{
                    left: `${Math.random() * 100}%`,
                    fontSize: `${25 + Math.random() * 25}px`,
                    animationDelay: `${i * 1.5}s`,
                    animationDuration: `${12 + Math.random() * 6}s`,
                }}
            >
                🩷
            </span>
        ))}
    </div>
)



// Question Page Component
const QuestionPage = ({ onYes }: { onYes: () => void }) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [noAttempts, setNoAttempts] = useState(0)
    const [noButtonScale, setNoButtonScale] = useState(1)
    const [noButtonVisible, setNoButtonVisible] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)
    const noButtonRef = useRef<HTMLButtonElement>(null)

    // Messages that appear as the user tries to click "No"
    const noMessages = [
        "I hope you say yesssss! 💕",
        "Are you sure? 🤔",
        "Think again! 💭",
        "Pretty please? 🥺",
        "Don't break my heart! 💔",
        "You're making me sad 😢",
        "Just say yes! 💝",
        "I believe in us! ✨",
        "You know you want to! 😊",
        "The button is disappearing! 🌟",
    ]

    const moveNoButton = useCallback(() => {
        if (!containerRef.current || !noButtonRef.current) return

        const container = containerRef.current.getBoundingClientRect()
        const button = noButtonRef.current.getBoundingClientRect()

        // Calculate safe area within the container
        const maxX = container.width - button.width - 40
        const maxY = container.height - button.height - 40

        // Generate random position
        const newX = Math.random() * maxX - maxX / 2
        const newY = Math.random() * maxY - maxY / 2

        setNoButtonPosition({ x: newX, y: newY })
        setNoAttempts(prev => {
            const newAttempts = prev + 1
            // After 10 attempts, hide the button completely
            if (newAttempts >= 10) {
                setNoButtonVisible(false)
            }
            return Math.min(newAttempts, noMessages.length - 1)
        })
        // Shrink the button with each attempt (10% smaller each time)
        setNoButtonScale(prev => Math.max(prev - 0.1, 0))
    }, [noMessages.length])

    // Handle mouse approaching the No button
    const handleNoMouseEnter = () => {
        moveNoButton()
    }

    return (
        <div
            ref={containerRef}
            className="min-h-screen valentine-gradient flex items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background effects */}
            <FloatingHearts />

            {/* Main card */}
            <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative z-10">
                {/* Character */}
                <div className="mb-6">
                    <CuteCharacter isHappy={false} />
                </div>

                {/* Question */}
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                    Rose, will you be my Valentine?
                </h1>

                {/* Buttons */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="flex gap-4 items-center justify-center relative">
                        {/* Yes Button */}
                        <button
                            onClick={onYes}
                            className="btn-yes px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg animate-pulse-glow flex items-center gap-2"
                        >
                            <Heart className="w-5 h-5 fill-white" />
                            Yes
                        </button>

                        {/* No Button - runs away and shrinks */}
                        {noButtonVisible && (
                            <button
                                ref={noButtonRef}
                                onMouseEnter={handleNoMouseEnter}
                                onClick={moveNoButton}
                                className="btn-no px-6 py-3 rounded-full text-gray-600 font-semibold shadow-md hover:shadow-lg relative"
                                style={{
                                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonScale})`,
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                                    opacity: noButtonScale,
                                }}
                            >
                                No
                            </button>
                        )}
                    </div>

                    {/* Funny message */}
                    <p className="text-sm text-pink-600/70 text-center mt-4 animate-pulse">
                        {noMessages[noAttempts]}
                    </p>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [currentPage, setCurrentPage] = useState<string>('question')
    const [showConfetti, setShowConfetti] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('/bemybaby.webm')
        audioRef.current.loop = true

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const handleYes = () => {
        setShowConfetti(true)
        // Start playing the song
        audioRef.current?.play().catch(err => console.log("Audio playback failed:", err))

        // Show confetti for a moment, then transition to Valentine's Week page
        setTimeout(() => {
            setCurrentPage('valentineWeek')
            setShowConfetti(false)
        }, 2000)
    }

    const handleRevealDay = (dayName: string) => {
        // Check if it's one of the supported event days (not Valentine's Day)
        if (eventPagesData[dayName]) {
            setCurrentPage(dayName)
            // Stop audio when entering any event page
            audioRef.current?.pause()
        } else if (dayName === "Valentine's Day") {
            // Valentine's Day has its own special handling (to be implemented)
            console.log("Valentine's Day page - coming soon!")
        }
    }

    const handleBackToWeek = () => {
        setCurrentPage('valentineWeek')
        // Resume audio when returning to the second page (Valentine's Week)
        audioRef.current?.play().catch(err => console.log("Audio playback failed:", err))
    }

    // Get event data if we're on an event page
    const currentEventData = eventPagesData[currentPage]

    return (
        <>
            {showConfetti && <Confetti />}
            {currentPage === 'question' && (
                <QuestionPage onYes={handleYes} />
            )}
            {currentPage === 'valentineWeek' && (
                <ValentineWeekPage onRevealDay={handleRevealDay} />
            )}
            {currentEventData && (
                <EventDayPage eventData={currentEventData} onBack={handleBackToWeek} />
            )}
        </>
    )
}

export default App
