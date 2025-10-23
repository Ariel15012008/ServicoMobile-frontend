import { StyleSheet } from "react-native";
import Cores from "@/style_global/styles";


const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Cores.BG },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: Cores.BG,
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: Cores.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: { color: "#0a0f14", fontSize: 20, fontWeight: "800" },
  headerText: { flex: 1 },
  title: { color: Cores.TEXT, fontSize: 20, fontWeight: "700" },
  subtitle: { color: Cores.MUTED, fontSize: 13 },
  outlineBtn: {
    paddingHorizontal: 14,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Cores.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  outlineBtnText: { color: Cores.PRIMARY, fontWeight: "700" },

  content: {
    padding: 16,
    gap: 16,
  },
  row: { gap: 16 },
  card: {
    backgroundColor: Cores.CARD,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: Cores.BORDER,
    gap: 12,
  },
  cardFull: {
    backgroundColor: Cores.CARD,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: Cores.BORDER,
    gap: 10,
  },
  cardTitle: { color: Cores.TEXT, fontWeight: "700", fontSize: 16 },

  actions: { flexDirection: "row", gap: 10 },
  actionBtn: {
    flex: 1,
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Cores.PRIMARY,
  },
  actionText: { color: "#0a0f14", fontSize: 15, fontWeight: "800" },

  actionBtnGhost: {
    flex: 1,
    height: 46,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Cores.PRIMARY,
    backgroundColor: "transparent",
  },
  actionGhostText: { color: Cores.PRIMARY, fontSize: 15, fontWeight: "800" },

  metrics: { flexDirection: "row", justifyContent: "space-between" },
  metric: { alignItems: "center", flex: 1 },
  metricValue: { color: Cores.TEXT, fontSize: 22, fontWeight: "800" },
  metricLabel: { color: Cores.MUTED, fontSize: 12, marginTop: 2 },

  listItem: { flexDirection: "row", alignItems: "center", gap: 8 },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: Cores.PRIMARY_DARK,
  },
  itemText: { color: Cores.TEXT, fontSize: 14 },
});
export default styles;