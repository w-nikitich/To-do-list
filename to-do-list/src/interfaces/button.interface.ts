export interface IButton {
    type: 'sm' | 'lg' | 'update' | 'cancel' | 'create',
    onClick: () => void
}