/**
 * PUBLIC
 */
export interface NotificationOptions {
    timeout?: number
    clickable?: boolean
}

/**
 * PRIVATE
 */
export type NotificationType = 'info' | 'success' | 'warning' | 'error'
