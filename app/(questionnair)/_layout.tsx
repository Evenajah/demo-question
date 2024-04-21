import { View } from "@/components/Themed";
import useQuestionnair from "@/shared/custom-hooks/useQuestionnaire";
import { ScrollView, StyleSheet } from "react-native";
import { Appbar, RadioButton, Text, TouchableRipple } from "react-native-paper";

export default function QuestionnairScreen() {
  const { questionnairs, patchAnswers } = useQuestionnair();

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Questionnair" />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.scrollStyle}>
          {questionnairs.map((question, qIndex) => (
            <View key={qIndex}>
              <Text variant="titleLarge">Question {qIndex + 1}</Text>
              <Text variant="titleMedium">{question.questionDesc}</Text>

              {question.answers.map((answer, aIndex) => (
                <RadioButton.Group
                  key={aIndex}
                  onValueChange={(newValue) =>
                    patchAnswers(question.questionId, newValue)
                  }
                  value={question.selectedAnswer}>
                  <TouchableRipple
                    onPress={() =>
                      patchAnswers(question.questionId, answer.answerId)
                    }>
                    <View style={styles.answerContainer}>
                      <RadioButton value={answer.answerId} />
                      <Text>{answer.answerDesc}</Text>
                    </View>
                  </TouchableRipple>
                </RadioButton.Group>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  scrollStyle: {
    marginHorizontal: 10,
  },
  answerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
