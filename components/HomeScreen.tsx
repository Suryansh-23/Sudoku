import { Text, Center, VStack, Button } from "native-base";

const HomeScreen = ({ navigation }) => {
    return (
        <Center _light={{ bg: "blueGray.50" }} px={4} flex={1}>
            <VStack space={5} alignItems="center">
                <Text fontSize={"5xl"}>Sudoku</Text>
                <Button
                    onPress={() => navigation.navigate("Game")}
                    width={"56"}
                >
                    New Game
                </Button>
            </VStack>
        </Center>
    );
};

export default HomeScreen;
