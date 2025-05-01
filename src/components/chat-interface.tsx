import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://m-gpt-api.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage: Message = { role: "assistant", content: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="min-h-[600px] py-16 w-full bg-background">
      <div className="container flex flex-col h-[600px] max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            M-GPT : Chat with me to know more...
          </h2>
        </div>
        
        <div className="flex flex-col flex-1 border border-border/40 rounded-xl shadow-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-4 py-6">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-8">
                  Start a conversation by sending a message...
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground ml-8"
                        : "bg-muted/30 text-zinc-700 mr-8"
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">
                        {line.split(/\*\*(.*?)\*\*/).map((part, j) => 
                          j % 2 === 0 ? part : <strong key={j}>{part}</strong>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted/30 text-zinc-700 rounded-2xl p-4 shadow-md mr-8">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3 rounded-b-xl">
            <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto">
              <div className="flex gap-2 items-center bg-muted p-2 rounded-lg shadow-inner">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  size="icon"
                  className="rounded-lg shadow-lg hover:shadow-md transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 
