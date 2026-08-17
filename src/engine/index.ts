/**
 * The engine holds every rule of the game as a pure function. Nothing here
 * imports React, touches storage, or reads the clock — callers pass the current
 * day in, which is what makes streak and review logic testable without waiting
 * for tomorrow.
 */

export * from './levels'
export * from './xp'
export * from './mastery'
export * from './streak'
export * from './review'
export * from './achievements'
