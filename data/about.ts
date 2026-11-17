export const ABOUT = {
  headline: 'A developer who cares about craft and substance.',
  paragraphs: [
    'Android Developer with 2+ years of professional experience designing, building, and maintaining high-performance mobile applications using Kotlin, Java, and XML. Skilled in MVVM and Clean Architecture, REST API integration with Retrofit, Firebase-backed data management, Android permissions management, and Google Mobile Ads SDK integration.',
    'Built and shipped a portfolio of multiple Android applications spanning navigation, productivity, and AI-powered tools such as Cursor, Claude, and Antigravity. Comfortable working independently or within Agile teams, with a strong focus on clean code, polished UI, and reliable performance.',
  ],
  cards: [
    {
      title: 'Architecture',
      body: 'MVVM, Clean Architecture, Modularization, and ViewModel for scalable, maintainable Android codebases.',
      icon: 'architecture' as const,
    },
    {
      title: 'Engineering',
      body: 'Kotlin, Java, Coroutines, Retrofit, and REST APIs for robust async work and reliable integrations.',
      icon: 'async' as const,
    },
    {
      title: 'Data & Backend',
      body: 'Firebase, Room, SQLite, Supabase, and SharedPreferences for auth, realtime data, and local storage.',
      icon: 'firebase' as const,
    },
    {
      title: 'Product Delivery',
      body: 'Agile/Scrum collaboration, AdMob monetization, permissions handling, and AI-assisted development workflows.',
      icon: 'tools' as const,
    },
  ],
} as const;
