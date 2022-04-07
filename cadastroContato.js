import React from "react"
import { StyleSheet, Text, Image } from 'react-native';
import { Button, Center, NativeBaseProvider, Input, VStack, FormControl, Box } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"


class CadastroContato extends React.Component {
    render () {
        return (
            <NativeBaseProvider>
                <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize: 'xl',
                                fontWeight: 500,
                            }}>
                            Nome
                            </FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize: 'xl',
                                fontWeight: 500,
                            }}>
                            Email
                            </FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize: 'xl',
                                fontWeight: 500,
                            }}>
                            Telefone
                            </FormControl.Label>
                            <Input />
                        </FormControl>
                        <Button style={styles.button}
                        // onPress={
                        //     () => this.props.navigation.navigate('Cadastro')
                        // }
                        >Salvar</Button>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        marginBottom: 20
    },
    button: {
        marginTop: 20
    },
    text: {
        textAlign: 'left',
        fontSize: 20
    }
});

export default CadastroContato;