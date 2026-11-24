// All landing-page copy lives here. Edit text in this file, not in the components.

export const hero = {
    badge: 'Peer support for men in college',
    titleStart: "You don't have to carry it",
    titleEmphasis: 'alone.',
    body: 'Talk to a trained student listener. No judgment. No labels. No one you know has to find out.',
    cta: 'Talk to someone',
    note: 'Anonymous by default. First 2 sessions free.',
    listenerPrompt: 'Want to listen instead?',
    listenerLink: 'Become a Listener',
} as const

export const quote = {
    text: 'Strong men talk. Silence was never the strength.',
    author: 'Aven',
} as const

export const weights = {
    eyebrow: 'Unspoken weights',
    title: 'Things men carry quietly',
    tags: [
        'Exam pressure',
        'Breakup',
        'Feeling lonely',
        'Family expectations',
        'Career confusion',
        "Anger I can't explain",
        'Feeling stuck',
        'Just tired',
    ],
    footnote: "Whatever it is, it's okay to say it out loud.",
} as const

export const steps = [
    {
        title: "Tell us what's on your mind",
        text: 'Pick a few tags. Add a few words if you want. That is all.',
    },
    {
        title: 'Meet your listeners',
        text: 'We suggest 2 to 4 student listeners who fit what you are going through.',
    },
    {
        title: 'Talk, in private',
        text: 'Chat with your listener for 10 minutes. Your first 2 sessions are free.',
    },
] as const

export type PromiseIcon = 'nickname' | 'chat' | 'reviewed' | 'delete'

export const trust = {
    eyebrow: 'Privacy first',
    title: 'Your space. Your rules.',
    promises: [
        { icon: 'nickname', text: 'Use a nickname. We do not need your real name.' },
        { icon: 'chat', text: 'Your chat is between you and your listener.' },
        { icon: 'reviewed', text: 'Every listener is reviewed before they go live.' },
        { icon: 'delete', text: 'You can delete your account and data anytime.' },
    ] satisfies ReadonlyArray<{ icon: PromiseIcon; text: string }>,
    disclaimer: 'Aven offers peer support, not a replacement for professional therapy.',
} as const

export const pricing = {
    eyebrow: 'Pricing',
    title: 'Free to start. Fair after that.',
    text: 'Your first 2 sessions are completely free. After that, each 10-minute session is just ₹50. We keep it affordable for students.',
} as const

export const finalCta = {
    title: 'Ready when you are.',
    text: 'No pressure. Take the first step at your own pace.',
    cta: 'Talk to someone',
    listenerPrompt: 'Want to listen?',
    listenerLink: 'Become a Listener',
} as const

export const crisis = {
    lead: 'In a crisis? Call',
    cta: 'Get help now',
} as const