import React from 'react';

const PertanyaanKalimat = ({ question, answers, selectedAnswer, onAnswerClick }) => {
  return (
    <div className="flex flex-col items-start">
      <img src={question.image} alt="Question" className="w-1/4 h-auto mb-4" />
      <div className="flex flex-col gap-2 w-full">
        {answers.map((answer, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => onAnswerClick(index)}
              className={`w-4 h-4 rounded-full flex items-center justify-center text-sm ${selectedAnswer === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
            <span>{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PertanyaanKalimat;