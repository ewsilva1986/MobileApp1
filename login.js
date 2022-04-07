import React, { useState } from "react"
import { StyleSheet, Text, Image } from 'react-native';
import { Button, Center, NativeBaseProvider, Input, View } from "native-base"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [show, setShow] = React.useState(false);
    const [password, setPassword] = useState("");
    const handleClick = () => setShow(!show)

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

    function loginFireBase () {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log('Login ok!');
            const user = userCredential.user;
            // this.props.navigation.navigate('Home')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3" style={styles.container}>
                {/* <a href="https://iconscout.com/icons/contact" target="_blank">Contact Icon</a> on <a href="https://iconscout.com">Iconscout</a> */}
                <Image source = {require('../assets/user.png')} style={styles.image}/>
                <Input placeholder="Usuário" mx="3" style={styles.input}
                    w={{
                        base: "75%",
                        md: "25%",
                    }}
                    value={email}
                    onChangeText={email => {setEmail(email)}}
                />
                <Input 
                    type={"password"}
                    overflow="visible"
                    w={{
                    base: "75%",
                    md: "25%",
                    }}
                    InputRightElement={
                    <Button size="xs" m="1" onPress={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                    }
                    placeholder="Password"
                    value={password}
                    onChangeText={password => {setPassword(password)}}
                />
                <Button style={styles.button}
                onPress={
                    () => {loginFireBase()}
                }>Login</Button>
                <Button style={styles.button}
                onPress={
                    () => this.props.navigation.navigate('Cadastro')
                }>Cadastro</Button>
            </Center>
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
    image : {
        width: 70,
        height: 70,
        marginBottom: 40
    },
    input: {
        marginTop: 20
    },
    button: {
        marginTop: 20
    }
});
