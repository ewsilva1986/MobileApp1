import React from "react"
import { StyleSheet, Text, Image } from 'react-native';
import { Button, 
    NativeBaseProvider, 
    Input, 
    VStack, 
    FormControl, 
    Box 
} from "native-base"

export default function Cadastro () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyC5BchICFatfBQb_Fk4jc_-2DdCVLmTuV0",
        authDomain: "sample-app-b861e.firebaseapp.com",
        projectId: "sample-app-b861e",
        storageBucket: "sample-app-b861e.appspot.com",
        messagingSenderId: "545304738369",
        appId: "1:545304738369:web:a605abbd8ab2e76b8524c0",
        measurementId: "G-V0GBZ3XDBZ"
    };
    
    const app = initializeApp(firebaseConfig);

    function signUpFireBase () {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    
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
                        CPF
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
                        <Input placeholder="Usuário" mx="3" style={styles.input}
                            w={{
                                base: "75%",
                                md: "25%",
                            }}
                            value={email}
                            onChangeText={email => {setEmail(email)}}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                        _text={{
                            color: 'coolGray.800',
                            fontSize: 'xl',
                            fontWeight: 500,
                        }}>
                        Senha
                        </FormControl.Label>
                        <Input 
                            type="password"
                            overflow="visible"
                            w={{
                            base: "75%",
                            md: "25%",
                            }}
                            placeholder="Password"
                            value={password}
                            onChangeText={password => {setPassword(password)}}
                        />
                    </FormControl>
                    <Button style={styles.button}
                    onPress={
                        () => {signUpFireBase()}
                    }
                    >Salvar</Button>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
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