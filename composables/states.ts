export const useTitle = () => useState<String>('title', () => 'Thinkin Service')
export const useNavRoute = () => useState<string>('route', () => '')
export const usePin = () => useState<Object>('pin', () => null)
export const useToken = () => useState<string>('token', () => '')