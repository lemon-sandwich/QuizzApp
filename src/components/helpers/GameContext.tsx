import { createContext } from "react";
type GameStateContextType = {
    gameState: string;
    setGameState: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>
}
export const GameStateContext = createContext<GameStateContextType>({gameState: "", setGameState: () => {}, name: "", setName: () => {},score: 0, setScore: () => {}});