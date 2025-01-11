import { useTheme } from '@/hooks/useTheme'

export const getColors = () => {
    const theme = useTheme.getState().theme
    if (theme === 'light') {
        return {
            primary: '#ffffff',
            secondary: '#f0f0f0',
            button: '#f4c752',
            buttonText: '#000000',
            text: '#000000',
            secondaryText: '#939393',
        }
    } else {
        return {
            primary: '#141c25',
            secondary: '#29384c',
            button: '#f4c752',
            buttonText: '#000000',
            text: '#ffffff',
            secondaryText: '#CBD5E1',
        }
    }
}
