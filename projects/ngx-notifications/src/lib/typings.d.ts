/**
 * PUBLIC
 */
export interface NotificationOptions {
    timeout: number
    clickable: boolean
    dismissable: boolean
    dismissOnClick: boolean
}

/**
 * PRIVATE
 */
export type NotificationType = 'info' | 'success' | 'warning' | 'error'
