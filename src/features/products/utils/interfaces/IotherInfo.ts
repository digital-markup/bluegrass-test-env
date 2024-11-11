export interface InfoStoreProps {
    info: Array<{ id: string; title: string; description: string; }>;
    setInfo: (title: string, description: string) => void;
    deleteInfo: (id: string) => void;
    clearStore: () => void;
}