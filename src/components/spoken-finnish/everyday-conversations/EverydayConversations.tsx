'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Feedback {
  grammar: string;
  spelling: string;
}

interface ConversationMessage {
  sender: 'user' | 'ai';
  message: string;
  translation?: string;
  suggestion?: string;
  correction?: string;
  correctionTranslation?: string;
  feedback?: Feedback;
}

const scenarios = [
  'Coffee Shop',
  'Restaurant',
  'Grocery Store',
  'Public Transport',
  'Airport / Train Station',
  'Hotel / Accommodation',
  'Health / Pharmacy / Doctor',
  'Bank / Post Office',
  'Friend / Casual Conversation',
  'Family Conversation',
  'Emergency / Help Needed'
];

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const Header = styled.header`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$primary ? '#0066cc' : '#e5e7eb')};
  color: ${(props) => (props.$primary ? 'white' : '#374151')};
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#1d4ed8' : '#d1d5db')};
  }
`;

const ConversationContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

const Message = styled.div<{ $sender: 'user' | 'ai' }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$sender === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: 1rem;
`;

const MessageBubble = styled.div<{ $sender: 'user' | 'ai' }>`
  background-color: ${(props) => (props.$sender === 'user' ? '#1d4ed8' : '#e5e7eb')};
  color: ${(props) => (props.$sender === 'user' ? 'white' : 'black')};
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  max-width: 70%;
  word-wrap: break-word;
`;

const TranslationBox = styled.div`
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #6b7280;
  font-style: italic;
`;

const SuggestionBox = styled.div`
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #16a34a;
  font-style: italic;
`;

const FeedbackPanel = styled.div`
  background-color: #fefce8;
  border: 1px solid #facc15;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #78350f;
`;

export default function EverydayConversations() {
  const [scenario, setScenario] = useState(scenarios[0]);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleFeedbacks, setVisibleFeedbacks] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleFeedback = (idx: number) => {
    setVisibleFeedbacks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) newSet.delete(idx);
      else newSet.add(idx);
      return newSet;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ConversationMessage = { sender: 'user', message: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/everyday-conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario, userMessage: input, history: messages })
      });

      if (!response.ok) throw new Error('Failed to get AI response');

      const data: ConversationMessage = await response.json();

      // ✅ Ensure we never display raw JSON accidentally
      const cleaned: ConversationMessage = {
        sender: 'ai',
        message: data.message || '',
        translation: data.translation || undefined,
        suggestion: data.suggestion || undefined,
        correction: data.correction || undefined,
        correctionTranslation: data.correctionTranslation || undefined,
        feedback: data.feedback || undefined
      };

      setMessages((prev) => [...prev, cleaned]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Conversation Practice</Title>
        <Subtitle>
          Choose a scenario and practice Finnish conversation with translations, corrections, and suggestions
        </Subtitle>
      </Header>

      <Select value={scenario} onChange={(e) => setScenario(e.target.value)}>
        {scenarios.map((sc, i) => (
          <option key={i} value={sc}>{sc}</option>
        ))}
      </Select>

      <ConversationContainer ref={scrollRef}>
        {messages.map((msg, idx) => (
          <Message key={idx} $sender={msg.sender}>
            <MessageBubble $sender={msg.sender}>{msg.message}</MessageBubble>

            {msg.translation && <TranslationBox>Translation: {msg.translation}</TranslationBox>}
            {msg.suggestion && <SuggestionBox>Suggestion: {msg.suggestion}</SuggestionBox>}

            {msg.correction && (
              <>
                <Button
                  type="button"
                  onClick={() => toggleFeedback(idx)}
                  style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}
                >
                  {visibleFeedbacks.has(idx) ? 'Hide Feedback' : 'Show Feedback'}
                </Button>
                {visibleFeedbacks.has(idx) && (
                  <FeedbackPanel>
                    <strong>Correction:</strong> {msg.correction}{' '}
                    {msg.correctionTranslation && <>({msg.correctionTranslation})</>} <br />
                    {msg.feedback?.grammar && (
                      <>
                        <strong>Grammar:</strong> {msg.feedback.grammar} <br />
                      </>
                    )}
                    {msg.feedback?.spelling && (
                      <>
                        <strong>Spelling:</strong> {msg.feedback.spelling}
                      </>
                    )}
                  </FeedbackPanel>
                )}
              </>
            )}
          </Message>
        ))}
      </ConversationContainer>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message in Finnish..."
          disabled={loading}
        />
        <Button type="submit" $primary disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Form>
    </Container>
  );
}
