import React from "react";
import { SafeAreaView, View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { PieChart, LineChart } from "react-native-chart-kit";


//Riceve tutte le liste della spesa
const AnalysisScreen = ({ lists }) => {
  // Calcola le spese per categoria
  const getCategoryData = () => {
    const categoryTotals = {};
    lists.forEach(list => {
      list.items.forEach(item => {
        if (!categoryTotals[item.category]) {
          categoryTotals[item.category] = 0;
        }
        categoryTotals[item.category] += item.price * item.quantity;
      });
    });

    // Converte in formato per PieChart
    return Object.keys(categoryTotals).map((category, index) => ({
      name: category,
      population: categoryTotals[category],
      color: colors[index % colors.length],
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    }));
  };

  // Array di colori per il grafico
  const colors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", 
    "#9966FF", "#FF9F40", "#FF6384", "#C9CBCF"
  ];

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Spese per Categoria</Text>
          <PieChart
            data={getCategoryData()}
            width={screenWidth - 16}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 10]}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Statistiche Generali</Text>
          <View style={styles.statsContainer}>
            <StatBox 
              title="Liste Totali" 
              value={lists.length} 
            />
            <StatBox 
              title="Prodotti Totali" 
              value={lists.reduce((acc, list) => acc + list.items.length, 0)} 
            />
            <StatBox 
              title="Spesa Totale" 
              value={`€${lists.reduce((acc, list) => 
                acc + list.items.reduce((sum, item) => 
                  sum + (item.price * item.quantity), 0), 0).toFixed(2)}`} 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StatBox = ({ title, value }) => (
  <View style={styles.statBox}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2c3e50',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statBox: {
    width: '30%',
    backgroundColor: '#ecf0f1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  statTitle: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
  },
});

export default AnalysisScreen;