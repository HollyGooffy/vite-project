export interface InputProps{
    icon?: React.ReactNode | null;
    placeholder?: string;
    onSearch?: (value: string) => void;
    clearable?: boolean;
}