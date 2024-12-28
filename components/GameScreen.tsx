import {
    Center,
    HStack,
    VStack,
    Box,
    Button,
    Icon,
    IconButton,
    Text,
    Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const GameTopBar = ({ navigation }) => {
    return (
        <Box width="full">
            <HStack justifyContent="space-between" width="full">
                <IconButton
                    _icon={{
                        as: AntDesign,
                        name: "arrowleft",
                        size: "lg",
                        color: "amber.400",
                    }}
                    name="cloud-upload-outline"
                    size="lg"
                    color="amber.400"
                />
                <Box>
                    <Text fontSize="3xl">00:03:14</Text>
                </Box>
                <Box>🟥🟥🟥</Box>
            </HStack>
        </Box>
    );
};

const SudokuGrid = () => {
    const grid = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    return (
        <Box width="full" justifyContent="space-evenly">
            <VStack>
                {grid.map((i, ind) => {
                    return (
                        <HStack key={ind}>
                            {i.map((j) => {
                                return (
                                    <Pressable
                                        key={j}
                                        fontSize="lg"
                                        textAlign="center"
                                        width={7}
                                        height={7}
                                    >
                                        {j}
                                    </Pressable>
                                );
                            })}
                        </HStack>
                    );
                })}
            </VStack>
        </Box>
    );
};

const GameScreen = ({ navigation }) => {
    return (
        <VStack width="full">
            <GameTopBar navigation />
            <SudokuGrid />
        </VStack>
    );
};

export default GameScreen;

