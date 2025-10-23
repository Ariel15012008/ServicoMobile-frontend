// app/index.tsx
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack, useRouter } from "expo-router";
import styles from "./styles";


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Z</Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>Olá 👋</Text>
            <Text style={styles.subtitle}>Bem-vindo à sua Home</Text>
          </View>
          <Pressable
            onPress={() => router.replace("/pages/login")}
            style={({ pressed }) => [
              styles.outlineBtn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={styles.outlineBtnText}>Sair</Text>
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Atalhos</Text>
              <View style={styles.actions}>
                <Pressable
                  onPress={() => router.push("/pages/login")}
                  style={({ pressed }) => [
                    styles.actionBtn,
                    { opacity: pressed ? 0.8 : 1 },
                  ]}
                >
                  <Text style={styles.actionText}>Ir para Login</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Resumo</Text>
              <View style={styles.metrics}>
                <View style={styles.metric}>
                  <Text style={styles.metricValue}>12</Text>
                  <Text style={styles.metricLabel}>Tarefas</Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricValue}>3</Text>
                  <Text style={styles.metricLabel}>Pendentes</Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricValue}>9</Text>
                  <Text style={styles.metricLabel}>Concluídas</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cardFull}>
            <Text style={styles.cardTitle}>Notícias</Text>
            <View style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.itemText}>Bem-vindo ao seu app Expo.</Text>
            </View>
            <View style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.itemText}>Personalize esta Home como quiser.</Text>
            </View>
            <View style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.itemText}>Use a cor principal para ações.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
