import { useState } from "react";
import { Questionnair } from "../interfaces/Questionnair";

const useQuestionnair = () => {
  const initialQuestionnairs: Questionnair[] = [
    {
      questionId: 1,
      questionDesc:
        "How satisfied are you with the overall quality of our product/service?",
      answers: [
        {
          answerId: "1",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "2",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "3",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "4",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 2,
      questionDesc:
        "How likely are you to recommend our product/service to others?",
      answers: [
        {
          answerId: "5",
          answerDesc: "Very Likely",
          impactValue: 5,
        },
        {
          answerId: "6",
          answerDesc: "Likely",
          impactValue: 4,
        },
        {
          answerId: "7",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "8",
          answerDesc: "Unlikely",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 3,
      questionDesc:
        "How satisfied are you with the ease of use of our product/service?",
      answers: [
        {
          answerId: "9",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "10",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "11",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "12",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 4,
      questionDesc:
        "How responsive have we been to your questions or concerns about our product/service?",
      answers: [
        {
          answerId: "13",
          answerDesc: "Very Responsive",
          impactValue: 5,
        },
        {
          answerId: "14",
          answerDesc: "Responsive",
          impactValue: 4,
        },
        {
          answerId: "15",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "16",
          answerDesc: "Unresponsive",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 5,
      questionDesc:
        "How would you rate the professionalism of our customer support team?",
      answers: [
        {
          answerId: "17",
          answerDesc: "Very Professional",
          impactValue: 5,
        },
        {
          answerId: "18",
          answerDesc: "Professional",
          impactValue: 4,
        },
        {
          answerId: "19",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "20",
          answerDesc: "Unprofessional",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 6,
      questionDesc:
        "How satisfied are you with the variety of features and options our product/service offers?",
      answers: [
        {
          answerId: "21",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "22",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "23",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "24",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 7,
      questionDesc:
        "How would you rate the speed and efficiency of our product/service?",
      answers: [
        {
          answerId: "25",
          answerDesc: "Excellent",
          impactValue: 5,
        },
        {
          answerId: "26",
          answerDesc: "Good",
          impactValue: 4,
        },
        {
          answerId: "27",
          answerDesc: "Average",
          impactValue: 3,
        },
        {
          answerId: "28",
          answerDesc: "Poor",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 8,
      questionDesc:
        "How satisfied are you with the clarity and transparency of our pricing?",
      answers: [
        {
          answerId: "29",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "30",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "31",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "32",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 9,
      questionDesc:
        "How likely are you to continue using our product/service in the future?",
      answers: [
        {
          answerId: "33",
          answerDesc: "Very Likely",
          impactValue: 5,
        },
        {
          answerId: "34",
          answerDesc: "Likely",
          impactValue: 4,
        },
        {
          answerId: "35",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "36",
          answerDesc: "Unlikely",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 10,
      questionDesc:
        "How satisfied are you with the level of customization options available in our product/service?",
      answers: [
        {
          answerId: "37",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "38",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "39",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "40",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 11,
      questionDesc:
        "How satisfied are you with the level of customer service provided by our team?",
      answers: [
        {
          answerId: "41",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "42",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "43",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "44",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 12,
      questionDesc:
        "How well does our product/service meet your specific needs and requirements?",
      answers: [
        {
          answerId: "45",
          answerDesc: "Very Well",
          impactValue: 5,
        },
        {
          answerId: "46",
          answerDesc: "Well",
          impactValue: 4,
        },
        {
          answerId: "47",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "48",
          answerDesc: "Not Well",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 13,
      questionDesc:
        "How satisfied are you with the frequency of updates or improvements to our product/service?",
      answers: [
        {
          answerId: "49",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "50",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "51",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "52",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 14,
      questionDesc:
        "How satisfied are you with the accessibility of our product/service across different devices/platforms?",
      answers: [
        {
          answerId: "53",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "54",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "55",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "56",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 15,
      questionDesc:
        "How likely are you to recommend our product/service to others based on your current experience?",
      answers: [
        {
          answerId: "57",
          answerDesc: "Very Likely",
          impactValue: 5,
        },
        {
          answerId: "58",
          answerDesc: "Likely",
          impactValue: 4,
        },
        {
          answerId: "59",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "60",
          answerDesc: "Unlikely",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 16,
      questionDesc:
        "How satisfied are you with the reliability and stability of our product/service?",
      answers: [
        {
          answerId: "61",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "62",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "63",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "64",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 17,
      questionDesc:
        "How satisfied are you with the level of personalization/customization available in our product/service?",
      answers: [
        {
          answerId: "65",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "66",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "67",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "68",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 18,
      questionDesc:
        "How satisfied are you with the performance of our product/service under heavy usage?",
      answers: [
        {
          answerId: "69",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "70",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "71",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "72",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 19,
      questionDesc:
        "How satisfied are you with the user interface and design of our product/service?",
      answers: [
        {
          answerId: "73",
          answerDesc: "Very Satisfied",
          impactValue: 5,
        },
        {
          answerId: "74",
          answerDesc: "Satisfied",
          impactValue: 4,
        },
        {
          answerId: "75",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "76",
          answerDesc: "Dissatisfied",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
    {
      questionId: 20,
      questionDesc:
        "How likely are you to continue using our product/service in the long term?",
      answers: [
        {
          answerId: "77",
          answerDesc: "Very Likely",
          impactValue: 5,
        },
        {
          answerId: "78",
          answerDesc: "Likely",
          impactValue: 4,
        },
        {
          answerId: "79",
          answerDesc: "Neutral",
          impactValue: 3,
        },
        {
          answerId: "80",
          answerDesc: "Unlikely",
          impactValue: 2,
        },
      ],
      selectedAnswer: "",
    },
  ];

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [questionnairs, setQuestionnair] = useState<Questionnair[]>(() => {
    return shuffleArray(initialQuestionnairs);
  });

  const patchAnswers = (questionId: number, answerId: string) => {
    const updatedQuestionnairs = questionnairs.map((question) =>
      question.questionId === questionId
        ? { ...question, selectedAnswer: answerId }
        : question
    );

    setQuestionnair(updatedQuestionnairs);
  };

  return {
    questionnairs,
    patchAnswers,
  };
};

export default useQuestionnair;
