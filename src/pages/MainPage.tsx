
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ElectronicComponents from '../components/ElectronicComponents';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Search, BookmarkIcon, Download } from 'lucide-react';
import { useBookmarks } from '../contexts/BookmarkContext';
import { toast } from 'sonner';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const MainPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addBookmark } = useBookmarks();

  const handleSearch = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const generateAIResponse = (query: string): string => {
    // Simple mock AI responses for electronics queries
    const responses = {
      'diode': 'A diode is a semiconductor device that allows current to flow in only one direction. The 1N4007 is a popular general-purpose rectifier diode with a peak inverse voltage of 1000V and forward current of 1A. It\'s commonly used in power supply circuits for AC to DC conversion.',
      'resistor': 'A resistor is a passive electrical component that creates resistance in the flow of electric current. Resistors are used to control current, divide voltage, and protect circuits from overcurrent. The value is determined by color bands or numerical markings.',
      'capacitor': 'A capacitor is a passive electronic component that stores electrical energy in an electric field. It consists of two conductive plates separated by an insulating material called a dielectric. Capacitors are used for filtering, timing, and energy storage in circuits.',
      'transistor': 'A transistor is a semiconductor device used to amplify or switch electronic signals. The most common types are NPN and PNP bipolar junction transistors (BJTs) and MOSFETs. They form the building blocks of modern electronic devices.',
      'default': 'I\'d be happy to help you learn about electronics! This component or concept is fundamental to understanding electronic circuits. Would you like me to explain specific applications or dive deeper into the theory?'
    };

    const key = Object.keys(responses).find(k => query.toLowerCase().includes(k)) || 'default';
    return responses[key as keyof typeof responses];
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputValue('');
  };

  const handleBookmark = (message: ChatMessage) => {
    const title = `Electronics Query - ${new Date().toLocaleDateString()}`;
    const description = message.content.substring(0, 100) + '...';
    addBookmark(title, description, message.content);
    toast.success('Saved to bookmarks!');
  };

  const handleDownloadPDF = (message: ChatMessage) => {
    // Mock PDF download functionality
    const blob = new Blob([message.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `electronics-info-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNewChat={handleNewChat} />
      
      <div className="container mx-auto px-4 py-8">
        {messages.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to VolectroSheets
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your AI-powered electronics learning companion
              </p>
              <ElectronicComponents />
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                {message.type === 'user' ? (
                  <div className="flex justify-end">
                    <div className="max-w-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl px-6 py-4">
                      <p>{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <Card className="max-w-3xl glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">AI</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-foreground leading-relaxed">{message.content}</p>
                            <div className="flex space-x-2 mt-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleBookmark(message)}
                                className="flex items-center space-x-2"
                              >
                                <BookmarkIcon className="w-4 h-4" />
                                <span>Bookmark</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDownloadPDF(message)}
                                className="flex items-center space-x-2"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download PDF</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <Card className="max-w-3xl glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {/* Search Bar */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex space-x-4">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about electronics... (e.g., 'Tell me about 1N4007 diode')"
                  className="flex-1 bg-white/50 dark:bg-black/50"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button
                  onClick={handleSearch}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
