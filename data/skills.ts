import type { SkillGroup } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Android',
    icon: 'android',
    skills: ['Kotlin', 'Java', 'Android SDK', 'XML', 'Jetpack', 'Jetpack Compose', 'Material Design'],
  },
  {
    name: 'Architecture',
    icon: 'architecture',
    skills: ['MVVM', 'Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'Hilt'],
  },
  {
    name: 'Async & Networking',
    icon: 'async',
    skills: ['Kotlin Coroutines', 'Retrofit', 'OkHttp', 'REST APIs'],
  },
  {
    name: 'Database',
    icon: 'database',
    skills: ['Room Database', 'SQLite'],
  },
  {
    name: 'Firebase',
    icon: 'firebase',
    skills: ['Firebase', 'Crashlytics', 'Analytics', 'Google Services'],
  },
  {
    name: 'Maps & Location',
    icon: 'maps',
    skills: ['Google Maps', 'Location APIs', 'GPS', 'Navigation'],
  },
  {
    name: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'Gradle', 'KSP', 'Android Studio'],
  },
];
