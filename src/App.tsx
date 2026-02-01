import { useState, useRef, useCallback } from 'react'
import { Heart, Sparkles, PartyPopper } from 'lucide-react'

// Cute character component
const CuteCharacter = ({ isHappy }: { isHappy: boolean }) => (
    <div className={`relative transition-all duration-500 ${isHappy ? 'animate-bounce' : 'animate-float'}`}>
        {/* Character body */}
        <div className="relative w-32 h-32 mx-auto">
            {/* Ears */}
            <div className="absolute -top-2 left-4 w-8 h-10 bg-amber-200 rounded-full transform -rotate-12 border-2 border-amber-300" />
            <div className="absolute -top-2 right-4 w-8 h-10 bg-amber-200 rounded-full transform rotate-12 border-2 border-amber-300" />

            {/* Head */}
            <div className="absolute inset-0 bg-amber-100 rounded-full border-2 border-amber-200 shadow-lg">
                {/* Eyes */}
                <div className="absolute top-10 left-8 w-4 h-4 bg-gray-800 rounded-full">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <div className="absolute top-10 right-8 w-4 h-4 bg-gray-800 rounded-full">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                {/* Cheeks */}
                <div className="absolute top-14 left-5 w-5 h-3 bg-pink-300 rounded-full opacity-60" />
                <div className="absolute top-14 right-5 w-5 h-3 bg-pink-300 rounded-full opacity-60" />

                {/* Mouth */}
                <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHappy ? 'w-6 h-4' : 'w-3 h-2'}`}>
                    <div className={`w-full h-full bg-pink-400 rounded-full ${isHappy ? 'rounded-b-full' : 'rounded-full'}`} />
                </div>

                {/* Heart on head */}
                <div className={`absolute -top-3 right-2 transition-all duration-500 ${isHappy ? 'animate-heartbeat scale-125' : ''}`}>
                    <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                </div>
            </div>
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
            <Heart
                key={i}
                className="absolute floating-heart text-pink-300"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 30}px`,
                    height: `${20 + Math.random() * 30}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${6 + Math.random() * 4}s`,
                }}
            />
        ))}
    </div>
)

// Sparkle effect
const SparklesEffect = ({ show }: { show: boolean }) => {
    if (!show) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            {Array.from({ length: 20 }).map((_, i) => (
                <Sparkles
                    key={i}
                    className="absolute text-yellow-400 animate-sparkle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${16 + Math.random() * 16}px`,
                        height: `${16 + Math.random() * 16}px`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    )
}

function App() {
    const [saidYes, setSaidYes] = useState(false)
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [noAttempts, setNoAttempts] = useState(0)
    const [showConfetti, setShowConfetti] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const noButtonRef = useRef<HTMLButtonElement>(null)

    // Messages that appear as the user tries to click "No"
    const noMessages = [
        "\"No\" seems a bit shy 💜",
        "Are you sure? 🤔",
        "Think again! 💭",
        "Pretty please? 🥺",
        "Don't break my heart! 💔",
        "You're making me sad 😢",
        "Just say yes! 💝",
        "I believe in us! ✨",
        "You know you want to! 😊",
        "Come on, say yes! 🌟",
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
        setNoAttempts(prev => Math.min(prev + 1, noMessages.length - 1))
    }, [noMessages.length])

    const handleYes = () => {
        setSaidYes(true)
        setShowConfetti(true)
        // Hide confetti after animation
        setTimeout(() => setShowConfetti(false), 5000)
    }

    // Handle mouse approaching the No button
    const handleNoMouseEnter = () => {
        if (!saidYes) {
            moveNoButton()
        }
    }

    return (
        <div
            ref={containerRef}
            className="min-h-screen valentine-gradient flex items-center justify-center p-4 relative overflow-hidden"
        >
            {/* Background effects */}
            <FloatingHearts />
            {showConfetti && <Confetti />}
            <SparklesEffect show={saidYes} />

            {/* Main card */}
            <div className={`glass-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative z-10 transition-all duration-500 ${saidYes ? 'scale-105' : ''}`}>
                {/* Character */}
                <div className="mb-6">
                    <CuteCharacter isHappy={saidYes} />
                </div>

                {/* Question */}
                <h1 className={`text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 transition-all duration-500 ${saidYes ? 'animate-slide-up' : ''}`}>
                    {saidYes ? (
                        <span className="flex items-center justify-center gap-2">
                            YAY! <PartyPopper className="w-8 h-8 text-pink-500 animate-bounce" />
                        </span>
                    ) : (
                        "Rose, Will you be my valentine?"
                    )}
                </h1>

                {/* Success message */}
                {saidYes && (
                    <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <p className="text-lg text-pink-600 font-medium mb-4">
                            You made me the happiest person! 💕
                        </p>
                        <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl animate-bounce-in">
                            <img
                                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZ6YjB3d2R5Z2J4Z3J4Z2J4Z2J4Z2J4Z2J4Z2J4Z2J4Z2J4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abB06u9bNzA8lu8/giphy.gif"
                                alt="Celebration"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback if GIF fails to load
                                    const target = e.target as HTMLImageElement
                                    target.src = 'https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif'
                                }}
                            />
                        </div>
                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Heart
                                    key={i}
                                    className="w-6 h-6 text-pink-500 fill-pink-500 animate-heartbeat"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Buttons */}
                {!saidYes && (
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <div className="flex gap-4 items-center justify-center relative">
                            {/* Yes Button */}
                            <button
                                onClick={handleYes}
                                className="btn-yes px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg animate-pulse-glow flex items-center gap-2"
                            >
                                <Heart className="w-5 h-5 fill-white" />
                                Yes
                            </button>

                            {/* No Button - runs away */}
                            <button
                                ref={noButtonRef}
                                onMouseEnter={handleNoMouseEnter}
                                onClick={moveNoButton}
                                className="btn-no px-6 py-3 rounded-full text-gray-600 font-semibold shadow-md hover:shadow-lg relative"
                                style={{
                                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                No
                            </button>
                        </div>

                        {/* Funny message */}
                        <p className="text-sm text-pink-600/70 text-center mt-4 animate-pulse">
                            {noMessages[noAttempts]}
                        </p>
                    </div>
                )}
            </div>

            {/* Decorative elements */}
            <div className="fixed bottom-4 left-4 text-pink-600/40 text-sm font-medium">
                Made with 💕 By Daksh
            </div>
        </div>
    )
}

export default App
