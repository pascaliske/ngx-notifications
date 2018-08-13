/**
 * PUBLIC
 */
export interface NotificationOptions {
    timeout?: number
    dismissOnClick?: boolean
}

/**
 * PRIVATE
 */
export type NotificationType = 'info' | 'success' | 'warning' | 'error'
