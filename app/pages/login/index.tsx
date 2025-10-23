// app/login/index.tsx
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Cores from "@/style_global/styles";
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrar, setLembrar] = useState(true);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleLogin() {
    setErro("");
    if (!email || !senha) {
      setErro("Preencha e-mail e senha.");
      return;
    }
    try {
      setLoading(true);
      // TODO: autenticar no seu backend e salvar token (SecureStore/AsyncStorage)
      await new Promise((r) => setTimeout(r, 800));
      router.replace("/pages/home"); 
    } catch {
      setErro("Falha no login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  const canSubmit = email.length > 3 && senha.length >= 6 && !loading;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.container}>
            <View style={styles.brand}>
              <View style={styles.logoCircle}>
                <Text style={styles.logoText}>Z</Text>
              </View>
              <Text style={styles.title}>Entrar</Text>
              <Text style={styles.subtitle}>Acesse sua conta</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.field}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="voce@empresa.com"
                  placeholderTextColor={Cores.MUTED}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={styles.input}
                  returnKeyType="next"
                />
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Senha</Text>
                <View style={styles.passwordRow}>
                  <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Sua senha"
                    placeholderTextColor={Cores.MUTED}
                    secureTextEntry={!mostrarSenha}
                    style={[styles.input, styles.inputPassword]}
                    returnKeyType="go"
                    onSubmitEditing={handleLogin}
                  />
                  <Pressable
                    onPress={() => setMostrarSenha((v) => !v)}
                    style={styles.showBtn}
                  >
                    {mostrarSenha ? (
                      <AntDesign name="eye-invisible" size={20} color={Cores.PRIMARY} />
                    ) : (
                      <Ionicons name="eye" size={20} color={Cores.PRIMARY} />
                    )}
                  </Pressable>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <View style={styles.rowCenter}>
                  <Switch
                    value={lembrar}
                    onValueChange={setLembrar}
                    thumbColor={lembrar ? Cores.PRIMARY : "#fff"}
                    trackColor={{ false: "#3a3f46", true: Cores.PRIMARY_DARK }}
                  />
                  <Text style={styles.muted}>Lembrar de mim</Text>
                </View>
              </View>

              {!!erro && <Text style={styles.error}>{erro}</Text>}

              <Pressable
                onPress={handleLogin}
                disabled={!canSubmit}
                style={({ pressed }) => [
                  styles.btn,
                  { opacity: !canSubmit || pressed ? 0.7 : 1 },
                ]}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.btnText}>Entrar</Text>
                )}
              </Pressable>
            </View>
            <Text style={styles.footnote}>© {new Date().getFullYear()} — Seu App</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

